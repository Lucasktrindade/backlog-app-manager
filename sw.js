const CACHE_NAME = 'backlog-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  'https://unpkg.com/dexie@4/dist/dexie.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null))));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => { try { cache.put(req, resClone); } catch(e) {} });
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});