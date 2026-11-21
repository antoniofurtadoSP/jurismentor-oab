// Advanced Brazilian Portuguese (pt-BR) Speech Synthesis Service for Professor Jurídico
// Supports Progressive Streaming Neural AI Voice (Gemini TTS PCM) + Client Audio Cache + Browser Fallback

export interface SpeechStatus {
  isSpeaking: boolean;
  isPaused: boolean;
  isLoadingNeural: boolean;
  isNeuralAudio: boolean;
  currentChunkIndex: number;
  totalChunks: number;
  activeVoiceName: string;
}

type StatusListener = (status: SpeechStatus) => void;

const TTS_SAMPLE_RATE = 24000;
const FIRST_CHUNK_TIMEOUT_MS = 9000;
const MAX_CLIENT_CACHE_ITEMS = 60;

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function buildWavBlobUrlFromPcmChunks(chunks: Uint8Array[], sampleRate = TTS_SAMPLE_RATE): string {
  const totalPcmBytes = chunks.reduce((acc, c) => acc + c.byteLength, 0);
  const buffer = new ArrayBuffer(44 + totalPcmBytes);
  const view = new DataView(buffer);

  const writeStr = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + totalPcmBytes, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true); // PCM
  view.setUint16(20, 1, true); // Linear PCM
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true); // byteRate
  view.setUint16(32, 2, true); // blockAlign
  view.setUint16(34, 16, true); // bitsPerSample
  writeStr(36, 'data');
  view.setUint32(40, totalPcmBytes, true);

  const out = new Uint8Array(buffer, 44);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return URL.createObjectURL(new Blob([buffer], { type: 'audio/wav' }));
}

export class ProfessorAudioService {
  private static isSpeaking = false;
  private static isPaused = false;
  private static isLoadingNeural = false;
  private static isNeuralAudio = false;
  private static currentRate = 1.05;
  private static selectedPersona: 'male' | 'female' = 'male'; // male (Puck) / female (Kore)
  private static listeners: Set<StatusListener> = new Set();

  // Client-side LRU cache of synthesized WAV URLs for 0ms instant replay
  private static clientAudioCache: Map<string, string> = new Map();

  // HTML5 Audio instance (cached WAV playback)
  private static currentHtmlAudio: HTMLAudioElement | null = null;

  // Web Audio API streaming playback state
  private static audioContext: AudioContext | null = null;
  private static activeStreamSources: Set<AudioBufferSourceNode> = new Set();
  private static streamNextPlayTime = 0;
  private static streamCompleted = false;
  private static activeStreamAbort: AbortController | null = null;
  private static playbackSessionId = 0;

  // Local Web Speech Fallback state
  private static currentChunks: string[] = [];
  private static currentChunkIndex = 0;
  private static activeUtterance: SpeechSynthesisUtterance | null = null;
  private static keepAliveTimer: any = null;

  public static subscribe(listener: StatusListener): () => void {
    this.listeners.add(listener);
    listener(this.getStatus());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private static notify() {
    const status = this.getStatus();
    this.listeners.forEach(fn => fn(status));
  }

  public static getStatus(): SpeechStatus {
    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPaused,
      isLoadingNeural: this.isLoadingNeural,
      isNeuralAudio: this.isNeuralAudio,
      currentChunkIndex: this.currentChunkIndex,
      totalChunks: this.currentChunks.length,
      activeVoiceName: this.isNeuralAudio
        ? this.selectedPersona === 'male'
          ? 'Prof. Eduardo (Voz Humana IA)'
          : 'Profª. Camila (Voz Humana IA)'
        : 'Português do Brasil (pt-BR)',
    };
  }

  public static setPersona(persona: 'male' | 'female') {
    this.selectedPersona = persona;
    this.notify();
  }

  public static getPersona(): 'male' | 'female' {
    return this.selectedPersona;
  }

  public static setRate(rate: number) {
    this.currentRate = Math.max(0.75, Math.min(2.0, rate));
    if (this.currentHtmlAudio) {
      this.currentHtmlAudio.playbackRate = this.currentRate;
    } else if (this.activeStreamSources.size > 0 && this.audioContext) {
      this.activeStreamSources.forEach(src => {
        try {
          src.playbackRate.setValueAtTime(this.currentRate, this.audioContext!.currentTime);
        } catch {
          // ignore ended nodes
        }
      });
    } else if (this.isSpeaking && !this.isPaused && this.currentChunks.length > 0) {
      this.speakChunk(this.currentChunkIndex);
    }
    this.notify();
  }

  public static getRate(): number {
    return this.currentRate;
  }

  private static setClientCache(key: string, audioUrl: string) {
    if (this.clientAudioCache.size >= MAX_CLIENT_CACHE_ITEMS) {
      const oldestKey = this.clientAudioCache.keys().next().value;
      if (oldestKey) {
        const oldUrl = this.clientAudioCache.get(oldestKey);
        if (oldUrl && oldUrl.startsWith('blob:')) {
          URL.revokeObjectURL(oldUrl);
        }
        this.clientAudioCache.delete(oldestKey);
      }
    }
    this.clientAudioCache.set(key, audioUrl);
  }

  private static ensureAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    const AudioCtx =
      window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;

    if (!this.audioContext || this.audioContext.state === 'closed') {
      this.audioContext = new AudioCtx();
    }
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume().catch(() => {});
    }
    return this.audioContext;
  }

  /**
   * Pre-processes legal text so that Brazilian statutes, acronyms and Roman numerals
   * sound natural, fluid and authoritative when spoken.
   */
  public static formatLegalTextForSpeech(text: string): string {
    let spoken = text;

    // Remove any prompt instruction prefix so the student hears the explanation directly
    spoken = spoken
      .replace(/^fale com entonação[^\n\:\.]*[\n\:\.]+\s*/i, '')
      .replace(/^[\[\(]?instru[çc][ãa]o[^\]\)]*[\]\)]*:?\s*/i, '')
      .replace(/[\*\_#\`\[\]]/g, '')
      .replace(/•/g, '')
      .trim();

    spoken = spoken
      .replace(/\bArt\.\s*(\d+)/gi, 'Artigo $1')
      .replace(/\bArts\.\s*/gi, 'Artigos ')
      .replace(/\bparágrafo\s*único\b/gi, 'parágrafo único')
      .replace(/§\s*(\d+)º?/gi, 'parágrafo $1')
      .replace(/\bCF\/88\b/gi, 'Constituição Federal de 88')
      .replace(/\bCC\/02\b/gi, 'Código Civil')
      .replace(/\bCPC\/15\b/gi, 'Código de Processo Civil')
      .replace(/\bCPP\b/gi, 'Código de Processo Penal')
      .replace(/\bCP\b/gi, 'Código Penal')
      .replace(/\bCLT\b/gi, 'Consolidação das Leis do Trabalho')
      .replace(/\bCTN\b/gi, 'Código Tributário Nacional')
      .replace(/\bCDC\b/gi, 'Código de Defesa do Consumidor')
      .replace(/\bEAOAB\b/gi, 'Estatuto da O. A. B.')
      .replace(/\bOAB\b/gi, 'O. A. B.')
      .replace(/\bCED\b/gi, 'Código de Ética e Disciplina')
      .replace(/\bSTF\b/gi, 'Supremo Tribunal Federal')
      .replace(/\bSTJ\b/gi, 'Superior Tribunal de Justiça')
      .replace(/\bADI\b/gi, 'Ação Direta de Inconstitucionalidade')
      .replace(/\bADC\b/gi, 'Ação Declaratória de Constitucionalidade')
      .replace(/\bADPF\b/gi, 'Arguição de Descumprimento de Preceito Fundamental')
      .replace(/\bREsp\b/gi, 'Recurso Especial')
      .replace(/\bRE\s+(\d+)/gi, 'Recurso Extraordinário $1')
      .replace(/\bSúmula Vinculante\s*nº?\s*(\d+)/gi, 'Súmula Vinculante número $1 do Supremo Tribunal Federal')
      .replace(/\bex nunc\b/gi, 'équis nunqui')
      .replace(/\bex tunc\b/gi, 'équis tunqui')
      .replace(/\bquota litis\b/gi, 'quóta lítis');

    spoken = spoken.replace(/\s+/g, ' ').trim();
    return spoken;
  }

  private static playAudioUrl(audioUrl: string, formattedFallback: string, sessionId: number) {
    if (sessionId !== this.playbackSessionId) return;

    this.isLoadingNeural = false;
    this.isNeuralAudio = true;
    this.isSpeaking = true;
    this.isPaused = false;

    const audio = new Audio(audioUrl);
    audio.playbackRate = this.currentRate;
    this.currentHtmlAudio = audio;

    audio.onended = () => {
      if (sessionId === this.playbackSessionId) {
        this.stop();
      }
    };

    audio.onerror = () => {
      if (sessionId === this.playbackSessionId) {
        this.playWithLocalSpeech(formattedFallback);
      }
    };

    audio.play().catch(() => {
      if (sessionId === this.playbackSessionId) {
        this.playWithLocalSpeech(formattedFallback);
      }
    });
    this.notify();
  }

  private static schedulePcmChunk(
    ctx: AudioContext,
    pcmBytes: Uint8Array,
    sessionId: number
  ): void {
    if (sessionId !== this.playbackSessionId || pcmBytes.byteLength < 2) return;

    const sampleCount = Math.floor(pcmBytes.byteLength / 2);
    const int16 = new Int16Array(pcmBytes.buffer, pcmBytes.byteOffset, sampleCount);
    const audioBuffer = ctx.createBuffer(1, sampleCount, TTS_SAMPLE_RATE);
    const channelData = audioBuffer.getChannelData(0);

    for (let i = 0; i < sampleCount; i++) {
      channelData[i] = int16[i] / 32768;
    }

    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = this.currentRate;
    source.connect(ctx.destination);

    const startTime = Math.max(ctx.currentTime + 0.02, this.streamNextPlayTime);
    const durationInRealTime = audioBuffer.duration / this.currentRate;
    this.streamNextPlayTime = startTime + durationInRealTime;

    this.activeStreamSources.add(source);
    source.onended = () => {
      this.activeStreamSources.delete(source);
      if (
        sessionId === this.playbackSessionId &&
        this.streamCompleted &&
        this.activeStreamSources.size === 0
      ) {
        this.stop();
      }
    };

    source.start(startTime);
  }

  /**
   * Main Play function:
   * 1. Plays immediately (0ms) if audio is already in client cache
   * 2. Otherwise opens Progressive Streaming Neural TTS (/api/tts/stream) so playback begins on chunk 1 (~1s)
   * 3. Falls back cleanly to /api/tts or local browser SpeechSynthesis if unavailable or timed out
   */
  public static async play(rawText: string) {
    this.stop();
    const sessionId = ++this.playbackSessionId;

    const formatted = this.formatLegalTextForSpeech(rawText);
    const geminiVoice = this.selectedPersona === 'male' ? 'Puck' : 'Kore';
    const cacheKey = `${geminiVoice}_${formatted.slice(0, 1200)}`;

    // 1. Instant client-side cache hit (0ms)
    const cachedUrl = this.clientAudioCache.get(cacheKey);
    if (cachedUrl) {
      this.playAudioUrl(cachedUrl, formatted, sessionId);
      return;
    }

    // Unlock Web Audio Context immediately inside user gesture before any await
    const audioCtx = this.ensureAudioContext();

    this.isLoadingNeural = true;
    this.notify();

    const abortController = new AbortController();
    this.activeStreamAbort = abortController;
    let firstAudioArrived = false;

    const firstByteTimer = setTimeout(() => {
      if (!firstAudioArrived && sessionId === this.playbackSessionId) {
        abortController.abort();
      }
    }, FIRST_CHUNK_TIMEOUT_MS);

    try {
      const response = await fetch('/api/tts/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: formatted,
          voice: geminiVoice,
        }),
        signal: abortController.signal,
      });

      if (!response.ok || !response.body || !audioCtx) {
        throw new Error('Stream TTS indisponível');
      }

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const json = await response.json();
        clearTimeout(firstByteTimer);
        if (json.success && json.audioUrl) {
          this.setClientCache(cacheKey, json.audioUrl);
          this.playAudioUrl(json.audioUrl, formatted, sessionId);
          return;
        }
        throw new Error(json.message || 'Fallback solicitado');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let lineBuffer = '';
      let leftoverByte: number | null = null;
      const collectedPcm: Uint8Array[] = [];

      this.streamNextPlayTime = audioCtx.currentTime + 0.03;
      this.streamCompleted = false;

      while (sessionId === this.playbackSessionId) {
        const { done, value } = await reader.read();
        if (done) break;

        lineBuffer += decoder.decode(value, { stream: true });
        const lines = lineBuffer.split('\n');
        lineBuffer = lines.pop() || '';

        for (const rawLine of lines) {
          const line = rawLine.trim();
          if (!line) continue;

          const event = JSON.parse(line);
          if (event.type === 'wav' && event.audioUrl) {
            clearTimeout(firstByteTimer);
            firstAudioArrived = true;
            this.setClientCache(cacheKey, event.audioUrl);
            this.playAudioUrl(event.audioUrl, formatted, sessionId);
            return;
          }

          if (event.type === 'pcm' && event.data) {
            if (!firstAudioArrived) {
              firstAudioArrived = true;
              clearTimeout(firstByteTimer);
              this.isLoadingNeural = false;
              this.isNeuralAudio = true;
              this.isSpeaking = true;
              this.isPaused = false;
              this.notify();
            }

            let rawBytes = base64ToBytes(event.data);
            if (leftoverByte !== null) {
              const combined = new Uint8Array(rawBytes.length + 1);
              combined[0] = leftoverByte;
              combined.set(rawBytes, 1);
              rawBytes = combined;
              leftoverByte = null;
            }

            if (rawBytes.length % 2 !== 0) {
              leftoverByte = rawBytes[rawBytes.length - 1];
              rawBytes = rawBytes.subarray(0, rawBytes.length - 1);
            }

            if (rawBytes.length >= 2) {
              collectedPcm.push(rawBytes);
              this.schedulePcmChunk(audioCtx, rawBytes, sessionId);
            }
          } else if (event.type === 'fallback') {
            throw new Error(event.message || 'Fallback local solicitado');
          } else if (event.type === 'done') {
            this.streamCompleted = true;
            if (collectedPcm.length > 0) {
              const wavBlobUrl = buildWavBlobUrlFromPcmChunks(collectedPcm, TTS_SAMPLE_RATE);
              this.setClientCache(cacheKey, wavBlobUrl);
            }
            if (this.activeStreamSources.size === 0 && sessionId === this.playbackSessionId) {
              this.stop();
            }
          }
        }
      }

      clearTimeout(firstByteTimer);
      if (sessionId === this.playbackSessionId && firstAudioArrived) {
        this.streamCompleted = true;
        if (this.activeStreamSources.size === 0) {
          this.stop();
        }
        return;
      }
    } catch (e) {
      clearTimeout(firstByteTimer);
      if (sessionId !== this.playbackSessionId) return;
      if (!firstAudioArrived) {
        console.warn('Stream TTS indisponível/lento, alternando para síntese local:', e);
      } else {
        return;
      }
    }

    // Fallback instantâneo para síntese local do navegador
    if (sessionId === this.playbackSessionId && !firstAudioArrived) {
      this.isLoadingNeural = false;
      this.playWithLocalSpeech(formatted);
    }
  }

  private static playWithLocalSpeech(formattedText: string) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.stop();
      return;
    }

    this.isNeuralAudio = false;
    this.currentChunks = this.splitIntoChunks(formattedText);
    this.currentChunkIndex = 0;
    this.isSpeaking = true;
    this.isPaused = false;

    this.notify();
    this.startKeepAlive();
    this.speakChunk(0);
  }

  private static splitIntoChunks(text: string): string[] {
    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
    const chunks: string[] = [];

    for (const sentence of sentences) {
      const trimmed = sentence.trim();
      if (!trimmed) continue;
      chunks.push(trimmed);
    }

    return chunks.length > 0 ? chunks : [text];
  }

  private static speakChunk(index: number) {
    if (index >= this.currentChunks.length) {
      this.stop();
      return;
    }

    window.speechSynthesis.cancel();

    this.currentChunkIndex = index;
    const chunkText = this.currentChunks[index];
    const utterance = new SpeechSynthesisUtterance(chunkText);

    utterance.lang = 'pt-BR';
    utterance.rate = this.currentRate * 0.95; // slightly slower cadence sounds far more natural
    utterance.pitch = this.selectedPersona === 'male' ? 0.95 : 1.05;

    // Pick best high-fidelity natural Brazilian Portuguese voice available on system/browser
    const voices = window.speechSynthesis.getVoices();
    const ptVoices = voices.filter(v => v.lang.replace('_', '-').toLowerCase().startsWith('pt'));

    if (ptVoices.length > 0) {
      const naturalKeywords = ['natural', 'neural', 'online', 'google', 'brazil', 'brasil'];
      const brVoices = ptVoices.filter(v => v.lang.toLowerCase().includes('br'));
      const pool = brVoices.length > 0 ? brVoices : ptVoices;

      const maleKeywords = ['eduardo', 'antonio', 'jorge', 'male', 'homem', 'daniel', 'felipe'];
      const femaleKeywords = ['camila', 'francisca', 'luciana', 'female', 'mulher', 'maria', 'vitoria', 'leticia'];
      const preferredKeywords = this.selectedPersona === 'male' ? maleKeywords : femaleKeywords;

      let bestVoice = pool.find(v => {
        const name = v.name.toLowerCase();
        return preferredKeywords.some(k => name.includes(k)) && naturalKeywords.some(k => name.includes(k));
      });

      if (!bestVoice) {
        bestVoice = pool.find(v => {
          const name = v.name.toLowerCase();
          return naturalKeywords.some(k => name.includes(k));
        });
      }

      if (!bestVoice) {
        bestVoice = pool.find(v => {
          const name = v.name.toLowerCase();
          return preferredKeywords.some(k => name.includes(k));
        });
      }

      utterance.voice = bestVoice || pool[0];
    }

    utterance.onend = () => {
      if (this.isSpeaking && !this.isPaused && !this.isNeuralAudio) {
        this.speakChunk(index + 1);
      }
    };

    utterance.onerror = e => {
      if (e.error === 'canceled' || e.error === 'interrupted') return;
      this.speakChunk(index + 1);
    };

    this.activeUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    this.notify();
  }

  public static pause() {
    if (this.currentHtmlAudio && this.isSpeaking) {
      this.currentHtmlAudio.pause();
      this.isPaused = true;
      this.notify();
      return;
    }

    if (this.audioContext && this.isNeuralAudio && this.isSpeaking) {
      this.audioContext.suspend().catch(() => {});
      this.isPaused = true;
      this.notify();
      return;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window && this.isSpeaking) {
      window.speechSynthesis.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  public static resume() {
    if (this.currentHtmlAudio && this.isPaused) {
      this.currentHtmlAudio.play().catch(() => {});
      this.isPaused = false;
      this.notify();
      return;
    }

    if (this.audioContext && this.isNeuralAudio && this.isPaused) {
      this.audioContext.resume().catch(() => {});
      this.isPaused = false;
      this.notify();
      return;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window && this.isPaused) {
      window.speechSynthesis.resume();
      this.isPaused = false;
      this.notify();
    }
  }

  public static stop() {
    this.playbackSessionId += 1;

    if (this.activeStreamAbort) {
      this.activeStreamAbort.abort();
      this.activeStreamAbort = null;
    }

    this.activeStreamSources.forEach(src => {
      try {
        src.onended = null;
        src.stop();
        src.disconnect();
      } catch {
        // ignore
      }
    });
    this.activeStreamSources.clear();
    this.streamCompleted = false;
    this.streamNextPlayTime = 0;

    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume().catch(() => {});
    }

    if (this.currentHtmlAudio) {
      this.currentHtmlAudio.pause();
      this.currentHtmlAudio.currentTime = 0;
      this.currentHtmlAudio = null;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    this.clearKeepAlive();
    this.isSpeaking = false;
    this.isPaused = false;
    this.isLoadingNeural = false;
    this.isNeuralAudio = false;
    this.currentChunks = [];
    this.currentChunkIndex = 0;
    this.activeUtterance = null;
    this.notify();
  }

  private static startKeepAlive() {
    this.clearKeepAlive();
    this.keepAliveTimer = setInterval(() => {
      if (this.isSpeaking && !this.isPaused && !this.isNeuralAudio && typeof window !== 'undefined') {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);
  }

  private static clearKeepAlive() {
    if (this.keepAliveTimer) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
  }
}
