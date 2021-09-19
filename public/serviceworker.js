const cache_name = 'Cache_version-1'

const urlsToCache = [
  '/',
  'index.html',
  '/Images/ash1.png',
  '/Images/pokeball.png',
  '/Images/x-icon.png',
  './src/index.js',
  './src/index.css',
  './src/fonts/PocketMonk-15ze.ttf',
  './src/components/App/App.js',
  './src/components/App/App.css',
  './src/components/Header/Header.js',
  './src/components/Header/Header.css',
  './src/components/HowTo/HowTo.js',
  './src/components/HowTo/HowTo.css',
  './src/components/Search/Search.js',
  './src/components/Search/Search.css',
  './src/components/PokedexGrid/PokedexGrid.js',
  './src/components/PokedexGrid/PokedexGrid.css',
  './src/components/PokemonDetails/PokemonDetails.js',
  './src/components/PokemonDetails/PokemonDetails.css',
  './src/components/PokemonCard/PokemonCard.js',
  './src/components/PokemonCard/PokemonCard.css',
]

// const urlsToCache = [
//   'index.html',
//   './Images/ash1.png',
//   './Images/pokeball.png',
//   './Images/x-icon.png',
//   '../src/index.js',
//   '../src/index.css',
//   '../src/fonts/PocketMonk-15ze.ttf',
//   '..src/components/App/App.js',
//   '..src/components/App/App.css',
//   '..src/components/Header/Header.js',
//   '..src/components/Header/Header.css',
//   '..src/components/HowTo/HowTo.js',
//   '..src/components/HowTo/HowTo.css',
//   '..src/components/Search/Search.js',
//   '..src/components/Search/Search.css',
//   '..src/components/PokedexGrid/PokedexGrid.js',
//   '..src/components/PokedexGrid/PokedexGrid.css',
//   '..src/components/PokemonDetails/PokemonDetails.js',
//   '..src/components/PokemonDetails/PokemonDetails.css',
//   '..src/components/PokemonCard/PokemonCard.js',
//   '..src/components/PokemonCard/PokemonCard.css',
// ]

const self = this

// Install switch
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cache_name)
      .then((cache) => {
        console.log('Opened Cache')

        return cache.addAll(urlsToCache)
      })
  )
})

// listen for requests
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching');
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match(event.request))
      })
  )
})
// activate SW
self.addEventListener('activate', (event) => {
  const cacheWhitelist = []
  cacheWhitelist.push(cache_name)

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
          if(!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      ))
  )
})
