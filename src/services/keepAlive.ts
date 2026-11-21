const KEEP_ALIVE_ENDPOINT = '/api/keep-alive';
const DEFAULT_INTERVAL_MS = 5 * 60 * 1000; // 5 minutos
const MIN_THROTTLE_MS = 60 * 1000; // evita disparos redundantes em < 1 min

let lastPingAt = 0;
let activeStopFn: (() => void) | null = null;

async function sendKeepAlivePing(reason: 'interval' | 'visibility' | 'focus' | 'online' | 'init'): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return false;
  }

  const now = Date.now();
  if (now - lastPingAt < MIN_THROTTLE_MS) {
    return false;
  }
  lastPingAt = now;

  try {
    const res = await fetch(`${KEEP_ALIVE_ENDPOINT}?reason=${reason}&t=${now}`, {
      method: 'GET',
      cache: 'no-store',
      keepalive: true,
    });

    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'KEEP_ALIVE_ACK',
        lastPingAt: now,
      });
    }

    return res.ok;
  } catch {
    return false;
  }
}

function notifyServiceWorkerKeepAlive(intervalMs: number): void {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;

  navigator.serviceWorker.ready
    .then(registration => {
      if (registration.active) {
        registration.active.postMessage({
          type: 'START_KEEP_ALIVE',
          intervalMs,
        });
      }
      // Registra Periodic Background Sync quando suportado pelo navegador (Android/Chromium)
      const periodicSync = (registration as unknown as {
        periodicSync?: { register: (tag: string, opts: { minInterval: number }) => Promise<void> };
      }).periodicSync;
      if (periodicSync?.register) {
        periodicSync.register('jurismentor-keep-alive', { minInterval: intervalMs }).catch(() => {});
      }
    })
    .catch(() => {});
}

/**
 * Inicia monitoramento keep-alive no navegador combinando:
 * - timer periódico a cada 5 minutos
 * - Page Visibility API (ping imediato ao retornar à aba após o intervalo)
 * - eventos online/focus e coordenação com o Service Worker
 */
export function startKeepAliveMonitor(intervalMs = DEFAULT_INTERVAL_MS): () => void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  if (activeStopFn) {
    return activeStopFn;
  }

  // Ping inicial após montagem e ativação do ciclo no Service Worker
  void sendKeepAlivePing('init');
  notifyServiceWorkerKeepAlive(intervalMs);

  const timerId = window.setInterval(() => {
    void sendKeepAlivePing('interval');
  }, intervalMs);

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      const elapsed = Date.now() - lastPingAt;
      if (elapsed >= intervalMs - MIN_THROTTLE_MS) {
        void sendKeepAlivePing('visibility');
      } else if (navigator.serviceWorker?.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'KEEP_ALIVE_PING' });
      }
    }
  };

  const handleFocus = () => {
    if (Date.now() - lastPingAt >= intervalMs) {
      void sendKeepAlivePing('focus');
    }
  };

  const handleOnline = () => {
    void sendKeepAlivePing('online');
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('focus', handleFocus);
  window.addEventListener('online', handleOnline);

  const stop = () => {
    window.clearInterval(timerId);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('focus', handleFocus);
    window.removeEventListener('online', handleOnline);
    if (activeStopFn === stop) {
      activeStopFn = null;
    }
  };

  activeStopFn = stop;
  return stop;
}
