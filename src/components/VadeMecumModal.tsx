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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] border border-[#D6CCB9] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E2DBD0] flex items-center justify-between bg-[#F3EFE6]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#1B365D] text-[#E6C574]">
              <Book className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-stone-900">
                Vade Mecum Digital · Legislação Aplicável
              </h3>
              <p className="text-xs font-serif italic text-stone-600">
                Dispositivos de lei e artigos citados nesta questão de prova
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 divide-y divide-[#E6DFD3]">
          {references.map((ref, idx) => (
            <div key={idx} className={idx > 0 ? "pt-4" : ""}>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7B1E26]">
                  {ref.code}
                </span>
                <span className="text-xs font-bold font-mono text-[#1B365D] bg-[#EAE3D5] px-2.5 py-0.5 rounded border border-[#D6CCB9]">
                  {ref.article}
                </span>
              </div>
              <div className="p-4 bg-white border border-[#DFD7C8] rounded-xl font-serif text-sm leading-relaxed text-stone-800 shadow-xs">
                "{ref.textSnippet}"
              </div>
            </div>
          ))}
          {references.length === 0 && (
            <div className="text-center py-8 text-stone-600 font-serif text-sm">
              Nenhum artigo legal anexado a esta questão.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-[#E2DBD0] bg-[#F3EFE6] flex justify-between items-center text-xs text-stone-600">
          <span className="font-serif italic">Legislação atualizada conforme vigência oficial do Planalto.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
