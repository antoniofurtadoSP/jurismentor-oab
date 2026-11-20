import { UserStudyData, SimuladoResult, LegalQuestion } from '../types';
import { getAllQuestions } from './questionsService';

const STORAGE_KEY = 'jurismenor_user_study_data_v1';

const DEFAULT_DATA: UserStudyData = {
  results: [],
  cadernoErrosIds: [],
  bookmarkedQuestionIds: [],
  completedScheduleDays: {},
  flashcardStatus: {},
  activePlanId: 'oab_30_dias',
  lastActiveDate: new Date().toISOString().split('T')[0],
  streakDays: 1,
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

export const recordSimuladoResult = (result: SimuladoResult): UserStudyData => {
  const current = getStoredStudyData();
  
  // Update Caderno de Erros with wrong questions
  const newErrosIds = new Set(current.cadernoErrosIds);
  
  Object.values(result.answers).forEach(ans => {
    if (!ans.isCorrect) {
      newErrosIds.add(ans.questionId);
    } else {
      // When resolved correctly in Caderno de Erros or Diagnóstico mode, remove from pending errors
      if (result.configId.includes('CADERNO_ERROS') || result.configId.startsWith('diagnostico_')) {
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

  const updated: UserStudyData = {
    ...current,
    results: [result, ...current.results],
    cadernoErrosIds: Array.from(newErrosIds),
    lastActiveDate: today,
    streakDays: streak,
  };

  saveStoredStudyData(updated);
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
  return isBookmarked;
};

export const removeQuestionFromCadernoErros = (questionId: string): void => {
  const data = getStoredStudyData();
  data.cadernoErrosIds = data.cadernoErrosIds.filter(id => id !== questionId);
  saveStoredStudyData(data);
};

export const toggleScheduleDayCompletion = (planId: string, dayNumber: number): boolean => {
  const data = getStoredStudyData();
  const key = `${planId}_day_${dayNumber}`;
  const current = Boolean(data.completedScheduleDays[key]);
  data.completedScheduleDays[key] = !current;
  saveStoredStudyData(data);
  return !current;
};

export const updateFlashcardMastery = (cardId: string, mastered: boolean): void => {
  const data = getStoredStudyData();
  const current = data.flashcardStatus[cardId] || { mastered: false, reviews: 0 };
  data.flashcardStatus[cardId] = {
    mastered,
    reviews: current.reviews + 1
  };
  saveStoredStudyData(data);
};

export const getGlobalPerformanceStats = (data: UserStudyData) => {
  let totalQuestionsAnswered = 0;
  let totalCorrect = 0;
  const subjectStats: Record<string, { total: number; correct: number }> = {};

  data.results.forEach(res => {
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
      correct: s.correct
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
  return getAllQuestions().filter(q => set.has(q.id));
};

export const getBookmarkedQuestions = (): LegalQuestion[] => {
  const data = getStoredStudyData();
  const set = new Set(data.bookmarkedQuestionIds);
  return getAllQuestions().filter(q => set.has(q.id));
};
