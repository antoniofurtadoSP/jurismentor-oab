import React, { useState } from 'react';
import { 
  Calendar, CheckCircle, Circle, BookOpen, Clock, Target, 
  Sparkles, Layers, ArrowRight, Award, RefreshCw, BookmarkCheck
} from 'lucide-react';
import { StudyPlan, ScheduleDay, UserStudyData } from '../types';
import { STUDY_PLANS } from '../data/schedules';
import { toggleScheduleDayCompletion } from '../services/storage';

interface CronogramaViewProps {
  studyData: UserStudyData;
  onRefreshData: () => void;
  onStartDayPractice: (subject: string, dayNumber: number) => void;
}

export const CronogramaView: React.FC<CronogramaViewProps> = ({
  studyData,
  onRefreshData,
  onStartDayPractice,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(studyData.activePlanId || 'oab_30_dias');
  const currentPlan = STUDY_PLANS.find(p => p.id === selectedPlanId) || STUDY_PLANS[0];

  const handleToggleDay = (dayNum: number) => {
    toggleScheduleDayCompletion(currentPlan.id, dayNum);
    onRefreshData();
  };

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

          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 shrink-0 text-center sm:text-left min-w-[220px]">
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

      {/* Daily Roadmap Timeline */}
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-400" />
          Roteiro Diário de Estudos & Metas
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {currentPlan.days.map((day) => {
            const isCompleted = Boolean(studyData.completedScheduleDays[`${currentPlan.id}_day_${day.dayNumber}`]);

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

                  {/* Practice button */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                    <span className="text-xs text-slate-400 font-mono">
                      Meta: <strong>{day.targetQuestions} questões</strong>
                    </span>
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
