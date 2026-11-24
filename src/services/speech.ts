// Advanced Brazilian Portuguese (pt-BR) Speech Synthesis Service for Professor Jurídico
// Supports:
// - Background Pre-loading + Progressive Streaming Neural AI Voice (Gemini TTS PCM)
// - In-memory + Persistent IndexedDB Audio Cache for zero-cost natural AI replay across sessions
// - Ranked High-Fidelity Browser Fallback (prioritizing Microsoft Online Natural / Google pt-BR voices, natural pausing & no pitch distortion)

export type SpeechFallbackReason =
  | 'none'
  | 'quota'
  | 'auth'
  | 'missing_key'
  | 'timeout'
  | 'unavailable';

export interface LocalVoiceOption {
  voiceURI: string;
  name: string;
  lang: string;
  isNatural: boolean;
}

export interface SpeechStatus {
  isSpeaking: boolean;
  isPaused: boolean;
  isLoadingNeural: boolean;
  isNeuralAudio: boolean;
  currentChunkIndex: number;
  totalChunks: number;
  activeVoiceName: string;
  fallbackReason: SpeechFallbackReason;
  fallbackMessage: string | null;
  neuralCooldownUntil: number | null;
  availableLocalVoices: LocalVoiceOption[];
  selectedLocalVoiceURI: string | null;
  activeLocalVoiceIsNatural: boolean;
}

type StatusListener = (status: SpeechStatus) => void;

interface ActiveTtsJob {
  cacheKey: string;
  formattedText: string;
  voice: string;
  bypassCooldown: boolean;
  abortController: AbortController;
  attachedToPlayback: boolean;
  pcmChunks: Uint8Array[];
  totalSegments: number;
  wavUrl: string | null;
  providerLabel?: string;
  completed: boolean;
  failed: boolean;
  failureReason?: SpeechFallbackReason;
  retryAfterSeconds?: number;
  fallbackReason?: string;
  listeners: Set<() => void>;
}

const TTS_SAMPLE_RATE = 24000;
const FIRST_CHUNK_TIMEOUT_MS = 20000;
const MAX_CLIENT_CACHE_ITEMS = 60;
const PREFERRED_LOCAL_VOICE_KEY = 'jurismentor_preferred_local_voice_v1';
const IDB_NAME = 'jurismentor_tts_audio_db';
const IDB_STORE = 'audio_wavs';
const MAX_IDB_ITEMS = 80;

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function buildWavBlobFromPcmChunks(chunks: Uint8Array[], sampleRate = TTS_SAMPLE_RATE): Blob {
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
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, totalPcmBytes, true);

  const out = new Uint8Array(buffer, 44);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new Blob([buffer], { type: 'audio/wav' });
}

function dataUrlToBlob(dataUrl: string): Blob | null {
  try {
    const commaIdx = dataUrl.indexOf(',');
    if (commaIdx === -1) return null;
    const header = dataUrl.slice(0, commaIdx);
    const mimeMatch = header.match(/data:([^;]+)/);
    const mime = mimeMatch ? mimeMatch[1] : 'audio/wav';
    const bytes = base64ToBytes(dataUrl.slice(commaIdx + 1));
    const copy = new Uint8Array(bytes.byteLength);
    copy.set(bytes);
    return new Blob([copy.buffer], { type: mime });
  } catch {
    return null;
  }
}

function openTtsDb(): Promise<IDBDatabase | null> {
  if (typeof window === 'undefined' || !('indexedDB' in window)) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    try {
      const req = window.indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          const store = db.createObjectStore(IDB_STORE, { keyPath: 'key' });
          store.createIndex('updatedAt', 'updatedAt', { unique: false });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

async function getAudioFromIndexedDb(key: string): Promise<string | null> {
  const db = await openTtsDb();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const store = tx.objectStore(IDB_STORE);
      const req = store.get(key);
      req.onsuccess = () => {
        const record = req.result as { key: string; blob?: Blob } | undefined;
        if (record?.blob) {
          resolve(URL.createObjectURL(record.blob));
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

async function saveAudioToIndexedDb(key: string, blob: Blob): Promise<void> {
  const db = await openTtsDb();
  if (!db) return;
  try {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    const store = tx.objectStore(IDB_STORE);
    store.put({ key, blob, updatedAt: Date.now() });

    const countReq = store.count();
    countReq.onsuccess = () => {
      if (countReq.result > MAX_IDB_ITEMS) {
        const idx = store.index('updatedAt');
        const cursorReq = idx.openCursor();
        let toDelete = countReq.result - MAX_IDB_ITEMS;
        cursorReq.onsuccess = () => {
          const cursor = cursorReq.result;
          if (cursor && toDelete > 0) {
            store.delete(cursor.primaryKey);
            toDelete -= 1;
            cursor.continue();
          }
        };
      }
    };
  } catch {
    // ignore storage quota failures
  }
}

function isVoiceNaturalByMetadata(voice: SpeechSynthesisVoice): boolean {
  const name = voice.name.toLowerCase();
  if (
    name.includes('espeak') ||
    name.includes('mbrola') ||
    name.includes('festival') ||
    name.includes('pico')
  ) {
    return false;
  }
  return (
    name.includes('natural') ||
    name.includes('neural') ||
    name.includes('online') ||
    name.includes('google') ||
    name.includes('enhanced') ||
    name.includes('premium') ||
    !voice.localService
  );
}

function scorePortugueseVoice(voice: SpeechSynthesisVoice, persona: 'male' | 'female'): number {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.replace('_', '-').toLowerCase();
  let score = 0;

  if (lang === 'pt-br' || lang.startsWith('pt-br')) score += 60;
  else if (lang.startsWith('pt')) score += 20;

  if (name.includes('natural') || name.includes('neural')) score += 120;
  if (name.includes('online')) score += 90;
  if (name.includes('google')) score += 85;
  if (name.includes('enhanced') || name.includes('premium')) score += 70;
  if (!voice.localService) score += 45;

  if (
    name.includes('espeak') ||
    name.includes('mbrola') ||
    name.includes('festival') ||
    name.includes('pico') ||
    name.includes('compact')
  ) {
    score -= 120;
  }

  const maleKeywords = ['antonio', 'antônio', 'humberto', 'donato', 'nicolau', 'fabio', 'fábio', 'valerio', 'valério', 'julio', 'júlio', 'daniel', 'felipe', 'eduardo', 'male', 'homem'];
  const femaleKeywords = ['francisca', 'thalita', 'brenda', 'giovanna', 'leila', 'leticia', 'letícia', 'manuela', 'yara', 'elsa', 'camila', 'luciana', 'maria', 'vitoria', 'vitória', 'female', 'mulher'];
  const preferred = persona === 'male' ? maleKeywords : femaleKeywords;

  if (preferred.some((k) => name.includes(k))) {
    score += 18;
  }

  return score;
}

export class ProfessorAudioService {
  private static isSpeaking = false;
  private static isPaused = false;
  private static isLoadingNeural = false;
  private static isNeuralAudio = false;
  private static currentRate = 1.0;
  private static selectedPersona: 'male' | 'female' = 'male';
  private static listeners: Set<StatusListener> = new Set();

  private static clientAudioCache: Map<string, string> = new Map();
  private static activeJobs: Map<string, ActiveTtsJob> = new Map();
  private static currentHtmlAudio: HTMLAudioElement | null = null;

  private static audioContext: AudioContext | null = null;
  private static activeStreamSources: Set<AudioBufferSourceNode> = new Set();
  private static streamNextPlayTime = 0;
  private static streamCompleted = false;
  private static totalStreamChunks = 0;
  private static activePlaybackJobKey: string | null = null;
  private static activeFormattedKey: string | null = null;
  private static activeJobUnsubscribe: (() => void) | null = null;
  private static playbackSessionId = 0;

  private static currentChunks: string[] = [];
  private static currentChunkIndex = 0;
  private static activeUtterance: SpeechSynthesisUtterance | null = null;
  private static chunkPauseTimer: any = null;
  private static keepAliveTimer: any = null;
  private static fallbackReason: SpeechFallbackReason = 'none';
  private static fallbackMessage: string | null = null;
  private static neuralCooldownUntil: number | null = null;

  private static voicesInitialized = false;
  private static cachedPortugueseVoices: SpeechSynthesisVoice[] = [];
  private static selectedLocalVoiceURI: string | null = null;
  private static activeLocalVoiceLabel = 'Voz Local do Navegador (pt-BR)';
  private static activeLocalVoiceIsNatural = false;
  private static activeNeuralProvider: string | null = null;

  private static initVoicesWatcher() {
    if (this.voicesInitialized || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    this.voicesInitialized = true;

    try {
      const saved = localStorage.getItem(PREFERRED_LOCAL_VOICE_KEY);
      if (saved) this.selectedLocalVoiceURI = saved;
    } catch {
      // ignore storage errors
    }

    const refresh = () => {
      const allVoices = window.speechSynthesis.getVoices() || [];
      const ptVoices = allVoices
        .filter((v) => v.lang.replace('_', '-').toLowerCase().startsWith('pt'))
        .sort((a, b) => scorePortugueseVoice(b, this.selectedPersona) - scorePortugueseVoice(a, this.selectedPersona));
      this.cachedPortugueseVoices = ptVoices;

      const best = this.pickBestLocalVoice();
      if (best) {
        this.activeLocalVoiceLabel = best.name;
        this.activeLocalVoiceIsNatural = isVoiceNaturalByMetadata(best);
      }
      this.notify();
    };

    refresh();
    if (typeof window.speechSynthesis.addEventListener === 'function') {
      window.speechSynthesis.addEventListener('voiceschanged', refresh);
    } else {
      window.speechSynthesis.onvoiceschanged = refresh;
    }
  }

  private static pickBestLocalVoice(): SpeechSynthesisVoice | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const allVoices = window.speechSynthesis.getVoices() || [];
    const ptVoices = (allVoices.length > 0 ? allVoices : this.cachedPortugueseVoices)
      .filter((v) => v.lang.replace('_', '-').toLowerCase().startsWith('pt'))
      .sort((a, b) => scorePortugueseVoice(b, this.selectedPersona) - scorePortugueseVoice(a, this.selectedPersona));

    this.cachedPortugueseVoices = ptVoices;
    if (ptVoices.length === 0) return null;

    if (this.selectedLocalVoiceURI) {
      const manual = ptVoices.find((v) => v.voiceURI === this.selectedLocalVoiceURI);
      if (manual) return manual;
    }
    return ptVoices[0];
  }

  public static subscribe(listener: StatusListener): () => void {
    this.initVoicesWatcher();
    this.listeners.add(listener);
    listener(this.getStatus());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private static getActiveCooldownUntil(): number | null {
    if (this.neuralCooldownUntil && Date.now() < this.neuralCooldownUntil) {
      return this.neuralCooldownUntil;
    }
    this.neuralCooldownUntil = null;
    return null;
  }

  private static notify() {
    const status = this.getStatus();
    this.listeners.forEach(fn => fn(status));
  }

  public static getStatus(): SpeechStatus {
    this.initVoicesWatcher();
    const activeCooldownUntil = this.getActiveCooldownUntil();
    const bestLocal = this.pickBestLocalVoice();
    const availableLocalVoices: LocalVoiceOption[] = this.cachedPortugueseVoices.map((v) => ({
      voiceURI: v.voiceURI,
      name: v.name,
      lang: v.lang,
      isNatural: isVoiceNaturalByMetadata(v),
    }));

    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPaused,
      isLoadingNeural: this.isLoadingNeural,
      isNeuralAudio: this.isNeuralAudio,
      currentChunkIndex: this.currentChunkIndex,
      totalChunks: this.isNeuralAudio ? this.totalStreamChunks : this.currentChunks.length,
      activeVoiceName: this.isNeuralAudio
        ? `${this.selectedPersona === 'male' ? 'Prof. Eduardo' : 'Profª. Camila'} (${this.activeNeuralProvider || 'Voz Humana IA'})`
        : bestLocal?.name || this.activeLocalVoiceLabel,
      fallbackReason: this.fallbackReason,
      fallbackMessage: this.fallbackMessage,
      neuralCooldownUntil: activeCooldownUntil,
      availableLocalVoices,
      selectedLocalVoiceURI: this.selectedLocalVoiceURI || bestLocal?.voiceURI || null,
      activeLocalVoiceIsNatural: bestLocal ? isVoiceNaturalByMetadata(bestLocal) : this.activeLocalVoiceIsNatural,
    };
  }

  public static setLocalVoiceURI(voiceURI: string) {
    this.selectedLocalVoiceURI = voiceURI || null;
    try {
      if (voiceURI) {
        localStorage.setItem(PREFERRED_LOCAL_VOICE_KEY, voiceURI);
      } else {
        localStorage.removeItem(PREFERRED_LOCAL_VOICE_KEY);
      }
    } catch {
      // ignore
    }
    const picked = this.pickBestLocalVoice();
    if (picked) {
      this.activeLocalVoiceLabel = picked.name;
      this.activeLocalVoiceIsNatural = isVoiceNaturalByMetadata(picked);
    }
    if (this.isSpeaking && !this.isPaused && !this.isNeuralAudio && this.currentChunks.length > 0) {
      this.speakChunk(this.currentChunkIndex);
    } else {
      this.notify();
    }
  }

  public static setPersona(persona: 'male' | 'female') {
    this.selectedPersona = persona;
    // Clear manual override only if auto-selecting by persona; keep explicit choice if desired
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

  private static getVoiceName(): string {
    return this.selectedPersona === 'male' ? 'Puck' : 'Kore';
  }

  private static buildCacheKey(rawText: string): { formatted: string; voice: string; cacheKey: string } {
    const formatted = this.formatLegalTextForSpeech(rawText);
    const voice = this.getVoiceName();
    const cacheKey = `${voice}_${formatted.slice(0, 1200)}`;
    return { formatted, voice, cacheKey };
  }

  public static isReadyForInstantPlay(rawText: string): boolean {
    if (!rawText || !rawText.trim()) return false;
    const { cacheKey } = this.buildCacheKey(rawText);
    if (this.clientAudioCache.has(cacheKey)) return true;
    const job = this.activeJobs.get(cacheKey);
    return Boolean(job && (job.wavUrl || job.pcmChunks.length > 0));
  }

  public static isPreloadingText(rawText: string): boolean {
    if (!rawText || !rawText.trim()) return false;
    const { cacheKey } = this.buildCacheKey(rawText);
    if (this.clientAudioCache.has(cacheKey)) return false;
    const job = this.activeJobs.get(cacheKey);
    return Boolean(job && !job.completed && !job.failed && !job.wavUrl && job.pcmChunks.length === 0);
  }

  public static isTextActive(rawText: string): boolean {
    if (!rawText || !rawText.trim() || !this.activeFormattedKey) return false;
    const { formatted } = this.buildCacheKey(rawText);
    return this.activeFormattedKey === formatted.slice(0, 1200);
  }

  private static setClientCache(key: string, audioUrl: string, persistToIdb = true) {
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

    if (persistToIdb && audioUrl.startsWith('data:audio/')) {
      const blob = dataUrlToBlob(audioUrl);
      if (blob) {
        void saveAudioToIndexedDb(key, blob);
      }
    }
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
   * Pre-processes legal text so that Brazilian statutes, acronyms, abbreviations
   * and pauses sound fluid, clear and natural in both Neural and Browser TTS.
   */
  public static formatLegalTextForSpeech(text: string): string {
    let spoken = text;

    spoken = spoken
      .replace(/^fale com entonação[^\n\:\.]*[\n\:\.]+\s*/i, '')
      .replace(/^[\[\(]?instru[çc][ãa]o[^\]\)]*[\]\)]*:?\s*/i, '')
      .replace(/[\*\_#\`\[\]]/g, '')
      .replace(/•/g, ', ')
      .replace(/\s·\s/g, ', ')
      .trim();

    spoken = spoken
      .replace(/\bArt\.\s*(\d+)/gi, 'Artigo $1')
      .replace(/\bArts\.\s*/gi, 'Artigos ')
      .replace(/\bparágrafo\s*único\b/gi, 'parágrafo único')
      .replace(/§\s*(\d+)º?/gi, 'parágrafo $1')
      .replace(/\binc\.\s*/gi, 'inciso ')
      .replace(/\bal\.\s*/gi, 'alínea ')
      .replace(/\bn[º°]\s*(\d+)/gi, 'número $1')
      .replace(/\bCF\/88\b/gi, 'Constituição Federal de 88')
      .replace(/\bCC\/02\b/gi, 'Código Civil')
      .replace(/\bCPC\/15\b/gi, 'Código de Processo Civil')
      .replace(/\bCPC\b/g, 'Código de Processo Civil')
      .replace(/\bCPP\b/g, 'Código de Processo Penal')
      .replace(/\bCP\b/g, 'Código Penal')
      .replace(/\bCLT\b/g, 'Consolidação das Leis do Trabalho')
      .replace(/\bCTN\b/g, 'Código Tributário Nacional')
      .replace(/\bCDC\b/g, 'Código de Defesa do Consumidor')
      .replace(/\bECA\b/g, 'Estatuto da Criança e do Adolescente')
      .replace(/\bLINDB\b/g, 'Lei de Introdução às Normas do Direito Brasileiro')
      .replace(/\bEAOAB\b/gi, 'Estatuto da O. A. B.')
      .replace(/\bOAB\b/gi, 'O. A. B.')
      .replace(/\bCED\b/gi, 'Código de Ética e Disciplina')
      .replace(/\bSTF\b/gi, 'Supremo Tribunal Federal')
      .replace(/\bSTJ\b/gi, 'Superior Tribunal de Justiça')
      .replace(/\bTST\b/gi, 'Tribunal Superior do Trabalho')
      .replace(/\bADI\b/gi, 'Ação Direta de Inconstitucionalidade')
      .replace(/\bADC\b/gi, 'Ação Declaratória de Constitucionalidade')
      .replace(/\bADPF\b/gi, 'Arguição de Descumprimento de Preceito Fundamental')
      .replace(/\bREsp\b/gi, 'Recurso Especial')
      .replace(/\bRE\s+(\d+)/gi, 'Recurso Extraordinário $1')
      .replace(/\bSúmula Vinculante\s*nº?\s*(\d+)/gi, 'Súmula Vinculante número $1 do Supremo Tribunal Federal')
      .replace(/\bex nunc\b/gi, 'équis nunqui')
      .replace(/\bex tunc\b/gi, 'équis tunqui')
      .replace(/\bquota litis\b/gi, 'quóta lítis')
      .replace(/\bpacta sunt servanda\b/gi, 'pácta sunt servânda');

    spoken = spoken.replace(/\s+/g, ' ').trim();
    return spoken;
  }

  private static notifyJobListeners(job: ActiveTtsJob) {
    job.listeners.forEach(fn => fn());
  }

  private static startOrReuseJob(
    cacheKey: string,
    formattedText: string,
    voice: string,
    attachToPlayback: boolean,
    bypassCooldown = false
  ): ActiveTtsJob {
    const existing = this.activeJobs.get(cacheKey);
    if (existing && !existing.failed) {
      if (attachToPlayback) {
        existing.attachedToPlayback = true;
      }
      return existing;
    }

    if (!attachToPlayback) {
      for (const [key, job] of this.activeJobs.entries()) {
        if (!job.attachedToPlayback && key !== cacheKey) {
          job.abortController.abort();
          this.activeJobs.delete(key);
        }
      }
    }

    const job: ActiveTtsJob = {
      cacheKey,
      formattedText,
      voice,
      bypassCooldown,
      abortController: new AbortController(),
      attachedToPlayback: attachToPlayback,
      pcmChunks: [],
      totalSegments: 1,
      wavUrl: null,
      completed: false,
      failed: false,
      listeners: new Set(),
    };

    this.activeJobs.set(cacheKey, job);
    void this.runStreamJob(job);
    this.notify();
    return job;
  }

  private static applyServerFailureState(
    reason?: SpeechFallbackReason,
    message?: string,
    retryAfterSeconds?: number
  ) {
    const normalizedReason: SpeechFallbackReason = reason || 'unavailable';
    this.fallbackReason = normalizedReason;
    this.fallbackMessage = message || null;
    if (normalizedReason === 'quota') {
      const waitSec = Math.max(20, Math.min(180, Number(retryAfterSeconds || 60)));
      this.neuralCooldownUntil = Date.now() + waitSec * 1000;
    }
  }

  private static async runStreamJob(job: ActiveTtsJob): Promise<void> {
    try {
      const response = await fetch('/api/tts/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: job.formattedText,
          voice: job.voice,
          bypassCooldown: job.bypassCooldown,
        }),
        signal: job.abortController.signal,
      });

      if (!response.ok || !response.body) {
        job.failureReason = 'unavailable';
        throw new Error('Stream TTS indisponível');
      }

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const json = await response.json();
        if (json.success && json.audioUrl) {
          job.wavUrl = json.audioUrl;
          job.providerLabel = json.provider || job.providerLabel;
          job.completed = true;
          this.setClientCache(job.cacheKey, json.audioUrl);
          this.activeJobs.delete(job.cacheKey);
          this.notifyJobListeners(job);
          this.notify();
          return;
        }
        job.failureReason = json.reason || 'unavailable';
        job.retryAfterSeconds = json.retryAfterSeconds;
        job.fallbackReason = json.message || 'Fallback solicitado';
        throw new Error(job.fallbackReason);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let lineBuffer = '';
      let leftoverByte: number | null = null;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        lineBuffer += decoder.decode(value, { stream: true });
        const lines = lineBuffer.split('\n');
        lineBuffer = lines.pop() || '';

        for (const rawLine of lines) {
          const line = rawLine.trim();
          if (!line) continue;

          const event = JSON.parse(line);
          if (event.type === 'meta' && typeof event.totalSegments === 'number') {
            job.totalSegments = event.totalSegments;
            this.notifyJobListeners(job);
          } else if (event.type === 'wav' && event.audioUrl) {
            job.wavUrl = event.audioUrl;
            job.providerLabel = event.provider || job.providerLabel;
            job.completed = true;
            this.setClientCache(job.cacheKey, event.audioUrl);
            this.activeJobs.delete(job.cacheKey);
            this.notifyJobListeners(job);
            this.notify();
            return;
          } else if (event.type === 'pcm' && event.data) {
            if (event.provider) {
              job.providerLabel = event.provider;
            }
            if (typeof event.total === 'number') {
              job.totalSegments = event.total;
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
              job.pcmChunks.push(rawBytes);
              this.notifyJobListeners(job);
              if (job.pcmChunks.length === 1) {
                this.notify();
              }
            }
          } else if (event.type === 'fallback') {
            job.failureReason = event.reason || 'unavailable';
            job.retryAfterSeconds = event.retryAfterSeconds;
            job.fallbackReason = event.message || event.error || 'Fallback local solicitado';
            throw new Error(job.fallbackReason);
          } else if (event.type === 'done') {
            job.completed = true;
            if (job.pcmChunks.length > 0) {
              const wavBlob = buildWavBlobFromPcmChunks(job.pcmChunks, TTS_SAMPLE_RATE);
              const wavBlobUrl = URL.createObjectURL(wavBlob);
              this.setClientCache(job.cacheKey, wavBlobUrl, false);
              void saveAudioToIndexedDb(job.cacheKey, wavBlob);
            }
            this.activeJobs.delete(job.cacheKey);
            this.notifyJobListeners(job);
            this.notify();
            return;
          }
        }
      }

      if (!job.completed && job.pcmChunks.length > 0) {
        job.completed = true;
        const wavBlob = buildWavBlobFromPcmChunks(job.pcmChunks, TTS_SAMPLE_RATE);
        const wavBlobUrl = URL.createObjectURL(wavBlob);
        this.setClientCache(job.cacheKey, wavBlobUrl, false);
        void saveAudioToIndexedDb(job.cacheKey, wavBlob);
        this.activeJobs.delete(job.cacheKey);
        this.notifyJobListeners(job);
        this.notify();
      } else if (!job.completed) {
        job.failureReason = job.failureReason || 'unavailable';
        throw new Error('Stream encerrado sem áudio');
      }
    } catch (err: any) {
      job.failed = true;
      job.failureReason = job.failureReason || 'unavailable';
      job.fallbackReason = job.fallbackReason || err?.message || 'Erro no stream TTS';
      if (job.failureReason === 'quota' || job.failureReason === 'auth' || job.failureReason === 'missing_key') {
        this.applyServerFailureState(job.failureReason, job.fallbackReason, job.retryAfterSeconds);
      }
      this.activeJobs.delete(job.cacheKey);
      this.notifyJobListeners(job);
      this.notify();
    }
  }

  public static preload(rawText: string): void {
    if (typeof window === 'undefined' || !rawText || !rawText.trim()) return;
    if (this.getActiveCooldownUntil()) return;
    const { formatted, voice, cacheKey } = this.buildCacheKey(rawText);
    if (!formatted) return;

    if (this.clientAudioCache.has(cacheKey)) return;
    const existing = this.activeJobs.get(cacheKey);
    if (existing && !existing.failed) return;

    this.startOrReuseJob(cacheKey, formatted, voice, false);
  }

  private static playAudioUrl(audioUrl: string, formattedFallback: string, sessionId: number) {
    if (sessionId !== this.playbackSessionId) return;

    this.isLoadingNeural = false;
    this.isNeuralAudio = true;
    this.isSpeaking = true;
    this.isPaused = false;
    this.currentChunkIndex = 1;
    this.totalStreamChunks = 1;

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
    if (ctx.state === 'suspended' && !this.isPaused) {
      ctx.resume().catch(() => {});
    }

    const aligned = pcmBytes.byteOffset % 2 === 0 ? pcmBytes : new Uint8Array(pcmBytes);
    const sampleCount = Math.floor(aligned.byteLength / 2);
    const int16 = new Int16Array(aligned.buffer, aligned.byteOffset, sampleCount);
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

  private static async fallbackToUnaryOrLocal(
    formatted: string,
    voice: string,
    cacheKey: string,
    sessionId: number,
    reason: SpeechFallbackReason = 'unavailable',
    message?: string,
    retryAfterSeconds?: number
  ): Promise<void> {
    if (sessionId !== this.playbackSessionId) return;

    if (reason === 'quota' || reason === 'auth' || reason === 'missing_key' || reason === 'timeout') {
      this.isLoadingNeural = false;
      this.applyServerFailureState(reason, message, retryAfterSeconds);
      this.playWithLocalSpeech(formatted, reason, message);
      return;
    }

    try {
      const unaryRes = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: formatted,
          voice,
        }),
      });
      if (sessionId !== this.playbackSessionId) return;
      if (unaryRes.ok) {
        const unaryData = await unaryRes.json();
        if (unaryData.success && unaryData.audioUrl) {
          this.fallbackReason = 'none';
          this.fallbackMessage = null;
          this.activeNeuralProvider = unaryData.provider || null;
          this.setClientCache(cacheKey, unaryData.audioUrl);
          this.playAudioUrl(unaryData.audioUrl, formatted, sessionId);
          return;
        }
        const unaryReason: SpeechFallbackReason = unaryData.reason || 'unavailable';
        const unaryMsg: string | undefined = unaryData.message;
        this.applyServerFailureState(unaryReason, unaryMsg, unaryData.retryAfterSeconds);
        this.isLoadingNeural = false;
        this.playWithLocalSpeech(formatted, unaryReason, unaryMsg);
        return;
      }
    } catch (unaryErr) {
      console.warn('Endpoint /api/tts indisponível, alternando para síntese local:', unaryErr);
    }

    if (sessionId === this.playbackSessionId) {
      this.isLoadingNeural = false;
      this.playWithLocalSpeech(
        formatted,
        'unavailable',
        message || 'Não foi possível conectar ao serviço de voz natural.'
      );
    }
  }

  private static stopPlaybackPreservingMatchingJob(preserveJobKey?: string) {
    this.playbackSessionId += 1;

    if (this.chunkPauseTimer) {
      clearTimeout(this.chunkPauseTimer);
      this.chunkPauseTimer = null;
    }

    if (this.activeJobUnsubscribe) {
      this.activeJobUnsubscribe();
      this.activeJobUnsubscribe = null;
    }

    if (this.activePlaybackJobKey && this.activePlaybackJobKey !== preserveJobKey) {
      const prevJob = this.activeJobs.get(this.activePlaybackJobKey);
      if (prevJob && !prevJob.completed) {
        prevJob.abortController.abort();
        this.activeJobs.delete(this.activePlaybackJobKey);
      }
    }
    this.activePlaybackJobKey = null;
    this.activeFormattedKey = null;

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
    this.totalStreamChunks = 0;

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
    this.activeNeuralProvider = null;
    this.currentChunks = [];
    this.currentChunkIndex = 0;
    this.activeUtterance = null;
  }

  public static async retryNeural(rawText: string) {
    this.neuralCooldownUntil = null;
    this.fallbackReason = 'none';
    this.fallbackMessage = null;
    await this.play(rawText, { bypassCooldown: true });
  }

  public static async play(rawText: string, options?: { bypassCooldown?: boolean }) {
    this.initVoicesWatcher();
    const bypassCooldown = Boolean(options?.bypassCooldown);
    const { formatted, voice, cacheKey } = this.buildCacheKey(rawText);
    this.stopPlaybackPreservingMatchingJob(cacheKey);
    const sessionId = this.playbackSessionId;
    this.activeFormattedKey = formatted.slice(0, 1200);

    // 1. Instant memory cache hit (0ms)
    const cachedUrl = this.clientAudioCache.get(cacheKey);
    if (cachedUrl) {
      this.fallbackReason = 'none';
      this.fallbackMessage = null;
      this.playAudioUrl(cachedUrl, formatted, sessionId);
      return;
    }

    // Unlock Web Audio Context immediately inside user gesture before any await
    const audioCtx = this.ensureAudioContext();

    // 2. Persistent IndexedDB cache hit (replays previously generated AI voices even after closing the app or during quota cooldown)
    const idbUrl = await getAudioFromIndexedDb(cacheKey);
    if (sessionId !== this.playbackSessionId) return;
    if (idbUrl) {
      this.setClientCache(cacheKey, idbUrl, false);
      this.fallbackReason = 'none';
      this.fallbackMessage = null;
      this.playAudioUrl(idbUrl, formatted, sessionId);
      return;
    }

    // 3. Active quota cooldown protection
    const cooldownUntil = bypassCooldown ? null : this.getActiveCooldownUntil();
    if (cooldownUntil) {
      const waitSec = Math.max(1, Math.ceil((cooldownUntil - Date.now()) / 1000));
      this.playWithLocalSpeech(
        formatted,
        'quota',
        `Limite temporário da voz natural IA atingido. Nova tentativa em ~${waitSec}s.`
      );
      return;
    }

    this.fallbackReason = 'none';
    this.fallbackMessage = null;

    if (!audioCtx) {
      this.isLoadingNeural = true;
      this.notify();
      await this.fallbackToUnaryOrLocal(formatted, voice, cacheKey, sessionId, 'unavailable');
      return;
    }

    const job = this.startOrReuseJob(cacheKey, formatted, voice, true, bypassCooldown);
    this.activePlaybackJobKey = cacheKey;

    let consumedChunks = 0;
    let firstAudioArrived = false;
    let settled = false;

    const firstByteTimer = setTimeout(() => {
      if (!firstAudioArrived && !settled && sessionId === this.playbackSessionId) {
        settled = true;
        cleanupListener();
        job.abortController.abort();
        this.activeJobs.delete(cacheKey);
        void this.fallbackToUnaryOrLocal(
          formatted,
          voice,
          cacheKey,
          sessionId,
          'timeout',
          'A voz natural IA demorou para responder. Usando voz do navegador.'
        );
      }
    }, FIRST_CHUNK_TIMEOUT_MS);

    const cleanupListener = () => {
      clearTimeout(firstByteTimer);
      job.listeners.delete(onJobUpdate);
      if (this.activeJobUnsubscribe === cleanupListener) {
        this.activeJobUnsubscribe = null;
      }
    };
    this.activeJobUnsubscribe = cleanupListener;

    const onJobUpdate = () => {
      if (settled || sessionId !== this.playbackSessionId) {
        cleanupListener();
        return;
      }

      if (job.wavUrl && consumedChunks === 0) {
        settled = true;
        firstAudioArrived = true;
        cleanupListener();
        this.fallbackReason = 'none';
        this.fallbackMessage = null;
        this.activeNeuralProvider = job.providerLabel || null;
        this.playAudioUrl(job.wavUrl, formatted, sessionId);
        return;
      }

      while (consumedChunks < job.pcmChunks.length) {
        if (!firstAudioArrived) {
          firstAudioArrived = true;
          clearTimeout(firstByteTimer);
          this.streamNextPlayTime = audioCtx.currentTime + 0.025;
          this.streamCompleted = false;
          this.isLoadingNeural = false;
          this.isNeuralAudio = true;
          this.isSpeaking = true;
          this.isPaused = false;
          this.fallbackReason = 'none';
          this.fallbackMessage = null;
          this.activeNeuralProvider = job.providerLabel || null;
        }

        const pcmChunk = job.pcmChunks[consumedChunks];
        consumedChunks += 1;
        this.currentChunkIndex = consumedChunks;
        this.totalStreamChunks = Math.max(job.totalSegments, consumedChunks);
        this.schedulePcmChunk(audioCtx, pcmChunk, sessionId);
        this.notify();
      }

      if (job.completed) {
        settled = true;
        this.streamCompleted = true;
        cleanupListener();
        if (firstAudioArrived && this.activeStreamSources.size === 0 && sessionId === this.playbackSessionId) {
          this.stop();
        } else if (!firstAudioArrived) {
          void this.fallbackToUnaryOrLocal(
            formatted,
            voice,
            cacheKey,
            sessionId,
            job.failureReason || 'unavailable',
            job.fallbackReason,
            job.retryAfterSeconds
          );
        }
        return;
      }

      if (job.failed && !firstAudioArrived) {
        settled = true;
        cleanupListener();
        void this.fallbackToUnaryOrLocal(
          formatted,
          voice,
          cacheKey,
          sessionId,
          job.failureReason || 'unavailable',
          job.fallbackReason,
          job.retryAfterSeconds
        );
      }
    };

    job.listeners.add(onJobUpdate);
    onJobUpdate();

    if (!settled && !firstAudioArrived && sessionId === this.playbackSessionId) {
      this.isLoadingNeural = true;
      this.notify();
    }
  }

  private static playWithLocalSpeech(
    formattedText: string,
    reason: SpeechFallbackReason = 'unavailable',
    message?: string
  ) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.stop();
      return;
    }

    this.fallbackReason = reason;
    if (message) {
      this.fallbackMessage = message;
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

  /**
   * Splits legal text into natural breathing phrases so local synthesis
   * doesn't rush breathlessly through long multi-clause sentences.
   */
  private static splitIntoChunks(text: string): string[] {
    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
    const chunks: string[] = [];

    for (const sentence of sentences) {
      const trimmed = sentence.trim();
      if (!trimmed) continue;
      if (trimmed.length <= 170) {
        chunks.push(trimmed);
        continue;
      }

      // Break long legal periods on semicolons, colons, dashes, or balanced commas
      const clauses = trimmed.split(/(?<=[;:—])\s+|(?<=,\s)(?=.{45,})/);
      let buffer = '';
      for (const clause of clauses) {
        const cleanClause = clause.trim();
        if (!cleanClause) continue;
        if (!buffer) {
          buffer = cleanClause;
        } else if (buffer.length + 1 + cleanClause.length <= 170) {
          buffer = `${buffer} ${cleanClause}`;
        } else {
          chunks.push(buffer);
          buffer = cleanClause;
        }
      }
      if (buffer) chunks.push(buffer);
    }

    return chunks.length > 0 ? chunks : [text];
  }

  private static speakChunk(index: number) {
    if (index >= this.currentChunks.length) {
      this.stop();
      return;
    }

    if (this.chunkPauseTimer) {
      clearTimeout(this.chunkPauseTimer);
      this.chunkPauseTimer = null;
    }

    window.speechSynthesis.cancel();

    this.currentChunkIndex = index;
    const chunkText = this.currentChunks[index];
    const utterance = new SpeechSynthesisUtterance(chunkText);

    const bestVoice = this.pickBestLocalVoice();
    const isNaturalBrowserVoice = bestVoice ? isVoiceNaturalByMetadata(bestVoice) : false;

    if (bestVoice) {
      utterance.voice = bestVoice;
      utterance.lang = bestVoice.lang || 'pt-BR';
      this.activeLocalVoiceLabel = bestVoice.name;
      this.activeLocalVoiceIsNatural = isNaturalBrowserVoice;
    } else {
      utterance.lang = 'pt-BR';
      this.activeLocalVoiceLabel = 'Voz Local do Navegador (pt-BR)';
      this.activeLocalVoiceIsNatural = false;
    }

    // Never pitch-shift neural/Google/Edge online voices (artificial pitch causes robotic artifacts)
    utterance.rate = isNaturalBrowserVoice ? this.currentRate : Math.max(0.82, this.currentRate * 0.96);
    utterance.pitch = isNaturalBrowserVoice ? 1.0 : (this.selectedPersona === 'male' ? 0.96 : 1.04);

    const activeSessionId = this.playbackSessionId;

    utterance.onend = () => {
      if (activeSessionId !== this.playbackSessionId) return;
      if (this.isSpeaking && !this.isPaused && !this.isNeuralAudio) {
        const endsSentence = /[.!?]$/.test(chunkText.trim());
        const pauseMs = endsSentence ? 140 : 60;
        this.chunkPauseTimer = setTimeout(() => {
          if (activeSessionId === this.playbackSessionId && this.isSpeaking && !this.isPaused) {
            this.speakChunk(index + 1);
          }
        }, pauseMs);
      }
    };

    utterance.onerror = e => {
      if (e.error === 'canceled' || e.error === 'interrupted') return;
      if (activeSessionId === this.playbackSessionId) {
        this.speakChunk(index + 1);
      }
    };

    this.activeUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    this.notify();
  }

  public static pause() {
    if (this.chunkPauseTimer) {
      clearTimeout(this.chunkPauseTimer);
      this.chunkPauseTimer = null;
    }

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
    this.stopPlaybackPreservingMatchingJob(undefined);
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
