if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(function () {
      console.log('PASS: Service Worker Registered!');
    })
    .catch(function () {
      console.log('FAIL: Service Worker Registration Error');
    });
}