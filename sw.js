const CACHE = 'cambusa-scout-v.Index_12';
const STATIC = [
  './manifest.json',
  './icon.svg'
];
// index.html NON viene mai messo in cache — deve essere sempre fresco dalla rete

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // index.html (e la root) → sempre dalla rete, mai dalla cache
  if (url.pathname.endsWith('/') ||
      url.pathname.endsWith('/index.html') ||
      url.pathname === '/Cambusa---Scout-Pino-Torinese-1/' ||
      url.pathname === '/Cambusa---Scout-Pino-Torinese-1/index.html') {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Tutto il resto → network-first con fallback cache
  e.respondWith(
    fetch(e.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
