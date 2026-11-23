import type { User } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import type {
  ActiveSimuladoSession,
  PerformanceErrorAnalysis,
  SimuladoResult,
  SubjectStudyGoal,
  UserStudyData,
} from '../types';

export function sanitizeFirestoreId(rawId: string, fallbackPrefix = 'item'): string {
  const cleaned = (rawId || '')
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .slice(0, 128);
  return cleaned.length > 0 ? cleaned : `${fallbackPrefix}_${Date.now()}`;
}

function sanitizeDateStr(dateStr?: string): string {
  if (dateStr && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  return new Date().toISOString().split('T')[0];
}

function clampStreak(val: unknown): number {
  const num = Math.round(Number(val) || 1);
  return Math.max(0, Math.min(36500, num));
}

function trimMap<T>(obj: Record<string, T> | undefined, maxKeys: number): Record<string, T> {
  if (!obj || typeof obj !== 'object') return {};
  const entries = Object.entries(obj).slice(0, maxKeys);
  return Object.fromEntries(entries);
}

export async function ensureUserProfile(user: User): Promise<void> {
  const path = `users/${user.uid}`;
  const ref = doc(db, 'users', user.uid);
  try {
    const snap = await getDoc(ref);
    const payloadBase = {
      uid: user.uid,
      email: (user.email || 'aluno@jurismentor.app').slice(0, 200),
      ...(user.displayName ? { displayName: user.displayName.slice(0, 120) } : {}),
      ...(user.photoURL ? { photoURL: user.photoURL.slice(0, 500) } : {}),
      updatedAt: serverTimestamp(),
    };

    if (!snap.exists()) {
      await setDoc(ref, {
        ...payloadBase,
        createdAt: serverTimestamp(),
      });
    } else {
      await updateDoc(ref, {
        email: payloadBase.email,
        ...(payloadBase.displayName ? { displayName: payloadBase.displayName } : {}),
        ...(payloadBase.photoURL ? { photoURL: payloadBase.photoURL } : {}),
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function pushStudyProfileToCloud(uid: string, data: UserStudyData): Promise<void> {
  const path = `users/${uid}/studyProfile/main`;
  const ref = doc(db, 'users', uid, 'studyProfile', 'main');
  try {
    await setDoc(ref, {
      ownerId: uid,
      activePlanId: sanitizeFirestoreId(data.activePlanId || 'oab_30_dias', 'oab_30_dias').slice(0, 80),
      lastActiveDate: sanitizeDateStr(data.lastActiveDate),
      streakDays: clampStreak(data.streakDays),
      completedScheduleDays: trimMap(data.completedScheduleDays, 300),
      flashcardStatus: trimMap(data.flashcardStatus, 500),
      subjectGoals: trimMap(data.subjectGoals as Record<string, SubjectStudyGoal>, 60),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function pushQuestionMarkToCloud(
  uid: string,
  questionId: string,
  inErrorNotebook: boolean,
  isBookmarked: boolean
): Promise<void> {
  const safeId = sanitizeFirestoreId(questionId, 'q');
  const path = `users/${uid}/questionMarks/${safeId}`;
  const ref = doc(db, 'users', uid, 'questionMarks', safeId);
  try {
    if (!inErrorNotebook && !isBookmarked) {
      await deleteDoc(ref);
      return;
    }
    await setDoc(ref, {
      ownerId: uid,
      questionId: safeId,
      inErrorNotebook: Boolean(inErrorNotebook),
      isBookmarked: Boolean(isBookmarked),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function pushSimuladoResultToCloud(uid: string, result: SimuladoResult): Promise<void> {
  const safeId = sanitizeFirestoreId(result.id, 'sim');
  const safeConfigId = sanitizeFirestoreId(result.configId, 'cfg');
  const path = `users/${uid}/simuladoResults/${safeId}`;
  const ref = doc(db, 'users', uid, 'simuladoResults', safeId);
  try {
    await setDoc(ref, {
      ownerId: uid,
      id: safeId,
      configId: safeConfigId,
      title: (result.title || 'Simulado JurisMentor').slice(0, 200),
      date: (result.date || new Date().toLocaleDateString('pt-BR')).slice(0, 40),
      totalQuestions: Math.max(1, Math.min(500, Number(result.totalQuestions) || 1)),
      correctCount: Math.max(0, Math.min(500, Number(result.correctCount) || 0)),
      wrongCount: Math.max(0, Math.min(500, Number(result.wrongCount) || 0)),
      unansweredCount: Math.max(0, Math.min(500, Number(result.unansweredCount) || 0)),
      timeSpentSeconds: Math.max(0, Math.min(86400, Number(result.timeSpentSeconds) || 0)),
      scorePercentage: Math.max(0, Math.min(100, Number(result.scorePercentage) || 0)),
      passedOABCutoff: Boolean(result.passedOABCutoff),
      answers: trimMap(result.answers, 300),
      subjectStats: trimMap(result.subjectStats, 40),
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export async function pushActiveSessionToCloud(
  uid: string,
  session: ActiveSimuladoSession
): Promise<void> {
  const path = `users/${uid}/activeSessions/current`;
  const ref = doc(db, 'users', uid, 'activeSessions', 'current');
  if (!session.queueRefs || session.queueRefs.length === 0) return;

  const boundedQueueRefs = session.queueRefs.slice(0, 250).map((item) => ({
    instanceId: String(item.instanceId || '').slice(0, 160),
    questionId: sanitizeFirestoreId(item.questionId, 'q'),
    attemptNumber: Math.max(1, Number(item.attemptNumber) || 1),
    isRetry: Boolean(item.isRetry),
    ...(item.previousWrongLetter ? { previousWrongLetter: String(item.previousWrongLetter).slice(0, 5) } : {}),
  }));

  try {
    await setDoc(ref, {
      ownerId: uid,
      config: {
        id: sanitizeFirestoreId(session.config.id, 'cfg'),
        title: (session.config.title || 'Simulado em Andamento').slice(0, 200),
        description: (session.config.description || '').slice(0, 400),
        type: session.config.type || 'PERSONALIZADO',
        questionCount: Math.max(1, Math.min(250, Number(session.config.questionCount) || boundedQueueRefs.length)),
        timeLimitMinutes: session.config.timeLimitMinutes ?? null,
        mode: session.config.mode || 'TREINO',
        repeatWrongQuestionsInterval: session.config.repeatWrongQuestionsInterval ?? 2,
      },
      queueRefs: boundedQueueRefs,
      currentIndex: Math.max(0, Math.min(boundedQueueRefs.length - 1, Number(session.currentIndex) || 0)),
      questionMastery: trimMap(session.questionMastery, 250),
      answers: trimMap(session.answers, 250),
      instanceAnswers: trimMap(session.instanceAnswers, 300),
      eliminated: trimMap(session.eliminated, 250),
      markedReview: trimMap(session.markedReview, 250),
      secondsRemaining:
        session.secondsRemaining === null || session.secondsRemaining === undefined
          ? -1
          : Math.max(0, Math.min(86400, Math.round(session.secondsRemaining))),
      elapsedSeconds: Math.max(0, Math.min(86400, Math.round(session.elapsedSeconds || 0))),
      repeatInterval: Math.max(1, Math.min(20, Math.round(session.repeatInterval || 2))),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function clearActiveSessionFromCloud(uid: string): Promise<void> {
  const path = `users/${uid}/activeSessions/current`;
  const ref = doc(db, 'users', uid, 'activeSessions', 'current');
  try {
    await deleteDoc(ref);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function pushPerformanceInsightToCloud(
  uid: string,
  fingerprint: string,
  analysis: PerformanceErrorAnalysis
): Promise<void> {
  const path = `users/${uid}/aiInsights/performance_analysis`;
  const ref = doc(db, 'users', uid, 'aiInsights', 'performance_analysis');
  try {
    await setDoc(ref, {
      ownerId: uid,
      fingerprint: (fingerprint || 'default').slice(0, 160),
      analysis: {
        summaryDiagnosis: (analysis.summaryDiagnosis || '').slice(0, 3000),
        hardestPatternAlert: (analysis.hardestPatternAlert || '').slice(0, 2000),
        priorityTopics: Array.isArray(analysis.priorityTopics) ? analysis.priorityTopics.slice(0, 10) : [],
        studyStrategySteps: Array.isArray(analysis.studyStrategySteps) ? analysis.studyStrategySteps.slice(0, 10) : [],
        analyzedErrorsCount: Math.max(0, Number(analysis.analyzedErrorsCount) || 0),
        generatedAt: analysis.generatedAt || new Date().toISOString(),
      },
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function fetchPerformanceInsightFromCloud(
  uid: string
): Promise<{ fingerprint: string; analysis: PerformanceErrorAnalysis } | null> {
  const path = `users/${uid}/aiInsights/performance_analysis`;
  const ref = doc(db, 'users', uid, 'aiInsights', 'performance_analysis');
  try {
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    const data = snap.data() as any;
    if (!data?.analysis) return null;
    return {
      fingerprint: String(data.fingerprint || ''),
      analysis: data.analysis as PerformanceErrorAnalysis,
    };
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export async function syncAndLoadCloudStudyState(
  user: User,
  localData: UserStudyData,
  localActiveSession: ActiveSimuladoSession | null
): Promise<{
  mergedData: UserStudyData;
  activeSession: ActiveSimuladoSession | null;
}> {
  const uid = user.uid;
  await ensureUserProfile(user);

  const profilePath = `users/${uid}/studyProfile/main`;
  const marksPath = `users/${uid}/questionMarks`;
  const resultsPath = `users/${uid}/simuladoResults`;
  const activeSessionPath = `users/${uid}/activeSessions/current`;

  let cloudProfile: any = null;
  try {
    const profileSnap = await getDoc(doc(db, 'users', uid, 'studyProfile', 'main'));
    if (profileSnap.exists()) cloudProfile = profileSnap.data();
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, profilePath);
  }

  const cloudMarksMap = new Map<string, { inErrorNotebook: boolean; isBookmarked: boolean }>();
  try {
    const marksSnap = await getDocs(collection(db, 'users', uid, 'questionMarks'));
    marksSnap.forEach((d) => {
      const data = d.data() as any;
      if (data?.questionId) {
        cloudMarksMap.set(data.questionId, {
          inErrorNotebook: Boolean(data.inErrorNotebook),
          isBookmarked: Boolean(data.isBookmarked),
        });
      }
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, marksPath);
  }

  const cloudResults: SimuladoResult[] = [];
  const cloudResultIds = new Set<string>();
  try {
    const resultsSnap = await getDocs(collection(db, 'users', uid, 'simuladoResults'));
    resultsSnap.forEach((d) => {
      const data = d.data() as any;
      if (data?.id) {
        cloudResultIds.add(data.id);
        cloudResults.push({
          id: data.id,
          configId: data.configId,
          title: data.title,
          date: data.date,
          totalQuestions: data.totalQuestions,
          correctCount: data.correctCount,
          wrongCount: data.wrongCount,
          unansweredCount: data.unansweredCount,
          timeSpentSeconds: data.timeSpentSeconds,
          scorePercentage: data.scorePercentage,
          passedOABCutoff: data.passedOABCutoff,
          answers: data.answers || {},
          subjectStats: data.subjectStats || {},
        });
      }
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, resultsPath);
  }

  let cloudActiveSession: ActiveSimuladoSession | null = null;
  try {
    const sessionSnap = await getDoc(doc(db, 'users', uid, 'activeSessions', 'current'));
    if (sessionSnap.exists()) {
      const data = sessionSnap.data() as any;
      if (data?.config && Array.isArray(data?.queueRefs) && data.queueRefs.length > 0) {
        const updatedMillis = data.updatedAt?.toMillis ? data.updatedAt.toMillis() : Date.now();
        cloudActiveSession = {
          config: data.config,
          queueRefs: data.queueRefs,
          currentIndex: Number(data.currentIndex) || 0,
          questionMastery: data.questionMastery || {},
          answers: data.answers || {},
          instanceAnswers: data.instanceAnswers || {},
          eliminated: data.eliminated || {},
          markedReview: data.markedReview || {},
          secondsRemaining: data.secondsRemaining === -1 ? null : Number(data.secondsRemaining),
          elapsedSeconds: Number(data.elapsedSeconds) || 0,
          repeatInterval: Number(data.repeatInterval) || 2,
          isOpenInView: false,
          updatedAt: new Date(updatedMillis).toISOString(),
        };
      }
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, activeSessionPath);
  }

  // Merge simulado results (deduplicate by sanitized id, newest first)
  const mergedResultsMap = new Map<string, SimuladoResult>();
  [...localData.results, ...cloudResults].forEach((res) => {
    const key = sanitizeFirestoreId(res.id, 'sim');
    if (!mergedResultsMap.has(key)) {
      mergedResultsMap.set(key, { ...res, id: key });
    }
  });
  const mergedResults = Array.from(mergedResultsMap.values()).sort((a, b) => {
    const tsA = Number(a.id.replace(/\D/g, '').slice(-13)) || 0;
    const tsB = Number(b.id.replace(/\D/g, '').slice(-13)) || 0;
    return tsB - tsA;
  });

  // Upload any local-only results to cloud
  for (const res of localData.results) {
    const safeId = sanitizeFirestoreId(res.id, 'sim');
    if (!cloudResultIds.has(safeId)) {
      await pushSimuladoResultToCloud(uid, { ...res, id: safeId });
    }
  }

  // Merge Caderno de Erros & Bookmarks
  const errorSet = new Set<string>(localData.cadernoErrosIds || []);
  const bookmarkSet = new Set<string>(localData.bookmarkedQuestionIds || []);
  cloudMarksMap.forEach((mark, qId) => {
    if (mark.inErrorNotebook) errorSet.add(qId);
    if (mark.isBookmarked) bookmarkSet.add(qId);
  });

  // Push any local-only marks to cloud
  const allMarkedIds = new Set<string>([...errorSet, ...bookmarkSet]);
  for (const qId of allMarkedIds) {
    const safeQId = sanitizeFirestoreId(qId, 'q');
    const inErr = errorSet.has(qId) || errorSet.has(safeQId);
    const isBm = bookmarkSet.has(qId) || bookmarkSet.has(safeQId);
    const existingCloud = cloudMarksMap.get(safeQId);
    if (!existingCloud || existingCloud.inErrorNotebook !== inErr || existingCloud.isBookmarked !== isBm) {
      await pushQuestionMarkToCloud(uid, safeQId, inErr, isBm);
    }
  }

  // Merge schedule days
  const mergedScheduleDays: Record<string, boolean> = {
    ...(cloudProfile?.completedScheduleDays || {}),
  };
  Object.entries(localData.completedScheduleDays || {}).forEach(([k, v]) => {
    if (v) mergedScheduleDays[k] = true;
    else if (!(k in mergedScheduleDays)) mergedScheduleDays[k] = false;
  });

  // Merge flashcards
  const mergedFlashcards: Record<string, { mastered: boolean; reviews: number }> = {
    ...(cloudProfile?.flashcardStatus || {}),
  };
  Object.entries(localData.flashcardStatus || {}).forEach(([cardId, localCard]) => {
    const cloudCard = mergedFlashcards[cardId];
    if (!cloudCard || localCard.reviews > cloudCard.reviews) {
      mergedFlashcards[cardId] = localCard;
    }
  });

  // Merge subject goals
  const mergedGoals: Record<string, SubjectStudyGoal> = {
    ...(cloudProfile?.subjectGoals || {}),
    ...(localData.subjectGoals || {}),
  };

  // Merge streak & dates
  const cloudDate = sanitizeDateStr(cloudProfile?.lastActiveDate);
  const localDate = sanitizeDateStr(localData.lastActiveDate);
  const latestDate = cloudDate >= localDate ? cloudDate : localDate;
  const mergedStreak = Math.max(
    clampStreak(cloudProfile?.streakDays || 1),
    clampStreak(localData.streakDays || 1)
  );

  const mergedData: UserStudyData = {
    results: mergedResults,
    cadernoErrosIds: Array.from(errorSet),
    bookmarkedQuestionIds: Array.from(bookmarkSet),
    completedScheduleDays: mergedScheduleDays,
    flashcardStatus: mergedFlashcards,
    subjectGoals: mergedGoals,
    activePlanId: localData.activePlanId || cloudProfile?.activePlanId || 'oab_30_dias',
    lastActiveDate: latestDate,
    streakDays: mergedStreak,
  };

  await pushStudyProfileToCloud(uid, mergedData);

  // Merge active in-progress simulado session (pick newest between local and cloud)
  let resolvedActiveSession: ActiveSimuladoSession | null = null;
  if (localActiveSession && cloudActiveSession) {
    const localTs = Date.parse(localActiveSession.updatedAt) || 0;
    const cloudTs = Date.parse(cloudActiveSession.updatedAt) || 0;
    if (localTs >= cloudTs) {
      resolvedActiveSession = localActiveSession;
      await pushActiveSessionToCloud(uid, localActiveSession);
    } else {
      resolvedActiveSession = cloudActiveSession;
    }
  } else if (localActiveSession) {
    resolvedActiveSession = localActiveSession;
    await pushActiveSessionToCloud(uid, localActiveSession);
  } else if (cloudActiveSession) {
    resolvedActiveSession = cloudActiveSession;
  }

  return {
    mergedData,
    activeSession: resolvedActiveSession,
  };
}
