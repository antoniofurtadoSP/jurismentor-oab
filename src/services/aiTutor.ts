import { LegalQuestion } from '../types';
import type { ExplanationLevel } from '../types/knowledgeBase';

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
