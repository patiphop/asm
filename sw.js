self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('ASM-cache').then(function(cache) {
        return cache.addAll([
          './index.html',
          './icon.ico',
          './manifest.json',
          // Add any other assets you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  