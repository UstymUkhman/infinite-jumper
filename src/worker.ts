// import { registerRoute } from 'workbox-routing';
// import { precacheAndRoute } from 'workbox-precaching';
// import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

// // @ts-ignore
// precacheAndRoute(self.__WB_MANIFEST);

// registerRoute(/\/$/, new StaleWhileRevalidate({
//   cacheName: 'InfiniteJumper'
// }), 'GET');

// // JS:
// registerRoute(({ request }) =>
//   request.destination === 'script',
//   new CacheFirst({ cacheName: 'Scripts' })
// );

// // CSS:
// registerRoute(({ request }) =>
//   request.destination === 'style',
//   new CacheFirst({ cacheName: 'Styles' })
// );

// // Images
// registerRoute(({ request }) =>
//   request.destination === 'image',
//   new CacheFirst({ cacheName: 'Images' })
// );

// // Music & SFX:
// registerRoute(({ request }) =>
//   request.destination === 'audio',
//   new CacheFirst({ cacheName: 'Audios' })
// );

// // Fonts:
// registerRoute(({ url }) =>
//   url.origin === 'https://fonts.gstatic.com',
//   new CacheFirst({ cacheName: 'FontFiles' })
// );

// registerRoute(({ url }) =>
//   url.origin === 'https://fonts.googleapis.com',
//   new StaleWhileRevalidate({ cacheName: 'FontFaces' })
// );
