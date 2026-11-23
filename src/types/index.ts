import type {
  QuestionOriginType,
  QuestionValidationStatus,
  DifficultyLevel,
  QuestionValidationReport,
} from './knowledgeBase';

export type ExamType = 'OAB' | 'CONCURSO' | 'FACULDADE';
export type ExamBoard = 'FGV' | 'CEBRASPE' | 'FCC' | 'VUNESP' | 'USP/SANFRAN' | 'PUC';
export type Difficulty = 'Fácil' | 'Médio' | 'Difícil';

export interface StatuteReference {
  code: string; // e.g. "CF/88", "Código Civil", "Estatuto da OAB", "CPC/15", "CP"
  article: string; // e.g. "Art. 28, II", "Art. 5º, LV", "Art. 186"
  textSnippet: string; // official text of the article
  normId?: string;
  articleId?: string;
}

export interface QuestionOption {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface GabaritoChangeRecord {
  previousAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  newAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  reason: string;
  date: string;
}

export interface LegalQuestion {
  id: string;
  exam: string; // e.g. "XXXIX Exame de Ordem Unificado (OAB 39) - FGV"
  examType: ExamType;
  board: ExamBoard;
  year: number;
  subject: string; // e.g. "Ética Profissional e Estatuto da OAB"
  topic: string; // e.g. "Incompatibilidades e Impedimentos"
  subtopic?: string;
  statement: string; // Enunciado com caso concreto
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  justification: string; // Fundamentação jurídica da correta
  whyWrong: {
    letter: 'A' | 'B' | 'C' | 'D' | 'E';
    explanation: string;
    distractorTechnique?: string;
  }[];
  statuteReferences: StatuteReference[];
  jurisprudence?: string; // Súmula do STF/STJ ou Tema Repetitivo
  professorTip?: string; // Macete / Pegadinha da banca
  difficulty: Difficulty;
  // Novos campos estruturados (Módulos 2, 3, 4, 8 e 9)
  originType?: QuestionOriginType;
  examNumber?: string;
  examEdition?: string;
  difficultyLevel?: DifficultyLevel;
  pedagogicalObjective?: string;
  evaluatedCompetency?: string;
  practicalExample?: string;
  examGuidance?: string;
  gabaritoHistory?: GabaritoChangeRecord[];
  validationStatus?: QuestionValidationStatus;
  validationReport?: QuestionValidationReport;
  linkedArticleIds?: string[];
  linkedJurisprudenceIds?: string[];
  sourceMeta?: {
    originName: string;
    originUrl?: string;
    rightsChecked: boolean;
    createdAt: string;
    updatedAt: string;
    contentHash?: string;
  };
}

export type SimuladoMode = 'PROVA' | 'TREINO' | 'PROFESSOR_FIXACAO';

export interface FixationQueueItem {
  questionId: string;
  attemptsCount: number;
  lastAttemptWrongLetter?: string;
  dueAtVirtualIndex: number;
  status: 'PENDING' | 'MASTERED';
}

export interface SimuladoConfig {
  id: string;
  title: string;
  description: string;
  type: 'OAB_COMPLETO' | 'OAB_EXPRESS' | 'DISCIPLINA' | 'PERSONALIZADO' | 'CADERNO_ERROS' | 'DIAGNOSTICO';
  questionCount: number;
  timeLimitMinutes: number | null; // null = sem limite
  subjects?: string[];
  topics?: string[];
  board?: string;
  difficulty?: string;
  difficultyLevel?: DifficultyLevel | 'ALL';
  originFilter?: QuestionOriginType | 'ALL';
  examTypeFilter?: ExamType | 'ALL';
  mode: SimuladoMode;
  repeatWrongQuestionsInterval?: number; // how many questions later it re-appears (default: 2)
}

export interface SimuladoAnswer {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  markedForReview: boolean;
  eliminatedOptions: string[];
}

export interface SimuladoResult {
  id: string;
  configId: string;
  title: string;
  date: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  timeSpentSeconds: number;
  scorePercentage: number;
  passedOABCutoff: boolean; // >= 50%
  answers: Record<string, SimuladoAnswer>;
  subjectStats: Record<string, { total: number; correct: number }>;
}

export interface ScheduleDay {
  dayNumber: number;
  title: string;
  subject: string;
  subtopic: string;
  weightInExam: 'Muito Alto' | 'Alto' | 'Médio';
  targetQuestions: number;
  readingFocus: string;
  isCompleted: boolean;
  dateAssigned?: string;
}

export interface StudyPlan {
  id: string;
  title: string;
  subtitle: string;
  target: 'OAB' | 'CONCURSO' | 'FACULDADE';
  totalDays: number;
  description: string;
  days: ScheduleDay[];
}

export interface LegalFlashcard {
  id: string;
  subject: string;
  title: string;
  front: string; // Pergunta ou conceito
  back: string; // Resposta, artigo e entendimento do STF/STJ
  articleRef: string;
  category: 'Súmula Vinculante' | 'Súmula STJ' | 'Súmula STF' | 'Artigo Chave' | 'Doutrina';
  timesReviewed: number;
  lastReviewed?: string;
  mastered: boolean;
}

export interface SubjectStudyGoal {
  dailyQuestions: number;
  dailyMinutes: number;
}

export interface UserStudyData {
  results: SimuladoResult[];
  cadernoErrosIds: string[]; // Question IDs wrong and not yet mastered
  bookmarkedQuestionIds: string[];
  completedScheduleDays: Record<string, boolean>; // key: `${planId}_day_${dayNumber}`
  flashcardStatus: Record<string, { mastered: boolean; reviews: number }>;
  subjectGoals?: Record<string, SubjectStudyGoal>;
  activePlanId: string;
  lastActiveDate: string;
  streakDays: number;
}

export interface ActiveQueueRef {
  instanceId: string;
  questionId: string;
  attemptNumber: number;
  isRetry: boolean;
  previousWrongLetter?: string;
}

export interface ActiveSimuladoSession {
  config: SimuladoConfig;
  queueRefs: ActiveQueueRef[];
  currentIndex: number;
  questionMastery: Record<string, {
    firstAttemptCorrect: boolean;
    isFixed: boolean;
    attempts: number;
    wrongCount: number;
  }>;
  answers: Record<string, SimuladoAnswer>;
  instanceAnswers: Record<string, {
    selectedLetter: string;
    isCorrect: boolean;
  }>;
  eliminated: Record<string, string[]>;
  markedReview: Record<string, boolean>;
  secondsRemaining: number | null;
  elapsedSeconds: number;
  repeatInterval: number;
  isOpenInView?: boolean;
  updatedAt: string;
}

export interface MissedQuestionSummary {
  id: string;
  subject: string;
  topic: string;
  subtopic?: string;
  difficulty: Difficulty;
  difficultyLevel?: number;
  selectedOption?: string;
  correctAnswer: string;
  errorCount: number;
  timeSpentSeconds?: number;
  statuteRefs: string[];
  statementSnippet: string;
  justificationSnippet?: string;
}

export interface PriorityStudyTopic {
  subject: string;
  topic: string;
  priority: 'CRÍTICA' | 'ALTA' | 'MÉDIA';
  difficultyDetected: string;
  errorCount: number;
  errorPattern: string;
  recommendedAction: string;
  legalBasis: string[];
}

export interface PerformanceErrorAnalysis {
  summaryDiagnosis: string;
  hardestPatternAlert: string;
  priorityTopics: PriorityStudyTopic[];
  studyStrategySteps: string[];
  analyzedErrorsCount: number;
  generatedAt: string;
}

