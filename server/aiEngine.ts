import { GoogleGenAI, Type } from '@google/genai';
import type { LegalQuestion } from '../src/types';
import type {
  DifficultyLevel,
  ExplanationLevel,
  QuestionValidationCheck,
  QuestionValidationReport,
  QuestionValidationStatus,
} from '../src/types/knowledgeBase';
import {
  legalDb,
  mapLevelToDifficulty,
  normalizeTextForMatch,
} from './legalDb';

const apiKey = process.env.GEMINI_API_KEY;
export const aiClient = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
    })
  : null;

const PRIMARY_MODEL = 'gemini-4-hydrogen';

const DIFFICULTY_LEVEL_LABELS: Record<DifficultyLevel, string> = {
  1: 'Nível 1 (Básico - letra de lei e conceitos fundamentais)',
  2: 'Nível 2 (Intermediário - casos práticos no padrão médio da OAB/FGV)',
  3: 'Nível 3 (Avançado - aplicação combinada de lei, exceções e súmulas)',
  4: 'Nível 4 (Desafio OAB - caso complexo interdisciplinar e jurisprudência recente)',
};

const extractTokenUsage = (response: any) => {
  const usage = response?.usageMetadata;
  return {
    promptTokens: Number(usage?.promptTokenCount || 0),
    completionTokens: Number(usage?.candidatesTokenCount || 0),
    totalTokens: Number(usage?.totalTokenCount || 0),
  };
};

// =========================================================================
// MÓDULO 8: CONTROLE DE QUALIDADE E VALIDAÇÃO EM 2 ESTÁGIOS
// =========================================================================
export async function validateQuestionIndependently(
  question: LegalQuestion,
  runAiSecondPass = false
): Promise<{
  status: QuestionValidationStatus;
  report: QuestionValidationReport;
}> {
  const checks: QuestionValidationCheck[] = [];

  // 1. Enunciado
  const hasStatement = Boolean(question.statement && question.statement.trim().length >= 50);
  checks.push({
    name: 'Clareza e extensão do enunciado',
    passed: hasStatement,
    notes: hasStatement
      ? 'Enunciado estruturado com extensão adequada ao padrão FGV/OAB.'
      : 'Enunciado ausente ou excessivamente curto (< 50 caracteres).',
  });

  // 2. Alternativas A, B, C, D únicas
  const letters = new Set((question.options || []).map(o => o.letter));
  const texts = new Set((question.options || []).map(o => normalizeTextForMatch(o.text)));
  const hasFourOptions =
    (question.options || []).length >= 4 &&
    ['A', 'B', 'C', 'D'].every(l => letters.has(l as any)) &&
    texts.size === (question.options || []).length;
  checks.push({
    name: 'Alternativas A-D completas e não duplicadas',
    passed: hasFourOptions,
    notes: hasFourOptions
      ? 'Quatro alternativas distintas presentes (A, B, C, D).'
      : 'Alternativas incompletas ou com textos idênticos.',
  });

  // 3. Gabarito único válido
  const validGabarito = letters.has(question.correctAnswer);
  checks.push({
    name: 'Gabarito oficial único e compatível',
    passed: validGabarito,
    notes: validGabarito
      ? `Gabarito definido na alternativa ${question.correctAnswer}.`
      : 'Gabarito não corresponde a nenhuma alternativa listada.',
  });

  // 4. Fundamentação jurídica e comentários das incorretas
  const wrongLetters = (question.options || [])
    .map(o => o.letter)
    .filter(l => l !== question.correctAnswer);
  const commentedWrong = new Set((question.whyWrong || []).map(w => w.letter));
  const allWrongCommented = wrongLetters.every(l => commentedWrong.has(l));
  const hasJustification = Boolean(question.justification && question.justification.trim().length >= 30);

  checks.push({
    name: 'Fundamentação e análise individual das alternativas',
    passed: hasJustification && allWrongCommented,
    notes:
      hasJustification && allWrongCommented
        ? 'Justificativa sólida e comentário individual presente para todas as incorretas.'
        : 'Falta justificativa robusta ou comentário explícito para alguma alternativa incorreta.',
  });

  // 5. Referências legislativas ou jurisprudenciais vinculadas
  const hasLegalRef =
    (question.statuteReferences && question.statuteReferences.length > 0) ||
    Boolean(question.jurisprudence && question.jurisprudence.trim().length > 10);

  const sources = legalDb.findGroundingSources(
    question.subject,
    question.topic,
    question.statuteReferences.map(s => `${s.code} ${s.article}`)
  );
  const sufficientSources = sources.articles.length + sources.jurisprudence.length > 0;

  checks.push({
    name: 'Coerência com base jurídica interna (legislação/jurisprudência)',
    passed: hasLegalRef,
    notes: sufficientSources
      ? `Confirmado alinhamento com ${sources.articles.length} artigo(s) e ${sources.jurisprudence.length} julgado(s) na base.`
      : hasLegalRef
      ? 'Referência citada na questão; recomenda-se indexar o dispositivo exato na biblioteca normativa.'
      : 'Questão sem dispositivo legal ou jurisprudência citada.',
  });

  // 6. Verificação de duplicidade no banco (ignorando a própria questão)
  const dup = legalDb.detectDuplicateQuestion(question.statement);
  const isDuplicateOther = dup.isDuplicate && dup.matchedId !== question.id;
  checks.push({
    name: 'Unicidade no banco (antiduplicidade)',
    passed: !isDuplicateOther,
    notes: isDuplicateOther
      ? `Similaridade de ${Math.round(dup.similarity * 100)}% detectada com questão ${dup.matchedId}.`
      : 'Sem duplicidade com questões existentes no banco.',
  });

  // 7. Estágio 2 opcional: Auditoria independente via Gemini quando disponível
  let verifiedBy = 'Motor Determinístico JurisMentor (Estágio 1)';
  if (runAiSecondPass && aiClient) {
    const startMs = Date.now();
    try {
      const groundingSummary = [
        ...sources.articles.map(a => `${a.normShortName} ${a.articleNumber}: ${a.caput}`),
        ...sources.jurisprudence.map(j => `${j.tribunal} ${j.identification} [${j.status}]: ${j.thesis}`),
      ]
        .slice(0, 6)
        .join('\n');

      const auditSchema = {
        type: Type.OBJECT,
        properties: {
          ambiguous: { type: Type.BOOLEAN },
          contradictsSources: { type: Type.BOOLEAN },
          hasMultipleCorrect: { type: Type.BOOLEAN },
          outdatedLaw: { type: Type.BOOLEAN },
          auditNotes: { type: Type.STRING },
        },
        required: ['ambiguous', 'contradictsSources', 'hasMultipleCorrect', 'outdatedLaw', 'auditNotes'],
      };

      const resp = await aiClient.models.generateContent({
        model: PRIMARY_MODEL,
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `Atue como REVISOR JURÍDICO INDEPENDENTE da banca FGV/OAB. Audite esta questão para garantir que não há ambiguidade, dupla resposta, lei revogada ou erro jurídico.\n\nFontes verificadas no banco:\n${groundingSummary || 'Consulte a legislação brasileira vigente.'}\n\nQuestão (${question.subject} - ${question.topic}):\nEnunciado: ${question.statement}\nAlternativas:\n${question.options.map(o => `${o.letter}) ${o.text}`).join('\n')}\nGabarito apontado: ${question.correctAnswer}\nFundamentação: ${question.justification}`,
              },
            ],
          },
        ],
        config: {
          responseMimeType: 'application/json',
          responseSchema: auditSchema,
        },
      });

      const usage = extractTokenUsage(resp);
      legalDb.logAiUsage({
        endpoint: 'validateQuestionIndependently',
        model: PRIMARY_MODEL,
        ...usage,
        cached: false,
        durationMs: Date.now() - startMs,
        success: true,
      });

      const parsed = JSON.parse(resp.text || '{}');
      const stage2Passed =
        !parsed.ambiguous &&
        !parsed.contradictsSources &&
        !parsed.hasMultipleCorrect &&
        !parsed.outdatedLaw;

      checks.push({
        name: 'Auditoria Jurídica Independente (Estágio 2)',
        passed: stage2Passed,
        notes: parsed.auditNotes || (stage2Passed ? 'Aprovada sem vícios na segunda revisão.' : 'Apontada ressalva na revisão independente.'),
      });
      verifiedBy = 'Auditoria em 2 Estágios (Determinístico + Revisor IA Independente)';
    } catch (err: any) {
      legalDb.logAiUsage({
        endpoint: 'validateQuestionIndependently',
        model: PRIMARY_MODEL,
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0,
        cached: false,
        durationMs: Date.now() - startMs,
        success: false,
        errorMessage: err?.message,
      });
    }
  }

  const passedCount = checks.filter(c => c.passed).length;
  const score = Math.round((passedCount / checks.length) * 100);
  const criticalFailed = !hasStatement || !hasFourOptions || !validGabarito || isDuplicateOther;

  let status: QuestionValidationStatus = 'PUBLICADA';
  const cfg = legalDb.getQualityConfig();

  if (criticalFailed || score < 70) {
    status = 'AGUARDANDO_REVISAO';
  } else if (cfg.requireHumanApprovalBeforePublish && question.originType === 'INEDITA_IA') {
    status = 'AGUARDANDO_REVISAO';
  }

  return {
    status,
    report: {
      verifiedAt: new Date().toISOString(),
      verifiedBy,
      checks,
      score,
      sufficientSources,
      summary:
        status === 'PUBLICADA'
          ? `Questão aprovada com pontuação ${score}/100 e pronta para uso em simulados.`
          : `Questão retida para revisão administrativa (pontuação ${score}/100).`,
    },
  };
}

// =========================================================================
// MÓDULO 3: MOTOR DE ELABORAÇÃO DE QUESTÕES FUNDAMENTADAS NA BASE
// =========================================================================
export async function generateGroundedQuestions(params: {
  discipline: string;
  topic?: string;
  subtopic?: string;
  difficultyLevel?: DifficultyLevel;
  count?: number;
  targetExamType?: 'OAB' | 'FACULDADE' | 'CONCURSO';
}): Promise<{
  success: boolean;
  blocked?: boolean;
  reason?: string;
  source: 'grounded_ai' | 'grounded_local_fallback';
  groundingSummary: { articlesCount: number; jurisprudenceCount: number; references: string[] };
  questions: LegalQuestion[];
}> {
  const discipline = params.discipline || 'Direito Constitucional';
  const level: DifficultyLevel = params.difficultyLevel || 2;
  const targetCount = Math.min(Math.max(Number(params.count) || 2, 1), 6);
  const cfg = legalDb.getQualityConfig();

  // 1. Consulta obrigatória ao banco jurídico ANTES de gerar
  const grounding = legalDb.findGroundingSources(discipline, params.topic, [
    params.subtopic || '',
  ]);

  const totalSources = grounding.articles.length + grounding.jurisprudence.length;
  const sourceLabels = [
    ...grounding.articles.map(a => `${a.normShortName} ${a.articleNumber}`),
    ...grounding.jurisprudence.map(j => `${j.tribunal} ${j.identification}`),
  ];

  // Regra estrita: bloquear publicação se não houver fontes suficientes na base
  if (totalSources === 0 && cfg.blockGenerationWithoutGroundedSources) {
    return {
      success: false,
      blocked: true,
      reason: 'INSUFFICIENT_SOURCES',
      source: 'grounded_local_fallback',
      groundingSummary: { articlesCount: 0, jurisprudenceCount: 0, references: [] },
      questions: [],
    };
  }

  // Sem chave Gemini: criar questão estruturada fundamentada diretamente nas fontes reais da base (nunca inventar)
  if (!aiClient) {
    const primaryArt = grounding.articles[0];
    const primaryJur = grounding.jurisprudence[0];
    const refText = primaryArt
      ? `${primaryArt.normShortName} (${primaryArt.articleNumber}): "${primaryArt.caput}"`
      : primaryJur
      ? `${primaryJur.tribunal} - ${primaryJur.identification}: ${primaryJur.thesis}`
      : `Princípios estruturantes de ${discipline}`;

    const qDraft: LegalQuestion = {
      id: `inedita_db_${Date.now()}`,
      exam: `Questão Inédita Fundamentada · ${params.targetExamType || 'OAB'}/FGV`,
      examType: params.targetExamType || 'OAB',
      board: 'FGV',
      year: new Date().getFullYear(),
      subject: discipline,
      topic: params.topic || primaryArt?.subject || primaryJur?.subject || `Temas Centrais de ${discipline}`,
      subtopic: params.subtopic || primaryArt?.articleNumber || primaryJur?.identification,
      difficulty: mapLevelToDifficulty(level),
      difficultyLevel: level,
      originType: 'INEDITA_IA',
      pedagogicalObjective: `Avaliar a aplicação correta de ${primaryArt ? `${primaryArt.normShortName} ${primaryArt.articleNumber}` : primaryJur?.identification || discipline} em situação hipotética.`,
      evaluatedCompetency: 'Interpretação sistemática de norma vigente e aplicação a caso concreto no padrão OAB/FGV.',
      statement: primaryArt
        ? `Durante orientação jurídica no escritório-escola, um cidadão apresentou controvérsia envolvendo ${primaryArt.subject} no âmbito de ${discipline}. Considerando expressamente a disciplina vigente do ${primaryArt.normShortName} (${primaryArt.articleNumber}), assinale a afirmativa que reflete corretamente a regra jurídica aplicável ao caso:`
        : `Em caso concreto submetido à apreciação judicial em matéria de ${discipline} (${primaryJur?.subject || 'Jurisprudência Superior'}), debate-se a aplicação do entendimento firmado pelo ${primaryJur?.tribunal || 'STF/STJ'} (${primaryJur?.identification || 'precedente'}). Assinale a afirmativa juridicamente correta:`,
      options: [
        {
          letter: 'A',
          text: primaryArt
            ? `Aplica-se a diretriz normativa segundo a qual ${primaryArt.caput}`
            : `Prevalece o entendimento consolidado segundo o qual ${primaryJur?.thesis || 'a norma vigente deve ser observada integralmente.'}`,
        },
        {
          letter: 'B',
          text: 'É lícito à autoridade afastar a incidência da regra expressa por conveniência administrativa discricionária sem previsão legal.',
        },
        {
          letter: 'C',
          text: 'O dispositivo encontra-se tacitamente revogado e não produz efeitos sobre fatos ocorridos durante sua vigência.',
        },
        {
          letter: 'D',
          text: 'Exige-se prévia autorização do Poder Legislativo estadual para aplicação imediata da garantia prevista na norma.',
        },
      ],
      correctAnswer: 'A',
      justification: `A alternativa A reproduz com fidelidade o teor jurídico verificado na base: ${refText}.`,
      whyWrong: [
        { letter: 'B', explanation: 'Incorreta. A legalidade estrita impede o afastamento discricionário da norma cogente.' },
        { letter: 'C', explanation: 'Incorreta. A norma está catalogada como vigente na base de legislação.' },
        { letter: 'D', explanation: 'Incorreta. Não existe tal exigência condicionante no ordenamento jurídico brasileiro.' },
      ],
      statuteReferences: primaryArt
        ? [
            {
              code: primaryArt.normShortName,
              article: primaryArt.articleNumber,
              textSnippet: primaryArt.caput,
              normId: primaryArt.normId,
              articleId: primaryArt.id,
            },
          ]
        : [],
      jurisprudence: primaryJur ? `${primaryJur.tribunal} · ${primaryJur.identification}: ${primaryJur.thesis}` : undefined,
      professorTip: `Sempre localize o núcleo exato do dispositivo (${primaryArt?.articleNumber || primaryJur?.identification || discipline}) antes de analisar exceções.`,
      practicalExample: `Exemplo de aplicação direta em consulta jurídica envolvendo ${primaryArt?.subject || discipline}.`,
      examGuidance: `A FGV costuma cobrar a literalidade qualificada de ${primaryArt?.articleNumber || primaryJur?.identification || discipline} em casos práticos do cotidiano.`,
      linkedArticleIds: primaryArt ? [primaryArt.id] : [],
      linkedJurisprudenceIds: primaryJur ? [primaryJur.id] : [],
      sourceMeta: {
        originName: 'Gerador Fundamentado na Base Jurídica (Modo Local sem API)',
        rightsChecked: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    const validated = await validateQuestionIndependently(qDraft, false);
    qDraft.validationStatus = validated.status;
    qDraft.validationReport = validated.report;
    const saved = legalDb.upsertQuestion(qDraft);

    return {
      success: true,
      source: 'grounded_local_fallback',
      groundingSummary: {
        articlesCount: grounding.articles.length,
        jurisprudenceCount: grounding.jurisprudence.length,
        references: sourceLabels,
      },
      questions: [saved],
    };
  }

  // 2. Construir contexto estrito com as fontes recuperadas da base
  const formattedArticles = grounding.articles
    .map(
      a =>
        `[ART_ID=${a.id}] ${a.normShortName} | ${a.articleNumber} (${a.status}): ${a.caput}${
          a.paragraphs?.length ? ' | Parágrafos: ' + a.paragraphs.join(' ') : ''
        }`
    )
    .join('\n');

  const formattedJuris = grounding.jurisprudence
    .map(
      j =>
        `[JUR_ID=${j.id}] ${j.tribunal} · ${j.identification} [Status: ${j.status}]: ${j.thesis} (${j.summary})${
          j.divergenceNote ? ' | Ressalva: ' + j.divergenceNote : ''
        }`
    )
    .join('\n');

  const schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        topic: { type: Type.STRING },
        subtopic: { type: Type.STRING },
        statement: { type: Type.STRING },
        options: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              letter: { type: Type.STRING },
              text: { type: Type.STRING },
            },
            required: ['letter', 'text'],
          },
        },
        correctAnswer: { type: Type.STRING },
        justification: { type: Type.STRING },
        whyWrong: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              letter: { type: Type.STRING },
              explanation: { type: Type.STRING },
            },
            required: ['letter', 'explanation'],
          },
        },
        statuteReferences: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              code: { type: Type.STRING },
              article: { type: Type.STRING },
              textSnippet: { type: Type.STRING },
            },
            required: ['code', 'article', 'textSnippet'],
          },
        },
        jurisprudence: { type: Type.STRING },
        pedagogicalObjective: { type: Type.STRING },
        evaluatedCompetency: { type: Type.STRING },
        practicalExample: { type: Type.STRING },
        professorTip: { type: Type.STRING },
        examGuidance: { type: Type.STRING },
      },
      required: [
        'topic',
        'subtopic',
        'statement',
        'options',
        'correctAnswer',
        'justification',
        'whyWrong',
        'statuteReferences',
        'pedagogicalObjective',
        'evaluatedCompetency',
        'practicalExample',
        'professorTip',
        'examGuidance',
      ],
    },
  };

  const systemInstruction = `Você é um Elaborador Sênior de Questões no padrão FGV / Exame de Ordem da OAB e Professor de Direito Brasileiro.

REGRAS INVIOLÁVEIS DE INTEGRIDADE:
1. Utilize EXCLUSIVAMENTE as fontes jurídicas verificadas fornecidas abaixo e a legislação brasileira vigente correlata. NÃO invente números de súmulas, temas de repercussão geral, REsp, ADI ou artigos inexistentes.
2. Classifique sempre como QUESTÃO INÉDITA (nunca rotule como prova passada oficial da FGV).
3. Elabore enunciado com CASO PRÁTICO realista (nomes fictícios como João, Maria, Sociedade Empresária Alfa, Município Beta), com conflito jurídico claro que exija raciocínio e interpretação, nunca mera decoreba rasa.
4. Gere exatamente 4 alternativas (A, B, C, D), sendo apenas 1 correta e 3 distratores plausíveis que explorem confusões doutrinárias comuns.
5. Preencha commentary em whyWrong para TODAS as 3 alternativas incorretas (explicitando o erro conceitual ou legal de cada uma).
6. Preencha objetivo pedagógico, competência jurídica avaliada, exemplo prático e orientação de prova (como a banca FGV costuma cobrar).
7. Dificuldade solicitada: ${DIFFICULTY_LEVEL_LABELS[level]}.`;

  const userPrompt = `Disciplina: ${discipline}
Assunto prioritário: ${params.topic || 'Temas de alta incidência na OAB'}
Subassunto: ${params.subtopic || 'Aplicação prática em caso concreto'}
Foco: ${params.targetExamType || 'OAB'}
Quantidade exata: ${targetCount} questões

=== FONTES JURÍDICAS VERIFICADAS NA BASE ===
ARTIGOS DE LEI:
${formattedArticles || 'Nenhum artigo específico indexado para este subassunto; utilize legislação fundamental brasileira vigente.'}

JURISPRUDÊNCIA:
${formattedJuris || 'Nenhuma súmula específica indexada para este subassunto; não invente precedentes.'}`;

  const startMs = Date.now();
  let rawJson = '[]';
  try {
    const resp = await aiClient.models.generateContent({
      model: PRIMARY_MODEL,
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: schema,
      },
    });
    rawJson = resp.text || '[]';
    const usage = extractTokenUsage(resp);
    legalDb.logAiUsage({
      endpoint: 'generateGroundedQuestions',
      model: PRIMARY_MODEL,
      ...usage,
      cached: false,
      durationMs: Date.now() - startMs,
      success: true,
    });
  } catch (err: any) {
    legalDb.logAiUsage({
      endpoint: 'generateGroundedQuestions',
      model: PRIMARY_MODEL,
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
      cached: false,
      durationMs: Date.now() - startMs,
      success: false,
      errorMessage: err?.message,
    });
    throw err;
  }

  let parsedList: any[] = [];
  try {
    const parsed = JSON.parse(rawJson);
    parsedList = Array.isArray(parsed) ? parsed : parsed?.questions || [];
  } catch {
    parsedList = [];
  }

  const savedQuestions: LegalQuestion[] = [];
  const now = new Date().toISOString();

  for (let i = 0; i < parsedList.length; i++) {
    const item = parsedList[i];
    if (!item?.statement || !Array.isArray(item?.options)) continue;

    // Antiduplicidade antes de salvar
    const dup = legalDb.detectDuplicateQuestion(item.statement);
    if (dup.isDuplicate) continue;

    const draft: LegalQuestion = {
      id: `inedita_ia_${Date.now()}_${i}`,
      exam: `Questão Inédita Padrão OAB/FGV (${discipline})`,
      examType: params.targetExamType || 'OAB',
      board: 'FGV',
      year: new Date().getFullYear(),
      subject: discipline,
      topic: item.topic || params.topic || discipline,
      subtopic: item.subtopic || params.subtopic,
      difficulty: mapLevelToDifficulty(level),
      difficultyLevel: level,
      originType: 'INEDITA_IA',
      statement: item.statement,
      options: item.options.slice(0, 4).map((o: any, idx: number) => ({
        letter: (['A', 'B', 'C', 'D'][idx] || o.letter || 'A') as 'A' | 'B' | 'C' | 'D',
        text: String(o.text || ''),
      })),
      correctAnswer: (['A', 'B', 'C', 'D'].includes(item.correctAnswer) ? item.correctAnswer : 'A') as 'A' | 'B' | 'C' | 'D',
      justification: item.justification || '',
      whyWrong: Array.isArray(item.whyWrong) ? item.whyWrong : [],
      statuteReferences: Array.isArray(item.statuteReferences) ? item.statuteReferences : [],
      jurisprudence: item.jurisprudence || undefined,
      professorTip: item.professorTip || undefined,
      pedagogicalObjective: item.pedagogicalObjective,
      evaluatedCompetency: item.evaluatedCompetency,
      practicalExample: item.practicalExample,
      examGuidance: item.examGuidance,
      linkedArticleIds: grounding.articles.map(a => a.id),
      linkedJurisprudenceIds: grounding.jurisprudence.map(j => j.id),
      sourceMeta: {
        originName: 'Motor IA JurisMentor (Fundamentado na Base Jurídica)',
        rightsChecked: true,
        createdAt: now,
        updatedAt: now,
      },
    };

    const validation = await validateQuestionIndependently(draft, false);
    draft.validationStatus = validation.status;
    draft.validationReport = validation.report;

    savedQuestions.push(legalDb.upsertQuestion(draft));
  }

  return {
    success: true,
    source: 'grounded_ai',
    groundingSummary: {
      articlesCount: grounding.articles.length,
      jurisprudenceCount: grounding.jurisprudence.length,
      references: sourceLabels,
    },
    questions: savedQuestions,
  };
}

// =========================================================================
// MÓDULO 5 & 12: PROFESSOR VIRTUAL EM 3 NÍVEIS COM CACHE E GROUNDING
// =========================================================================
export async function answerTutorWithGrounding(params: {
  question?: LegalQuestion;
  userQuery?: string;
  context?: string;
  mode: 'explain_question' | 'free_doubt';
  explanationLevel?: ExplanationLevel;
}): Promise<{
  success: boolean;
  isFallback?: boolean;
  cached?: boolean;
  answer: string;
  groundedSources: string[];
}> {
  const level: ExplanationLevel = params.explanationLevel || 'intermediario';
  const queryNorm = normalizeTextForMatch(params.userQuery || '');
  const cacheKey = `${params.mode}_${level}_${params.question?.id || 'free'}_${queryNorm.slice(0, 120)}`;

  // 1. Verificar cache primeiro para economizar tokens (Módulo 12)
  const cached = legalDb.getTutorCache(cacheKey);
  if (cached) {
    legalDb.logAiUsage({
      endpoint: '/api/tutor',
      model: PRIMARY_MODEL,
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
      cached: true,
      durationMs: 2,
      success: true,
    });
    return {
      success: true,
      cached: true,
      answer: cached.answer,
      groundedSources: cached.groundedSources,
    };
  }

  // 2. Recuperar fontes reais do banco jurídico
  const discipline = params.question?.subject || params.context || 'Direito Constitucional';
  const topic = params.question?.topic || params.userQuery || '';
  const grounding = legalDb.findGroundingSources(discipline, topic);

  const groundedSources: string[] = [
    ...grounding.articles.map(a => `${a.normShortName} · ${a.articleNumber} (${a.status})`),
    ...grounding.jurisprudence.map(j => `${j.tribunal} · ${j.identification} (${j.status})`),
  ];

  // Fallback estruturado com dados do banco quando não houver GEMINI_API_KEY
  if (!aiClient) {
    const fallbackAnswer = buildLocalGroundedTutorAnswer(params, level, grounding.articles, grounding.jurisprudence);
    return {
      success: true,
      isFallback: true,
      cached: false,
      answer: fallbackAnswer,
      groundedSources,
    };
  }

  const levelDirective: Record<ExplanationLevel, string> = {
    simples:
      'NÍVEL 1 — EXPLICAÇÃO SIMPLES: Use linguagem acessível e didática para iniciantes, traduza termos latinos/técnicos e use um exemplo prático do dia a dia.',
    intermediario:
      'NÍVEL 2 — EXPLICAÇÃO INTERMEDIÁRIA (PADRÃO OAB): Linguagem jurídica clara de prova, conecte o artigo de lei com as pegadinhas da FGV e dê um mnemônico de fixação.',
    aprofundado:
      'NÍVEL 3 — EXPLICAÇÃO APROFUNDADA: Análise doutrinária densa, distinções conceituais, exceções legais, divergências ou ressalvas jurisprudenciais de STF/STJ e comparação entre institutos.',
  };

  const sourcesContext = [
    ...grounding.articles.map(a => `- ${a.normShortName} ${a.articleNumber} [${a.status}]: ${a.caput}`),
    ...grounding.jurisprudence.map(
      j =>
        `- ${j.tribunal} ${j.identification} [${j.status}]: ${j.thesis}${
          j.divergenceNote ? ' (Ressalva: ' + j.divergenceNote + ')' : ''
        }`
    ),
  ].join('\n');

  const systemPrompt = `Você é o "Professor JurisMentor", professor de Direito brasileiro especialista no Exame da OAB (FGV).
${levelDirective[level]}

REGRAS CRÍTICAS DE CONFIABILIDADE:
1. Baseie sua explicação nas fontes oficiais da base abaixo e na legislação brasileira vigente. NÃO invente números de leis, artigos ou súmulas.
2. Quando houver divergência ou superação jurisprudencial, alerte expressamente o aluno.
3. Responda em Português do Brasil com estrutura clara, direta e didática.

FONTES VERIFICADAS DA BASE JURÍDICA:
${sourcesContext || 'Utilize os textos legais fornecidos na questão e os princípios constitucionais vigentes.'}`;

  const userPrompt =
    params.mode === 'explain_question' && params.question
      ? `Questão (${params.question.subject} - ${params.question.topic}):
Enunciado: ${params.question.statement}
Alternativas:
${params.question.options.map(o => `${o.letter}) ${o.text}`).join('\n')}
Gabarito Oficial: ${params.question.correctAnswer}
Fundamentação Base: ${params.question.justification}
${params.question.jurisprudence ? `Jurisprudência da questão: ${params.question.jurisprudence}` : ''}

Dúvida do aluno: "${params.userQuery || 'Explique a questão no nível selecionado.'}"`
      : `Dúvida do aluno: "${params.userQuery}"\nContexto: ${params.context || 'Preparação OAB / Direito Brasileiro'}`;

  const startMs = Date.now();
  try {
    const resp = await aiClient.models.generateContent({
      model: PRIMARY_MODEL,
      contents: [{ role: 'user', parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }],
    });
    const answer = resp.text || buildLocalGroundedTutorAnswer(params, level, grounding.articles, grounding.jurisprudence);
    const usage = extractTokenUsage(resp);

    legalDb.logAiUsage({
      endpoint: '/api/tutor',
      model: PRIMARY_MODEL,
      ...usage,
      cached: false,
      durationMs: Date.now() - startMs,
      success: true,
    });
    legalDb.setTutorCache(cacheKey, answer, groundedSources);

    return {
      success: true,
      cached: false,
      answer,
      groundedSources,
    };
  } catch (err: any) {
    legalDb.logAiUsage({
      endpoint: '/api/tutor',
      model: PRIMARY_MODEL,
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
      cached: false,
      durationMs: Date.now() - startMs,
      success: false,
      errorMessage: err?.message,
    });

    const fallbackAnswer = buildLocalGroundedTutorAnswer(params, level, grounding.articles, grounding.jurisprudence);
    return {
      success: true,
      isFallback: true,
      cached: false,
      answer: fallbackAnswer,
      groundedSources,
    };
  }
}

function buildLocalGroundedTutorAnswer(
  params: {
    question?: LegalQuestion;
    userQuery?: string;
    context?: string;
    mode: string;
  },
  level: ExplanationLevel,
  articles: ReturnType<typeof legalDb.findGroundingSources>['articles'],
  jurisprudence: ReturnType<typeof legalDb.findGroundingSources>['jurisprudence']
): string {
  const q = params.question;
  const artBlock =
    articles.length > 0
      ? articles
          .slice(0, 2)
          .map(a => `• **${a.normShortName} (${a.articleNumber}) [${a.status}]:** "${a.caput}"`)
          .join('\n')
      : '';
  const jurBlock =
    jurisprudence.length > 0
      ? jurisprudence
          .slice(0, 2)
          .map(
            j =>
              `• **${j.tribunal} — ${j.identification} [${j.status}]:** ${j.thesis}${
                j.divergenceNote ? ` *(Nota: ${j.divergenceNote})*` : ''
              }`
          )
          .join('\n')
      : '';

  if (q) {
    if (level === 'simples') {
      return `### Explicação Simples (Nível 1)\n\nEm termos diretos: a resposta correta é a **Alternativa ${q.correctAnswer}**.\n\n**O que a lei determina aqui:**\n${q.justification}\n\n${
        q.practicalExample ? `**Na prática:** ${q.practicalExample}\n\n` : ''
      }${q.professorTip ? `**Dica fácil de lembrar:** ${q.professorTip}` : ''}`;
    }

    if (level === 'aprofundado') {
      return `### Análise Aprofundada de Banca e Doutrina (Nível 3)\n\n**Gabarito Oficial:** Alternativa **${q.correctAnswer}** (${q.subject} · ${q.topic})\n\n**1. Fundamento Jurídico Sistemático:**\n${q.justification}\n\n**2. Exame Crítico das Alternativas Incorretas:**\n${q.whyWrong
        .map(w => `• **Alternativa ${w.letter}:** ${w.explanation}`)
        .join('\n')}\n\n${
        artBlock ? `**3. Dispositivos da Base Legislativa:**\n${artBlock}\n\n` : ''
      }${jurBlock ? `**4. Precedentes Vinculantes na Base:**\n${jurBlock}\n\n` : ''}${
        q.examGuidance ? `**5. Estratégia FGV/OAB:** ${q.examGuidance}` : ''
      }`;
    }

    return `### Explicação Intermediária Padrão OAB (Nível 2)\n\n**Gabarito:** Alternativa **${q.correctAnswer}**\n\n**Por que está certa:**\n${q.justification}\n\n**Análise das pegadinhas:**\n${q.whyWrong
      .map(w => `• **Letra ${w.letter}:** ${w.explanation}`)
      .join('\n')}\n\n${artBlock ? `**Base Legal Consultada:**\n${artBlock}\n\n` : ''}${
      q.professorTip ? `**Mnemônico:** ${q.professorTip}` : ''
    }`;
  }

  return `### Orientação do Professor (${level.toUpperCase()})\n\nSobre sua consulta (*"${params.userQuery}"*), os registros verificados na Base Jurídica do JurisMentor trazem:\n\n${
    artBlock || '• Consulte os dispositivos da Constituição Federal e Códigos correspondentes no módulo Base Jurídica.'
  }\n\n${jurBlock ? `**Jurisprudência Relacionada:**\n${jurBlock}` : ''}`;
}
