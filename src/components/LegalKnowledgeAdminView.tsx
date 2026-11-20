import React, { useEffect, useState } from 'react';
import {
  Database,
  BookOpen,
  Scale,
  Sparkles,
  Upload,
  History,
  Search,
  Plus,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  PauseCircle,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  FileText,
  Cpu,
} from 'lucide-react';
import type { LegalQuestion } from '../types';
import type {
  DifficultyLevel,
  ImportJobRecord,
  JurisprudenceCategory,
  JurisprudenceRecord,
  JurisprudenceStatus,
  LawArticle,
  LegalUpdateLog,
  LegislationNorm,
  NormStatus,
  QuestionOriginType,
  QuestionValidationStatus,
} from '../types/knowledgeBase';
import {
  createOrUpdateKbQuestion,
  extractPdfTextFromFile,
  fetchImportJobs,
  fetchKbOverview,
  fetchKbQuestions,
  fetchLegalUpdates,
  generateGroundedQuestionsApi,
  KnowledgeOverviewResponse,
  processImportApi,
  recordLegalUpdateApi,
  runTwoStageValidation,
  saveArticle,
  saveJurisprudence,
  saveNorm,
  searchJurisprudence,
  searchLegislation,
  updateQualityConfig,
  updateQuestionStatus,
} from '../services/knowledgeBaseService';
import { syncPublishedQuestionsFromServer } from '../services/questionsService';

type AdminSubTab = 'legislacao' | 'jurisprudencia' | 'fabrica_qualidade' | 'importador' | 'atualizacoes_ia';

const STATUS_BADGES: Record<QuestionValidationStatus, { label: string; cls: string }> = {
  PUBLICADA: { label: 'Publicada', cls: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
  APROVADA: { label: 'Aprovada', cls: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30' },
  AGUARDANDO_REVISAO: { label: 'Aguardando Revisão', cls: 'text-amber-300 bg-amber-500/10 border-amber-500/30' },
  EM_VALIDACAO: { label: 'Em Validação', cls: 'text-sky-300 bg-sky-500/10 border-sky-500/30' },
  GERADA: { label: 'Gerada', cls: 'text-sky-300 bg-sky-500/10 border-sky-500/30' },
  SUSPENSA: { label: 'Suspensa', cls: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
  DESATUALIZADA: { label: 'Desatualizada', cls: 'text-orange-400 bg-orange-500/10 border-orange-500/30' },
};

const ORIGIN_LABELS: Record<QuestionOriginType, string> = {
  OFICIAL_OAB: 'Oficial OAB/FGV',
  INEDITA_IA: 'Inédita IA',
  AUTORAL_PROFESSOR: 'Autoral Professor',
  ACADEMICA: 'Acadêmica',
};

export const LegalKnowledgeAdminView: React.FC = () => {
  const [subTab, setSubTab] = useState<AdminSubTab>('legislacao');
  const [overview, setOverview] = useState<KnowledgeOverviewResponse | null>(null);
  const [loadingOverview, setLoadingOverview] = useState(true);
  const [feedback, setFeedback] = useState<{ type: 'ok' | 'warn' | 'err'; text: string } | null>(null);

  // Legislação state
  const [legQuery, setLegQuery] = useState('');
  const [legDisc, setLegDisc] = useState('ALL');
  const [legStatus, setLegStatus] = useState('ALL');
  const [norms, setNorms] = useState<LegislationNorm[]>([]);
  const [articles, setArticles] = useState<LawArticle[]>([]);
  const [showNewArticleForm, setShowNewArticleForm] = useState(false);
  const [newNormForm, setNewNormForm] = useState({
    show: false,
    discipline: 'Direito Constitucional',
    title: '',
    shortName: '',
    numberAndYear: '',
    officialSourceUrl: 'https://www.planalto.gov.br/ccivil_03/',
  });
  const [newArtForm, setNewArtForm] = useState({
    normId: 'cf88',
    normShortName: 'CF/88',
    discipline: 'Direito Constitucional',
    subject: '',
    articleNumber: '',
    caput: '',
    status: 'VIGENTE' as NormStatus,
    officialSourceUrl: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
  });

  // Jurisprudência state
  const [jurQuery, setJurQuery] = useState('');
  const [jurTribunal, setJurTribunal] = useState('ALL');
  const [jurStatus, setJurStatus] = useState('ALL');
  const [jurisRecords, setJurisRecords] = useState<JurisprudenceRecord[]>([]);
  const [showNewJurForm, setShowNewJurForm] = useState(false);
  const [newJur, setNewJur] = useState({
    tribunal: 'STF' as 'STF' | 'STJ' | 'CNJ' | 'TST',
    category: 'SUMULA_STF' as JurisprudenceCategory,
    identification: '',
    discipline: 'Direito Constitucional',
    subject: '',
    thesis: '',
    summary: '',
    status: 'VIGENTE' as JurisprudenceStatus,
    divergenceNote: '',
    officialSourceUrl: 'https://portal.stf.jus.br/',
  });

  // Fábrica IA & Qualidade state
  const [genParams, setGenParams] = useState({
    discipline: 'Direito Tributário',
    topic: '',
    subtopic: '',
    difficultyLevel: 2 as DifficultyLevel,
    count: 2,
  });
  const [generating, setGenerating] = useState(false);
  const [qFilterStatus, setQFilterStatus] = useState('ALL');
  const [qFilterOrigin, setQFilterOrigin] = useState('ALL');
  const [qFilterDisc, setQFilterDisc] = useState('ALL');
  const [qFilterQuery, setQFilterQuery] = useState('');
  const [questionsList, setQuestionsList] = useState<LegalQuestion[]>([]);
  const [validatingId, setValidatingId] = useState<string | null>(null);
  const [editingQuestion, setEditingQuestion] = useState<LegalQuestion | null>(null);
  const [showManualQForm, setShowManualQForm] = useState(false);
  const [manualQ, setManualQ] = useState({
    subject: 'Direito Constitucional',
    topic: '',
    originType: 'AUTORAL_PROFESSOR' as QuestionOriginType,
    difficultyLevel: 2 as DifficultyLevel,
    statement: '',
    optA: '',
    optB: '',
    optC: '',
    optD: '',
    correctAnswer: 'A' as 'A' | 'B' | 'C' | 'D',
    justification: '',
    whyWrongNote: '',
    statuteCode: 'CF/88',
    statuteArticle: 'Art. 5º',
  });

  // Importador state
  const [impType, setImpType] = useState<'PROVA_OAB' | 'LEGISLACAO' | 'JURISPRUDENCIA'>('PROVA_OAB');
  const [impFormat, setImpFormat] = useState<'TXT' | 'CSV' | 'JSON' | 'PDF'>('TXT');
  const [impFileName, setImpFileName] = useState('material_importado.txt');
  const [impContent, setImpContent] = useState('');
  const [impMeta, setImpMeta] = useState({
    examNumber: '41º Exame',
    year: 2024,
    edition: '2024.2',
    discipline: 'Direito Constitucional',
    normShortName: 'Lei Importada',
    officialSourceUrl: 'https://oab.fgv.br/',
  });
  const [impPreview, setImpPreview] = useState<{
    totalParsed: number;
    duplicatesSkipped: number;
    errors: string[];
    previewItems: any[];
  } | null>(null);
  const [importing, setImporting] = useState(false);
  const [importJobs, setImportJobs] = useState<ImportJobRecord[]>([]);

  // Atualizações & IA state
  const [updatesList, setUpdatesList] = useState<LegalUpdateLog[]>([]);
  const [updateForm, setUpdateForm] = useState({
    entityType: 'LEGISLACAO' as 'LEGISLACAO' | 'JURISPRUDENCIA',
    entityId: '',
    entityLabel: '',
    previousContent: '',
    updatedContent: '',
    source: '',
    affectedDevicesText: '',
    newStatus: 'ALTERADA',
  });

  const notify = (type: 'ok' | 'warn' | 'err', text: string) => {
    setFeedback({ type, text });
    setTimeout(() => setFeedback(null), 7000);
  };

  const loadOverview = async () => {
    setLoadingOverview(true);
    try {
      const ov = await fetchKbOverview();
      setOverview(ov);
    } catch (e: any) {
      notify('err', e?.message || 'Erro ao carregar visão geral da base.');
    } finally {
      setLoadingOverview(false);
    }
  };

  const loadLegislation = async () => {
    const res = await searchLegislation({ query: legQuery, discipline: legDisc, status: legStatus });
    setNorms(res.norms);
    setArticles(res.articles);
  };

  const loadJurisprudence = async () => {
    const recs = await searchJurisprudence({
      query: jurQuery,
      tribunal: jurTribunal,
      status: jurStatus,
    });
    setJurisRecords(recs);
  };

  const loadQuestions = async () => {
    const list = await fetchKbQuestions({
      status: qFilterStatus,
      originType: qFilterOrigin,
      discipline: qFilterDisc,
      query: qFilterQuery,
    });
    setQuestionsList(list);
  };

  const loadJobsAndUpdates = async () => {
    const [jobs, upds] = await Promise.all([fetchImportJobs(), fetchLegalUpdates()]);
    setImportJobs(jobs);
    setUpdatesList(upds);
  };

  useEffect(() => {
    loadOverview();
    loadLegislation();
    loadJurisprudence();
    loadQuestions();
    loadJobsAndUpdates();
  }, []);

  useEffect(() => {
    loadLegislation();
  }, [legQuery, legDisc, legStatus]);

  useEffect(() => {
    loadJurisprudence();
  }, [jurQuery, jurTribunal, jurStatus]);

  useEffect(() => {
    loadQuestions();
  }, [qFilterStatus, qFilterOrigin, qFilterDisc, qFilterQuery]);

  const handleSaveNorm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveNorm({
        discipline: newNormForm.discipline,
        title: newNormForm.title,
        shortName: newNormForm.shortName,
        numberAndYear: newNormForm.numberAndYear,
        officialSourceUrl: newNormForm.officialSourceUrl,
      });
      setNewNormForm({ ...newNormForm, show: false, title: '', shortName: '', numberAndYear: '' });
      await Promise.all([loadLegislation(), loadOverview()]);
      notify('ok', 'Norma legislativa cadastrada na Base Jurídica.');
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao salvar norma.');
    }
  };

  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveArticle(newArtForm);
      setShowNewArticleForm(false);
      setNewArtForm({ ...newArtForm, subject: '', articleNumber: '', caput: '' });
      await Promise.all([loadLegislation(), loadOverview()]);
      notify('ok', 'Dispositivo legal indexado na Base Jurídica.');
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao salvar artigo.');
    }
  };

  const handleSaveJurisprudence = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveJurisprudence(newJur);
      setShowNewJurForm(false);
      setNewJur({ ...newJur, identification: '', subject: '', thesis: '', summary: '', divergenceNote: '' });
      await Promise.all([loadJurisprudence(), loadOverview()]);
      notify('ok', 'Precedente/Súmula registrado na Base Jurídica.');
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao salvar jurisprudência.');
    }
  };

  const handleGenerateGrounded = async () => {
    setGenerating(true);
    try {
      const res = await generateGroundedQuestionsApi(genParams);
      if (res.blocked) {
        notify(
          'warn',
          'Geração bloqueada pela regra de integridade: insuficiência de artigos ou jurisprudência cadastrada para este assunto na base.'
        );
      } else {
        await Promise.all([loadQuestions(), loadOverview(), syncPublishedQuestionsFromServer()]);
        notify(
          'ok',
          `${res.questions.length} questão(ões) inédita(s) gerada(s) com base em ${res.groundingSummary.articlesCount} artigo(s) e ${res.groundingSummary.jurisprudenceCount} julgado(s).`
        );
      }
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao gerar questões fundamentadas.');
    } finally {
      setGenerating(false);
    }
  };

  const handleValidateQuestion = async (id: string) => {
    setValidatingId(id);
    try {
      const res = await runTwoStageValidation(id, true);
      await Promise.all([loadQuestions(), loadOverview(), syncPublishedQuestionsFromServer()]);
      notify('ok', `Validação em 2 estágios concluída: ${res.validation.report.summary}`);
    } catch (err: any) {
      notify('err', err?.message || 'Erro na validação da questão.');
    } finally {
      setValidatingId(null);
    }
  };

  const handleChangeQuestionStatus = async (id: string, status: QuestionValidationStatus) => {
    try {
      await updateQuestionStatus(id, status);
      await Promise.all([loadQuestions(), loadOverview(), syncPublishedQuestionsFromServer()]);
      notify('ok', `Situação da questão atualizada para ${STATUS_BADGES[status].label}.`);
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao alterar situação.');
    }
  };

  const handleCreateManualQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const options = [
        { letter: 'A' as const, text: manualQ.optA },
        { letter: 'B' as const, text: manualQ.optB },
        { letter: 'C' as const, text: manualQ.optC },
        { letter: 'D' as const, text: manualQ.optD },
      ];
      const wrongLetters = options.filter(o => o.letter !== manualQ.correctAnswer);
      await createOrUpdateKbQuestion({
        exam: manualQ.originType === 'OFICIAL_OAB' ? 'Exame de Ordem OAB - FGV' : 'Cadastro Pedagógico JurisMentor',
        examType: 'OAB',
        board: 'FGV',
        year: new Date().getFullYear(),
        subject: manualQ.subject,
        topic: manualQ.topic || 'Tema Específico',
        statement: manualQ.statement,
        options,
        correctAnswer: manualQ.correctAnswer,
        justification: manualQ.justification,
        whyWrong: wrongLetters.map(w => ({
          letter: w.letter,
          explanation: manualQ.whyWrongNote || 'Alternativa incorreta conforme legislação aplicável.',
        })),
        statuteReferences: [
          {
            code: manualQ.statuteCode,
            article: manualQ.statuteArticle,
            textSnippet: manualQ.justification.slice(0, 180),
          },
        ],
        difficulty: manualQ.difficultyLevel === 1 ? 'Fácil' : manualQ.difficultyLevel >= 3 ? 'Difícil' : 'Médio',
        difficultyLevel: manualQ.difficultyLevel,
        originType: manualQ.originType,
      });
      setShowManualQForm(false);
      await Promise.all([loadQuestions(), loadOverview(), syncPublishedQuestionsFromServer()]);
      notify('ok', 'Questão cadastrada e validada no banco.');
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao cadastrar questão.');
    }
  };

  const handleSaveEditedQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuestion) return;
    try {
      await createOrUpdateKbQuestion(editingQuestion);
      setEditingQuestion(null);
      await Promise.all([loadQuestions(), loadOverview(), syncPublishedQuestionsFromServer()]);
      notify('ok', 'Questão atualizada com preservação do histórico de gabarito.');
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao editar questão.');
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImpFileName(file.name);
    const lower = file.name.toLowerCase();

    try {
      if (lower.endsWith('.pdf')) {
        setImpFormat('PDF');
        notify('warn', 'Extraindo texto do PDF no servidor...');
        const extracted = await extractPdfTextFromFile(file);
        setImpContent(extracted.text);
        notify('ok', `PDF extraído (${extracted.pageCount} página(s)). Clique em Pré-visualizar para conferir os registros.`);
      } else {
        if (lower.endsWith('.json')) setImpFormat('JSON');
        else if (lower.endsWith('.csv')) setImpFormat('CSV');
        else setImpFormat('TXT');
        const txt = await file.text();
        setImpContent(txt);
        notify('ok', `Arquivo ${file.name} carregado no editor de importação.`);
      }
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao ler arquivo.');
    }
  };

  const handleRunImport = async (dryRun: boolean) => {
    setImporting(true);
    try {
      const res = await processImportApi({
        importType: impType,
        format: impFormat,
        fileName: impFileName,
        content: impContent,
        dryRun,
        metadata: impMeta,
      });
      setImpPreview({
        totalParsed: res.totalParsed,
        duplicatesSkipped: res.duplicatesSkipped,
        errors: res.errors,
        previewItems: res.previewItems,
      });
      if (!dryRun) {
        await Promise.all([
          loadOverview(),
          loadQuestions(),
          loadLegislation(),
          loadJurisprudence(),
          loadJobsAndUpdates(),
          syncPublishedQuestionsFromServer(),
        ]);
        notify(
          'ok',
          `Importação concluída: ${res.insertedCount} inserido(s), ${res.duplicatesSkipped} duplicado(s) ignorado(s).`
        );
      } else {
        notify(
          'warn',
          `Prévia: ${res.totalParsed} item(ns) detectado(s), ${res.duplicatesSkipped} duplicidade(s).`
        );
      }
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao processar importação.');
    } finally {
      setImporting(false);
    }
  };

  const handleRecordLegalUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const devices = updateForm.affectedDevicesText
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);
      const log = await recordLegalUpdateApi({
        entityType: updateForm.entityType,
        entityId: updateForm.entityId || `upd_manual_${Date.now()}`,
        entityLabel: updateForm.entityLabel,
        previousContent: updateForm.previousContent,
        updatedContent: updateForm.updatedContent,
        source: updateForm.source,
        affectedDevices: devices,
        newStatus: updateForm.newStatus,
      });
      setUpdateForm({
        ...updateForm,
        entityId: '',
        entityLabel: '',
        previousContent: '',
        updatedContent: '',
        source: '',
        affectedDevicesText: '',
      });
      await Promise.all([
        loadOverview(),
        loadLegislation(),
        loadJurisprudence(),
        loadQuestions(),
        loadJobsAndUpdates(),
        syncPublishedQuestionsFromServer(),
      ]);
      notify(
        'ok',
        `Atualização registrada! ${log.affectedQuestionIds.length} questão(ões) vinculada(s) marcada(s) como Desatualizada preservando o histórico.`
      );
    } catch (err: any) {
      notify('err', err?.message || 'Erro ao registrar atualização.');
    }
  };

  const disciplines = overview?.disciplines || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 animate-in fade-in">
      {/* Header Summary Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Database className="w-5 h-5 text-amber-400" />
              <h1 className="font-serif text-2xl font-bold text-white">
                Base Jurídica & Consola de Qualidade
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Acervo estruturado de legislação (Planalto), jurisprudência (STF/STJ/CNJ), questões OAB/FGV, motor de geração fundamentada e auditoria em 2 estágios.
            </p>
          </div>

          {overview && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs tabular-nums">
              <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Normas · Artigos</span>
                <strong className="text-white font-mono text-sm">
                  {overview.counts.norms} · {overview.counts.articles}
                </strong>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Jurisprudência</span>
                <strong className="text-purple-300 font-mono text-sm">{overview.counts.jurisprudence}</strong>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Questões Publicadas</span>
                <strong className="text-emerald-400 font-mono text-sm">
                  {overview.counts.questionsPublished}/{overview.counts.questionsTotal}
                </strong>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Revisão / Desatualiz.</span>
                <strong className="text-amber-400 font-mono text-sm">
                  {overview.counts.questionsAwaitingReview} / {overview.counts.questionsOutdated}
                </strong>
              </div>
            </div>
          )}
        </div>

        {/* Sub-navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-5 mt-5 border-t border-slate-800 scrollbar-none text-xs">
          {[
            { id: 'legislacao', label: 'Legislação (Planalto)', icon: BookOpen },
            { id: 'jurisprudencia', label: 'Jurisprudência (STF/STJ/CNJ)', icon: Scale },
            { id: 'fabrica_qualidade', label: 'Fábrica IA & Qualidade', icon: ShieldCheck },
            { id: 'importador', label: 'Importador (PDF/CSV/JSON)', icon: Upload },
            { id: 'atualizacoes_ia', label: 'Atualizações & Telemetria IA', icon: History },
          ].map(tab => {
            const Icon = tab.icon;
            const active = subTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSubTab(tab.id as AdminSubTab)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  active
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div
          className={`p-4 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3 ${
            feedback.type === 'ok'
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : feedback.type === 'warn'
              ? 'bg-amber-950/40 border-amber-500/40 text-amber-200'
              : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
          }`}
        >
          <span>{feedback.text}</span>
          <button onClick={() => setFeedback(null)} className="text-slate-400 hover:text-white cursor-pointer">
            ✕
          </button>
        </div>
      )}

      {/* =================================================================== */}
      {/* SUB-TAB 1: LEGISLAÇÃO BRASILEIRA                                    */}
      {/* =================================================================== */}
      {subTab === 'legislacao' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[260px]">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={legQuery}
                    onChange={(e) => setLegQuery(e.target.value)}
                    placeholder="Buscar código, artigo (ex: Art. 150) ou texto legal..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <select
                  value={legDisc}
                  onChange={(e) => setLegDisc(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="ALL">Todas as Disciplinas</option>
                  {disciplines.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <select
                  value={legStatus}
                  onChange={(e) => setLegStatus(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="ALL">Qualquer Vigência</option>
                  <option value="VIGENTE">Vigente</option>
                  <option value="ALTERADA">Alterada</option>
                  <option value="REVOGADA">Revogada</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setNewNormForm(p => ({ ...p, show: !p.show }))}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-amber-400" />
                  Nova Norma
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewArticleForm(p => !p)}
                  className="px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-xs font-bold text-slate-950 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Novo Artigo
                </button>
              </div>
            </div>

            {/* Form Nova Norma */}
            {newNormForm.show && (
              <form onSubmit={handleSaveNorm} className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <input
                  required
                  placeholder="Título oficial da norma (ex: Lei de Falências)"
                  value={newNormForm.title}
                  onChange={e => setNewNormForm({ ...newNormForm, title: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <input
                  required
                  placeholder="Sigla (ex: LREF 11.101)"
                  value={newNormForm.shortName}
                  onChange={e => setNewNormForm({ ...newNormForm, shortName: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <input
                  required
                  placeholder="Disciplina"
                  value={newNormForm.discipline}
                  onChange={e => setNewNormForm({ ...newNormForm, discipline: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <input
                  placeholder="Número e ano (ex: Lei nº 11.101/2005)"
                  value={newNormForm.numberAndYear}
                  onChange={e => setNewNormForm({ ...newNormForm, numberAndYear: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <input
                  placeholder="URL oficial Planalto"
                  value={newNormForm.officialSourceUrl}
                  onChange={e => setNewNormForm({ ...newNormForm, officialSourceUrl: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white sm:col-span-2"
                />
                <button type="submit" className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold cursor-pointer">
                  Salvar Norma
                </button>
              </form>
            )}

            {/* Form Novo Artigo */}
            {showNewArticleForm && (
              <form onSubmit={handleSaveArticle} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <select
                    value={newArtForm.normId}
                    onChange={e => {
                      const found = norms.find(n => n.id === e.target.value);
                      setNewArtForm({
                        ...newArtForm,
                        normId: e.target.value,
                        normShortName: found?.shortName || e.target.value,
                        discipline: found?.discipline || newArtForm.discipline,
                        officialSourceUrl: found?.officialSourceUrl || newArtForm.officialSourceUrl,
                      });
                    }}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    {norms.map(n => (
                      <option key={n.id} value={n.id}>{n.shortName} ({n.discipline})</option>
                    ))}
                  </select>
                  <input
                    required
                    placeholder="Artigo (ex: Art. 186)"
                    value={newArtForm.articleNumber}
                    onChange={e => setNewArtForm({ ...newArtForm, articleNumber: e.target.value })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                  <input
                    required
                    placeholder="Assunto (ex: Ato Ilícito)"
                    value={newArtForm.subject}
                    onChange={e => setNewArtForm({ ...newArtForm, subject: e.target.value })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                  <select
                    value={newArtForm.status}
                    onChange={e => setNewArtForm({ ...newArtForm, status: e.target.value as NormStatus })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="VIGENTE">Vigente</option>
                    <option value="ALTERADA">Alterada</option>
                    <option value="REVOGADA">Revogada</option>
                  </select>
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Texto oficial do caput do artigo..."
                  value={newArtForm.caput}
                  onChange={e => setNewArtForm({ ...newArtForm, caput: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <button type="submit" className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold cursor-pointer">
                  Indexar Artigo na Biblioteca
                </button>
              </form>
            )}
          </div>

          {/* Normas & Artigos Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Normas Catalogadas */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h3 className="font-serif font-bold text-base text-white">
                Códigos, Leis e Estatutos ({norms.length})
              </h3>
              <div className="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
                {norms.map(n => (
                  <div key={n.id} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-amber-400 text-xs">{n.shortName}</span>
                      <span className={`text-[11px] font-semibold ${
                        n.status === 'VIGENTE' ? 'text-emerald-400' : n.status === 'ALTERADA' ? 'text-amber-300' : 'text-rose-400'
                      }`}>
                        {n.status}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-white">{n.title}</div>
                    <div className="text-[11px] text-slate-400">
                      {n.discipline} · {n.numberAndYear}
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                      <span>Verificado: {n.lastVerifiedAt}</span>
                      <a
                        href={n.officialSourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                      >
                        Planalto <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Artigos Individualizados + Histórico Temporal */}
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h3 className="font-serif font-bold text-base text-white">
                Dispositivos Legais Individualizados ({articles.length})
              </h3>
              <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
                {articles.map(a => (
                  <div key={a.id} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="font-bold text-white">
                        <span className="text-amber-400">{a.normShortName} · {a.articleNumber}</span>
                        <span className="text-slate-500 mx-2">·</span>
                        <span>{a.subject}</span>
                      </div>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                        a.status === 'VIGENTE'
                          ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                          : a.status === 'ALTERADA'
                          ? 'text-amber-300 border-amber-500/30 bg-amber-500/10'
                          : 'text-rose-400 border-rose-500/30 bg-rose-500/10'
                      }`}>
                        {a.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{a.caput}</p>

                    {a.paragraphs && a.paragraphs.length > 0 && (
                      <div className="text-xs text-slate-400 space-y-1 pl-3 border-l border-slate-800">
                        {a.paragraphs.map((p, idx) => (
                          <div key={idx}>{p}</div>
                        ))}
                      </div>
                    )}

                    {a.amendmentNote && (
                      <div className="text-[11px] text-amber-300">
                        Alteração registrada: {a.amendmentNote}
                      </div>
                    )}

                    {a.historicalVersions && a.historicalVersions.length > 0 && (
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                        <strong className="text-slate-300 block">Histórico Legislativo (Redação Anterior):</strong>
                        {a.historicalVersions.map((hv, idx) => (
                          <div key={idx}>
                            <span className="text-amber-400">{hv.periodLabel} ({hv.amendingNorm}):</span> {hv.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* SUB-TAB 2: JURISPRUDÊNCIA (STF / STJ / CNJ / TST)                  */}
      {/* =================================================================== */}
      {subTab === 'jurisprudencia' && (
        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 flex-1">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={jurQuery}
                    onChange={e => setJurQuery(e.target.value)}
                    placeholder="Buscar súmula, tema de repercussão geral, repetitivo ou tese..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white"
                  />
                </div>
                <select
                  value={jurTribunal}
                  onChange={e => setJurTribunal(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="ALL">Todos os Tribunais</option>
                  <option value="STF">STF</option>
                  <option value="STJ">STJ</option>
                  <option value="CNJ">CNJ</option>
                  <option value="TST">TST</option>
                </select>
                <select
                  value={jurStatus}
                  onChange={e => setJurStatus(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="ALL">Todas as Situações</option>
                  <option value="VIGENTE">Vigente / Pacífica</option>
                  <option value="CONTROVERTIDA">Controvertida / Com Ressalva</option>
                  <option value="SUPERADA">Superada</option>
                  <option value="CANCELADA">Cancelada</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => setShowNewJurForm(p => !p)}
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Novo Precedente / Súmula
              </button>
            </div>

            {showNewJurForm && (
              <form onSubmit={handleSaveJurisprudence} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <select
                    value={newJur.tribunal}
                    onChange={e => setNewJur({ ...newJur, tribunal: e.target.value as any })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="STF">STF</option>
                    <option value="STJ">STJ</option>
                    <option value="CNJ">CNJ</option>
                    <option value="TST">TST</option>
                  </select>
                  <select
                    value={newJur.category}
                    onChange={e => setNewJur({ ...newJur, category: e.target.value as JurisprudenceCategory })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="SUMULA_VINCULANTE">Súmula Vinculante</option>
                    <option value="SUMULA_STF">Súmula STF</option>
                    <option value="SUMULA_STJ">Súmula STJ</option>
                    <option value="REPERCUSSAO_GERAL">Repercussão Geral</option>
                    <option value="RECURSO_REPETITIVO">Recurso Repetitivo</option>
                    <option value="INFORMATIVO">Informativo</option>
                    <option value="TESE">Tese Jurídica</option>
                  </select>
                  <input
                    required
                    placeholder="Identificação (ex: Súmula 590 STJ)"
                    value={newJur.identification}
                    onChange={e => setNewJur({ ...newJur, identification: e.target.value })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                  <select
                    value={newJur.status}
                    onChange={e => setNewJur({ ...newJur, status: e.target.value as JurisprudenceStatus })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="VIGENTE">Vigente</option>
                    <option value="CONTROVERTIDA">Controvertida</option>
                    <option value="SUPERADA">Superada</option>
                    <option value="CANCELADA">Cancelada</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    placeholder="Disciplina"
                    value={newJur.discipline}
                    onChange={e => setNewJur({ ...newJur, discipline: e.target.value })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                  <input
                    required
                    placeholder="Assunto"
                    value={newJur.subject}
                    onChange={e => setNewJur({ ...newJur, subject: e.target.value })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>
                <textarea
                  required
                  rows={2}
                  placeholder="Tese jurídica oficial..."
                  value={newJur.thesis}
                  onChange={e => setNewJur({ ...newJur, thesis: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <input
                  placeholder="Nota de divergência / superação (se aplicável)"
                  value={newJur.divergenceNote}
                  onChange={e => setNewJur({ ...newJur, divergenceNote: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <button type="submit" className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold cursor-pointer">
                  Salvar Jurisprudência
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jurisRecords.map(j => (
              <div key={j.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-purple-300">
                    {j.tribunal} · {j.identification}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded border text-[11px] font-bold ${
                      j.status === 'VIGENTE'
                        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                        : j.status === 'CONTROVERTIDA'
                        ? 'text-amber-300 border-amber-500/30 bg-amber-500/10'
                        : 'text-rose-400 border-rose-500/30 bg-rose-500/10'
                    }`}
                  >
                    {j.status}
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  {j.discipline} · {j.subject}
                </div>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">{j.thesis}</p>
                {j.divergenceNote && (
                  <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200">
                    <strong>Alerta Jurisprudencial:</strong> {j.divergenceNote}
                  </div>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-500">
                  <span>Julg.: {j.judgmentDate} · Verificado: {j.lastVerifiedAt}</span>
                  <a
                    href={j.officialSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                  >
                    Fonte Oficial <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* SUB-TAB 3: FÁBRICA DE QUESTÕES IA & CONTROLE DE QUALIDADE           */}
      {/* =================================================================== */}
      {subTab === 'fabrica_qualidade' && (
        <div className="space-y-6">
          {/* Gerador Fundamentado & Regras de Qualidade */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="font-serif font-bold text-base text-white">
                  Gerador de Questões Inéditas Fundamentadas na Base
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Antes de elaborar, o motor consulta artigos vigentes e súmulas indexadas na Base Jurídica. Caso não haja fontes suficientes, a geração é bloqueada automaticamente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <select
                  value={genParams.discipline}
                  onChange={e => setGenParams({ ...genParams, discipline: e.target.value })}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                >
                  {disciplines.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <input
                  placeholder="Assunto (ex: Imunidade Recíproca)"
                  value={genParams.topic}
                  onChange={e => setGenParams({ ...genParams, topic: e.target.value })}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
                <input
                  placeholder="Subassunto (opcional)"
                  value={genParams.subtopic}
                  onChange={e => setGenParams({ ...genParams, subtopic: e.target.value })}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
                <select
                  value={genParams.difficultyLevel}
                  onChange={e => setGenParams({ ...genParams, difficultyLevel: Number(e.target.value) as DifficultyLevel })}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                >
                  <option value={1}>Nível 1 · Básico</option>
                  <option value={2}>Nível 2 · Intermediário (OAB)</option>
                  <option value={3}>Nível 3 · Avançado</option>
                  <option value={4}>Nível 4 · Desafio OAB</option>
                </select>
                <select
                  value={genParams.count}
                  onChange={e => setGenParams({ ...genParams, count: Number(e.target.value) })}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                >
                  <option value={1}>1 Questão</option>
                  <option value={2}>2 Questões</option>
                  <option value={3}>3 Questões</option>
                  <option value={4}>4 Questões</option>
                </select>
                <button
                  type="button"
                  disabled={generating}
                  onClick={handleGenerateGrounded}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${generating ? 'animate-spin' : ''}`} />
                  <span>{generating ? 'Gerando...' : 'Gerar Fundamentadas'}</span>
                </button>
              </div>
            </div>

            {/* Regras de Qualidade */}
            {overview && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 text-xs">
                <h3 className="font-serif font-bold text-base text-white">Regras de Controle (Módulo 8)</h3>
                <label className="flex items-start gap-2.5 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={overview.qualityConfig.blockGenerationWithoutGroundedSources}
                    onChange={async e => {
                      await updateQualityConfig({ blockGenerationWithoutGroundedSources: e.target.checked });
                      await loadOverview();
                    }}
                    className="mt-0.5 accent-amber-500"
                  />
                  <span>Bloquear geração sem fontes legais/jurisprudenciais na base</span>
                </label>
                <label className="flex items-start gap-2.5 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={overview.qualityConfig.requireHumanApprovalBeforePublish}
                    onChange={async e => {
                      await updateQualityConfig({ requireHumanApprovalBeforePublish: e.target.checked });
                      await loadOverview();
                    }}
                    className="mt-0.5 accent-amber-500"
                  />
                  <span>Exigir aprovação manual antes de publicar inéditas de IA</span>
                </label>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 tabular-nums">
                  Distribuição atual por nível: N1={overview.questionsByLevel[1] || 0} · N2={overview.questionsByLevel[2] || 0} · N3={overview.questionsByLevel[3] || 0} · N4={overview.questionsByLevel[4] || 0}
                </div>
              </div>
            )}
          </div>

          {/* Lista & Auditoria de Questões */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 flex-1">
                <input
                  value={qFilterQuery}
                  onChange={e => setQFilterQuery(e.target.value)}
                  placeholder="Filtrar enunciado, assunto ou exame..."
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white min-w-[200px] flex-1"
                />
                <select
                  value={qFilterStatus}
                  onChange={e => setQFilterStatus(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="ALL">Todas as Situações</option>
                  <option value="PUBLICADA">Publicada</option>
                  <option value="AGUARDANDO_REVISAO">Aguardando Revisão</option>
                  <option value="DESATUALIZADA">Desatualizada</option>
                  <option value="SUSPENSA">Suspensa</option>
                </select>
                <select
                  value={qFilterOrigin}
                  onChange={e => setQFilterOrigin(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="ALL">Todas as Origens</option>
                  <option value="OFICIAL_OAB">Oficiais OAB/FGV</option>
                  <option value="INEDITA_IA">Inéditas IA</option>
                  <option value="AUTORAL_PROFESSOR">Autorais Professor</option>
                  <option value="ACADEMICA">Acadêmicas</option>
                </select>
                <select
                  value={qFilterDisc}
                  onChange={e => setQFilterDisc(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="ALL">Todas as Disciplinas</option>
                  {disciplines.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={() => setShowManualQForm(p => !p)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-amber-400" />
                Cadastrar Questão Manual
              </button>
            </div>

            {showManualQForm && (
              <form onSubmit={handleCreateManualQuestion} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  <select
                    value={manualQ.subject}
                    onChange={e => setManualQ({ ...manualQ, subject: e.target.value })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    {disciplines.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <input
                    required
                    placeholder="Assunto"
                    value={manualQ.topic}
                    onChange={e => setManualQ({ ...manualQ, topic: e.target.value })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                  <select
                    value={manualQ.originType}
                    onChange={e => setManualQ({ ...manualQ, originType: e.target.value as QuestionOriginType })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="AUTORAL_PROFESSOR">Autoral Professor</option>
                    <option value="OFICIAL_OAB">Oficial OAB/FGV</option>
                    <option value="ACADEMICA">Acadêmica</option>
                  </select>
                  <select
                    value={manualQ.correctAnswer}
                    onChange={e => setManualQ({ ...manualQ, correctAnswer: e.target.value as any })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="A">Gabarito: A</option>
                    <option value="B">Gabarito: B</option>
                    <option value="C">Gabarito: C</option>
                    <option value="D">Gabarito: D</option>
                  </select>
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Enunciado completo (mínimo 50 caracteres)..."
                  value={manualQ.statement}
                  onChange={e => setManualQ({ ...manualQ, statement: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input required placeholder="Alternativa A" value={manualQ.optA} onChange={e => setManualQ({ ...manualQ, optA: e.target.value })} className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white" />
                  <input required placeholder="Alternativa B" value={manualQ.optB} onChange={e => setManualQ({ ...manualQ, optB: e.target.value })} className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white" />
                  <input required placeholder="Alternativa C" value={manualQ.optC} onChange={e => setManualQ({ ...manualQ, optC: e.target.value })} className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white" />
                  <input required placeholder="Alternativa D" value={manualQ.optD} onChange={e => setManualQ({ ...manualQ, optD: e.target.value })} className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white" />
                </div>
                <textarea
                  required
                  rows={2}
                  placeholder="Fundamentação jurídica e citação legal..."
                  value={manualQ.justification}
                  onChange={e => setManualQ({ ...manualQ, justification: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <button type="submit" className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold cursor-pointer">
                  Salvar e Validar Questão
                </button>
              </form>
            )}

            {/* Modal inline de edição */}
            {editingQuestion && (
              <form onSubmit={handleSaveEditedQuestion} className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/40 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <strong className="text-amber-300">Editando Questão: {editingQuestion.id}</strong>
                  <button type="button" onClick={() => setEditingQuestion(null)} className="text-slate-400 hover:text-white cursor-pointer">Fechar</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    value={editingQuestion.topic}
                    onChange={e => setEditingQuestion({ ...editingQuestion, topic: e.target.value })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                  <select
                    value={editingQuestion.correctAnswer}
                    onChange={e => setEditingQuestion({ ...editingQuestion, correctAnswer: e.target.value as any })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="A">Gabarito A</option>
                    <option value="B">Gabarito B</option>
                    <option value="C">Gabarito C</option>
                    <option value="D">Gabarito D</option>
                  </select>
                  <select
                    value={editingQuestion.validationStatus || 'PUBLICADA'}
                    onChange={e => setEditingQuestion({ ...editingQuestion, validationStatus: e.target.value as any })}
                    className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="PUBLICADA">Publicada</option>
                    <option value="AGUARDANDO_REVISAO">Aguardando Revisão</option>
                    <option value="SUSPENSA">Suspensa</option>
                    <option value="DESATUALIZADA">Desatualizada</option>
                  </select>
                </div>
                <textarea
                  rows={2}
                  value={editingQuestion.justification}
                  onChange={e => setEditingQuestion({ ...editingQuestion, justification: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <button type="submit" className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold cursor-pointer">
                  Salvar Alterações
                </button>
              </form>
            )}

            <div className="text-xs text-slate-400 tabular-nums">
              Exibindo {Math.min(questionsList.length, 40)} de {questionsList.length} questões filtradas
            </div>

            <div className="space-y-3 max-h-[540px] overflow-y-auto pr-1">
              {questionsList.slice(0, 40).map(q => {
                const st = (q.validationStatus || 'PUBLICADA') as QuestionValidationStatus;
                const badge = STATUS_BADGES[st] || STATUS_BADGES.PUBLICADA;
                return (
                  <div key={q.id} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="text-slate-300 font-medium">
                        <span className="text-amber-400 font-bold">{ORIGIN_LABELS[q.originType || 'AUTORAL_PROFESSOR']}</span>
                        <span className="mx-2 text-slate-600">·</span>
                        <span>{q.subject}</span>
                        <span className="mx-2 text-slate-600">·</span>
                        <span className="text-slate-400">{q.topic}</span>
                        <span className="mx-2 text-slate-600">·</span>
                        <span className="font-mono text-slate-400">Nível {q.difficultyLevel || 2}</span>
                      </div>

                      <span className={`px-2 py-0.5 rounded border text-[11px] font-bold ${badge.cls}`}>
                        {badge.label}
                      </span>
                    </div>

                    <p className="text-xs text-slate-200 line-clamp-2">{q.statement}</p>

                    {q.validationReport && (
                      <div className="text-[11px] text-slate-400">
                        <strong className="text-sky-300">Auditoria ({q.validationReport.score}/100):</strong>{' '}
                        {q.validationReport.summary}
                      </div>
                    )}

                    {q.gabaritoHistory && q.gabaritoHistory.length > 0 && (
                      <div className="text-[11px] text-amber-300">
                        Histórico de gabarito: {q.gabaritoHistory.map(g => `${g.previousAnswer}→${g.newAnswer} (${g.date.slice(0, 10)})`).join(' · ')}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-[11px]">
                      <button
                        type="button"
                        onClick={() => handleValidateQuestion(q.id)}
                        disabled={validatingId === q.id}
                        className="px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 cursor-pointer flex items-center gap-1"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {validatingId === q.id ? 'Auditando...' : 'Validar (2 Estágios)'}
                      </button>
                      {st !== 'PUBLICADA' && (
                        <button
                          type="button"
                          onClick={() => handleChangeQuestionStatus(q.id, 'PUBLICADA')}
                          className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-pointer flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" /> Publicar
                        </button>
                      )}
                      {st !== 'SUSPENSA' && (
                        <button
                          type="button"
                          onClick={() => handleChangeQuestionStatus(q.id, 'SUSPENSA')}
                          className="px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 cursor-pointer flex items-center gap-1"
                        >
                          <PauseCircle className="w-3.5 h-3.5" /> Suspender
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setEditingQuestion(q)}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer ml-auto"
                      >
                        Editar / Alterar Gabarito
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* SUB-TAB 4: IMPORTADOR (PDF / CSV / JSON / TXT)                      */}
      {/* =================================================================== */}
      {subTab === 'importador' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h3 className="font-serif font-bold text-base text-white flex items-center gap-2">
              <Upload className="w-4 h-4 text-amber-400" />
              Importação Estruturada de Documentos Jurídicos
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Tipo de Acervo</label>
                <select
                  value={impType}
                  onChange={e => setImpType(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                >
                  <option value="PROVA_OAB">Prova Oficial OAB / Questões</option>
                  <option value="LEGISLACAO">Legislação (Artigos de Lei)</option>
                  <option value="JURISPRUDENCIA">Jurisprudência (Súmulas/Teses)</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Formato</label>
                <select
                  value={impFormat}
                  onChange={e => setImpFormat(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                >
                  <option value="TXT">Texto Bruto / Extração FGV</option>
                  <option value="CSV">Planilha CSV</option>
                  <option value="JSON">JSON Estruturado</option>
                  <option value="PDF">PDF Oficial (extraído via pdfjs)</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Arquivo (.pdf, .csv, .json, .txt)</label>
                <input
                  type="file"
                  accept=".pdf,.csv,.json,.txt"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-slate-300 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-slate-800 file:text-amber-300 cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
              <input
                placeholder="Exame (ex: 41º Exame)"
                value={impMeta.examNumber}
                onChange={e => setImpMeta({ ...impMeta, examNumber: e.target.value })}
                className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
              />
              <input
                type="number"
                placeholder="Ano"
                value={impMeta.year}
                onChange={e => setImpMeta({ ...impMeta, year: Number(e.target.value) })}
                className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
              />
              <input
                placeholder="Sigla Norma / Disciplina"
                value={impType === 'LEGISLACAO' ? impMeta.normShortName : impMeta.discipline}
                onChange={e =>
                  impType === 'LEGISLACAO'
                    ? setImpMeta({ ...impMeta, normShortName: e.target.value })
                    : setImpMeta({ ...impMeta, discipline: e.target.value })
                }
                className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
              />
              <input
                placeholder="Fonte oficial (URL)"
                value={impMeta.officialSourceUrl}
                onChange={e => setImpMeta({ ...impMeta, officialSourceUrl: e.target.value })}
                className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
              />
            </div>

            <textarea
              rows={8}
              value={impContent}
              onChange={e => setImpContent(e.target.value)}
              placeholder="Cole aqui o texto extraído de prova (Questão 01 ... A) ... B) ... GABARITO: A), texto de lei do Planalto (Art. 1º ...), CSV ou JSON..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 font-mono"
            />

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={importing || !impContent.trim()}
                onClick={() => handleRunImport(true)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer disabled:opacity-50"
              >
                Pré-visualizar & Checar Duplicidade
              </button>
              <button
                type="button"
                disabled={importing || !impContent.trim()}
                onClick={() => handleRunImport(false)}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold cursor-pointer disabled:opacity-50"
              >
                {importing ? 'Processando...' : 'Importar e Armazenar no Banco'}
              </button>
            </div>

            {impPreview && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-amber-300 tabular-nums">
                  Resultado do Parser: {impPreview.totalParsed} extraído(s) · {impPreview.duplicatesSkipped} duplicidade(s) · {impPreview.errors.length} aviso(s)
                </div>
                {impPreview.errors.length > 0 && (
                  <div className="text-rose-300 space-y-0.5">
                    {impPreview.errors.slice(0, 5).map((er, i) => (
                      <div key={i}>• {er}</div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="font-serif font-bold text-base text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-400" />
              Histórico de Importações ({importJobs.length})
            </h3>
            <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1 text-xs">
              {importJobs.length === 0 ? (
                <p className="text-slate-500">Nenhuma importação executada nesta sessão ainda.</p>
              ) : (
                importJobs.map(job => (
                  <div key={job.id} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white truncate">{job.fileName}</span>
                      <span className="text-emerald-400 font-mono text-[11px]">{job.format}</span>
                    </div>
                    <div className="text-slate-400 tabular-nums">
                      {job.importType} · +{job.insertedCount} inseridos · {job.duplicatesSkipped} dup.
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">{job.createdAt.slice(0, 19)}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* SUB-TAB 5: ATUALIZAÇÕES LEGISLATIVAS & TELEMETRIA IA (MÓD. 11 E 12) */}
      {/* =================================================================== */}
      {subTab === 'atualizacoes_ia' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Registrar Atualização Legislativa/Jurisprudencial */}
            <form onSubmit={handleRecordLegalUpdate} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 text-xs">
              <h3 className="font-serif font-bold text-base text-white flex items-center gap-2">
                <History className="w-4 h-4 text-amber-400" />
                Registrar Alteração Legislativa ou Superação (Módulo 11)
              </h3>
              <p className="text-slate-400">
                Registra antes/depois, fonte oficial e sinaliza automaticamente questões vinculadas como <strong>Desatualizada</strong> preservando a fundamentação histórica.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={updateForm.entityType}
                  onChange={e => setUpdateForm({ ...updateForm, entityType: e.target.value as any })}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                >
                  <option value="LEGISLACAO">Legislação</option>
                  <option value="JURISPRUDENCIA">Jurisprudência</option>
                </select>
                <input
                  required
                  placeholder="Rótulo (ex: Art. 150 CF/88 ou Súmula X)"
                  value={updateForm.entityLabel}
                  onChange={e => setUpdateForm({ ...updateForm, entityLabel: e.target.value })}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  placeholder="ID do dispositivo na base (opcional)"
                  value={updateForm.entityId}
                  onChange={e => setUpdateForm({ ...updateForm, entityId: e.target.value })}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
                <input
                  required
                  placeholder="Dispositivos afetados (vírgula: Art. 150, EC 132)"
                  value={updateForm.affectedDevicesText}
                  onChange={e => setUpdateForm({ ...updateForm, affectedDevicesText: e.target.value })}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <input
                required
                placeholder="Fonte oficial da alteração (ex: EC nº 132/2023 - Planalto)"
                value={updateForm.source}
                onChange={e => setUpdateForm({ ...updateForm, source: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
              />
              <textarea
                rows={2}
                placeholder="Conteúdo anterior..."
                value={updateForm.previousContent}
                onChange={e => setUpdateForm({ ...updateForm, previousContent: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
              />
              <textarea
                required
                rows={2}
                placeholder="Novo texto / tese atualizada..."
                value={updateForm.updatedContent}
                onChange={e => setUpdateForm({ ...updateForm, updatedContent: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
              />
              <button type="submit" className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold cursor-pointer">
                Registrar Atualização & Sinalizar Questões
              </button>
            </form>

            {/* Telemetria & Eficiência de IA (Módulo 12) */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 text-xs">
              <h3 className="font-serif font-bold text-base text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-sky-400" />
                Eficiência, Cache e Consumo de IA (Módulo 12)
              </h3>
              {overview && (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 tabular-nums">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block">Chamadas</span>
                      <strong className="text-white text-base font-mono">{overview.aiStats.totalCalls}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block">Taxa de Cache</span>
                      <strong className="text-emerald-400 text-base font-mono">{overview.aiStats.cacheHitRate}%</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block">Tokens Totais</span>
                      <strong className="text-amber-400 text-base font-mono">{overview.aiStats.totalTokens}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block">Falhas</span>
                      <strong className="text-rose-400 text-base font-mono">{overview.aiStats.failedCalls}</strong>
                    </div>
                  </div>
                  <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                    {overview.aiStats.recentLogs.length === 0 ? (
                      <p className="text-slate-500">Nenhuma chamada registrada ainda nesta sessão.</p>
                    ) : (
                      overview.aiStats.recentLogs.map(log => (
                        <div key={log.id} className="flex items-center justify-between py-1.5 border-b border-slate-800/70 tabular-nums">
                          <span className="text-slate-300 truncate">{log.endpoint}</span>
                          <span className="text-slate-400 font-mono">
                            {log.cached ? 'CACHE' : `${log.totalTokens} tok`} · {log.durationMs}ms
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Log de Atualizações Legislativas */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 text-xs">
            <h3 className="font-serif font-bold text-base text-white">
              Histórico de Alterações Normativas e Impacto em Questões ({updatesList.length})
            </h3>
            {updatesList.length === 0 ? (
              <p className="text-slate-500">Nenhuma alteração normativa registrada posteriormente à carga inicial.</p>
            ) : (
              <div className="space-y-2.5">
                {updatesList.map(u => (
                  <div key={u.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <strong className="text-amber-300">{u.entityLabel} ({u.entityType})</strong>
                      <span className="text-slate-400 font-mono">{u.incorporatedAt.slice(0, 10)}</span>
                    </div>
                    <div className="text-slate-300">Fonte: {u.source}</div>
                    <div className="text-slate-400">
                      Questões marcadas como desatualizadas: <strong className="text-orange-400">{u.affectedQuestionIds.length}</strong>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
