// const cacheName = 'v2';

// self.addEventListener('install', e => {
// });
// self.addEventListener('activate', e => {
//   e.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cache => {
//           if (cache !== cacheName) {
//             console.log('Service Worker: Clearing Old Cache');
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener('fetch', e => {
//   console.log('Service Worker: Fetching');
//   e.respondWith(
//     fetch(e.request)
//       .then(res => {
//         const resClone = res.clone();
//         // Open cahce
//         caches.open(cacheName).then(cache => {
//           cache.put(e.request, resClone);
//         });
//         return res;
//       })
//       .catch(err => caches.match(e.request).then(res => res))
//   );
// });
