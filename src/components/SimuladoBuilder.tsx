import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Sparkles, Sliders, Play, CheckCircle2, Award, 
  Flame, Filter, Clock, ShieldCheck, HelpCircle, Layers,
  RefreshCw, Check, ArrowRight, Zap, GraduationCap, Compass, Infinity as InfinityIcon, Crosshair
} from 'lucide-react';
import { SimuladoConfig, SimuladoMode } from '../types';
import type { DifficultyLevel, QuestionOriginType } from '../types/knowledgeBase';
import { AVAILABLE_BOARDS } from '../data/questions';
import { 
  getAllQuestions, 
  getAllAvailableSubjects, 
  getSubjectQuestionCounts, 
  fetchUpdatedQuestionsForSubject,
  updateAllSubjectsQuestions,
  bulkGenerateQuestions,
  isAutoUpdateEnabled,
  setAutoUpdateEnabled,
  getLastUpdatedTimestamp,
  subscribeToQuestions
} from '../services/questionsService';

interface SimuladoBuilderProps {
  onStartSimulado: (config: SimuladoConfig) => void;
  cadernoErrosCount: number;
  onOpenDiagnostic?: () => void;
}

export const SimuladoBuilder: React.FC<SimuladoBuilderProps> = ({
  onStartSimulado,
  cadernoErrosCount,
  onOpenDiagnostic,
}) => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedOrigin, setSelectedOrigin] = useState<QuestionOriginType | 'ALL'>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | 'ALL'>('ALL');
  const [topicFilter, setTopicFilter] = useState<string>('');
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [mode, setMode] = useState<SimuladoMode>('TREINO');
  const [repeatInterval, setRepeatInterval] = useState<number>(2);
  const [timeLimit, setTimeLimit] = useState<number | null>(null);
  const [customTitle, setCustomTitle] = useState('');
  const [examFocus, setExamFocus] = useState<'OAB' | 'FACULDADE' | 'CONCURSO' | 'ALL'>('OAB');

  // Dynamic questions state
  const [allQuestions, setAllQuestions] = useState(getAllQuestions());
  const [availableSubjects, setAvailableSubjects] = useState(getAllAvailableSubjects());
  const [subjectCounts, setSubjectCounts] = useState(getSubjectQuestionCounts());
  const [autoUpdateOn, setAutoUpdateOn] = useState(isAutoUpdateEnabled());
  const [lastUpdated, setLastUpdated] = useState(getLastUpdatedTimestamp());
  const [updatingSubject, setUpdatingSubject] = useState<string | null>(null);
  const [isGeneralSyncing, setIsGeneralSyncing] = useState(false);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);
  const [batchProgress, setBatchProgress] = useState<{ current: number; total: number; subject: string } | null>(null);

  // Subscribe to questions bank updates
  useEffect(() => {
    const unsub = subscribeToQuestions(() => {
      const q = getAllQuestions();
      setAllQuestions(q);
      setAvailableSubjects(getAllAvailableSubjects());
      setSubjectCounts(getSubjectQuestionCounts());
      setLastUpdated(getLastUpdatedTimestamp());
    });
    return unsub;
  }, []);

  // Compute available pool count based on selected filters
  const matchingPoolCount = allQuestions.filter(q => {
    if (selectedSubjects.length > 0 && !selectedSubjects.includes(q.subject)) return false;
    if (selectedBoard !== 'ALL' && q.board !== selectedBoard) return false;
    if (selectedOrigin !== 'ALL' && (q.originType || 'AUTORAL_PROFESSOR') !== selectedOrigin) return false;
    if (selectedLevel !== 'ALL' && (q.difficultyLevel || 2) !== selectedLevel) return false;
    if (topicFilter.trim() && !q.topic.toLowerCase().includes(topicFilter.trim().toLowerCase())) return false;
    return true;
  }).length;

  const faculdadePoolCount = allQuestions.filter(q => q.examType === 'FACULDADE').length;
  const concursoPoolCount = allQuestions.filter(q => q.examType === 'CONCURSO').length;
  const tribPenalCount = (subjectCounts['Direito Tributário'] || 0) + (subjectCounts['Direito Penal'] || 0);
  const eticaCount = subjectCounts['Ética Profissional e Estatuto da OAB'] || 0;

  // Handle single subject update/fetch
  const handleUpdateSubject = async (subject: string, targetCount = 4) => {
    setUpdatingSubject(subject);
    setSyncFeedback(null);
    try {
      const res = await fetchUpdatedQuestionsForSubject(subject, targetCount, examFocus);
      if (res.success) {
        setSyncFeedback(`✅ ${res.addedCount > 0 ? `${res.addedCount} novas questões adicionadas a ${subject}!` : `Banco de ${subject} sincronizado e atualizado!`}`);
      } else {
        setSyncFeedback(`⚠️ ${res.message}`);
      }
    } catch {
      setSyncFeedback('Erro na sincronização de questões.');
    } finally {
      setUpdatingSubject(null);
      setTimeout(() => setSyncFeedback(null), 5000);
    }
  };

  // Handle general sync of core subjects or all disciplines
  const handleGeneralSync = async () => {
    setIsGeneralSyncing(true);
    setSyncFeedback(null);
    try {
      if (selectedSubjects.length > 0) {
        // Sync specifically selected subjects
        let totalAdded = 0;
        for (let i = 0; i < selectedSubjects.length; i++) {
          const subj = selectedSubjects[i];
          setBatchProgress({ current: i + 1, total: selectedSubjects.length, subject: subj });
          setSyncFeedback(`🔄 Gerando questões para ${subj} (${i + 1}/${selectedSubjects.length})...`);
          const res = await fetchUpdatedQuestionsForSubject(subj, 3, examFocus);
          if (res.success) totalAdded += res.addedCount;
        }
        setSyncFeedback(`✅ Sincronização concluída! ${totalAdded} novas questões adicionadas ao seu banco!`);
      } else {
        // Update ALL subjects in the application
        setSyncFeedback('🔄 Gerando lote de questões oficiais para TODAS as disciplinas...');
        const res = await bulkGenerateQuestions(
          availableSubjects,
          2,
          examFocus,
          (subj, curr, tot, added) => {
            setBatchProgress({ current: curr, total: tot, subject: subj });
            setSyncFeedback(`🔄 Expandindo ${subj} (${curr}/${tot}) · +${added} adicionadas...`);
          }
        );
        setSyncFeedback(`✅ Sucesso! Banco ampliado em ${res.totalAdded} novas questões em todas as ${availableSubjects.length} disciplinas.`);
      }
    } catch {
      setSyncFeedback('Erro ao atualizar banco de questões.');
    } finally {
      setIsGeneralSyncing(false);
      setBatchProgress(null);
      setTimeout(() => setSyncFeedback(null), 6000);
    }
  };

  const handleBulkExpand = async (quantityPerSubject: number) => {
    setIsGeneralSyncing(true);
    setSyncFeedback(null);
    const targetList = selectedSubjects.length > 0 ? selectedSubjects : availableSubjects;
    try {
      setSyncFeedback(`🚀 Gerando megabateria de questões (${targetList.length} disciplinas)...`);
      const res = await bulkGenerateQuestions(
        targetList,
        quantityPerSubject,
        examFocus,
        (subj, curr, tot, added) => {
          setBatchProgress({ current: curr, total: tot, subject: subj });
          setSyncFeedback(`⚡ IA gerando ${subj} (${curr}/${tot}) · ${added} questões integradas ao acervo...`);
        }
      );
      setSyncFeedback(`🎉 Megabateria concluída com sucesso! +${res.totalAdded} novas questões adicionadas.`);
    } catch {
      setSyncFeedback('Erro ao expandir acervo.');
    } finally {
      setIsGeneralSyncing(false);
      setBatchProgress(null);
      setTimeout(() => setSyncFeedback(null), 7000);
    }
  };

  const handleToggleAutoUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setAutoUpdateOn(checked);
    setAutoUpdateEnabled(checked);
  };

  // Preset quick triggers with REAL, LARGE numbers
  const handleStartPreset = (type: string) => {
    switch (type) {
      case 'oab_80_oficial':
        onStartSimulado({
          id: `oab_80_${Date.now()}`,
          title: 'Simulado Oficial OAB 1ª Fase (80 Questões)',
          description: 'Simulação idêntica à prova real do Exame de Ordem da FGV: 80 questões distribuídas em todas as 11 disciplinas jurídicas.',
          type: 'OAB_COMPLETO',
          questionCount: Math.min(80, allQuestions.length),
          timeLimitMinutes: 300, // 5 hours standard OAB
          mode: 'TREINO',
          repeatWrongQuestionsInterval: 2,
        });
        break;

      case 'oab_express_40':
        onStartSimulado({
          id: `oab_express_${Date.now()}`,
          title: 'Simulado OAB Express · 40 Questões com Fixação',
          description: 'Metade da prova com a mesma distribuição proporcional da FGV para treino intensivo diário.',
          type: 'OAB_EXPRESS',
          questionCount: Math.min(40, allQuestions.length),
          timeLimitMinutes: 150,
          mode: 'TREINO',
          repeatWrongQuestionsInterval: 2,
        });
        break;

      case 'faculdade_40':
      case 'faculdade_25': {
        const count = Math.min(40, faculdadePoolCount || allQuestions.length);
        onStartSimulado({
          id: `faculdade_${Date.now()}`,
          title: `Prova Semestral Faculdade de Direito (${count} Questões)`,
          description: 'Casos concretos aprofundados, teoria geral do crime, contratos, obrigações, processo e constitucional com foco acadêmico.',
          type: 'PERSONALIZADO',
          questionCount: count,
          examTypeFilter: faculdadePoolCount > 0 ? 'FACULDADE' : 'ALL',
          timeLimitMinutes: null,
          mode: 'TREINO',
          repeatWrongQuestionsInterval: 2,
        });
        break;
      }

      case 'concursos_juridicos': {
        const count = Math.min(40, concursoPoolCount || allQuestions.length);
        onStartSimulado({
          id: `concursos_${Date.now()}`,
          title: `Simulado Carreiras Jurídicas (${count} Questões)`,
          description: 'Questões aprofundadas com base em concursos de Magistratura, MP, Defensoria e Delegado de Polícia (FCC, Cebraspe, Vunesp).',
          type: 'PERSONALIZADO',
          questionCount: count,
          examTypeFilter: concursoPoolCount > 0 ? 'CONCURSO' : 'ALL',
          timeLimitMinutes: 120,
          mode: 'TREINO',
          repeatWrongQuestionsInterval: 2,
        });
        break;
      }

      case 'tributario_penal_40':
      case 'tributario_penal_20': {
        const count = Math.min(40, tribPenalCount);
        onStartSimulado({
          id: `trib_penal_${Date.now()}`,
          title: `Treino Especial: Tributário & Penal (${count} Questões)`,
          description: 'Foco intensivo nas questões mais frequentes da FGV e provas de faculdade em Direito Tributário e Penal.',
          type: 'DISCIPLINA',
          questionCount: count,
          subjects: ['Direito Tributário', 'Direito Penal'],
          timeLimitMinutes: null,
          mode: 'TREINO',
          repeatWrongQuestionsInterval: 2,
        });
        break;
      }

      case 'oab_etica_25':
      case 'oab_etica_10': {
        const count = Math.min(25, eticaCount || 25);
        onStartSimulado({
          id: `etica_${Date.now()}`,
          title: `Gabaritando Ética Profissional da OAB (${count} Questões)`,
          description: 'Garanta 100% dos pontos de Ética na 1ª Fase com repetição e fixação do Estatuto e CED.',
          type: 'DISCIPLINA',
          questionCount: count,
          subjects: ['Ética Profissional e Estatuto da OAB'],
          timeLimitMinutes: null,
          mode: 'TREINO',
          repeatWrongQuestionsInterval: 2,
        });
        break;
      }

      case 'maratona_infinita':
        onStartSimulado({
          id: `maratona_${Date.now()}`,
          title: 'Maratona Ilimitada de Questões (Treino Contínuo)',
          description: 'Treino contínuo sem limites: responda questões ininterruptamente e adicione mais lotes na mesma sessão.',
          type: 'PERSONALIZADO',
          questionCount: Math.min(100, allQuestions.length),
          timeLimitMinutes: null,
          mode: 'TREINO',
          repeatWrongQuestionsInterval: 2,
        });
        break;

      case 'caderno_erros':
        onStartSimulado({
          id: `caderno_erros_${Date.now()}`,
          title: 'Treinamento do Caderno de Erros',
          description: 'Refaça apenas as questões que errou anteriormente com o professor até fixar.',
          type: 'CADERNO_ERROS',
          questionCount: cadernoErrosCount,
          timeLimitMinutes: null,
          mode: 'TREINO',
          repeatWrongQuestionsInterval: 1,
        });
        break;
    }
  };

  const handleStartCustom = () => {
    onStartSimulado({
      id: `custom_${Date.now()}`,
      title: customTitle.trim() || `Simulado Personalizado (${questionCount} Questões)`,
      description: `Simulado configurado sob medida com foco em ${examFocus === 'OAB' ? 'Exame de Ordem (FGV)' : examFocus === 'FACULDADE' ? 'Faculdade de Direito' : examFocus === 'CONCURSO' ? 'Carreiras Jurídicas' : 'Todas as Provas'}.`,
      type: 'PERSONALIZADO',
      questionCount,
      subjects: selectedSubjects.length > 0 ? selectedSubjects : undefined,
      topics: topicFilter.trim() ? [topicFilter.trim()] : undefined,
      board: selectedBoard !== 'ALL' ? selectedBoard : undefined,
      difficulty: selectedDifficulty !== 'ALL' ? selectedDifficulty : undefined,
      difficultyLevel: selectedLevel,
      originFilter: selectedOrigin,
      timeLimitMinutes: timeLimit,
      mode,
      repeatWrongQuestionsInterval: repeatInterval,
    });
  };

  const toggleSubject = (sub: string) => {
    setSelectedSubjects(prev => 
      prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
    );
  };


  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8 animate-in fade-in">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20 flex items-center gap-1.5 shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              Acervo Oficial com {allQuestions.length} Questões
            </span>
            <span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Todas as {availableSubjects.length} Disciplinas
            </span>
            <span className="text-indigo-400 text-xs font-medium bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              IA Ativa · Geração Ilimitada
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-3">
            Preparação Completa: OAB, Faculdade e Concursos
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-sans">
            Treine com questões autênticas em larga escala. Simule a prova completa de <strong className="text-amber-300">80 questões da OAB 1ª Fase</strong>, faça baterias de casos concretos da <strong className="text-indigo-300">Faculdade de Direito</strong> ou dispute questões aprofundadas de <strong className="text-emerald-300">Carreiras Jurídicas</strong> com mentoria ativa do Professor.
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <button
              onClick={() => handleStartPreset('oab_80_oficial')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              Simulado Oficial OAB (80 Qs)
            </button>
            <button
              onClick={() => handleStartPreset('oab_express_40')}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-amber-400" />
              OAB Express (40 Qs)
            </button>
            <button
              onClick={() => handleStartPreset('faculdade_40')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/20"
            >
              <GraduationCap className="w-4 h-4" />
              Prova Faculdade ({Math.min(40, faculdadePoolCount || 40)} Qs)
            </button>
            <button
              onClick={() => handleStartPreset('maratona_infinita')}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-purple-600/20"
            >
              <InfinityIcon className="w-4 h-4" />
              Maratona Sem Fim
            </button>
            {onOpenDiagnostic && (
              <button
                onClick={onOpenDiagnostic}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Crosshair className="w-4 h-4 text-emerald-400" />
                Simulado Diagnóstico
              </button>
            )}
          </div>
        </div>

        {/* Ambient watermark */}
        <div className="absolute right-4 -bottom-6 opacity-5 pointer-events-none text-amber-400">
          <BookOpen className="w-80 h-80" />
        </div>
      </div>

      {/* Central de Expansão de Questões com Inteligência Artificial */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-3xl p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-500/20 border border-indigo-500/40 rounded-xl text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                Central de Expansão de Questões com Inteligência Artificial
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Precisa de mais questões? Nosso motor de IA jurídica gera baterias inteiras de questões inéditas e oficiais com gabarito fundamentado na legislação e súmulas, salvando-as permanentemente no seu aplicativo.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span>Acervo Atual: <strong className="text-amber-400">{allQuestions.length} questões</strong></span>
              <span>·</span>
              <span>Disciplinas Ativas: <strong className="text-indigo-300">{availableSubjects.length}</strong></span>
              <span>·</span>
              <span>Sincronização: <span className="text-emerald-400">{lastUpdated}</span></span>
            </div>
          </div>

          <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-indigo-500/20 shrink-0 lg:w-96">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">Foco das Novas Questões:</span>
              <div className="flex gap-1">
                {(['OAB', 'FACULDADE', 'CONCURSO'] as const).map(focus => (
                  <button
                    key={focus}
                    type="button"
                    onClick={() => setExamFocus(focus)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                      examFocus === focus 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {focus === 'OAB' ? 'OAB/FGV' : focus === 'FACULDADE' ? 'Faculdade' : 'Concursos'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleBulkExpand(3)}
                disabled={isGeneralSyncing}
                className="px-3 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isGeneralSyncing ? 'animate-spin' : ''}`} />
                <span>+33 Qs em Lote</span>
              </button>
              <button
                type="button"
                onClick={() => handleBulkExpand(5)}
                disabled={isGeneralSyncing}
                className="px-3 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md disabled:opacity-50"
              >
                <Zap className="w-3.5 h-3.5 fill-purple-200" />
                <span>+55 Qs (Megabateria)</span>
              </button>
            </div>

            {selectedSubjects.length > 0 && (
              <button
                type="button"
                onClick={() => handleGeneralSync()}
                disabled={isGeneralSyncing}
                className="w-full py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3 h-3 ${isGeneralSyncing ? 'animate-spin' : ''}`} />
                <span>+ Gerar para as {selectedSubjects.length} matérias selecionadas</span>
              </button>
            )}
          </div>
        </div>

        {/* Progress bar if syncing */}
        {isGeneralSyncing && batchProgress && (
          <div className="mt-4 pt-4 border-t border-indigo-500/20 space-y-2">
            <div className="flex justify-between text-xs text-indigo-300 font-mono">
              <span>Gerando: {batchProgress.subject}</span>
              <span>{batchProgress.current} de {batchProgress.total} disciplinas</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-amber-500 transition-all duration-300"
                style={{ width: `${Math.round((batchProgress.current / batchProgress.total) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Sync feedback banner */}
        {syncFeedback && !isGeneralSyncing && (
          <div className="mt-4 p-3 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-200 text-xs font-semibold flex items-center justify-between animate-in fade-in">
            <span>{syncFeedback}</span>
            <button 
              onClick={() => setSyncFeedback(null)}
              className="text-slate-400 hover:text-white ml-2 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Preset Fast Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            Simulados Estruturados por Objetivo
          </h2>
          <span className="text-xs text-slate-400 font-mono">{allQuestions.length} questões totais</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: OAB Oficial 80 */}
          <div 
            onClick={() => handleStartPreset('oab_80_oficial')}
            className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all cursor-pointer shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Prova Oficial
                </span>
                <span className="font-mono text-amber-300 font-bold">80 Questões</span>
              </div>
              <h3 className="font-serif font-bold text-white group-hover:text-amber-400 transition-colors mb-1.5 text-base">
                1ª Fase OAB (80 Qs)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Simulado completo com a distribuição oficial exata da FGV em todas as 11 disciplinas e cronômetro de 5 horas.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-slate-500 font-mono">Padrão FGV</span>
              <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Iniciar <Play className="w-3 h-3 fill-amber-400" />
              </span>
            </div>
          </div>

          {/* Card 2: OAB Express 40 */}
          <div 
            onClick={() => handleStartPreset('oab_express_40')}
            className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all cursor-pointer shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-amber-300 font-bold uppercase tracking-wider text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Revisão Rápida
                </span>
                <span className="font-mono text-amber-300 font-bold">40 Questões</span>
              </div>
              <h3 className="font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 text-base">
                OAB Express (40 Qs)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Metade da prova com questões de alta incidência para treino rápido diário com intervenção e fixação do professor.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-slate-500 font-mono">Treino Ágil</span>
              <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Iniciar <Play className="w-3 h-3 fill-amber-400" />
              </span>
            </div>
          </div>

          {/* Card 3: Faculdade de Direito 40 */}
          <div 
            onClick={() => handleStartPreset('faculdade_40')}
            className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 transition-all cursor-pointer shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-indigo-400 font-bold uppercase tracking-wider text-[10px] bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  Acadêmico
                </span>
                <span className="font-mono text-indigo-300 font-bold">{Math.min(40, faculdadePoolCount || 40)} Questões</span>
              </div>
              <h3 className="font-serif font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5 text-base">
                Prova Faculdade de Direito
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Casos concretos multidisciplinares, teoria geral do crime, contratos, processo e direito constitucional com fundamentação doutrinária.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-indigo-400 font-mono">{faculdadePoolCount} Qs no Acervo</span>
              <span className="text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Iniciar <Play className="w-3 h-3 fill-indigo-400" />
              </span>
            </div>
          </div>

          {/* Card 4: Carreiras Jurídicas 40 */}
          <div 
            onClick={() => handleStartPreset('concursos_juridicos')}
            className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition-all cursor-pointer shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Concursos
                </span>
                <span className="font-mono text-emerald-300 font-bold">{Math.min(40, concursoPoolCount || 40)} Questões</span>
              </div>
              <h3 className="font-serif font-bold text-white group-hover:text-emerald-400 transition-colors mb-1.5 text-base">
                Carreiras Jurídicas ({Math.min(40, concursoPoolCount || 40)} Qs)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Questões aprofundadas com base em concursos de Magistratura, MP e Defensoria Pública (VUNESP, CEBRASPE, FCC).
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-emerald-400 font-mono">{concursoPoolCount} Qs no Acervo</span>
              <span className="text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Iniciar <Play className="w-3 h-3 fill-emerald-400" />
              </span>
            </div>
          </div>

          {/* Card 5: Tributário & Penal 40 */}
          <div 
            onClick={() => handleStartPreset('tributario_penal_40')}
            className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-850 transition-all cursor-pointer shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-purple-400 font-bold uppercase tracking-wider text-[10px] bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  Duo Temático
                </span>
                <span className="font-mono text-purple-300 font-bold">{Math.min(40, tribPenalCount || 40)} Questões</span>
              </div>
              <h3 className="font-serif font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5 text-base">
                Tributário & Penal Focado
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Treino direcionado com as questões de maior índice de reprovação na FGV em Direito Tributário e Penal.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-purple-400 font-mono">{tribPenalCount} Qs no Acervo</span>
              <span className="text-purple-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Iniciar <Play className="w-3 h-3 fill-purple-400" />
              </span>
            </div>
          </div>

          {/* Card 6: Gabaritando Ética 25 */}
          <div 
            onClick={() => handleStartPreset('oab_etica_25')}
            className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all cursor-pointer shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Gabarito OAB
                </span>
                <span className="font-mono text-amber-300 font-bold">{Math.min(25, eticaCount || 25)} Questões</span>
              </div>
              <h3 className="font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 text-base">
                Gabaritando Ética OAB
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Domine o Estatuto da OAB, CED e Provimento 205 para gabaritar a disciplina que mais pontua proporcionalmente.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-amber-400 font-mono">{eticaCount} Qs no Acervo</span>
              <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Iniciar <Play className="w-3 h-3 fill-amber-400" />
              </span>
            </div>
          </div>

          {/* Card 7: Maratona Infinita */}
          <div 
            onClick={() => handleStartPreset('maratona_infinita')}
            className="group p-5 rounded-2xl bg-slate-900 border border-purple-500/30 hover:border-purple-400 hover:bg-slate-850 transition-all cursor-pointer shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-purple-300 font-bold uppercase tracking-wider text-[10px] bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  Treino Contínuo
                </span>
                <span className="font-mono text-purple-300 font-bold">Sem Limite</span>
              </div>
              <h3 className="font-serif font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5 text-base">
                Maratona Ilimitada
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Pratique sem parar! À medida que resolve, você pode adicionar novos lotes de questões sem encerrar a sessão.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-purple-300 font-mono">Modo Fluido</span>
              <span className="text-purple-300 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Iniciar <InfinityIcon className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 8: Caderno de Erros */}
          <div 
            onClick={() => handleStartPreset('caderno_erros')}
            className={`group p-5 rounded-2xl border transition-all cursor-pointer shadow-md flex flex-col justify-between ${
              cadernoErrosCount > 0
                ? 'bg-rose-950/20 border-rose-500/40 hover:border-rose-500 hover:bg-rose-950/30'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-rose-400 font-bold uppercase tracking-wider text-[10px] bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  Fixação Ativa
                </span>
                <span className="font-mono text-rose-300 font-bold">{cadernoErrosCount} pendentes</span>
              </div>
              <h3 className="font-serif font-bold text-white group-hover:text-rose-300 transition-colors mb-1.5 text-base">
                Caderno de Erros
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Refaça apenas as questões que errou anteriormente com o professor até que fixe todos os pontos!
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-slate-500 font-mono">{cadernoErrosCount} questões</span>
              <span className="text-rose-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Treinar <Play className="w-3 h-3 fill-rose-400" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Mock Exam Configurator */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 mb-6 gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-amber-400" />
              Personalizador de Simulado por Medida
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Escolha matérias, defina de 5 até 80 questões e ajuste o foco pedagógico
            </p>
          </div>
          <button
            onClick={handleStartCustom}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            Iniciar Simulado Personalizado ({questionCount} Qs)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1: Subject Selection */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Disciplinas do Direito (Selecione uma ou mais)
                </label>
                <div className="flex items-center gap-2">
                  {selectedSubjects.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedSubjects([])}
                      className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Limpar seleção
                    </button>
                  )}
                  <span className="text-[11px] text-amber-400 font-semibold">
                    {selectedSubjects.length === 0 ? `Todas as ${availableSubjects.length} Disciplinas` : `${selectedSubjects.length} selecionada(s)`}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {availableSubjects.map((sub) => {
                  const isSelected = selectedSubjects.includes(sub);
                  const count = subjectCounts[sub] || 0;
                  const isSubUpdating = updatingSubject === sub;

                  return (
                    <div key={sub} className="inline-flex items-center">
                      <button
                        type="button"
                        onClick={() => toggleSubject(sub)}
                        className={`text-xs px-3 py-2 rounded-xl border transition-all cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-500/50 text-amber-200 font-semibold shadow-sm'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <span>{sub}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                          isSelected ? 'bg-amber-500/30 text-amber-200' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {count}
                        </span>
                      </button>

                      {/* Instant update button for specific subject */}
                      {isSelected && (
                        <button
                          type="button"
                          title={`Gerar mais questões atualizadas de ${sub}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUpdateSubject(sub, 4);
                          }}
                          disabled={isSubUpdating}
                          className="ml-1 p-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-white transition-all text-[10px] cursor-pointer"
                        >
                          <RefreshCw className={`w-3 h-3 ${isSubUpdating ? 'animate-spin text-amber-400' : ''}`} />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Notice & Quick Add Action when subject selected */}
              {selectedSubjects.length > 0 && (
                <div className="mt-3 p-3 bg-slate-950 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400 font-bold">{matchingPoolCount}</span> questões disponíveis nas disciplinas selecionadas:
                    <span className="text-slate-400 font-mono">({selectedSubjects.join(', ')})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      selectedSubjects.forEach(s => handleUpdateSubject(s, 3));
                    }}
                    disabled={updatingSubject !== null}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3 h-3 ${updatingSubject ? 'animate-spin' : ''}`} />
                    + Gerar Mais Questões via IA para estas Matérias
                  </button>
                </div>
              )}

              <p className="text-[11px] text-slate-500 mt-2">
                *Dica: Deixe desmarcado para incluir todas as disciplinas proporcionalmente (ideal para simulado da OAB!), ou selecione matérias específicas para treino temático.
              </p>
            </div>

            {/* Custom Title */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Nome do Simulado (Opcional)
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder="Ex: Treino de Revisão Tributário e Penal com Fixação"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/80"
              />
            </div>
          </div>

          {/* Column 2: Filters & Modes */}
          <div className="space-y-4 bg-slate-950/50 p-5 rounded-2xl border border-slate-800">
            {/* Resolution Mode */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Modo Pedagógico
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMode('TREINO')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-colors cursor-pointer ${
                    mode === 'TREINO'
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  Professor & Fixação
                  <span className="block text-[10px] text-slate-500 font-normal mt-0.5">Explica e Repete Erradas</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('PROVA')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-colors cursor-pointer ${
                    mode === 'PROVA'
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  Modo Prova
                  <span className="block text-[10px] text-slate-500 font-normal mt-0.5">Cronometrado sem Dicas</span>
                </button>
              </div>
            </div>

            {/* Repeat Interval if in Teacher Mode */}
            {mode === 'TREINO' && (
              <div className="p-3 bg-purple-950/20 border border-purple-500/30 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-purple-300">Retorno de Questões Erradas:</span>
                  <span className="font-bold text-amber-400 font-mono">
                    {repeatInterval === 1 ? 'Após 1 questão (~1 min)' :
                     repeatInterval === 2 ? 'Após 2 questões (~3 min)' :
                     'Após 3 questões (~5 min)'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setRepeatInterval(1)}
                    className={`py-1 rounded-lg text-[11px] font-semibold border transition-colors cursor-pointer ${
                      repeatInterval === 1
                        ? 'bg-purple-500 text-white border-purple-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Rápido (1 q.)
                  </button>
                  <button
                    type="button"
                    onClick={() => setRepeatInterval(2)}
                    className={`py-1 rounded-lg text-[11px] font-semibold border transition-colors cursor-pointer ${
                      repeatInterval === 2
                        ? 'bg-purple-500 text-white border-purple-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Ideal (2 q.)
                  </button>
                  <button
                    type="button"
                    onClick={() => setRepeatInterval(3)}
                    className={`py-1 rounded-lg text-[11px] font-semibold border transition-colors cursor-pointer ${
                      repeatInterval === 3
                        ? 'bg-purple-500 text-white border-purple-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Espaçado (3 q.)
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Toda pergunta que você errar retornará após o intervalo escolhido até que você fixe a fundamentação.
                </p>
              </div>
            )}

            {/* Board Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Banca Examinadora
              </label>
              <select
                value={selectedBoard}
                onChange={(e) => setSelectedBoard(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500/80"
              >
                <option value="ALL">Todas as Bancas (FGV, Vunesp, Cebraspe, FCC, Faculdades)</option>
                {AVAILABLE_BOARDS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Origin & Level Filters (Módulo 7) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Origem da Questão
                </label>
                <select
                  value={selectedOrigin}
                  onChange={(e) => setSelectedOrigin(e.target.value as QuestionOriginType | 'ALL')}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500/80"
                >
                  <option value="ALL">Todas as Origens</option>
                  <option value="OFICIAL_OAB">Oficiais OAB/FGV</option>
                  <option value="INEDITA_IA">Inéditas Fundamentadas</option>
                  <option value="AUTORAL_PROFESSOR">Autorais JurisMentor</option>
                  <option value="ACADEMICA">Acadêmicas / Faculdade</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Nível (1 a 4)
                </label>
                <select
                  value={String(selectedLevel)}
                  onChange={(e) =>
                    setSelectedLevel(e.target.value === 'ALL' ? 'ALL' : (Number(e.target.value) as DifficultyLevel))
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500/80"
                >
                  <option value="ALL">Todos os Níveis</option>
                  <option value="1">Nível 1 · Básico</option>
                  <option value="2">Nível 2 · Intermediário</option>
                  <option value="3">Nível 3 · Avançado</option>
                  <option value="4">Nível 4 · Desafio OAB</option>
                </select>
              </div>
            </div>

            {/* Topic Keyword Filter */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Filtro por Assunto (Opcional)
              </label>
              <input
                type="text"
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                placeholder="Ex: Imunidade, Insignificância, Honorários..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/80"
              />
            </div>

            {/* Quantity Selector with Quick Buttons */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Quantidade: <strong className="text-amber-400 text-sm">{questionCount} Questões</strong>
                </label>
                <span className="text-[11px] text-slate-400 font-mono">
                  {matchingPoolCount} disponíveis no acervo
                </span>
              </div>

              {/* Fast Quantity Buttons */}
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                {[10, 20, 30, 40, 50, 60, 80].map(count => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setQuestionCount(count)}
                    className={`py-1.5 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                      questionCount === count
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {count} {count === 80 ? '⭐ OAB' : 'Qs'}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setQuestionCount(matchingPoolCount)}
                  className={`py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    questionCount === matchingPoolCount
                      ? 'bg-amber-500 text-slate-950 border-amber-400'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  Todas ({matchingPoolCount})
                </button>
              </div>

              <input
                type="range"
                min={5}
                max={Math.max(80, matchingPoolCount)}
                step={5}
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>5 questões</span>
                <span>80 questões (Prova Completa)</span>
              </div>
            </div>

            {/* Timer Limit */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Tempo Limite
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { label: 'Livre', value: null },
                  { label: '30 min', value: 30 },
                  { label: '60 min', value: 60 },
                  { label: '5 horas', value: 300 }
                ].map(item => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setTimeLimit(item.value)}
                    className={`py-1.5 rounded-lg text-xs font-medium border text-center transition-colors cursor-pointer ${
                      timeLimit === item.value
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
