import React, { useState, useEffect } from 'react';
import {
  Volume2, Play, Pause, Square,
  Sparkles, RefreshCw, AlertCircle, RotateCcw
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
  autoPreload = false,
  preloadDelayMs = 150,
}) => {
  const [status, setStatus] = useState<SpeechStatus>(ProfessorAudioService.getStatus());
  const [speed, setSpeed] = useState<number>(ProfessorAudioService.getRate());
  const [persona, setPersona] = useState<'male' | 'female'>(ProfessorAudioService.getPersona());
  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  useEffect(() => {
    const unsubscribe = ProfessorAudioService.subscribe((newStatus) => {
      setStatus(newStatus);
      setPersona(ProfessorAudioService.getPersona());
      setNowMs(Date.now());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!status.neuralCooldownUntil || status.neuralCooldownUntil <= nowMs) return;
    const interval = setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [status.neuralCooldownUntil, nowMs]);

  useEffect(() => {
    if (!autoPreload || !textToSpeak.trim()) return;
    const timer = setTimeout(() => {
      ProfessorAudioService.preload(textToSpeak);
    }, preloadDelayMs);
    return () => clearTimeout(timer);
  }, [autoPreload, textToSpeak, persona, preloadDelayMs]);

  const isThisPlayerActive = ProfessorAudioService.isTextActive(textToSpeak);
  const isThisLoading = isThisPlayerActive && status.isLoadingNeural;
  const isThisSpeaking = isThisPlayerActive && status.isSpeaking;
  const isThisPaused = isThisPlayerActive && status.isPaused;
  const isCurrentlyPlaying = isThisSpeaking && !isThisPaused;
  const isReadyInstant = ProfessorAudioService.isReadyForInstantPlay(textToSpeak);
  const isPreloadingThis = ProfessorAudioService.isPreloadingText(textToSpeak);

  const cooldownSecondsLeft =
    status.neuralCooldownUntil && status.neuralCooldownUntil > nowMs
      ? Math.max(1, Math.ceil((status.neuralCooldownUntil - nowMs) / 1000))
      : 0;
  const isQuotaCooldownActive = cooldownSecondsLeft > 0;
  const isThisUsingLocalFallback = isThisSpeaking && !status.isNeuralAudio;
  const shouldShowFallbackBanner =
    !isReadyInstant &&
    (isThisUsingLocalFallback ||
      (isQuotaCooldownActive && status.fallbackReason === 'quota') ||
      (isThisPlayerActive && status.fallbackReason !== 'none') ||
      status.fallbackReason === 'auth' ||
      status.fallbackReason === 'missing_key');

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

  const handleRetryNeural = () => {
    if (isThisLoading) return;
    ProfessorAudioService.retryNeural(textToSpeak);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    ProfessorAudioService.setRate(newSpeed);
  };

  const handlePersonaChange = (newPersona: 'male' | 'female') => {
    setPersona(newPersona);
    ProfessorAudioService.setPersona(newPersona);
    if (isThisSpeaking) {
      ProfessorAudioService.play(textToSpeak);
    }
  };

  const getFallbackNoticeText = (): string => {
    if (status.fallbackReason === 'quota') {
      if (cooldownSecondsLeft > 0) {
        return `Limite temporário da API Gemini atingido. Reproduzindo com a voz do navegador — nova tentativa automática disponível em ${cooldownSecondsLeft}s.`;
      }
      return 'Limite temporário da API Gemini ocorreu na última tentativa. Você já pode tentar a voz natural novamente ou usar uma chave com faturamento ativo nas configurações.';
    }
    if (status.fallbackReason === 'auth' || status.fallbackReason === 'missing_key') {
      return 'Voz natural IA indisponível (verifique a chave da API Gemini nas configurações do servidor). Reproduzindo com a voz do navegador.';
    }
    if (status.fallbackReason === 'timeout') {
      return 'A voz natural IA demorou para responder e alternou para a voz do navegador.';
    }
    return status.fallbackMessage || 'Serviço de voz natural indisponível no momento. Reproduzindo com a voz do navegador.';
  };

  if (compact) {
    return (
      <div className="inline-flex flex-wrap items-center gap-2">
        <button
          onClick={handleTogglePlay}
          disabled={isThisLoading}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
            isCurrentlyPlaying
              ? isThisUsingLocalFallback
                ? 'bg-[#7B1E26] text-[#FAF7F2] border-[#7B1E26] shadow-xs'
                : 'bg-[#1B365D] text-[#FAF7F2] border-[#1B365D] shadow-xs'
              : 'bg-white hover:bg-[#F4EFE6] text-[#1B365D] border-[#D6CCB9]'
          } ${isThisLoading ? 'opacity-70 cursor-wait' : ''}`}
          title={
            isThisUsingLocalFallback
              ? getFallbackNoticeText()
              : isQuotaCooldownActive
              ? `Cota da voz natural em pausa (${cooldownSecondsLeft}s). Clique para ouvir na voz do navegador.`
              : 'Ouvir explicação do professor em áudio natural'
          }
        >
          {isThisLoading ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#8A6518]" />
              <span>Gerando Áudio Natural...</span>
            </>
          ) : isCurrentlyPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>{isThisUsingLocalFallback ? 'Pausar (Voz Local)' : 'Pausar'}</span>
            </>
          ) : isThisPaused ? (
            <>
              <Play className="w-3.5 h-3.5 text-[#1B365D]" />
              <span>Continuar</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#1B365D]" />
              <span>
                {isQuotaCooldownActive && !isReadyInstant
                  ? `Ouvir (Voz Local · ${cooldownSecondsLeft}s)`
                  : 'Ouvir em Áudio Natural'}
              </span>
            </>
          )}
        </button>

        {isThisSpeaking && (
          <button
            onClick={handleStop}
            className="p-1.5 rounded-lg bg-[#F4EFE6] hover:bg-[#E8E0D2] text-stone-700 hover:text-stone-950 border border-[#D6CCB9] transition-colors cursor-pointer"
            title="Parar áudio"
          >
            <Square className="w-3 h-3" />
          </button>
        )}

        {(isThisUsingLocalFallback || (isQuotaCooldownActive && !isReadyInstant)) && (
          <button
            onClick={handleRetryNeural}
            disabled={isThisLoading}
            className="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-[#7B1E26] border border-[#C59B3E]/50 text-[10px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            title={getFallbackNoticeText()}
          >
            <RotateCcw className="w-3 h-3" />
            <span>{cooldownSecondsLeft > 0 ? `Cota IA (${cooldownSecondsLeft}s)` : 'Tentar Voz IA'}</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-[#F5F0E6] border border-[#DFD7C8] shadow-xs space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left info & animated equalizer */}
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
            isCurrentlyPlaying
              ? isThisUsingLocalFallback
                ? 'bg-[#7B1E26] text-[#FAF7F2] border-[#7B1E26] shadow-xs'
                : 'bg-[#1B365D] text-[#E6C574] border-[#1B365D] shadow-xs'
              : 'bg-white text-[#1B365D] border-[#D6CCB9]'
          }`}>
            {isThisLoading ? (
              <RefreshCw className="w-5 h-5 animate-spin text-[#8A6518]" />
            ) : isCurrentlyPlaying ? (
              <div className="flex items-end gap-0.5 h-5">
                <span className="w-1 bg-[#E6C574] rounded-full animate-bounce [animation-delay:-0.3s] h-4" />
                <span className="w-1 bg-[#E6C574] rounded-full animate-bounce [animation-delay:-0.1s] h-5" />
                <span className="w-1 bg-[#E6C574] rounded-full animate-bounce [animation-delay:-0.2s] h-3" />
                <span className="w-1 bg-[#E6C574] rounded-full animate-bounce [animation-delay:-0.4s] h-5" />
              </div>
            ) : (
              <Volume2 className="w-5 h-5 text-[#1B365D]" />
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h5 className="font-display font-bold text-sm text-stone-900">
                {title}
              </h5>
              {isThisUsingLocalFallback || (isQuotaCooldownActive && !isReadyInstant) ? (
                <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-[#7B1E26] flex items-center gap-1 border-l border-[#D6CCB9] pl-2">
                  <AlertCircle className="w-3 h-3 text-[#7B1E26]" />
                  Voz do Navegador
                </span>
              ) : (
                <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-[#8A6518] flex items-center gap-1 border-l border-[#D6CCB9] pl-2">
                  <Sparkles className="w-3 h-3 text-[#8A6518]" />
                  Voz Natural IA
                </span>
              )}
            </div>
            <p className="text-[11px] font-serif text-stone-600 flex items-center gap-2 mt-0.5">
              <span>
                {isThisLoading
                  ? 'Sintetizando primeiro trecho em voz natural...'
                  : isCurrentlyPlaying
                  ? `Reproduzindo com ${status.activeVoiceName}`
                  : isThisPaused
                  ? 'Áudio pausado'
                  : isReadyInstant
                  ? 'Áudio em cache local · início instantâneo'
                  : isPreloadingThis
                  ? 'Preparando áudio em segundo plano...'
                  : isQuotaCooldownActive
                  ? `Cota da voz IA em pausa (${cooldownSecondsLeft}s) · clique para ouvir na voz do navegador`
                  : 'Clique em Ouvir Aula para gerar locução natural sob demanda'}
              </span>
            </p>
          </div>
        </div>

        {/* Right audio controls & Persona Selector */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {/* Persona selector: Prof. Eduardo vs Profª. Camila */}
          <div className="flex items-center bg-white border border-[#D6CCB9] rounded-lg p-0.5 text-xs">
            <button
              onClick={() => handlePersonaChange('male')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                persona === 'male'
                  ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
              title="Voz masculina do Professor"
            >
              Prof. Eduardo
            </button>
            <button
              onClick={() => handlePersonaChange('female')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                persona === 'female'
                  ? 'bg-[#1B365D] text-[#FAF7F2] font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
              title="Voz feminina da Professora"
            >
              Profª. Camila
            </button>
          </div>

          {/* Main Play/Pause Button */}
          <button
            onClick={handleTogglePlay}
            disabled={isThisLoading}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
              isCurrentlyPlaying
                ? 'bg-[#7B1E26] hover:bg-[#61161D] text-[#FAF7F2]'
                : 'bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2]'
            } ${isThisLoading ? 'opacity-70 cursor-wait' : ''}`}
          >
            {isThisLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Gerando...</span>
              </>
            ) : isCurrentlyPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pausar</span>
              </>
            ) : isThisPaused ? (
              <>
                <Play className="w-4 h-4" />
                <span>Continuar</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Ouvir Aula</span>
              </>
            )}
          </button>

          {/* Stop Button */}
          {isThisSpeaking && (
            <button
              onClick={handleStop}
              className="p-2 rounded-lg bg-white hover:bg-[#EAE3D5] text-stone-700 hover:text-stone-950 transition-colors cursor-pointer border border-[#D6CCB9]"
              title="Interromper fala"
            >
              <Square className="w-4 h-4" />
            </button>
          )}

          {/* Speed Selector Buttons */}
          <div className="flex items-center bg-white border border-[#D6CCB9] rounded-lg p-0.5">
            {[1.0, 1.25, 1.5].map((rate) => (
              <button
                key={rate}
                onClick={() => handleSpeedChange(rate)}
                className={`px-2 py-1 rounded-md text-[11px] font-bold font-mono tabular-nums transition-colors cursor-pointer ${
                  speed === rate
                    ? 'bg-[#1B365D] text-[#FAF7F2]'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
                title={`Velocidade ${rate}x`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {shouldShowFallbackBanner && (
        <div className="pt-2.5 border-t border-[#DFD7C8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-start gap-2 text-stone-700 font-serif">
            <AlertCircle className="w-4 h-4 text-[#7B1E26] shrink-0 mt-0.5" />
            <span>{getFallbackNoticeText()}</span>
          </div>
          {status.fallbackReason !== 'auth' && status.fallbackReason !== 'missing_key' && (
            <button
              onClick={handleRetryNeural}
              disabled={isThisLoading}
              className="self-start sm:self-auto shrink-0 px-3 py-1.5 rounded-lg bg-white hover:bg-[#EAE3D5] text-[#1B365D] border border-[#D6CCB9] font-sans font-semibold text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{cooldownSecondsLeft > 0 ? `Tentar agora (${cooldownSecondsLeft}s)` : 'Tentar Voz Natural'}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
