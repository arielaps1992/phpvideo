self.addEventListener('install', event => {
    //console.log('sw.js 1', event);
    event.waitUntil(Promise.all([self.skipWaiting()]));
});

self.addEventListener('fetch', (e) => {
    //console.log('sw.js 2', e.request.url);
    e.respondWith(
            caches.match(e.request).then((response) => response || fetch(e.request)),
            );
});