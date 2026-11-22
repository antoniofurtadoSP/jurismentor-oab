import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';
import type {
  LegalQuestion,
  MissedQuestionSummary,
  PerformanceErrorAnalysis,
} from '../src/types';
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
import { rebalanceQuestionOptions } from '../scripts/questionRebalancer';

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

  // 7. Equilíbrio formal e ausência de pistas óbvias nas alternativas (padrão FGV)
  const corrOption = (question.options || []).find(o => o.letter === question.correctAnswer);
  const wrongOptions = (question.options || []).filter(o => o.letter !== question.correctAnswer);
  const corrLen = corrOption?.text.trim().length || 0;
  const wrongLens = wrongOptions.map(o => o.text.trim().length);
  const avgWrongLen = wrongLens.length > 0 ? wrongLens.reduce((a, b) => a + b, 0) / wrongLens.length : 0;
  const maxWrongLen = wrongLens.length > 0 ? Math.max(...wrongLens) : 0;
  const hasEditorialMarkerInOptions = (question.options || []).some(
    o => /!|\*\*|__|\(\s*(?:isto é|ou seja|pegadinha|atenção|cuidado)\b/i.test(o.text)
  );
  const citeRe = /\b(?:art\.?|artigo|súmula|tema|lei\s+n[º°]|enunciado)\s*\d+/i;
  const asksCiteInStmt = /\b(?:quais|qual)\s+(?:o\s+número\s+d[oa]\s+|a\s+|o\s+|os\s+|as\s+)?(?:súmulas?|artigos?|dispositivos?|emendas?|temas?|incisos?|lei\s+n[º°])\b/i.test(
    question.statement || ''
  );
  const citationAsymmetry =
    !asksCiteInStmt &&
    Boolean(corrOption && citeRe.test(corrOption.text)) &&
    wrongOptions.every(w => !citeRe.test(w.text));
  const extremeLengthBias =
    corrLen > 95 && avgWrongLen > 0 && corrLen > avgWrongLen * 1.45 && corrLen > maxWrongLen * 1.25;
  const balancedOptionsPassed =
    !hasEditorialMarkerInOptions && !citationAsymmetry && !extremeLengthBias;

  checks.push({
    name: 'Equilíbrio formal e simetria das alternativas',
    passed: balancedOptionsPassed,
    notes: balancedOptionsPassed
      ? 'Alternativas equilibradas em extensão, formalidade e ausência de pistas visuais.'
      : [
          hasEditorialMarkerInOptions ? 'presença de marcação editorial (!, negrito ou glosa)' : '',
          citationAsymmetry ? 'citação normativa exclusiva na alternativa correta' : '',
          extremeLengthBias ? 'alternativa correta desproporcionalmente mais longa que os distratores' : '',
        ]
          .filter(Boolean)
          .join('; '),
  });

  // 8. Estágio 2 opcional: Auditoria independente via Gemini quando disponível
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
                text: `Atue como REVISOR JURÍDICO INDEPENDENTE da banca FGV/OAB. Audite esta questão para garantir que não há ambiguidade, dupla resposta, lei revogada, erro jurídico ou pista óbvia de gabarito (como alternativa correta muito mais longa, mais detalhada ou com citações ausentes nas incorretas).\n\nFontes verificadas no banco:\n${groundingSummary || 'Consulte a legislação brasileira vigente.'}\n\nQuestão (${question.subject} - ${question.topic}):\nEnunciado: ${question.statement}\nAlternativas:\n${question.options.map(o => `${o.letter}) ${o.text}`).join('\n')}\nGabarito apontado: ${question.correctAnswer}\nFundamentação: ${question.justification}`,
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

    const lettersOrder: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
    const targetCorrect = lettersOrder[Date.now() % lettersOrder.length];
    const correctAssertion = primaryArt
      ? `Aplica-se ao caso a diretriz normativa segundo a qual ${primaryArt.caput.charAt(0).toLowerCase()}${primaryArt.caput.slice(1)}`
      : `Prevalece o entendimento consolidado de que ${primaryJur?.thesis ? `${primaryJur.thesis.charAt(0).toLowerCase()}${primaryJur.thesis.slice(1)}` : 'a regra legal vigente deve incidir integralmente sobre a relação jurídica analisada.'}`;

    const distractorAssertions = [
      'A incidência da norma pode ser afastada por juízo de conveniência administrativa da autoridade competente, independentemente de previsão legal expressa.',
      'O regime jurídico aplicável encontra-se tacitamente derrogado em razão do decurso do tempo, não produzindo efeitos imediatos sobre fatos pendentes.',
      'A aplicação concreta da regra jurídica depende de prévia regulamentação complementar pelo Poder Legislativo estadual ou de homologação judicial específica.',
    ];

    let dIdx = 0;
    const rawOptions = lettersOrder.map(letter => ({
      letter,
      text: letter === targetCorrect ? correctAssertion : distractorAssertions[dIdx++],
    }));

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
      options: rawOptions,
      correctAnswer: targetCorrect,
      justification: `A alternativa ${targetCorrect} reproduz com fidelidade o teor jurídico verificado na base: ${refText}.`,
      whyWrong: lettersOrder
        .filter(l => l !== targetCorrect)
        .map((l, idx) => ({
          letter: l,
          explanation:
            idx === 0
              ? 'Incorreta. O princípio da legalidade estrita impede o afastamento discricionário da regra jurídica vigente.'
              : idx === 1
              ? 'Incorreta. A diretriz jurídica permanece plenamente vigente e eficaz no ordenamento brasileiro.'
              : 'Incorreta. Não existe tal exigência condicionante de autorização legislativa estadual ou homologação prévia.',
        })),
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

    qDraft.options = rebalanceQuestionOptions(qDraft).options;
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
5. SIMETRIA RIGOROSA DAS ALTERNATIVAS (OBRIGATÓRIO): TODAS as 4 alternativas devem apresentar extensão semelhante (idealmente entre 140 e 230 caracteres cada, com variação máxima de ~20% entre a correta e as incorretas) e exatamente o MESMO nível de formalidade e densidade técnico-jurídica. É PROIBIDO deixar as incorretas curtas/secas e a correta longa/explicativa.
6. SEM PISTAS NA REDAÇÃO DAS ALTERNATIVAS: NÃO inclua citações de artigos, súmulas ou temas, glosas explicativas entre parênteses ("isto é...", "ou seja..."), pontos de exclamação (!), nem destaques em CAIXA ALTA exclusivamente na alternativa correta. Toda a fundamentação detalhada (artigos, súmulas e explicação doutrinária) deve ir para os campos "justification", "whyWrong", "statuteReferences" e "professorTip". Varie o gabarito ("correctAnswer") entre A, B, C e D.
7. Preencha comentários em "whyWrong" para TODAS as 3 alternativas incorretas (explicitando o erro conceitual ou legal de cada uma).
8. Preencha objetivo pedagógico, competência jurídica avaliada, exemplo prático e orientação de prova (como a banca FGV costuma cobrar).
9. Dificuldade solicitada: ${DIFFICULTY_LEVEL_LABELS[level]}.`;

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

    draft.options = rebalanceQuestionOptions(draft).options;
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

// =========================================================================
// ANÁLISE DE ERROS E TÓPICOS PRIORITÁRIOS DE ESTUDO COM GEMINI
// =========================================================================
export interface AnalyzePerformanceParams {
  overallAccuracy: number;
  totalAnswered: number;
  totalCorrect: number;
  rankedSubjects: Array<{ subject: string; rate: number; total: number; correct: number }>;
  missedQuestions: MissedQuestionSummary[];
}

export async function analyzePerformanceErrorsWithGemini(
  params: AnalyzePerformanceParams
): Promise<{
  success: boolean;
  analysis?: PerformanceErrorAnalysis;
  error?: string;
  statusCode?: number;
}> {
  if (!aiClient) {
    return {
      success: false,
      statusCode: 503,
      error: 'Serviço Gemini indisponível: configure a variável GEMINI_API_KEY no servidor para usar a análise inteligente.',
    };
  }

  if (!params || params.totalAnswered <= 0) {
    return {
      success: false,
      statusCode: 400,
      error: 'Responda pelo menos algumas questões ou finalize um simulado antes de solicitar a análise de erros.',
    };
  }

  const missedList = Array.isArray(params.missedQuestions) ? params.missedQuestions : [];
  const rankedSubjects = Array.isArray(params.rankedSubjects) ? params.rankedSubjects : [];

  const canonicalSubjects = new Map<string, string>();
  for (const s of rankedSubjects) {
    if (s?.subject) canonicalSubjects.set(s.subject.trim().toLowerCase(), s.subject.trim());
  }
  for (const m of missedList) {
    if (m?.subject) canonicalSubjects.set(m.subject.trim().toLowerCase(), m.subject.trim());
  }

  // Prioritize repeated errors and hardest difficulty levels first
  const difficultyRank = (m: MissedQuestionSummary): number => {
    if (typeof m.difficultyLevel === 'number') return m.difficultyLevel;
    if (m.difficulty === 'Difícil') return 3;
    if (m.difficulty === 'Médio') return 2;
    return 1;
  };

  const sortedMissed = [...missedList]
    .sort((a, b) => {
      if ((b.errorCount || 1) !== (a.errorCount || 1)) {
        return (b.errorCount || 1) - (a.errorCount || 1);
      }
      return difficultyRank(b) - difficultyRank(a);
    })
    .slice(0, 30);

  // Aggregate missed topics for clearer signal
  const topicStatsMap = new Map<
    string,
    { subject: string; topic: string; count: number; maxDiff: number; refs: Set<string> }
  >();
  for (const m of missedList) {
    const key = `${m.subject}::${m.topic}`;
    const prev = topicStatsMap.get(key) || {
      subject: m.subject,
      topic: m.topic,
      count: 0,
      maxDiff: 1,
      refs: new Set<string>(),
    };
    prev.count += m.errorCount || 1;
    prev.maxDiff = Math.max(prev.maxDiff, difficultyRank(m));
    (m.statuteRefs || []).forEach(r => prev.refs.add(r));
    topicStatsMap.set(key, prev);
  }

  const topProblemTopics = Array.from(topicStatsMap.values())
    .sort((a, b) => b.count - a.count || b.maxDiff - a.maxDiff)
    .slice(0, 12)
    .map(t => ({
      subject: t.subject,
      topic: t.topic,
      totalErrors: t.count,
      maxDifficultyLevel: t.maxDiff,
      legalRefs: Array.from(t.refs).slice(0, 4),
    }));

  const allowedSubjectsList = Array.from(canonicalSubjects.values());

  const prompt = `Você é o Professor JurisMentor, mentor especialista em aprovação na 1ª Fase da OAB (FGV) e análise pedagógica de desempenho jurídico.

Analise os dados reais de desempenho e as questões erradas pelo aluno abaixo e gere um diagnóstico cirúrgico em Português do Brasil, identificando os conteúdos mais difíceis encontrados e sugerindo tópicos prioritários de estudo.

MÉTRICAS GLOBAIS DO ALUNO:
- Aproveitamento global: ${params.overallAccuracy}% (${params.totalCorrect} acertos de ${params.totalAnswered} questões respondidas)
- Nota de corte OAB: 50%
- Total de registros de erros analisados: ${missedList.length}

DESEMPENHO POR DISCIPLINA:
${rankedSubjects.map(s => `- ${s.subject}: ${s.rate}% (${s.correct}/${s.total} acertos)`).join('\n') || 'Sem detalhamento por disciplina.'}

TÓPICOS COM MAIOR INCIDÊNCIA DE ERROS E DIFICULDADE:
${JSON.stringify(topProblemTopics, null, 2)}

AMOSTRA DETALHADA DAS QUESTÕES ERRADAS (ordenadas por reincidência e dificuldade):
${
  sortedMissed.length > 0
    ? sortedMissed
        .map(
          (m, idx) =>
            `${idx + 1}. [${m.subject} | ${m.topic}${m.subtopic ? ` - ${m.subtopic}` : ''}] Dificuldade: ${m.difficulty} (Nível ${difficultyRank(m)}) | Erros: ${m.errorCount} | Marcou: ${m.selectedOption || '?'} vs Gabarito: ${m.correctAnswer} | Refs: ${(m.statuteRefs || []).join(', ') || 'N/A'}\n   Enunciado: ${m.statementSnippet}\n   Fundamento: ${m.justificationSnippet || 'N/A'}`
        )
        .join('\n')
    : 'O aluno ainda não registrou erros nesta amostra (100% de aproveitamento). Sugira tópicos avançados de consolidação nas disciplinas já respondidas.'
}

REGRAS OBRIGATÓRIAS:
1. No campo "subject" de cada item em "priorityTopics", utilize EXATAMENTE um dos nomes de disciplina presentes nos dados acima (${allowedSubjectsList.join(', ') || 'Disciplina correspondente'}).
2. Foque principalmente nos erros em conteúdos de maior dificuldade (Difícil / Nível 3-4), erros reincidentes e disciplinas abaixo de 50% ou com maior peso na OAB.
3. Em "errorPattern", explique objetivamente o provável motivo técnico do erro (ex.: confusão de prazos, exceção legal, pegadinha clássica da FGV ou conceito específico).
4. Em "recommendedAction", dê uma orientação prática e acionável (o que revisar, distinguir ou memorizar) sem inventar números de artigos ou súmulas que não estejam no contexto ou que não sejam reais.
5. Gere entre 3 e 5 itens em "priorityTopics" ordenados da maior prioridade para a menor, e exatamente 3 passos práticos em "studyStrategySteps".`;

  const startMs = Date.now();
  const modelsToTry = [PRIMARY_MODEL, 'gemini-3.1-flash-lite'];
  let resp: any = null;
  let usedModel = PRIMARY_MODEL;
  let lastError: any = null;

  for (const model of modelsToTry) {
    try {
      usedModel = model;
      resp = await aiClient.models.generateContent({
        model,
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: {
          ...(model === PRIMARY_MODEL
            ? { thinkingConfig: { thinkingLevel: ThinkingLevel.LOW } }
            : {}),
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summaryDiagnosis: {
                type: Type.STRING,
                description: 'Diagnóstico geral em 2 a 3 frases objetivas sobre o desempenho e perfil de erros do aluno.',
              },
              hardestPatternAlert: {
                type: Type.STRING,
                description: 'Alerta específico sobre o padrão ou conteúdo mais difícil encontrado nos erros.',
              },
              priorityTopics: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    subject: { type: Type.STRING },
                    topic: { type: Type.STRING },
                    priority: { type: Type.STRING },
                    difficultyDetected: { type: Type.STRING },
                    errorCount: { type: Type.INTEGER },
                    errorPattern: { type: Type.STRING },
                    recommendedAction: { type: Type.STRING },
                    legalBasis: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                  },
                  required: [
                    'subject',
                    'topic',
                    'priority',
                    'difficultyDetected',
                    'errorCount',
                    'errorPattern',
                    'recommendedAction',
                    'legalBasis',
                  ],
                },
              },
              studyStrategySteps: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
            },
            required: ['summaryDiagnosis', 'hardestPatternAlert', 'priorityTopics', 'studyStrategySteps'],
          },
        },
      });
      if (resp?.text) break;
    } catch (err: any) {
      lastError = err;
      console.warn(`[Performance AI Analysis] Falha com ${model}:`, String(err?.message || err || ''));
    }
  }

  if (!resp?.text) {
    legalDb.logAiUsage({
      endpoint: '/api/performance/analyze-errors',
      model: usedModel,
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
      cached: false,
      durationMs: Date.now() - startMs,
      success: false,
      errorMessage: lastError?.message,
    });

    const rawMsg = String(lastError?.message || '');
    const friendlyError =
      rawMsg.includes('503') || rawMsg.includes('UNAVAILABLE')
        ? 'Os servidores do Gemini estão com alta demanda temporária no momento. Aguarde alguns segundos e clique em Tentar Novamente.'
        : rawMsg.includes('429') || rawMsg.includes('RESOURCE_EXHAUSTED')
        ? 'Limite temporário de requisições atingido. Aguarde um instante e tente novamente.'
        : rawMsg.includes('403') || rawMsg.includes('API_KEY_INVALID')
        ? 'Chave da API Gemini inválida ou sem permissão. Verifique a variável GEMINI_API_KEY nas configurações.'
        : 'Não foi possível concluir a análise de desempenho com o Gemini agora. Tente novamente em instantes.';

    return {
      success: false,
      statusCode: 503,
      error: friendlyError,
    };
  }

  try {
    const usage = extractTokenUsage(resp);
    legalDb.logAiUsage({
      endpoint: '/api/performance/analyze-errors',
      model: usedModel,
      ...usage,
      cached: false,
      durationMs: Date.now() - startMs,
      success: true,
    });

    const rawJson = (resp.text || '{}').trim();
    const parsed = JSON.parse(rawJson);

    const normalizePriority = (val: unknown): 'CRÍTICA' | 'ALTA' | 'MÉDIA' => {
      const upper = String(val || '').toUpperCase();
      if (upper.includes('CRIT') || upper.includes('CRÍT')) return 'CRÍTICA';
      if (upper.includes('MED') || upper.includes('MÉD')) return 'MÉDIA';
      return 'ALTA';
    };

    const normalizeSubject = (rawSub: string): string => {
      const clean = (rawSub || '').trim();
      const exact = canonicalSubjects.get(clean.toLowerCase());
      if (exact) return exact;
      const partial = allowedSubjectsList.find(
        s => s.toLowerCase().includes(clean.toLowerCase()) || clean.toLowerCase().includes(s.toLowerCase())
      );
      return partial || clean || allowedSubjectsList[0] || 'Direito Constitucional';
    };

    const priorityTopics = Array.isArray(parsed.priorityTopics)
      ? parsed.priorityTopics.slice(0, 6).map((item: any) => ({
          subject: normalizeSubject(item?.subject || ''),
          topic: String(item?.topic || 'Revisão Geral da Disciplina'),
          priority: normalizePriority(item?.priority),
          difficultyDetected: String(item?.difficultyDetected || 'Médio / Difícil'),
          errorCount: Math.max(0, Number(item?.errorCount ?? 1)),
          errorPattern: String(item?.errorPattern || ''),
          recommendedAction: String(item?.recommendedAction || ''),
          legalBasis: Array.isArray(item?.legalBasis) ? item.legalBasis.map(String).slice(0, 5) : [],
        }))
      : [];

    const analysis: PerformanceErrorAnalysis = {
      summaryDiagnosis: String(parsed.summaryDiagnosis || ''),
      hardestPatternAlert: String(parsed.hardestPatternAlert || ''),
      priorityTopics,
      studyStrategySteps: Array.isArray(parsed.studyStrategySteps)
        ? parsed.studyStrategySteps.map(String).slice(0, 4)
        : [],
      analyzedErrorsCount: missedList.length,
      generatedAt: new Date().toISOString(),
    };

    return {
      success: true,
      analysis,
    };
  } catch (err: any) {
    legalDb.logAiUsage({
      endpoint: '/api/performance/analyze-errors',
      model: usedModel,
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
      cached: false,
      durationMs: Date.now() - startMs,
      success: false,
      errorMessage: err?.message,
    });

    console.error('[Performance AI Analysis] Erro ao interpretar resposta Gemini:', err);
    return {
      success: false,
      statusCode: 500,
      error: 'Erro ao interpretar a análise estruturada retornada pelo Gemini. Tente novamente.',
    };
  }
}

