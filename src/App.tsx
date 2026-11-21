import React, { useState, useEffect } from 'react';
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
  recordSimuladoResult, 
  toggleBookmarkQuestion,
  getGlobalPerformanceStats 
} from './services/storage';
import { SimuladoConfig, SimuladoResult, LegalQuestion, UserStudyData } from './types';
import { getAllQuestions, subscribeToQuestions, syncPublishedQuestionsFromServer } from './services/questionsService';
import { startKeepAliveMonitor } from './services/keepAlive';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulados' | 'diagnostico' | 'cronograma' | 'desempenho' | 'erros' | 'flashcards' | 'base_admin' | 'professor'>('simulados');
  const [studyData, setStudyData] = useState<UserStudyData>(getStoredStudyData());
  const [activeSimulado, setActiveSimulado] = useState<{
    config: SimuladoConfig;
    questions: LegalQuestion[];
    returnTab?: 'simulados' | 'diagnostico';
  } | null>(null);
  const [showDedicatedProfessorModal, setShowDedicatedProfessorModal] = useState(false);
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [, setQuestionsVersion] = useState(0);

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
    });
    setActiveTab('simulados');
  };

  const handleStartDiagnosticSimulado = (config: SimuladoConfig, questions: LegalQuestion[]) => {
    setActiveSimulado({
      config,
      questions: questions.length > 0 ? questions : getAllQuestions().slice(0, 10),
      returnTab: 'diagnostico',
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
    });
    setActiveTab('simulados');
  };

  const handleStartDayPractice = (subject: string, dayNumber: number) => {
    const all = getAllQuestions();
    const matching = all.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
    const questionsToUse = matching.length > 0 ? matching : all.slice(0, 6);

    setActiveSimulado({
      config: {
        id: `day_${dayNumber}_${Date.now()}`,
        title: `Treino do Dia ${dayNumber} · ${subject}`,
        description: `Questões oficiais para cumprir a meta diária do cronograma de revisão com fixação do professor.`,
        type: 'DISCIPLINA',
        questionCount: questionsToUse.length,
        timeLimitMinutes: null,
        mode: 'TREINO',
        repeatWrongQuestionsInterval: 2,
      },
      questions: questionsToUse,
    });
    setActiveTab('simulados');
  };

  const handleSimuladoComplete = (result: SimuladoResult) => {
    const updated = recordSimuladoResult(result);
    setStudyData(updated);
  };

  const handleToggleBookmark = (qId: string) => {
    toggleBookmarkQuestion(qId);
    refreshStudyData();
  };

  const stats = getGlobalPerformanceStats(studyData);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'professor') {
            setShowDedicatedProfessorModal(true);
          } else {
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
            config={activeSimulado.config}
            questions={activeSimulado.questions}
            onComplete={handleSimuladoComplete}
            onExit={() => {
              const target = activeSimulado.returnTab || 'simulados';
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
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} JurisMentor · Plataforma de Estudos Jurídicos de Alta Performance.
          </span>
          <span className="font-mono text-[11px] text-slate-600">
            Conteúdo alinhado aos Exames Unificados FGV e Tribunais Superiores (STF/STJ).
          </span>
        </div>
      </footer>
    </div>
  );
}
