const CACHE = 'cambusa-scout-v5.1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
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
  // Network-first: prova sempre la rete, cache solo se offline
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Aggiorna la cache con la versione fresca
        const clone = response.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return response;
      })
      .catch(() => {
        // Offline: servi dalla cache
        return caches.match(e.request).then(r => r || caches.match('./index.html'));
      })
  );
});
