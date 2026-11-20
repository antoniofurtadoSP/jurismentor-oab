// JurisMentor Service Worker v2 - Network-First for HTML to prevent stale bundle white screens
const CACHE_NAME = 'jurismentor-cache-v2';
const STATIC_ASSETS = [
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/icon.svg',
  '/manifest.json',
];

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

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

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
