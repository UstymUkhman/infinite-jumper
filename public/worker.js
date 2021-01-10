!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="./",s(s.s="./src/worker.ts")}({"./node_modules/workbox-core/_version.js":function(e,t,s){"use strict";try{self["workbox:core:6.0.2"]&&_()}catch(e){}},"./node_modules/workbox-precaching/_version.js":function(e,t,s){"use strict";try{self["workbox:precaching:6.0.2"]&&_()}catch(e){}},"./node_modules/workbox-routing/_version.js":function(e,t,s){"use strict";try{self["workbox:routing:6.0.2"]&&_()}catch(e){}},"./node_modules/workbox-strategies/_version.js":function(e,t,s){"use strict";try{self["workbox:strategies:6.0.2"]&&_()}catch(e){}},"./src/worker.ts":function(e,t,s){"use strict";s.r(t);s("./node_modules/workbox-core/_version.js");const n=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class r extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}s("./node_modules/workbox-routing/_version.js");const a=e=>e&&"object"==typeof e?e:{handle:e};class i{constructor(e,t,s="GET"){this.handler=a(t),this.match=e,this.method=s}}class o extends i{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const c=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class h{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:r,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=a&&a.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return void 0;let c;try{c=i.handle({url:s,request:e,event:t,params:r})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this._catchHandler&&(c=c.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const r=this._routes.get(s.method)||[];for(const a of r){let r;const i=a.match({url:e,sameOrigin:t,request:s,event:n});if(i)return r=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(r=void 0),{route:a,params:r}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,a(e))}setCatchHandler(e){this._catchHandler=a(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let l;const u=()=>(l||(l=new h,l.addFetchListener(),l.addCacheListener()),l);function d(e,t,s){let n;if("string"==typeof e){const r=new URL(e,location.href);0;n=new i(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)n=new o(e,t,s);else if("function"==typeof e)n=new i(e,t,s);else{if(!(e instanceof i))throw new r("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return u().registerRoute(n),n}const f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},p=e=>[f.prefix,e,f.suffix].filter(e=>e&&e.length>0).join("-"),w=e=>e||p(f.precache),y=e=>e||p(f.runtime);function g(e,t){const s=t();return e.waitUntil(s),s}s("./node_modules/workbox-precaching/_version.js");function m(e){if(!e)throw new r("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new r("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),a=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:a.href}}class _{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class v{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let R;async function b(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new r("cross-origin-copy-response",{origin:s});const n=e.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=t?t(a):a,o=function(){if(void 0===R){const e=new Response("");if("body"in e)try{new Response(e.body),R=!0}catch(e){R=!1}R=!1}return R}()?n.body:await n.blob();return new Response(o,i)}function C(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class U{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const k=new Set;function q(e){return new Promise(t=>setTimeout(t,e))}s("./node_modules/workbox-strategies/_version.js");function L(e){return"string"==typeof e?new Request(e):e}class x{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new U,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}fetch(e){return this.waitUntil((async()=>{const{event:t}=this;let s=L(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){throw new r("plugin-error-request-will-fetch",{thrownError:e})}const a=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:a,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:n.clone(),request:a.clone()}),e}})())}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}cacheMatch(e){return this.waitUntil((async()=>{const t=L(e);let s;const{cacheName:n,matchOptions:r}=this._strategy,a=await this.getCacheKey(t,"read"),i={...r,cacheName:n};s=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:r,cachedResponse:s,request:a,event:this.event})||void 0;return s})())}async cachePut(e,t){const s=L(e);await q(0);const n=await this.getCacheKey(s,"write");if(!t)throw new r("cache-put-with-no-response",{url:c(n.url)});const a=await this._ensureResponseSafeToCache(t);if(!a)return void 0;const{cacheName:i,matchOptions:o}=this._strategy,h=await self.caches.open(i),l=this.hasCallback("cacheDidUpdate"),u=l?await async function(e,t,s,n){const r=C(t.url,s);if(t.url===r)return e.match(t,n);const a={...n,ignoreSearch:!0},i=await e.keys(t,a);for(const t of i){if(r===C(t.url,s))return e.match(t,n)}}(h,n.clone(),["__WB_REVISION__"],o):null;try{await h.put(n,l?a.clone():a)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of k)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:u,newResponse:a.clone(),request:n,event:this.event})}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=L(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const r={...n,state:s};return t[e](r)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class T{constructor(e={}){this.cacheName=y(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,r=new x(this,{event:t,request:s,params:n}),a=this._getResponse(r,s,t);return[a,this._awaitComplete(a,r,s,t)]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let n=void 0;try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new r("no-response",{url:t.url})}catch(r){for(const a of e.iterateCallbacks("handlerDidError"))if(n=await a({error:r,event:s,request:t}),n)break;if(!n)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))n=await r({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let r,a;try{r=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await t.doneWaiting()}catch(e){a=e}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:a}),t.destroy(),a)throw a}}const K={cacheWillUpdate:async({response:e})=>e.redirected?await b(e):e};class N extends T{constructor(e={}){e.cacheName=w(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(K)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new r("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){const s=await t.fetchAndCachePut(e);let n=Boolean(s);if(s&&s.status>=400&&!this._usesCustomCacheableResponseLogic()&&(n=!1),!n)throw new r("bad-precaching-response",{url:e.url,status:s.status});return s}_usesCustomCacheableResponseLogic(){return this.plugins.some(e=>e.cacheWillUpdate&&e!==K)}}class M{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new N({cacheName:w(e),plugins:[...t,new v({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=m(s),a="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new r("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new r("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,a),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return g(e,async()=>{const t=new _;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:n,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}})}activate(e){return g(e,async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new r("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params={cacheKey:t,...s.params},this.strategy.handle(s))}}let O;const P=()=>(O||(O=new M),O);class S extends i{constructor(e,t){super(({request:s})=>{const n=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(e);if(t)return{cacheKey:t}}},e.strategy)}}class j extends T{async _handle(e,t){let s,n=await t.cacheMatch(e);if(n)0;else{0;try{n=await t.fetchAndCachePut(e)}catch(e){s=e}0}if(!n)throw new r("no-response",{url:e.url,error:s});return n}}const E={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class W extends T{constructor(e){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(E)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch(()=>{});let n,a=await t.cacheMatch(e);if(a)0;else{0;try{a=await s}catch(e){n=e}}if(!a)throw new r("no-response",{url:e.url,error:n});return a}}var A;(function(e){P().precache(e)})([{'revision':'a48603d84a9a21d09aa11dd8a26eb443','url':'./index.js'}]),function(e){const t=P();d(new S(t,e))}(A),d(/\/$/,new W({cacheName:"InfiniteJumper"}),"GET"),d((function(e){return"script"===e.request.destination}),new j({cacheName:"Scripts"})),d((function(e){return"style"===e.request.destination}),new j({cacheName:"Styles"})),d((function(e){return"image"===e.request.destination}),new j({cacheName:"Images"})),d((function(e){return"audio"===e.request.destination}),new j({cacheName:"Audios"})),d((function(e){return"https://fonts.gstatic.com"===e.url.origin}),new j({cacheName:"FontFiles"})),d((function(e){return"https://fonts.googleapis.com"===e.url.origin}),new W({cacheName:"FontFaces"}))}});