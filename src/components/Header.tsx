import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Scale, BookOpen, Calendar, BarChart3, AlertOctagon, Sparkles, Award, Flame,
  Smartphone, Crosshair, Database, Download, Loader2, Check,
  LogOut, AlertTriangle, ExternalLink, RefreshCw, Copy, X
} from 'lucide-react';
import { useFirebase } from '../contexts/FirebaseContext';
import firebaseConfig from '../../firebase-applet-config.json';

interface HeaderProps {
  activeTab: 'simulados' | 'diagnostico' | 'cronograma' | 'desempenho' | 'erros' | 'flashcards' | 'base_admin' | 'professor';
  setActiveTab: (tab: 'simulados' | 'diagnostico' | 'cronograma' | 'desempenho' | 'erros' | 'flashcards' | 'base_admin' | 'professor') => void;
  streakDays: number;
  cadernoErrosCount: number;
  accuracyRate: number;
  totalAnswered: number;
  onOpenAccessAnywhere: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  streakDays,
  cadernoErrosCount,
  accuracyRate,
  totalAnswered,
  onOpenAccessAnywhere,
}) => {
  const [isDownloadingZip, setIsDownloadingZip] = useState(false);
  const [copiedDomain, setCopiedDomain] = useState(false);
  const isDevOrAiStudioEnv =
    import.meta.env.DEV ||
    (typeof window !== 'undefined' &&
      (window.location.hostname.startsWith('ais-dev-') ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'));
  const {
    user,
    authReady,
    isSigningIn,
    syncStatus,
    authError,
    authErrorDetail,
    clearAuthError,
    signInWithGoogle,
    signInWithGoogleRedirect,
    signOutUser,
  } = useFirebase();

  const handleDownloadProjectZip = async () => {
    if (isDownloadingZip) return;
    setIsDownloadingZip(true);
    try {
      const response = await fetch('/api/export-project-zip');
      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = blobUrl;
      anchor.download = 'jurismentor-oab-projeto.zip';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
    } catch (err) {
      console.error('Erro ao baixar código-fonte:', err);
    } finally {
      setIsDownloadingZip(false);
    }
  };

  return (
    <header className="w-full border-b border-[#DFD7C8] bg-[#FCF9F4]/95 backdrop-blur-md sticky top-0 z-40 shadow-[0_1px_3px_rgba(28,25,23,0.04)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-2 sm:gap-3 py-2.5 min-w-0">
          {/* Logo & Brand */}
          <div
            onClick={() => setActiveTab('simulados')}
            className="flex items-center gap-2.5 cursor-pointer group min-w-0 shrink"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1B365D] border border-[#C59B3E]/60 flex items-center justify-center text-[#FAF7F2] shadow-sm group-hover:bg-[#142846] transition-colors shrink-0">
              <Scale className="w-4.5 h-4.5 stroke-[2] text-[#E6C574]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#1B365D] transition-colors whitespace-nowrap">
                  JurisMentor
                </span>
                <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7B1E26] border-l border-[#DFD7C8] pl-2 whitespace-nowrap">
                  OAB & Concursos
                </span>
              </div>
              <p className="text-[11px] font-serif italic text-stone-600 hidden lg:block truncate">
                Simulados Oficiais · Cronogramas · IA
              </p>
            </div>
          </div>

          {/* Compact Editorial Metrics (only on wide screens so nothing ever crowds) */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#F4EFE6] border border-[#DFD7C8] text-[11px] text-stone-700 shrink-0">
            <span className="inline-flex items-center gap-1" title="Dias consecutivos de estudo">
              <Flame className="w-3.5 h-3.5 text-[#8A6518]" />
              <span className="font-semibold font-mono tabular-nums text-stone-900">{streakDays}d</span>
            </span>
            <span className="h-3 w-px bg-[#D6CCB9]" />
            <span className="inline-flex items-center gap-1" title="Aproveitamento global nas questões">
              <Award className="w-3.5 h-3.5 text-[#1B365D]" />
              <span className={`font-semibold font-mono tabular-nums ${accuracyRate >= 50 ? 'text-emerald-800' : 'text-[#7B1E26]'}`}>
                {accuracyRate}%
              </span>
              <span className="text-stone-500 font-mono tabular-nums">({totalAnswered} q.)</span>
            </span>
          </div>

          {/* Right Actions (sempre dentro da largura do corpo; Google é o primeiro à direita) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Acessar no Celular */}
            <button
              type="button"
              onClick={onOpenAccessAnywhere}
              className="flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-white hover:bg-[#F4EFE6] text-stone-800 border border-[#D6CCB9] text-xs font-semibold transition-all cursor-pointer shadow-xs whitespace-nowrap"
              title="Acessar no celular ou fora da plataforma via link ou QR Code"
              aria-label="Acessar no Celular"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#1B365D] shrink-0" />
              <span className="hidden md:inline">Celular</span>
            </button>

            {/* Download Projeto ZIP (apenas ambiente de desenvolvimento / AI Studio) */}
            {isDevOrAiStudioEnv && (
              <button
                type="button"
                onClick={handleDownloadProjectZip}
                disabled={isDownloadingZip}
                className="flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-white hover:bg-[#F4EFE6] disabled:opacity-60 text-stone-800 border border-[#D6CCB9] text-xs font-semibold transition-all cursor-pointer shadow-xs whitespace-nowrap"
                title="Baixar todos os arquivos do aplicativo (.zip) para seu PC"
                aria-label="Baixar ZIP do projeto"
              >
                {isDownloadingZip ? (
                  <Loader2 className="w-3.5 h-3.5 text-[#1B365D] animate-spin shrink-0" />
                ) : (
                  <Download className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                )}
                <span className="hidden md:inline">{isDownloadingZip ? 'Gerando...' : 'Baixar ZIP'}</span>
              </button>
            )}

            {/* Professor Jurídico IA */}
            <button
              type="button"
              onClick={() => setActiveTab('professor')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                activeTab === 'professor'
                  ? 'bg-[#7B1E26] text-[#FAF7F2] border border-[#7B1E26]'
                  : 'bg-[#1B365D] text-[#FAF7F2] border border-[#1B365D] hover:bg-[#142846]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6C574] shrink-0" />
              <span className="hidden sm:inline">Professor IA</span>
              <span className="sm:hidden">IA</span>
            </button>

            {/* Conectar Conta Google (primeiro botão/ícone da extrema direita) */}
            {!authReady ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/80 border border-[#DFD7C8] text-stone-500 text-xs whitespace-nowrap">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#1B365D]" />
                <span className="hidden sm:inline">Conta...</span>
              </div>
            ) : user ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#DFD7C8] text-xs text-stone-800 whitespace-nowrap">
                {syncStatus === 'syncing' ? (
                  <Loader2 className="w-3.5 h-3.5 text-[#1B365D] animate-spin shrink-0" />
                ) : (
                  <Check className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                )}
                <span className="hidden sm:inline font-medium max-w-[85px] truncate" title={user.email || undefined}>
                  {user.displayName ? user.displayName.split(' ')[0] : 'Nuvem'}
                </span>
                <button
                  type="button"
                  onClick={signOutUser}
                  title="Sair da conta Google (seu progresso salvo permanece na nuvem)"
                  className="p-0.5 rounded text-stone-500 hover:text-[#7B1E26] cursor-pointer"
                  aria-label="Sair da conta Google"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={signInWithGoogle}
                disabled={isSigningIn}
                title={authError || 'Entre com sua conta Google para salvar seu desenvolvimento na nuvem'}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white hover:bg-[#F4EFE6] disabled:opacity-60 text-[#1B365D] border border-[#1B365D]/40 text-xs font-semibold transition-all cursor-pointer shadow-xs whitespace-nowrap"
              >
                {isSigningIn ? (
                  <Loader2 className="w-3.5 h-3.5 text-[#1B365D] animate-spin shrink-0" />
                ) : (
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
                    />
                  </svg>
                )}
                <span className="hidden md:inline">
                  {isSigningIn ? 'Conectando...' : 'Entrar com Google'}
                </span>
                <span className="md:hidden">
                  {isSigningIn ? '...' : 'Entrar'}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Primary Navigation Tabs (harmônica e sem sobras dentro de max-w-6xl) */}
        <nav className="flex items-center lg:justify-between gap-1 overflow-x-auto py-1.5 border-t border-[#E6DFD3] scrollbar-none text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('simulados')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'simulados'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <BookOpen className={`w-3.5 h-3.5 ${activeTab === 'simulados' ? 'text-[#E6C574]' : 'text-[#1B365D]'}`} />
            Simulados & Questões
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('diagnostico')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'diagnostico'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <Crosshair className={`w-3.5 h-3.5 ${activeTab === 'diagnostico' ? 'text-[#E6C574]' : 'text-[#8A6518]'}`} />
            Diagnóstico
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cronograma')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'cronograma'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <Calendar className={`w-3.5 h-3.5 ${activeTab === 'cronograma' ? 'text-[#E6C574]' : 'text-[#1B365D]'}`} />
            Cronograma
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('desempenho')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'desempenho'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <BarChart3 className={`w-3.5 h-3.5 ${activeTab === 'desempenho' ? 'text-[#E6C574]' : 'text-emerald-800'}`} />
            Desempenho
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('erros')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'erros'
                ? 'bg-[#7B1E26] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <AlertOctagon className={`w-3.5 h-3.5 ${activeTab === 'erros' ? 'text-[#E6C574]' : 'text-[#7B1E26]'}`} />
            Caderno de Erros
            {cadernoErrosCount > 0 && (
              <span className={`px-1.5 py-0.5 text-[10px] rounded font-mono font-bold tabular-nums ${
                activeTab === 'erros'
                  ? 'bg-[#FAF7F2]/20 text-[#FAF7F2]'
                  : 'bg-rose-100 text-[#7B1E26]'
              }`}>
                {cadernoErrosCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'flashcards'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <Scale className={`w-3.5 h-3.5 ${activeTab === 'flashcards' ? 'text-[#E6C574]' : 'text-[#8A6518]'}`} />
            Súmulas & Leis
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('base_admin')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'base_admin'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <Database className={`w-3.5 h-3.5 ${activeTab === 'base_admin' ? 'text-[#E6C574]' : 'text-stone-700'}`} />
            Base Jurídica
          </button>
        </nav>
      </div>

      {/* Modal de Diagnóstico e Recuperação de Login Google (via Portal para não cortar no header) */}
      {authErrorDetail && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-xs overflow-y-auto">
          <div className="bg-[#FAF7F2] border border-[#D6CCB9] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in duration-150 my-auto">
            <div className="px-5 py-4 bg-[#F3EFE6] border-b border-[#DFD7C8] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-rose-50 border border-[#7B1E26]/30 text-[#7B1E26] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-stone-900">
                    {authErrorDetail.title}
                  </h3>
                  <p className="text-[11px] font-mono text-stone-600">
                    Código: {authErrorDetail.code}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearAuthError}
                className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-[#EAE3D5] cursor-pointer"
                aria-label="Fechar aviso"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs sm:text-sm text-stone-800">
              <p className="font-serif leading-relaxed">
                {authErrorDetail.message}
              </p>

              {authErrorDetail.code === 'auth/unauthorized-domain' && authErrorDetail.currentHostname && (
                <div className="p-3.5 rounded-xl bg-white border border-[#DFD7C8] space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#1B365D]">
                    Domínio para autorizar no Firebase Console:
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 px-3 py-2 rounded-lg bg-[#F4EFE6] border border-[#DFD7C8] font-mono text-xs text-[#7B1E26] break-all">
                      {authErrorDetail.currentHostname}
                    </code>
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(authErrorDetail.currentHostname);
                          setCopiedDomain(true);
                          setTimeout(() => setCopiedDomain(false), 2000);
                        } catch {
                          // ignore clipboard failure
                        }
                      }}
                      className="px-3 py-2 rounded-lg bg-[#1B365D] text-[#FAF7F2] text-xs font-semibold flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      {copiedDomain ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedDomain ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-stone-600 font-serif">
                    No Firebase Console: <strong>Authentication → Settings → Authorized domains → Add domain</strong>.
                  </p>
                  {firebaseConfig.projectId && (
                    <a
                      href={`https://console.firebase.google.com/project/${firebaseConfig.projectId}/authentication/settings`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4EFE6] hover:bg-[#EAE3D5] border border-[#C59B3E]/60 text-[#1B365D] text-xs font-semibold transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#8A6518]" />
                      Abrir Configurações do Firebase Console
                    </a>
                  )}
                </div>
              )}

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-serif">
                Seu desenvolvimento, simulados e respostas <strong>continuam salvos localmente neste navegador</strong> enquanto o login na nuvem não é concluído.
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-[#ECE6D9]">
                {authErrorDetail.isEmbeddedIframe && typeof window !== 'undefined' && (
                  <a
                    href={window.location.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#7B1E26] hover:bg-[#61161D] text-[#FAF7F2] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Abrir em Nova Aba p/ Entrar
                  </a>
                )}

                {authErrorDetail.canTryRedirect && (
                  <button
                    type="button"
                    onClick={signInWithGoogleRedirect}
                    disabled={isSigningIn}
                    className="px-4 py-2 rounded-xl bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Entrar na Mesma Aba (Redirecionamento)
                  </button>
                )}

                <button
                  type="button"
                  onClick={signInWithGoogle}
                  disabled={isSigningIn}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-[#F4EFE6] text-[#1B365D] border border-[#1B365D]/40 text-xs font-semibold cursor-pointer transition-colors"
                >
                  Tentar Pop-up Novamente
                </button>

                <button
                  type="button"
                  onClick={clearAuthError}
                  className="px-4 py-2 rounded-xl bg-[#F4EFE6] hover:bg-[#EAE3D5] text-stone-700 border border-[#DFD7C8] text-xs font-semibold cursor-pointer transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
