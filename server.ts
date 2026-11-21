import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import JSZip from 'jszip';
import { legalDb } from './server/legalDb';
import {
  aiClient,
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
// TTS NEURAL COM CACHE E SANITIZAÇÃO DE DIRETRIZES
// =========================================================================
app.post('/api/tts', async (req, res) => {
  try {
    const { text, voice = 'Puck' } = req.body;

    if (!aiClient) {
      return res.status(200).json({
        success: false,
        useLocalFallback: true,
        message: 'Gemini API key não configurada. Usando síntese local.',
      });
    }

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Texto obrigatório.' });
    }

    let cleanText = text
      .replace(/^fale com entonação[^\n\:\.]*[\n\:\.]+\s*/i, '')
      .replace(/^[\[\(]?instru[çc][ãa]o[^\]\)]*[\]\)]*:?\s*/i, '')
      .trim();

    cleanText = cleanText.slice(0, 1200);

    const cacheKey = `${voice}_${cleanText}`;
    if ((globalThis as any).__ttsCache && (globalThis as any).__ttsCache.has(cacheKey)) {
      const cached = (globalThis as any).__ttsCache.get(cacheKey);
      return res.json({
        success: true,
        audioUrl: cached,
        format: 'wav',
        cached: true,
      });
    }

    const modelsToTry = ['gemini-3.8-flash-lite-tts', 'gemini-3.8-flash-tts'];
    let base64Audio: string | undefined;
    let lastError: any = null;

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
                prebuiltVoiceConfig: { voiceName: voice || 'Puck' },
              },
            },
          },
        });

        base64Audio = ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`[TTS] Erro com modelo ${model}:`, err?.message || err);
      }
    }

    if (base64Audio) {
      const audioUrl = `data:audio/wav;base64,${base64Audio}`;
      if (!(globalThis as any).__ttsCache) {
        (globalThis as any).__ttsCache = new Map<string, string>();
      }
      if ((globalThis as any).__ttsCache.size > 200) {
        const firstKey = (globalThis as any).__ttsCache.keys().next().value;
        if (firstKey) (globalThis as any).__ttsCache.delete(firstKey);
      }
      (globalThis as any).__ttsCache.set(cacheKey, audioUrl);

      return res.json({
        success: true,
        audioUrl,
        format: 'wav',
      });
    }

    res.status(200).json({
      success: false,
      useLocalFallback: true,
      error: lastError ? JSON.stringify(lastError) : 'Sem áudio retornado pelo modelo',
      message: 'Modelo não retornou dados de áudio, usando fallback local.',
    });
  } catch (err: any) {
    console.warn('Aviso na geração de áudio neural Gemini TTS:', err?.message);
    res.status(200).json({
      success: false,
      useLocalFallback: true,
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
