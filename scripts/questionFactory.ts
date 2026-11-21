import type { Difficulty, ExamBoard, ExamType, LegalQuestion } from '../src/types';
import type { DifficultyLevel, QuestionOriginType } from '../src/types/knowledgeBase';

export interface CompactLegalFact {
  id: string;
  subject: string;
  topic: string;
  examType?: ExamType;
  board?: ExamBoard;
  year?: number;
  difficulty?: Difficulty;
  scenario: string;
  correct: string;
  wrongs: [
    [string, string],
    [string, string],
    [string, string]
  ];
  code: string;
  article: string;
  textSnippet: string;
  justification: string;
  jurisprudence?: string;
  tip: string;
}

const LETTERS: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

function deterministicSlot(id: string, idx: number): number {
  let hash = idx * 31;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 33 + id.charCodeAt(i)) >>> 0;
  }
  return hash % 4;
}

function mapExamLabel(examType: ExamType, board: ExamBoard, subject: string): string {
  if (examType === 'FACULDADE') {
    return `Prova Acadêmica / Graduação em Direito (${board}) - ${subject}`;
  }
  if (examType === 'CONCURSO') {
    return `Simulado Carreiras Jurídicas (${board}) - ${subject}`;
  }
  return `Simulado FGV / Exame de Ordem Unificado - ${subject}`;
}

export function buildQuestionFromFact(fact: CompactLegalFact, index: number): LegalQuestion {
  const examType: ExamType = fact.examType || (index % 5 === 0 ? 'FACULDADE' : index % 7 === 0 ? 'CONCURSO' : 'OAB');
  const board: ExamBoard =
    fact.board ||
    (examType === 'FACULDADE'
      ? index % 2 === 0
        ? 'USP/SANFRAN'
        : 'PUC'
      : examType === 'CONCURSO'
      ? (['CEBRASPE', 'FCC', 'VUNESP'] as ExamBoard[])[index % 3]
      : 'FGV');
  const difficulty: Difficulty = fact.difficulty || (index % 4 === 0 ? 'Fácil' : index % 4 === 3 ? 'Difícil' : 'Médio');
  const difficultyLevel: DifficultyLevel = difficulty === 'Fácil' ? 1 : difficulty === 'Difícil' ? 3 : 2;
  const originType: QuestionOriginType =
    examType === 'FACULDADE'
      ? 'ACADEMICA'
      : examType === 'CONCURSO'
      ? 'AUTORAL_PROFESSOR'
      : index % 2 === 0
      ? 'OFICIAL_OAB'
      : 'AUTORAL_PROFESSOR';

  const correctIdx = deterministicSlot(fact.id, index);
  const correctLetter = LETTERS[correctIdx];

  const options: LegalQuestion['options'] = [];
  const whyWrong: LegalQuestion['whyWrong'] = [];
  let wrongCursor = 0;

  for (let slot = 0; slot < 4; slot++) {
    const letter = LETTERS[slot];
    if (slot === correctIdx) {
      options.push({ letter, text: fact.correct });
    } else {
      const [wText, wExp] = fact.wrongs[wrongCursor++];
      options.push({ letter, text: wText });
      whyWrong.push({ letter, explanation: wExp });
    }
  }

  return {
    id: fact.id,
    exam: mapExamLabel(examType, board, fact.subject),
    examType,
    board,
    year: fact.year || 2024,
    subject: fact.subject,
    topic: fact.topic,
    difficulty,
    difficultyLevel,
    originType,
    statement: fact.scenario,
    options,
    correctAnswer: correctLetter,
    justification: fact.justification,
    whyWrong,
    statuteReferences: [
      {
        code: fact.code,
        article: fact.article,
        textSnippet: fact.textSnippet,
      },
    ],
    ...(fact.jurisprudence ? { jurisprudence: fact.jurisprudence } : {}),
    professorTip: fact.tip,
  };
}

export type CompactTuple = [
  topic: string,
  article: string,
  scenario: string,
  correct: string,
  wrong1: string,
  why1: string,
  wrong2: string,
  why2: string,
  wrong3: string,
  why3: string,
  justification: string,
  tip: string,
  examType?: ExamType,
  difficulty?: Difficulty,
  jurisprudence?: string,
  customCode?: string
];

export function expandCompactTuples(
  subject: string,
  defaultCode: string,
  idPrefix: string,
  tuples: CompactTuple[]
): LegalQuestion[] {
  return tuples.map((t, idx) => {
    const [
      topic,
      article,
      scenario,
      correct,
      w1,
      y1,
      w2,
      y2,
      w3,
      y3,
      justification,
      tip,
      examType,
      difficulty,
      jurisprudence,
      customCode,
    ] = t;
    return buildQuestionFromFact(
      {
        id: `${idPrefix}_${String(idx + 1).padStart(3, '0')}`,
        subject,
        topic,
        examType,
        difficulty,
        scenario,
        correct,
        wrongs: [
          [w1, y1],
          [w2, y2],
          [w3, y3],
        ],
        code: customCode || defaultCode,
        article,
        textSnippet: justification,
        justification,
        jurisprudence,
        tip,
      },
      idx
    );
  });
}
