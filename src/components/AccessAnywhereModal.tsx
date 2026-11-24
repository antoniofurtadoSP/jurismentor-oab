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

  const isDevOrAiStudioEnv =
    import.meta.env.DEV ||
    (typeof window !== 'undefined' &&
      (window.location.hostname.startsWith('ais-dev-') ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'));

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
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&bgcolor=FFFFFF&color=1B365D&margin=10&data=${encodeURIComponent(appUrl)}`;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] border border-[#D6CCB9] rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E2DBD0] flex items-center justify-between bg-[#F3EFE6]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B365D] text-[#E6C574] flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-base text-stone-900">
                  Acessar Fora da Plataforma & No Celular
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-[#7B1E26] border-l border-[#D6CCB9] pl-2">
                  Web App PWA
                </span>
              </div>
              <p className="text-xs font-serif italic text-stone-600">
                Acesse de qualquer lugar sem precisar fazer login no Google AI Studio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-600 hover:text-stone-950 hover:bg-[#EAE3D5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Direct Link Section */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
              Seu Link Público de Acesso Direto:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={appUrl}
                className="flex-1 bg-white border border-[#D6CCB9] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#1B365D] font-mono select-all focus:outline-none"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-xs ${
                  copied
                    ? 'bg-emerald-800 text-[#FAF7F2]'
                    : 'bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.5]" />
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
                className="p-2.5 rounded-xl bg-white hover:bg-[#F4EFE6] text-stone-700 hover:text-stone-950 transition-colors cursor-pointer shrink-0 border border-[#D6CCB9]"
                title="Abrir em nova aba"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-amber-950 bg-amber-50 border border-amber-200 rounded-xl px-3.5 py-2.5 leading-relaxed">
              <strong>Importante para Android/iPhone:</strong> Use sempre este link público (<code className="font-mono text-[#7B1E26]">ais-pre-...</code>) no Google Chrome ou Safari — nunca o link de desenvolvimento (<code className="font-mono text-[#7B1E26]">ais-dev-...</code>). Caso apareça tela branca no celular, clique em <strong>Share / Publicar</strong> no topo do Google AI Studio para ativar a versão mais recente neste link público.
            </p>
          </div>

          {/* QR Code and Quick Scan */}
          <div className="p-5 rounded-2xl bg-white border border-[#DFD7C8] flex flex-col sm:flex-row items-center gap-6 shadow-xs">
            <div className="p-2.5 bg-white rounded-xl border border-[#D6CCB9] shadow-xs shrink-0">
              <img
                src={qrCodeUrl}
                alt="QR Code de Acesso Rápido ao JurisMentor"
                className="w-36 h-36 rounded-lg object-contain"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#1B365D] font-display font-bold text-sm">
                <QrCode className="w-4 h-4 text-[#8A6518]" />
                <span>Abra no seu Celular em 3 Segundos:</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-serif">
                Aponte a câmera do seu smartphone (iPhone ou Android) para este QR Code. O aplicativo abrirá imediatamente no navegador do seu telefone!
              </p>
              {installPrompt && (
                <button
                  onClick={handleInstallClick}
                  className="mt-2 px-4 py-2 rounded-xl bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Instalar Aplicativo no Dispositivo</span>
                </button>
              )}
            </div>
          </div>

          {/* Step-by-Step Installation Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
              <Download className="w-4 h-4 text-[#1B365D]" />
              Como Salvar como Aplicativo no seu Aparelho:
            </h4>

            {/* Device tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F3EFE6] border border-[#D6CCB9] rounded-xl">
              <button
                onClick={() => setActiveDeviceTab('iphone')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeDeviceTab === 'iphone'
                    ? 'bg-[#1B365D] text-[#FAF7F2] shadow-xs'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                <Apple className="w-3.5 h-3.5" />
                <span>iPhone / iPad</span>
              </button>
              <button
                onClick={() => setActiveDeviceTab('android')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeDeviceTab === 'android'
                    ? 'bg-[#1B365D] text-[#FAF7F2] shadow-xs'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                <Chrome className="w-3.5 h-3.5" />
                <span>Android</span>
              </button>
              <button
                onClick={() => setActiveDeviceTab('pc')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeDeviceTab === 'pc'
                    ? 'bg-[#1B365D] text-[#FAF7F2] shadow-xs'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Computador</span>
              </button>
            </div>

            {/* Tab contents */}
            <div className="p-4 rounded-xl bg-white border border-[#DFD7C8] text-xs text-stone-700 space-y-2.5 font-serif">
              {activeDeviceTab === 'iphone' && (
                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Abra o link no navegador <strong>Safari</strong> do seu iPhone ou iPad.</li>
                  <li>Toque no botão de <strong>Compartilhar</strong> (o quadrado com uma seta para cima na barra inferior).</li>
                  <li>Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong> (ícone com um sinal de mais).</li>
                  <li>Toque em <strong>"Adicionar"</strong> no canto superior direito.</li>
                  <li className="text-[#1B365D] font-semibold">Pronto! O JurisMentor aparecerá como um aplicativo nativo na sua tela inicial, com ícone próprio e sem barra de navegação!</li>
                </ol>
              )}

              {activeDeviceTab === 'android' && (
                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Abra o link no <strong>Google Chrome</strong> do seu celular Android.</li>
                  <li>Toque nos <strong>três pontinhos verticais (⋮)</strong> no canto superior direito do navegador.</li>
                  <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
                  <li>Confirme tocando em <strong>"Instalar"</strong>.</li>
                  <li className="text-[#1B365D] font-semibold">O aplicativo será instalado automaticamente e funcionará em tela cheia mesmo se você fechar o Chrome!</li>
                </ol>
              )}

              {activeDeviceTab === 'pc' && (
                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Abra o link no <strong>Google Chrome</strong> ou <strong>Microsoft Edge</strong> no seu computador.</li>
                  <li>Observe a barra de endereços no topo: clique no ícone de <strong>computador com seta para baixo</strong> ("Instalar aplicativo").</li>
                  <li>Ou clique no menu de três pontos ➔ <strong>"Salvar e compartilhar"</strong> ➔ <strong>"Instalar JurisMentor"</strong>.</li>
                  <li className="text-[#1B365D] font-semibold">O JurisMentor abrirá em uma janela própria dedicada, como um software desktop para estudos contínuos!</li>
                </ol>
              )}
            </div>
          </div>

          {/* Export Source Code ZIP for PC / Independent Hosting (apenas ambiente AI Studio / desenvolvimento) */}
          {isDevOrAiStudioEnv && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-900 font-semibold text-xs">
                  <FolderArchive className="w-4 h-4 text-emerald-800" />
                  <span>Baixar Arquivos do App para seu PC (.zip)</span>
                </div>
                <p className="text-[11px] text-emerald-900/80 leading-relaxed">
                  Exporte todo o código-fonte, banco jurídico e guia de instalação para rodar localmente ou publicar em servidor próprio fora do Google AI Studio.
                </p>
              </div>
              <button
                onClick={handleDownloadSourceZip}
                disabled={downloadingZip}
                className="px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 disabled:opacity-60 text-[#FAF7F2] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-xs"
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
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-[#E2DBD0] bg-[#F3EFE6] flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Seu progresso, respostas e Caderno de Erros ficam salvos localmente.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white hover:bg-[#EAE3D5] text-stone-800 border border-[#D6CCB9] font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
