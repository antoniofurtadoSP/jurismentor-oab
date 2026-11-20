import React from 'react';
import { 
  BarChart3, Award, TrendingUp, AlertTriangle, CheckCircle2, 
  Clock, ShieldCheck, Target, ArrowUpRight, BookOpen, RotateCcw, Crosshair 
} from 'lucide-react';
import { UserStudyData, SimuladoResult } from '../types';
import { getGlobalPerformanceStats } from '../services/storage';

interface PerformanceDashboardProps {
  studyData: UserStudyData;
  onReviewResult?: (result: SimuladoResult) => void;
  onTrainWeakness: (subject: string) => void;
  onGoToSimulados: () => void;
  onOpenDiagnostic?: () => void;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  studyData,
  onTrainWeakness,
  onGoToSimulados,
  onOpenDiagnostic,
}) => {
  const stats = getGlobalPerformanceStats(studyData);
  const passedOABCutoff = stats.accuracy >= 50;
  const hasHistory = studyData.results.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8 animate-in fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-emerald-400" />
            Análise de Desempenho & Diagnóstico OAB
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Estatísticas detalhadas de retenção, taxa de acertos por matéria e projeção de aprovação
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
          {onOpenDiagnostic && (
            <button
              onClick={onOpenDiagnostic}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-500/40 text-amber-300 font-bold text-xs transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <Crosshair className="w-4 h-4 text-amber-400" />
              Simulado Diagnóstico
            </button>
          )}
          <button
            onClick={onGoToSimulados}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap"
          >
            <BookOpen className="w-4 h-4" />
            Fazer Novo Simulado
          </button>
        </div>
      </div>

      {/* Main OAB Cutoff Radar Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Score & Projection */}
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Target className="w-4 h-4 text-amber-400" />
              <span>Projeção Oficial de 1ª Fase do Exame de Ordem</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              {stats.accuracy}% de Aproveitamento Global
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Para ser aprovado na 1ª Fase da OAB, o candidato precisa acertar no mínimo <strong className="text-amber-400">40 das 80 questões (50%)</strong>. 
              {stats.accuracy >= 50
                ? " Atualmente seu índice coloca você dentro da ZONA DE APROVAÇÃO, acima da linha de corte!"
                : " Você ainda está ligeiramente abaixo da nota de corte. Foco prioritário em Ética e Direito Constitucional para elevar a pontuação!"}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className={`px-4 py-2 rounded-xl text-xs font-bold border flex items-center gap-2 ${
                passedOABCutoff
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
              }`}>
                {passedOABCutoff ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Zona de Aprovação (≥ 50%)</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4" />
                    <span>Zona de Alerta (&lt; 50%)</span>
                  </>
                )}
              </div>

              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">
                {stats.totalCorrect} corretas de {stats.totalQuestionsAnswered} respondidas
              </div>
            </div>
          </div>

          {/* Right: Graphic Bar Visualizer */}
          <div className="w-full lg:w-80 bg-slate-950/70 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Régua do Exame da OAB
            </span>

            <div className="relative h-44 flex items-end justify-center py-2">
              {/* Vertical barometer */}
              <div className="relative w-16 h-36 bg-slate-800 rounded-2xl overflow-hidden flex flex-col justify-end">
                <div
                  className={`w-full transition-all duration-1000 ${
                    passedOABCutoff ? 'bg-gradient-to-t from-amber-500 to-emerald-500' : 'bg-amber-500'
                  }`}
                  style={{ height: `${Math.min(100, Math.max(8, stats.accuracy))}%` }}
                />
                {/* 50% cutoff line */}
                <div 
                  className="absolute left-0 right-0 border-b-2 border-white z-20"
                  style={{ bottom: '50%' }}
                />
              </div>

              {/* Marker labels */}
              <div className="absolute right-2 sm:right-6 text-left text-[11px] font-mono space-y-5">
                <div className="text-slate-500">100% Gabarito</div>
                <div className="text-amber-300 font-bold">▲ 50% Corte OAB</div>
                <div className="text-slate-500">0%</div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              Atualizado automaticamente a cada questão respondida
            </p>
          </div>
        </div>
      </div>

      {/* Key Metric Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="text-xs font-semibold text-slate-400 mb-1">Questões Resolvidas</div>
          <div className="text-2xl font-serif font-black text-white">{stats.totalQuestionsAnswered}</div>
          <div className="text-[11px] text-slate-500 mt-1">Exames anteriores reais</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="text-xs font-semibold text-slate-400 mb-1">Simulados Completos</div>
          <div className="text-2xl font-serif font-black text-white">{stats.simuladosCompleted}</div>
          <div className="text-[11px] text-slate-500 mt-1">Sessões finalizadas</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="text-xs font-semibold text-slate-400 mb-1">Caderno de Erros</div>
          <div className="text-2xl font-serif font-black text-rose-400">{stats.cadernoErrosCount}</div>
          <div className="text-[11px] text-slate-500 mt-1">Aguardando revisão</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="text-xs font-semibold text-slate-400 mb-1">Ponto Mais Forte</div>
          <div className="text-sm font-bold text-emerald-400 truncate mt-1">
            {stats.strongestSubject ? stats.strongestSubject.subject : 'Avaliando...'}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            {stats.strongestSubject ? `${stats.strongestSubject.rate}% de acerto` : 'Faça um simulado'}
          </div>
        </div>
      </div>

      {/* Breakdown by Legal Subject (Matérias) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              Aproveitamento por Disciplina Jurídica
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Desempenho comparativo para direcionamento cirúrgico de estudos
            </p>
          </div>
        </div>

        {stats.rankedSubjects.length === 0 ? (
          <div className="py-12 text-center text-slate-500 text-sm">
            Nenhuma questão resolvida ainda. Conclua seu primeiro simulado para ver o raio-x por matéria.
          </div>
        ) : (
          <div className="space-y-4">
            {stats.rankedSubjects.map((sub) => {
              const isHigh = sub.rate >= 70;
              const isMedium = sub.rate >= 50 && sub.rate < 70;
              const isLow = sub.rate < 50;

              return (
                <div key={sub.subject} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-semibold text-sm text-white">
                      {sub.subject}
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-slate-400 font-mono">
                        {sub.correct}/{sub.total} acertos
                      </span>
                      <span className={`font-bold font-mono px-2 py-0.5 rounded text-xs ${
                        isHigh ? 'bg-emerald-500/20 text-emerald-400' :
                        isMedium ? 'bg-amber-500/20 text-amber-300' :
                        'bg-rose-500/20 text-rose-400'
                      }`}>
                        {sub.rate}%
                      </span>
                      {isLow && (
                        <button
                          onClick={() => onTrainWeakness(sub.subject)}
                          className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 underline cursor-pointer"
                        >
                          Treinar Agora
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isHigh ? 'bg-emerald-500' :
                        isMedium ? 'bg-amber-500' :
                        'bg-rose-500'
                      }`}
                      style={{ width: `${sub.rate}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Historical Attempts List */}
      {hasHistory && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <h3 className="font-serif text-lg font-bold text-white mb-4">
            Histórico Recente de Simulados
          </h3>

          <div className="divide-y divide-slate-800/80">
            {studyData.results.map((res) => (
              <div key={res.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-sm text-white">{res.title}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                    <span>{res.date}</span>
                    <span>·</span>
                    <span>{res.totalQuestions} questões</span>
                    <span>·</span>
                    <span className="font-mono text-slate-500">
                      {Math.floor(res.timeSpentSeconds / 60)}m {res.timeSpentSeconds % 60}s
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-lg text-xs font-bold font-mono ${
                    res.passedOABCutoff
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                  }`}>
                    {res.correctCount}/{res.totalQuestions} ({res.scorePercentage}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
