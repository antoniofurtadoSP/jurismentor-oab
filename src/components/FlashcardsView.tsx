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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center gap-2.5">
            <Scale className="w-7 h-7 text-purple-400" />
            Súmulas Vinculantes & Artigos-Chave
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Flashcards de memorização ativa dos entendimentos pacificadores do STF e STJ mais cobrados
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono self-start sm:self-auto">
          Dominados: <strong className="text-emerald-400">{masteredCount}</strong> / {FLASHCARDS_DATABASE.length}
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => { setSelectedCategory('ALL'); setCurrentIndex(0); setIsFlipped(false); }}
          className={`text-xs px-3.5 py-1.5 rounded-xl border transition-colors cursor-pointer ${
            selectedCategory === 'ALL'
              ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 font-bold'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Todos ({FLASHCARDS_DATABASE.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setSelectedCategory(cat); setCurrentIndex(0); setIsFlipped(false); }}
            className={`text-xs px-3.5 py-1.5 rounded-xl border whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
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
            className="group relative min-h-[320px] sm:min-h-[360px] bg-slate-900 border border-slate-800 hover:border-purple-500/50 rounded-3xl p-8 flex flex-col justify-between shadow-2xl cursor-pointer transition-all duration-300"
          >
            {/* Top kicker */}
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-purple-400">{currentCard.category}</span>
                <span>·</span>
                <span className="text-slate-300">{currentCard.subject}</span>
              </div>
              <div className="flex items-center gap-2">
                {isMastered && (
                  <span className="text-emerald-400 font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Dominado
                  </span>
                )}
                <span className="font-mono text-slate-500">
                  {currentIndex + 1} de {filteredCards.length}
                </span>
              </div>
            </div>

            {/* Front or Back Content */}
            <div className="py-8 my-auto">
              {!isFlipped ? (
                <div className="space-y-4 animate-in fade-in">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white text-center">
                    {currentCard.title}
                  </h3>
                  <p className="font-serif text-base sm:text-lg text-slate-200 text-center leading-relaxed max-w-xl mx-auto">
                    "{currentCard.front}"
                  </p>
                  <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-4">
                    <RotateCw className="w-3.5 h-3.5" /> Clique para virar o card e ver o fundamento
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-400 text-center">
                    Tese Vinculante / Resposta:
                  </div>
                  <div className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line max-w-xl mx-auto bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                    {currentCard.back}
                  </div>
                  <div className="text-center font-mono text-xs text-amber-400 font-semibold">
                    Referência: {currentCard.articleRef}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom hint */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
              <span>{isFlipped ? 'Clique para retornar à pergunta' : 'Toque no card para revelar'}</span>
              <span className="font-mono">JurisMentor Flashcards</span>
            </div>
          </div>

          {/* Controls: Evaluation & Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
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
              />
            </div>

            {isFlipped && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleMarkStatus(false)}
                  className="px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  Ainda com Dúvida
                </button>
                <button
                  onClick={() => handleMarkStatus(true)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
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
