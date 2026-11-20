import type { LegalQuestion } from '../types';
import type {
  DifficultyLevel,
  ImportJobRecord,
  JurisprudenceRecord,
  LawArticle,
  LegalUpdateLog,
  LegislationNorm,
  OfficialExamRecord,
  QualityConfig,
  QuestionValidationReport,
  QuestionValidationStatus,
} from '../types/knowledgeBase';

export interface KnowledgeOverviewResponse {
  success: boolean;
  schemaVersion: number;
  counts: {
    disciplines: number;
    norms: number;
    articles: number;
    jurisprudence: number;
    officialExams: number;
    questionsTotal: number;
    questionsPublished: number;
    questionsAwaitingReview: number;
    questionsOutdated: number;
    updateLogs: number;
    importJobs: number;
  };
  questionsByOrigin: Record<string, number>;
  questionsByStatus: Record<string, number>;
  questionsByDiscipline: Record<string, number>;
  questionsByLevel: Record<number, number>;
  disciplines: string[];
  officialExams: OfficialExamRecord[];
  qualityConfig: QualityConfig;
  aiStats: {
    totalCalls: number;
    cachedCalls: number;
    failedCalls: number;
    cacheHitRate: number;
    totalPromptTokens: number;
    totalCompletionTokens: number;
    totalTokens: number;
    recentLogs: Array<{
      id: string;
      endpoint: string;
      model: string;
      totalTokens: number;
      cached: boolean;
      durationMs: number;
      success: boolean;
      createdAt: string;
    }>;
  };
  lastSavedAt: string;
}

export async function fetchKbOverview(): Promise<KnowledgeOverviewResponse> {
  const res = await fetch('/api/kb/overview');
  if (!res.ok) throw new Error('Falha ao carregar visão geral da Base Jurídica');
  return res.json();
}

export async function updateQualityConfig(partial: Partial<QualityConfig>): Promise<QualityConfig> {
  const res = await fetch('/api/kb/config', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(partial),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao salvar configuração');
  return data.qualityConfig;
}

export async function searchLegislation(params: {
  query?: string;
  discipline?: string;
  status?: string;
  normId?: string;
}): Promise<{ norms: LegislationNorm[]; articles: LawArticle[] }> {
  const qs = new URLSearchParams();
  if (params.query) qs.set('query', params.query);
  if (params.discipline) qs.set('discipline', params.discipline);
  if (params.status) qs.set('status', params.status);
  if (params.normId) qs.set('normId', params.normId);

  const res = await fetch(`/api/kb/legislation?${qs.toString()}`);
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao buscar legislação');
  return { norms: data.norms || [], articles: data.articles || [] };
}

export async function saveNorm(norm: Partial<LegislationNorm>): Promise<LegislationNorm> {
  const res = await fetch('/api/kb/legislation/norm', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(norm),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao salvar norma');
  return data.norm;
}

export async function saveArticle(article: Partial<LawArticle>): Promise<LawArticle> {
  const res = await fetch('/api/kb/legislation/article', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(article),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao salvar artigo');
  return data.article;
}

export async function searchJurisprudence(params: {
  query?: string;
  tribunal?: string;
  category?: string;
  status?: string;
  discipline?: string;
}): Promise<JurisprudenceRecord[]> {
  const qs = new URLSearchParams();
  if (params.query) qs.set('query', params.query);
  if (params.tribunal) qs.set('tribunal', params.tribunal);
  if (params.category) qs.set('category', params.category);
  if (params.status) qs.set('status', params.status);
  if (params.discipline) qs.set('discipline', params.discipline);

  const res = await fetch(`/api/kb/jurisprudence?${qs.toString()}`);
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao buscar jurisprudência');
  return data.records || [];
}

export async function saveJurisprudence(record: Partial<JurisprudenceRecord>): Promise<JurisprudenceRecord> {
  const res = await fetch('/api/kb/jurisprudence', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao salvar jurisprudência');
  return data.record;
}

export async function fetchKbQuestions(filters?: {
  discipline?: string;
  topic?: string;
  originType?: string;
  status?: string;
  difficultyLevel?: number;
  year?: number;
  examNumber?: string;
  query?: string;
}): Promise<LegalQuestion[]> {
  const qs = new URLSearchParams();
  if (filters?.discipline) qs.set('discipline', filters.discipline);
  if (filters?.topic) qs.set('topic', filters.topic);
  if (filters?.originType) qs.set('originType', filters.originType);
  if (filters?.status) qs.set('status', filters.status);
  if (filters?.difficultyLevel) qs.set('difficultyLevel', String(filters.difficultyLevel));
  if (filters?.year) qs.set('year', String(filters.year));
  if (filters?.examNumber) qs.set('examNumber', filters.examNumber);
  if (filters?.query) qs.set('query', filters.query);

  const res = await fetch(`/api/kb/questions?${qs.toString()}`);
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao buscar questões');
  return data.questions || [];
}

export async function createOrUpdateKbQuestion(
  question: Partial<LegalQuestion> & { id?: string; allowDuplicate?: boolean }
): Promise<LegalQuestion> {
  const isEdit = Boolean(question.id);
  const url = isEdit ? `/api/kb/questions/${question.id}` : '/api/kb/questions';
  const res = await fetch(url, {
    method: isEdit ? 'PUT' : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(question),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao salvar questão');
  return data.question;
}

export async function updateQuestionStatus(
  id: string,
  status: QuestionValidationStatus
): Promise<LegalQuestion> {
  const res = await fetch(`/api/kb/questions/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao atualizar status');
  return data.question;
}

export async function runTwoStageValidation(
  id: string,
  runAiSecondPass = true
): Promise<{ question: LegalQuestion; validation: { status: QuestionValidationStatus; report: QuestionValidationReport } }> {
  const res = await fetch(`/api/kb/questions/${id}/validate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ runAiSecondPass }),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao validar questão');
  return data;
}

export async function generateGroundedQuestionsApi(params: {
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
  source: string;
  groundingSummary: { articlesCount: number; jurisprudenceCount: number; references: string[] };
  questions: LegalQuestion[];
}> {
  const res = await fetch('/api/kb/questions/generate-grounded', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Erro ao gerar questões fundamentadas');
  return data;
}

export async function extractPdfTextFromFile(file: File): Promise<{ text: string; pageCount: number }> {
  const base64Data = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Erro ao ler arquivo PDF local'));
    reader.readAsDataURL(file);
  });

  const res = await fetch('/api/kb/import/extract-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ base64Data }),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao extrair PDF');
  return { text: data.text, pageCount: data.pageCount };
}

export async function processImportApi(payload: {
  importType: 'PROVA_OAB' | 'LEGISLACAO' | 'JURISPRUDENCIA';
  format: 'JSON' | 'CSV' | 'PDF' | 'TXT';
  fileName: string;
  content: string;
  dryRun?: boolean;
  metadata?: Record<string, any>;
}): Promise<{
  success: boolean;
  dryRun: boolean;
  totalParsed: number;
  insertedCount: number;
  duplicatesSkipped: number;
  errors: string[];
  previewItems: any[];
}> {
  const res = await fetch('/api/kb/import/process', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao processar importação');
  return data;
}

export async function fetchImportJobs(): Promise<ImportJobRecord[]> {
  const res = await fetch('/api/kb/import/jobs');
  const data = await res.json();
  if (!res.ok || !data.success) return [];
  return data.jobs || [];
}

export async function fetchLegalUpdates(): Promise<LegalUpdateLog[]> {
  const res = await fetch('/api/kb/updates');
  const data = await res.json();
  if (!res.ok || !data.success) return [];
  return data.updates || [];
}

export async function recordLegalUpdateApi(payload: {
  entityType: 'LEGISLACAO' | 'JURISPRUDENCIA';
  entityId: string;
  entityLabel: string;
  previousContent: string;
  updatedContent: string;
  source: string;
  affectedDevices: string[];
  newStatus?: string;
}): Promise<LegalUpdateLog> {
  const res = await fetch('/api/kb/updates', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao registrar atualização jurídica');
  return data.log;
}
