import React, { useState } from 'react';
import { 
  AlertOctagon, Play, CheckCircle2, BookOpen, Trash2, 
  RotateCcw, Sparkles, Filter, ShieldCheck, HelpCircle 
} from 'lucide-react';
import { LegalQuestion, SimuladoConfig } from '../types';
import { getAllQuestions } from '../services/questionsService';
import { removeQuestionFromCadernoErros } from '../services/storage';
import { VadeMecumModal } from './VadeMecumModal';
import { ProfessorTutorModal } from './ProfessorTutorModal';

interface CadernoErrosViewProps {
  cadernoErrosIds: string[];
  onRefreshData: () => void;
  onStartSimuladoErros: (questions: LegalQuestion[]) => void;
}

export const CadernoErrosView: React.FC<CadernoErrosViewProps> = ({
  cadernoErrosIds,
  onRefreshData,
  onStartSimuladoErros,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedQuestionForTutor, setSelectedQuestionForTutor] = useState<LegalQuestion | null>(null);
  const [selectedQuestionForVade, setSelectedQuestionForVade] = useState<LegalQuestion | null>(null);

  // Get matching questions
  const errorQuestions = getAllQuestions().filter(q => cadernoErrosIds.includes(q.id));
  
  const filteredQuestions = selectedSubject === 'ALL'
    ? errorQuestions
    : errorQuestions.filter(q => q.subject === selectedSubject);

  const errorSubjects = Array.from(new Set(errorQuestions.map(q => q.subject)));

  const handleRemove = (qId: string) => {
    removeQuestionFromCadernoErros(qId);
    onRefreshData();
  };

  const handleTrainAll = () => {
    if (filteredQuestions.length === 0) return;
    onStartSimuladoErros(filteredQuestions);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8 animate-in fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center gap-2.5">
            <AlertOctagon className="w-7 h-7 text-rose-400" />
            Caderno de Erros & Aprendizado Ativo
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Revisão cirúrgica de todas as questões que você errou em simulados para sanar lacunas
          </p>
        </div>

        {errorQuestions.length > 0 && (
          <button
            onClick={handleTrainAll}
            className="px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-lg shadow-rose-500/20"
          >
            <Play className="w-4 h-4 fill-white" />
            Refazer Questões Erradas ({filteredQuestions.length})
          </button>
        )}
      </div>

      {/* Caderno Stats Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h2 className="font-serif text-xl font-bold text-white">
              Por que o Caderno de Erros é a chave da aprovação?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Especialistas em concursos e na OAB comprovam que acertar questões que você já domina apenas traz conforto, mas <strong className="text-amber-400">é nos erros que reside o aumento real da sua pontuação</strong>. Refaça cada uma até dominar o dispositivo de lei violado.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-center px-4">
              <div className="text-xs text-slate-400 font-semibold mb-1">Questões no Caderno</div>
              <div className="text-3xl font-serif font-black text-rose-400">{errorQuestions.length}</div>
            </div>
            <div className="h-10 w-[1px] bg-slate-800" />
            <div className="text-center px-4">
              <div className="text-xs text-slate-400 font-semibold mb-1">Disciplinas com Dúvida</div>
              <div className="text-3xl font-serif font-black text-amber-400">{errorSubjects.length}</div>
            </div>
          </div>
        </div>

        {/* Filter by subject if errors exist */}
        {errorSubjects.length > 0 && (
          <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filtrar:
            </span>
            <button
              onClick={() => setSelectedSubject('ALL')}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                selectedSubject === 'ALL'
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Todas ({errorQuestions.length})
            </button>
            {errorSubjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`text-xs px-3 py-1.5 rounded-lg border whitespace-nowrap transition-colors cursor-pointer ${
                  selectedSubject === sub
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* List of Error Questions */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center shadow-xl space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-xl font-bold text-white">
            Seu Caderno de Erros está limpo!
          </h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            {errorQuestions.length === 0 
              ? "Você ainda não errou nenhuma questão ou não realizou simulados. Inicie um simulado para diagnosticar eventuais dúvidas."
              : "Nenhuma questão encontrada para a disciplina selecionada."}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.map((q) => (
            <div
              key={q.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 shadow-md transition-all space-y-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-amber-400 font-semibold">{q.exam}</span>
                  <span>·</span>
                  <span className="text-slate-300 font-medium">{q.subject}</span>
                  <span>·</span>
                  <span>{q.topic}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-rose-400 font-semibold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    Gabarito Oficial: {q.correctAnswer}
                  </span>
                  <button
                    onClick={() => handleRemove(q.id)}
                    className="p-1 rounded text-slate-500 hover:text-emerald-400 hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Remover do caderno (marcar como dominada)"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Statement */}
              <div className="font-serif text-sm sm:text-base text-slate-200 leading-relaxed">
                {q.statement}
              </div>

              {/* Legal explanation summary */}
              <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-400 block mb-1">
                  Fundamento do Gabarito:
                </strong>
                {q.justification}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedQuestionForVade(q)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ver Legislação</span>
                  </button>
                  <button
                    onClick={() => setSelectedQuestionForTutor(q)}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold flex items-center gap-1.5 border border-amber-500/30 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Perguntar ao Professor</span>
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(q.id)}
                  className="text-xs text-slate-400 hover:text-emerald-400 font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Já aprendi, remover do caderno</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      {selectedQuestionForVade && (
        <VadeMecumModal
          references={selectedQuestionForVade.statuteReferences}
          isOpen={Boolean(selectedQuestionForVade)}
          onClose={() => setSelectedQuestionForVade(null)}
        />
      )}

      {selectedQuestionForTutor && (
        <ProfessorTutorModal
          question={selectedQuestionForTutor}
          isOpen={Boolean(selectedQuestionForTutor)}
          onClose={() => setSelectedQuestionForTutor(null)}
        />
      )}
    </div>
  );
};
