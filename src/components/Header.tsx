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
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('simulados')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform">
              <Scale className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  JurisMentor
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/90 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                  OAB & Concursos
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Simulados Oficiais · Cronogramas · Análise de Desempenho
              </p>
            </div>
          </div>

          {/* Quick Stats Pill Bar (interactive status) */}
          <div className="hidden lg:flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-slate-400">Ofensiva:</span>
              <span className="font-bold text-orange-400">{streakDays} {streakDays === 1 ? 'dia' : 'dias'}</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-slate-400">Aproveitamento:</span>
              <span className={`font-bold ${accuracyRate >= 50 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {accuracyRate}%
              </span>
              <span className="text-slate-500">({totalAnswered} q.)</span>
            </div>

            {cadernoErrosCount > 0 && (
              <button
                onClick={() => setActiveTab('erros')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 transition-colors cursor-pointer"
              >
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                <span className="font-medium">Caderno de Erros:</span>
                <span className="font-bold text-rose-400">{cadernoErrosCount}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-amber-300 font-medium" title="Suporte completo a explicações em áudio em português brasileiro">
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Áudio pt-BR</span>
            </div>

            {/* Acessar no Celular / Fora da Plataforma button */}
            <button
              onClick={onOpenAccessAnywhere}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold transition-all cursor-pointer shadow-sm"
              title="Acessar no celular ou fora da plataforma via link público ou QR Code"
            >
              <Smartphone className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Acessar no Celular</span>
              <span className="sm:hidden">App Móvel</span>
            </button>

            {/* Download Projeto ZIP */}
            <button
              onClick={handleDownloadProjectZip}
              disabled={isDownloadingZip}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 disabled:opacity-60 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all cursor-pointer shadow-sm"
              title="Baixar todos os arquivos do aplicativo (.zip) para seu PC"
            >
              {isDownloadingZip ? (
                <Loader2 className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5 text-emerald-400" />
              )}
              <span className="hidden md:inline">{isDownloadingZip ? 'Gerando...' : 'Baixar ZIP'}</span>
              <span className="md:hidden">{isDownloadingZip ? '...' : 'ZIP'}</span>
            </button>

            {/* Professor IA Quick CTA */}
            <button
              onClick={() => setActiveTab('professor')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'professor'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Professor Jurídico</span>
              <span className="sm:hidden">Professor</span>
            </button>
          </div>
        </div>

        {/* Primary Navigation Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-2 pt-1 border-t border-slate-800/80 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('simulados')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'simulados'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            Simulados & Questões
          </button>

          <button
            onClick={() => setActiveTab('diagnostico')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'diagnostico'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Crosshair className="w-4 h-4 text-amber-400" />
            Simulado Diagnóstico
          </button>

          <button
            onClick={() => setActiveTab('cronograma')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'cronograma'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4 text-sky-400" />
            Cronogramas de Revisão
          </button>

          <button
            onClick={() => setActiveTab('desempenho')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'desempenho'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            Análise de Desempenho
          </button>

          <button
            onClick={() => setActiveTab('erros')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'erros'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            Caderno de Erros
            {cadernoErrosCount > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] bg-rose-500/20 text-rose-300 rounded font-bold">
                {cadernoErrosCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'flashcards'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Scale className="w-4 h-4 text-purple-400" />
            Súmulas & Artigos-Chave
          </button>

          <button
            onClick={() => setActiveTab('base_admin')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'base_admin'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Database className="w-4 h-4 text-amber-400" />
            Base Jurídica & Admin
          </button>
        </nav>
      </div>
    </header>
  );
};
