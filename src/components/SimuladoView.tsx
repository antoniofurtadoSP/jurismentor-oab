import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, XCircle, ArrowLeft, ArrowRight, Flag, BookOpen, Sparkles, 
  Clock, Award, Bookmark, Strikethrough, AlertTriangle, 
  FileText, RefreshCw, PlusCircle, Compass
} from 'lucide-react';
import { LegalQuestion, SimuladoConfig, SimuladoResult, SimuladoAnswer } from '../types';
import { VadeMecumModal } from './VadeMecumModal';
import { ProfessorTutorModal } from './ProfessorTutorModal';
import { ProfessorAudioService } from '../services/speech';
import { ProfessorAudioPlayer } from './ProfessorAudioPlayer';
import { InlineQuestionClarification } from './InlineQuestionClarification';
import { getAllQuestions } from '../services/questionsService';

const ORIGIN_LABELS: Record<string, string> = {
  OFICIAL_OAB: 'Oficial OAB/FGV',
  INEDITA_IA: 'Inédita Fundamentada',
  AUTORAL_PROFESSOR: 'Autoral JurisMentor',
  ACADEMICA: 'Acadêmica / Faculdade',
};

const LEVEL_LABELS: Record<number, string> = {
  1: 'Nível 1 · Básico',
  2: 'Nível 2 · Intermediário',
  3: 'Nível 3 · Avançado',
  4: 'Nível 4 · Desafio OAB',
};

interface QueueItem {
  instanceId: string;
  question: LegalQuestion;
  attemptNumber: number;
  isRetry: boolean;
  previousWrongLetter?: string;
}

interface SimuladoViewProps {
  config: SimuladoConfig;
  questions: LegalQuestion[];
  onComplete: (result: SimuladoResult) => void;
  onExit: () => void;
  bookmarkedIds: string[];
  onToggleBookmark: (qId: string) => void;
}

export const SimuladoView: React.FC<SimuladoViewProps> = ({
  config,
  questions,
  onComplete,
  onExit,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  // Setup question queue supporting dynamic spaced recall re-insertions
  const [queue, setQueue] = useState<QueueItem[]>(() => 
    questions.map((q, idx) => ({
      instanceId: `${q.id}_orig_${idx}`,
      question: q,
      attemptNumber: 1,
      isRetry: false,
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Track attempts and mastery per question ID
  const [questionMastery, setQuestionMastery] = useState<Record<string, {
    firstAttemptCorrect: boolean;
    isFixed: boolean;
    attempts: number;
    wrongCount: number;
  }>>({});

  // Answers recorded for the final score report (using the initial question IDs)
  const [answers, setAnswers] = useState<Record<string, SimuladoAnswer>>({});
  
  // Current question instance answers and states
  const [instanceAnswers, setInstanceAnswers] = useState<Record<string, {
    selectedLetter: string;
    isCorrect: boolean;
  }>>({});

  const [eliminated, setEliminated] = useState<Record<string, string[]>>({});
  const [markedReview, setMarkedReview] = useState<Record<string, boolean>>({});
  
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(
    config.timeLimitMinutes ? config.timeLimitMinutes * 60 : null
  );
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showVadeMecum, setShowVadeMecum] = useState(false);
  const [showTutorModal, setShowTutorModal] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  // Spaced loop interval (how many questions later a wrong question returns)
  const [repeatInterval, setRepeatInterval] = useState<number>(
    config.repeatWrongQuestionsInterval || 2
  );

  const isProfessorMode = config.mode === 'TREINO' || config.mode === 'PROFESSOR_FIXACAO';

  const currentItem = queue[currentIndex];
  const currentQ = currentItem?.question;
  const currentInstanceAns = currentItem ? instanceAnswers[currentItem.instanceId] : undefined;
  const isAnswered = Boolean(currentInstanceAns);

  // Manage timer
  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
      if (secondsRemaining !== null) {
        setSecondsRemaining(prev => {
          if (prev === null) return null;
          if (prev <= 1) {
            clearInterval(interval);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isFinished, secondsRemaining]);

  // Stop audio when changing question
  useEffect(() => {
    ProfessorAudioService.stop();
  }, [currentIndex]);

  // Handle selecting an option
  const handleSelectOption = (letter: string) => {
    if (!currentQ || !currentItem || isAnswered || isFinished) return;
    
    const isCorrect = letter === currentQ.correctAnswer;

    // Record instance answer
    setInstanceAnswers(prev => ({
      ...prev,
      [currentItem.instanceId]: {
        selectedLetter: letter,
        isCorrect,
      }
    }));

    // Update global answers for official score (if first attempt)
    if (!currentItem.isRetry) {
      setAnswers(prev => ({
        ...prev,
        [currentQ.id]: {
          questionId: currentQ.id,
          selectedOption: letter,
          isCorrect,
          timeSpentSeconds: 0,
          markedForReview: Boolean(markedReview[currentQ.id]),
          eliminatedOptions: eliminated[currentQ.id] || []
        }
      }));
    }

    // Update mastery status
    const prevMastery = questionMastery[currentQ.id] || {
      firstAttemptCorrect: isCorrect,
      isFixed: isCorrect,
      attempts: 0,
      wrongCount: 0,
    };

    const newAttempts = prevMastery.attempts + 1;
    const newWrongCount = isCorrect ? prevMastery.wrongCount : prevMastery.wrongCount + 1;
    const isNowFixed = isCorrect; // if correct on retry, it's fixed!

    setQuestionMastery(prev => ({
      ...prev,
      [currentQ.id]: {
        firstAttemptCorrect: currentItem.isRetry ? prevMastery.firstAttemptCorrect : isCorrect,
        isFixed: isNowFixed,
        attempts: newAttempts,
        wrongCount: newWrongCount,
      }
    }));

    // If Professor Mode and answer is WRONG:
    // Schedule this question to RETURN after repeatInterval questions!
    if (isProfessorMode && !isCorrect) {
      const targetIndex = Math.min(queue.length, currentIndex + repeatInterval + 1);
      const retryInstance: QueueItem = {
        instanceId: `${currentQ.id}_retry_${newAttempts}`,
        question: currentQ,
        attemptNumber: newAttempts,
        isRetry: true,
        previousWrongLetter: letter,
      };

      // Insert into the upcoming queue
      setQueue(prevQueue => {
        const nextQueue = [...prevQueue];
        nextQueue.splice(targetIndex, 0, retryInstance);
        return nextQueue;
      });
    }
  };

  const handleToggleEliminate = (e: React.MouseEvent, letter: string) => {
    e.stopPropagation();
    if (!currentQ || isFinished || isAnswered) return;
    const currentList = eliminated[currentQ.id] || [];
    let updated: string[];
    if (currentList.includes(letter)) {
      updated = currentList.filter(l => l !== letter);
    } else {
      updated = [...currentList, letter];
    }
    setEliminated(prev => ({ ...prev, [currentQ.id]: updated }));
  };

  const handleToggleReview = () => {
    if (!currentQ) return;
    setMarkedReview(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  const handleNextQuestion = () => {
    ProfessorAudioService.stop();
    if (currentIndex < queue.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleFinishExam();
    }
  };

  const handleFinishExam = () => {
    ProfessorAudioService.stop();

    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;
    const subjectStats: Record<string, { total: number; correct: number }> = {};

    questions.forEach(q => {
      const ans = answers[q.id];
      if (!subjectStats[q.subject]) {
        subjectStats[q.subject] = { total: 0, correct: 0 };
      }
      subjectStats[q.subject].total += 1;

      if (!ans || !ans.selectedOption) {
        unansweredCount += 1;
      } else if (ans.isCorrect) {
        correctCount += 1;
        subjectStats[q.subject].correct += 1;
      } else {
        wrongCount += 1;
      }
    });

    const scorePercentage = Math.round((correctCount / questions.length) * 100);
    const passedOABCutoff = scorePercentage >= 50;

    const result: SimuladoResult = {
      id: `sim_${Date.now()}`,
      configId: config.id,
      title: config.title,
      date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      totalQuestions: questions.length,
      correctCount,
      wrongCount,
      unansweredCount,
      timeSpentSeconds: elapsedSeconds,
      scorePercentage,
      passedOABCutoff,
      answers,
      subjectStats
    };

    setIsFinished(true);
    onComplete(result);
  };

  const formatTimer = (totalSec: number) => {
    const hours = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hours > 0) {
      return `${hours}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const [complementInjectedFor, setComplementInjectedFor] = useState<Record<string, boolean>>({});

  // Fixation statistics
  const masteredCount = Object.values(questionMastery).filter(m => m.isFixed).length;
  const scheduledRetriesAhead = queue.slice(currentIndex + 1).filter(item => item.isRetry).length;

  // Insere uma questão complementar da mesma disciplina/tema do banco local (zero custo IA)
  const handleInsertComplementaryQuestion = () => {
    if (!currentQ || !currentItem || complementInjectedFor[currentItem.instanceId]) return;
    const usedIds = new Set(queue.map(item => item.question.id));
    const pool = getAllQuestions().filter(
      q => q.subject === currentQ.subject && !usedIds.has(q.id)
    );
    const sameTopic = pool.find(q =>
      q.topic.toLowerCase().includes(currentQ.topic.toLowerCase().split(' ')[0] || '')
    );
    const candidate = sameTopic || pool[0];
    if (!candidate) return;

    const nextItem: QueueItem = {
      instanceId: `${candidate.id}_comp_${Date.now()}`,
      question: candidate,
      attemptNumber: 1,
      isRetry: false,
    };

    setQueue(prev => {
      const next = [...prev];
      next.splice(currentIndex + 1, 0, nextItem);
      return next;
    });
    setComplementInjectedFor(prev => ({ ...prev, [currentItem.instanceId]: true }));
    setCurrentIndex(prev => prev + 1);
  };

  // Render Finished Result Report
  if (isFinished) {
    const initialCorrect = Object.values(answers).filter(a => a.isCorrect).length;
    const scorePct = Math.round((initialCorrect / questions.length) * 100);
    const passedOAB = scorePct >= 50;
    const fixedAfterRetryCount = Object.values(questionMastery).filter(m => !m.firstAttemptCorrect && m.isFixed).length;

    const disciplineBreakdown: Record<string, { total: number; correct: number; wrong: number }> = {};
    const topicBreakdown: Record<string, { subject: string; topic: string; total: number; correct: number; refs: string[] }> = {};
    const markedForReviewList: LegalQuestion[] = [];
    const missedList: LegalQuestion[] = [];

    questions.forEach(q => {
      const ans = answers[q.id];
      if (!disciplineBreakdown[q.subject]) {
        disciplineBreakdown[q.subject] = { total: 0, correct: 0, wrong: 0 };
      }
      disciplineBreakdown[q.subject].total += 1;
      if (ans?.isCorrect) {
        disciplineBreakdown[q.subject].correct += 1;
      } else {
        disciplineBreakdown[q.subject].wrong += 1;
        missedList.push(q);
      }

      const topicKey = `${q.subject}__${q.topic}`;
      if (!topicBreakdown[topicKey]) {
        topicBreakdown[topicKey] = {
          subject: q.subject,
          topic: q.topic,
          total: 0,
          correct: 0,
          refs: q.statuteReferences.map(r => `${r.code} ${r.article}`),
        };
      }
      topicBreakdown[topicKey].total += 1;
      if (ans?.isCorrect) {
        topicBreakdown[topicKey].correct += 1;
      }

      if (markedReview[q.id]) {
        markedForReviewList.push(q);
      }
    });

    const disciplineRows = Object.entries(disciplineBreakdown)
      .map(([subject, stat]) => ({
        subject,
        ...stat,
        pct: Math.round((stat.correct / stat.total) * 100),
      }))
      .sort((a, b) => a.pct - b.pct);

    const topicRows = Object.values(topicBreakdown)
      .map(item => ({
        ...item,
        pct: Math.round((item.correct / item.total) * 100),
      }))
      .sort((a, b) => a.pct - b.pct);

    const weakTopics = topicRows.filter(t => t.pct < 60).slice(0, 5);

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 animate-in fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="text-center pb-6 border-b border-slate-800">
            <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Sessão Pedagógica Concluída!
            </h2>
            <p className="text-sm text-slate-400 tabular-nums">
              {config.title} · Duração: {formatTimer(elapsedSeconds)} · {questions.length} questões avaliadas
            </p>
          </div>

          {/* OAB Cutoff Radar Visualizer */}
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Aproveitamento na 1ª Tentativa (Régua OAB 50%)
                </span>
                <div className="flex items-baseline gap-2 mt-1 tabular-nums">
                  <span className="text-4xl font-black font-serif text-white">
                    {initialCorrect}
                  </span>
                  <span className="text-slate-500 text-lg">/ {questions.length} questões</span>
                  <span className={`text-xl font-bold ml-2 ${passedOAB ? 'text-emerald-400' : 'text-amber-400'}`}>
                    ({scorePct}%)
                  </span>
                </div>
              </div>

              <div className={`px-4 py-2.5 rounded-xl border text-sm font-bold flex items-center gap-2 whitespace-nowrap ${
                passedOAB 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
              }`}>
                {passedOAB ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>APROVADO NA 1ª FASE</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5" />
                    <span>ZONA DE ATENÇÃO (Abaixo de 50%)</span>
                  </>
                )}
              </div>
            </div>

            <div className="relative w-full h-4 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${
                  passedOAB ? 'bg-gradient-to-r from-amber-500 to-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${Math.min(100, scorePct)}%` }}
              />
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
                style={{ left: '50%' }}
                title="Linha de corte OAB: 50%"
              />
            </div>
          </div>

          {/* Fixation Cycle Achievement Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-emerald-950/30 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-base text-white">
                  Impacto do Ciclo de Fixação do Professor
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Graças às intervenções pedagógicas e ao retorno das questões erradas na sessão, você recuperou e fixou <strong className="text-emerald-400 font-bold">{fixedAfterRetryCount} questões</strong> que inicialmente teria errado.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1 tabular-nums">
                  <span>Questões Fixadas: <strong className="text-white">{masteredCount}/{questions.length}</strong></span>
                  <span>·</span>
                  <span>Retornos Realizados: <strong className="text-purple-300">{queue.length - questions.length}</strong></span>
                  <span>·</span>
                  <span>Marcadas p/ Revisão: <strong className="text-sky-300">{markedForReviewList.length}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Desempenho por Disciplina & por Assunto (Módulo 7) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-sm text-white">Desempenho por Disciplina</h3>
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {disciplineRows.map(row => (
                  <div key={row.subject} className="space-y-1">
                    <div className="flex items-center justify-between text-xs gap-2">
                      <span className="text-slate-200 truncate">{row.subject}</span>
                      <span className={`font-mono font-bold tabular-nums shrink-0 ${
                        row.pct >= 70 ? 'text-emerald-400' : row.pct >= 50 ? 'text-amber-400' : 'text-rose-400'
                      }`}>
                        {row.correct}/{row.total} ({row.pct}%)
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          row.pct >= 70 ? 'bg-emerald-500' : row.pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-sm text-white">Desempenho por Assunto</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {topicRows.map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-0">
                    <div className="min-w-0">
                      <div className="text-slate-200 truncate font-medium">{row.topic}</div>
                      <div className="text-[11px] text-slate-500 truncate">{row.subject}</div>
                    </div>
                    <span className={`font-mono font-bold tabular-nums shrink-0 ${
                      row.pct >= 70 ? 'text-emerald-400' : row.pct >= 50 ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {row.correct}/{row.total} ({row.pct}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recomendações Adaptativas de Estudo (Módulo 6 & 7) */}
          {(weakTopics.length > 0 || missedList.length > 0) && (
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-sm">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Recomendações Adaptativas de Estudo</span>
              </div>
              {weakTopics.length > 0 && (
                <div className="space-y-1.5 text-xs text-slate-300">
                  {weakTopics.map((wt, i) => (
                    <div key={i} className="flex flex-wrap items-baseline justify-between gap-2 py-1 border-b border-slate-800/60 last:border-0">
                      <span>
                        <strong className="text-white">{wt.subject}</strong> · {wt.topic}
                        {wt.refs.length > 0 && (
                          <span className="text-amber-300 ml-2">({wt.refs.slice(0, 2).join(', ')})</span>
                        )}
                      </span>
                      <span className="font-mono text-rose-400 tabular-nums">{wt.pct}% de acerto</span>
                    </div>
                  ))}
                </div>
              )}
              {markedForReviewList.length > 0 && (
                <p className="text-xs text-sky-300">
                  Você marcou {markedForReviewList.length} questão(ões) para revisão manual. Clique em "Rever Questões e Explicações" para inspecioná-las.
                </p>
              )}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <button
              onClick={onExit}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors cursor-pointer"
            >
              Voltar ao Início
            </button>
            <button
              onClick={() => {
                setIsFinished(false);
                setCurrentIndex(0);
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold transition-colors cursor-pointer flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Rever Questões e Explicações
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) {
    return <div className="p-8 text-center text-slate-400">Nenhuma questão na fila de estudo.</div>;
  }

  const isBookmarked = bookmarkedIds.includes(currentQ.id);
  const currentEliminated = eliminated[currentQ.id] || [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Top Banner & Fixation Status Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 shadow-md space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              title="Sair do simulado"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
                  {config.title}
                </h2>
                {currentItem.isRetry ? (
                  <span className="text-[11px] font-bold text-purple-300 bg-purple-500/20 border border-purple-500/40 px-2 py-0.5 rounded-md flex items-center gap-1 animate-pulse">
                    <RefreshCw className="w-3 h-3" /> Retorno de Fixação (#{currentItem.attemptNumber})
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                    1ª Apresentação
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                <span>Passo {currentIndex + 1} de {queue.length}</span>
                <span>·</span>
                <span>Base: {questions.length} questões</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Fixation Queue Badge */}
            {isProfessorMode && (
              <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 text-purple-400 font-semibold" title="Questões erradas agendadas para re-teste">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Em Fixação:</span>
                  <span className="font-bold text-white font-mono">{scheduledRetriesAhead}</span>
                </div>
                <div className="w-[1px] h-3 bg-slate-800" />
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold" title="Questões dominadas">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Fixadas:</span>
                  <span className="font-bold text-white font-mono">{masteredCount}</span>
                </div>
              </div>
            )}

            {/* Timer */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-amber-400">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {secondsRemaining !== null ? formatTimer(secondsRemaining) : formatTimer(elapsedSeconds)}
              </span>
            </div>

            {/* Font size toggle */}
            <button
              onClick={() => setFontSize(prev => prev === 'normal' ? 'large' : 'normal')}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-serif cursor-pointer"
              title="Ajustar tamanho da fonte"
            >
              {fontSize === 'normal' ? 'A+' : 'A-'}
            </button>

            {/* Finish Button */}
            <button
              onClick={handleFinishExam}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors cursor-pointer border border-slate-700"
            >
              Finalizar
            </button>
          </div>
        </div>

        {/* Dynamic Queue Navigator Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {queue.map((item, idx) => {
            const isCurrent = idx === currentIndex;
            const ans = instanceAnswers[item.instanceId];
            
            let badgeClass = "bg-slate-800/80 text-slate-400 border-slate-700/60";
            if (isCurrent) {
              badgeClass = "ring-2 ring-amber-400 bg-amber-500/20 text-white font-bold border-amber-500/40";
            } else if (ans) {
              if (item.isRetry && ans.isCorrect) {
                badgeClass = "bg-purple-500/30 text-purple-300 border-purple-500/50";
              } else if (ans.isCorrect) {
                badgeClass = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
              } else {
                badgeClass = "bg-rose-500/20 text-rose-400 border-rose-500/30";
              }
            } else if (item.isRetry) {
              badgeClass = "bg-purple-950/40 text-purple-400 border-purple-700/40 border-dashed";
            }

            return (
              <button
                key={item.instanceId}
                onClick={() => setCurrentIndex(idx)}
                className={`min-w-7 h-7 text-xs rounded-md border flex items-center justify-center font-mono transition-colors cursor-pointer shrink-0 ${badgeClass}`}
                title={item.isRetry ? `Retorno de fixação da questão #${idx + 1}` : `Questão #${idx + 1}`}
              >
                {item.isRetry ? `R${item.attemptNumber}` : idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Retrial Flash Banner if this is a Spaced Return */}
      {currentItem.isRetry && !isAnswered && (
        <div className="mb-4 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/40 flex items-start gap-3 text-purple-200 text-xs sm:text-sm animate-in fade-in">
          <RefreshCw className="w-5 h-5 text-purple-400 shrink-0 mt-0.5 animate-spin-slow" />
          <div>
            <strong className="text-purple-300 block font-serif text-sm">
              Ciclo de Fixação Ativo: Esta pergunta retornou para você testar a retenção!
            </strong>
            Você havia errado esta questão anteriormente {currentItem.previousWrongLetter && `(havia marcado letra ${currentItem.previousWrongLetter})`}. Demonstre que você compreendeu o artigo de lei e acerte agora!
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        {/* Authentic Exam Metadata Header (Zero-pill clean line) */}
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-slate-800/80 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-slate-400 font-medium">
            <span className="text-amber-400 font-semibold">{currentQ.exam}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">{currentQ.subject}</span>
            <span aria-hidden="true">·</span>
            <span>{currentQ.topic}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-slate-400">
            <span className="text-sky-300 font-medium">
              {ORIGIN_LABELS[currentQ.originType || 'AUTORAL_PROFESSOR'] || 'Acervo JurisMentor'}
            </span>
            <span aria-hidden="true">·</span>
            <span>Banca: <strong className="text-slate-200">{currentQ.board}</strong></span>
            <span aria-hidden="true">·</span>
            <span>
              <strong className="text-slate-200">
                {currentQ.difficultyLevel ? LEVEL_LABELS[currentQ.difficultyLevel] : currentQ.difficulty}
              </strong>
            </span>
          </div>
        </div>

        {/* Statement / Enunciado */}
        <div className={`mt-6 mb-8 text-slate-100 font-serif leading-relaxed whitespace-pre-line ${
          fontSize === 'large' ? 'text-lg leading-loose' : 'text-base'
        }`}>
          {currentQ.statement}
        </div>

        {/* Alternatives / Options */}
        <div className="space-y-3.5 mb-8">
          {currentQ.options.map((opt) => {
            const isSelected = currentInstanceAns?.selectedLetter === opt.letter;
            const isEliminated = currentEliminated.includes(opt.letter);
            const isCorrectOption = opt.letter === currentQ.correctAnswer;

            let cardStateClasses = "border-slate-800 bg-slate-950/60 hover:border-slate-700 text-slate-200";

            if (isAnswered) {
              if (isCorrectOption) {
                cardStateClasses = "border-emerald-500/80 bg-emerald-950/30 text-emerald-100 shadow-md shadow-emerald-900/10";
              } else if (isSelected && !isCorrectOption) {
                cardStateClasses = "border-rose-500/80 bg-rose-950/30 text-rose-100";
              }
            } else if (isSelected) {
              cardStateClasses = "border-amber-500 bg-amber-500/10 text-white shadow-md shadow-amber-500/5";
            }

            return (
              <div
                key={opt.letter}
                onClick={() => handleSelectOption(opt.letter)}
                className={`relative group rounded-2xl p-4 sm:p-5 border transition-all cursor-pointer flex items-start gap-4 ${cardStateClasses} ${
                  isEliminated ? 'opacity-40 grayscale line-through' : ''
                } ${isAnswered ? 'cursor-default' : ''}`}
              >
                {/* Letter indicator */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 font-mono transition-colors ${
                  isAnswered && isCorrectOption
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : isAnswered && isSelected && !isCorrectOption
                    ? 'bg-rose-500 text-white'
                    : isSelected
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                }`}>
                  {opt.letter}
                </div>

                {/* Option text */}
                <div className={`flex-1 font-sans text-sm sm:text-base leading-relaxed ${
                  fontSize === 'large' ? 'text-base sm:text-lg' : ''
                }`}>
                  {opt.text}
                </div>

                {/* Strike through button (Riscar alternativa) */}
                {!isAnswered && (
                  <button
                    type="button"
                    onClick={(e) => handleToggleEliminate(e, opt.letter)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 rounded text-slate-500 hover:text-amber-400 hover:bg-slate-800 transition-opacity"
                    title="Riscar alternativa provisoriamente"
                  >
                    <Strikethrough className="w-4 h-4" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Toolbar for the Question */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleToggleReview}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                markedReview[currentQ.id]
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{markedReview[currentQ.id] ? 'Marcada p/ Revisão' : 'Marcar p/ Revisão'}</span>
            </button>

            <button
              onClick={() => onToggleBookmark(currentQ.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{isBookmarked ? 'Salva nos Favoritos' : 'Salvar Questão'}</span>
            </button>

            <button
              onClick={() => setShowVadeMecum(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border bg-slate-800/80 text-slate-300 border-slate-700 hover:text-amber-400 hover:border-amber-500/40 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Artigos Citados ({currentQ.statuteReferences.length})</span>
            </button>

            <button
              onClick={() => setShowTutorModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Tirar Dúvida com Professor</span>
            </button>
          </div>

          {/* If question is answered, show next step button */}
          {isAnswered && (
            <button
              onClick={handleNextQuestion}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-500/20 ml-auto"
            >
              <span>{currentIndex === queue.length - 1 ? 'Finalizar Simulado' : 'Avançar p/ Próxima Questão'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ============================================================== */}
        {/* INTERVENÇÃO DO PROFESSOR JURÍDICO (A CADA RESPOSTA DADA)       */}
        {/* ============================================================== */}
        {currentInstanceAns && (
          <div className="mt-8 pt-6 border-t border-slate-800 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-7 rounded-3xl border shadow-xl relative overflow-hidden ${
              currentInstanceAns.isCorrect
                ? currentItem.isRetry
                  ? 'bg-gradient-to-br from-purple-950/40 to-emerald-950/30 border-purple-500/40'
                  : 'bg-emerald-950/20 border-emerald-500/40'
                : 'bg-rose-950/20 border-rose-500/40'
            }`}>
              {/* Professor Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${
                    currentInstanceAns.isCorrect
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-rose-500 text-white'
                  }`}>
                    {currentInstanceAns.isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                    ) : (
                      <XCircle className="w-6 h-6 stroke-[2.5]" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif font-bold text-lg text-white">
                        {currentInstanceAns.isCorrect
                          ? currentItem.isRetry
                            ? 'CONQUISTA: Questão Oficialmente FIXADA!'
                            : 'Resposta Correta!'
                          : 'Atenção! Você errou a questão.'}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        Aula do Professor
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {currentInstanceAns.isCorrect ? (
                        <>Você marcou e confirmou a <strong className="text-emerald-400">Alternativa {currentQ.correctAnswer}</strong>.</>
                      ) : (
                        <>Você marcou a Alternativa <strong className="text-rose-400">{currentInstanceAns.selectedLetter}</strong>, mas o gabarito oficial é a <strong className="text-emerald-400">Alternativa {currentQ.correctAnswer}</strong>.</>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Brazilian Portuguese Professor Audio Player */}
              <div className="my-4">
                <ProfessorAudioPlayer
                  textToSpeak={
                    currentInstanceAns.isCorrect
                      ? (currentItem.isRetry
                          ? `Excelente! Você acertou a questão no retorno de fixação! O gabarito oficial é a alternativa ${currentQ.correctAnswer}. Fundamentação jurídica: ${currentQ.justification}. Dica do professor: ${currentQ.professorTip || 'Conteúdo fixado com sucesso!'}`
                          : `Parabéns, resposta correta! O gabarito oficial é a alternativa ${currentQ.correctAnswer}. Fundamentação jurídica: ${currentQ.justification}. ${currentQ.professorTip ? 'Dica do professor: ' + currentQ.professorTip : ''}`)
                      : `Atenção, futuro jurista! Você marcou a alternativa ${currentInstanceAns.selectedLetter}, mas o gabarito oficial correto é a alternativa ${currentQ.correctAnswer}. Fundamentação da resposta certa: ${currentQ.justification}. Por que a alternativa ${currentInstanceAns.selectedLetter} que você marcou está errada: ${currentQ.whyWrong.find(w => w.letter === currentInstanceAns.selectedLetter)?.explanation || 'Essa alternativa diverge do texto legal'}. ${currentQ.professorTip ? 'Dica do professor: ' + currentQ.professorTip : ''}. Esta pergunta foi agendada e retornará em breve para você testar a sua fixação!`
                  }
                  title="Ouvir Explicação do Professor (pt-BR)"
                />
              </div>

              {/* Spaced loop reminder banner if wrong */}
              {!currentInstanceAns.isCorrect && (
                <div className="my-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-amber-200 text-xs sm:text-sm">
                  <RefreshCw className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-300 block font-serif">
                      🔁 Agendamento Automático de Fixação:
                    </strong>
                    O Professor programou esta questão para <strong>retornar daqui a {repeatInterval} questões</strong> no seu fluxo de treino. Leia a explicação abaixo com atenção para acertar quando ela reaparecer!
                  </div>
                </div>
              )}

              {/* If retry and correct: Mastery announcement */}
              {currentInstanceAns.isCorrect && currentItem.isRetry && (
                <div className="my-4 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-start gap-3 text-purple-200 text-xs sm:text-sm">
                  <Award className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-purple-300 block font-serif">
                      🎉 Parabéns! Fixação Consolidada:
                    </strong>
                    Você errou na primeira tentativa, compreendeu a fundamentação do professor e agora acertou com firmeza! Este dispositivo legal foi gravado na sua memória de longo prazo.
                  </div>
                </div>
              )}

              {/* Explanatory Content (Módulo 4: Feedback Pedagógico Profundo para ACERTOS e ERROS) */}
              <div className="space-y-4 text-sm text-slate-200 mt-4">
                {/* 1. Raciocínio jurídico e aplicação ao caso concreto */}
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 font-sans leading-relaxed space-y-2.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Fundamentação Jurídica Completa (Gabarito: Alternativa {currentQ.correctAnswer})
                  </h5>
                  <p className="text-slate-200 leading-relaxed font-sans text-sm sm:text-base">
                    {currentQ.justification}
                  </p>
                  {currentQ.statuteReferences.length > 0 && (
                    <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300 space-y-1">
                      <span className="font-semibold text-amber-300 block">Dispositivos Legais Aplicáveis:</span>
                      {currentQ.statuteReferences.map((ref, rIdx) => (
                        <div key={rIdx} className="text-slate-400">
                          <strong className="text-slate-200">{ref.code} · {ref.article}:</strong> {ref.textSnippet}
                        </div>
                      ))}
                    </div>
                  )}
                  {(currentQ.practicalExample || currentQ.examGuidance) && (
                    <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300 space-y-1">
                      {currentQ.practicalExample && (
                        <div>
                          <strong className="text-sky-300">Aplicação Concreta:</strong> {currentQ.practicalExample}
                        </div>
                      )}
                      {currentQ.examGuidance && (
                        <div>
                          <strong className="text-emerald-300">Orientação de Prova (FGV/OAB):</strong> {currentQ.examGuidance}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Análise individual de TODAS as alternativas (A, B, C, D) */}
                <div className="p-4 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-2.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Análise Individual de Todas as Alternativas
                  </h5>
                  <div className="space-y-2">
                    {currentQ.options.map(opt => {
                      const isRight = opt.letter === currentQ.correctAnswer;
                      const isUserWrongChoice = !currentInstanceAns.isCorrect && opt.letter === currentInstanceAns.selectedLetter;
                      const wrongNote = currentQ.whyWrong.find(w => w.letter === opt.letter)?.explanation;

                      return (
                        <div
                          key={opt.letter}
                          className={`p-3 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                            isRight
                              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-100'
                              : isUserWrongChoice
                              ? 'bg-rose-950/30 border-rose-500/40 text-rose-100'
                              : 'bg-slate-900/70 border-slate-800 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2 font-bold mb-1">
                            <span className="font-mono">{opt.letter})</span>
                            {isRight ? (
                              <span className="text-emerald-400 text-xs flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Correta
                              </span>
                            ) : isUserWrongChoice ? (
                              <span className="text-rose-400 text-xs flex items-center gap-1">
                                <XCircle className="w-3.5 h-3.5" /> Sua escolha (Erro conceitual identificado)
                              </span>
                            ) : (
                              <span className="text-slate-400 text-xs">Incorreta</span>
                            )}
                          </div>
                          <p className="text-xs text-slate-300">
                            {isRight
                              ? `Correta conforme o fundamento acima (${currentQ.statuteReferences[0]?.article || currentQ.topic}).`
                              : wrongNote || 'Diverge da regra jurídica aplicável ou traz exceção inexistente na norma vigente.'}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Jurisprudence if available */}
                {currentQ.jurisprudence && (
                  <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    <strong className="text-purple-400 block mb-1 font-serif">
                      Jurisprudência Vinculante (STF / STJ):
                    </strong>
                    {currentQ.jurisprudence}
                  </div>
                )}

                {/* 4. Teacher's Mnemonic Tip */}
                {currentQ.professorTip && (
                  <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-amber-200">
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-300">Dica Mnemônica do Professor:</strong> {currentQ.professorTip}
                    </div>
                  </div>
                )}

                {/* 5. Interactive Clarification with the Professor */}
                <InlineQuestionClarification
                  question={currentQ}
                  selectedLetter={currentInstanceAns?.selectedLetter}
                  onOpenFullChatModal={() => setShowTutorModal(true)}
                />

                {/* Bottom actions: Complementary Reinforcement Question when wrong + Next */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  {!currentInstanceAns.isCorrect && !complementInjectedFor[currentItem.instanceId] && (
                    <button
                      type="button"
                      onClick={handleInsertComplementaryQuestion}
                      className="px-4 py-2.5 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 text-sky-300 font-semibold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Resolver Questão Complementar de Fixação</span>
                    </button>
                  )}

                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-amber-500/20 ml-auto"
                  >
                    <span>Compreendi a Explicação · Próxima Questão</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Vade Mecum Modal */}
      <VadeMecumModal
        references={currentQ.statuteReferences}
        isOpen={showVadeMecum}
        onClose={() => setShowVadeMecum(false)}
      />

      {/* Professor Tutor Modal */}
      <ProfessorTutorModal
        question={currentQ}
        isOpen={showTutorModal}
        onClose={() => setShowTutorModal(false)}
      />
    </div>
  );
};
