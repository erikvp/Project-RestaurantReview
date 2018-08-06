/* References for the code below:
 * https: //developers.google.com/web/fundamentals/primers/service-workers/
 */


let CACHE_NAME = 'restaurant-cache-v1';
let urlsToCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.json',
  '/img/',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    console.log('Opened cache');
    return cache.addAll(urlsToCache);
  }));
});


self.addEventListener('fetch', function (event) {
  event.respondWithcaches.match(event.request, {
    ignoreSearch: true
  }).then(function (response) {
    // Cache hit - return response
    if (response) {
      return response;
    }
    var fetchRequest = event.request.clone();
    return fetch(fetchRequest).then(function (response) {
      // Check if we received a valid response
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }
      var responseToCache = response.clone();
      caches.open(CACHE_NAME).then(function (cache) {
        cache.put(event.request, responseToCache);
      });
      return response;
    });
  })
});

self.addEventListener('activate', function (event) {
  event.waitUntil(caches.keys().then(function (cacheNames) {
    return Promise.all(cacheNames.map(function (cache) {
      if (cache !== CACHE_NAME) {
        console.log(`remove files from ${cache}`);
        return caches.delete(cache);
      }
    }));
  }));
});