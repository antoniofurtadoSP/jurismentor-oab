import {
  UserStudyData,
  SimuladoResult,
  LegalQuestion,
  SubjectStudyGoal,
  ActiveSimuladoSession,
} from '../types';
import { getAllQuestions } from './questionsService';
import {
  clearActiveSessionFromCloud,
  pushActiveSessionToCloud,
  pushQuestionMarkToCloud,
  pushSimuladoResultToCloud,
  pushStudyProfileToCloud,
  sanitizeFirestoreId,
} from './cloudSync';

const STORAGE_KEY = 'jurismenor_user_study_data_v1';
const ACTIVE_SESSION_KEY = 'jurismenor_active_simulado_v1';

const DEFAULT_DATA: UserStudyData = {
  results: [],
  cadernoErrosIds: [],
  bookmarkedQuestionIds: [],
  completedScheduleDays: {},
  flashcardStatus: {},
  subjectGoals: {},
  activePlanId: 'oab_30_dias',
  lastActiveDate: new Date().toISOString().split('T')[0],
  streakDays: 1,
};

let activeCloudUserId: string | null = null;
let cloudSyncListener: ((status: 'syncing' | 'synced' | 'error') => void) | null = null;
let pendingActiveSessionTimer: ReturnType<typeof setTimeout> | null = null;
let latestPendingSession: ActiveSimuladoSession | null = null;

export const setActiveCloudUserId = (uid: string | null): void => {
  activeCloudUserId = uid;
};

export const setCloudSyncListener = (
  listener: ((status: 'syncing' | 'synced' | 'error') => void) | null
): void => {
  cloudSyncListener = listener;
};

const runCloudWrite = (task: (uid: string) => Promise<void>): void => {
  const uid = activeCloudUserId;
  if (!uid) return;
  cloudSyncListener?.('syncing');
  task(uid)
    .then(() => {
      cloudSyncListener?.('synced');
    })
    .catch((err) => {
      console.error('Erro ao sincronizar progresso com o Firebase:', err);
      cloudSyncListener?.('error');
    });
};

export const getStoredStudyData = (): UserStudyData => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_DATA;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_DATA, ...parsed };
  } catch (e) {
    console.error('Failed to load study data from localStorage', e);
    return DEFAULT_DATA;
  }
};

export const saveStoredStudyData = (data: UserStudyData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save study data to localStorage', e);
  }
};

export const getStoredActiveSession = (): ActiveSimuladoSession | null => {
  try {
    const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ActiveSimuladoSession;
    if (!parsed?.config || !Array.isArray(parsed?.queueRefs) || parsed.queueRefs.length === 0) {
      return null;
    }
    return parsed;
  } catch (e) {
    console.error('Failed to load active simulado session from localStorage', e);
    return null;
  }
};

export const saveStoredActiveSession = (
  session: ActiveSimuladoSession,
  immediateCloud = false
): void => {
  try {
    localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(session));
  } catch (e) {
    console.error('Failed to save active simulado session to localStorage', e);
  }

  if (!activeCloudUserId) return;

  latestPendingSession = session;
  if (immediateCloud) {
    if (pendingActiveSessionTimer) {
      clearTimeout(pendingActiveSessionTimer);
      pendingActiveSessionTimer = null;
    }
    const snapshot = latestPendingSession;
    latestPendingSession = null;
    runCloudWrite((uid) => pushActiveSessionToCloud(uid, snapshot));
    return;
  }

  if (pendingActiveSessionTimer) return;
  pendingActiveSessionTimer = setTimeout(() => {
    pendingActiveSessionTimer = null;
    if (!latestPendingSession || !activeCloudUserId) return;
    const snapshot = latestPendingSession;
    latestPendingSession = null;
    runCloudWrite((uid) => pushActiveSessionToCloud(uid, snapshot));
  }, 2500);
};

export const setActiveSessionOpenInView = (isOpenInView: boolean): void => {
  const current = getStoredActiveSession();
  if (!current) return;
  try {
    localStorage.setItem(
      ACTIVE_SESSION_KEY,
      JSON.stringify({ ...current, isOpenInView })
    );
  } catch {
    // ignore storage errors
  }
};

export const clearStoredActiveSession = (): void => {
  if (pendingActiveSessionTimer) {
    clearTimeout(pendingActiveSessionTimer);
    pendingActiveSessionTimer = null;
  }
  latestPendingSession = null;
  try {
    localStorage.removeItem(ACTIVE_SESSION_KEY);
  } catch (e) {
    console.error('Failed to clear active simulado session from localStorage', e);
  }
  runCloudWrite((uid) => clearActiveSessionFromCloud(uid));
};

export const flushPendingCloudWrites = (): void => {
  if (pendingActiveSessionTimer) {
    clearTimeout(pendingActiveSessionTimer);
    pendingActiveSessionTimer = null;
  }
  if (latestPendingSession && activeCloudUserId) {
    const snapshot = latestPendingSession;
    latestPendingSession = null;
    runCloudWrite((uid) => pushActiveSessionToCloud(uid, snapshot));
  }
};

export const recordSimuladoResult = (result: SimuladoResult): UserStudyData => {
  const current = getStoredStudyData();

  // Update Caderno de Erros with wrong questions
  const newErrosIds = new Set(current.cadernoErrosIds);
  const changedQuestionIds = new Set<string>();

  Object.values(result.answers).forEach((ans) => {
    if (!ans.isCorrect) {
      if (!newErrosIds.has(ans.questionId)) changedQuestionIds.add(ans.questionId);
      newErrosIds.add(ans.questionId);
    } else {
      // When resolved correctly in Caderno de Erros or Diagnóstico mode, remove from pending errors
      if (result.configId.includes('CADERNO_ERROS') || result.configId.startsWith('diagnostico_')) {
        if (newErrosIds.has(ans.questionId)) changedQuestionIds.add(ans.questionId);
        newErrosIds.delete(ans.questionId);
      }
    }
  });

  // Calculate streak
  const today = new Date().toISOString().split('T')[0];
  let streak = current.streakDays;
  if (current.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (current.lastActiveDate === yesterday) {
      streak += 1;
    } else {
      streak = 1;
    }
  }

  const safeResult: SimuladoResult = {
    ...result,
    id: sanitizeFirestoreId(result.id, 'sim'),
    configId: sanitizeFirestoreId(result.configId, 'cfg'),
  };

  const updated: UserStudyData = {
    ...current,
    results: [safeResult, ...current.results],
    cadernoErrosIds: Array.from(newErrosIds),
    lastActiveDate: today,
    streakDays: streak,
  };

  saveStoredStudyData(updated);

  runCloudWrite(async (uid) => {
    await pushSimuladoResultToCloud(uid, safeResult);
    await pushStudyProfileToCloud(uid, updated);
    const bookmarkSet = new Set(updated.bookmarkedQuestionIds);
    for (const qId of changedQuestionIds) {
      await pushQuestionMarkToCloud(uid, qId, newErrosIds.has(qId), bookmarkSet.has(qId));
    }
  });

  return updated;
};

export const toggleBookmarkQuestion = (questionId: string): boolean => {
  const data = getStoredStudyData();
  const index = data.bookmarkedQuestionIds.indexOf(questionId);
  let isBookmarked = false;
  if (index >= 0) {
    data.bookmarkedQuestionIds.splice(index, 1);
    isBookmarked = false;
  } else {
    data.bookmarkedQuestionIds.push(questionId);
    isBookmarked = true;
  }
  saveStoredStudyData(data);

  const inErrorNotebook = data.cadernoErrosIds.includes(questionId);
  runCloudWrite((uid) => pushQuestionMarkToCloud(uid, questionId, inErrorNotebook, isBookmarked));

  return isBookmarked;
};

export const removeQuestionFromCadernoErros = (questionId: string): void => {
  const data = getStoredStudyData();
  data.cadernoErrosIds = data.cadernoErrosIds.filter((id) => id !== questionId);
  saveStoredStudyData(data);

  const isBookmarked = data.bookmarkedQuestionIds.includes(questionId);
  runCloudWrite((uid) => pushQuestionMarkToCloud(uid, questionId, false, isBookmarked));
};

export const toggleScheduleDayCompletion = (planId: string, dayNumber: number): boolean => {
  const data = getStoredStudyData();
  const key = `${planId}_day_${dayNumber}`;
  const current = Boolean(data.completedScheduleDays[key]);
  data.completedScheduleDays[key] = !current;
  data.activePlanId = planId;
  saveStoredStudyData(data);

  runCloudWrite((uid) => pushStudyProfileToCloud(uid, data));
  return !current;
};

export const setActivePlanId = (planId: string): UserStudyData => {
  const data = getStoredStudyData();
  if (data.activePlanId === planId) return data;
  const updated: UserStudyData = {
    ...data,
    activePlanId: planId,
  };
  saveStoredStudyData(updated);
  runCloudWrite((uid) => pushStudyProfileToCloud(uid, updated));
  return updated;
};

export const updateFlashcardMastery = (cardId: string, mastered: boolean): void => {
  const data = getStoredStudyData();
  const current = data.flashcardStatus[cardId] || { mastered: false, reviews: 0 };
  data.flashcardStatus[cardId] = {
    mastered,
    reviews: current.reviews + 1,
  };
  saveStoredStudyData(data);

  runCloudWrite((uid) => pushStudyProfileToCloud(uid, data));
};

const CORE_OAB_SUBJECTS = new Set([
  'Direito Constitucional',
  'Direito Civil',
  'Direito Processual Civil',
  'Direito Penal',
  'Direito Processual Penal',
  'Direito Administrativo',
  'Direito do Trabalho',
]);

export const getDefaultGoalForSubject = (subject: string): SubjectStudyGoal => {
  if (subject === 'Ética Profissional e Estatuto da OAB') {
    return { dailyQuestions: 20, dailyMinutes: 60 };
  }
  if (CORE_OAB_SUBJECTS.has(subject)) {
    return { dailyQuestions: 15, dailyMinutes: 45 };
  }
  return { dailyQuestions: 10, dailyMinutes: 30 };
};

const clampGoal = (goal: SubjectStudyGoal): SubjectStudyGoal => ({
  dailyQuestions: Math.max(1, Math.min(100, Math.round(Number(goal.dailyQuestions) || 10))),
  dailyMinutes: Math.max(5, Math.min(360, Math.round(Number(goal.dailyMinutes) || 30))),
});

export const getEffectiveSubjectGoal = (data: UserStudyData, subject: string): SubjectStudyGoal => {
  const custom = data.subjectGoals?.[subject];
  if (custom) {
    return clampGoal(custom);
  }
  return getDefaultGoalForSubject(subject);
};

export const saveSubjectGoal = (subject: string, goal: SubjectStudyGoal): UserStudyData => {
  const data = getStoredStudyData();
  const nextGoals = {
    ...(data.subjectGoals || {}),
    [subject]: clampGoal(goal),
  };
  const updated: UserStudyData = {
    ...data,
    subjectGoals: nextGoals,
  };
  saveStoredStudyData(updated);
  runCloudWrite((uid) => pushStudyProfileToCloud(uid, updated));
  return updated;
};

export const saveAllSubjectGoals = (goals: Record<string, SubjectStudyGoal>): UserStudyData => {
  const data = getStoredStudyData();
  const sanitized: Record<string, SubjectStudyGoal> = {};
  Object.entries(goals).forEach(([subject, g]) => {
    sanitized[subject] = clampGoal(g);
  });
  const updated: UserStudyData = {
    ...data,
    subjectGoals: sanitized,
  };
  saveStoredStudyData(updated);
  runCloudWrite((uid) => pushStudyProfileToCloud(uid, updated));
  return updated;
};

export const resetSubjectGoals = (): UserStudyData => {
  const data = getStoredStudyData();
  const updated: UserStudyData = {
    ...data,
    subjectGoals: {},
  };
  saveStoredStudyData(updated);
  runCloudWrite((uid) => pushStudyProfileToCloud(uid, updated));
  return updated;
};

export const getGlobalPerformanceStats = (data: UserStudyData) => {
  let totalQuestionsAnswered = 0;
  let totalCorrect = 0;
  const subjectStats: Record<string, { total: number; correct: number }> = {};

  data.results.forEach((res) => {
    totalQuestionsAnswered += res.totalQuestions - res.unansweredCount;
    totalCorrect += res.correctCount;

    Object.entries(res.subjectStats || {}).forEach(([subject, stat]) => {
      if (!subjectStats[subject]) {
        subjectStats[subject] = { total: 0, correct: 0 };
      }
      subjectStats[subject].total += stat.total;
      subjectStats[subject].correct += stat.correct;
    });
  });

  const accuracy = totalQuestionsAnswered > 0 ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) : 0;

  // Find lowest and highest performing subjects
  const rankedSubjects = Object.entries(subjectStats)
    .filter(([_, s]) => s.total >= 1)
    .map(([subject, s]) => ({
      subject,
      rate: Math.round((s.correct / s.total) * 100),
      total: s.total,
      correct: s.correct,
    }))
    .sort((a, b) => b.rate - a.rate);

  return {
    totalQuestionsAnswered,
    totalCorrect,
    accuracy,
    simuladosCompleted: data.results.length,
    subjectStats,
    rankedSubjects,
    strongestSubject: rankedSubjects.length > 0 ? rankedSubjects[0] : null,
    weakestSubject: rankedSubjects.length > 0 ? rankedSubjects[rankedSubjects.length - 1] : null,
    cadernoErrosCount: data.cadernoErrosIds.length,
    bookmarksCount: data.bookmarkedQuestionIds.length,
  };
};

export const getQuestionsForCadernoErros = (): LegalQuestion[] => {
  const data = getStoredStudyData();
  const set = new Set(data.cadernoErrosIds);
  return getAllQuestions().filter((q) => set.has(q.id));
};

export const getBookmarkedQuestions = (): LegalQuestion[] => {
  const data = getStoredStudyData();
  const set = new Set(data.bookmarkedQuestionIds);
  return getAllQuestions().filter((q) => set.has(q.id));
};

