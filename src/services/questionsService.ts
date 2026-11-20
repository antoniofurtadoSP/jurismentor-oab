import { LegalQuestion } from '../types';
import { QUESTIONS_DATABASE } from '../data/questions';

const DYNAMIC_QUESTIONS_KEY = 'jurismenor_dynamic_questions_v1';
const AUTO_UPDATE_ENABLED_KEY = 'jurismenor_auto_update_enabled_v1';
const LAST_UPDATED_KEY = 'jurismenor_last_updated_timestamp_v1';

// In-memory cache + server DB published cache
let serverPublishedQuestions: LegalQuestion[] | null = null;
let serverRemovedOrBlockedIds = new Set<string>();
let cachedQuestions: LegalQuestion[] | null = null;
const listeners: Array<() => void> = [];

export const subscribeToQuestions = (listener: () => void) => {
  listeners.push(listener);
  return () => {
    const idx = listeners.indexOf(listener);
    if (idx >= 0) listeners.splice(idx, 1);
  };
};

const notifyListeners = () => {
  listeners.forEach(fn => fn());
};

/**
 * Sincroniza questões publicadas do Banco de Conhecimento Jurídico do servidor (/api/kb/questions)
 * com o cache em memória do aplicativo sem sobrescrever o progresso salvo do usuário.
 */
export const syncPublishedQuestionsFromServer = async (): Promise<number> => {
  try {
    const res = await fetch('/api/kb/questions');
    if (!res.ok) return 0;
    const data = await res.json();
    if (!data.success || !Array.isArray(data.questions)) return 0;

    const allServer = data.questions as LegalQuestion[];
    const blocked = new Set<string>();
    const published: LegalQuestion[] = [];

    for (const q of allServer) {
      const status = q.validationStatus || 'PUBLICADA';
      if (status === 'PUBLICADA' || status === 'APROVADA') {
        published.push(q);
      } else {
        // Questões suspensas, desatualizadas ou aguardando revisão não entram em simulados ativos
        blocked.add(q.id);
      }
    }

    serverPublishedQuestions = published;
    serverRemovedOrBlockedIds = blocked;
    cachedQuestions = null;
    notifyListeners();
    return published.length;
  } catch {
    return 0;
  }
};

export const getStoredDynamicQuestions = (): LegalQuestion[] => {
  try {
    const raw = localStorage.getItem(DYNAMIC_QUESTIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load dynamic questions from localStorage', e);
    return [];
  }
};

export const saveStoredDynamicQuestions = (questions: LegalQuestion[]) => {
  try {
    localStorage.setItem(DYNAMIC_QUESTIONS_KEY, JSON.stringify(questions));
    cachedQuestions = null; // Invalidate cache
    notifyListeners();
  } catch (e) {
    console.error('Failed to save dynamic questions to localStorage', e);
  }
};

export const isAutoUpdateEnabled = (): boolean => {
  try {
    const val = localStorage.getItem(AUTO_UPDATE_ENABLED_KEY);
    return val === null ? true : val === 'true'; // Default enabled
  } catch {
    return true;
  }
};

export const setAutoUpdateEnabled = (enabled: boolean): void => {
  try {
    localStorage.setItem(AUTO_UPDATE_ENABLED_KEY, String(enabled));
  } catch (e) {
    console.error('Failed to save auto-update preference', e);
  }
};

export const getLastUpdatedTimestamp = (): string => {
  try {
    return localStorage.getItem(LAST_UPDATED_KEY) || 'Banco Inicial Sincronizado';
  } catch {
    return 'Banco Inicial Sincronizado';
  }
};

export const setLastUpdatedTimestamp = (timestamp: string): void => {
  try {
    localStorage.setItem(LAST_UPDATED_KEY, timestamp);
  } catch (e) {
    console.error('Failed to save last updated timestamp', e);
  }
};

// Retrieve all combined questions (seed + server published DB + dynamic local cache)
export const getAllQuestions = (): LegalQuestion[] => {
  if (cachedQuestions) {
    return cachedQuestions;
  }

  const dynamic = getStoredDynamicQuestions();
  const map = new Map<string, LegalQuestion>();

  // 1. Base local inicial (fallback garantido)
  QUESTIONS_DATABASE.forEach(q => {
    if (!serverRemovedOrBlockedIds.has(q.id)) {
      map.set(q.id, {
        ...q,
        originType:
          q.originType ||
          (q.examType === 'FACULDADE'
            ? 'ACADEMICA'
            : q.id.startsWith('oab') && q.board === 'FGV'
            ? 'OFICIAL_OAB'
            : 'AUTORAL_PROFESSOR'),
      });
    }
  });

  // 2. Questões publicadas no banco jurídico do servidor
  if (serverPublishedQuestions) {
    serverPublishedQuestions.forEach(q => {
      map.set(q.id, q);
    });
  }

  // 3. Questões dinâmicas armazenadas no navegador
  dynamic.forEach(q => {
    if (!serverRemovedOrBlockedIds.has(q.id)) {
      map.set(q.id, q);
    }
  });

  cachedQuestions = Array.from(map.values());
  return cachedQuestions;
};

// Find questions by subject
export const getQuestionsBySubject = (subject: string): LegalQuestion[] => {
  const all = getAllQuestions();
  return all.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
};

// Get list of all subjects
export const getAllAvailableSubjects = (): string[] => {
  const all = getAllQuestions();
  return Array.from(new Set(all.map(q => q.subject)));
};

// Get count of questions per subject
export const getSubjectQuestionCounts = (): Record<string, number> => {
  const all = getAllQuestions();
  const counts: Record<string, number> = {};
  all.forEach(q => {
    counts[q.subject] = (counts[q.subject] || 0) + 1;
  });
  return counts;
};

// Auto-update questions for a specific discipline using Grounded AI engine
export const fetchUpdatedQuestionsForSubject = async (
  subject: string,
  count = 4,
  targetExamType = 'OAB'
): Promise<{ success: boolean; addedCount: number; message?: string }> => {
  try {
    const res = await fetch('/api/questions/auto-update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject,
        targetExamType,
        count,
      }),
    });

    if (!res.ok) {
      throw new Error(`Erro ${res.status} ao contatar servidor de atualização`);
    }

    const data = await res.json();
    if (!data.success || !Array.isArray(data.questions)) {
      throw new Error(data.error || 'Nenhuma questão retornada.');
    }

    const currentDynamic = getStoredDynamicQuestions();
    const existingIds = new Set([
      ...QUESTIONS_DATABASE.map(q => q.id),
      ...currentDynamic.map(q => q.id),
    ]);

    const newToAdd: LegalQuestion[] = [];
    data.questions.forEach((q: LegalQuestion) => {
      const safeId =
        q.id && !existingIds.has(q.id)
          ? q.id
          : `dyn_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      if (!existingIds.has(safeId)) {
        existingIds.add(safeId);
        newToAdd.push({
          ...q,
          id: safeId,
          subject,
        });
      }
    });

    if (newToAdd.length > 0) {
      saveStoredDynamicQuestions([...currentDynamic, ...newToAdd]);
      setLastUpdatedTimestamp(
        new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          day: '2-digit',
          month: '2-digit',
        })
      );
    }

    await syncPublishedQuestionsFromServer();

    return {
      success: true,
      addedCount: newToAdd.length,
      message: `${newToAdd.length} novas questões fundamentadas adicionadas com sucesso.`,
    };
  } catch (err: any) {
    console.error(`Erro ao atualizar questões de ${subject}:`, err);
    return {
      success: false,
      addedCount: 0,
      message: err?.message || 'Falha na conexão com o atualizador.',
    };
  }
};

// Batch update across ALL or selected subjects
export const updateAllSubjectsQuestions = async (
  onProgress?: (subject: string, current: number, total: number) => void,
  targetExamType = 'OAB'
): Promise<{ success: boolean; totalAdded: number }> => {
  const subjects = getAllAvailableSubjects();
  let totalAdded = 0;
  for (let i = 0; i < subjects.length; i++) {
    const subj = subjects[i];
    if (onProgress) onProgress(subj, i + 1, subjects.length);
    const res = await fetchUpdatedQuestionsForSubject(subj, 3, targetExamType);
    if (res.success) {
      totalAdded += res.addedCount;
    }
  }
  return { success: true, totalAdded };
};

// Bulk expansion with specific subjects and exam type
export const bulkGenerateQuestions = async (
  subjects: string[],
  countPerSubject = 4,
  targetExamType = 'OAB',
  onProgress?: (subject: string, index: number, total: number, addedSoFar: number) => void
): Promise<{ success: boolean; totalAdded: number }> => {
  let totalAdded = 0;
  for (let i = 0; i < subjects.length; i++) {
    const subj = subjects[i];
    if (onProgress) onProgress(subj, i + 1, subjects.length, totalAdded);
    const res = await fetchUpdatedQuestionsForSubject(subj, countPerSubject, targetExamType);
    if (res.success) {
      totalAdded += res.addedCount;
    }
  }
  return { success: true, totalAdded };
};

// Fetch fresh questions for an ongoing simulado session
export const fetchMoreQuestionsForSimulado = async (
  subject: string,
  existingIds: string[],
  requestedCount = 5,
  targetExamType = 'OAB'
): Promise<LegalQuestion[]> => {
  const all = getAllQuestions();
  const existingSet = new Set(existingIds);

  const matchingPool = all.filter(
    q =>
      (!subject || subject === 'ALL' || q.subject.toLowerCase() === subject.toLowerCase()) &&
      !existingSet.has(q.id)
  );

  if (matchingPool.length >= requestedCount) {
    const shuffled = [...matchingPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, requestedCount);
  }

  const needed = requestedCount - matchingPool.length;
  const targetSubj = subject && subject !== 'ALL' ? subject : 'Direito Constitucional';

  const updateRes = await fetchUpdatedQuestionsForSubject(
    targetSubj,
    Math.max(needed, 3),
    targetExamType
  );
  if (updateRes.success) {
    const refreshedAll = getAllQuestions();
    const freshMatching = refreshedAll.filter(
      q =>
        (!subject || subject === 'ALL' || q.subject.toLowerCase() === subject.toLowerCase()) &&
        !existingSet.has(q.id)
    );
    const shuffled = [...freshMatching].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, requestedCount);
  }

  return matchingPool.slice(0, requestedCount);
};
