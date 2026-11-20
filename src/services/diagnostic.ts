import { LegalQuestion, SimuladoConfig, UserStudyData } from '../types';
import { getAllQuestions } from './questionsService';

export type DiagnosticStrategy = 'CIRURGICO' | 'REFORCO_INEDITO' | 'BLITZ_OAB' | 'NIVELAMENTO';

export type SubjectStatus = 'CRITICO' | 'ATENCAO' | 'ESTAVEL' | 'SEM_DADOS';

export interface TopicWeakness {
  subject: string;
  topic: string;
  attempts: number;
  errors: number;
  unresolvedErrors: number;
  errorRate: number;
}

export interface SubjectDiagnostic {
  subject: string;
  oabWeight: number;
  totalAnswered: number;
  correctCount: number;
  errorCount: number;
  unresolvedErrorsCount: number;
  accuracy: number | null;
  errorRate: number | null;
  criticalityScore: number;
  status: SubjectStatus;
  availableQuestionsCount: number;
  weakTopics: TopicWeakness[];
}

export interface DiagnosticSummary {
  hasMetrics: boolean;
  totalAnswered: number;
  totalErrors: number;
  unresolvedErrorsCount: number;
  overallAccuracy: number;
  estimatedOabScore: number; // Projected score out of 80
  subjectDiagnostics: SubjectDiagnostic[];
  weakestSubjects: SubjectDiagnostic[];
  criticalTopics: TopicWeakness[];
  answeredQuestionIds: Set<string>;
  correctlyAnsweredIds: Set<string>;
  wronglyAnsweredIds: Set<string>;
}

export interface DiagnosticPlanPreview {
  config: SimuladoConfig;
  questions: LegalQuestion[];
  subjectBreakdown: Array<{
    subject: string;
    count: number;
    errorRate: number | null;
    unresolvedInSelection: number;
    oabWeight: number;
  }>;
  unresolvedIncludedCount: number;
  unseenIncludedCount: number;
  weakTopicsCovered: string[];
  rationale: string;
}

/**
 * Peso oficial das disciplinas na 1ª Fase do Exame de Ordem (FGV - 80 questões).
 */
export const OAB_SUBJECT_WEIGHTS: Record<string, number> = {
  'Ética Profissional e Estatuto da OAB': 8,
  'Direito Civil': 6,
  'Direito Processual Civil': 6,
  'Direito Constitucional': 6,
  'Direito Penal': 6,
  'Direito Processual Penal': 6,
  'Direito do Trabalho': 5,
  'Direito Processual do Trabalho': 5,
  'Direito Administrativo': 5,
  'Direito Tributário': 5,
  'Direito Empresarial': 4,
  'Direitos Humanos': 2,
  'Direito do Consumidor': 2,
  'Direito Ambiental': 2,
  'Direito da Criança e do Adolescente (ECA)': 2,
};

export const getOabWeight = (subject: string): number => {
  return OAB_SUBJECT_WEIGHTS[subject] ?? 2;
};

/**
 * Analisa todas as métricas acumuladas no `studyData` (histórico de simulados,
 * respostas individuais e caderno de erros) para mapear pontos fracos por
 * disciplina e por tópico jurídico.
 */
export const analyzeStudyData = (
  studyData: UserStudyData,
  allQuestions: LegalQuestion[] = getAllQuestions()
): DiagnosticSummary => {
  const questionMap = new Map<string, LegalQuestion>();
  const subjectAvailableCount: Record<string, number> = {};

  for (const q of allQuestions) {
    questionMap.set(q.id, q);
    subjectAvailableCount[q.subject] = (subjectAvailableCount[q.subject] || 0) + 1;
  }

  const allSubjects = Array.from(
    new Set([
      ...Object.keys(OAB_SUBJECT_WEIGHTS),
      ...allQuestions.map(q => q.subject),
    ])
  );

  const subjectTotals: Record<string, { total: number; correct: number }> = {};
  const topicMap = new Map<string, { subject: string; topic: string; attempts: number; errors: number; unresolvedErrors: number }>();

  const answeredQuestionIds = new Set<string>();
  const correctlyAnsweredIds = new Set<string>();
  const wronglyAnsweredIds = new Set<string>();

  // 1. Consolidar estatísticas de cada simulado realizado
  for (const result of studyData.results) {
    for (const [subject, stat] of Object.entries(result.subjectStats || {})) {
      if (!subjectTotals[subject]) {
        subjectTotals[subject] = { total: 0, correct: 0 };
      }
      subjectTotals[subject].total += stat.total;
      subjectTotals[subject].correct += stat.correct;
    }

    // 2. Consolidar respostas individuais para mapear tópicos e questões já vistas
    for (const ans of Object.values(result.answers || {})) {
      answeredQuestionIds.add(ans.questionId);
      if (ans.isCorrect) {
        correctlyAnsweredIds.add(ans.questionId);
      } else {
        wronglyAnsweredIds.add(ans.questionId);
      }

      const q = questionMap.get(ans.questionId);
      if (q) {
        const key = `${q.subject}::${q.topic}`;
        const existing = topicMap.get(key) || {
          subject: q.subject,
          topic: q.topic,
          attempts: 0,
          errors: 0,
          unresolvedErrors: 0,
        };
        existing.attempts += 1;
        if (!ans.isCorrect) {
          existing.errors += 1;
        }
        topicMap.set(key, existing);
      }
    }
  }

  // 3. Mapear erros pendentes no Caderno de Erros
  const subjectUnresolvedErrors: Record<string, number> = {};
  const cadernoSet = new Set(studyData.cadernoErrosIds || []);

  for (const errId of cadernoSet) {
    wronglyAnsweredIds.add(errId);
    const q = questionMap.get(errId);
    if (q) {
      subjectUnresolvedErrors[q.subject] = (subjectUnresolvedErrors[q.subject] || 0) + 1;

      const key = `${q.subject}::${q.topic}`;
      const existing = topicMap.get(key) || {
        subject: q.subject,
        topic: q.topic,
        attempts: 1,
        errors: 1,
        unresolvedErrors: 0,
      };
      existing.unresolvedErrors += 1;
      if (existing.errors === 0) {
        existing.errors = 1;
        existing.attempts = Math.max(1, existing.attempts);
      }
      topicMap.set(key, existing);

      // Caso haja erro no caderno sem subjectStats correspondente, garante visibilidade
      if (!subjectTotals[q.subject]) {
        subjectTotals[q.subject] = { total: 1, correct: 0 };
      }
    }
  }

  const allTopicWeaknesses: TopicWeakness[] = Array.from(topicMap.values())
    .filter(t => t.errors > 0 || t.unresolvedErrors > 0)
    .map(t => ({
      ...t,
      errorRate: t.attempts > 0 ? Math.round((t.errors / t.attempts) * 100) : 100,
    }))
    .sort((a, b) => {
      if (b.unresolvedErrors !== a.unresolvedErrors) return b.unresolvedErrors - a.unresolvedErrors;
      if (b.errorRate !== a.errorRate) return b.errorRate - a.errorRate;
      return b.errors - a.errors;
    });

  let globalTotal = 0;
  let globalCorrect = 0;

  const subjectDiagnostics: SubjectDiagnostic[] = allSubjects.map(subject => {
    const stat = subjectTotals[subject] || { total: 0, correct: 0 };
    const totalAnswered = stat.total;
    const correctCount = Math.min(stat.correct, totalAnswered);
    const errorCount = Math.max(0, totalAnswered - correctCount);
    const unresolvedErrorsCount = subjectUnresolvedErrors[subject] || 0;
    const oabWeight = getOabWeight(subject);

    globalTotal += totalAnswered;
    globalCorrect += correctCount;

    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : null;
    const errorRate = accuracy !== null ? 100 - accuracy : null;

    let status: SubjectStatus = 'SEM_DADOS';
    if (totalAnswered > 0 && accuracy !== null) {
      if (accuracy < 50 || unresolvedErrorsCount >= 3) {
        status = 'CRITICO';
      } else if (accuracy < 70 || unresolvedErrorsCount >= 1) {
        status = 'ATENCAO';
      } else {
        status = 'ESTAVEL';
      }
    }

    // Índice de Criticidade (0 a 100): combina taxa de erro, erros não resolvidos e peso na OAB
    let criticalityScore = 0;
    if (errorRate !== null) {
      const errorComponent = errorRate * 0.6; // até 60 pts
      const unresolvedComponent = Math.min(20, unresolvedErrorsCount * 5); // até 20 pts
      const weightComponent = (oabWeight / 8) * 20 * (errorRate / 100 + 0.25); // até 20 pts
      criticalityScore = Math.min(100, Math.round(errorComponent + unresolvedComponent + weightComponent));
    } else {
      // Sem dados ainda: prioridade base pelo peso da OAB
      criticalityScore = Math.round((oabWeight / 8) * 18);
    }

    const weakTopics = allTopicWeaknesses.filter(t => t.subject === subject);

    return {
      subject,
      oabWeight,
      totalAnswered,
      correctCount,
      errorCount,
      unresolvedErrorsCount,
      accuracy,
      errorRate,
      criticalityScore,
      status,
      availableQuestionsCount: subjectAvailableCount[subject] || 0,
      weakTopics,
    };
  });

  // Ordenar por maior criticidade primeiro, depois maior peso OAB
  subjectDiagnostics.sort((a, b) => {
    if (b.criticalityScore !== a.criticalityScore) return b.criticalityScore - a.criticalityScore;
    return b.oabWeight - a.oabWeight;
  });

  const weakestSubjects = subjectDiagnostics.filter(
    s => s.status === 'CRITICO' || s.status === 'ATENCAO'
  );

  const overallAccuracy = globalTotal > 0 ? Math.round((globalCorrect / globalTotal) * 100) : 0;

  // Projeção ponderada na prova de 80 questões da OAB
  let weightedExpectedScore = 0;
  let totalOabWeight = 0;
  for (const s of subjectDiagnostics) {
    totalOabWeight += s.oabWeight;
    const rate = s.accuracy !== null ? s.accuracy / 100 : overallAccuracy / 100;
    weightedExpectedScore += s.oabWeight * rate;
  }
  const estimatedOabScore = totalOabWeight > 0
    ? Math.round((weightedExpectedScore / totalOabWeight) * 80)
    : 0;

  const hasMetrics = globalTotal > 0 || cadernoSet.size > 0;

  return {
    hasMetrics,
    totalAnswered: globalTotal,
    totalErrors: Math.max(0, globalTotal - globalCorrect),
    unresolvedErrorsCount: cadernoSet.size,
    overallAccuracy,
    estimatedOabScore,
    subjectDiagnostics,
    weakestSubjects,
    criticalTopics: allTopicWeaknesses,
    answeredQuestionIds,
    correctlyAnsweredIds,
    wronglyAnsweredIds,
  };
};

/**
 * Seleciona e ordena questões de forma algorítmica para montar um Simulado Diagnóstico
 * personalizado com base nas métricas de erro e no peso oficial da FGV.
 */
export const generateDiagnosticPlan = (
  studyData: UserStudyData,
  options: {
    strategy: DiagnosticStrategy;
    questionCount: number;
    selectedSubjects?: string[];
    mode: 'TREINO' | 'PROVA';
    timeLimitMinutes: number | null;
  },
  allQuestions: LegalQuestion[] = getAllQuestions()
): DiagnosticPlanPreview => {
  const summary = analyzeStudyData(studyData, allQuestions);
  const cadernoSet = new Set(studyData.cadernoErrosIds || []);
  const subjectDiagMap = new Map<string, SubjectDiagnostic>();
  summary.subjectDiagnostics.forEach(s => subjectDiagMap.set(s.subject, s));

  const weakTopicSet = new Set(summary.criticalTopics.map(t => `${t.subject}::${t.topic}`));

  // Filtrar pool por matérias selecionadas (se houver filtro manual)
  let pool = allQuestions;
  if (options.selectedSubjects && options.selectedSubjects.length > 0) {
    const allowed = new Set(options.selectedSubjects);
    const filtered = pool.filter(q => allowed.has(q.subject));
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  const targetCount = Math.min(options.questionCount, pool.length);

  // Pontuação de prioridade para cada questão
  const scoredPool = pool.map(q => {
    const subjDiag = subjectDiagMap.get(q.subject);
    const errorRate = subjDiag?.errorRate ?? 0;
    const oabWeight = getOabWeight(q.subject);
    const isInCaderno = cadernoSet.has(q.id);
    const isWeakTopic = weakTopicSet.has(`${q.subject}::${q.topic}`);
    const wasAnswered = summary.answeredQuestionIds.has(q.id);
    const wasCorrect = summary.correctlyAnsweredIds.has(q.id) && !isInCaderno;
    const isOabStyle = q.examType === 'OAB' ? 1 : 0;

    let score = 0;

    switch (options.strategy) {
      case 'CIRURGICO': {
        if (isInCaderno) score += 110;
        score += errorRate * 0.75;
        if (isWeakTopic) score += 40;
        score += (oabWeight / 8) * 20;
        score += isOabStyle * 15;
        if (wasCorrect) score -= 40;
        break;
      }
      case 'REFORCO_INEDITO': {
        score += errorRate * 0.9;
        if (isWeakTopic) score += 45;
        if (!wasAnswered) score += 45;
        if (isInCaderno) score -= 15; // prefere questões inéditas da mesma matéria fraca
        if (wasCorrect) score -= 45;
        score += (oabWeight / 8) * 18;
        score += isOabStyle * 15;
        break;
      }
      case 'BLITZ_OAB': {
        // Maximiza ganho de pontos na 1ª Fase OAB: peso alto + desempenho abaixo da meta
        const deficit = subjDiag?.accuracy !== null && subjDiag?.accuracy !== undefined
          ? Math.max(0, 75 - subjDiag.accuracy)
          : 35;
        score += (oabWeight / 8) * 45;
        score += deficit * 0.85;
        if (isInCaderno) score += 35;
        if (isWeakTopic) score += 25;
        score += isOabStyle * 25;
        if (wasCorrect) score -= 35;
        break;
      }
      case 'NIVELAMENTO':
      default: {
        // Amostragem estratificada para construir métricas iniciais
        score += (oabWeight / 8) * 40;
        score += isOabStyle * 25;
        if (!wasAnswered) score += 30;
        break;
      }
    }

    // Leve jitter determinístico/aleatório para evitar empate estático idêntico em retestes
    score += Math.random() * 6;

    return { question: q, score };
  });

  scoredPool.sort((a, b) => b.score - a.score);

  // Seleção com controle de diversidade para não concentrar 100% em uma única matéria
  const selected: LegalQuestion[] = [];
  const selectedIds = new Set<string>();
  const countBySubject: Record<string, number> = {};

  const distinctSubjectsInPool = new Set(pool.map(q => q.subject)).size;
  const maxPerSubject =
    distinctSubjectsInPool <= 1
      ? targetCount
      : options.strategy === 'NIVELAMENTO'
        ? Math.max(2, Math.ceil(targetCount / Math.min(distinctSubjectsInPool, 6)))
        : Math.max(3, Math.ceil(targetCount * 0.4));

  // Passo 1: respeitando teto de diversidade
  for (const item of scoredPool) {
    if (selected.length >= targetCount) break;
    const sub = item.question.subject;
    if ((countBySubject[sub] || 0) < maxPerSubject) {
      selected.push(item.question);
      selectedIds.add(item.question.id);
      countBySubject[sub] = (countBySubject[sub] || 0) + 1;
    }
  }

  // Passo 2: completar caso falte alguma vaga
  if (selected.length < targetCount) {
    for (const item of scoredPool) {
      if (selected.length >= targetCount) break;
      if (!selectedIds.has(item.question.id)) {
        selected.push(item.question);
        selectedIds.add(item.question.id);
        countBySubject[item.question.subject] = (countBySubject[item.question.subject] || 0) + 1;
      }
    }
  }

  // Construir preview detalhado da composição
  const breakdownMap: Record<string, { count: number; unresolved: number }> = {};
  let unresolvedIncludedCount = 0;
  let unseenIncludedCount = 0;
  const topicsCoveredSet = new Set<string>();

  for (const q of selected) {
    if (!breakdownMap[q.subject]) {
      breakdownMap[q.subject] = { count: 0, unresolved: 0 };
    }
    breakdownMap[q.subject].count += 1;

    if (cadernoSet.has(q.id)) {
      breakdownMap[q.subject].unresolved += 1;
      unresolvedIncludedCount += 1;
    }
    if (!summary.answeredQuestionIds.has(q.id)) {
      unseenIncludedCount += 1;
    }
    if (weakTopicSet.has(`${q.subject}::${q.topic}`)) {
      topicsCoveredSet.add(q.topic);
    }
  }

  const subjectBreakdown = Object.entries(breakdownMap)
    .map(([subject, data]) => {
      const diag = subjectDiagMap.get(subject);
      return {
        subject,
        count: data.count,
        errorRate: diag?.errorRate ?? null,
        unresolvedInSelection: data.unresolved,
        oabWeight: getOabWeight(subject),
      };
    })
    .sort((a, b) => b.count - a.count);

  const strategyTitles: Record<DiagnosticStrategy, string> = {
    CIRURGICO: 'Simulado Diagnóstico Cirúrgico · Pontos Fracos OAB',
    REFORCO_INEDITO: 'Simulado Diagnóstico · Reforço com Questões Inéditas',
    BLITZ_OAB: 'Simulado Diagnóstico · Blitz Estratégica OAB 40+',
    NIVELAMENTO: 'Simulado Diagnóstico Inicial · Nivelamento OAB',
  };

  const topWeakNames = subjectBreakdown.slice(0, 3).map(s => s.subject).join(', ');
  const rationale = summary.hasMetrics
    ? `Bateria gerada a partir de ${summary.totalErrors} erros acumulados e ${summary.unresolvedErrorsCount} pendências no Caderno de Erros, priorizando ${topWeakNames}.`
    : `Bateria inicial estratificada pelas ${subjectBreakdown.length} principais disciplinas do Exame de Ordem para mapear seu ponto de partida.`;

  const config: SimuladoConfig = {
    id: `diagnostico_${options.strategy.toLowerCase()}_${Date.now()}`,
    title: strategyTitles[options.strategy],
    description: rationale,
    type: 'DIAGNOSTICO',
    questionCount: selected.length,
    timeLimitMinutes: options.mode === 'PROVA' ? (options.timeLimitMinutes ?? selected.length * 3) : null,
    subjects: subjectBreakdown.map(s => s.subject),
    mode: options.mode,
    repeatWrongQuestionsInterval: 2,
  };

  return {
    config,
    questions: selected,
    subjectBreakdown,
    unresolvedIncludedCount,
    unseenIncludedCount,
    weakTopicsCovered: Array.from(topicsCoveredSet),
    rationale,
  };
};
