// Advanced Brazilian Portuguese (pt-BR) Speech Synthesis Service for Professor Jurídico
// Supports Ultra-Natural Neural AI Voice (Gemini TTS) with seamless browser fallback

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

export class ProfessorAudioService {
  private static isSpeaking = false;
  private static isPaused = false;
  private static isLoadingNeural = false;
  private static isNeuralAudio = false;
  private static currentRate = 1.05;
  private static selectedPersona: 'male' | 'female' = 'male'; // male (Puck) / female (Kore)
  private static selectedVoiceURI: string | null = null;
  private static listeners: Set<StatusListener> = new Set();
  
  // HTML5 Audio instance for ultra-realistic Gemini TTS playback
  private static currentHtmlAudio: HTMLAudioElement | null = null;

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
        ? (this.selectedPersona === 'male' ? 'Prof. Eduardo (Voz Humana IA)' : 'Profª. Camila (Voz Humana IA)')
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
    } else if (this.isSpeaking && !this.isPaused && this.currentChunks.length > 0) {
      this.speakChunk(this.currentChunkIndex);
    }
    this.notify();
  }

  public static getRate(): number {
    return this.currentRate;
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

  /**
   * Main Play function:
   * 1. Attempts Ultra-Natural Neural Gemini TTS (/api/tts)
   * 2. If server returns audio, plays high-fidelity WAV with natural human voice.
   * 3. Falls back gracefully to optimized client SpeechSynthesis.
   */
  public static async play(rawText: string) {
    this.stop();

    const formatted = this.formatLegalTextForSpeech(rawText);
    const geminiVoice = this.selectedPersona === 'male' ? 'Puck' : 'Kore';

    this.isLoadingNeural = true;
    this.notify();

    // Try server-side ultra natural neural audio first
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: formatted,
          voice: geminiVoice,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.audioUrl) {
          this.isLoadingNeural = false;
          this.isNeuralAudio = true;
          this.isSpeaking = true;
          this.isPaused = false;

          const audio = new Audio(data.audioUrl);
          audio.playbackRate = this.currentRate;
          this.currentHtmlAudio = audio;

          audio.onended = () => {
            this.stop();
          };

          audio.onerror = () => {
            console.warn('Erro ao reproduzir áudio neural, usando fallback local.');
            this.playWithLocalSpeech(formatted);
          };

          audio.play();
          this.notify();
          return;
        }
      }
    } catch (e) {
      console.warn('Endpoint /api/tts indisponível, alternando para síntese local:', e);
    }

    // Fallback to local SpeechSynthesis
    this.isLoadingNeural = false;
    this.playWithLocalSpeech(formatted);
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
      // Prioritize natural / neural / online Brazilian voices (e.g. Google português do Brasil, Microsoft Francisca/Antonio Natural, Luciana, etc.)
      const naturalKeywords = ['natural', 'neural', 'online', 'google', 'brazil', 'brasil'];
      const brVoices = ptVoices.filter(v => v.lang.toLowerCase().includes('br'));
      const pool = brVoices.length > 0 ? brVoices : ptVoices;

      // Filter by persona if voice names distinguish gender
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

    utterance.onerror = (e) => {
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

    if (typeof window !== 'undefined' && 'speechSynthesis' in window && this.isSpeaking) {
      window.speechSynthesis.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  public static resume() {
    if (this.currentHtmlAudio && this.isPaused) {
      this.currentHtmlAudio.play();
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
