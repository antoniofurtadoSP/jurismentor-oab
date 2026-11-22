import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import type { LegalQuestion, Difficulty } from '../src/types';
import type {
  LegislationNorm,
  LawArticle,
  JurisprudenceRecord,
  OfficialExamRecord,
  LegalUpdateLog,
  ImportJobRecord,
  AiUsageLog,
  QualityConfig,
  QuestionOriginType,
  QuestionValidationStatus,
  DifficultyLevel,
  QuestionValidationReport,
} from '../src/types/knowledgeBase';
import { QUESTIONS_DATABASE } from '../src/data/questions';
import {
  SEED_NORMS,
  SEED_ARTICLES,
  SEED_JURISPRUDENCE,
  SEED_OFFICIAL_EXAMS,
} from './seeds/legalKnowledgeSeed';

export interface LegalKnowledgeDbSchema {
  schemaVersion: number;
  disciplines: string[];
  norms: LegislationNorm[];
  articles: LawArticle[];
  jurisprudence: JurisprudenceRecord[];
  officialExams: OfficialExamRecord[];
  questions: LegalQuestion[];
  updateLogs: LegalUpdateLog[];
  importJobs: ImportJobRecord[];
  aiLogs: AiUsageLog[];
  tutorCache: Record<string, { answer: string; groundedSources: string[]; createdAt: string }>;
  qualityConfig: QualityConfig;
  lastSavedAt: string;
}

const DB_DIR = path.resolve(process.cwd(), 'data');
const DB_PATH = path.join(DB_DIR, 'legal-knowledge-db.json');

export const normalizeTextForMatch = (input: string): string => {
  return (input || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

export const computeContentHash = (statement: string): string => {
  const norm = normalizeTextForMatch(statement);
  return crypto.createHash('sha256').update(norm).digest('hex').slice(0, 16);
};

export const mapDifficultyToLevel = (diff: Difficulty): DifficultyLevel => {
  if (diff === 'Fácil') return 1;
  if (diff === 'Difícil') return 3;
  return 2;
};

export const mapLevelToDifficulty = (level: DifficultyLevel): Difficulty => {
  if (level === 1) return 'Fácil';
  if (level >= 3) return 'Difícil';
  return 'Médio';
};

const inferOriginType = (q: LegalQuestion): QuestionOriginType => {
  if (q.originType) return q.originType;
  if (q.id.startsWith('ai_') || q.id.startsWith('update_fallback_')) return 'INEDITA_IA';
  if (q.examType === 'FACULDADE') return 'ACADEMICA';
  if (q.id.startsWith('oab') && q.board === 'FGV') return 'OFICIAL_OAB';
  return 'AUTORAL_PROFESSOR';
};

const enrichSeedQuestion = (q: LegalQuestion, articles: LawArticle[], jurisprudence: JurisprudenceRecord[]): LegalQuestion => {
  const now = new Date().toISOString();
  const originType = inferOriginType(q);
  const normSubject = normalizeTextForMatch(q.subject);

  const linkedArticleIds = q.linkedArticleIds || articles
    .filter(a => {
      const refMatch = q.statuteReferences.some(ref =>
        normalizeTextForMatch(ref.code).includes(normalizeTextForMatch(a.normShortName)) ||
        normalizeTextForMatch(a.articleNumber).includes(normalizeTextForMatch(ref.article).split(',')[0] || '')
      );
      return refMatch && normalizeTextForMatch(a.discipline) === normSubject;
    })
    .map(a => a.id);

  const linkedJurisprudenceIds = q.linkedJurisprudenceIds || (q.jurisprudence
    ? jurisprudence
        .filter(j => normalizeTextForMatch(q.jurisprudence || '').includes(normalizeTextForMatch(j.identification).replace('nº ', '')))
        .map(j => j.id)
    : []);

  return {
    ...q,
    originType,
    difficultyLevel: q.difficultyLevel || mapDifficultyToLevel(q.difficulty),
    validationStatus: q.validationStatus || 'PUBLICADA',
    linkedArticleIds,
    linkedJurisprudenceIds,
    sourceMeta: q.sourceMeta || {
      originName: originType === 'OFICIAL_OAB' ? 'Banco Inicial / Referência Exame de Ordem FGV' : 'Acervo Pedagógico JurisMentor',
      originUrl: originType === 'OFICIAL_OAB' ? 'https://oab.fgv.br/' : undefined,
      rightsChecked: true,
      createdAt: now,
      updatedAt: now,
      contentHash: computeContentHash(q.statement),
    },
  };
};

class LegalDatabaseStore {
  private db: LegalKnowledgeDbSchema;

  constructor() {
    this.db = this.loadOrInitialize();
  }

  private loadOrInitialize(): LegalKnowledgeDbSchema {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }

    if (fs.existsSync(DB_PATH)) {
      try {
        const raw = fs.readFileSync(DB_PATH, 'utf-8');
        const parsed = JSON.parse(raw) as LegalKnowledgeDbSchema;
        // Safe migration: ensure any new seed questions / norms not yet in DB are merged cleanly
        return this.migrateExisting(parsed);
      } catch (err) {
        console.error('[LegalDB] Erro ao carregar DB existente, reinicializando com backup:', err);
        fs.copyFileSync(DB_PATH, `${DB_PATH}.corrupted.${Date.now()}`);
      }
    }

    const initialQuestions = QUESTIONS_DATABASE.map(q =>
      enrichSeedQuestion(q, SEED_ARTICLES, SEED_JURISPRUDENCE)
    );

    const allDisciplines = Array.from(
      new Set([
        ...SEED_NORMS.map(n => n.discipline),
        ...initialQuestions.map(q => q.subject),
      ])
    ).sort();

    const examsWithCounts = SEED_OFFICIAL_EXAMS.map(ex => {
      const count = initialQuestions.filter(
        q => q.originType === 'OFICIAL_OAB' && q.year === ex.year
      ).length;
      return { ...ex, questionCount: count };
    });

    const freshDb: LegalKnowledgeDbSchema = {
      schemaVersion: 3,
      disciplines: allDisciplines,
      norms: SEED_NORMS,
      articles: SEED_ARTICLES,
      jurisprudence: SEED_JURISPRUDENCE,
      officialExams: examsWithCounts,
      questions: initialQuestions,
      updateLogs: [],
      importJobs: [],
      aiLogs: [],
      tutorCache: {},
      qualityConfig: {
        requireHumanApprovalBeforePublish: false,
        blockGenerationWithoutGroundedSources: true,
        difficultyDistribution: { level1: 20, level2: 40, level3: 25, level4: 15 },
      },
      lastSavedAt: new Date().toISOString(),
    };

    this.saveToDisk(freshDb);
    return freshDb;
  }

  private migrateExisting(existing: LegalKnowledgeDbSchema): LegalKnowledgeDbSchema {
    const seedById = new Map<string, LegalQuestion>(QUESTIONS_DATABASE.map(q => [q.id, q]));
    const needsOptionsRefresh = (existing.schemaVersion || 0) < 3;
    let optionsRefreshed = false;

    const updatedExistingQuestions = existing.questions.map(q => {
      if (needsOptionsRefresh) {
        const seedMatch = seedById.get(q.id);
        if (seedMatch) {
          const changedOpts =
            q.options.length !== seedMatch.options.length ||
            q.options.some((opt, idx) => opt.text !== seedMatch.options[idx]?.text || opt.letter !== seedMatch.options[idx]?.letter);
          if (changedOpts) {
            optionsRefreshed = true;
            return {
              ...q,
              options: seedMatch.options,
            };
          }
        }
      }
      return q;
    });

    const existingQIds = new Set(updatedExistingQuestions.map(q => q.id));
    const existingHashes = new Set(updatedExistingQuestions.map(q => q.sourceMeta?.contentHash || computeContentHash(q.statement)));
    const newSeedQuestions = QUESTIONS_DATABASE
      .filter(q => !existingQIds.has(q.id) && !existingHashes.has(computeContentHash(q.statement)))
      .map(q => enrichSeedQuestion(q, existing.articles || SEED_ARTICLES, existing.jurisprudence || SEED_JURISPRUDENCE));

    const existingNormIds = new Set((existing.norms || []).map(n => n.id));
    const missingNorms = SEED_NORMS.filter(n => !existingNormIds.has(n.id));

    const existingArtIds = new Set((existing.articles || []).map(a => a.id));
    const missingArts = SEED_ARTICLES.filter(a => !existingArtIds.has(a.id));

    const existingJurIds = new Set((existing.jurisprudence || []).map(j => j.id));
    const missingJurs = SEED_JURISPRUDENCE.filter(j => !existingJurIds.has(j.id));

    const migrated: LegalKnowledgeDbSchema = {
      ...existing,
      schemaVersion: 3,
      norms: [...(existing.norms || []), ...missingNorms],
      articles: [...(existing.articles || []), ...missingArts],
      jurisprudence: [...(existing.jurisprudence || []), ...missingJurs],
      officialExams: existing.officialExams || SEED_OFFICIAL_EXAMS,
      questions: [...updatedExistingQuestions, ...newSeedQuestions],
      updateLogs: existing.updateLogs || [],
      importJobs: existing.importJobs || [],
      aiLogs: existing.aiLogs || [],
      tutorCache: existing.tutorCache || {},
      qualityConfig: existing.qualityConfig || {
        requireHumanApprovalBeforePublish: false,
        blockGenerationWithoutGroundedSources: true,
        difficultyDistribution: { level1: 20, level2: 40, level3: 25, level4: 15 },
      },
    };

    migrated.disciplines = Array.from(
      new Set([
        ...(migrated.disciplines || []),
        ...migrated.norms.map(n => n.discipline),
        ...migrated.questions.map(q => q.subject),
      ])
    ).sort();

    if (
      needsOptionsRefresh ||
      optionsRefreshed ||
      newSeedQuestions.length > 0 ||
      missingNorms.length > 0 ||
      missingArts.length > 0 ||
      missingJurs.length > 0
    ) {
      this.saveToDisk(migrated);
    }

    return migrated;
  }

  private saveToDisk(target: LegalKnowledgeDbSchema = this.db): void {
    target.lastSavedAt = new Date().toISOString();
    const tmpPath = `${DB_PATH}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify(target, null, 2), 'utf-8');
    fs.renameSync(tmpPath, DB_PATH);
  }

  public getOverview() {
    const questionsByOrigin: Record<string, number> = {};
    const questionsByStatus: Record<string, number> = {};
    const questionsByDiscipline: Record<string, number> = {};
    const questionsByLevel: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };

    for (const q of this.db.questions) {
      const origin = q.originType || 'AUTORAL_PROFESSOR';
      const status = q.validationStatus || 'PUBLICADA';
      const level = q.difficultyLevel || 2;
      questionsByOrigin[origin] = (questionsByOrigin[origin] || 0) + 1;
      questionsByStatus[status] = (questionsByStatus[status] || 0) + 1;
      questionsByDiscipline[q.subject] = (questionsByDiscipline[q.subject] || 0) + 1;
      questionsByLevel[level] = (questionsByLevel[level] || 0) + 1;
    }

    const aiStats = this.getAiUsageSummary();

    return {
      schemaVersion: this.db.schemaVersion,
      counts: {
        disciplines: this.db.disciplines.length,
        norms: this.db.norms.length,
        articles: this.db.articles.length,
        jurisprudence: this.db.jurisprudence.length,
        officialExams: this.db.officialExams.length,
        questionsTotal: this.db.questions.length,
        questionsPublished: questionsByStatus['PUBLICADA'] || 0,
        questionsAwaitingReview: (questionsByStatus['AGUARDANDO_REVISAO'] || 0) + (questionsByStatus['GERADA'] || 0),
        questionsOutdated: questionsByStatus['DESATUALIZADA'] || 0,
        updateLogs: this.db.updateLogs.length,
        importJobs: this.db.importJobs.length,
      },
      questionsByOrigin,
      questionsByStatus,
      questionsByDiscipline,
      questionsByLevel,
      disciplines: this.db.disciplines,
      officialExams: this.db.officialExams,
      qualityConfig: this.db.qualityConfig,
      aiStats,
      lastSavedAt: this.db.lastSavedAt,
    };
  }

  public updateQualityConfig(partial: Partial<QualityConfig>): QualityConfig {
    this.db.qualityConfig = {
      ...this.db.qualityConfig,
      ...partial,
      difficultyDistribution: {
        ...this.db.qualityConfig.difficultyDistribution,
        ...(partial.difficultyDistribution || {}),
      },
    };
    this.saveToDisk();
    return this.db.qualityConfig;
  }

  public getQualityConfig(): QualityConfig {
    return this.db.qualityConfig;
  }

  // ==================== LEGISLAÇÃO ====================
  public searchLegislation(params: {
    query?: string;
    discipline?: string;
    status?: string;
    normId?: string;
  }) {
    const q = normalizeTextForMatch(params.query || '');
    const norms = this.db.norms.filter(n => {
      if (params.discipline && params.discipline !== 'ALL' && n.discipline !== params.discipline) return false;
      if (params.status && params.status !== 'ALL' && n.status !== params.status) return false;
      if (params.normId && n.id !== params.normId) return false;
      if (!q) return true;
      return (
        normalizeTextForMatch(n.title).includes(q) ||
        normalizeTextForMatch(n.shortName).includes(q) ||
        normalizeTextForMatch(n.numberAndYear).includes(q)
      );
    });

    const articles = this.db.articles.filter(a => {
      if (params.discipline && params.discipline !== 'ALL' && a.discipline !== params.discipline) return false;
      if (params.status && params.status !== 'ALL' && a.status !== params.status) return false;
      if (params.normId && a.normId !== params.normId) return false;
      if (!q) return true;
      return (
        normalizeTextForMatch(a.articleNumber).includes(q) ||
        normalizeTextForMatch(a.caput).includes(q) ||
        normalizeTextForMatch(a.subject).includes(q) ||
        normalizeTextForMatch(a.normShortName).includes(q) ||
        a.keywords.some(k => normalizeTextForMatch(k).includes(q)) ||
        (a.historicalVersions || []).some(hv => normalizeTextForMatch(hv.text).includes(q))
      );
    });

    return { norms, articles };
  }

  public upsertNorm(norm: LegislationNorm): LegislationNorm {
    const idx = this.db.norms.findIndex(n => n.id === norm.id);
    if (idx >= 0) {
      this.db.norms[idx] = norm;
    } else {
      this.db.norms.push(norm);
      if (!this.db.disciplines.includes(norm.discipline)) {
        this.db.disciplines.push(norm.discipline);
        this.db.disciplines.sort();
      }
    }
    this.saveToDisk();
    return norm;
  }

  public upsertArticle(article: LawArticle): LawArticle {
    const idx = this.db.articles.findIndex(a => a.id === article.id);
    if (idx >= 0) {
      this.db.articles[idx] = article;
    } else {
      this.db.articles.push(article);
    }
    this.saveToDisk();
    return article;
  }

  // ==================== JURISPRUDÊNCIA ====================
  public searchJurisprudence(params: {
    query?: string;
    tribunal?: string;
    category?: string;
    status?: string;
    discipline?: string;
  }) {
    const q = normalizeTextForMatch(params.query || '');
    return this.db.jurisprudence.filter(j => {
      if (params.tribunal && params.tribunal !== 'ALL' && j.tribunal !== params.tribunal) return false;
      if (params.category && params.category !== 'ALL' && j.category !== params.category) return false;
      if (params.status && params.status !== 'ALL' && j.status !== params.status) return false;
      if (params.discipline && params.discipline !== 'ALL' && j.discipline !== params.discipline) return false;
      if (!q) return true;
      return (
        normalizeTextForMatch(j.identification).includes(q) ||
        normalizeTextForMatch(j.thesis).includes(q) ||
        normalizeTextForMatch(j.summary).includes(q) ||
        normalizeTextForMatch(j.subject).includes(q)
      );
    });
  }

  public upsertJurisprudence(record: JurisprudenceRecord): JurisprudenceRecord {
    const idx = this.db.jurisprudence.findIndex(j => j.id === record.id);
    if (idx >= 0) {
      this.db.jurisprudence[idx] = record;
    } else {
      this.db.jurisprudence.push(record);
    }
    this.saveToDisk();
    return record;
  }

  // ==================== BUSCA DE FONTES PARA GROUNDING DA IA ====================
  public findGroundingSources(discipline: string, topic?: string, extraKeywords: string[] = []): {
    articles: LawArticle[];
    jurisprudence: JurisprudenceRecord[];
  } {
    const normDisc = normalizeTextForMatch(discipline);
    const topicTokens = normalizeTextForMatch(`${topic || ''} ${extraKeywords.join(' ')}`)
      .split(' ')
      .filter(t => t.length >= 3);

    const scoreMatch = (text: string, sameDisc: boolean): number => {
      let score = sameDisc ? 10 : 0;
      const norm = normalizeTextForMatch(text);
      for (const tok of topicTokens) {
        if (norm.includes(tok)) score += 6;
      }
      return score;
    };

    const scoredArticles = this.db.articles
      .filter(a => a.status !== 'REVOGADA')
      .map(a => {
        const sameDisc = normalizeTextForMatch(a.discipline) === normDisc;
        const text = `${a.normShortName} ${a.articleNumber} ${a.subject} ${a.caput} ${a.keywords.join(' ')}`;
        return { item: a, score: scoreMatch(text, sameDisc), sameDisc };
      })
      .filter(x => x.sameDisc || x.score >= 12)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(x => x.item);

    const scoredJurisprudence = this.db.jurisprudence
      .filter(j => j.status === 'VIGENTE' || j.status === 'CONTROVERTIDA')
      .map(j => {
        const sameDisc = normalizeTextForMatch(j.discipline) === normDisc;
        const text = `${j.identification} ${j.subject} ${j.thesis} ${j.summary}`;
        return { item: j, score: scoreMatch(text, sameDisc), sameDisc };
      })
      .filter(x => x.sameDisc || x.score >= 12)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(x => x.item);

    return {
      articles: scoredArticles,
      jurisprudence: scoredJurisprudence,
    };
  }

  // ==================== QUESTÕES & DUPLICIDADE ====================
  public detectDuplicateQuestion(statement: string): { isDuplicate: boolean; matchedId?: string; similarity: number } {
    const targetHash = computeContentHash(statement);
    const targetTokens = new Set(normalizeTextForMatch(statement).split(' ').filter(w => w.length > 3));

    for (const q of this.db.questions) {
      const qHash = q.sourceMeta?.contentHash || computeContentHash(q.statement);
      if (qHash === targetHash) {
        return { isDuplicate: true, matchedId: q.id, similarity: 1 };
      }

      if (targetTokens.size > 5) {
        const qTokens = new Set(normalizeTextForMatch(q.statement).split(' ').filter(w => w.length > 3));
        let intersection = 0;
        targetTokens.forEach(tok => {
          if (qTokens.has(tok)) intersection += 1;
        });
        const union = targetTokens.size + qTokens.size - intersection;
        const jaccard = union > 0 ? intersection / union : 0;
        if (jaccard >= 0.78) {
          return { isDuplicate: true, matchedId: q.id, similarity: Number(jaccard.toFixed(2)) };
        }
      }
    }

    return { isDuplicate: false, similarity: 0 };
  }

  public getQuestions(filters?: {
    discipline?: string;
    topic?: string;
    originType?: string;
    status?: string;
    difficultyLevel?: number;
    year?: number;
    examNumber?: string;
    query?: string;
  }): LegalQuestion[] {
    const q = normalizeTextForMatch(filters?.query || '');
    return this.db.questions.filter(item => {
      if (filters?.discipline && filters.discipline !== 'ALL' && item.subject !== filters.discipline) return false;
      if (filters?.topic && filters.topic !== 'ALL' && !normalizeTextForMatch(item.topic).includes(normalizeTextForMatch(filters.topic))) return false;
      if (filters?.originType && filters.originType !== 'ALL' && (item.originType || 'AUTORAL_PROFESSOR') !== filters.originType) return false;
      if (filters?.status && filters.status !== 'ALL' && (item.validationStatus || 'PUBLICADA') !== filters.status) return false;
      if (filters?.difficultyLevel && item.difficultyLevel !== filters.difficultyLevel) return false;
      if (filters?.year && item.year !== filters.year) return false;
      if (filters?.examNumber && !normalizeTextForMatch(item.examNumber || item.exam).includes(normalizeTextForMatch(filters.examNumber))) return false;
      if (q) {
        const hay = `${item.statement} ${item.topic} ${item.subtopic || ''} ${item.exam} ${item.justification}`;
        if (!normalizeTextForMatch(hay).includes(q)) return false;
      }
      return true;
    });
  }

  public getQuestionById(id: string): LegalQuestion | undefined {
    return this.db.questions.find(q => q.id === id);
  }

  public upsertQuestion(question: LegalQuestion): LegalQuestion {
    const now = new Date().toISOString();
    const enriched: LegalQuestion = {
      ...question,
      difficultyLevel: question.difficultyLevel || mapDifficultyToLevel(question.difficulty),
      originType: question.originType || inferOriginType(question),
      validationStatus: question.validationStatus || 'AGUARDANDO_REVISAO',
      sourceMeta: {
        originName: question.sourceMeta?.originName || 'Cadastro JurisMentor',
        originUrl: question.sourceMeta?.originUrl,
        rightsChecked: question.sourceMeta?.rightsChecked ?? true,
        createdAt: question.sourceMeta?.createdAt || now,
        updatedAt: now,
        contentHash: computeContentHash(question.statement),
      },
    };

    const idx = this.db.questions.findIndex(q => q.id === enriched.id);
    if (idx >= 0) {
      const prev = this.db.questions[idx];
      if (prev.correctAnswer !== enriched.correctAnswer) {
        const hist = [...(prev.gabaritoHistory || [])];
        hist.push({
          previousAnswer: prev.correctAnswer,
          newAnswer: enriched.correctAnswer,
          reason: 'Alteração de gabarito registrada no banco administrativo',
          date: now,
        });
        enriched.gabaritoHistory = hist;
      }
      this.db.questions[idx] = enriched;
    } else {
      this.db.questions.unshift(enriched);
    }

    if (!this.db.disciplines.includes(enriched.subject)) {
      this.db.disciplines.push(enriched.subject);
      this.db.disciplines.sort();
    }

    this.saveToDisk();
    return enriched;
  }

  public setQuestionValidation(
    id: string,
    status: QuestionValidationStatus,
    report?: QuestionValidationReport
  ): LegalQuestion | null {
    const idx = this.db.questions.findIndex(q => q.id === id);
    if (idx < 0) return null;
    const now = new Date().toISOString();
    const updated: LegalQuestion = {
      ...this.db.questions[idx],
      validationStatus: status,
      validationReport: report ?? this.db.questions[idx].validationReport,
      sourceMeta: {
        ...(this.db.questions[idx].sourceMeta || {
          originName: 'Acervo JurisMentor',
          rightsChecked: true,
          createdAt: now,
          updatedAt: now,
        }),
        updatedAt: now,
      },
    };
    this.db.questions[idx] = updated;
    this.saveToDisk();
    return updated;
  }

  // ==================== ATUALIZAÇÃO JURÍDICA (MÓDULO 11) ====================
  public recordLegalUpdate(payload: {
    entityType: 'LEGISLACAO' | 'JURISPRUDENCIA';
    entityId: string;
    entityLabel: string;
    previousContent: string;
    updatedContent: string;
    source: string;
    affectedDevices: string[];
    newStatus?: string;
  }): LegalUpdateLog {
    const now = new Date().toISOString();
    const affectedQuestionIds: string[] = [];

    // Identificar questões vinculadas ou que citam o dispositivo/súmula afetado sem apagar a fundamentação histórica
    for (let i = 0; i < this.db.questions.length; i++) {
      const q = this.db.questions[i];
      const matchesLinked =
        (payload.entityType === 'LEGISLACAO' && q.linkedArticleIds?.includes(payload.entityId)) ||
        (payload.entityType === 'JURISPRUDENCIA' && q.linkedJurisprudenceIds?.includes(payload.entityId));

      const matchesText = payload.affectedDevices.some(dev => {
        const needle = normalizeTextForMatch(dev);
        if (needle.length < 4) return false;
        const hay = normalizeTextForMatch(
          `${q.justification} ${q.jurisprudence || ''} ${q.statuteReferences.map(s => `${s.code} ${s.article}`).join(' ')}`
        );
        return hay.includes(needle);
      });

      if (matchesLinked || matchesText) {
        affectedQuestionIds.push(q.id);
        this.db.questions[i] = {
          ...q,
          validationStatus: 'DESATUALIZADA',
          sourceMeta: {
            ...(q.sourceMeta || {
              originName: 'Acervo JurisMentor',
              rightsChecked: true,
              createdAt: now,
              updatedAt: now,
            }),
            updatedAt: now,
          },
        };
      }
    }

    // Atualizar o registro de norma/artigo ou jurisprudência preservando histórico
    if (payload.entityType === 'LEGISLACAO') {
      const artIdx = this.db.articles.findIndex(a => a.id === payload.entityId);
      if (artIdx >= 0) {
        const current = this.db.articles[artIdx];
        const history = [...(current.historicalVersions || [])];
        history.push({
          periodLabel: `Redação anterior até ${now.slice(0, 10)}`,
          text: payload.previousContent || current.caput,
          validUntil: now.slice(0, 10),
          amendingNorm: payload.source,
        });
        this.db.articles[artIdx] = {
          ...current,
          caput: payload.updatedContent,
          status: (payload.newStatus as any) || 'ALTERADA',
          amendmentNote: `Atualizado via ${payload.source} em ${now.slice(0, 10)}`,
          historicalVersions: history,
          lastVerifiedAt: now.slice(0, 10),
        };
      }
    } else {
      const jurIdx = this.db.jurisprudence.findIndex(j => j.id === payload.entityId);
      if (jurIdx >= 0) {
        const current = this.db.jurisprudence[jurIdx];
        this.db.jurisprudence[jurIdx] = {
          ...current,
          thesis: payload.updatedContent,
          status: (payload.newStatus as any) || current.status,
          divergenceNote: `${current.divergenceNote ? current.divergenceNote + ' | ' : ''}Atualização (${now.slice(0, 10)}): ${payload.source}`,
          lastVerifiedAt: now.slice(0, 10),
        };
      }
    }

    const log: LegalUpdateLog = {
      id: `upd_${Date.now()}`,
      entityType: payload.entityType,
      entityId: payload.entityId,
      entityLabel: payload.entityLabel,
      previousContent: payload.previousContent,
      updatedContent: payload.updatedContent,
      source: payload.source,
      identifiedAt: now,
      incorporatedAt: now,
      affectedDevices: payload.affectedDevices,
      affectedQuestionIds,
    };

    this.db.updateLogs.unshift(log);
    this.saveToDisk();
    return log;
  }

  public getUpdateLogs(): LegalUpdateLog[] {
    return this.db.updateLogs;
  }

  // ==================== IMPORTAÇÕES (MÓDULO 2.4) ====================
  public logImportJob(job: ImportJobRecord): void {
    this.db.importJobs.unshift(job);
    if (this.db.importJobs.length > 100) {
      this.db.importJobs = this.db.importJobs.slice(0, 100);
    }
    this.saveToDisk();
  }

  public getImportJobs(): ImportJobRecord[] {
    return this.db.importJobs;
  }

  public registerOfficialExam(exam: OfficialExamRecord): void {
    const idx = this.db.officialExams.findIndex(e => e.id === exam.id || (e.examNumber === exam.examNumber && e.year === exam.year));
    if (idx >= 0) {
      this.db.officialExams[idx] = {
        ...this.db.officialExams[idx],
        questionCount: this.db.officialExams[idx].questionCount + exam.questionCount,
        importedAt: exam.importedAt,
      };
    } else {
      this.db.officialExams.unshift(exam);
    }
    this.saveToDisk();
  }

  // ==================== CACHE & TELEMETRIA DE IA (MÓDULO 12) ====================
  public getTutorCache(key: string) {
    return this.db.tutorCache[key] || null;
  }

  public setTutorCache(key: string, answer: string, groundedSources: string[]) {
    const keys = Object.keys(this.db.tutorCache);
    if (keys.length >= 250) {
      delete this.db.tutorCache[keys[0]];
    }
    this.db.tutorCache[key] = {
      answer,
      groundedSources,
      createdAt: new Date().toISOString(),
    };
    this.saveToDisk();
  }

  public logAiUsage(entry: Omit<AiUsageLog, 'id' | 'createdAt'>): void {
    const record: AiUsageLog = {
      ...entry,
      id: `ai_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      createdAt: new Date().toISOString(),
    };
    this.db.aiLogs.unshift(record);
    if (this.db.aiLogs.length > 300) {
      this.db.aiLogs = this.db.aiLogs.slice(0, 300);
    }
    this.saveToDisk();
  }

  public getAiUsageSummary() {
    let totalCalls = 0;
    let cachedCalls = 0;
    let failedCalls = 0;
    let totalPromptTokens = 0;
    let totalCompletionTokens = 0;
    let totalTokens = 0;

    for (const log of this.db.aiLogs) {
      totalCalls += 1;
      if (log.cached) cachedCalls += 1;
      if (!log.success) failedCalls += 1;
      totalPromptTokens += log.promptTokens || 0;
      totalCompletionTokens += log.completionTokens || 0;
      totalTokens += log.totalTokens || 0;
    }

    return {
      totalCalls,
      cachedCalls,
      failedCalls,
      cacheHitRate: totalCalls > 0 ? Math.round((cachedCalls / totalCalls) * 100) : 0,
      totalPromptTokens,
      totalCompletionTokens,
      totalTokens,
      recentLogs: this.db.aiLogs.slice(0, 20),
    };
  }
}

export const legalDb = new LegalDatabaseStore();
