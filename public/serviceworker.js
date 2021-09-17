const cache_name = 'version-1'
const urlsToCache = [ 'index.html']
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
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match('index.html'))
      })
  )
})
// activate SW
self.addEventListener('activate', (event) => {
  
})
