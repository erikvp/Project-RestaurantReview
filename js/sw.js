/* References for the code below:
 * https: //github.com/Sugahzor/udacity-restaurants-stage1/blob/master/sw.js
 * https: //github.com/stearruda/restaurant-reviews-app-stage-1/blob/master/sw.js
 */


let staticCacheName = 'restaurant-static-v1';
let urlCache = [
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
  '/img/10.jpg',
  // '/img/11.jpg' //for testing error
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(urlCache).then(() => {
        console.log('PASS: All files cached');
      }).catch((error) => {
        console.log(`FAIL: Caching error: ${error}`);
      })
    })
  ); //waitUntil
}); //eventListener

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
    .then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('restaurant-') &&
            cacheName != staticCacheName;
        }).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      ); //Promise.all
    })
  ); //waitUntil
}) //eventListener

self.addEventListener('fetch', (event) => {
  event.respondWith(
    // ignore query (?id=) at end of url: http://localhost:8000/restaurant.html?id=2
    caches.match(event.request, {
      ignoreSearch: true
    })
    .then((response) => {
      return response || fetch(event.request);
    })
    .catch((err) => console.log(err, event.request))
  );
}); //eventListener