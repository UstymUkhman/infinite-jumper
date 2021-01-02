import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(/\/$/, new StaleWhileRevalidate({
  cacheName: 'infiniteJumper'
}), 'GET');

registerRoute(({ request }) =>
  request.destination === 'image',
  new CacheFirst()
);
