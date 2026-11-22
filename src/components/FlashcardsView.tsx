import React, { useState } from 'react';
import { 
  Scale, RotateCw, CheckCircle2, AlertCircle, BookOpen, 
  Sparkles, Layers, ChevronLeft, ChevronRight, Bookmark 
} from 'lucide-react';
import { LegalFlashcard } from '../types';
import { FLASHCARDS_DATABASE } from '../data/sumulas';
import { updateFlashcardMastery } from '../services/storage';
import { ProfessorAudioPlayer } from './ProfessorAudioPlayer';

interface FlashcardsViewProps {
  flashcardStatus: Record<string, { mastered: boolean; reviews: number }>;
  onRefreshData: () => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  flashcardStatus,
  onRefreshData,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredCards = selectedCategory === 'ALL'
    ? FLASHCARDS_DATABASE
    : FLASHCARDS_DATABASE.filter(c => c.category === selectedCategory);

  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const currentCardStatus = currentCard ? flashcardStatus[currentCard.id] : undefined;
  const isMastered = currentCardStatus?.mastered;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleMarkStatus = (mastered: boolean) => {
    if (!currentCard) return;
    updateFlashcardMastery(currentCard.id, mastered);
    onRefreshData();
    handleNext();
  };

  const categories = Array.from(new Set(FLASHCARDS_DATABASE.map(c => c.category)));

  // Mastered count
  const masteredCount = FLASHCARDS_DATABASE.filter(c => flashcardStatus[c.id]?.mastered).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8 animate-in fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DFD7C8]">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-2.5">
            <Scale className="w-7 h-7 text-[#8A6518]" />
            Súmulas Vinculantes & Artigos-Chave
          </h1>
          <p className="text-sm font-serif italic text-stone-600 mt-1">
            Fichas de memorização ativa dos entendimentos pacificadores do STF e STJ mais cobrados
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-white border border-[#DFD7C8] text-xs text-stone-700 font-mono tabular-nums self-start sm:self-auto shadow-xs">
          Dominados: <strong className="text-emerald-800">{masteredCount}</strong> / {FLASHCARDS_DATABASE.length}
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => { setSelectedCategory('ALL'); setCurrentIndex(0); setIsFlipped(false); }}
          className={`text-xs px-3.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
            selectedCategory === 'ALL'
              ? 'bg-[#1B365D] border-[#1B365D] text-[#FAF7F2] font-semibold'
              : 'bg-white border-[#D6CCB9] text-stone-700 hover:text-stone-950'
          }`}
        >
          Todos ({FLASHCARDS_DATABASE.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setSelectedCategory(cat); setCurrentIndex(0); setIsFlipped(false); }}
            className={`text-xs px-3.5 py-1.5 rounded-lg border whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#1B365D] border-[#1B365D] text-[#FAF7F2] font-semibold'
                : 'bg-white border-[#D6CCB9] text-stone-700 hover:text-stone-950'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Interactive Flashcard */}
      {currentCard && (
        <div className="space-y-6">
          <div
            onClick={() => setIsFlipped(prev => !prev)}
            className="group relative min-h-[320px] sm:min-h-[360px] bg-white border border-[#D6CCB9] hover:border-[#1B365D]/60 rounded-2xl p-8 flex flex-col justify-between shadow-sm cursor-pointer transition-all duration-300"
          >
            {/* Top kicker */}
            <div className="flex items-center justify-between text-xs text-stone-600 border-b border-[#E6DFD3] pb-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold uppercase tracking-wider text-[#7B1E26]">{currentCard.category}</span>
                <span>·</span>
                <span className="text-stone-800 font-medium">{currentCard.subject}</span>
              </div>
              <div className="flex items-center gap-2">
                {isMastered && (
                  <span className="text-emerald-800 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Dominado
                  </span>
                )}
                <span className="font-mono tabular-nums text-stone-600">
                  {currentIndex + 1} de {filteredCards.length}
                </span>
              </div>
            </div>

            {/* Front or Back Content */}
            <div className="py-8 my-auto">
              {!isFlipped ? (
                <div className="space-y-4 animate-in fade-in">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 text-center">
                    {currentCard.title}
                  </h3>
                  <p className="font-serif text-base sm:text-lg text-stone-800 text-center leading-relaxed max-w-xl mx-auto">
                    "{currentCard.front}"
                  </p>
                  <p className="text-xs text-center text-stone-500 flex items-center justify-center gap-1.5 pt-4">
                    <RotateCw className="w-3.5 h-3.5" /> Clique para virar a ficha e ver o fundamento
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in">
                  <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#7B1E26] text-center">
                    Tese Vinculante / Resposta:
                  </div>
                  <div className="font-serif text-sm sm:text-base text-stone-900 leading-relaxed whitespace-pre-line max-w-xl mx-auto bg-[#FAF7F2] p-5 rounded-xl border border-[#DFD7C8]">
                    {currentCard.back}
                  </div>
                  <div className="text-center font-mono text-xs text-[#1B365D] font-semibold">
                    Referência: {currentCard.articleRef}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom hint */}
            <div className="pt-4 border-t border-[#E6DFD3] flex items-center justify-between text-xs text-stone-500">
              <span>{isFlipped ? 'Clique para retornar à pergunta' : 'Toque na ficha para revelar'}</span>
              <span className="font-mono">JurisMentor · Vade Mecum</span>
            </div>
          </div>

          {/* Controls: Evaluation & Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white border border-[#D6CCB9] text-stone-700 hover:bg-[#F4EFE6] transition-colors cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white border border-[#D6CCB9] text-stone-700 hover:bg-[#F4EFE6] transition-colors cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Audio button for the flashcard */}
              <ProfessorAudioPlayer
                textToSpeak={
                  isFlipped
                    ? `${currentCard.title}. Resposta e tese vinculante: ${currentCard.back}. Referência legal: ${currentCard.articleRef}`
                    : `${currentCard.title}. Pergunta: ${currentCard.front}`
                }
                compact={true}
                autoPreload={true}
                preloadDelayMs={500}
              />
            </div>

            {isFlipped && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleMarkStatus(false)}
                  className="px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-300 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <AlertCircle className="w-4 h-4 text-[#7B1E26]" />
                  Ainda com Dúvida
                </button>
                <button
                  onClick={() => handleMarkStatus(true)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                  Dominado
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
