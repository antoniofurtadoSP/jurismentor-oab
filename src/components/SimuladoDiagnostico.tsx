import React, { useState, useMemo, useEffect } from 'react';
import {
  Crosshair,
  AlertTriangle,
  CheckCircle2,
  Target,
  Play,
  RefreshCw,
  BookOpen,
  SlidersHorizontal,
  Clock,
  Sparkles,
  TrendingDown,
  HelpCircle,
  Check,
  ShieldAlert,
} from 'lucide-react';
import { LegalQuestion, SimuladoConfig, UserStudyData } from '../types';
import { getAllQuestions } from '../services/questionsService';
import {
  analyzeStudyData,
  generateDiagnosticPlan,
  DiagnosticStrategy,
  SubjectDiagnostic,
} from '../services/diagnostic';

interface SimuladoDiagnosticoProps {
  studyData: UserStudyData;
  onStartDiagnosticSimulado: (config: SimuladoConfig, questions: LegalQuestion[]) => void;
  onGoToStandardSimulados: () => void;
}

const QUESTION_COUNT_OPTIONS = [10, 15, 20, 30] as const;

const STRATEGY_META: Record<
  DiagnosticStrategy,
  {
    label: string;
    shortTitle: string;
    description: string;
  }
> = {
  CIRURGICO: {
    label: 'Foco Cirúrgico',
    shortTitle: 'Erros + Pontos Fracos',
    description:
      'Prioriza pendências do Caderno de Erros e concentra questões nas disciplinas com menor aproveitamento.',
  },
  REFORCO_INEDITO: {
    label: 'Reforço Inédito',
    shortTitle: 'Novas nos Temas Fracos',
    description:
      'Seleciona questões ainda não respondidas dentro das disciplinas e tópicos em que você mais errou.',
  },
  BLITZ_OAB: {
    label: 'Blitz OAB 40+',
    shortTitle: 'Peso FGV + Fraquezas',
    description:
      'Cruza suas lacunas de desempenho com as matérias de maior peso na 1ª Fase para maximizar pontos na nota de corte.',
  },
  NIVELAMENTO: {
    label: 'Nivelamento',
    shortTitle: 'Mapeamento Geral',
    description:
      'Distribuição estratificada proporcional ao edital da FGV para calibrar métricas em todas as disciplinas.',
  },
};

export const SimuladoDiagnostico: React.FC<SimuladoDiagnosticoProps> = ({
  studyData,
  onStartDiagnosticSimulado,
  onGoToStandardSimulados,
}) => {
  const allQuestions = useMemo(() => getAllQuestions(), []);
  const summary = useMemo(
    () => analyzeStudyData(studyData, allQuestions),
    [studyData, allQuestions]
  );

  const [strategy, setStrategy] = useState<DiagnosticStrategy>(() =>
    summary.hasMetrics ? 'CIRURGICO' : 'NIVELAMENTO'
  );
  const [questionCount, setQuestionCount] = useState<number>(15);
  const [mode, setMode] = useState<'TREINO' | 'PROVA'>('TREINO');
  const [pinnedSubjects, setPinnedSubjects] = useState<string[]>([]);
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);

  // Sincroniza estratégia padrão se o usuário passar de sem métricas para com métricas
  useEffect(() => {
    if (!summary.hasMetrics && strategy !== 'NIVELAMENTO') {
      setStrategy('NIVELAMENTO');
    } else if (summary.hasMetrics && strategy === 'NIVELAMENTO' && studyData.results.length > 0) {
      // mantém escolha manual caso o usuário tenha selecionado
    }
  }, [summary.hasMetrics]);

  const diagnosticPlan = useMemo(() => {
    // shuffleSeed força reavaliação intencional quando o usuário clica em "Reembaralhar"
    void shuffleSeed;
    return generateDiagnosticPlan(
      studyData,
      {
        strategy,
        questionCount,
        selectedSubjects: pinnedSubjects.length > 0 ? pinnedSubjects : undefined,
        mode,
        timeLimitMinutes: mode === 'PROVA' ? questionCount * 3 : null,
      },
      allQuestions
    );
  }, [studyData, strategy, questionCount, pinnedSubjects, mode, shuffleSeed, allQuestions]);

  const togglePinnedSubject = (subject: string) => {
    setPinnedSubjects(prev =>
      prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
    );
  };

  const selectAllWeakSubjects = () => {
    const weakNames = summary.weakestSubjects.map(s => s.subject);
    setPinnedSubjects(weakNames);
  };

  const renderStatusBadge = (diag: SubjectDiagnostic) => {
    switch (diag.status) {
      case 'CRITICO':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>Crítico</span>
          </span>
        );
      case 'ATENCAO':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
            <Target className="w-3.5 h-3.5 shrink-0" />
            <span>Atenção</span>
          </span>
        );
      case 'ESTAVEL':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Estável</span>
          </span>
        );
      case 'SEM_DADOS':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <HelpCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Sem dados</span>
          </span>
        );
    }
  };

  const criticalCount = summary.subjectDiagnostics.filter(s => s.status === 'CRITICO').length;
  const attentionCount = summary.subjectDiagnostics.filter(s => s.status === 'ATENCAO').length;
  const globalErrorRate = summary.hasMetrics ? 100 - summary.overallAccuracy : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-in fade-in">
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
            <Crosshair className="w-4 h-4" />
            <span>Revisão Adaptativa · 1ª Fase OAB (FGV)</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Simulado Diagnóstico de Pontos Fracos
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Gera automaticamente uma prova direcionada a partir das métricas de erro acumuladas nos seus simulados e no Caderno de Erros, priorizando lacunas com maior impacto na nota de corte.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onGoToStandardSimulados}
            className="px-4 py-2 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Simulados Padrão
          </button>
          <button
            type="button"
            onClick={() => onStartDiagnosticSimulado(diagnosticPlan.config, diagnosticPlan.questions)}
            disabled={diagnosticPlan.questions.length === 0}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap shadow-lg shadow-amber-500/15 disabled:opacity-50"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Iniciar Diagnóstico ({diagnosticPlan.questions.length} Qs)</span>
          </button>
        </div>
      </div>

      {/* Faixa de KPIs Consolidados (studyData) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-slate-900 border border-slate-800 rounded-2xl divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        <div className="p-5 space-y-1">
          <div className="text-xs text-slate-400 font-medium">Projeção Atual na OAB</div>
          <div className="flex items-baseline gap-2 font-mono tabular-nums">
            <span
              className={`text-2xl sm:text-3xl font-bold ${
                !summary.hasMetrics
                  ? 'text-slate-300'
                  : summary.estimatedOabScore >= 40
                    ? 'text-emerald-400'
                    : 'text-rose-400'
              }`}
            >
              {summary.hasMetrics ? `${summary.estimatedOabScore}/80` : '--/80'}
            </span>
            <span className="text-xs text-slate-500">meta ≥ 40 pts</span>
          </div>
          <div className="text-xs text-slate-500">
            {summary.hasMetrics
              ? summary.estimatedOabScore >= 40
                ? 'Acima da linha de corte FGV'
                : `Faltam ${40 - summary.estimatedOabScore} pts para o corte`
              : 'Realize o nivelamento inicial'}
          </div>
        </div>

        <div className="p-5 space-y-1">
          <div className="text-xs text-slate-400 font-medium">Taxa Global de Erro</div>
          <div className="flex items-baseline gap-2 font-mono tabular-nums">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              {summary.hasMetrics ? `${globalErrorRate}%` : '0%'}
            </span>
            <span className="text-xs text-slate-500">
              {summary.totalErrors} de {summary.totalAnswered} q.
            </span>
          </div>
          <div className="text-xs text-slate-500">
            Base acumulada em {studyData.results.length}{' '}
            {studyData.results.length === 1 ? 'simulado' : 'simulados'}
          </div>
        </div>

        <div className="p-5 space-y-1">
          <div className="text-xs text-slate-400 font-medium">Pendências no Caderno</div>
          <div className="flex items-baseline gap-2 font-mono tabular-nums">
            <span
              className={`text-2xl sm:text-3xl font-bold ${
                summary.unresolvedErrorsCount > 0 ? 'text-rose-400' : 'text-emerald-400'
              }`}
            >
              {summary.unresolvedErrorsCount}
            </span>
            <span className="text-xs text-slate-500">questões não dominadas</span>
          </div>
          <div className="text-xs text-slate-500">
            Acertar no diagnóstico limpa a pendência
          </div>
        </div>

        <div className="p-5 space-y-1">
          <div className="text-xs text-slate-400 font-medium">Disciplinas em Alerta</div>
          <div className="flex items-baseline gap-2 font-mono tabular-nums">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400">
              {criticalCount + attentionCount}
            </span>
            <span className="text-xs text-slate-500">
              {criticalCount} críticas · {attentionCount} atenção
            </span>
          </div>
          <div className="text-xs text-slate-500">
            {summary.criticalTopics.length} tópicos específicos mapeados
          </div>
        </div>
      </div>

      {/* Cold-Start / Orientação quando não há métricas */}
      {!summary.hasMetrics && (
        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Nenhuma métrica de erro registrada no histórico ainda</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Como você ainda não concluiu simulados nesta conta, preparamos o modo{' '}
              <strong className="text-white">Nivelamento OAB</strong> com distribuição proporcional às 15 matérias da FGV. Ao finalizar essa bateria, o sistema identificará automaticamente suas matérias e tópicos mais vulneráveis.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onStartDiagnosticSimulado(diagnosticPlan.config, diagnosticPlan.questions)}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer shrink-0 whitespace-nowrap"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Fazer Nivelamento Agora</span>
          </button>
        </div>
      )}

      {/* Arquitetura em Duas Zonas: Esquerda (Matriz de Erros) | Direita (Deck de Geração) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ZONA ESQUERDA: Raio-X de Vulnerabilidade por Disciplina e Tópicos */}
        <div className="lg:col-span-7 space-y-6">
          {/* Matriz de Disciplinas */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-lg font-bold text-white">
                  Mapa de Vulnerabilidade por Disciplina
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Ordenado por índice de criticidade (taxa de erro × peso na OAB). Clique para fixar matérias manualmente.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {summary.weakestSubjects.length > 0 && (
                  <button
                    type="button"
                    onClick={selectAllWeakSubjects}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Focar só pontos fracos ({summary.weakestSubjects.length})
                  </button>
                )}
                {pinnedSubjects.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setPinnedSubjects([])}
                    className="px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Limpar filtro ({pinnedSubjects.length})
                  </button>
                )}
              </div>
            </div>

            <div className="divide-y divide-slate-800/80 max-h-[540px] overflow-y-auto">
              {summary.subjectDiagnostics.map((diag) => {
                const isPinned = pinnedSubjects.includes(diag.subject);
                const errorPct = diag.errorRate ?? 0;

                return (
                  <button
                    key={diag.subject}
                    type="button"
                    onClick={() => togglePinnedSubject(diag.subject)}
                    className={`w-full text-left px-5 py-4 transition-colors cursor-pointer flex flex-col gap-2.5 ${
                      isPinned
                        ? 'bg-amber-500/10 hover:bg-amber-500/15'
                        : 'hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 transition-colors ${
                            isPinned
                              ? 'bg-amber-500 border-amber-500 text-slate-950'
                              : 'border-slate-700 bg-slate-950'
                          }`}
                        >
                          {isPinned && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white truncate">
                            {diag.subject}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono tabular-nums mt-0.5">
                            <span>Peso FGV: {diag.oabWeight} q.</span>
                            <span aria-hidden="true">·</span>
                            <span>{diag.availableQuestionsCount} no banco</span>
                            {diag.unresolvedErrorsCount > 0 && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="text-rose-400 font-semibold">
                                  {diag.unresolvedErrorsCount} no caderno
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right font-mono tabular-nums">
                          {diag.totalAnswered > 0 ? (
                            <>
                              <div className="text-sm font-bold text-white">
                                {diag.errorRate}% erro
                              </div>
                              <div className="text-[11px] text-slate-400">
                                {diag.correctCount}/{diag.totalAnswered} acertos
                              </div>
                            </>
                          ) : (
                            <div className="text-xs text-slate-500">0 respondidas</div>
                          )}
                        </div>
                        <div className="w-20 flex justify-end">{renderStatusBadge(diag)}</div>
                      </div>
                    </div>

                    {/* Barra de proporção de erro */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          diag.status === 'CRITICO'
                            ? 'bg-rose-500'
                            : diag.status === 'ATENCAO'
                              ? 'bg-amber-500'
                              : diag.status === 'ESTAVEL'
                                ? 'bg-emerald-500'
                                : 'bg-slate-700'
                        }`}
                        style={{
                          width: `${
                            diag.totalAnswered > 0
                              ? Math.max(6, errorPct)
                              : Math.round((diag.oabWeight / 8) * 35)
                          }%`,
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tópicos Críticos Identificados */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-rose-400" />
                  <span>Tópicos com Maior Incidência de Erro</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Assuntos específicos extraídos diretamente das questões erradas no seu histórico
                </p>
              </div>
              <span className="text-xs font-mono tabular-nums text-slate-400">
                {summary.criticalTopics.length} tópicos
              </span>
            </div>

            {summary.criticalTopics.length === 0 ? (
              <div className="p-8 text-center text-sm text-slate-400">
                Nenhum erro por tópico registrado ainda. Complete seu primeiro simulado para mapear temas específicos (ex.: Princípio da Anterioridade, Incompatibilidades OAB, Teoria do Crime).
              </div>
            ) : (
              <div className="divide-y divide-slate-800/80">
                {summary.criticalTopics.slice(0, 8).map((t) => (
                  <div
                    key={`${t.subject}-${t.topic}`}
                    className="px-5 py-3.5 flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-slate-100 truncate">
                        {t.topic}
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                        <span className="truncate">{t.subject}</span>
                        {t.unresolvedErrors > 0 && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-rose-400 font-medium whitespace-nowrap">
                              {t.unresolvedErrors} pendente(s)
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 font-mono tabular-nums">
                      <span className="text-xs text-slate-400">
                        {t.errors}/{t.attempts} erros
                      </span>
                      <span
                        className={`text-xs font-bold ${
                          t.errorRate >= 60 ? 'text-rose-400' : 'text-amber-400'
                        }`}
                      >
                        {t.errorRate}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ZONA DIREITA: Painel de Controle e Prévia Estratégica do Teste */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                <h2 className="font-serif text-lg font-bold text-white">
                  Montagem do Diagnóstico
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShuffleSeed(s => s + 1)}
                className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                title="Gerar nova combinação de questões mantendo os mesmos critérios"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reembaralhar</span>
              </button>
            </div>

            {/* 1. Estratégia de Seleção */}
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold text-slate-300">
                Estratégia de Seleção Algorítmica
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(STRATEGY_META) as DiagnosticStrategy[]).map((key) => {
                  const meta = STRATEGY_META[key];
                  const isActive = strategy === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setStrategy(key)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-amber-500/15 border-amber-500/50 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold whitespace-nowrap truncate">
                        {meta.label}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate mt-0.5">
                        {meta.shortTitle}
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                {STRATEGY_META[strategy].description}
              </p>
            </div>

            {/* 2. Quantidade de Questões */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Extensão do Teste</span>
                <span className="font-mono tabular-nums text-slate-400">
                  {diagnosticPlan.questions.length} questões selecionadas
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl">
                {QUESTION_COUNT_OPTIONS.map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setQuestionCount(cnt)}
                    className={`py-2 rounded-lg text-xs font-mono tabular-nums font-bold transition-colors cursor-pointer ${
                      questionCount === cnt
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cnt} Qs
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Modo de Aplicação */}
            <div className="space-y-2">
              <span className="block text-xs font-semibold text-slate-300">
                Modo de Revisão
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMode('TREINO')}
                  className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                    mode === 'TREINO'
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Treino Comentado</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Gabarito na hora + áudio do professor + repetição de erros
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setMode('PROVA')}
                  className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                    mode === 'PROVA'
                      ? 'bg-sky-500/10 border-sky-500/40 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Prova FGV ({questionCount * 3}m)</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Simula pressão real do exame sem feedback imediato
                  </div>
                </button>
              </div>
            </div>

            {/* 4. Composição Prevista do Simulado */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Composição da Bateria</span>
                <span className="text-slate-400 font-mono tabular-nums">
                  {diagnosticPlan.unresolvedIncludedCount} do caderno ·{' '}
                  {diagnosticPlan.unseenIncludedCount} inéditas
                </span>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {diagnosticPlan.subjectBreakdown.map((item) => (
                  <div
                    key={item.subject}
                    className="flex items-center justify-between gap-3 text-xs py-1"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-slate-200 font-medium truncate">
                        {item.subject}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono tabular-nums">
                        Peso OAB: {item.oabWeight}
                        {item.errorRate !== null ? ` · ${item.errorRate}% erro histórico` : ''}
                      </div>
                    </div>
                    <div className="font-mono tabular-nums font-bold text-amber-400 shrink-0">
                      {item.count} {item.count === 1 ? 'q.' : 'qs.'}
                    </div>
                  </div>
                ))}
              </div>

              {diagnosticPlan.weakTopicsCovered.length > 0 && (
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed">
                  <span className="text-slate-300 font-semibold">Tópicos atacados: </span>
                  {diagnosticPlan.weakTopicsCovered.slice(0, 4).join(' · ')}
                  {diagnosticPlan.weakTopicsCovered.length > 4
                    ? ` · +${diagnosticPlan.weakTopicsCovered.length - 4} outros`
                    : ''}
                </div>
              )}
            </div>

            {/* Botão Principal de Disparo */}
            <button
              type="button"
              onClick={() =>
                onStartDiagnosticSimulado(diagnosticPlan.config, diagnosticPlan.questions)
              }
              disabled={diagnosticPlan.questions.length === 0}
              className="w-full py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-amber-500/20 disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>
                Iniciar Simulado Diagnóstico ({diagnosticPlan.questions.length} Questões)
              </span>
            </button>

            <div className="flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Questões do Caderno de Erros que forem acertadas neste diagnóstico serão automaticamente marcadas como superadas nas suas métricas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
