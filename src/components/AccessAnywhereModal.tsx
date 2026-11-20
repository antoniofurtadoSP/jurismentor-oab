import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Monitor, Copy, Check, ExternalLink, QrCode, 
  Download, X, Share2, Compass, Apple, Chrome, Globe, ShieldCheck, FolderArchive, Loader2 
} from 'lucide-react';

interface AccessAnywhereModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SHARED_APP_URL = 'https://ais-pre-ud3gcuj3gsee6gjazej5mb-494905315042.us-east1.run.app';

export const AccessAnywhereModal: React.FC<AccessAnywhereModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeDeviceTab, setActiveDeviceTab] = useState<'iphone' | 'android' | 'pc'>('android');
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [downloadingZip, setDownloadingZip] = useState(false);

  // App URL: Never leak localhost or the auth-gated ais-dev-* preview URL into mobile QR codes / share links
  const appUrl = typeof window !== 'undefined'
    ? (
        window.location.origin.includes('localhost') ||
        window.location.origin.includes('127.0.0.1') ||
        window.location.origin.includes(':3000') ||
        window.location.origin.includes('ais-dev-')
          ? SHARED_APP_URL
          : window.location.origin
      )
    : SHARED_APP_URL;

  // QR Code URL generator
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&bgcolor=0b1120&color=f59e0b&margin=10&data=${encodeURIComponent(appUrl)}`;

  // Capture PWA install event if available
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(appUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn('Falha ao copiar:', err);
    }
  };

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  const handleDownloadSourceZip = async () => {
    if (downloadingZip) return;
    setDownloadingZip(true);
    try {
      const response = await fetch('/api/export-project-zip');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'jurismentor-oab-projeto.zip';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (err) {
      console.error('Erro ao baixar ZIP:', err);
    } finally {
      setDownloadingZip(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-base text-white">
                  Acessar Fora da Plataforma & No Celular
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Web App PWA
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Acesse de qualquer lugar sem precisar fazer login no Google AI Studio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Direct Link Section */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Seu Link Público de Acesso Direto:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={appUrl}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-amber-300 font-mono select-all focus:outline-none"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-md ${
                  copied
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 border border-slate-700"
                title="Abrir em nova aba"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2 leading-relaxed">
              <strong>Importante para Android/iPhone:</strong> Use sempre este link público (<code className="text-amber-200">ais-pre-...</code>) no Google Chrome ou Safari — nunca o link de desenvolvimento (<code className="text-amber-200">ais-dev-...</code>). Caso apareça tela branca no celular, clique em <strong>Share / Publicar</strong> no topo do Google AI Studio para ativar a versão mais recente neste link público.
            </p>
          </div>

          {/* QR Code and Quick Scan */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-center gap-6">
            <div className="p-2 bg-slate-900 rounded-2xl border border-amber-500/30 shadow-lg shrink-0">
              <img
                src={qrCodeUrl}
                alt="QR Code de Acesso Rápido ao JurisMentor"
                className="w-36 h-36 rounded-xl object-contain"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-amber-400 font-serif font-bold text-sm">
                <QrCode className="w-4 h-4" />
                <span>Abra no seu Celular em 3 Segundos:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Aponte a câmera do seu smartphone (iPhone ou Android) para este QR Code. O aplicativo abrirá imediatamente no navegador do seu telefone!
              </p>
              {installPrompt && (
                <button
                  onClick={handleInstallClick}
                  className="mt-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Instalar Aplicativo no Dispositivo</span>
                </button>
              )}
            </div>
          </div>

          {/* Step-by-Step Installation Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Download className="w-4 h-4 text-amber-400" />
              Como Salvar como Aplicativo no seu Aparelho:
            </h4>

            {/* Device tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl">
              <button
                onClick={() => setActiveDeviceTab('iphone')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeDeviceTab === 'iphone'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Apple className="w-3.5 h-3.5" />
                <span>iPhone / iPad</span>
              </button>
              <button
                onClick={() => setActiveDeviceTab('android')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeDeviceTab === 'android'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Chrome className="w-3.5 h-3.5" />
                <span>Android</span>
              </button>
              <button
                onClick={() => setActiveDeviceTab('pc')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeDeviceTab === 'pc'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Computador</span>
              </button>
            </div>

            {/* Tab contents */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-2.5">
              {activeDeviceTab === 'iphone' && (
                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Abra o link no navegador <strong>Safari</strong> do seu iPhone ou iPad.</li>
                  <li>Toque no botão de <strong>Compartilhar</strong> (o quadrado com uma seta para cima na barra inferior).</li>
                  <li>Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong> (ícone com um sinal de mais).</li>
                  <li>Toque em <strong>"Adicionar"</strong> no canto superior direito.</li>
                  <li className="text-amber-300 font-medium">Pronto! O JurisMentor aparecerá como um aplicativo nativo na sua tela inicial, com ícone próprio e sem barra de navegação!</li>
                </ol>
              )}

              {activeDeviceTab === 'android' && (
                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Abra o link no <strong>Google Chrome</strong> do seu celular Android.</li>
                  <li>Toque nos <strong>três pontinhos verticais (⋮)</strong> no canto superior direito do navegador.</li>
                  <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
                  <li>Confirme tocando em <strong>"Instalar"</strong>.</li>
                  <li className="text-amber-300 font-medium">O aplicativo será instalado automaticamente e funcionará em tela cheia mesmo se você fechar o Chrome!</li>
                </ol>
              )}

              {activeDeviceTab === 'pc' && (
                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Abra o link no <strong>Google Chrome</strong> ou <strong>Microsoft Edge</strong> no seu computador.</li>
                  <li>Observe a barra de endereços no topo: clique no ícone de <strong>computador com seta para baixo</strong> ("Instalar aplicativo").</li>
                  <li>Ou clique no menu de três pontos ➔ <strong>"Salvar e compartilhar"</strong> ➔ <strong>"Instalar JurisMentor"</strong>.</li>
                  <li className="text-amber-300 font-medium">O JurisMentor abrirá em uma janela própria dedicada, como um software desktop para estudos contínuos!</li>
                </ol>
              )}
            </div>
          </div>

          {/* Export Source Code ZIP for PC / Independent Hosting */}
          <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs">
                <FolderArchive className="w-4 h-4 text-emerald-400" />
                <span>Baixar Arquivos do App para seu PC (.zip)</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Exporte todo o código-fonte, banco jurídico e guia de instalação para rodar localmente ou publicar em servidor próprio fora do Google AI Studio.
              </p>
            </div>
            <button
              onClick={handleDownloadSourceZip}
              disabled={downloadingZip}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-md"
            >
              {downloadingZip ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Gerando ZIP...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Baixar Projeto (.zip)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Seu progresso, respostas e Caderno de Erros ficam salvos localmente.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
