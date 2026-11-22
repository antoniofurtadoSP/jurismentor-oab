import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, BookOpen, RefreshCw, X, Lightbulb, Layers } from 'lucide-react';
import { LegalQuestion } from '../types';
import type { ExplanationLevel } from '../types/knowledgeBase';
import { askProfessorTutor } from '../services/aiTutor';
import { ProfessorAudioService } from '../services/speech';
import { ProfessorAudioPlayer } from './ProfessorAudioPlayer';

interface ProfessorTutorModalProps {
  question?: LegalQuestion;
  isOpen: boolean;
  onClose: () => void;
}

interface TutorChatMsg {
  sender: 'user' | 'tutor';
  text: string;
  time: string;
  level?: ExplanationLevel;
  groundedSources?: string[];
}

const LEVEL_OPTIONS: Array<{ id: ExplanationLevel; label: string; desc: string }> = [
  { id: 'simples', label: 'Nível 1 · Simples', desc: 'Linguagem acessível' },
  { id: 'intermediario', label: 'Nível 2 · Intermediário', desc: 'Padrão OAB/FGV' },
  { id: 'aprofundado', label: 'Nível 3 · Aprofundado', desc: 'Doutrina e STF/STJ' },
];

export const ProfessorTutorModal: React.FC<ProfessorTutorModalProps> = ({
  question,
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [explanationLevel, setExplanationLevel] = useState<ExplanationLevel>('intermediario');
  const [messages, setMessages] = useState<TutorChatMsg[]>([
    {
      sender: 'tutor',
      text: question
        ? `Olá, futuro(a) colega! Sou o seu Professor Jurídico. Estou pronto para dissecar a questão da prova **${question.exam}** (${question.subject}). Escolha o nível de explicação desejado acima (Simples, Intermediário ou Aprofundado) e faça sua pergunta.`
        : `Olá! Sou o seu Professor Jurídico JurisMentor. Como posso auxiliá-lo hoje na sua preparação para a OAB ou Faculdade de Direito? Selecione o nível de profundidade e tire dúvidas sobre legislação, súmulas ou diferenças entre institutos.`,
      time: 'Agora',
    },
  ]);

  if (!isOpen) return null;

  const handleSend = async (userText?: string) => {
    const textToSend = userText || query;
    if (!textToSend.trim() || loading) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { sender: 'user', text: textToSend, time }]);
    setQuery('');
    setLoading(true);

    try {
      const res = await askProfessorTutor({
        question,
        userQuery: textToSend,
        mode: question ? 'explain_question' : 'free_doubt',
        explanationLevel,
        context: question ? `Questão sobre ${question.subject}: ${question.topic}` : 'Estudo para OAB e Concursos',
      });

      ProfessorAudioService.preload(res.answer);
      setMessages(prev => [
        ...prev,
        {
          sender: 'tutor',
          text: res.answer,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          level: explanationLevel,
          groundedSources: res.groundedSources,
        },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          sender: 'tutor',
          text: 'Ocorreu uma instabilidade ao formular a resposta do professor. Por favor, tente novamente.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const presetQuestions = question
    ? [
        'Explicar o artigo citado de forma mais simples',
        'Dar um exemplo prático do cotidiano',
        'Quais são as exceções à regra desta questão?',
        'Comparar com situações semelhantes cobradas pela FGV',
      ]
    : [
        'Qual a diferença entre Dolo Eventual e Culpa Consciente?',
        'Como funciona o controle concentrado de constitucionalidade na OAB?',
        'Explique de forma simples o princípio da anterioridade tributária',
        'Quais as exceções à impenhorabilidade do bem de família?',
      ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] border border-[#D6CCB9] rounded-2xl w-full max-w-3xl h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#E2DBD0] flex flex-wrap items-center justify-between gap-3 bg-[#F3EFE6]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B365D] border border-[#C59B3E]/50 flex items-center justify-center text-[#E6C574] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-stone-900">
                Professor JurisMentor
              </h3>
              <p className="text-xs font-serif italic text-stone-600">
                {question ? `Análise da questão · ${question.subject}` : 'Mentoria jurídica fundamentada em 3 níveis'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white border border-[#D6CCB9] rounded-xl p-1">
              <Layers className="w-3.5 h-3.5 text-[#8A6518] ml-1.5 mr-0.5 hidden sm:block" />
              {LEVEL_OPTIONS.map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setExplanationLevel(opt.id)}
                  title={opt.desc}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    explanationLevel === opt.id
                      ? 'bg-[#1B365D] text-[#FAF7F2]'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-[#F4EFE6]'
                  }`}
                >
                  {opt.label.split(' · ')[1]}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-950 hover:bg-[#EAE3D5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Question context bar if in question mode */}
        {question && (
          <div className="px-5 py-2.5 bg-white border-b border-[#E2DBD0] flex items-center justify-between text-xs text-stone-700">
            <div className="flex items-center gap-2 truncate">
              <BookOpen className="w-4 h-4 text-[#1B365D] shrink-0" />
              <span className="truncate font-serif">
                <strong className="text-stone-900">{question.exam}</strong> · {question.topic}
              </span>
            </div>
            <span className="text-[#7B1E26] font-semibold font-mono shrink-0 ml-2 tabular-nums">
              Gabarito: {question.correctAnswer}
            </span>
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#FAF7F2]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'tutor' && (
                <div className="w-8 h-8 rounded-lg bg-[#1B365D] text-[#E6C574] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-[#1B365D] text-[#FAF7F2] rounded-tr-none'
                    : 'bg-white border border-[#DFD7C8] text-stone-800 rounded-tl-none font-serif whitespace-pre-line'
                }`}
              >
                {msg.text}

                {msg.sender === 'tutor' && msg.groundedSources && msg.groundedSources.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-[#E6DFD3] text-[11px] font-sans text-stone-600">
                    <strong className="text-[#7B1E26]">Fontes verificadas na base:</strong>{' '}
                    {msg.groundedSources.slice(0, 4).join(' · ')}
                  </div>
                )}

                <div
                  className={`text-[10px] mt-2 flex items-center justify-between font-sans ${
                    msg.sender === 'user' ? 'text-stone-200' : 'text-stone-500'
                  }`}
                >
                  {msg.sender === 'tutor' && (
                    <ProfessorAudioPlayer
                      textToSpeak={msg.text}
                      compact={true}
                    />
                  )}
                  <span className="font-mono ml-auto tabular-nums">{msg.time}</span>
                </div>
              </div>
              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-[#EAE3D5] text-stone-800 border border-[#D6CCB9] flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start items-center text-stone-700 text-sm py-2 font-serif italic">
              <div className="w-8 h-8 rounded-lg bg-[#F4EFE6] border border-[#DFD7C8] text-[#1B365D] flex items-center justify-center animate-spin">
                <RefreshCw className="w-4 h-4" />
              </div>
              <span>
                Consultando a Base Jurídica e preparando a aula no nível {explanationLevel}...
              </span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Prompts */}
        <div className="px-4 py-2.5 border-t border-[#E2DBD0] bg-[#F5F0E6] flex gap-2 overflow-x-auto scrollbar-none">
          {presetQuestions.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(preset)}
              disabled={loading}
              className="text-xs px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF7F2] text-stone-800 hover:text-[#1B365D] whitespace-nowrap shrink-0 border border-[#D6CCB9] hover:border-[#1B365D]/50 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Lightbulb className="w-3 h-3 text-[#8A6518]" />
              {preset}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-[#E2DBD0] bg-[#F3EFE6] flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte sobre diferença entre institutos, exceções, exemplos ou artigo..."
            className="flex-1 bg-white border border-[#D6CCB9] rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-500 focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]/30"
            disabled={loading}
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !query.trim()}
            className="p-3 bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] rounded-xl font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
