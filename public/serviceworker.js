// the cache version gets updated every time there is a new deployment
const CACHE_VERSION = 10;
const CURRENT_CACHE = `main-${CACHE_VERSION}`;

// these are the routes we are going to cache for offline support
const cacheFiles = [
  '/',
  'index.html',
  '/public/Images/ash1.png',
  '/public/Images/pokeball.png',
  '/public/Images/x-icon.png',
  '/src/index.js',
  '/src/index.css',
  '/src/fonts/PocketMonk-15ze.ttf',
  '/src/components/App/App.js',
  '/src/components/App/App.css',
  '/src/components/Header/Header.js',
  '/src/components/Header/Header.css',
  '/src/components/HowTo/HowTo.js',
  '/src/components/HowTo/HowTo.css',
  '/src/components/Search/Search.js',
  '/src/components/Search/Search.css',
  '/src/components/PokedexGrid/PokedexGrid.js',
  '/src/components/PokedexGrid/PokedexGrid.css',
  '/src/components/PokemonDetails/PokemonDetails.js',
  '/src/components/PokemonDetails/PokemonDetails.css',
  '/src/components/PokemonCard/PokemonCard.js',
  '/src/components/PokemonCard/PokemonCard.css',
];

// on activation we clean up the previously registered service workers
self.addEventListener('activate', evt =>
  evt.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CURRENT_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  )
);

// on install we download the routes we want to cache for offline
self.addEventListener('install', evt =>
  evt.waitUntil(
    caches.open(CURRENT_CACHE).then(cache => {
      return cache.addAll(cacheFiles);
    })
  )
);

// fetch the resource from the network
const fromNetwork = (request, timeout) =>
  new Promise((fulfill, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then(response => {
      clearTimeout(timeoutId);
      fulfill(response);
      update(request);
    }, reject);
  });

// fetch the resource from the browser cache
const fromCache = request =>
  caches
    .open(CURRENT_CACHE)
    .then(cache =>
      cache
        .match(request)
        .then(matching => matching || cache.match('/offline/'))
    );

// cache the current page to make it available for offline
const update = request =>
  caches
    .open(CURRENT_CACHE)
    .then(cache =>
      fetch(request).then(response => cache.put(request, response))
    );

// general strategy when making a request (eg if online try to fetch it
// from the network with a timeout, if something fails serve from cache)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    fromNetwork(evt.request, 10000).catch(() => fromCache(evt.request))
  );
  evt.waitUntil(update(evt.request));
});







// const cache_name = 'Cache_version-1'
//
// const urlsToCache = ['index.html', 'offline.html']
//
// // const urlsToCache = [
  // '/',
  // 'index.html',
  // '/public/Images/ash1.png',
  // '/public/Images/pokeball.png',
  // '/public/Images/x-icon.png',
  // '/src/index.js',
  // '/src/index.css',
  // '/src/fonts/PocketMonk-15ze.ttf',
  // '/src/components/App/App.js',
  // '/src/components/App/App.css',
  // '/src/components/Header/Header.js',
  // '/src/components/Header/Header.css',
  // '/src/components/HowTo/HowTo.js',
  // '/src/components/HowTo/HowTo.css',
  // '/src/components/Search/Search.js',
  // '/src/components/Search/Search.css',
  // '/src/components/PokedexGrid/PokedexGrid.js',
  // '/src/components/PokedexGrid/PokedexGrid.css',
  // '/src/components/PokemonDetails/PokemonDetails.js',
  // '/src/components/PokemonDetails/PokemonDetails.css',
  // '/src/components/PokemonCard/PokemonCard.js',
  // '/src/components/PokemonCard/PokemonCard.css',
// // ]
//
// // const urlsToCache = [
// //   'index.html',
// //   './Images/ash1.png',
// //   './Images/pokeball.png',
// //   './Images/x-icon.png',
// //   '../src/index.js',
// //   '../src/index.css',
// //   '../src/fonts/PocketMonk-15ze.ttf',
// //   '..src/components/App/App.js',
// //   '..src/components/App/App.css',
// //   '..src/components/Header/Header.js',
// //   '..src/components/Header/Header.css',
// //   '..src/components/HowTo/HowTo.js',
// //   '..src/components/HowTo/HowTo.css',
// //   '..src/components/Search/Search.js',
// //   '..src/components/Search/Search.css',
// //   '..src/components/PokedexGrid/PokedexGrid.js',
// //   '..src/components/PokedexGrid/PokedexGrid.css',
// //   '..src/components/PokemonDetails/PokemonDetails.js',
// //   '..src/components/PokemonDetails/PokemonDetails.css',
// //   '..src/components/PokemonCard/PokemonCard.js',
// //   '..src/components/PokemonCard/PokemonCard.css',
// // ]
//
// const self = this
//
// // Install switch
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(cache_name)
//       .then((cache) => {
//         console.log('Opened Cache')
//
//         return cache.addAll(urlsToCache)
//       })
//   )
// })
//
// // listen for requests
// self.addEventListener('fetch', (event) => {
//   console.log('Service Worker: Fetching');
//   event.respondWith(
//     caches.match(event.request)
//       .then(() => {
//         return fetch(event.request)
//           .catch(() => caches.match('offline.html'))
//       })
//   )
// })
// // activate SW
// self.addEventListener('activate', (event) => {
//   const cacheWhitelist = []
//   cacheWhitelist.push(cache_name)
//
//   event.waitUntil(
//     caches.keys()
//       .then((cacheNames) => Promise.all(
//         cacheNames.map((cacheName) => {
//           if(!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName)
//           }
//         })
//       ))
//   )
// })
