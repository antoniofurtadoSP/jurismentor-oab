import {
  LegalQuestion,
  MissedQuestionSummary,
  PerformanceErrorAnalysis,
  UserStudyData,
} from '../types';
import type { ExplanationLevel } from '../types/knowledgeBase';
import { getAllQuestions } from './questionsService';

export interface TutorResponse {
  answer: string;
  source: 'ai' | 'jurisprudencia_local';
  isFallback?: boolean;
  cached?: boolean;
  groundedSources?: string[];
}

export const askProfessorTutor = async (params: {
  question?: LegalQuestion;
  userQuery?: string;
  context?: string;
  mode: 'explain_question' | 'free_doubt';
  explanationLevel?: ExplanationLevel;
}): Promise<TutorResponse> => {
  try {
    const res = await fetch('/api/tutor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      throw new Error(`Servidor retornou status ${res.status}`);
    }

    const data = await res.json();
    if (data.success && data.answer) {
      return {
        answer: data.answer,
        source: data.isFallback ? 'jurisprudencia_local' : 'ai',
        isFallback: data.isFallback,
        cached: data.cached,
        groundedSources: data.groundedSources || [],
      };
    }
    throw new Error(data.error || 'Falha ao processar resposta do professor');
  } catch (err) {
    console.warn('Usando base doutrinária local do JurisMentor:', err);
    if (params.question) {
      const q = params.question;
      const level = params.explanationLevel || 'intermediario';
      const fallbackText =
        level === 'simples'
          ? `### Explicação Simples (Nível 1)\n\nA alternativa correta é a **${q.correctAnswer}**.\n\n**Resumo claro:** ${q.justification}\n\n${q.professorTip ? `**Dica rápida:** ${q.professorTip}` : ''}`
          : `### Análise Pedagógica do Professor JurisMentor (${level === 'aprofundado' ? 'Nível Aprofundado' : 'Nível Intermediário'})

**Gabarito Correto:** Alternativa **${q.correctAnswer}**
**Base Legal Principal:** ${q.statuteReferences.map(s => `${s.code} - ${s.article}`).join(' e ')}

#### 1. Fundamento Jurídico da Resposta Correta:
${q.justification}

#### 2. Análise das Demais Alternativas:
${q.whyWrong.map(w => `• **Alternativa ${w.letter}:** ${w.explanation}`).join('\n')}

${q.jurisprudence ? `#### 3. Entendimento dos Tribunais Superiores:\n${q.jurisprudence}\n` : ''}
${q.professorTip ? `#### 4. Dica Prática de Memorização:\n${q.professorTip}` : ''}`;

      return {
        answer: fallbackText,
        source: 'jurisprudencia_local',
        isFallback: true,
        groundedSources: q.statuteReferences.map(s => `${s.code} ${s.article}`),
      };
    }

    return {
      answer: `Olá, futuro(a) colega! No Direito Brasileiro e especialmente no Exame da OAB, o segredo da aprovação é aliar a letra da lei (CF/88, Códigos) com os precedentes sumulados do STF e STJ. Em relação à sua dúvida ("${params.userQuery}"), consulte os dispositivos correspondentes na Base Jurídica do aplicativo.`,
      source: 'jurisprudencia_local',
      isFallback: true,
      groundedSources: [],
    };
  }
};

export const collectMissedQuestionSummaries = (studyData: UserStudyData): MissedQuestionSummary[] => {
  const allQuestions = getAllQuestions();
  const questionMap = new Map<string, LegalQuestion>();
  allQuestions.forEach(q => questionMap.set(q.id, q));

  const aggregated = new Map<
    string,
    {
      errorCount: number;
      selectedOption?: string;
      timeSpentSeconds?: number;
    }
  >();

  for (const res of studyData.results || []) {
    Object.values(res.answers || {}).forEach(ans => {
      if (!ans.isCorrect) {
        const prev = aggregated.get(ans.questionId) || { errorCount: 0 };
        aggregated.set(ans.questionId, {
          errorCount: prev.errorCount + 1,
          selectedOption: ans.selectedOption || prev.selectedOption,
          timeSpentSeconds: ans.timeSpentSeconds ?? prev.timeSpentSeconds,
        });
      }
    });
  }

  for (const errId of studyData.cadernoErrosIds || []) {
    if (!aggregated.has(errId)) {
      aggregated.set(errId, { errorCount: 1 });
    }
  }

  const summaries: MissedQuestionSummary[] = [];

  for (const [qId, meta] of aggregated.entries()) {
    const q = questionMap.get(qId);
    if (!q) continue;

    summaries.push({
      id: q.id,
      subject: q.subject,
      topic: q.topic,
      subtopic: q.subtopic,
      difficulty: q.difficulty,
      difficultyLevel: q.difficultyLevel,
      selectedOption: meta.selectedOption,
      correctAnswer: q.correctAnswer,
      errorCount: meta.errorCount,
      timeSpentSeconds: meta.timeSpentSeconds,
      statuteRefs: (q.statuteReferences || []).map(s => `${s.code} ${s.article}`).slice(0, 3),
      statementSnippet: q.statement.slice(0, 220),
      justificationSnippet: q.justification ? q.justification.slice(0, 220) : undefined,
    });
  }

  const diffScore = (item: MissedQuestionSummary) =>
    typeof item.difficultyLevel === 'number'
      ? item.difficultyLevel
      : item.difficulty === 'Difícil'
      ? 3
      : item.difficulty === 'Médio'
      ? 2
      : 1;

  return summaries.sort((a, b) => b.errorCount - a.errorCount || diffScore(b) - diffScore(a));
};

export const buildPerformanceFingerprint = (
  totalAnswered: number,
  cadernoErrosCount: number,
  missed: MissedQuestionSummary[]
): string => {
  const topIds = missed
    .slice(0, 12)
    .map(m => `${m.id}:${m.errorCount}`)
    .join(',');
  return `${totalAnswered}_${cadernoErrosCount}_${missed.length}_${topIds}`;
};

export const analyzePerformanceErrors = async (params: {
  overallAccuracy: number;
  totalAnswered: number;
  totalCorrect: number;
  rankedSubjects: Array<{ subject: string; rate: number; total: number; correct: number }>;
  missedQuestions: MissedQuestionSummary[];
}): Promise<PerformanceErrorAnalysis> => {
  const res = await fetch('/api/performance/analyze-errors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success || !data.analysis) {
    throw new Error(data.error || `Falha ao analisar desempenho (status ${res.status}).`);
  }

  return data.analysis as PerformanceErrorAnalysis;
};

