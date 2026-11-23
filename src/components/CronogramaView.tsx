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
  setActivePlanId,
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
    if (studyData.activePlanId) {
      setSelectedPlanId(studyData.activePlanId);
    }
  }, [studyData.activePlanId]);

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DFD7C8]">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-2.5">
            <Calendar className="w-7 h-7 text-[#1B365D]" />
            Cronogramas Inteligentes de Revisão Espaçada
          </h1>
          <p className="text-sm font-serif italic text-stone-600 mt-1">
            Planejamento estratégico baseado na curva do esquecimento (R24h, R7d e R30d) e peso estatístico do edital
          </p>
        </div>

        {/* Plan Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-[#D6CCB9] rounded-xl overflow-x-auto shadow-xs">
          {STUDY_PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => {
                setSelectedPlanId(plan.id);
                setActivePlanId(plan.id);
                onRefreshData();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedPlanId === plan.id
                  ? 'bg-[#1B365D] text-[#FAF7F2] shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-[#F4EFE6]'
              }`}
            >
              {plan.title.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Plan Header Info & Progress Bar */}
      <div className="bg-white border border-[#DFD7C8] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#7B1E26] mb-1">
              <span>Objetivo: {currentPlan.target}</span>
              <span aria-hidden="true">·</span>
              <span>{currentPlan.totalDays} Dias Programados</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              {currentPlan.title}
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed font-serif">
              {currentPlan.description}
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#DFD7C8] shrink-0 text-center sm:text-left min-w-[230px]">
            <div className="text-xs text-stone-600 font-semibold mb-1">Metas Cumpridas</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-black tabular-nums text-stone-900">{completedCount}</span>
              <span className="text-stone-600 text-sm">/ {currentPlan.days.length} dias</span>
              <span className="text-sm font-bold font-mono tabular-nums text-[#1B365D] ml-auto">{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#E6DFD3] rounded-full h-2 mt-3 overflow-hidden">
              <div
                className="bg-[#1B365D] h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#E6DFD3] flex items-center justify-between text-[11px] text-stone-600">
              <span>Média/dia configurada:</span>
              <span className="font-mono font-semibold text-[#1B365D] tabular-nums">
                {planGoalTotals.avgQuestions}q · {formatDuration(planGoalTotals.avgMinutes)}
              </span>
            </div>
          </div>
        </div>

        {/* Spaced repetition educational banner */}
        <div className="p-4 rounded-xl bg-[#F5F0E6] border border-[#DFD7C8] flex items-start gap-3 text-xs text-stone-700 font-serif">
          <RefreshCw className="w-4 h-4 text-[#1B365D] shrink-0 mt-0.5" />
          <div>
            <strong className="text-stone-900 font-sans">Metodologia de Revisão Espaçada (Curva de Ebbinghaus):</strong> Ao concluir a leitura de lei seca e as questões do dia, faça uma revisão rápida de 10 minutos após 24 horas (R24h), após 7 dias (R7d) e após 30 dias (R30d) para fixar permanentemente na memória de longo prazo.
          </div>
        </div>
      </div>

      {/* Study Goals Configuration Panel */}
      <div className="bg-white border border-[#D6CCB9] rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <Sliders className="w-5 h-5 text-[#1B365D]" />
              <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
                Configuração de Metas Diárias por Disciplina
              </h3>
              {saveFeedback && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg animate-in fade-in">
                  <Check className="w-3 h-3 text-emerald-800" />
                  {saveFeedback}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm font-serif text-stone-600">
              Defina o número de questões diárias e o tempo dedicado para cada disciplina. As metas ajustam automaticamente o seu roteiro e sessões de treino.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsGoalsPanelOpen(prev => !prev)}
            className="px-4 py-2 rounded-xl bg-[#F4EFE6] hover:bg-[#EAE3D5] border border-[#D6CCB9] text-xs font-semibold text-stone-800 flex items-center gap-2 self-start md:self-auto transition-colors cursor-pointer shrink-0 whitespace-nowrap"
          >
            <span>{isGoalsPanelOpen ? 'Recolher Painel' : 'Configurar Metas'}</span>
            {isGoalsPanelOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Summary KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DFD7C8] flex items-center justify-between">
            <div>
              <div className="text-[11px] text-stone-600">Média por Dia no Plano</div>
              <div className="text-base font-display font-bold text-stone-900 mt-0.5 tabular-nums">
                {planGoalTotals.avgQuestions} questões / dia
              </div>
            </div>
            <Target className="w-5 h-5 text-[#7B1E26] shrink-0" />
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DFD7C8] flex items-center justify-between">
            <div>
              <div className="text-[11px] text-stone-600">Tempo Médio Dedicado</div>
              <div className="text-base font-display font-bold text-stone-900 mt-0.5 tabular-nums">
                {formatDuration(planGoalTotals.avgMinutes)} / dia
              </div>
            </div>
            <Clock className="w-5 h-5 text-[#1B365D] shrink-0" />
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DFD7C8] flex items-center justify-between">
            <div>
              <div className="text-[11px] text-stone-600">Carga Total das Matérias do Plano</div>
              <div className="text-base font-display font-bold text-stone-900 mt-0.5 tabular-nums">
                {planGoalTotals.totalQuestions}q · {formatDuration(planGoalTotals.totalMinutes)}
              </div>
            </div>
            <BookOpen className="w-5 h-5 text-emerald-800 shrink-0" />
          </div>
        </div>

        {isGoalsPanelOpen && (
          <div className="space-y-4 pt-3 border-t border-[#E6DFD3] animate-in fade-in">
            {/* Scope & Quick Presets Toolbar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              {/* Scope & Search */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center bg-[#F3EFE6] border border-[#D6CCB9] rounded-xl p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setGoalsScope('plan')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      goalsScope === 'plan'
                        ? 'bg-[#1B365D] text-[#FAF7F2]'
                        : 'text-stone-700 hover:text-stone-950'
                    }`}
                  >
                    Matérias do Plano ({planSubjects.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoalsScope('all')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      goalsScope === 'all'
                        ? 'bg-[#1B365D] text-[#FAF7F2]'
                        : 'text-stone-700 hover:text-stone-950'
                    }`}
                  >
                    Todas as Disciplinas ({mergedAllSubjects.length})
                  </button>
                </div>

                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={subjectSearch}
                    onChange={(e) => setSubjectSearch(e.target.value)}
                    placeholder="Filtrar disciplina..."
                    className="w-full bg-[#FAF7F2] border border-[#D6CCB9] rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-900 placeholder-stone-500 focus:outline-none focus:border-[#1B365D]"
                  />
                </div>
              </div>

              {/* Presets */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-stone-600 mr-0.5">Perfis rápidos:</span>
                <button
                  type="button"
                  onClick={() => handleApplyPreset('leve')}
                  className="px-2.5 py-1.5 rounded-lg bg-[#F4EFE6] hover:bg-[#EAE3D5] text-stone-800 text-xs font-medium border border-[#D6CCB9] transition-colors cursor-pointer"
                >
                  Rotina Leve (10q · 30m)
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset('intensivo')}
                  className="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-950 text-xs font-semibold border border-amber-300 transition-colors cursor-pointer"
                >
                  Intensivo (+50%)
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset('padrao')}
                  className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#F4EFE6] text-stone-700 text-xs font-medium border border-[#D6CCB9] flex items-center gap-1 transition-colors cursor-pointer"
                  title="Restaurar todas as disciplinas para as metas recomendadas da OAB"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restaurar Padrão</span>
                </button>
              </div>
            </div>

            {/* Discipline Rows */}
            {visibleSubjects.length === 0 ? (
              <div className="p-6 text-center text-xs text-stone-600 bg-[#FAF7F2] rounded-xl border border-[#DFD7C8]">
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
                      className={`p-4 rounded-xl border transition-colors space-y-3 ${
                        isCustom
                          ? 'bg-[#FDFBF6] border-[#C59B3E]'
                          : 'bg-[#FAF7F2] border-[#DFD7C8]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-semibold text-sm text-stone-900 truncate">
                              {subject}
                            </h4>
                            {isCustom && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-50 text-amber-950 border border-amber-300">
                                Personalizada
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-stone-600 mt-0.5">
                            {availableCount > 0 ? `${availableCount} questões no banco` : 'Disciplina do roteiro'}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {isCustom && (
                            <button
                              type="button"
                              onClick={() => handleResetSingleSubject(subject)}
                              className="p-1.5 rounded-lg bg-white hover:bg-[#EAE3D5] text-stone-600 hover:text-[#7B1E26] border border-[#D6CCB9] transition-colors cursor-pointer"
                              title={`Restaurar padrão (${def.dailyQuestions}q · ${def.dailyMinutes}min)`}
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => onStartDayPractice(subject, 1)}
                            className="px-2.5 py-1.5 rounded-lg bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] text-[11px] font-semibold transition-colors cursor-pointer whitespace-nowrap"
                          >
                            Treinar {goal.dailyQuestions}q
                          </button>
                        </div>
                      </div>

                      {/* Two Stepper Inputs: Daily Questions & Dedicated Time */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {/* Daily Questions */}
                        <div className="p-2.5 rounded-lg bg-white border border-[#DFD7C8] space-y-1.5">
                          <label className="text-[11px] text-stone-600 font-medium flex items-center gap-1">
                            <Target className="w-3 h-3 text-[#7B1E26]" />
                            Questões/dia
                          </label>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateGoal(subject, { dailyQuestions: goal.dailyQuestions - 1 })
                              }
                              className="w-7 h-7 rounded-md bg-[#F4EFE6] hover:bg-[#EAE3D5] border border-[#D6CCB9] text-stone-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
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
                              className="w-full bg-[#FAF7F2] border border-[#D6CCB9] rounded-md py-1 text-center font-mono tabular-nums text-xs font-bold text-stone-900 focus:outline-none focus:border-[#1B365D]"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateGoal(subject, { dailyQuestions: goal.dailyQuestions + 1 })
                              }
                              className="w-7 h-7 rounded-md bg-[#F4EFE6] hover:bg-[#EAE3D5] border border-[#D6CCB9] text-stone-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                              aria-label={`Aumentar questões diárias de ${subject}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Daily Minutes */}
                        <div className="p-2.5 rounded-lg bg-white border border-[#DFD7C8] space-y-1.5">
                          <label className="text-[11px] text-stone-600 font-medium flex items-center justify-between gap-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#1B365D]" />
                              Tempo (min)
                            </span>
                            <span className="font-mono tabular-nums text-[10px] font-semibold text-[#1B365D]">
                              {formatDuration(goal.dailyMinutes)}
                            </span>
                          </label>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateGoal(subject, { dailyMinutes: goal.dailyMinutes - 5 })
                              }
                              className="w-7 h-7 rounded-md bg-[#F4EFE6] hover:bg-[#EAE3D5] border border-[#D6CCB9] text-stone-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
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
                              className="w-full bg-[#FAF7F2] border border-[#D6CCB9] rounded-md py-1 text-center font-mono tabular-nums text-xs font-bold text-stone-900 focus:outline-none focus:border-[#1B365D]"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateGoal(subject, { dailyMinutes: goal.dailyMinutes + 5 })
                              }
                              className="w-7 h-7 rounded-md bg-[#F4EFE6] hover:bg-[#EAE3D5] border border-[#D6CCB9] text-stone-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
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
        <h3 className="font-display text-lg font-bold text-stone-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-[#7B1E26]" />
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
                className={`p-5 rounded-xl border transition-all shadow-xs ${
                  isCompleted
                    ? 'bg-emerald-50/60 border-emerald-200'
                    : 'bg-white border-[#DFD7C8] hover:border-[#C7BBA6]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    {/* Checkbox circle */}
                    <button
                      onClick={() => handleToggleDay(day.dayNumber)}
                      className="mt-1 text-stone-400 hover:text-emerald-800 transition-colors cursor-pointer shrink-0"
                      title={isCompleted ? 'Marcar como não concluído' : 'Marcar meta do dia como concluída'}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-emerald-800 fill-emerald-100" />
                      ) : (
                        <Circle className="w-6 h-6 text-stone-400 hover:text-stone-600" />
                      )}
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 mb-1">
                        <span className="font-mono font-bold text-[#7B1E26]">
                          DIA {day.dayNumber.toString().padStart(2, '0')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="text-stone-900 font-semibold">{day.subject}</span>
                        <span aria-hidden="true">·</span>
                        <span className={`text-[11px] font-semibold ${
                          day.weightInExam === 'Muito Alto' ? 'text-[#8A6518]' : 'text-stone-600'
                        }`}>
                          Peso no Edital: {day.weightInExam}
                        </span>
                      </div>

                      <h4 className={`font-display text-base font-bold text-stone-900 mb-2 ${
                        isCompleted ? 'line-through text-stone-500' : ''
                      }`}>
                        {day.title}
                      </h4>

                      <div className="space-y-1.5 text-xs text-stone-700 font-serif">
                        <div>
                          <strong className="font-sans text-stone-800">Conteúdo Teórico:</strong> {day.subtopic}
                        </div>
                        <div className="text-[#1B365D] font-medium">
                          📖 <strong className="font-sans text-[#7B1E26]">Leitura de Lei Seca:</strong> {day.readingFocus}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Practice button & Dynamic Goals */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E6DFD3]">
                    <div className="flex flex-col sm:items-end gap-0.5 text-xs font-mono tabular-nums">
                      <span className="text-stone-700">
                        Meta: <strong className={customGoal ? 'text-[#7B1E26]' : 'text-stone-900'}>{effectiveQuestions} questões</strong>
                      </span>
                      <span className="text-[11px] text-[#1B365D] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDuration(effectiveMinutes)} dedicados
                      </span>
                    </div>
                    <button
                      onClick={() => onStartDayPractice(day.subject, day.dayNumber)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#E6C574]" />
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
