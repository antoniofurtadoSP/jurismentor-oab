import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { NextFunction, Request, Response } from 'express';
import type { ExamBoard, LegalQuestion } from '../src/types';
import type {
  DifficultyLevel,
  JurisprudenceCategory,
  JurisprudenceRecord,
  JurisprudenceStatus,
  LawArticle,
  LegislationNorm,
  NormStatus,
  QualityConfig,
  QuestionOriginType,
  QuestionValidationStatus,
} from '../src/types/knowledgeBase';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// CONFIGURAÇÃO DE PROJETO FIREBASE E ADMINISTRADORES AUTORIZADOS
// ============================================================================
function loadFirebaseProjectId(): string {
  const fromEnv = (process.env.FIREBASE_PROJECT_ID || '').trim();
  if (fromEnv) return fromEnv;

  try {
    const configPath = path.resolve(__dirname, '../firebase-applet-config.json');
    if (fs.existsSync(configPath)) {
      const parsed = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      if (parsed?.projectId && typeof parsed.projectId === 'string') {
        return parsed.projectId.trim();
      }
    }
  } catch {
    // fallback handled below
  }
  return 'gen-lang-client-0224741346';
}

const FIREBASE_PROJECT_ID = loadFirebaseProjectId();
const GOOGLE_SECURETOKEN_CERTS_URL =
  'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';

const DEFAULT_ADMIN_EMAIL = 'antonioclaudiofp@gmail.com';

export function getAllowedAdminEmails(): Set<string> {
  const raw = (process.env.ADMIN_EMAILS || '').trim();
  const emails = new Set<string>();
  if (raw) {
    for (const part of raw.split(/[,;\s]+/)) {
      const clean = part.trim().toLowerCase();
      if (clean && clean.includes('@')) {
        emails.add(clean);
      }
    }
  }
  if (emails.size === 0) {
    emails.add(DEFAULT_ADMIN_EMAIL.toLowerCase());
  }
  return emails;
}

export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return getAllowedAdminEmails().has(email.trim().toLowerCase());
}

// ============================================================================
// CABEÇALHOS DE SEGURANÇA HTTP (COMPATÍVEL COM IFRAME DO PREVIEW)
// ============================================================================
export function securityHeadersMiddleware(_req: Request, res: Response, next: NextFunction): void {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  next();
}

// ============================================================================
// DETECÇÃO DE AMBIENTE DE PRODUÇÃO / HOSPEDAGEM PÚBLICA
// ============================================================================
export function isPublicProductionDeployment(req?: Request): boolean {
  if (process.env.NODE_ENV === 'production') return true;
  if (process.env.DISABLE_ZIP_EXPORT === 'true') return true;
  if (process.env.RENDER || process.env.RENDER_EXTERNAL_URL || process.env.RENDER_SERVICE_ID) return true;
  if (process.env.RAILWAY_ENVIRONMENT || process.env.FLY_APP_NAME || process.env.VERCEL) return true;

  if (req) {
    const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').toLowerCase();
    if (host.includes('onrender.com') || host.startsWith('ais-pre-')) {
      return true;
    }
  }
  return false;
}

// ============================================================================
// LIMITADOR DE TAXA (SLIDING WINDOW EM MEMÓRIA)
// ============================================================================
interface RateLimitBucket {
  timestamps: number[];
}

export function createRateLimiter(options: {
  windowMs: number;
  maxRequests: number;
  message: string;
  ttsFallback?: boolean;
}) {
  const buckets = new Map<string, RateLimitBucket>();

  const cleanup = setInterval(() => {
    const cutoff = Date.now() - options.windowMs;
    for (const [key, bucket] of buckets.entries()) {
      bucket.timestamps = bucket.timestamps.filter((t) => t > cutoff);
      if (bucket.timestamps.length === 0) {
        buckets.delete(key);
      }
    }
  }, Math.max(30_000, options.windowMs));
  cleanup.unref();

  return (req: Request, res: Response, next: NextFunction) => {
    const clientIp = (req.ip || req.socket.remoteAddress || 'unknown').slice(0, 100);
    const now = Date.now();
    const cutoff = now - options.windowMs;

    let bucket = buckets.get(clientIp);
    if (!bucket) {
      bucket = { timestamps: [] };
      buckets.set(clientIp, bucket);
    }
    bucket.timestamps = bucket.timestamps.filter((t) => t > cutoff);

    if (bucket.timestamps.length >= options.maxRequests) {
      const oldest = bucket.timestamps[0] || now;
      const retryAfterSeconds = Math.max(1, Math.ceil((oldest + options.windowMs - now) / 1000));
      res.setHeader('Retry-After', String(retryAfterSeconds));

      if (options.ttsFallback) {
        return res.status(429).json({
          success: false,
          useLocalFallback: true,
          reason: 'quota',
          retryAfterSeconds,
          message: `${options.message} Aguarde ~${retryAfterSeconds}s.`,
        });
      }

      return res.status(429).json({
        success: false,
        error: options.message,
        retryAfterSeconds,
      });
    }

    bucket.timestamps.push(now);
    next();
  };
}

// ============================================================================
// VERIFICAÇÃO CRIPTOGRÁFICA DE ID TOKEN DO FIREBASE AUTH
// ============================================================================
interface CertCacheState {
  certs: Record<string, string>;
  expiresAt: number;
  lastFetchAt: number;
}

const certCache: CertCacheState = {
  certs: {},
  expiresAt: 0,
  lastFetchAt: 0,
};

async function fetchGooglePublicCerts(forceRefresh = false): Promise<Record<string, string>> {
  const now = Date.now();
  if (!forceRefresh && Object.keys(certCache.certs).length > 0 && now < certCache.expiresAt) {
    return certCache.certs;
  }
  if (forceRefresh && now - certCache.lastFetchAt < 15_000 && Object.keys(certCache.certs).length > 0) {
    return certCache.certs;
  }

  try {
    const response = await fetch(GOOGLE_SECURETOKEN_CERTS_URL, {
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const certs = (await response.json()) as Record<string, string>;
    const cc = response.headers.get('cache-control') || '';
    const maxAgeMatch = cc.match(/max-age=(\d+)/i);
    const maxAgeSec = maxAgeMatch ? Math.max(60, Math.min(86400, Number(maxAgeMatch[1]))) : 3600;

    certCache.certs = certs;
    certCache.lastFetchAt = now;
    certCache.expiresAt = now + maxAgeSec * 1000;
    return certs;
  } catch (err) {
    if (Object.keys(certCache.certs).length > 0) {
      return certCache.certs;
    }
    throw err;
  }
}

function decodeBase64UrlJson<T = Record<string, any>>(segment: string): T {
  const normalized = segment.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  const json = Buffer.from(padded, 'base64').toString('utf8');
  return JSON.parse(json) as T;
}

export interface VerifiedFirebaseUser {
  uid: string;
  email: string;
  emailVerified: boolean;
  name?: string;
}

export async function verifyFirebaseIdToken(idToken: string): Promise<VerifiedFirebaseUser> {
  if (!idToken || typeof idToken !== 'string' || idToken.length > 8192) {
    throw new Error('Token inválido.');
  }

  const parts = idToken.split('.');
  if (parts.length !== 3) {
    throw new Error('Formato JWT inválido.');
  }

  const [rawHeader, rawPayload, rawSignature] = parts;
  const header = decodeBase64UrlJson<{ alg?: string; kid?: string }>(rawHeader);
  if (header?.alg !== 'RS256' || typeof header?.kid !== 'string' || !header.kid) {
    throw new Error('Cabeçalho JWT não suportado.');
  }

  let certs = await fetchGooglePublicCerts(false);
  let pem = certs[header.kid];
  if (!pem) {
    certs = await fetchGooglePublicCerts(true);
    pem = certs[header.kid];
  }
  if (!pem) {
    throw new Error('Chave pública do emissor não encontrada.');
  }

  const sigBuf = Buffer.from(
    rawSignature.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (rawSignature.length % 4)) % 4),
    'base64'
  );
  const verifier = crypto.createVerify('RSA-SHA256');
  verifier.update(`${rawHeader}.${rawPayload}`);
  verifier.end();
  if (!verifier.verify(pem, sigBuf)) {
    throw new Error('Assinatura do token inválida.');
  }

  const payload = decodeBase64UrlJson<Record<string, any>>(rawPayload);
  const nowSec = Math.floor(Date.now() / 1000);

  if (payload.aud !== FIREBASE_PROJECT_ID) {
    throw new Error('Audiência do token incompatível.');
  }
  if (payload.iss !== `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`) {
    throw new Error('Emissor do token incompatível.');
  }
  if (typeof payload.sub !== 'string' || !payload.sub.trim() || payload.sub.length > 128) {
    throw new Error('Identificador de usuário ausente.');
  }
  if (typeof payload.exp !== 'number' || payload.exp <= nowSec - 30) {
    throw new Error('Sessão expirada. Faça login novamente.');
  }
  if (typeof payload.iat !== 'number' || payload.iat > nowSec + 60) {
    throw new Error('Timestamp do token inválido.');
  }
  if (payload.email_verified !== true || typeof payload.email !== 'string' || !payload.email.includes('@')) {
    throw new Error('E-mail verificado obrigatório.');
  }

  return {
    uid: payload.sub,
    email: payload.email.trim().toLowerCase(),
    emailVerified: true,
    name: typeof payload.name === 'string' ? payload.name.slice(0, 120) : undefined,
  };
}

export async function extractVerifiedUser(req: Request): Promise<VerifiedFirebaseUser | null> {
  const authHeader = String(req.headers.authorization || '');
  if (!authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.slice(7).trim();
  if (!token) return null;
  return verifyFirebaseIdToken(token);
}

export async function requireAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = String(req.headers.authorization || '');
    if (!authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        error: 'Autenticação administrativa obrigatória. Entre com a conta Google autorizada.',
      });
      return;
    }

    const token = authHeader.slice(7).trim();
    const user = await verifyFirebaseIdToken(token);

    if (!isAdminEmail(user.email)) {
      res.status(403).json({
        success: false,
        error: 'Acesso restrito ao administrador autorizado da Base Jurídica.',
      });
      return;
    }

    (req as any).adminUser = user;
    next();
  } catch (err: any) {
    res.status(401).json({
      success: false,
      error: err?.message || 'Sessão administrativa inválida ou expirada. Faça login novamente.',
    });
  }
}

// ============================================================================
// SANITIZAÇÃO E VALIDAÇÃO DE ENTRADA (ANTI-PROTOTYPE POLLUTION & ANTI-XSS)
// ============================================================================
const FORBIDDEN_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

export function isSafeObjectKey(key: string): boolean {
  return typeof key === 'string' && key.length > 0 && key.length <= 200 && !FORBIDDEN_KEYS.has(key);
}

export function sanitizeText(value: unknown, maxLength = 2000, fallback = ''): string {
  if (typeof value !== 'string') return fallback;
  return value.trim().slice(0, maxLength);
}

export function sanitizeStringArray(value: unknown, maxItems = 25, maxItemLength = 300): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
    .slice(0, maxItems)
    .map((v) => v.trim().slice(0, maxItemLength));
}

export function sanitizeHttpUrl(value: unknown, fallback = 'https://www.planalto.gov.br/ccivil_03/'): string {
  if (typeof value !== 'string') return fallback;
  const trimmed = value.trim().slice(0, 500);
  if (!trimmed) return fallback;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.toString();
    }
  } catch {
    // Reject invalid/unsafe protocols (e.g. javascript:, data:, vbscript:)
  }
  return fallback;
}

export function sanitizeEntityId(value: unknown, fallbackPrefix: string): string {
  if (typeof value === 'string') {
    const clean = value.trim().replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 120);
    if (clean && isSafeObjectKey(clean)) return clean;
  }
  return `${fallbackPrefix}_${Date.now()}`;
}

const VALID_NORM_STATUSES = new Set<NormStatus>(['VIGENTE', 'ALTERADA', 'REVOGADA']);
const VALID_JUR_STATUSES = new Set<JurisprudenceStatus>(['VIGENTE', 'CONTROVERTIDA', 'SUPERADA', 'CANCELADA']);
const VALID_JUR_CATEGORIES = new Set<JurisprudenceCategory>([
  'SUMULA_VINCULANTE',
  'SUMULA_STF',
  'SUMULA_STJ',
  'REPERCUSSAO_GERAL',
  'RECURSO_REPETITIVO',
  'INFORMATIVO',
  'TESE',
]);
const VALID_TRIBUNALS = new Set(['STF', 'STJ', 'CNJ', 'TST']);
const VALID_QUESTION_STATUSES = new Set<QuestionValidationStatus>([
  'GERADA',
  'EM_VALIDACAO',
  'AGUARDANDO_REVISAO',
  'APROVADA',
  'PUBLICADA',
  'SUSPENSA',
  'DESATUALIZADA',
]);
const VALID_ORIGIN_TYPES = new Set<QuestionOriginType>([
  'OFICIAL_OAB',
  'INEDITA_IA',
  'AUTORAL_PROFESSOR',
  'ACADEMICA',
]);
const VALID_EXAM_BOARDS = new Set<ExamBoard>(['FGV', 'CEBRASPE', 'FCC', 'VUNESP', 'USP/SANFRAN', 'PUC']);
const VALID_LETTERS = new Set<'A' | 'B' | 'C' | 'D'>(['A', 'B', 'C', 'D']);

export function validateQuestionStatus(raw: unknown): QuestionValidationStatus | null {
  if (typeof raw !== 'string') return null;
  const upper = raw.trim().toUpperCase() as QuestionValidationStatus;
  return VALID_QUESTION_STATUSES.has(upper) ? upper : null;
}

export function validateNormPayload(body: any): { error?: string; norm?: LegislationNorm } {
  const title = sanitizeText(body?.title, 260);
  const shortName = sanitizeText(body?.shortName, 80);
  const discipline = sanitizeText(body?.discipline, 120);
  if (!title || !shortName || !discipline) {
    return { error: 'Título, sigla e disciplina são obrigatórios.' };
  }

  const today = new Date().toISOString().slice(0, 10);
  const status: NormStatus = VALID_NORM_STATUSES.has(body?.status) ? body.status : 'VIGENTE';

  return {
    norm: {
      id: sanitizeEntityId(body?.id, 'norm'),
      discipline,
      title,
      shortName,
      numberAndYear: sanitizeText(body?.numberAndYear, 120, shortName),
      publicationDate: sanitizeText(body?.publicationDate, 20, today),
      status,
      officialSourceUrl: sanitizeHttpUrl(body?.officialSourceUrl, 'https://www.planalto.gov.br/ccivil_03/'),
      lastVerifiedAt: today,
      amendmentsHistory: Array.isArray(body?.amendmentsHistory) ? body.amendmentsHistory.slice(0, 30) : [],
      revokedNote: body?.revokedNote ? sanitizeText(body.revokedNote, 500) : undefined,
    },
  };
}

export function validateArticlePayload(body: any): { error?: string; article?: LawArticle } {
  const normId = sanitizeEntityId(body?.normId, '');
  const articleNumber = sanitizeText(body?.articleNumber, 80);
  const caput = sanitizeText(body?.caput, 6000);
  const discipline = sanitizeText(body?.discipline, 120);

  if (!body?.normId || !normId || !articleNumber || !caput || !discipline) {
    return { error: 'normId, articleNumber, caput e discipline são obrigatórios.' };
  }

  const today = new Date().toISOString().slice(0, 10);
  const status: NormStatus = VALID_NORM_STATUSES.has(body?.status) ? body.status : 'VIGENTE';
  const normShortName = sanitizeText(body?.normShortName, 80, normId.toUpperCase());
  const subject = sanitizeText(body?.subject, 180, 'Dispositivo Legal');

  return {
    article: {
      id: sanitizeEntityId(body?.id, `art_${normId}`),
      normId,
      normShortName,
      discipline,
      subject,
      articleNumber,
      caput,
      paragraphs: sanitizeStringArray(body?.paragraphs, 30, 1500),
      items: sanitizeStringArray(body?.items, 30, 1000),
      status,
      keywords: sanitizeStringArray(body?.keywords, 20, 80).length > 0
        ? sanitizeStringArray(body?.keywords, 20, 80)
        : [articleNumber, subject],
      historicalVersions: Array.isArray(body?.historicalVersions) ? body.historicalVersions.slice(0, 15) : undefined,
      amendmentNote: body?.amendmentNote ? sanitizeText(body.amendmentNote, 500) : undefined,
      officialSourceUrl: sanitizeHttpUrl(body?.officialSourceUrl, 'https://www.planalto.gov.br/ccivil_03/'),
      lastVerifiedAt: today,
    },
  };
}

export function validateJurisprudencePayload(body: any): { error?: string; record?: JurisprudenceRecord } {
  const identification = sanitizeText(body?.identification, 160);
  const thesis = sanitizeText(body?.thesis, 4000);
  const discipline = sanitizeText(body?.discipline, 120);
  if (!identification || !thesis || !discipline) {
    return { error: 'Identificação, tese e disciplina são obrigatórias.' };
  }

  const today = new Date().toISOString().slice(0, 10);
  const tribunal = VALID_TRIBUNALS.has(body?.tribunal) ? body.tribunal : 'STF';
  const category: JurisprudenceCategory = VALID_JUR_CATEGORIES.has(body?.category) ? body.category : 'TESE';
  const status: JurisprudenceStatus = VALID_JUR_STATUSES.has(body?.status) ? body.status : 'VIGENTE';

  return {
    record: {
      id: sanitizeEntityId(body?.id, 'jur'),
      tribunal,
      category,
      identification,
      discipline,
      subject: sanitizeText(body?.subject, 180, 'Jurisprudência'),
      thesis,
      summary: sanitizeText(body?.summary, 4000, thesis),
      judgmentDate: sanitizeText(body?.judgmentDate, 20, today),
      publicationDate: sanitizeText(body?.publicationDate, 20, today),
      officialSourceUrl: sanitizeHttpUrl(body?.officialSourceUrl, 'https://portal.stf.jus.br/'),
      status,
      divergenceNote: body?.divergenceNote ? sanitizeText(body.divergenceNote, 1000) : undefined,
      supersededBy: body?.supersededBy ? sanitizeText(body.supersededBy, 200) : undefined,
      lastVerifiedAt: today,
    },
  };
}

export function sanitizeQuestionOptions(rawOptions: unknown): Array<{ letter: 'A' | 'B' | 'C' | 'D'; text: string }> | null {
  if (!Array.isArray(rawOptions) || rawOptions.length < 4) return null;
  const letters: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
  const sanitized = letters.map((letter, idx) => {
    const match = rawOptions.find((o: any) => String(o?.letter || '').toUpperCase().trim() === letter) || rawOptions[idx];
    const text = sanitizeText(match?.text, 2000);
    return { letter, text };
  });
  if (sanitized.some((o) => !o.text)) return null;
  return sanitized;
}

export function sanitizeQuestionCreatePayload(body: any): { error?: string; question?: LegalQuestion } {
  const statement = sanitizeText(body?.statement, 8000);
  const options = sanitizeQuestionOptions(body?.options);
  const correctAnswer = String(body?.correctAnswer || '').toUpperCase().trim() as 'A' | 'B' | 'C' | 'D';

  if (!statement || !options) {
    return { error: 'Enunciado e 4 alternativas válidas são obrigatórios.' };
  }
  if (!VALID_LETTERS.has(correctAnswer)) {
    return { error: 'Gabarito oficial deve ser A, B, C ou D.' };
  }

  const levelNum = Number(body?.difficultyLevel);
  const difficultyLevel: DifficultyLevel =
    levelNum >= 1 && levelNum <= 4 ? (Math.round(levelNum) as DifficultyLevel) : 2;
  const originType: QuestionOriginType = VALID_ORIGIN_TYPES.has(body?.originType)
    ? body.originType
    : 'AUTORAL_PROFESSOR';
  const examType =
    body?.examType === 'FACULDADE' || body?.examType === 'CONCURSO' ? body.examType : 'OAB';

  const whyWrong = Array.isArray(body?.whyWrong)
    ? body.whyWrong
        .filter((w: any) => VALID_LETTERS.has(String(w?.letter || '').toUpperCase() as any))
        .slice(0, 4)
        .map((w: any) => ({
          letter: String(w.letter).toUpperCase() as 'A' | 'B' | 'C' | 'D',
          explanation: sanitizeText(w.explanation, 2000),
          distractorTechnique: w.distractorTechnique ? sanitizeText(w.distractorTechnique, 80) : undefined,
        }))
    : [];

  const statuteReferences = Array.isArray(body?.statuteReferences)
    ? body.statuteReferences.slice(0, 10).map((r: any) => ({
        code: sanitizeText(r?.code, 80),
        article: sanitizeText(r?.article, 80),
        textSnippet: sanitizeText(r?.textSnippet, 1500),
        normId: r?.normId ? sanitizeEntityId(r.normId, 'norm') : undefined,
        articleId: r?.articleId ? sanitizeEntityId(r.articleId, 'art') : undefined,
      }))
    : [];

  const requestedStatus = body?.validationStatus ? validateQuestionStatus(body.validationStatus) : undefined;
  const board: ExamBoard = VALID_EXAM_BOARDS.has(body?.board) ? body.board : 'FGV';
  const nowIso = new Date().toISOString();

  return {
    question: {
      id: sanitizeEntityId(body?.id, 'manual'),
      exam: sanitizeText(body?.exam, 160, 'Cadastro Pedagógico JurisMentor'),
      examType,
      examNumber: body?.examNumber ? sanitizeText(body.examNumber, 60) : undefined,
      board,
      year: Math.max(1990, Math.min(2100, Number(body?.year) || new Date().getFullYear())),
      subject: sanitizeText(body?.subject, 120, 'Direito Constitucional'),
      topic: sanitizeText(body?.topic, 180, 'Tema Específico'),
      subtopic: body?.subtopic ? sanitizeText(body.subtopic, 180) : undefined,
      statement,
      options,
      correctAnswer,
      justification: sanitizeText(body?.justification, 6000),
      whyWrong,
      statuteReferences,
      jurisprudence: body?.jurisprudence ? sanitizeText(body.jurisprudence, 2500) : undefined,
      professorTip: body?.professorTip ? sanitizeText(body.professorTip, 1500) : undefined,
      pedagogicalObjective: body?.pedagogicalObjective ? sanitizeText(body.pedagogicalObjective, 800) : undefined,
      evaluatedCompetency: body?.evaluatedCompetency ? sanitizeText(body.evaluatedCompetency, 800) : undefined,
      practicalExample: body?.practicalExample ? sanitizeText(body.practicalExample, 1500) : undefined,
      examGuidance: body?.examGuidance ? sanitizeText(body.examGuidance, 1500) : undefined,
      difficulty: difficultyLevel === 1 ? 'Fácil' : difficultyLevel >= 3 ? 'Difícil' : 'Médio',
      difficultyLevel,
      originType,
      validationStatus: requestedStatus || undefined,
      sourceMeta: body?.sourceMeta
        ? {
            originName: sanitizeText(body.sourceMeta.originName, 160, 'Cadastro Administrativo'),
            originUrl:
              body.sourceMeta.originUrl || body.sourceMeta.officialSourceUrl
                ? sanitizeHttpUrl(body.sourceMeta.originUrl || body.sourceMeta.officialSourceUrl, 'https://oab.fgv.br/')
                : undefined,
            rightsChecked: Boolean(body.sourceMeta.rightsChecked ?? true),
            createdAt: nowIso,
            updatedAt: nowIso,
          }
        : undefined,
    },
  };
}

export function sanitizeQuestionUpdatePayload(existing: LegalQuestion, body: any): { error?: string; question?: LegalQuestion } {
  const next: LegalQuestion = { ...existing, id: existing.id };

  if (body?.topic !== undefined) next.topic = sanitizeText(body.topic, 180, existing.topic);
  if (body?.subtopic !== undefined) next.subtopic = sanitizeText(body.subtopic, 180);
  if (body?.subject !== undefined) next.subject = sanitizeText(body.subject, 120, existing.subject);
  if (body?.statement !== undefined) {
    const s = sanitizeText(body.statement, 8000);
    if (!s) return { error: 'Enunciado não pode ficar vazio.' };
    next.statement = s;
  }
  if (body?.options !== undefined) {
    const opts = sanitizeQuestionOptions(body.options);
    if (!opts) return { error: 'Alternativas inválidas (devem conter A, B, C e D).' };
    next.options = opts;
  }
  if (body?.correctAnswer !== undefined) {
    const ans = String(body.correctAnswer).toUpperCase().trim() as 'A' | 'B' | 'C' | 'D';
    if (!VALID_LETTERS.has(ans)) return { error: 'Gabarito inválido (use A, B, C ou D).' };
    next.correctAnswer = ans;
  }
  if (body?.justification !== undefined) {
    next.justification = sanitizeText(body.justification, 6000);
  }
  if (body?.jurisprudence !== undefined) {
    next.jurisprudence = sanitizeText(body.jurisprudence, 2500);
  }
  if (body?.professorTip !== undefined) {
    next.professorTip = sanitizeText(body.professorTip, 1500);
  }
  if (body?.validationStatus !== undefined) {
    const validStatus = validateQuestionStatus(body.validationStatus);
    if (!validStatus) return { error: 'Status de validação inválido.' };
    next.validationStatus = validStatus;
  }
  if (body?.difficultyLevel !== undefined) {
    const lvl = Number(body.difficultyLevel);
    if (lvl >= 1 && lvl <= 4) {
      next.difficultyLevel = Math.round(lvl) as DifficultyLevel;
      next.difficulty = next.difficultyLevel === 1 ? 'Fácil' : next.difficultyLevel >= 3 ? 'Difícil' : 'Médio';
    }
  }

  return { question: next };
}

export function sanitizeQualityConfigPayload(body: any): Partial<QualityConfig> {
  const out: Partial<QualityConfig> = {};
  if (typeof body?.blockGenerationWithoutGroundedSources === 'boolean') {
    out.blockGenerationWithoutGroundedSources = body.blockGenerationWithoutGroundedSources;
  }
  if (typeof body?.requireHumanApprovalBeforePublish === 'boolean') {
    out.requireHumanApprovalBeforePublish = body.requireHumanApprovalBeforePublish;
  }
  if (body?.difficultyDistribution && typeof body.difficultyDistribution === 'object') {
    const d = body.difficultyDistribution;
    out.difficultyDistribution = {
      level1: Math.max(0, Math.min(100, Number(d.level1) || 20)),
      level2: Math.max(0, Math.min(100, Number(d.level2) || 40)),
      level3: Math.max(0, Math.min(100, Number(d.level3) || 25)),
      level4: Math.max(0, Math.min(100, Number(d.level4) || 15)),
    };
  }
  return out;
}

export function validatePdfBuffer(buffer: Buffer): { valid: boolean; error?: string } {
  const MAX_PDF_BYTES = 10 * 1024 * 1024;
  if (!buffer || buffer.length === 0) {
    return { valid: false, error: 'Arquivo PDF vazio.' };
  }
  if (buffer.length > MAX_PDF_BYTES) {
    return { valid: false, error: 'O arquivo PDF excede o limite de 10 MB.' };
  }
  const headerSlice = buffer.subarray(0, 1024).toString('latin1');
  if (!headerSlice.includes('%PDF-')) {
    return { valid: false, error: 'Assinatura de arquivo PDF inválida.' };
  }
  return { valid: true };
}
