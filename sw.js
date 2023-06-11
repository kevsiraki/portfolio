const staticCacheName = 'site-static-v1.0.1';
const assets = [
  'views/components/Contact.js',
  'views/components/Education.js',
  'views/components/Experience.js',
  'views/components/Footer.js',
  'views/components/Header.js',
  'views/components/Skills.js',
  'views/css/style.css',
  'views/js/faicons.js',
  'resume.html'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('Caching shell assets');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== staticCacheName).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      if (cacheRes) {
        return cacheRes;
      }

      return fetch(evt.request).then(fetchRes => {
        return caches.open(staticCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        });
      });
    }).catch(() => {
      return caches.match('resume.html');
    })
  );
});
