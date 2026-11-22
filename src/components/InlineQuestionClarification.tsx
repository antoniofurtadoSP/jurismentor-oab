import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  MessageCircleQuestion,
  Bot,
  User,
  RefreshCw,
  Lightbulb,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { LegalQuestion } from '../types';
import type { ExplanationLevel } from '../types/knowledgeBase';
import { askProfessorTutor } from '../services/aiTutor';
import { ProfessorAudioService } from '../services/speech';
import { ProfessorAudioPlayer } from './ProfessorAudioPlayer';

interface ClarificationItem {
  userQuery: string;
  answer: string;
  time: string;
  groundedSources?: string[];
  level: ExplanationLevel;
}

interface InlineQuestionClarificationProps {
  question: LegalQuestion;
  selectedLetter?: string;
  onOpenFullChatModal?: () => void;
}

export const InlineQuestionClarification: React.FC<InlineQuestionClarificationProps> = ({
  question,
  selectedLetter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [explanationLevel, setExplanationLevel] = useState<ExplanationLevel>('intermediario');
  const [thread, setThread] = useState<ClarificationItem[]>([]);

  const handleAsk = async (textToSend?: string) => {
    const finalQuery = textToSend || query;
    if (!finalQuery.trim() || loading) return;

    setLoading(true);
    setIsOpen(true);

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userQueryText = finalQuery.trim();
    setQuery('');

    try {
      const res = await askProfessorTutor({
        question,
        userQuery: userQueryText,
        mode: 'explain_question',
        explanationLevel,
        context: selectedLetter
          ? `O aluno marcou a alternativa ${selectedLetter}, mas o gabarito é ${question.correctAnswer}. Tema: ${question.subject} - ${question.topic}.`
          : `Tema: ${question.subject} - ${question.topic}.`,
      });

      ProfessorAudioService.preload(res.answer);
      setThread(prev => [
        ...prev,
        {
          userQuery: userQueryText,
          answer: res.answer,
          time,
          groundedSources: res.groundedSources,
          level: explanationLevel,
        },
      ]);
    } catch {
      setThread(prev => [
        ...prev,
        {
          userQuery: userQueryText,
          answer:
            'Houve uma instabilidade ao conectar com o Professor. O fundamento central é que a alternativa correta é ' +
            question.correctAnswer +
            ' com base em ' +
            question.statuteReferences.map(s => `${s.code} ${s.article}`).join(', ') +
            '. Caso queira, tente perguntar novamente.',
          time,
          level: explanationLevel,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const fastQuestions = [
    selectedLetter && selectedLetter !== question.correctAnswer
      ? `Por que a alternativa ${selectedLetter} que marquei está incorreta?`
      : 'Explicar o artigo citado de forma mais simples',
    'Qual a diferença entre os institutos jurídicos desta questão?',
    'Me dê um exemplo prático do cotidiano',
    'Quais as exceções legais mais cobradas pela FGV neste tema?',
  ];

  return (
    <div className="mt-4 rounded-xl bg-[#F5F0E6] border border-[#D6CCB9] overflow-hidden shadow-xs transition-all">
      {/* Header bar */}
      <div
        onClick={() => setIsOpen(prev => !prev)}
        className="px-4 py-3 sm:px-5 sm:py-3.5 bg-[#EFE8DA] flex items-center justify-between cursor-pointer hover:bg-[#E8E0D0] transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1B365D] text-[#E6C574] flex items-center justify-center shrink-0">
            <MessageCircleQuestion className="w-4 h-4" />
          </div>
          <div>
            <h5 className="font-display font-bold text-sm text-stone-900">
              Não entendeu ou quer aprofundar com o Professor?
            </h5>
            <p className="text-xs font-serif italic text-stone-600">
              Tire dúvidas em 3 níveis (Simples, Intermediário ou Aprofundado)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#1B365D] font-semibold whitespace-nowrap shrink-0">
          <span className="hidden sm:inline">
            {isOpen ? 'Recolher' : thread.length > 0 ? `${thread.length} resposta(s)` : 'Perguntar ao Professor'}
          </span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      {/* Expandable Body */}
      {isOpen && (
        <div className="p-4 sm:p-5 border-t border-[#DFD7C8] space-y-4 animate-in fade-in bg-[#FAF7F2]">
          {/* 3-Level Selector */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E6DFD3]">
            <span className="text-xs font-semibold text-stone-700">Profundidade da explicação:</span>
            <div className="flex items-center gap-1 bg-white border border-[#D6CCB9] rounded-lg p-1">
              {(
                [
                  { id: 'simples', label: 'Simples' },
                  { id: 'intermediario', label: 'Intermediário' },
                  { id: 'aprofundado', label: 'Aprofundado' },
                ] as const
              ).map(lvl => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setExplanationLevel(lvl.id)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    explanationLevel === lvl.id
                      ? 'bg-[#1B365D] text-[#FAF7F2]'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-[#F4EFE6]'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Thread messages */}
          {thread.length > 0 && (
            <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
              {thread.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  {/* User query bubble */}
                  <div className="flex items-start justify-end gap-2.5">
                    <div className="max-w-[85%] bg-[#1B365D] text-[#FAF7F2] rounded-2xl rounded-tr-none p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs">
                      <div className="font-semibold text-[11px] text-[#E6C574] mb-0.5">Sua dúvida:</div>
                      {item.userQuery}
                      <div className="text-[10px] text-stone-300 text-right mt-1 font-mono">{item.time}</div>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-[#EAE3D5] text-stone-800 border border-[#D6CCB9] flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Professor answer bubble */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#1B365D] text-[#E6C574] flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="max-w-[90%] bg-white border border-[#DFD7C8] text-stone-800 rounded-2xl rounded-tl-none p-4 text-xs sm:text-sm leading-relaxed shadow-xs space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E6DFD3]">
                        <span className="font-display font-bold text-[#7B1E26] text-xs flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#8A6518]" />
                          Esclarecimento ({item.level})
                        </span>
                        <ProfessorAudioPlayer
                          textToSpeak={item.answer}
                          compact={true}
                        />
                      </div>

                      <div className="whitespace-pre-line text-stone-800 font-serif leading-relaxed">
                        {item.answer}
                      </div>

                      {item.groundedSources && item.groundedSources.length > 0 && (
                        <div className="pt-2 border-t border-[#E6DFD3] text-[11px] text-stone-600">
                          <strong className="text-[#7B1E26]">Base consultada:</strong>{' '}
                          {item.groundedSources.slice(0, 3).join(' · ')}
                        </div>
                      )}

                      <div className="text-[10px] text-stone-500 font-mono text-right">{item.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Loading state */}
          {loading && (
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#D6CCB9] text-xs text-[#1B365D] font-serif italic">
              <RefreshCw className="w-4 h-4 animate-spin text-[#8A6518]" />
              <span>Consultando base jurídica e preparando explicação ({explanationLevel})...</span>
            </div>
          )}

          {/* Quick-suggestion chips */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
              <Lightbulb className="w-3.5 h-3.5 text-[#8A6518]" /> Perguntas rápidas ao Professor:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {fastQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAsk(q)}
                  disabled={loading}
                  className="text-xs px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#F4EFE6] text-stone-800 hover:text-[#1B365D] border border-[#D6CCB9] hover:border-[#1B365D]/40 transition-colors cursor-pointer disabled:opacity-50 text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input field */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
              placeholder="Digite o que não ficou claro para o Professor esclarecer..."
              disabled={loading}
              className="flex-1 bg-white border border-[#D6CCB9] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-500 focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]/30"
            />
            <button
              type="button"
              onClick={() => handleAsk()}
              disabled={loading || !query.trim()}
              className="px-4 py-2.5 bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-xs shrink-0 whitespace-nowrap"
            >
              <span>Perguntar</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
