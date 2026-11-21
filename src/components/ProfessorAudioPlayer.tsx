import React, { useState, useEffect } from 'react';
import { 
  Volume2, VolumeX, Play, Pause, Square, FastForward, 
  Sparkles, RefreshCw, User, UserCheck, AudioWaveform
} from 'lucide-react';
import { ProfessorAudioService, SpeechStatus } from '../services/speech';

interface ProfessorAudioPlayerProps {
  textToSpeak: string;
  title?: string;
  compact?: boolean;
  autoPreload?: boolean;
  preloadDelayMs?: number;
}

export const ProfessorAudioPlayer: React.FC<ProfessorAudioPlayerProps> = ({
  textToSpeak,
  title = 'Aula do Professor em Áudio (pt-BR)',
  compact = false,
  autoPreload = !compact,
  preloadDelayMs = 150,
}) => {
  const [status, setStatus] = useState<SpeechStatus>(ProfessorAudioService.getStatus());
  const [speed, setSpeed] = useState<number>(ProfessorAudioService.getRate());
  const [persona, setPersona] = useState<'male' | 'female'>(ProfessorAudioService.getPersona());

  useEffect(() => {
    const unsubscribe = ProfessorAudioService.subscribe((newStatus) => {
      setStatus(newStatus);
      setPersona(ProfessorAudioService.getPersona());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!autoPreload || !textToSpeak.trim()) return;
    const timer = setTimeout(() => {
      ProfessorAudioService.preload(textToSpeak);
    }, preloadDelayMs);
    return () => clearTimeout(timer);
  }, [autoPreload, textToSpeak, persona, preloadDelayMs]);

  const handleHoverPreload = () => {
    if (textToSpeak.trim()) {
      ProfessorAudioService.preload(textToSpeak);
    }
  };

  const isThisPlayerActive = ProfessorAudioService.isTextActive(textToSpeak);
  const isThisLoading = isThisPlayerActive && status.isLoadingNeural;
  const isThisSpeaking = isThisPlayerActive && status.isSpeaking;
  const isThisPaused = isThisPlayerActive && status.isPaused;
  const isCurrentlyPlaying = isThisSpeaking && !isThisPaused;
  const isReadyInstant = ProfessorAudioService.isReadyForInstantPlay(textToSpeak);
  const isPreloadingThis = ProfessorAudioService.isPreloadingText(textToSpeak);

  const handleTogglePlay = () => {
    if (isThisLoading) return;

    if (isThisSpeaking && !isThisPaused) {
      ProfessorAudioService.pause();
    } else if (isThisPaused) {
      ProfessorAudioService.resume();
    } else {
      ProfessorAudioService.play(textToSpeak);
    }
  };

  const handleStop = () => {
    ProfessorAudioService.stop();
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    ProfessorAudioService.setRate(newSpeed);
  };

  const handlePersonaChange = (newPersona: 'male' | 'female') => {
    setPersona(newPersona);
    ProfessorAudioService.setPersona(newPersona);
    if (isThisSpeaking) {
      // Re-trigger with new voice persona
      ProfessorAudioService.play(textToSpeak);
    }
  };

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2">
        <button
          onClick={handleTogglePlay}
          onMouseEnter={handleHoverPreload}
          onFocus={handleHoverPreload}
          disabled={isThisLoading}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
            isCurrentlyPlaying
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-amber-300 border-amber-500/30'
          } ${isThisLoading ? 'opacity-70 cursor-wait' : ''}`}
          title="Ouvir explicação do professor em áudio natural"
        >
          {isThisLoading ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
              <span>Gerando Áudio Natural...</span>
            </>
          ) : isCurrentlyPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Pausar</span>
            </>
          ) : isThisPaused ? (
            <>
              <Play className="w-3.5 h-3.5 text-amber-400" />
              <span>Continuar</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Ouvir em Áudio Natural</span>
            </>
          )}
        </button>

        {isThisSpeaking && (
          <button
            onClick={handleStop}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Parar áudio"
          >
            <Square className="w-3 h-3" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/20 via-slate-950 to-slate-900 border border-amber-500/30 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left info & animated equalizer */}
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
            isCurrentlyPlaying
              ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-md shadow-amber-500/10'
              : 'bg-slate-900 text-slate-400 border-slate-800'
          }`}>
            {isThisLoading ? (
              <RefreshCw className="w-5 h-5 animate-spin text-amber-400" />
            ) : isCurrentlyPlaying ? (
              <div className="flex items-end gap-0.5 h-5">
                <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.3s] h-4" />
                <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.1s] h-5" />
                <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.2s] h-3" />
                <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.4s] h-5" />
              </div>
            ) : (
              <Volume2 className="w-5 h-5 text-amber-400" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h5 className="font-serif font-bold text-sm text-white">
                {title}
              </h5>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Voz Natural IA
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
              <span>
                {isThisLoading 
                  ? 'Sintetizando primeiro trecho em voz natural...'
                  : isCurrentlyPlaying 
                  ? `Reproduzindo com ${status.activeVoiceName}` 
                  : isThisPaused 
                  ? 'Áudio pausado' 
                  : isReadyInstant
                  ? 'Áudio pré-carregado · início instantâneo'
                  : isPreloadingThis
                  ? 'Preparando áudio em segundo plano...'
                  : 'Locução com entonação humana e dicção pausada'}
              </span>
            </p>
          </div>
        </div>

        {/* Right audio controls & Persona Selector */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {/* Persona selector: Prof. Eduardo vs Profª. Camila */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 text-xs">
            <button
              onClick={() => handlePersonaChange('male')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                persona === 'male'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Voz masculina do Professor"
            >
              Prof. Eduardo
            </button>
            <button
              onClick={() => handlePersonaChange('female')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                persona === 'female'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Voz feminina da Professora"
            >
              Profª. Camila
            </button>
          </div>

          {/* Main Play/Pause Button */}
          <button
            onClick={handleTogglePlay}
            onMouseEnter={handleHoverPreload}
            onFocus={handleHoverPreload}
            disabled={isThisLoading}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              isCurrentlyPlaying
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
            } ${isThisLoading ? 'opacity-70 cursor-wait' : ''}`}
          >
            {isThisLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin fill-slate-950" />
                <span>Gerando...</span>
              </>
            ) : isCurrentlyPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-slate-950" />
                <span>Pausar</span>
              </>
            ) : isThisPaused ? (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Continuar</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Ouvir Aula</span>
              </>
            )}
          </button>

          {/* Stop Button */}
          {isThisSpeaking && (
            <button
              onClick={handleStop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
              title="Interromper fala"
            >
              <Square className="w-4 h-4" />
            </button>
          )}

          {/* Speed Selector Buttons */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5">
            {[1.0, 1.25, 1.5].map((rate) => (
              <button
                key={rate}
                onClick={() => handleSpeedChange(rate)}
                className={`px-2 py-1 rounded-lg text-[11px] font-bold font-mono transition-colors cursor-pointer ${
                  speed === rate
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title={`Velocidade ${rate}x`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
