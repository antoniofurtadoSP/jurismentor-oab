import React, { useState, useMemo, useEffect } from 'react';
import {
  BarChart3, AlertTriangle, CheckCircle2,
  Target, BookOpen, RefreshCw, Crosshair,
  Sparkles, Compass, Scale, ArrowRight, Layers
} from 'lucide-react';
import { UserStudyData, SimuladoResult, PerformanceErrorAnalysis } from '../types';
import { getGlobalPerformanceStats } from '../services/storage';
import {
  analyzePerformanceErrors,
  buildPerformanceFingerprint,
  collectMissedQuestionSummaries,
} from '../services/aiTutor';
import { ProfessorAudioPlayer } from './ProfessorAudioPlayer';

const ANALYSIS_CACHE_KEY = 'jurismentor_perf_ai_analysis_v1';

interface CachedAnalysisPayload {
  fingerprint: string;
  analysis: PerformanceErrorAnalysis;
}

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

  const missedQuestions = useMemo(() => collectMissedQuestionSummaries(studyData), [studyData]);
  const currentFingerprint = useMemo(
    () => buildPerformanceFingerprint(stats.totalQuestionsAnswered, stats.cadernoErrosCount, missedQuestions),
    [stats.totalQuestionsAnswered, stats.cadernoErrosCount, missedQuestions]
  );

  const [analysis, setAnalysis] = useState<PerformanceErrorAnalysis | null>(null);
  const [cachedFingerprint, setCachedFingerprint] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(ANALYSIS_CACHE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CachedAnalysisPayload;
        if (parsed?.analysis) {
          setAnalysis(parsed.analysis);
          setCachedFingerprint(parsed.fingerprint || null);
        }
      }
    } catch {
      // ignore corrupted cache
    }
  }, []);

  const isAnalysisStale = Boolean(analysis && cachedFingerprint && cachedFingerprint !== currentFingerprint);

  const handleRunAiAnalysis = async () => {
    if (analyzing || stats.totalQuestionsAnswered === 0) return;
    setAnalyzing(true);
    setAnalysisError(null);

    try {
      const result = await analyzePerformanceErrors({
        overallAccuracy: stats.accuracy,
        totalAnswered: stats.totalQuestionsAnswered,
        totalCorrect: stats.totalCorrect,
        rankedSubjects: stats.rankedSubjects,
        missedQuestions,
      });

      setAnalysis(result);
      setCachedFingerprint(currentFingerprint);
      try {
        localStorage.setItem(
          ANALYSIS_CACHE_KEY,
          JSON.stringify({ fingerprint: currentFingerprint, analysis: result } satisfies CachedAnalysisPayload)
        );
      } catch {
        // ignore storage quota errors
      }
    } catch (err: any) {
      setAnalysisError(err?.message || 'Não foi possível concluir a análise de erros agora. Tente novamente.');
    } finally {
      setAnalyzing(false);
    }
  };

  const spokenDiagnosis = useMemo(() => {
    if (!analysis) return '';
    const topicsSummary = analysis.priorityTopics
      .slice(0, 3)
      .map(
        (t, idx) =>
          `Prioridade ${idx + 1}: ${t.subject}, tópico ${t.topic}. ${t.errorPattern} Recomendação: ${t.recommendedAction}`
      )
      .join(' ');
    return `Diagnóstico do seu desempenho na OAB. ${analysis.summaryDiagnosis} Alerta de dificuldade: ${analysis.hardestPatternAlert} ${topicsSummary}`;
  }, [analysis]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8 animate-in fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DFD7C8]">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-[#1B365D]" />
            Análise de Desempenho & Diagnóstico OAB
          </h1>
          <p className="text-sm font-serif italic text-stone-600 mt-1">
            Estatísticas detalhadas de retenção, taxa de acertos por matéria e projeção de aprovação
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
          {onOpenDiagnostic && (
            <button
              onClick={onOpenDiagnostic}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#F4EFE6] border border-[#D6CCB9] text-stone-800 font-bold text-xs transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-xs"
            >
              <Crosshair className="w-4 h-4 text-[#8A6518]" />
              Simulado Diagnóstico
            </button>
          )}
          <button
            onClick={onGoToSimulados}
            className="px-4 py-2.5 rounded-xl bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] font-bold text-xs transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-xs"
          >
            <BookOpen className="w-4 h-4 text-[#E6C574]" />
            Fazer Novo Simulado
          </button>
        </div>
      </div>

      {/* Main OAB Cutoff Radar Card */}
      <div className="bg-white border border-[#DFD7C8] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Score & Projection */}
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#8A6518]">
              <Target className="w-4 h-4 text-[#8A6518]" />
              <span>Projeção Oficial de 1ª Fase do Exame de Ordem</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900">
              {stats.accuracy}% de Aproveitamento Global
            </h2>

            <p className="text-sm text-stone-700 leading-relaxed font-serif">
              Para ser aprovado na 1ª Fase da OAB, o candidato precisa acertar no mínimo <strong className="text-[#1B365D]">40 das 80 questões (50%)</strong>. 
              {stats.accuracy >= 50
                ? " Atualmente seu índice coloca você dentro da ZONA DE APROVAÇÃO, acima da linha de corte!"
                : " Você ainda está ligeiramente abaixo da nota de corte. Foco prioritário em Ética e Direito Constitucional para elevar a pontuação!"}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className={`px-4 py-2 rounded-xl text-xs font-bold border flex items-center gap-2 ${
                passedOABCutoff
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
              }`}>
                {passedOABCutoff ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                    <span>Zona de Aprovação (≥ 50%)</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-[#8A6518]" />
                    <span>Zona de Alerta (&lt; 50%)</span>
                  </>
                )}
              </div>

              <div className="px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFD7C8] text-xs text-stone-700 font-mono tabular-nums">
                {stats.totalCorrect} corretas de {stats.totalQuestionsAnswered} respondidas
              </div>
            </div>
          </div>

          {/* Right: Graphic Bar Visualizer */}
          <div className="w-full lg:w-80 bg-[#FAF7F2] p-6 rounded-2xl border border-[#DFD7C8] text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
              Régua do Exame da OAB
            </span>

            <div className="relative h-44 flex items-end justify-center py-2">
              {/* Vertical barometer */}
              <div className="relative w-16 h-36 bg-[#EAE3D5] border border-[#D6CCB9] rounded-xl overflow-hidden flex flex-col justify-end">
                <div
                  className={`w-full transition-all duration-1000 ${
                    passedOABCutoff ? 'bg-emerald-700' : 'bg-[#7B1E26]'
                  }`}
                  style={{ height: `${Math.min(100, Math.max(8, stats.accuracy))}%` }}
                />
                {/* 50% cutoff line */}
                <div 
                  className="absolute left-0 right-0 border-b-2 border-[#1B365D] z-20"
                  style={{ bottom: '50%' }}
                />
              </div>

              {/* Marker labels */}
              <div className="absolute right-2 sm:right-6 text-left text-[11px] font-mono space-y-5">
                <div className="text-stone-600">100% Gabarito</div>
                <div className="text-[#1B365D] font-bold">▲ 50% Corte OAB</div>
                <div className="text-stone-600">0%</div>
              </div>
            </div>

            <p className="text-[11px] font-serif italic text-stone-600">
              Atualizado automaticamente a cada questão respondida
            </p>
          </div>
        </div>
      </div>

      {/* Key Metric Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#DFD7C8] shadow-xs">
          <div className="text-xs font-semibold text-stone-600 mb-1">Questões Resolvidas</div>
          <div className="text-2xl font-display font-black tabular-nums text-stone-900">{stats.totalQuestionsAnswered}</div>
          <div className="text-[11px] text-stone-500 mt-1">Exames anteriores reais</div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#DFD7C8] shadow-xs">
          <div className="text-xs font-semibold text-stone-600 mb-1">Simulados Completos</div>
          <div className="text-2xl font-display font-black tabular-nums text-stone-900">{stats.simuladosCompleted}</div>
          <div className="text-[11px] text-stone-500 mt-1">Sessões finalizadas</div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#DFD7C8] shadow-xs">
          <div className="text-xs font-semibold text-stone-600 mb-1">Caderno de Erros</div>
          <div className="text-2xl font-display font-black tabular-nums text-[#7B1E26]">{stats.cadernoErrosCount}</div>
          <div className="text-[11px] text-stone-500 mt-1">Aguardando revisão</div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#DFD7C8] shadow-xs">
          <div className="text-xs font-semibold text-stone-600 mb-1">Ponto Mais Forte</div>
          <div className="text-sm font-bold text-emerald-800 truncate mt-1">
            {stats.strongestSubject ? stats.strongestSubject.subject : 'Avaliando...'}
          </div>
          <div className="text-[11px] text-stone-500 mt-1 font-mono tabular-nums">
            {stats.strongestSubject ? `${stats.strongestSubject.rate}% de acerto` : 'Faça um simulado'}
          </div>
        </div>
      </div>

      {/* Gemini AI Error Pattern & Priority Study Topics Analyzer */}
      <div className="bg-white border border-[#D6CCB9] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#E6DFD3]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#8A6518]" />
              <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
                Diagnóstico Inteligente de Erros & Tópicos Prioritários
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-serif text-stone-600">
              Análise dos seus erros e dos conteúdos mais difíceis encontrados para definir exatamente o que revisar primeiro
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            {analysis && spokenDiagnosis && (
              <ProfessorAudioPlayer textToSpeak={spokenDiagnosis} compact={true} />
            )}
            <button
              onClick={handleRunAiAnalysis}
              disabled={analyzing || stats.totalQuestionsAnswered === 0}
              className="px-4 py-2.5 rounded-xl bg-[#1B365D] hover:bg-[#142846] disabled:opacity-50 disabled:cursor-not-allowed text-[#FAF7F2] font-bold text-xs transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-xs"
            >
              {analyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analisando Erros...</span>
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4 text-[#E6C574]" />
                  <span>{analysis ? 'Atualizar Análise' : 'Analisar Erros e Sugerir Tópicos'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {stats.totalQuestionsAnswered === 0 ? (
          <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#DFD7C8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-stone-900">
                Ainda não há histórico de questões respondidas para diagnosticar
              </div>
              <p className="text-xs font-serif text-stone-600">
                Resolva um simulado ou faça o Simulado Diagnóstico para mapear seus erros por grau de dificuldade e gerar seu roteiro prioritário.
              </p>
            </div>
            <button
              onClick={onOpenDiagnostic || onGoToSimulados}
              className="px-4 py-2.5 rounded-xl bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] font-bold text-xs transition-colors cursor-pointer shrink-0 whitespace-nowrap"
            >
              {onOpenDiagnostic ? 'Iniciar Diagnóstico' : 'Ir para Simulados'}
            </button>
          </div>
        ) : (
          <>
            {isAnalysisStale && !analyzing && (
              <div className="px-4 py-3 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 flex flex-wrap items-center justify-between gap-2">
                <span>
                  Você respondeu novas questões desde a última análise. Atualize para incluir os erros mais recentes.
                </span>
                <button
                  onClick={handleRunAiAnalysis}
                  className="font-bold text-[#7B1E26] hover:text-[#61161D] underline cursor-pointer"
                >
                  Reanalisar agora
                </button>
              </div>
            )}

            {analysisError && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-xs sm:text-sm text-rose-900 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-[#7B1E26] shrink-0 mt-0.5" />
                  <span>{analysisError}</span>
                </div>
                <button
                  onClick={handleRunAiAnalysis}
                  className="px-3 py-1.5 rounded-lg bg-[#7B1E26] hover:bg-[#61161D] text-[#FAF7F2] font-semibold text-xs transition-colors cursor-pointer"
                >
                  Tentar Novamente
                </button>
              </div>
            )}

            {analyzing && (
              <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#D6CCB9] flex items-center gap-4 text-sm text-stone-800">
                <RefreshCw className="w-5 h-5 text-[#1B365D] animate-spin shrink-0" />
                <div>
                  <div className="font-semibold text-stone-900">
                    Mapeando {missedQuestions.length} registro(s) de erro e níveis de dificuldade...
                  </div>
                  <div className="text-xs font-serif text-stone-600 mt-0.5">
                    Identificando padrões de pegadinhas, dispositivos legais envolvidos e tópicos prioritários para sua aprovação.
                  </div>
                </div>
              </div>
            )}

            {!analyzing && !analysis && !analysisError && (
              <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#DFD7C8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-stone-900">
                    {missedQuestions.length > 0
                      ? `${missedQuestions.length} tópico(s)/questões erradas prontos para diagnóstico cirúrgico`
                      : 'Aproveitamento perfeito até aqui — gere sugestões avançadas de consolidação'}
                  </div>
                  <p className="text-xs font-serif text-stone-600">
                    Clique em <strong className="text-[#1B365D]">Analisar Erros e Sugerir Tópicos</strong> para identificar os conteúdos mais difíceis em que você perdeu pontos e receber um plano direto de revisão.
                  </p>
                </div>
              </div>
            )}

            {!analyzing && analysis && (
              <div className="space-y-6">
                {/* Summary & Hardest Pattern Alert */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#DFD7C8] space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1B365D] flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-[#8A6518]" />
                      Diagnóstico Geral do Mentor
                    </div>
                    <p className="text-sm text-stone-800 leading-relaxed font-serif">
                      {analysis.summaryDiagnosis}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#7B1E26] flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Conteúdo Mais Crítico Identificado
                    </div>
                    <p className="text-sm text-rose-950 leading-relaxed font-serif">
                      {analysis.hardestPatternAlert}
                    </p>
                  </div>
                </div>

                {/* Priority Topics List */}
                {analysis.priorityTopics.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#1B365D]" />
                      Tópicos Prioritários de Estudo ({analysis.priorityTopics.length})
                    </h4>

                    <div className="space-y-3">
                      {analysis.priorityTopics.map((item, idx) => {
                        const priorityBadgeStyle =
                          item.priority === 'CRÍTICA'
                            ? 'bg-rose-50 text-[#7B1E26] border-rose-300'
                            : item.priority === 'ALTA'
                            ? 'bg-amber-50 text-amber-950 border-amber-300'
                            : 'bg-sky-50 text-sky-950 border-sky-300';

                        return (
                          <div
                            key={`${item.subject}_${item.topic}_${idx}`}
                            className="p-5 rounded-xl bg-[#FAF7F2] border border-[#DFD7C8] hover:border-[#1B365D]/40 transition-colors space-y-3"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-mono text-xs font-bold text-stone-500">
                                    #{idx + 1}
                                  </span>
                                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${priorityBadgeStyle}`}>
                                    Prioridade {item.priority}
                                  </span>
                                  <span className="text-xs font-bold text-[#1B365D]">
                                    {item.subject}
                                  </span>
                                  <span className="text-xs text-stone-600 font-mono">
                                    · {item.difficultyDetected} · {item.errorCount} {item.errorCount === 1 ? 'erro' : 'erros'}
                                  </span>
                                </div>
                                <h5 className="font-display text-base font-bold text-stone-900">
                                  {item.topic}
                                </h5>
                              </div>

                              <button
                                onClick={() => onTrainWeakness(item.subject)}
                                className="px-3.5 py-2 rounded-lg bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 self-start sm:self-auto whitespace-nowrap"
                              >
                                <span>Treinar Disciplina</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
                              <div className="p-3.5 rounded-lg bg-white border border-rose-200">
                                <span className="font-bold text-[#7B1E26] block mb-1">
                                  Padrão do erro detectado:
                                </span>
                                <span className="font-serif text-stone-800">{item.errorPattern}</span>
                              </div>
                              <div className="p-3.5 rounded-lg bg-white border border-emerald-200">
                                <span className="font-bold text-emerald-800 block mb-1">
                                  O que revisar agora:
                                </span>
                                <span className="font-serif text-stone-800">{item.recommendedAction}</span>
                              </div>
                            </div>

                            {item.legalBasis.length > 0 && (
                              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-stone-600">
                                <span className="font-semibold text-stone-800 mr-1">Base legal/súmulas:</span>
                                {item.legalBasis.map((ref, rIdx) => (
                                  <span
                                    key={rIdx}
                                    className="px-2 py-0.5 rounded bg-white border border-[#D6CCB9] font-mono text-[#1B365D]"
                                  >
                                    {ref}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Tactical Next Steps */}
                {analysis.studyStrategySteps.length > 0 && (
                  <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      Plano Tático Imediato
                    </h4>
                    <ol className="space-y-2">
                      {analysis.studyStrategySteps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-serif text-stone-800 leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-emerald-800 text-[#FAF7F2] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Breakdown by Legal Subject (Matérias) */}
      <div className="bg-white border border-[#DFD7C8] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between pb-6 border-b border-[#E6DFD3] mb-6">
          <div>
            <h3 className="font-display text-lg font-bold text-stone-900">
              Aproveitamento por Disciplina Jurídica
            </h3>
            <p className="text-xs font-serif text-stone-600 mt-1">
              Desempenho comparativo para direcionamento cirúrgico de estudos
            </p>
          </div>
        </div>

        {stats.rankedSubjects.length === 0 ? (
          <div className="py-12 text-center text-stone-600 font-serif text-sm">
            Nenhuma questão resolvida ainda. Conclua seu primeiro simulado para ver o raio-x por matéria.
          </div>
        ) : (
          <div className="space-y-4">
            {stats.rankedSubjects.map((sub) => {
              const isHigh = sub.rate >= 70;
              const isMedium = sub.rate >= 50 && sub.rate < 70;
              const isLow = sub.rate < 50;

              return (
                <div key={sub.subject} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E2DBD0]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-semibold text-sm text-stone-900">
                      {sub.subject}
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-stone-600 font-mono tabular-nums">
                        {sub.correct}/{sub.total} acertos
                      </span>
                      <span className={`font-bold font-mono tabular-nums px-2 py-0.5 rounded border text-xs ${
                        isHigh ? 'bg-emerald-50 border-emerald-200 text-emerald-800' :
                        isMedium ? 'bg-amber-50 border-amber-200 text-amber-900' :
                        'bg-rose-50 border-rose-200 text-[#7B1E26]'
                      }`}>
                        {sub.rate}%
                      </span>
                      {isLow && (
                        <button
                          onClick={() => onTrainWeakness(sub.subject)}
                          className="text-[11px] font-semibold text-[#1B365D] hover:text-[#7B1E26] underline cursor-pointer"
                        >
                          Treinar Agora
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-[#E6DFD3] rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isHigh ? 'bg-emerald-700' :
                        isMedium ? 'bg-[#8A6518]' :
                        'bg-[#7B1E26]'
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
        <div className="bg-white border border-[#DFD7C8] rounded-2xl p-6 sm:p-8 shadow-xs">
          <h3 className="font-display text-lg font-bold text-stone-900 mb-4">
            Histórico Recente de Simulados
          </h3>

          <div className="divide-y divide-[#E6DFD3]">
            {studyData.results.map((res) => (
              <div key={res.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-sm text-stone-900">{res.title}</div>
                  <div className="text-xs text-stone-600 flex items-center gap-2 mt-0.5">
                    <span>{res.date}</span>
                    <span>·</span>
                    <span>{res.totalQuestions} questões</span>
                    <span>·</span>
                    <span className="font-mono text-stone-600 tabular-nums">
                      {Math.floor(res.timeSpentSeconds / 60)}m {res.timeSpentSeconds % 60}s
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-lg text-xs font-bold font-mono tabular-nums border ${
                    res.passedOABCutoff
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                      : 'bg-rose-50 text-[#7B1E26] border-rose-300'
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
