import React, { useState } from 'react';
import { Scale, BookOpen, Calendar, BarChart3, AlertOctagon, Sparkles, Award, Flame, Volume2, Smartphone, Crosshair, Database, Download, Loader2 } from 'lucide-react';

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
    <header className="border-b border-[#DFD7C8] bg-[#FCF9F4]/95 backdrop-blur-md sticky top-0 z-40 shadow-[0_1px_3px_rgba(28,25,23,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('simulados')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1B365D] border border-[#C59B3E]/60 flex items-center justify-center text-[#FAF7F2] shadow-sm group-hover:bg-[#142846] transition-colors">
              <Scale className="w-5 h-5 stroke-[2] text-[#E6C574]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#1B365D] transition-colors">
                  JurisMentor
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7B1E26] border-l border-[#DFD7C8] pl-2">
                  OAB & Concursos
                </span>
              </div>
              <p className="text-[11px] font-serif italic text-stone-600 hidden sm:block">
                Simulados Oficiais · Cronogramas · Análise de Desempenho
              </p>
            </div>
          </div>

          {/* Quick Stats Bar (clean hairline editorial metrics) */}
          <div className="hidden lg:flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#DFD7C8]">
              <Flame className="w-3.5 h-3.5 text-[#8A6518]" />
              <span className="text-stone-600">Ofensiva:</span>
              <span className="font-semibold font-mono tabular-nums text-stone-900">{streakDays} {streakDays === 1 ? 'dia' : 'dias'}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#DFD7C8]">
              <Award className="w-3.5 h-3.5 text-[#1B365D]" />
              <span className="text-stone-600">Aproveitamento:</span>
              <span className={`font-semibold font-mono tabular-nums ${accuracyRate >= 50 ? 'text-emerald-800' : 'text-[#7B1E26]'}`}>
                {accuracyRate}%
              </span>
              <span className="text-stone-500 font-mono tabular-nums">({totalAnswered} q.)</span>
            </div>

            {cadernoErrosCount > 0 && (
              <button
                onClick={() => setActiveTab('erros')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 hover:bg-rose-100 transition-colors cursor-pointer"
              >
                <AlertOctagon className="w-3.5 h-3.5 text-[#7B1E26]" />
                <span className="font-medium">Caderno de Erros:</span>
                <span className="font-bold font-mono tabular-nums text-[#7B1E26]">{cadernoErrosCount}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#DFD7C8] text-[11px] text-stone-700 font-medium" title="Suporte completo a explicações em áudio em português brasileiro">
              <Volume2 className="w-3.5 h-3.5 text-[#1B365D]" />
              <span>Áudio pt-BR</span>
            </div>

            {/* Acessar no Celular / Fora da Plataforma button */}
            <button
              onClick={onOpenAccessAnywhere}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#F4EFE6] text-stone-800 border border-[#D6CCB9] text-xs font-semibold transition-all cursor-pointer shadow-xs whitespace-nowrap"
              title="Acessar no celular ou fora da plataforma via link público ou QR Code"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#1B365D]" />
              <span className="hidden sm:inline">Acessar no Celular</span>
              <span className="sm:hidden">App Móvel</span>
            </button>

            {/* Download Projeto ZIP */}
            <button
              onClick={handleDownloadProjectZip}
              disabled={isDownloadingZip}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#F4EFE6] disabled:opacity-60 text-stone-800 border border-[#D6CCB9] text-xs font-semibold transition-all cursor-pointer shadow-xs whitespace-nowrap"
              title="Baixar todos os arquivos do aplicativo (.zip) para seu PC"
            >
              {isDownloadingZip ? (
                <Loader2 className="w-3.5 h-3.5 text-[#1B365D] animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5 text-emerald-800" />
              )}
              <span className="hidden md:inline">{isDownloadingZip ? 'Gerando...' : 'Baixar ZIP'}</span>
              <span className="md:hidden">{isDownloadingZip ? '...' : 'ZIP'}</span>
            </button>

            {/* Professor IA Quick CTA */}
            <button
              onClick={() => setActiveTab('professor')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                activeTab === 'professor'
                  ? 'bg-[#7B1E26] text-[#FAF7F2] border border-[#7B1E26]'
                  : 'bg-[#1B365D] text-[#FAF7F2] border border-[#1B365D] hover:bg-[#142846]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6C574]" />
              <span className="hidden sm:inline">Professor Jurídico</span>
              <span className="sm:hidden">Professor</span>
            </button>
          </div>
        </div>

        {/* Primary Navigation Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-2 pt-1.5 border-t border-[#E6DFD3] -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('simulados')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'simulados'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${activeTab === 'simulados' ? 'text-[#E6C574]' : 'text-[#1B365D]'}`} />
            Simulados & Questões
          </button>

          <button
            onClick={() => setActiveTab('diagnostico')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'diagnostico'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <Crosshair className={`w-4 h-4 ${activeTab === 'diagnostico' ? 'text-[#E6C574]' : 'text-[#8A6518]'}`} />
            Simulado Diagnóstico
          </button>

          <button
            onClick={() => setActiveTab('cronograma')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'cronograma'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <Calendar className={`w-4 h-4 ${activeTab === 'cronograma' ? 'text-[#E6C574]' : 'text-[#1B365D]'}`} />
            Cronogramas de Revisão
          </button>

          <button
            onClick={() => setActiveTab('desempenho')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'desempenho'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <BarChart3 className={`w-4 h-4 ${activeTab === 'desempenho' ? 'text-[#E6C574]' : 'text-emerald-800'}`} />
            Análise de Desempenho
          </button>

          <button
            onClick={() => setActiveTab('erros')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'erros'
                ? 'bg-[#7B1E26] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <AlertOctagon className={`w-4 h-4 ${activeTab === 'erros' ? 'text-[#E6C574]' : 'text-[#7B1E26]'}`} />
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
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'flashcards'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <Scale className={`w-4 h-4 ${activeTab === 'flashcards' ? 'text-[#E6C574]' : 'text-[#8A6518]'}`} />
            Súmulas & Artigos-Chave
          </button>

          <button
            onClick={() => setActiveTab('base_admin')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'base_admin'
                ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-[#F3EFE6]'
            }`}
          >
            <Database className={`w-4 h-4 ${activeTab === 'base_admin' ? 'text-[#E6C574]' : 'text-stone-700'}`} />
            Base Jurídica & Admin
          </button>
        </nav>
      </div>
    </header>
  );
};
