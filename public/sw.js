// JurisMentor Service Worker v4 - Network-First for HTML + Keep-Alive Coordination
const CACHE_NAME = 'jurismentor-cache-v4';
const KEEP_ALIVE_URL = '/api/keep-alive';
const DEFAULT_KEEP_ALIVE_MS = 5 * 60 * 1000;
const MIN_PING_GAP_MS = 4 * 60 * 1000;

let lastSwPingAt = 0;
let swKeepAliveTimer = null;

const STATIC_ASSETS = [
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/icon.svg',
  '/manifest.json',
];

async function pingKeepAliveServer(source) {
  const now = Date.now();
  if (now - lastSwPingAt < MIN_PING_GAP_MS) {
    return;
  }
  lastSwPingAt = now;
  try {
    await fetch(`${KEEP_ALIVE_URL}?source=${encodeURIComponent(source)}&t=${now}`, {
      method: 'GET',
      cache: 'no-store',
    });
  } catch {
    // Ignore offline or transient network errors
  }
}

function ensureSwKeepAliveTimer(intervalMs) {
  const safeInterval = Math.max(60 * 1000, Number(intervalMs) || DEFAULT_KEEP_ALIVE_MS);
  if (swKeepAliveTimer) {
    clearInterval(swKeepAliveTimer);
  }
  swKeepAliveTimer = setInterval(async () => {
    try {
      const activeClients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      if (activeClients.length > 0) {
        await pingKeepAliveServer('sw_interval');
      } else {
        clearInterval(swKeepAliveTimer);
        swKeepAliveTimer = null;
      }
    } catch {
      // Ignore client inspection errors
    }
  }, safeInterval);
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || typeof data !== 'object') return;

  if (data.type === 'KEEP_ALIVE_ACK' && typeof data.lastPingAt === 'number') {
    lastSwPingAt = Math.max(lastSwPingAt, data.lastPingAt);
    return;
  }

  if (data.type === 'START_KEEP_ALIVE') {
    ensureSwKeepAliveTimer(data.intervalMs);
    return;
  }

  if (data.type === 'KEEP_ALIVE_PING') {
    event.waitUntil(pingKeepAliveServer('sw_message'));
  }
});

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'jurismentor-keep-alive') {
    event.waitUntil(pingKeepAliveServer('sw_periodicsync'));
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/__/')) return;

  // Never intercept Vite dev HMR/source modules
  if (url.pathname.startsWith('/src/') || url.pathname.startsWith('/@') || url.pathname.startsWith('/node_modules/')) {
    return;
  }

  // Network-first for page navigations and HTML so Android always gets the latest bundle hashes
  const isNavigation =
    req.mode === 'navigate' ||
    url.pathname === '/' ||
    url.pathname === '/index.html';

  if (isNavigation) {
    event.respondWith(
      fetch(req)
        .then((response) => {
          if (response && response.ok && (response.headers.get('content-type') || '').includes('text/html')) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put('/index.html', clone));
          }
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // For hashed JS/CSS/images: network-first for assets, never cache HTML responses under JS/CSS keys
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(req).then((response) => {
        const ct = response.headers.get('content-type') || '';
        const isHtml = ct.includes('text/html');
        if (response && response.status === 200 && response.type === 'basic' && !isHtml) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return response;
      });
    })
  );
});
