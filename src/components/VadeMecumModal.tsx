import React from 'react';
import { X, Book, ExternalLink, Bookmark } from 'lucide-react';
import { StatuteReference } from '../types';

interface VadeMecumModalProps {
  references: StatuteReference[];
  isOpen: boolean;
  onClose: () => void;
}

export const VadeMecumModal: React.FC<VadeMecumModalProps> = ({
  references,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Book className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white">
                Vade Mecum Digital · Legislação Aplicável
              </h3>
              <p className="text-xs text-slate-400">
                Dispositivos de lei e artigos citados nesta questão de prova
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 divide-y divide-slate-800/60">
          {references.map((ref, idx) => (
            <div key={idx} className={idx > 0 ? "pt-4" : ""}>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-semibold text-amber-400 tracking-wide">
                  {ref.code}
                </span>
                <span className="text-xs font-bold text-slate-200 bg-slate-800 px-2 py-0.5 rounded">
                  {ref.article}
                </span>
              </div>
              <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-xl font-serif text-sm leading-relaxed text-slate-300">
                "{ref.textSnippet}"
              </div>
            </div>
          ))}
          {references.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-sm">
              Nenhum artigo legal anexado a esta questão.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950/50 flex justify-between items-center text-xs text-slate-400">
          <span>Legislação atualizada conforme vigência do Planalto.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
