import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(/\/$/, new StaleWhileRevalidate({
  cacheName: 'infiniteJumper'
}), 'GET');

registerRoute(({ request }) =>
  ['image', 'audio'].includes(request.destination),
  new CacheFirst()
);
