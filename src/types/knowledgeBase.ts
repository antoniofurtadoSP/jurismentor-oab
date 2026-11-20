export type QuestionOriginType =
  | 'OFICIAL_OAB'
  | 'INEDITA_IA'
  | 'AUTORAL_PROFESSOR'
  | 'ACADEMICA';

export type QuestionValidationStatus =
  | 'GERADA'
  | 'EM_VALIDACAO'
  | 'AGUARDANDO_REVISAO'
  | 'APROVADA'
  | 'PUBLICADA'
  | 'SUSPENSA'
  | 'DESATUALIZADA';

export type DifficultyLevel = 1 | 2 | 3 | 4;

export type NormStatus = 'VIGENTE' | 'ALTERADA' | 'REVOGADA';

export type JurisprudenceStatus =
  | 'VIGENTE'
  | 'SUPERADA'
  | 'CANCELADA'
  | 'REVISADA'
  | 'CONTROVERTIDA'
  | 'PENDENTE';

export type JurisprudenceCategory =
  | 'SUMULA_VINCULANTE'
  | 'SUMULA_STF'
  | 'SUMULA_STJ'
  | 'REPERCUSSAO_GERAL'
  | 'RECURSO_REPETITIVO'
  | 'INFORMATIVO'
  | 'PRECEDENTE'
  | 'TESE';

export type ExplanationLevel = 'simples' | 'intermediario' | 'aprofundado';

export interface LegislationAmendment {
  id: string;
  amendingNorm: string; // Ex.: "Emenda Constitucional nº 132/2023"
  date: string;
  summary: string;
  affectedArticles: string[];
}

export interface LegislationNorm {
  id: string;
  discipline: string;
  title: string; // Ex.: "Constituição da República Federativa do Brasil"
  shortName: string; // Ex.: "CF/88"
  numberAndYear: string; // Ex.: "Constituição de 1988" ou "Lei nº 8.906/1994"
  publicationDate: string;
  status: NormStatus;
  officialSourceUrl: string;
  lastVerifiedAt: string;
  amendmentsHistory: LegislationAmendment[];
  revokedNote?: string;
}

export interface ArticleHistoricalVersion {
  periodLabel: string; // Ex.: "Redação original (1992–2021)"
  text: string;
  validUntil: string;
  amendingNorm: string;
}

export interface LawArticle {
  id: string;
  normId: string;
  normShortName: string;
  discipline: string;
  subject: string;
  articleNumber: string; // Ex.: "Art. 150, III, 'b' e 'c'"
  caput: string;
  paragraphs?: string[];
  items?: string[];
  status: NormStatus;
  keywords: string[];
  historicalVersions?: ArticleHistoricalVersion[];
  amendmentNote?: string;
  officialSourceUrl: string;
  lastVerifiedAt: string;
}

export interface JurisprudenceRecord {
  id: string;
  tribunal: 'STF' | 'STJ' | 'CNJ' | 'TST';
  category: JurisprudenceCategory;
  identification: string; // Ex.: "Súmula Vinculante nº 41", "Tema 863 RG"
  discipline: string;
  subject: string;
  thesis: string;
  summary: string; // Ementa / síntese
  judgmentDate: string;
  publicationDate: string;
  officialSourceUrl: string;
  status: JurisprudenceStatus;
  divergenceNote?: string;
  supersededBy?: string;
  lastVerifiedAt: string;
}

export interface OfficialExamRecord {
  id: string;
  examNumber: string; // Ex.: "40º Exame"
  year: number;
  edition: string; // Ex.: "2024.1"
  board: string; // Ex.: "FGV"
  officialSourceUrl: string;
  rightsVerified: boolean;
  rightsNote: string;
  questionCount: number;
  importedAt: string;
}

export interface LegalUpdateLog {
  id: string;
  entityType: 'LEGISLACAO' | 'JURISPRUDENCIA';
  entityId: string;
  entityLabel: string;
  previousContent: string;
  updatedContent: string;
  source: string;
  identifiedAt: string;
  incorporatedAt: string;
  affectedDevices: string[];
  affectedQuestionIds: string[];
}

export interface ImportJobRecord {
  id: string;
  importType: 'PROVA_OAB' | 'LEGISLACAO' | 'JURISPRUDENCIA';
  format: 'JSON' | 'CSV' | 'PDF' | 'TXT';
  fileName: string;
  totalParsed: number;
  insertedCount: number;
  duplicatesSkipped: number;
  failedCount: number;
  errors: string[];
  status: 'CONCLUIDO' | 'CONCLUIDO_COM_AVISOS' | 'FALHA';
  createdAt: string;
}

export interface AiUsageLog {
  id: string;
  endpoint: string;
  model: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  cached: boolean;
  durationMs: number;
  success: boolean;
  errorMessage?: string;
  createdAt: string;
}

export interface QualityConfig {
  requireHumanApprovalBeforePublish: boolean;
  blockGenerationWithoutGroundedSources: boolean;
  difficultyDistribution: {
    level1: number; // % Básico
    level2: number; // % Intermediário
    level3: number; // % Avançado
    level4: number; // % Desafio OAB
  };
}

export interface ValidationCheckResult {
  name: string;
  passed: boolean;
  notes: string;
}

export interface QuestionValidationReport {
  verifiedAt: string;
  verifiedBy: string;
  checks: QuestionValidationCheck[];
  score: number;
  sufficientSources: boolean;
  summary: string;
}

export type QuestionValidationCheck = ValidationCheckResult;
