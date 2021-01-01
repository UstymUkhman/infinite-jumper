import { CacheFirst } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';

import { precacheAndRoute } from 'workbox-precaching';
declare var self: WorkerGlobalScope & typeof globalThis;

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(({ request }) =>
  request.destination === 'image',
  new CacheFirst()
);
