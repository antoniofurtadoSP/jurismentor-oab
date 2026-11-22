import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import JSZip from 'jszip';
import { legalDb } from './server/legalDb';
import {
  aiClient,
  analyzePerformanceErrorsWithGemini,
  answerTutorWithGrounding,
  generateGroundedQuestions,
  validateQuestionIndependently,
} from './server/aiEngine';
import {
  extractTextFromPdfBuffer,
  normalizeImportedJurisprudence,
  normalizeImportedQuestions,
  parseCsvRows,
  parseRawExamTextToQuestions,
  parseRawLegislationText,
} from './server/importParser';
import type { ImportJobRecord, LawArticle, LegislationNorm } from './src/types/knowledgeBase';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '15mb' }));

const apiKey = process.env.GEMINI_API_KEY;

// =========================================================================
// MÓDULO 5 & 12: PROFESSOR JURÍDICO IA EM 3 NÍVEIS COM CACHE E GROUNDING
// =========================================================================
app.post('/api/tutor', async (req, res) => {
  try {
    const { question, userQuery, context, mode, explanationLevel } = req.body;
    const result = await answerTutorWithGrounding({
      question,
      userQuery,
      context,
      mode: mode || 'free_doubt',
      explanationLevel: explanationLevel || 'intermediario',
    });
    res.json(result);
  } catch (error: any) {
    console.error('Erro no endpoint /api/tutor:', error);
    res.status(500).json({
      success: false,
      error: error?.message || 'Erro ao consultar o Professor Jurídico.',
    });
  }
});

// =========================================================================
// ANÁLISE INTELIGENTE DE ERROS E TÓPICOS PRIORITÁRIOS (GEMINI)
// =========================================================================
app.post('/api/performance/analyze-errors', async (req, res) => {
  try {
    const { overallAccuracy, totalAnswered, totalCorrect, rankedSubjects, missedQuestions } = req.body || {};
    const result = await analyzePerformanceErrorsWithGemini({
      overallAccuracy: Number(overallAccuracy || 0),
      totalAnswered: Number(totalAnswered || 0),
      totalCorrect: Number(totalCorrect || 0),
      rankedSubjects: Array.isArray(rankedSubjects) ? rankedSubjects : [],
      missedQuestions: Array.isArray(missedQuestions) ? missedQuestions : [],
    });

    if (!result.success || !result.analysis) {
      return res.status(result.statusCode || 500).json({
        success: false,
        error: result.error || 'Não foi possível gerar a análise de desempenho.',
      });
    }

    res.json({
      success: true,
      analysis: result.analysis,
    });
  } catch (error: any) {
    console.error('Erro no endpoint /api/performance/analyze-errors:', error);
    res.status(500).json({
      success: false,
      error: error?.message || 'Erro interno ao analisar erros de desempenho.',
    });
  }
});

// =========================================================================
// TTS NEURAL COM STREAMING PCM, CACHE, PROTEÇÃO DE COTA E SANITIZAÇÃO
// =========================================================================
type TtsFailureReason = 'quota' | 'auth' | 'missing_key' | 'unavailable';

interface TtsFailureInfo {
  reason: TtsFailureReason;
  retryAfterSeconds?: number;
  message: string;
  rawError?: string;
}

function createWavFromPcm(pcmBuffer: Buffer, sampleRate = 24000, numChannels = 1, bitsPerSample = 16): Buffer {
  const header = Buffer.alloc(44);
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = pcmBuffer.length;

  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size (PCM)
  header.writeUInt16LE(1, 20); // AudioFormat (1 = PCM)
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmBuffer]);
}

function sanitizeTtsText(text: string): string {
  return text
    .replace(/^fale com entonação[^\n\:\.]*[\n\:\.]+\s*/i, '')
    .replace(/^[\[\(]?instru[çc][ãa]o[^\]\)]*[\]\)]*:?\s*/i, '')
    .trim()
    .slice(0, 1200);
}

function getTtsCache(): Map<string, string> {
  if (!(globalThis as any).__ttsCache) {
    (globalThis as any).__ttsCache = new Map<string, string>();
  }
  return (globalThis as any).__ttsCache;
}

function setTtsCacheEntry(cacheKey: string, audioUrl: string): void {
  const cache = getTtsCache();
  if (cache.size > 200) {
    const firstKey = cache.keys().next().value;
    if (firstKey) cache.delete(firstKey);
  }
  cache.set(cacheKey, audioUrl);
}

function getRemainingTtsCooldownSeconds(): number {
  const until = Number((globalThis as any).__ttsQuotaCooldownUntil || 0);
  if (until > Date.now()) {
    return Math.max(1, Math.ceil((until - Date.now()) / 1000));
  }
  return 0;
}

function setTtsQuotaCooldown(seconds = 60): number {
  const clamped = Math.max(20, Math.min(180, Math.round(seconds)));
  (globalThis as any).__ttsQuotaCooldownUntil = Date.now() + clamped * 1000;
  return clamped;
}

function classifyTtsError(err: any): TtsFailureInfo {
  const status = Number(err?.status || err?.code || 0);
  const msg = String(err?.message || '');
  let serialized = '';
  try {
    serialized = typeof err === 'string' ? err : JSON.stringify(err || {});
  } catch {
    serialized = msg;
  }
  const combined = `${status} ${msg} ${serialized}`.toLowerCase();

  if (
    status === 429 ||
    combined.includes('429') ||
    combined.includes('resource_exhausted') ||
    combined.includes('quota') ||
    combined.includes('rate limit') ||
    combined.includes('too many requests')
  ) {
    let retryAfterSeconds = 60;
    const retryMatch = combined.match(/retry[^\d]{0,16}(\d+)\s*s/);
    if (retryMatch) {
      const parsed = Number(retryMatch[1]);
      if (Number.isFinite(parsed) && parsed > 0) {
        retryAfterSeconds = Math.max(20, Math.min(180, parsed));
      }
    }
    return {
      reason: 'quota',
      retryAfterSeconds,
      message: 'Limite temporário de requisições da voz natural (API Gemini) atingido.',
      rawError: msg || serialized,
    };
  }

  if (
    status === 401 ||
    status === 403 ||
    combined.includes('permission_denied') ||
    combined.includes('api_key_invalid') ||
    combined.includes('api key not valid') ||
    combined.includes('unauthenticated')
  ) {
    return {
      reason: 'auth',
      message: 'Chave da API Gemini inválida ou sem permissão para voz natural.',
      rawError: msg || serialized,
    };
  }

  return {
    reason: 'unavailable',
    message: 'Serviço de voz natural temporariamente indisponível.',
    rawError: msg || serialized,
  };
}

function extractPcmFromWav(wavBuffer: Buffer): Buffer {
  if (wavBuffer.length >= 44 && wavBuffer.subarray(0, 4).toString('ascii') === 'RIFF') {
    const dataIdx = wavBuffer.indexOf(Buffer.from('data'), 12);
    if (dataIdx >= 12 && dataIdx + 8 <= wavBuffer.length) {
      return wavBuffer.subarray(dataIdx + 8);
    }
    return wavBuffer.subarray(44);
  }
  return wavBuffer;
}

function splitLongSentence(sentence: string, maxChars: number): [string, string] | null {
  if (sentence.length <= maxChars) return null;
  const minPos = Math.min(45, Math.floor(maxChars * 0.45));
  const candidateSlice = sentence.slice(0, maxChars + 1);
  let splitIdx = -1;
  for (const sep of ['. ', '! ', '? ', '; ', ': ', ' — ', ', ']) {
    const idx = candidateSlice.lastIndexOf(sep);
    if (idx >= minPos) {
      splitIdx = idx + sep.trimEnd().length;
      break;
    }
  }
  if (splitIdx === -1) {
    const spaceIdx = candidateSlice.lastIndexOf(' ');
    if (spaceIdx >= minPos) {
      splitIdx = spaceIdx;
    }
  }
  if (splitIdx > 0 && splitIdx < sentence.length - 10) {
    const first = sentence.slice(0, splitIdx).trim();
    const rest = sentence.slice(splitIdx).trim();
    if (first && rest) return [first, rest];
  }
  return null;
}

function splitTextForTts(text: string, firstSegmentMax = 180, nextSegmentMax = 520): string[] {
  if (text.length <= firstSegmentMax) return [text];

  const rawSentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const sentences: string[] = [];
  for (const s of rawSentences) {
    const trimmed = s.trim();
    if (trimmed) sentences.push(trimmed);
  }

  if (sentences.length > 0 && sentences[0].length > firstSegmentMax + 35) {
    const splitFirst = splitLongSentence(sentences[0], firstSegmentMax + 20);
    if (splitFirst) {
      sentences.splice(0, 1, splitFirst[0], splitFirst[1]);
    }
  }

  const segments: string[] = [];
  let current = '';

  for (const sentence of sentences) {
    const limit = segments.length === 0 ? firstSegmentMax : nextSegmentMax;
    if (!current) {
      if (sentence.length > limit && segments.length > 0) {
        const splitNext = splitLongSentence(sentence, limit);
        if (splitNext) {
          segments.push(splitNext[0]);
          current = splitNext[1];
          continue;
        }
      }
      current = sentence;
    } else if (current.length + 1 + sentence.length <= limit) {
      current = `${current} ${sentence}`;
    } else {
      segments.push(current);
      current = sentence;
    }
  }
  if (current) segments.push(current);
  return segments.length > 0 ? segments : [text];
}

async function generateUnaryTtsWav(
  cleanText: string,
  selectedVoice: string
): Promise<{ buffer: Buffer | null; failure?: TtsFailureInfo }> {
  if (!aiClient) {
    return {
      buffer: null,
      failure: {
        reason: 'missing_key',
        message: 'Gemini API key não configurada. Usando síntese local.',
      },
    };
  }

  const remainingCooldown = getRemainingTtsCooldownSeconds();
  if (remainingCooldown > 0) {
    return {
      buffer: null,
      failure: {
        reason: 'quota',
        retryAfterSeconds: remainingCooldown,
        message: `Limite temporário da API Gemini ativo. Aguarde cerca de ${remainingCooldown}s para tentar novamente.`,
      },
    };
  }

  const modelsToTry = ['gemini-3.8-flash-lite-tts', 'gemini-3.8-flash-tts'];
  let lastFailure: TtsFailureInfo | undefined;

  for (const model of modelsToTry) {
    try {
      const ttsResponse = await aiClient.models.generateContent({
        model,
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: cleanText,
                speechMetadata: {
                  style: 'Professor de Direito brasileiro, tom humano natural, acolhedor, amigável e pausado',
                },
              } as any,
            ],
          },
        ],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: selectedVoice },
            },
          },
        },
      });

      const base64Audio = ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        return { buffer: Buffer.from(base64Audio, 'base64') };
      }
      lastFailure = {
        reason: 'unavailable',
        message: 'Modelo não retornou dados de áudio.',
      };
    } catch (unaryErr: any) {
      const classified = classifyTtsError(unaryErr);
      lastFailure = classified;
      console.warn(`[TTS] Erro com modelo ${model} (${classified.reason}):`, unaryErr?.message || unaryErr);

      if (classified.reason === 'quota') {
        const applied = setTtsQuotaCooldown(classified.retryAfterSeconds ?? 60);
        return {
          buffer: null,
          failure: {
            ...classified,
            retryAfterSeconds: applied,
          },
        };
      }

      if (classified.reason === 'auth') {
        return { buffer: null, failure: classified };
      }
    }
  }

  return {
    buffer: null,
    failure: lastFailure || {
      reason: 'unavailable',
      message: 'Não foi possível gerar áudio neural no momento.',
    },
  };
}

app.post('/api/tts/stream', async (req, res) => {
  const sendLine = (payload: Record<string, unknown>) => {
    if (!res.writableEnded) {
      res.write(`${JSON.stringify(payload)}\n`);
    }
  };

  try {
    const { text, voice = 'Puck', bypassCooldown = false } = req.body || {};

    if (!aiClient) {
      return res.json({
        success: false,
        useLocalFallback: true,
        reason: 'missing_key',
        message: 'Gemini API key não configurada no servidor. Usando síntese local.',
      });
    }

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Texto obrigatório.' });
    }

    const cleanText = sanitizeTtsText(text);
    const selectedVoice = voice || 'Puck';
    const cacheKey = `${selectedVoice}_${cleanText}`;
    const cache = getTtsCache();

    if (cache.has(cacheKey)) {
      res.setHeader('Content-Type', 'application/x-ndjson; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('X-Accel-Buffering', 'no');
      sendLine({ type: 'wav', audioUrl: cache.get(cacheKey), cached: true });
      sendLine({ type: 'done' });
      return res.end();
    }

    if (bypassCooldown) {
      (globalThis as any).__ttsQuotaCooldownUntil = 0;
    }

    const remainingCooldown = getRemainingTtsCooldownSeconds();
    if (remainingCooldown > 0) {
      return res.json({
        success: false,
        useLocalFallback: true,
        reason: 'quota',
        retryAfterSeconds: remainingCooldown,
        message: `Limite temporário da API Gemini ativo. Tente a voz natural novamente em ~${remainingCooldown}s.`,
      });
    }

    res.setHeader('Content-Type', 'application/x-ndjson; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Accel-Buffering', 'no');

    const segments = splitTextForTts(cleanText, 180, 520);

    // Texto curto (1 segmento): gera direto e envia WAV completo com menor overhead
    if (segments.length === 1) {
      const result = await generateUnaryTtsWav(segments[0], selectedVoice);
      if (result.buffer) {
        const audioUrl = `data:audio/wav;base64,${result.buffer.toString('base64')}`;
        setTtsCacheEntry(cacheKey, audioUrl);
        sendLine({ type: 'wav', audioUrl });
        sendLine({ type: 'done' });
        return res.end();
      }
      sendLine({
        type: 'fallback',
        reason: result.failure?.reason || 'unavailable',
        retryAfterSeconds: result.failure?.retryAfterSeconds,
        message: result.failure?.message || 'Nenhum áudio retornado pelo modelo.',
      });
      return res.end();
    }

    // Texto longo (múltiplos segmentos): gera sequencialmente começando pelo bloco inicial
    // com menor número de chamadas para preservar cota da API Gemini
    let clientClosed = false;
    res.on('close', () => {
      clientClosed = true;
    });

    sendLine({ type: 'meta', totalSegments: segments.length });

    const pcmParts: Buffer[] = [];
    let abortedDueToQuotaOrAuth: TtsFailureInfo | null = null;

    for (let i = 0; i < segments.length; i++) {
      if (clientClosed || res.writableEnded) break;
      const result = await generateUnaryTtsWav(segments[i], selectedVoice);
      if (clientClosed || res.writableEnded) break;
      if (!result.buffer) {
        if (result.failure?.reason === 'quota' || result.failure?.reason === 'auth') {
          abortedDueToQuotaOrAuth = result.failure;
          if (pcmParts.length === 0) {
            sendLine({
              type: 'fallback',
              reason: result.failure.reason,
              retryAfterSeconds: result.failure.retryAfterSeconds,
              message: result.failure.message,
            });
            return res.end();
          }
          break;
        }
        if (pcmParts.length === 0) {
          sendLine({
            type: 'fallback',
            reason: result.failure?.reason || 'unavailable',
            retryAfterSeconds: result.failure?.retryAfterSeconds,
            message: result.failure?.message || 'Nenhum áudio retornado pelo modelo.',
          });
          return res.end();
        }
        continue;
      }
      const pcm = extractPcmFromWav(result.buffer);
      if (pcm.length >= 2) {
        const alignedPcm = pcm.length % 2 === 0 ? pcm : pcm.subarray(0, pcm.length - 1);
        pcmParts.push(alignedPcm);
        sendLine({
          type: 'pcm',
          index: i,
          total: segments.length,
          data: alignedPcm.toString('base64'),
        });
      }
    }

    if (clientClosed || res.writableEnded) {
      return;
    }

    if (pcmParts.length === 0) {
      sendLine({
        type: 'fallback',
        reason: abortedDueToQuotaOrAuth?.reason || 'unavailable',
        retryAfterSeconds: abortedDueToQuotaOrAuth?.retryAfterSeconds,
        message: abortedDueToQuotaOrAuth?.message || 'Nenhum chunk de áudio retornado pelo modelo.',
      });
      return res.end();
    }

    // Só armazena no cache completo se todos os segmentos foram gerados sem corte por cota
    if (!abortedDueToQuotaOrAuth && pcmParts.length === segments.length) {
      const fullWav = createWavFromPcm(Buffer.concat(pcmParts), 24000, 1, 16);
      setTtsCacheEntry(cacheKey, `data:audio/wav;base64,${fullWav.toString('base64')}`);
    }
    sendLine({ type: 'done' });
    return res.end();
  } catch (err: any) {
    const classified = classifyTtsError(err);
    if (classified.reason === 'quota') {
      setTtsQuotaCooldown(classified.retryAfterSeconds ?? 60);
    }
    console.warn('[TTS Stream] Erro na geração neural:', err?.message || err);
    if (!res.headersSent) {
      return res.status(200).json({
        success: false,
        useLocalFallback: true,
        reason: classified.reason,
        retryAfterSeconds: classified.retryAfterSeconds,
        message: classified.message,
        error: err?.message || 'Falha no stream TTS.',
      });
    }
    sendLine({
      type: 'fallback',
      reason: classified.reason,
      retryAfterSeconds: classified.retryAfterSeconds,
      message: classified.message,
      error: err?.message || 'Falha no stream TTS.',
    });
    return res.end();
  }
});

app.post('/api/tts', async (req, res) => {
  try {
    const { text, voice = 'Puck', bypassCooldown = false } = req.body || {};

    if (!aiClient) {
      return res.status(200).json({
        success: false,
        useLocalFallback: true,
        reason: 'missing_key',
        message: 'Gemini API key não configurada no servidor. Usando síntese local.',
      });
    }

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Texto obrigatório.' });
    }

    const cleanText = sanitizeTtsText(text);
    const selectedVoice = voice || 'Puck';
    const cacheKey = `${selectedVoice}_${cleanText}`;
    const cache = getTtsCache();

    if (cache.has(cacheKey)) {
      return res.json({
        success: true,
        audioUrl: cache.get(cacheKey),
        format: 'wav',
        cached: true,
      });
    }

    if (bypassCooldown) {
      (globalThis as any).__ttsQuotaCooldownUntil = 0;
    }

    const result = await generateUnaryTtsWav(cleanText, selectedVoice);
    if (result.buffer) {
      const audioUrl = `data:audio/wav;base64,${result.buffer.toString('base64')}`;
      setTtsCacheEntry(cacheKey, audioUrl);

      return res.json({
        success: true,
        audioUrl,
        format: 'wav',
      });
    }

    res.status(200).json({
      success: false,
      useLocalFallback: true,
      reason: result.failure?.reason || 'unavailable',
      retryAfterSeconds: result.failure?.retryAfterSeconds,
      error: result.failure?.rawError || result.failure?.message || 'Sem áudio retornado pelo modelo',
      message: result.failure?.message || 'Modelo não retornou dados de áudio, usando fallback local.',
    });
  } catch (err: any) {
    const classified = classifyTtsError(err);
    if (classified.reason === 'quota') {
      setTtsQuotaCooldown(classified.retryAfterSeconds ?? 60);
    }
    console.warn('Aviso na geração de áudio neural Gemini TTS:', err?.message);
    res.status(200).json({
      success: false,
      useLocalFallback: true,
      reason: classified.reason,
      retryAfterSeconds: classified.retryAfterSeconds,
      message: classified.message,
      error: err?.message,
    });
  }
});

// =========================================================================
// MÓDULO 3: GERAÇÃO DE QUESTÕES INÉDITAS FUNDAMENTADAS (COMPATÍVEL)
// =========================================================================
app.post('/api/questions/auto-update', async (req, res) => {
  try {
    const {
      subject = 'Direito Tributário',
      targetExamType = 'OAB',
      count = 3,
      topic,
      subtopic,
      difficultyLevel = 2,
    } = req.body;

    const result = await generateGroundedQuestions({
      discipline: subject,
      topic,
      subtopic,
      difficultyLevel,
      count,
      targetExamType,
    });

    if (result.blocked) {
      return res.status(200).json({
        success: false,
        blocked: true,
        reason: result.reason,
        error:
          'Geração bloqueada por insuficiência de fontes verificadas (legislação ou jurisprudência) para esta disciplina/assunto no banco jurídico.',
        questions: [],
      });
    }

    res.json({
      success: result.success,
      source: result.source,
      groundingSummary: result.groundingSummary,
      questions: result.questions,
    });
  } catch (error: any) {
    console.error('Erro no endpoint /api/questions/auto-update:', error);
    res.status(500).json({
      success: false,
      error: error?.message || 'Erro ao gerar questões jurídicas fundamentadas.',
    });
  }
});

// =========================================================================
// MÓDULOS 2, 8, 9, 10, 11 E 12: API DO BANCO DE CONHECIMENTO JURÍDICO
// =========================================================================

// Overview & métricas da base + IA
app.get('/api/kb/overview', (_req, res) => {
  res.json({ success: true, ...legalDb.getOverview() });
});

// Configuração de qualidade e distribuição de dificuldade
app.put('/api/kb/config', (req, res) => {
  const updated = legalDb.updateQualityConfig(req.body || {});
  res.json({ success: true, qualityConfig: updated });
});

// Legislação: consulta normas e artigos (com versões históricas)
app.get('/api/kb/legislation', (req, res) => {
  const { query, discipline, status, normId } = req.query as Record<string, string | undefined>;
  const data = legalDb.searchLegislation({ query, discipline, status, normId });
  res.json({ success: true, ...data });
});

app.post('/api/kb/legislation/norm', (req, res) => {
  const body = req.body as Partial<LegislationNorm>;
  if (!body.title || !body.shortName || !body.discipline) {
    return res.status(400).json({ success: false, error: 'Título, sigla e disciplina são obrigatórios.' });
  }
  const today = new Date().toISOString().slice(0, 10);
  const norm: LegislationNorm = {
    id: body.id || `norm_${Date.now()}`,
    discipline: body.discipline,
    title: body.title,
    shortName: body.shortName,
    numberAndYear: body.numberAndYear || body.shortName,
    publicationDate: body.publicationDate || today,
    status: body.status || 'VIGENTE',
    officialSourceUrl: body.officialSourceUrl || 'https://www.planalto.gov.br/ccivil_03/',
    lastVerifiedAt: today,
    amendmentsHistory: body.amendmentsHistory || [],
    revokedNote: body.revokedNote,
  };
  const saved = legalDb.upsertNorm(norm);
  res.json({ success: true, norm: saved });
});

app.post('/api/kb/legislation/article', (req, res) => {
  const body = req.body as Partial<LawArticle>;
  if (!body.normId || !body.articleNumber || !body.caput || !body.discipline) {
    return res.status(400).json({
      success: false,
      error: 'normId, articleNumber, caput e discipline são obrigatórios.',
    });
  }
  const today = new Date().toISOString().slice(0, 10);
  const article: LawArticle = {
    id: body.id || `art_${body.normId}_${Date.now()}`,
    normId: body.normId,
    normShortName: body.normShortName || body.normId.toUpperCase(),
    discipline: body.discipline,
    subject: body.subject || 'Dispositivo Legal',
    articleNumber: body.articleNumber,
    caput: body.caput,
    paragraphs: body.paragraphs,
    items: body.items,
    status: body.status || 'VIGENTE',
    keywords: body.keywords || [body.articleNumber, body.subject || ''],
    historicalVersions: body.historicalVersions,
    amendmentNote: body.amendmentNote,
    officialSourceUrl: body.officialSourceUrl || 'https://www.planalto.gov.br/ccivil_03/',
    lastVerifiedAt: today,
  };
  const saved = legalDb.upsertArticle(article);
  res.json({ success: true, article: saved });
});

// Jurisprudência: consulta e cadastro
app.get('/api/kb/jurisprudence', (req, res) => {
  const { query, tribunal, category, status, discipline } = req.query as Record<string, string | undefined>;
  const records = legalDb.searchJurisprudence({ query, tribunal, category, status, discipline });
  res.json({ success: true, records });
});

app.post('/api/kb/jurisprudence', (req, res) => {
  const body = req.body;
  if (!body?.identification || !body?.thesis || !body?.discipline) {
    return res.status(400).json({
      success: false,
      error: 'Identificação, tese e disciplina são obrigatórias.',
    });
  }
  const today = new Date().toISOString().slice(0, 10);
  const saved = legalDb.upsertJurisprudence({
    id: body.id || `jur_${Date.now()}`,
    tribunal: body.tribunal || 'STF',
    category: body.category || 'TESE',
    identification: body.identification,
    discipline: body.discipline,
    subject: body.subject || 'Jurisprudência',
    thesis: body.thesis,
    summary: body.summary || body.thesis,
    judgmentDate: body.judgmentDate || today,
    publicationDate: body.publicationDate || today,
    officialSourceUrl: body.officialSourceUrl || 'https://portal.stf.jus.br/',
    status: body.status || 'VIGENTE',
    divergenceNote: body.divergenceNote,
    supersededBy: body.supersededBy,
    lastVerifiedAt: today,
  });
  res.json({ success: true, record: saved });
});

// Questões: consulta avançada, criação manual, edição, mudança de status e validação em 2 estágios
app.get('/api/kb/questions', (req, res) => {
  const { discipline, topic, originType, status, difficultyLevel, year, examNumber, query } = req.query as Record<
    string,
    string | undefined
  >;
  const questions = legalDb.getQuestions({
    discipline,
    topic,
    originType,
    status,
    difficultyLevel: difficultyLevel ? Number(difficultyLevel) : undefined,
    year: year ? Number(year) : undefined,
    examNumber,
    query,
  });
  res.json({ success: true, total: questions.length, questions });
});

app.post('/api/kb/questions', async (req, res) => {
  const body = req.body;
  if (!body?.statement || !Array.isArray(body?.options) || body.options.length < 4) {
    return res.status(400).json({
      success: false,
      error: 'Enunciado e 4 alternativas são obrigatórios.',
    });
  }

  const dup = legalDb.detectDuplicateQuestion(body.statement);
  if (dup.isDuplicate && !body.allowDuplicate) {
    return res.status(409).json({
      success: false,
      error: `Questão muito similar à questão ${dup.matchedId} (${Math.round(dup.similarity * 100)}% de similaridade).`,
      matchedId: dup.matchedId,
    });
  }

  const saved = legalDb.upsertQuestion({
    ...body,
    id: body.id || `manual_${Date.now()}`,
    originType: body.originType || 'AUTORAL_PROFESSOR',
  });
  const validation = await validateQuestionIndependently(saved, false);
  const finalQ = legalDb.setQuestionValidation(
    saved.id,
    body.validationStatus || validation.status,
    validation.report
  );
  res.json({ success: true, question: finalQ || saved });
});

app.put('/api/kb/questions/:id', async (req, res) => {
  const existing = legalDb.getQuestionById(req.params.id);
  if (!existing) {
    return res.status(404).json({ success: false, error: 'Questão não encontrada.' });
  }
  const merged = {
    ...existing,
    ...req.body,
    id: existing.id,
  };
  const saved = legalDb.upsertQuestion(merged);
  res.json({ success: true, question: saved });
});

app.patch('/api/kb/questions/:id/status', (req, res) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ success: false, error: 'Status obrigatório.' });
  }
  const updated = legalDb.setQuestionValidation(req.params.id, status);
  if (!updated) {
    return res.status(404).json({ success: false, error: 'Questão não encontrada.' });
  }
  res.json({ success: true, question: updated });
});

app.post('/api/kb/questions/:id/validate', async (req, res) => {
  const q = legalDb.getQuestionById(req.params.id);
  if (!q) {
    return res.status(404).json({ success: false, error: 'Questão não encontrada.' });
  }
  const runAiSecondPass = req.body?.runAiSecondPass !== false;
  const validation = await validateQuestionIndependently(q, runAiSecondPass);
  const updated = legalDb.setQuestionValidation(q.id, validation.status, validation.report);
  res.json({ success: true, question: updated, validation });
});

app.post('/api/kb/questions/generate-grounded', async (req, res) => {
  try {
    const result = await generateGroundedQuestions(req.body || {});
    res.json(result);
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err?.message || 'Erro ao gerar questões fundamentadas.',
    });
  }
});

// =========================================================================
// MÓDULO 2.4: IMPORTADOR DE PDF, CSV, JSON E TXT COM ANTIDUPLICIDADE
// =========================================================================
app.post('/api/kb/import/extract-pdf', async (req, res) => {
  try {
    const { base64Data } = req.body;
    if (!base64Data || typeof base64Data !== 'string') {
      return res.status(400).json({ success: false, error: 'base64Data obrigatório.' });
    }
    const cleanB64 = base64Data.includes(',') ? base64Data.split(',')[1] : base64Data;
    const buffer = Buffer.from(cleanB64, 'base64');
    const extracted = await extractTextFromPdfBuffer(buffer);
    res.json({ success: true, ...extracted });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      error: `Falha ao extrair texto do PDF: ${err?.message || 'arquivo inválido'}`,
    });
  }
});

app.post('/api/kb/import/process', async (req, res) => {
  try {
    const {
      importType = 'PROVA_OAB',
      format = 'TXT',
      fileName = 'importacao_manual',
      content = '',
      dryRun = false,
      metadata = {},
    } = req.body;

    if (!content || typeof content !== 'string' || content.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Conteúdo vazio ou insuficiente para processamento.',
      });
    }

    const errors: string[] = [];
    let parsedCount = 0;
    let insertedCount = 0;
    let duplicatesSkipped = 0;
    let previewItems: any[] = [];

    if (importType === 'PROVA_OAB') {
      let candidateQuestions: any[] = [];
      if (format === 'JSON') {
        const raw = JSON.parse(content);
        const list = Array.isArray(raw) ? raw : raw.questions || [];
        const norm = normalizeImportedQuestions(list, {
          originType: 'OFICIAL_OAB',
          examNumber: metadata.examNumber,
          year: Number(metadata.year || 2024),
          officialSourceUrl: metadata.officialSourceUrl,
        });
        candidateQuestions = norm.questions;
        errors.push(...norm.errors);
      } else if (format === 'CSV') {
        const rows = parseCsvRows(content);
        const norm = normalizeImportedQuestions(rows, {
          originType: 'OFICIAL_OAB',
          examNumber: metadata.examNumber,
          year: Number(metadata.year || 2024),
          officialSourceUrl: metadata.officialSourceUrl,
        });
        candidateQuestions = norm.questions;
        errors.push(...norm.errors);
      } else {
        const rawRes = parseRawExamTextToQuestions(content, {
          examNumber: metadata.examNumber || 'Exame OAB Importado',
          year: Number(metadata.year || 2024),
          edition: metadata.edition || `${metadata.year || 2024}.1`,
          defaultDiscipline: metadata.discipline,
          officialSourceUrl: metadata.officialSourceUrl,
        });
        candidateQuestions = rawRes.parsed;
        errors.push(...rawRes.errors);
      }

      parsedCount = candidateQuestions.length;
      const marked = candidateQuestions.map(q => {
        const dup = legalDb.detectDuplicateQuestion(q.statement);
        return { ...q, _isDuplicate: dup.isDuplicate, _matchedId: dup.matchedId };
      });
      duplicatesSkipped = marked.filter(m => m._isDuplicate).length;
      previewItems = marked;

      if (!dryRun) {
        for (const item of marked) {
          if (item._isDuplicate) continue;
          const { _isDuplicate, _matchedId, ...cleanQ } = item;
          const saved = legalDb.upsertQuestion(cleanQ);
          const validation = await validateQuestionIndependently(saved, false);
          legalDb.setQuestionValidation(saved.id, saved.validationStatus || validation.status, validation.report);
          insertedCount += 1;
        }
        if (insertedCount > 0) {
          legalDb.registerOfficialExam({
            id: `exam_imp_${Date.now()}`,
            examNumber: metadata.examNumber || 'Exame OAB Importado',
            year: Number(metadata.year || 2024),
            edition: metadata.edition || `${metadata.year || 2024}.1`,
            board: 'FGV',
            officialSourceUrl: metadata.officialSourceUrl || 'https://oab.fgv.br/',
            rightsVerified: Boolean(metadata.rightsVerified ?? true),
            rightsNote: metadata.rightsNote || 'Importação administrativa para estudo individual.',
            questionCount: insertedCount,
            importedAt: new Date().toISOString(),
          });
        }
      }
    } else if (importType === 'LEGISLACAO') {
      let articles: LawArticle[] = [];
      const normId = metadata.normId || `norm_imp_${Date.now()}`;
      const normShort = metadata.normShortName || 'Norma Importada';
      const discipline = metadata.discipline || 'Direito Constitucional';

      if (format === 'JSON') {
        const raw = JSON.parse(content);
        const list = Array.isArray(raw) ? raw : raw.articles || [];
        articles = list.map((a: any, i: number) => ({
          id: a.id || `art_${normId}_${i}_${Date.now()}`,
          normId: a.normId || normId,
          normShortName: a.normShortName || normShort,
          discipline: a.discipline || discipline,
          subject: a.subject || metadata.subject || 'Dispositivo Normativo',
          articleNumber: a.articleNumber || `Art. ${i + 1}`,
          caput: a.caput || '',
          paragraphs: a.paragraphs,
          items: a.items,
          status: a.status || 'VIGENTE',
          keywords: a.keywords || [normShort],
          officialSourceUrl: a.officialSourceUrl || metadata.officialSourceUrl || 'https://www.planalto.gov.br/ccivil_03/',
          lastVerifiedAt: new Date().toISOString().slice(0, 10),
        }));
      } else {
        articles = parseRawLegislationText(content, {
          normId,
          normShortName: normShort,
          discipline,
          subject: metadata.subject || 'Legislação Importada',
          officialSourceUrl: metadata.officialSourceUrl || 'https://www.planalto.gov.br/ccivil_03/',
        });
      }

      parsedCount = articles.length;
      previewItems = articles;

      if (!dryRun && articles.length > 0) {
        if (metadata.normTitle || metadata.normShortName) {
          legalDb.upsertNorm({
            id: normId,
            discipline,
            title: metadata.normTitle || normShort,
            shortName: normShort,
            numberAndYear: metadata.numberAndYear || normShort,
            publicationDate: new Date().toISOString().slice(0, 10),
            status: 'VIGENTE',
            officialSourceUrl: metadata.officialSourceUrl || 'https://www.planalto.gov.br/ccivil_03/',
            lastVerifiedAt: new Date().toISOString().slice(0, 10),
            amendmentsHistory: [],
          });
        }
        for (const art of articles) {
          legalDb.upsertArticle(art);
          insertedCount += 1;
        }
      }
    } else if (importType === 'JURISPRUDENCIA') {
      const list =
        format === 'JSON'
          ? (() => {
              const raw = JSON.parse(content);
              return Array.isArray(raw) ? raw : raw.records || [];
            })()
          : format === 'CSV'
          ? parseCsvRows(content)
          : [];

      const norm = normalizeImportedJurisprudence(list);
      parsedCount = norm.records.length;
      errors.push(...norm.errors);
      previewItems = norm.records;

      if (!dryRun) {
        for (const rec of norm.records) {
          legalDb.upsertJurisprudence(rec);
          insertedCount += 1;
        }
      }
    }

    if (!dryRun) {
      const job: ImportJobRecord = {
        id: `job_${Date.now()}`,
        importType,
        format,
        fileName,
        totalParsed: parsedCount,
        insertedCount,
        duplicatesSkipped,
        failedCount: errors.length,
        errors: errors.slice(0, 15),
        status: errors.length > 0 && insertedCount === 0 ? 'FALHA' : errors.length > 0 ? 'CONCLUIDO_COM_AVISOS' : 'CONCLUIDO',
        createdAt: new Date().toISOString(),
      };
      legalDb.logImportJob(job);
    }

    res.json({
      success: true,
      dryRun,
      totalParsed: parsedCount,
      insertedCount,
      duplicatesSkipped,
      errors,
      previewItems: previewItems.slice(0, 30),
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      error: `Erro no processamento da importação: ${err?.message || 'formato inválido'}`,
    });
  }
});

app.get('/api/kb/import/jobs', (_req, res) => {
  res.json({ success: true, jobs: legalDb.getImportJobs() });
});

// =========================================================================
// MÓDULO 11: RASTREAMENTO DE ATUALIZAÇÕES LEGISLATIVAS E JURISPRUDENCIAIS
// =========================================================================
app.get('/api/kb/updates', (_req, res) => {
  res.json({ success: true, updates: legalDb.getUpdateLogs() });
});

app.post('/api/kb/updates', (req, res) => {
  const body = req.body;
  if (!body?.entityType || !body?.entityId || !body?.updatedContent || !body?.source) {
    return res.status(400).json({
      success: false,
      error: 'entityType, entityId, updatedContent e source são obrigatórios.',
    });
  }

  const log = legalDb.recordLegalUpdate({
    entityType: body.entityType,
    entityId: body.entityId,
    entityLabel: body.entityLabel || body.entityId,
    previousContent: body.previousContent || '',
    updatedContent: body.updatedContent,
    source: body.source,
    affectedDevices: Array.isArray(body.affectedDevices) ? body.affectedDevices : [],
    newStatus: body.newStatus,
  });

  res.json({ success: true, log });
});

// Exportação completa do código-fonte do projeto em ZIP (para rodar no PC ou publicar fora do AI Studio)
app.get('/api/export-project-zip', async (_req, res) => {
  try {
    const rootDir = path.resolve(__dirname);
    const zip = new JSZip();

    const EXCLUDED_DIRS = new Set([
      'node_modules',
      'dist',
      'build',
      'coverage',
      '.git',
      '.aistudio',
    ]);

    const collectFiles = (currentDir: string) => {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        const relPath = path.relative(rootDir, fullPath).replace(/\\/g, '/');

        if (entry.isDirectory()) {
          if (EXCLUDED_DIRS.has(entry.name)) continue;
          if (relPath === 'public/assets/aistudio' || relPath.startsWith('public/assets/aistudio/')) continue;
          collectFiles(fullPath);
        } else if (entry.isFile()) {
          if (
            entry.name === '.DS_Store' ||
            entry.name.endsWith('.log') ||
            entry.name === '.env' ||
            (entry.name.startsWith('.env.') && entry.name !== '.env.example')
          ) {
            continue;
          }
          const content = fs.readFileSync(fullPath);
          zip.file(relPath, content);
        }
      }
    };

    collectFiles(rootDir);

    if (!zip.file('LEIA-ME-INSTALACAO.txt')) {
      zip.file(
        'LEIA-ME-INSTALACAO.txt',
        [
          'JurisMentor - Guia Rápido para Rodar no PC ou Servidor Próprio',
          '================================================================',
          '',
          '1. Instale o Node.js 20+ (https://nodejs.org/).',
          '2. Extraia este ZIP em uma pasta e abra o terminal dentro dela.',
          '3. Crie um arquivo chamado .env (baseado no .env.example) contendo:',
          '   GEMINI_API_KEY="SUA_CHAVE_AQUI"',
          '4. Execute:',
          '   npm install',
          '   npm run dev        (para rodar localmente em http://localhost:3000)',
          '',
          'Para produção (Render.com, Cloud Run, Railway, VPS):',
          '   Build Command: npm install && npm run build',
          '   Start Command: npm start',
          '   Variável de ambiente obrigatória: GEMINI_API_KEY',
          '',
        ].join('\n')
      );
    }

    const zipBuffer = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    });

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="jurismentor-oab-projeto.zip"');
    res.setHeader('Cache-Control', 'no-store');
    res.send(zipBuffer);
  } catch (error: any) {
    console.error('Erro ao gerar ZIP do projeto:', error);
    res.status(500).json({
      success: false,
      error: `Falha ao empacotar arquivos do projeto: ${error?.message || 'erro interno'}`,
    });
  }
});

// Health check & keep-alive endpoints
app.get('/api/health', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.json({ status: 'ok', hasGeminiKey: Boolean(apiKey) });
});

app.get('/api/keep-alive', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.json({ ok: true, ts: Date.now() });
});

app.head('/api/keep-alive', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.status(204).end();
});

// Vite or Static file serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
      if (req.path === '/sw.js' || req.path === '/' || req.path === '/index.html') {
        res.setHeader('Cache-Control', 'no-store, max-age=0');
      }
      next();
    });
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(
      express.static(distDir, {
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('sw.js') || filePath.endsWith('index.html')) {
            res.setHeader('Cache-Control', 'no-store, max-age=0');
          }
        },
      })
    );
    app.get('*', (req, res) => {
      if (req.path.startsWith('/assets/') || req.path.startsWith('/api/')) {
        return res.status(404).send('Not found');
      }
      res.setHeader('Cache-Control', 'no-store, max-age=0');
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`JurisMentor server running on port ${port}`);
  });
}

startServer();
