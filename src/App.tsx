import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { SimuladoBuilder } from './components/SimuladoBuilder';
import { SimuladoView } from './components/SimuladoView';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { CronogramaView } from './components/CronogramaView';
import { CadernoErrosView } from './components/CadernoErrosView';
import { FlashcardsView } from './components/FlashcardsView';
import { SimuladoDiagnostico } from './components/SimuladoDiagnostico';
import { LegalKnowledgeAdminView } from './components/LegalKnowledgeAdminView';
import { ProfessorTutorModal } from './components/ProfessorTutorModal';
import { AccessAnywhereModal } from './components/AccessAnywhereModal';
import {
  getStoredStudyData,
  saveStoredStudyData,
  recordSimuladoResult,
  toggleBookmarkQuestion,
  getGlobalPerformanceStats,
  getEffectiveSubjectGoal,
  setActiveCloudUserId,
  setCloudSyncListener,
  getStoredActiveSession,
  saveStoredActiveSession,
  setActiveSessionOpenInView,
  clearStoredActiveSession,
  flushPendingCloudWrites,
} from './services/storage';
import { sanitizeFirestoreId, syncAndLoadCloudStudyState } from './services/cloudSync';
import { useFirebase } from './contexts/FirebaseContext';
import {
  ActiveSimuladoSession,
  SimuladoConfig,
  SimuladoResult,
  LegalQuestion,
  UserStudyData,
} from './types';
import { getAllQuestions, subscribeToQuestions, syncPublishedQuestionsFromServer } from './services/questionsService';
import { startKeepAliveMonitor } from './services/keepAlive';

interface ActiveSimuladoState {
  config: SimuladoConfig;
  questions: LegalQuestion[];
  returnTab?: 'simulados' | 'diagnostico';
  initialSession?: ActiveSimuladoSession | null;
}

function buildActiveSimuladoFromSession(session: ActiveSimuladoSession): ActiveSimuladoState | null {
  const allQ = getAllQuestions();
  const qMap = new Map<string, LegalQuestion>();
  allQ.forEach((q) => {
    qMap.set(q.id, q);
    qMap.set(sanitizeFirestoreId(q.id, 'q'), q);
  });

  const baseMap = new Map<string, LegalQuestion>();
  const fallbackMap = new Map<string, LegalQuestion>();
  session.queueRefs.forEach((ref) => {
    const found = qMap.get(ref.questionId);
    if (!found) return;
    fallbackMap.set(found.id, found);
    if (!ref.isRetry && !ref.instanceId.includes('_comp_')) {
      baseMap.set(found.id, found);
    }
  });

  const resolvedQuestions = Array.from(baseMap.size > 0 ? baseMap.values() : fallbackMap.values());
  if (resolvedQuestions.length === 0) return null;

  return {
    config: session.config,
    questions: resolvedQuestions,
    returnTab: 'simulados',
    initialSession: session,
  };
}

export default function App() {
  const { user, authReady, setSyncStatus } = useFirebase();
  const [activeTab, setActiveTab] = useState<'simulados' | 'diagnostico' | 'cronograma' | 'desempenho' | 'erros' | 'flashcards' | 'base_admin' | 'professor'>('simulados');
  const [studyData, setStudyData] = useState<UserStudyData>(() => getStoredStudyData());
  const [pausedSession, setPausedSession] = useState<ActiveSimuladoSession | null>(() =>
    getStoredActiveSession()
  );
  const [activeSimulado, setActiveSimulado] = useState<ActiveSimuladoState | null>(() => {
    const saved = getStoredActiveSession();
    if (saved?.isOpenInView) {
      return buildActiveSimuladoFromSession(saved);
    }
    return null;
  });
  const [showDedicatedProfessorModal, setShowDedicatedProfessorModal] = useState(false);
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [questionsVersion, setQuestionsVersion] = useState(0);

  const activeSimuladoRef = useRef<ActiveSimuladoState | null>(activeSimulado);
  useEffect(() => {
    activeSimuladoRef.current = activeSimulado;
  }, [activeSimulado]);

  // Sync state with storage, server legal knowledge DB, and periodic keep-alive
  useEffect(() => {
    const unsub = subscribeToQuestions(() => {
      setQuestionsVersion(v => v + 1);
    });
    syncPublishedQuestionsFromServer();
    const stopKeepAlive = startKeepAliveMonitor();
    return () => {
      unsub();
      stopKeepAlive();
    };
  }, []);

  // Re-try restoring an open session if dynamic server questions finish loading right after mount
  useEffect(() => {
    if (!activeSimulado && pausedSession?.isOpenInView) {
      const restored = buildActiveSimuladoFromSession(pausedSession);
      if (restored) {
        setActiveSimulado(restored);
      }
    }
  }, [questionsVersion]);

  // Keep pausedSession updated whenever leaving active simulado view
  useEffect(() => {
    if (!(activeSimulado && activeTab === 'simulados')) {
      setPausedSession(getStoredActiveSession());
    }
  }, [activeSimulado, activeTab]);

  // Flush any pending cloud session writes when closing or backgrounding the app
  useEffect(() => {
    const handleFlush = () => flushPendingCloudWrites();
    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        flushPendingCloudWrites();
      }
    };
    window.addEventListener('pagehide', handleFlush);
    window.addEventListener('beforeunload', handleFlush);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      window.removeEventListener('pagehide', handleFlush);
      window.removeEventListener('beforeunload', handleFlush);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  // Connect Firebase user to automatic cloud sync and merge saved progress on login
  useEffect(() => {
    setCloudSyncListener(setSyncStatus);
    if (!authReady) return;

    if (!user) {
      setActiveCloudUserId(null);
      setSyncStatus('idle');
      return;
    }

    let cancelled = false;
    setActiveCloudUserId(user.uid);
    setSyncStatus('syncing');

    const localData = getStoredStudyData();
    const localSession = getStoredActiveSession();

    syncAndLoadCloudStudyState(user, localData, localSession)
      .then(({ mergedData, activeSession }) => {
        if (cancelled) return;
        saveStoredStudyData(mergedData);
        setStudyData(mergedData);

        if (activeSession && !activeSimuladoRef.current) {
          const withLocalOpenFlag: ActiveSimuladoSession = {
            ...activeSession,
            isOpenInView:
              localSession?.config.id === activeSession.config.id
                ? Boolean(localSession.isOpenInView)
                : false,
          };
          saveStoredActiveSession(withLocalOpenFlag, false);
          setPausedSession(withLocalOpenFlag);
          if (withLocalOpenFlag.isOpenInView) {
            const restored = buildActiveSimuladoFromSession(withLocalOpenFlag);
            if (restored) {
              setActiveSimulado(restored);
            }
          }
        }
        setSyncStatus('synced');
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Erro na sincronização inicial com Firebase:', err);
        setSyncStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [authReady, user?.uid, setSyncStatus]);

  const refreshStudyData = () => {
    setStudyData(getStoredStudyData());
  };

  const handleStartSimulado = (config: SimuladoConfig) => {
    let pool = getAllQuestions();

    // Filter by subject if specified
    if (config.subjects && config.subjects.length > 0) {
      pool = pool.filter(q => config.subjects!.some(s => s.toLowerCase() === q.subject.toLowerCase()));
    }

    // Filter by board
    if (config.board && config.board !== 'ALL') {
      pool = pool.filter(q => q.board === config.board);
    }

    // Filter by difficulty
    if (config.difficulty && config.difficulty !== 'ALL') {
      pool = pool.filter(q => q.difficulty === config.difficulty);
    }

    // Filter by difficulty level (1-4)
    if (config.difficultyLevel && config.difficultyLevel !== 'ALL') {
      pool = pool.filter(q => (q.difficultyLevel || 2) === config.difficultyLevel);
    }

    // Filter by origin type
    if (config.originFilter && config.originFilter !== 'ALL') {
      pool = pool.filter(q => (q.originType || 'AUTORAL_PROFESSOR') === config.originFilter);
    }

    // Filter by exam type (OAB, FACULDADE, CONCURSO)
    if (config.examTypeFilter && config.examTypeFilter !== 'ALL') {
      pool = pool.filter(q => q.examType === config.examTypeFilter);
    }

    // Filter by topic keywords
    if (config.topics && config.topics.length > 0) {
      pool = pool.filter(q =>
        config.topics!.some(t => q.topic.toLowerCase().includes(t.toLowerCase()))
      );
    }

    // Fisher-Yates unbiased shuffle for variety
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const selected = shuffled.slice(0, Math.min(config.questionCount, shuffled.length));

    setActiveSimulado({
      config,
      questions: selected.length > 0 ? selected : getAllQuestions().slice(0, 5),
      returnTab: 'simulados',
      initialSession: null,
    });
    setActiveTab('simulados');
  };

  const handleStartDiagnosticSimulado = (config: SimuladoConfig, questions: LegalQuestion[]) => {
    setActiveSimulado({
      config,
      questions: questions.length > 0 ? questions : getAllQuestions().slice(0, 10),
      returnTab: 'diagnostico',
      initialSession: null,
    });
    setActiveTab('simulados');
  };

  const handleStartSimuladoFromQuestions = (questions: LegalQuestion[], title?: string) => {
    setActiveSimulado({
      config: {
        id: `caderno_erros_${Date.now()}`,
        title: title || 'Treinamento do Caderno de Erros',
        description: 'Questões que você errou anteriormente para fixação ativa.',
        type: 'CADERNO_ERROS',
        questionCount: questions.length,
        timeLimitMinutes: null,
        mode: 'TREINO',
        repeatWrongQuestionsInterval: 1,
      },
      questions,
      initialSession: null,
    });
    setActiveTab('simulados');
  };

  const handleStartDayPractice = (subject: string, dayNumber: number) => {
    const all = getAllQuestions();
    const isGeneral = subject.toLowerCase() === 'geral';
    const matching = isGeneral
      ? all
      : all.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
    const pool = [...(matching.length > 0 ? matching : all)];

    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const goal = isGeneral
      ? { dailyQuestions: 20, dailyMinutes: 60 }
      : getEffectiveSubjectGoal(studyData, subject);
    const questionsToUse = pool.slice(0, Math.min(goal.dailyQuestions, pool.length));

    setActiveSimulado({
      config: {
        id: `day_${dayNumber}_${Date.now()}`,
        title: `Treino do Dia ${dayNumber} · ${subject}`,
        description: `Meta configurada: ${questionsToUse.length} questões · tempo dedicado sugerido de ${goal.dailyMinutes} min com fixação do professor.`,
        type: 'DISCIPLINA',
        questionCount: questionsToUse.length,
        timeLimitMinutes: null,
        mode: 'TREINO',
        repeatWrongQuestionsInterval: 2,
      },
      questions: questionsToUse,
      initialSession: null,
    });
    setActiveTab('simulados');
  };

  const handleResumePausedSession = () => {
    const latest = getStoredActiveSession() || pausedSession;
    if (!latest) return;
    const restored = buildActiveSimuladoFromSession({ ...latest, isOpenInView: true });
    if (restored) {
      setActiveSessionOpenInView(true);
      setActiveSimulado(restored);
      setActiveTab('simulados');
    }
  };

  const handleDiscardPausedSession = () => {
    clearStoredActiveSession();
    setPausedSession(null);
  };

  const handleSimuladoComplete = (result: SimuladoResult) => {
    clearStoredActiveSession();
    setPausedSession(null);
    const updated = recordSimuladoResult(result);
    setStudyData(updated);
  };

  const handleToggleBookmark = (qId: string) => {
    toggleBookmarkQuestion(qId);
    refreshStudyData();
  };

  const stats = getGlobalPerformanceStats(studyData);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#FAF7F2] text-stone-900 flex flex-col font-sans selection:bg-[#1B365D]/15 selection:text-[#1B365D]">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'professor') {
            setShowDedicatedProfessorModal(true);
          } else {
            if (tab === 'simulados' && activeSimulado) {
              const latest = getStoredActiveSession();
              if (latest && latest.config.id === activeSimulado.config.id) {
                setActiveSimulado(prev => prev ? { ...prev, initialSession: latest } : null);
              }
            }
            setActiveTab(tab);
          }
        }}
        streakDays={studyData.streakDays}
        cadernoErrosCount={studyData.cadernoErrosIds.length}
        accuracyRate={stats.accuracy}
        totalAnswered={stats.totalQuestionsAnswered}
        onOpenAccessAnywhere={() => setShowAccessModal(true)}
      />

      {/* Main View Port */}
      <main className="flex-1 pb-16">
        {/* If a simulado is active and we are in the simulados tab */}
        {activeSimulado && activeTab === 'simulados' ? (
          <SimuladoView
            key={activeSimulado.config.id}
            config={activeSimulado.config}
            questions={activeSimulado.questions}
            initialSession={activeSimulado.initialSession}
            onPersistSession={(session, immediateCloud) => {
              saveStoredActiveSession(session, immediateCloud);
            }}
            onDiscardSession={() => {
              clearStoredActiveSession();
              setPausedSession(null);
            }}
            onComplete={handleSimuladoComplete}
            onExit={() => {
              const target = activeSimulado.returnTab || 'simulados';
              setActiveSessionOpenInView(false);
              setPausedSession(getStoredActiveSession());
              setActiveSimulado(null);
              setActiveTab(target);
            }}
            bookmarkedIds={studyData.bookmarkedQuestionIds}
            onToggleBookmark={handleToggleBookmark}
          />
        ) : (
          <>
            {activeTab === 'simulados' && (
              <SimuladoBuilder
                onStartSimulado={handleStartSimulado}
                cadernoErrosCount={studyData.cadernoErrosIds.length}
                onOpenDiagnostic={() => setActiveTab('diagnostico')}
                pausedSession={pausedSession}
                onResumeSession={handleResumePausedSession}
                onDiscardPausedSession={handleDiscardPausedSession}
              />
            )}

            {activeTab === 'diagnostico' && (
              <SimuladoDiagnostico
                studyData={studyData}
                onStartDiagnosticSimulado={handleStartDiagnosticSimulado}
                onGoToStandardSimulados={() => {
                  setActiveSimulado(null);
                  setActiveTab('simulados');
                }}
              />
            )}

            {activeTab === 'cronograma' && (
              <CronogramaView
                studyData={studyData}
                onRefreshData={refreshStudyData}
                onStartDayPractice={handleStartDayPractice}
              />
            )}

            {activeTab === 'desempenho' && (
              <PerformanceDashboard
                studyData={studyData}
                onTrainWeakness={(subject) => handleStartDayPractice(subject, 1)}
                onGoToSimulados={() => {
                  setActiveSimulado(null);
                  setActiveTab('simulados');
                }}
                onOpenDiagnostic={() => {
                  setActiveSimulado(null);
                  setActiveTab('diagnostico');
                }}
              />
            )}

            {activeTab === 'erros' && (
              <CadernoErrosView
                cadernoErrosIds={studyData.cadernoErrosIds}
                onRefreshData={refreshStudyData}
                onStartSimuladoErros={(questions) => handleStartSimuladoFromQuestions(questions, 'Revisão do Caderno de Erros')}
              />
            )}

            {activeTab === 'flashcards' && (
              <FlashcardsView
                flashcardStatus={studyData.flashcardStatus}
                onRefreshData={refreshStudyData}
              />
            )}

            {activeTab === 'base_admin' && (
              <LegalKnowledgeAdminView />
            )}
          </>
        )}
      </main>

      {/* Professor Tutor Modal (Accessible from anywhere or via the header button) */}
      <ProfessorTutorModal
        isOpen={showDedicatedProfessorModal}
        onClose={() => setShowDedicatedProfessorModal(false)}
      />

      {/* Access Anywhere & Mobile PWA Installation Modal */}
      <AccessAnywhereModal
        isOpen={showAccessModal}
        onClose={() => setShowAccessModal(false)}
      />

      {/* Footer Legal & Educational Disclaimer */}
      <footer className="border-t border-[#E2DBD0] bg-[#F3EFE6] py-6 text-center text-xs text-stone-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-serif text-stone-700">
            © {new Date().getFullYear()} JurisMentor · Estudos Jurídicos Clássicos & Preparação OAB.
          </span>
          <span className="font-mono text-[11px] text-stone-600">
            Conteúdo alinhado aos Exames Unificados FGV e Tribunais Superiores (STF/STJ).
          </span>
        </div>
      </footer>
    </div>
  );
}
