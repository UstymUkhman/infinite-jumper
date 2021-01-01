!function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="./",s(s.s="./src/worker.ts")}({"./node_modules/workbox-core/_version.js":function(e,t,s){"use strict";try{self["workbox:core:6.0.2"]&&_()}catch(e){}},"./node_modules/workbox-precaching/_version.js":function(e,t,s){"use strict";try{self["workbox:precaching:6.0.2"]&&_()}catch(e){}},"./node_modules/workbox-routing/_version.js":function(e,t,s){"use strict";try{self["workbox:routing:6.0.2"]&&_()}catch(e){}},"./node_modules/workbox-strategies/_version.js":function(e,t,s){"use strict";try{self["workbox:strategies:6.0.2"]&&_()}catch(e){}},"./src/worker.ts":function(e,t,s){"use strict";s.r(t);s("./node_modules/workbox-core/_version.js");const r=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class n extends Error{constructor(e,t){super(r(e,t)),this.name=e,this.details=t}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[a.prefix,e,a.suffix].filter(e=>e&&e.length>0).join("-"),o=e=>e||i(a.precache),c=e=>e||i(a.runtime),h=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");function l(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class u{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const d=new Set;function f(e){return new Promise(t=>setTimeout(t,e))}s("./node_modules/workbox-strategies/_version.js");function p(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new u,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}fetch(e){return this.waitUntil((async()=>{const{event:t}=this;let s=p(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){throw new n("plugin-error-request-will-fetch",{thrownError:e})}const a=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:a,response:e});return e}catch(e){throw r&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:r.clone(),request:a.clone()}),e}})())}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}cacheMatch(e){return this.waitUntil((async()=>{const t=p(e);let s;const{cacheName:r,matchOptions:n}=this._strategy,a=await this.getCacheKey(t,"read"),i={...n,cacheName:r};s=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:r,matchOptions:n,cachedResponse:s,request:a,event:this.event})||void 0;return s})())}async cachePut(e,t){const s=p(e);await f(0);const r=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:h(r.url)});const a=await this._ensureResponseSafeToCache(t);if(!a)return void 0;const{cacheName:i,matchOptions:o}=this._strategy,c=await self.caches.open(i),u=this.hasCallback("cacheDidUpdate"),w=u?await async function(e,t,s,r){const n=l(t.url,s);if(t.url===n)return e.match(t,r);const a={...r,ignoreSearch:!0},i=await e.keys(t,a);for(const t of i){if(n===l(t.url,s))return e.match(t,r)}}(c,r.clone(),["__WB_REVISION__"],o):null;try{await c.put(r,u?a.clone():a)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of d)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:w,newResponse:a.clone(),request:r,event:this.event})}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=p(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),r=r=>{const n={...r,state:s};return t[e](n)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class y{constructor(e={}){this.cacheName=c(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:r}),a=this._getResponse(n,s,t);return[a,this._awaitComplete(a,n,s,t)]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let r=void 0;try{if(r=await this._handle(t,e),!r||"error"===r.type)throw new n("no-response",{url:t.url})}catch(n){for(const a of e.iterateCallbacks("handlerDidError"))if(r=await a({error:n,event:s,request:t}),r)break;if(!r)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))r=await n({event:s,request:t,response:r});return r}async _awaitComplete(e,t,s,r){let n,a;try{n=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:s,response:n}),await t.doneWaiting()}catch(e){a=e}if(await t.runCallbacks("handlerDidComplete",{event:r,request:s,response:n,error:a}),t.destroy(),a)throw a}}s("./node_modules/workbox-routing/_version.js");const g=e=>e&&"object"==typeof e?e:{handle:e};class m{constructor(e,t,s="GET"){this.handler=g(t),this.match=e,this.method=s}}class _ extends m{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class v{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const r=s.origin===location.origin,{params:n,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:s});let i=a&&a.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return void 0;let c;try{c=i.handle({url:s,request:e,event:t,params:n})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this._catchHandler&&(c=c.catch(r=>this._catchHandler.handle({url:s,request:e,event:t}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:r}){const n=this._routes.get(s.method)||[];for(const a of n){let n;const i=a.match({url:e,sameOrigin:t,request:s,event:r});if(i)return n=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:a,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,g(e))}setCatchHandler(e){this._catchHandler=g(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new n("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new n("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let R;const b=()=>(R||(R=new v,R.addFetchListener(),R.addCacheListener()),R);function C(e,t,s){let r;if("string"==typeof e){const n=new URL(e,location.href);0;r=new m(({url:e})=>e.href===n.href,t,s)}else if(e instanceof RegExp)r=new _(e,t,s);else if("function"==typeof e)r=new m(e,t,s);else{if(!(e instanceof m))throw new n("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}return b().registerRoute(r),r}function U(e,t){const s=t();return e.waitUntil(s),s}s("./node_modules/workbox-precaching/_version.js");function k(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(s,location.href),a=new URL(s,location.href);return r.searchParams.set("__WB_REVISION__",t),{cacheKey:r.href,url:a.href}}class L{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class q{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let x;async function T(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const r=e.clone(),a={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=t?t(a):a,o=function(){if(void 0===x){const e=new Response("");if("body"in e)try{new Response(e.body),x=!0}catch(e){x=!1}x=!1}return x}()?r.body:await r.blob();return new Response(o,i)}const K={cacheWillUpdate:async({response:e})=>e.redirected?await T(e):e};class M extends y{constructor(e={}){e.cacheName=o(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(K)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){const s=await t.fetchAndCachePut(e);let r=Boolean(s);if(s&&s.status>=400&&!this._usesCustomCacheableResponseLogic()&&(r=!1),!r)throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_usesCustomCacheableResponseLogic(){return this.plugins.some(e=>e.cacheWillUpdate&&e!==K)}}class N{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new M({cacheName:o(e),plugins:[...t,new q({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:r}=k(s),a="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,a),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return U(e,async()=>{const t=new L;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const r=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:r,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:r}=t;return{updatedURLs:s,notUpdatedURLs:r}})}activate(e){return U(e,async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),r=[];for(const n of t)s.has(n.url)||(await e.delete(n),r.push(n.url));return{deletedURLs:r}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params={cacheKey:t,...s.params},this.strategy.handle(s))}}let O;const P=()=>(O||(O=new N),O);class j extends m{constructor(e,t){super(({request:s})=>{const r=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:r=!0,urlManipulation:n}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(r){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:a});for(const t of e)yield t.href}}(s.url,t)){const t=r.get(e);if(t)return{cacheKey:t}}},e.strategy)}}var S;(function(e){P().precache(e)})([{'revision':'d86b77230a688367dc237a0744c1197c','url':'./index.js'}]),function(e){const t=P();C(new j(t,e))}(S),C((function(e){return"image"===e.request.destination}),new class extends y{async _handle(e,t){let s,r=await t.cacheMatch(e);if(r)0;else{0;try{r=await t.fetchAndCachePut(e)}catch(e){s=e}0}if(!r)throw new n("no-response",{url:e.url,error:s});return r}})}});