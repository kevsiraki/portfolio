const staticCacheName = 'site-static-v1.0.1';
const assets = [
  'views/components/OfflineContact.js',
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
    fetch(evt.request)
      .then(res => {
        // Clone the response to cache and then return it
        const resClone = res.clone();
        caches.open(staticCacheName)
          .then(cache => cache.put(evt.request, resClone));
        return res;
      })
      .catch(() => {
        // Return the offline version when there's no internet connection
        return caches.match('/resume.html');
      })
  );
});
