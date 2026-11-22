import React, { useState, useMemo, useEffect } from 'react';
import {
  Calendar, CheckCircle, Circle, BookOpen, Clock, Target,
  RefreshCw, Sliders, RotateCcw, Plus, Minus, Search,
  ChevronDown, ChevronUp, Check
} from 'lucide-react';
import { SubjectStudyGoal, UserStudyData } from '../types';
import { STUDY_PLANS } from '../data/schedules';
import {
  toggleScheduleDayCompletion,
  getDefaultGoalForSubject,
  getEffectiveSubjectGoal,
  saveSubjectGoal,
  saveAllSubjectGoals,
  resetSubjectGoals,
} from '../services/storage';
import {
  getAllAvailableSubjects,
  getSubjectQuestionCounts,
  subscribeToQuestions,
} from '../services/questionsService';

interface CronogramaViewProps {
  studyData: UserStudyData;
  onRefreshData: () => void;
  onStartDayPractice: (subject: string, dayNumber: number) => void;
}

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hrs = Math.floor(minutes / 60);
  const rem = minutes % 60;
  return rem === 0 ? `${hrs}h` : `${hrs}h ${rem}min`;
}

export const CronogramaView: React.FC<CronogramaViewProps> = ({
  studyData,
  onRefreshData,
  onStartDayPractice,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(studyData.activePlanId || 'oab_30_dias');
  const currentPlan = STUDY_PLANS.find(p => p.id === selectedPlanId) || STUDY_PLANS[0];

  const [allSubjects, setAllSubjects] = useState<string[]>(() => getAllAvailableSubjects());
  const [subjectCounts, setSubjectCounts] = useState<Record<string, number>>(() => getSubjectQuestionCounts());

  const [isGoalsPanelOpen, setIsGoalsPanelOpen] = useState(true);
  const [goalsScope, setGoalsScope] = useState<'plan' | 'all'>('plan');
  const [subjectSearch, setSubjectSearch] = useState('');
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);

  useEffect(() => {
    const unsub = subscribeToQuestions(() => {
      setAllSubjects(getAllAvailableSubjects());
      setSubjectCounts(getSubjectQuestionCounts());
    });
    return unsub;
  }, []);

  const showSavedFeedback = (msg = 'Metas salvas automaticamente') => {
    setSaveFeedback(msg);
    setTimeout(() => {
      setSaveFeedback(prev => (prev === msg ? null : prev));
    }, 2200);
  };

  const planSubjects = useMemo(() => {
    const set = new Set<string>();
    currentPlan.days.forEach(d => {
      if (d.subject && d.subject.toLowerCase() !== 'geral') {
        set.add(d.subject);
      }
    });
    return Array.from(set);
  }, [currentPlan]);

  const mergedAllSubjects = useMemo(() => {
    const set = new Set<string>([...planSubjects, ...allSubjects]);
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }, [planSubjects, allSubjects]);

  const visibleSubjects = useMemo(() => {
    const base = goalsScope === 'plan' ? planSubjects : mergedAllSubjects;
    const query = subjectSearch.trim().toLowerCase();
    if (!query) return base;
    return base.filter(s => s.toLowerCase().includes(query));
  }, [goalsScope, planSubjects, mergedAllSubjects, subjectSearch]);

  const handleToggleDay = (dayNum: number) => {
    toggleScheduleDayCompletion(currentPlan.id, dayNum);
    onRefreshData();
  };

  const handleUpdateGoal = (subject: string, patch: Partial<SubjectStudyGoal>) => {
    const current = getEffectiveSubjectGoal(studyData, subject);
    const next: SubjectStudyGoal = {
      dailyQuestions: Math.max(1, Math.min(100, patch.dailyQuestions ?? current.dailyQuestions)),
      dailyMinutes: Math.max(5, Math.min(360, patch.dailyMinutes ?? current.dailyMinutes)),
    };
    saveSubjectGoal(subject, next);
    onRefreshData();
    showSavedFeedback(`Meta de ${subject} atualizada`);
  };

  const handleApplyPreset = (preset: 'padrao' | 'intensivo' | 'leve') => {
    if (preset === 'padrao') {
      resetSubjectGoals();
      onRefreshData();
      showSavedFeedback('Padrão OAB equilibrado aplicado');
      return;
    }

    const nextGoals: Record<string, SubjectStudyGoal> = {};
    mergedAllSubjects.forEach(subject => {
      const base = getDefaultGoalForSubject(subject);
      if (preset === 'intensivo') {
        nextGoals[subject] = {
          dailyQuestions: Math.min(100, Math.round(base.dailyQuestions * 1.5)),
          dailyMinutes: Math.min(360, Math.round(base.dailyMinutes * 1.5)),
        };
      } else {
        nextGoals[subject] = {
          dailyQuestions: 10,
          dailyMinutes: 30,
        };
      }
    });
    saveAllSubjectGoals(nextGoals);
    onRefreshData();
    showSavedFeedback(
      preset === 'intensivo'
        ? 'Metas ajustadas para modo intensivo (+50%)'
        : 'Metas ajustadas para rotina leve (10q / 30min)'
    );
  };

  const handleResetSingleSubject = (subject: string) => {
    const def = getDefaultGoalForSubject(subject);
    saveSubjectGoal(subject, def);
    onRefreshData();
    showSavedFeedback(`Meta padrão restaurada em ${subject}`);
  };

  // Summary metrics across the active plan's subjects
  const planGoalTotals = useMemo(() => {
    const list = planSubjects.length > 0 ? planSubjects : mergedAllSubjects;
    let totalQuestions = 0;
    let totalMinutes = 0;
    list.forEach(sub => {
      const g = getEffectiveSubjectGoal(studyData, sub);
      totalQuestions += g.dailyQuestions;
      totalMinutes += g.dailyMinutes;
    });
    const avgQuestions = list.length > 0 ? Math.round(totalQuestions / list.length) : 0;
    const avgMinutes = list.length > 0 ? Math.round(totalMinutes / list.length) : 0;
    const customizedCount = Object.keys(studyData.subjectGoals || {}).length;
    return {
      totalQuestions,
      totalMinutes,
      avgQuestions,
      avgMinutes,
      customizedCount,
    };
  }, [planSubjects, mergedAllSubjects, studyData]);

  // Calculate completed count
  const completedCount = currentPlan.days.filter(d =>
    Boolean(studyData.completedScheduleDays[`${currentPlan.id}_day_${d.dayNumber}`])
  ).length;

  const progressPercent = currentPlan.days.length > 0
    ? Math.round((completedCount / currentPlan.days.length) * 100)
    : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8 animate-in fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center gap-2.5">
            <Calendar className="w-7 h-7 text-sky-400" />
            Cronogramas Inteligentes de Revisão Espaçada
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Planejamento estratégico baseado na curva do esquecimento (R24h, R7d e R30d) e peso estatístico do edital
          </p>
        </div>

        {/* Plan Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
          {STUDY_PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedPlanId === plan.id
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {plan.title.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Plan Header Info & Progress Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <span>Objetivo: {currentPlan.target}</span>
              <span aria-hidden="true">·</span>
              <span>{currentPlan.totalDays} Dias Programados</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              {currentPlan.title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {currentPlan.description}
            </p>
          </div>

          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 shrink-0 text-center sm:text-left min-w-[230px]">
            <div className="text-xs text-slate-400 font-semibold mb-1">Metas Cumpridas</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif font-black text-white">{completedCount}</span>
              <span className="text-slate-500 text-sm">/ {currentPlan.days.length} dias</span>
              <span className="text-sm font-bold text-sky-400 ml-auto">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 mt-3 overflow-hidden">
              <div
                className="bg-sky-400 h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>Média/dia configurada:</span>
              <span className="font-mono font-semibold text-amber-300">
                {planGoalTotals.avgQuestions}q · {formatDuration(planGoalTotals.avgMinutes)}
              </span>
            </div>
          </div>
        </div>

        {/* Spaced repetition educational banner */}
        <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-300">
          <RefreshCw className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Metodologia de Revisão Espaçada (Curva de Ebbinghaus):</strong> Ao concluir a leitura de lei seca e as questões do dia, faça uma revisão rápida de 10 minutos após 24 horas (R24h), após 7 dias (R7d) e após 30 dias (R30d) para fixar permanentemente na memória de longo prazo.
          </div>
        </div>
      </div>

      {/* Study Goals Configuration Panel */}
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <Sliders className="w-5 h-5 text-amber-400" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Configuração de Metas Diárias por Disciplina
              </h3>
              {saveFeedback && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-lg animate-in fade-in">
                  <Check className="w-3 h-3" />
                  {saveFeedback}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Defina o número de questões diárias e o tempo dedicado para cada disciplina. As metas ajustam automaticamente o seu roteiro e sessões de treino.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsGoalsPanelOpen(prev => !prev)}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2 self-start md:self-auto transition-colors cursor-pointer shrink-0 whitespace-nowrap"
          >
            <span>{isGoalsPanelOpen ? 'Recolher Painel' : 'Configurar Metas'}</span>
            {isGoalsPanelOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Summary KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">Média por Dia no Plano</div>
              <div className="text-base font-serif font-bold text-white mt-0.5">
                {planGoalTotals.avgQuestions} questões / dia
              </div>
            </div>
            <Target className="w-5 h-5 text-amber-400 shrink-0" />
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">Tempo Médio Dedicado</div>
              <div className="text-base font-serif font-bold text-white mt-0.5">
                {formatDuration(planGoalTotals.avgMinutes)} / dia
              </div>
            </div>
            <Clock className="w-5 h-5 text-sky-400 shrink-0" />
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">Carga Total das Matérias do Plano</div>
              <div className="text-base font-serif font-bold text-white mt-0.5">
                {planGoalTotals.totalQuestions}q · {formatDuration(planGoalTotals.totalMinutes)}
              </div>
            </div>
            <BookOpen className="w-5 h-5 text-emerald-400 shrink-0" />
          </div>
        </div>

        {isGoalsPanelOpen && (
          <div className="space-y-4 pt-2 border-t border-slate-800/80 animate-in fade-in">
            {/* Scope & Quick Presets Toolbar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              {/* Scope & Search */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setGoalsScope('plan')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      goalsScope === 'plan'
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Matérias do Plano ({planSubjects.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoalsScope('all')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      goalsScope === 'all'
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Todas as Disciplinas ({mergedAllSubjects.length})
                  </button>
                </div>

                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={subjectSearch}
                    onChange={(e) => setSubjectSearch(e.target.value)}
                    placeholder="Filtrar disciplina..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/70"
                  />
                </div>
              </div>

              {/* Presets */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-400 mr-0.5">Perfis rápidos:</span>
                <button
                  type="button"
                  onClick={() => handleApplyPreset('leve')}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
                >
                  Rotina Leve (10q · 30m)
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset('intensivo')}
                  className="px-2.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 text-xs font-semibold border border-amber-500/30 transition-colors cursor-pointer"
                >
                  Intensivo (+50%)
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset('padrao')}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
                  title="Restaurar todas as disciplinas para as metas recomendadas da OAB"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restaurar Padrão</span>
                </button>
              </div>
            </div>

            {/* Discipline Rows */}
            {visibleSubjects.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-400 bg-slate-950/60 rounded-2xl border border-slate-800">
                Nenhuma disciplina encontrada para "{subjectSearch}".
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
                {visibleSubjects.map((subject) => {
                  const goal = getEffectiveSubjectGoal(studyData, subject);
                  const def = getDefaultGoalForSubject(subject);
                  const isCustom =
                    goal.dailyQuestions !== def.dailyQuestions || goal.dailyMinutes !== def.dailyMinutes;
                  const availableCount = subjectCounts[subject] || 0;

                  return (
                    <div
                      key={subject}
                      className={`p-4 rounded-2xl border transition-colors space-y-3 ${
                        isCustom
                          ? 'bg-slate-950/90 border-amber-500/35'
                          : 'bg-slate-950/60 border-slate-800'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-semibold text-sm text-white truncate">
                              {subject}
                            </h4>
                            {isCustom && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                                Personalizada
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {availableCount > 0 ? `${availableCount} questões no banco` : 'Disciplina do roteiro'}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {isCustom && (
                            <button
                              type="button"
                              onClick={() => handleResetSingleSubject(subject)}
                              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-300 border border-slate-800 transition-colors cursor-pointer"
                              title={`Restaurar padrão (${def.dailyQuestions}q · ${def.dailyMinutes}min)`}
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => onStartDayPractice(subject, 1)}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-[11px] font-semibold border border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
                          >
                            Treinar {goal.dailyQuestions}q
                          </button>
                        </div>
                      </div>

                      {/* Two Stepper Inputs: Daily Questions & Dedicated Time */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {/* Daily Questions */}
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                          <label className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                            <Target className="w-3 h-3 text-amber-400" />
                            Questões/dia
                          </label>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateGoal(subject, { dailyQuestions: goal.dailyQuestions - 1 })
                              }
                              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                              aria-label={`Diminuir questões diárias de ${subject}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <input
                              type="number"
                              min={1}
                              max={100}
                              value={goal.dailyQuestions}
                              onChange={(e) => {
                                const val = parseInt(e.target.value, 10);
                                if (!Number.isNaN(val)) {
                                  handleUpdateGoal(subject, { dailyQuestions: val });
                                }
                              }}
                              aria-label={`Questões diárias para ${subject}`}
                              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-1 text-center font-mono text-xs font-bold text-white focus:outline-none focus:border-amber-500/70"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateGoal(subject, { dailyQuestions: goal.dailyQuestions + 1 })
                              }
                              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                              aria-label={`Aumentar questões diárias de ${subject}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Daily Minutes */}
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                          <label className="text-[11px] text-slate-400 font-medium flex items-center justify-between gap-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-sky-400" />
                              Tempo (min)
                            </span>
                            <span className="font-mono text-[10px] text-sky-300">
                              {formatDuration(goal.dailyMinutes)}
                            </span>
                          </label>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateGoal(subject, { dailyMinutes: goal.dailyMinutes - 5 })
                              }
                              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                              aria-label={`Diminuir tempo dedicado de ${subject}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <input
                              type="number"
                              min={5}
                              max={360}
                              step={5}
                              value={goal.dailyMinutes}
                              onChange={(e) => {
                                const val = parseInt(e.target.value, 10);
                                if (!Number.isNaN(val)) {
                                  handleUpdateGoal(subject, { dailyMinutes: val });
                                }
                              }}
                              aria-label={`Tempo dedicado em minutos para ${subject}`}
                              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-1 text-center font-mono text-xs font-bold text-white focus:outline-none focus:border-sky-500/70"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateGoal(subject, { dailyMinutes: goal.dailyMinutes + 5 })
                              }
                              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                              aria-label={`Aumentar tempo dedicado de ${subject}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Daily Roadmap Timeline */}
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-400" />
          Roteiro Diário de Estudos & Metas
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {currentPlan.days.map((day) => {
            const isCompleted = Boolean(studyData.completedScheduleDays[`${currentPlan.id}_day_${day.dayNumber}`]);
            const isGeneralDay = day.subject.toLowerCase() === 'geral';
            const customGoal = !isGeneralDay ? studyData.subjectGoals?.[day.subject] : undefined;
            const effectiveQuestions = customGoal ? customGoal.dailyQuestions : day.targetQuestions;
            const effectiveMinutes = customGoal
              ? customGoal.dailyMinutes
              : isGeneralDay
              ? day.targetQuestions >= 80
                ? 300
                : 120
              : getDefaultGoalForSubject(day.subject).dailyMinutes;

            return (
              <div
                key={day.dayNumber}
                className={`p-5 rounded-2xl border transition-all ${
                  isCompleted
                    ? 'bg-slate-900/40 border-emerald-500/30'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    {/* Checkbox circle */}
                    <button
                      onClick={() => handleToggleDay(day.dayNumber)}
                      className="mt-1 text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer shrink-0"
                      title={isCompleted ? 'Marcar como não concluído' : 'Marcar meta do dia como concluída'}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-emerald-400 fill-emerald-500/20" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-600 hover:text-slate-400" />
                      )}
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-1">
                        <span className="font-mono font-bold text-amber-400">
                          DIA {day.dayNumber.toString().padStart(2, '0')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="text-slate-200 font-semibold">{day.subject}</span>
                        <span aria-hidden="true">·</span>
                        <span className={`text-[11px] font-semibold ${
                          day.weightInExam === 'Muito Alto' ? 'text-amber-400' : 'text-slate-400'
                        }`}>
                          Peso no Edital: {day.weightInExam}
                        </span>
                      </div>

                      <h4 className={`font-serif text-base font-bold text-white mb-2 ${
                        isCompleted ? 'line-through text-slate-400' : ''
                      }`}>
                        {day.title}
                      </h4>

                      <div className="space-y-1.5 text-xs text-slate-300">
                        <div>
                          <strong className="text-slate-400">Conteúdo Teórico:</strong> {day.subtopic}
                        </div>
                        <div className="text-amber-300/90 font-medium">
                          📖 <strong className="text-amber-400">Leitura de Lei Seca:</strong> {day.readingFocus}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Practice button & Dynamic Goals */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                    <div className="flex flex-col sm:items-end gap-0.5 text-xs font-mono">
                      <span className="text-slate-300">
                        Meta: <strong className={customGoal ? 'text-amber-300' : 'text-white'}>{effectiveQuestions} questões</strong>
                      </span>
                      <span className="text-[11px] text-sky-300/90 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDuration(effectiveMinutes)} dedicados
                      </span>
                    </div>
                    <button
                      onClick={() => onStartDayPractice(day.subject, day.dayNumber)}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700 hover:border-amber-500/40"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Treinar Matéria</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
