/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors.game"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/assets/brick.png":
/*!******************************!*\
  !*** ./src/assets/brick.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAMAAADlCI9NAAAA8FBMVEX/lFVQKRZMJxbfdEBLJxbidUHhdUA1IBL/klTec0AjGQ8rIBM5IxRjOB8yHxI+JRWhb0a5glSgbUWLXTt+Sit2Rimue09uQSZ0RSh7SCmTTCqSSyonHBKUTSpuOSBxOiByOyBNKBZJJxZKJxbxjVHFbj/AajzDbD25YDW3XzS2XjTqi1HAaTy0XTPqiU/Gbz/Ubz3RbTzqilDXcD7CbD3NazvObDwqHhOGRyjCaz0uHxNULBhaLxpCIxQjGRDIgE95PyOVUC08MCDRlWDCglPXcT5AIxPXl2LZi1bYiFTXhlO/d0jYcT6sYzmkXjekXTa7DS/AAAAAGnRSTlP99fn1+fX18P31397w7fHu7Onm7Ozr5/Hw7aKWIVwAAAIdSURBVGje7ZZ5b9pAEEc3TRu3QMjR2zMmIaRJoU1PWlxIILTpfX3/b9Ndc4xCPY4yvz9yyA8kbK3f6tmS0Th+dNvj8tlgzz2ns878EPNdLX2ex17GaL1aXUv3dH7eRX23tB3nk8RJ8vRVv9fcTnQ6t1A/BKj4DZhtAeIDAUkMBIgPPAEkQHw8IAYDYjgggAQE8AD/NQWIDwVMN7EFiA8FyI1YAsQ3Bwi2AMEcINgCBCRAHqYEAL4pQLAFCHjACuqXAS4aNHRSYj46bOgcr6K+42hHp9ln7n3R11s1Rn3HlSFfGL3qZQh4vCt8/cjc/7ur8ims/1YWLf4Gu7X0w4xu98eIeUDdOfsLfD9hPhzv52HzR5v+NaR4TvsXc3Or4LV6n/daAX5nZRJAsw0+2wLENwUEwACCAyi7i/ZbW4D49oAAEhCAAwgMoOsSQPoG75QAk68HEBkCTP7BshIQiMkWID4WEEACAraABp3iHAGKjwYQGEDnCOjIBgsUB9h8PUDBFiDgAQQGUE7A6ak4HatTrD7l2nyZius7rTmTKbal0uz59SNl0eCXU3EWcP/Ff7yZkU2xfybHz/J4wKAfpuInOt9OmAfj6clL/11ktIn64TXUab+W//ZcDpZRvwwoA8qAMqAMuPIBd1DfLRWtd87eoNi/BgHD4VkBoO/qgy2d49VKJSq+APUd12/czD6e8CPHnhp7oumZrMklEaP+P6XNjetXn5V4AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/assets/button.jpg":
/*!*******************************!*\
  !*** ./src/assets/button.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUEBAQEAwUEBAQGBQUGCA0ICAcHCBALDAkNExAUExIQEhIUFx0ZFBYcFhISGiMaHB4fISEhFBkkJyQgJh0gISD/2wBDAQUGBggHCA8ICA8gFRIVICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wgARCAAyAJYDAREAAhEBAxEB/8QAGgABAQEBAAMAAAAAAAAAAAAAAAEGBQIEB//EABsBAQADAQEBAQAAAAAAAAAAAAABBAUCBwMG/9oADAMBAAIQAxAAAADqee+r8/P00hSBAQCZBAAAym3h6zG2ufWtEgAAAAAADIa2Tv6Vrn1rZIAAAAAAAyOtk76lb59a0SAAAAAAAMjrZO+pWufWtkgAAAAAADIa+T9DrfTmUdIQoIAAACkKDKbeHwd781yqdh10JJCnimoSkdUTAnMCyh7t/O//xAAyEAAABAUDAQcDAwUAAAAAAAAAAQIEAwUVVdERk5Q2BgcSMUB0shMUIRAgIkFCQ1FS/9oACAEBAAE/AJ7PJrCnrho0cuYSIbiP9SL95E/70QhKPIiItRW5zeH3IXkVudXh9yF5FbnV4fcheRW51d33IXkVudXh9yF5FbnN4fcheRW51d33IXkVudXh9yF5FbnN4fcheRW5zeH3IXkVqdXd7yF5FbnV4fcheRW5zeH3IXkVudXd7yF5FbnV4fcheRW51eH3IXkVuc3h9yF5HeH2knqZEyJq/et0IipKJGJ9ENcVZkv+3ySREJ51HM/dRfmfou8HpuB7pPwWJ51JNPdRfmfou8HpyB7pPwWJ51HM/dRfmfou8HpyB7pPwWJ51JNPdRfmfou8HpuB7pPwWO0MFUGePI0RSCJw7jlDT4y8SvCv+R6a66FqQ0MaGNDGhjQxoY0MaH+zQxoY0P8ATQwRDvIgnB7OMfqqh6uI5RUJJZGo0kS06mX9PyO1EymJdt53EJ+5JaH0dCVFFVqSfqn+BWZvdXm+rIrM4urzfVkVmb3V5vqyCnM4urzfVkVmcXV5vqyKzN7q831ZFZnF1eb6siszi6vN9WRWZxdXm+rIrM4urzfVkVmcXV5vqyKzOLq831ZFZnF1eb6siszi6vN9WRWZxdXm+rIrM4urzfVkVmcXV5vqyJbEXMHUT79anf8AH/Ofj8j/AB5/61Mf/8QAJxEAAQQBAwIHAQEAAAAAAAAAAQADUpETAgQUBRESISIxMjNAQXH/2gAIAQIBAT8A3O48z6tXi/1Z3pm1ndkbWd2RtZ3ZG1ndkbWd2RtZ3ZG1ndkbWd2RtZ3ZG1ndkbWd2RtZ3ZG1ndkbWd2RtZ3ZG1ndkbWwe8Q+R7/3uVuftP4um++pbn7T+LpvvqW5+0/i6b76luftP4um++pblrX4i528vxdPb16QdZHkU8y33PpFIMNd/gKC47MBQXHZgKC47MBQXHZgKC47MBQXHZgKC47MBQR27MBQXHZgKC47MBQXHZgKC47MBQXHZgKC47MBQXHZgKC47MBQW0a0dj6Qv//EACcRAAEEAgEDBAIDAAAAAAAAAAEAA1KRAhQEEjNABREiMSFBMkJh/9oACAEDAQE/AOHxviD04nE/4PdazEBQWqxAUFqsQFBarEBQWqxAUFqsQFBarEBQWqxAUFqsQFBarEBQWqxAUFqsQFBarEBQWqxAUFqsQFBazEBQWsxAUFzON05/xx6f1+Fwuzj4XqH6XC7OPheofWK4XZx8L1D6xXC7OPhc/wDquG+30Bv3+Xhc7kN5ZdAP5H2mX3RiPbI2jyn5mytl+ZsrZfmbK2X5mytl+ZsrZfmbK2Xpmytl+ZsrZfmbK2Xpmytl6ZsrZembK2Xpmytl+ZsrZfmbK2X5mytl6ZsrmPOEj5G1/9k=");

/***/ }),

/***/ "./src/assets/mario.png":
/*!******************************!*\
  !*** ./src/assets/mario.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAABsCAMAAACSLQF5AAAC/VBMVEUAAABiAgJKJh9hAAADCVtzSyoxIRJiAABiAQFhAAA3HRE1IxM9GSlzSyo+Gg42JBU1IxM2IxNhAABhAABgAABGEQpySioAAFg1IhZySikBAFc1IxMTExJhAAAsHhTBhVUTDjxzSyoAAFgAAFgqBTABAldnAwRzSyqLaE02IRRhAACEGhsTExJxRygBBFmxdVEAAFguHxIAAFhzSypzSyoCBllzSyoKC1k/KRwbHSF0SypjCgZ4GxsAAFhpEgsTDy2fY0GQd0o3FUUTExJhAABzSyo1IxMAAFj49/iaHifwd2ccTWzwn28TExIocaLeLy3Xz26pbz/JKCiAEBSJFRvWLSxWOB+SGB9ILxl2CgwWP2hsRigIFV7wmG5fPSTVa1w+KBayXE1MMhzwjmtzPjWRT08iXobAJSWZMCm2ISLt6sklZpVTOi6mICVrBQb08u4MIWN5Ty2vmlOcZj3ommuFVzF9RCkfV3t+WDmTHCbwiGuQJyPWjmOObzyQXjVMEgoHAlMRC1J1FzMcUHFpIBU7KkF5KCgSMmUlPUuebDnZzscpGkju6umVt8+7YU4vJyDArl3Eg1xmFg3wf2nr4t8QLXUjSWBBTFGghkmaIynn4rAzTFuARTh2UTbysYnGZVOEYDmlXENiPDBGABnNvmZiEzhgMF5ZMyYbNEbflm3odGSgmmnPKyuMRijx7thcW2GvHyFLLB4ydp9CQF0+KyA/fqEuNDWzno3MiF/21dBZi5P0w7USKGBsKxiCgYCmOTLzm4+aroCbUUWQR0FMDj9yRCdUAQrMtq3h256oj31JYGx0cWXVMS1PcW7ecF91o8LAsKMTDT5vOSDj19RngW81CBtmjY+acFRQTUabgEVONz9hTjLzrKY8Z4HRwrc4IlzINC20vHiOVTmzQDWDoofKlnpuMUWDGS5IBgbPnpeMkmqEeEk+D0XA0d2np79MfZivloYXAEOpIzfyuZwXQYDZ0nafgGluZ044WnNakreNoKzfNzXggGQdBEGtloBspd+FAAAARHRSTlMAwQmH/r5SrtebHo8TdTO458Nm6Vcppox3lXnWuHdl/kXso1T+uZdT/oVA/I/bxv4mo+A+KNbNsp/6hvz96+jV2c/gfH772Z8AABTUSURBVHja7Z15XBZFGMcTQRJeUVEIK1E7NCQkM8u0O9EkssIDFCTAgsgICFFCI0TLyjQ1ExUNJU1BTTwqK8ySzNJSS83KTivLbi2769NvmAdm9t3jfXGh653fPzs7O/Plmec3e7i773qChYL6G6rdCQ1QV2NGxxMapu79jRXoPqK9McH3hAYr0JjUsknzYt8jZbWyWlmtrFZW/9+sbt68edchQqvv40IxHJvcSnEAGjaTGIRYjWIzbApyMxIH2raUMIUSxxfb/Fwj/NDMV48oRPFEbOruEmBKyjUj2c9L03tEwtS4bZBQp+u45g8aFIdNzdyd/UMEYj4hOqE8BJvau5tdtB0hhTJT4ozANjfSG+CEWMoJS1Ecik3NG3B4MSbNJFLHxsuLfY+U1cpqZbUnWt3V19d36NChcbFCh2/hchcTBEQzMKoE4kNCHG7IkHx5KIOkUL4nzqfuWe1FkciIZznhfTLoxGAhL3OSg0iZEmmBltSx6fNi3yNZJ6Ih/m7mtULvXsUlMO7N/nSB+I0Q2xoypH584lZJoTxNnMNuWk1zP0OP2EMGTYkSsrLagDRHS+rYKHmx6ZGyWlmtrPZEqzueyBUeFxc3bNiwVZmZmXEjuC66h+s2CJh+aGU8rGYccQkQmcMghFDHIMRFDAG1QzM/038yUijADCJMlQhFx3EYIFrqEZkCwQmE6Nev33d7uM6PiPCxIGUKknZMEMXSvSnzYt8jym9/rjhMF4QyjKaqiboaMtphi9PsH2LOML1d0JIaSBM3s7+5HEbJ1SPizAmHaZdYFBUVYY/UvvHyYt8jZbWyWlntCVb3l/5dP4yHEivdLoi9VqNYuoQI1KXkDmxxSslQYsgAqApV7JyiPx3p+2RIoaxy4mSizvkOf1c9oko7QFnpdIF3P3d7Dq7OfMScOx5SUOPlxb5HympltbLaU6zOhBgGF/Lp7NwSx5URq1EGqsytBiLjWs6IY1hixGqViSpzqykUwtRaTZh0J84g1Oms1iOqzBFVqLK0WpCGscDxj5khJiQaU1BT5MW+RzJGTA0UEY6lTK3WTHFrWVhNuy9deVjLzGqa+6vcQVhbTSSW2hGuxxXUOHmx75GyWlmtrPYUq0ewJ3QZXEOhCRMm3HwT180o1/BizezZsy/x5equGxLrR4hMYtQQYwJExXvAaEYMvdUUShXHVIlQBEbPaels9RAJYR7JQhA2rebaA5/xEHCBkdV1J2OKrd/nXOEgUbGdr5BfU+TFvkeE0WtEdHT081dxvYvyHINJ7zQknT5GP3q4kCXhngKjm+ltXj0mHH3fpb7Po5xF5VfA6eXeW3oT0O1Z6jYKZSq+D8K867gex/oxvLGgt5okjg37ruG6ITq6koo9qUcj58W+R8pqZbUx5nll9b/eamuPhJpDzaZMmXIXafPmzR8T5uvp06cfLigo+AZLS0wgGJsEYwoYZTSk6RAQFVh87WpI3Y1DeZdC+RQcLMAhq00QJwrEbCBmMKsJUUEIJ6sXQLfPmzevb9++3WSrRwyp1wga11nPcVWCSsXLW7Vq1asp82LfI6G+aBA/gCsaIsz0wYMHvxITE/MtllmuMF2iohIIsZABaEhPDB68DohPgdhlOSRSMBokc8xaxiCrd6H/p+CsIw5ZbSgfgVhOiGclBBZPyFaTcuhxh7Bao5f4uEDiKoiOfoiK20Bq1Sh5seuRslpZraz2MKuDocvKysqSJMzo0aO/B+bXFStW/AhMCZaWmFZgdOrUKVIaUgEYbEilK1bcC8RGIN50NaRuLBRwhgurHwKGZfdN9J8Fzr3EIasNEZFAxJPVEmIvuk4EAotSsnrcaqFukEwKaN++fcSmTZvqzrMpKSllZPX0Xbt2VYCKxXRhdZPlxb5HpCgoBV1vFJiH0JVhnsPl5X6UN2BpjqH9aGxMTIU0pNHox4b0JPqiOAuLNa6G1AobO6FxkmQ1Vll2d6A/23Qhls9ZWN0B9RvRLlVYXUCINejKNmHxJFm9qb+Ql/XxIUk6PvyCPagiJmYsFr9IVtvPi02PlNXKamW1p1u9fPnyrTHQI488UjFr1qwKFDdi+Qg0ceLETueff34rV0OKByOSISDWF8WxWEzE6lgwLgPjPEurRSh5UihjWWqgCrZOHIe11clAHKRIJgrERqzGgHD9G2+8EU5Pib2cgwG9E9pIVheMGjWqdtJceOGFEzEmLErMrbafF/seWWOg4TGm2ojWHSyHRMo1Z+SitUurSQkx5ipEcyurSYvMCZFoPYHe/fAyILGruHiyWjo+vIU9iFmNxTtGVtvPi32PlNXKamW1J1jtBfXNyckpq6ysZAkaC7EsYBx1/+QfxRGjUExB9dmGjC45OXlAzAAinyGgW/ljAaaHKIwClJejOsgslGCEcgM4OEWmUihnof0WCiVG4qxFvcMA4QPEzsrKnSwhhMhH0xQJQaOpQfUUd6yGkpOT86krQeVlZJcuXbo1RV7se6S/E1OGRgzDuzQcg7tCOWhQBgSlpOFDortlrA+zmvq4b7XYl3biwRPbF1lbsnqJFjEaxYVuWk3Ktz4+dGvCvOg9UlYrq8098oM6JCQkMEz52rVr0Z5d+eei/Y03cI0exYXiFlT3RA9tYhyo6ZKQEMWGBMRBMCrASEXjGRyxkxC/o8yG1Bk9JIDABCMUlobUtWuTKBTmUw2FMkribEB9AHFkhA8QzGpEkkCIRWy2aBEFKN7IrA4PDzeyum9ERMSsioqK5cCw43dqamohjWssIWJIKF6Pv0lW285L03gEDSBJp7KN12hVxrfcIFWFahhtOSKeEAVgLNIiNtCmhVKdbkQhFEoZzXiauLJ2EoeZRLpQRvgTYqdA7HdCEGGJVPWSxS0UPJjeWXd8oHGlGB8fWshd7efFvkfKamW1svr/bnVr6BRgambMmFGJxjjeT7yV60HqU5NSqy0sr6dyaYflDwYQyUCUsQSDkUsMQjyYwlWO8qXE0I2oBTBtwNkCTjQPZZZTKEuIs9yEE0qIJUBQJJFOCCLUJncf0zX7mkHOVgd17tw5IikpCTmpLC8vZ+fZiZGRkWxACwlRd56lcV2JHl5NkRf7HgmF0axxuixcfI1OiMNEbbSPBUYTg0KRhRDM1ZNCqdSGcuAavTqbIFpzQrK0LzGV6wl30Tv4AQaUPvrjQ67x8WGLVBXUeHmx75GyWlmtrPYEq1v4c6XQSXI014wbhTZs2NDm7LPPDjUPhSOCgWDRFBBjoUCUg9EWjAB3QplBJ1vCLJFCWU4cPxNEqECUSYgt2tGsxcu24WZWUyDMppotW5YQJXIRV/35kaucpfdsLoetvDSxR7IicMUZbSx6y86legGxxBhRZvJYwOwmU55JKDPc43ih2UFjwk5sWk2/l5Otdn0FTXe7dLqy8fJi3yNltbJaWe1pVge2bNnyEpy/bubavESIrU+bNu0Kl8kFwheIi9D+0GNcNwvdA0aI6zC4pkCEOCQx2Pr6kpISnw5cXseHAOEQfrzKPufXNTAw0GF2fgytVQhyUHvhUMCVsqVeNbg13hZNAmznpck9EvLtr9HsKKF+WC8aOPBcVwiH1P+MgVwviapHsXqyK0ZL6S17QpwhYYuwnn311Ve/RaEZfrfMGoFVbxDWu/9lT4f58eEGbApuvLzY90hZraxWVnua1YG4B/wZ+5BDeq0y8M7sWfcL5WP9UahHjx4nmYcBRjrXzWhffivXH0eO/DGU67Pi4uIrwGjt4+PjZ4RoD8QlFAbT0aNHD40cObL6yJEjy4hRDH2VmJg4tbS0dDdCAyrYeSThesQkLWIZCNXr169fa2F1x2ZCs6EPuJaFC7F1xFHiI+RnNy9N6hHUXPuJlw8xS368SugsrNMucqYpox2+o3Ut18dRQpMGDiwaJPQiGO/Q63KWn70hbcb+V40+y5wYU1H/NULLj4rqYvbZG1INmmZrEZ9hNRHVd5PV1ocX2vW49umPDyVRQufZz4t9j5TVympltadZXcW+QA+NGzdu8dKlS1+WMA9AOVu3lptifNu1axfL+3+I/q88IJSPV6KGcaXTkL5B9Vl4mVaD6A7ERXfccUc6Gq4eJ4Sqd5hXRUVFR4mTgbqvvL29Vx47dmzOAw/sASqYIdoDEY5tscaIRCBAZ1qFqmUgnGFidSBImYyytV6McogCKUaZVAxKNqp/peHSuOznxb5H5pgMmnqYHYvxy3IZQ5/LJozJNa80216R+i3GOpFj64ZEk1B7SSZ9hW21mPzjUHWIdsuj0pfevsL6SoSZhUHW/SItUEKM0yJqrUaXdPHxu2VYNbO6I0ureSDFKJOK6fjwq7Rz2c2LHY+U1cpq/cFBYLIgJwyOXWc6HA4vQ6tXof+rr776IR7y/SmfQ/Lz81+F5AMVyKZWp6Ptwfx6LZw/f3691cO4ZKsfyMqao7Naj6izOoMO4G5YnWkcSDWO2Mtw5K476yMntVZjTMJq23mx75HrUz5huBZoMVvp6uQkQ6sx+Pnoe6d+tmWxnUK6/PgCTRabWc12xz2i7/tYfUu3MwmroaXCaoGYIxDbsFpCVn8mCK6s3oRu9wvK/RRIGn5UzYKJpY+YEmkHArlFWG03L/Y9UlYrq5XVnmZ17KpVq3Ahnzdz5sylLLTHue6H2A093Hfb59Jq6pelHdLWYohuau5YuXJlvpHVI/AF3IN33nnnHinD+/fvX4Obj9Xot6xYaBpxZkK4n9ih3mpCzHGJeBGrZ2BEhv/Ywo3QcaBIVu8B5SdQ6qzOWFWrdMnqBRg2WW0/L/Y9ssaQJvDQuGiqFQ0kubZazDYxpHLqW027V7mR1VNQeTt98lPS7vrdUmgqrSdIt1ACaV+cya/MZT2F6lJ08RaERLo5c7rRD73NA9nOrNYfH3ZIqbKbF9seKauV1cpqT7I6DD9nmT1ECB/hy7ldaN7bb7/9MLRmzZr1hpiOeBEmnPcbh/Ys1y/fwrVt9+7d6P7lw1w/7927lyW4D14W0iACgIigDC9AP6cM/4R+a6CHSduJE9yhQ986RHdCzNQjntIjJmO11NJqouitfjg7O/vFZfX6Cqvrd+zYsRJDD8a47OalaTwinYSNj5o89qbcrcOXObFYaYppJ/q9fZ0QrjNysPhoMNcnKLNQzjnBNMNcWXKGRfU64ryA8gfg6L6FQuFCxzRWUzVEhDdR3EFWuxsIWT1ef3zIFo8r7ObFvkfKamW1strTrJ52t1Yl0Pbt27/EeWCpO5gzIOr30zyh2yF3h9QLn8u/HH3Y31vA9fJ33333HMJYaWD1O/iLffz9w1wgtgmEs9VfgtAaP45xfs3nPInyshQIxvYeuu794osvdkA/cP2MVTamPujlsJ2XJvSIMLim1SmNcgq5xlzMn9NDmmf1LISGDCmYZihpJlbX8DB0Vh8YUKs2Rj+AXyoQt9O++IKB1QO4Aoy/VqoNhO6WGZPW0PHBfl6O1yNltbJaWe2hVp+DTzv0wF3YkQIxfgwEzLfPcKE4Bq/TXoCWxuFgw+lAZKPvXNwr/vk9rtdINCS2Pnfq1Kk9zjzT+Al6n/j4+MV31usnhtKEgTjGjx9fcuDAgTwSvh7hLyNa6xFpTggQSkFYVEeAvJzP17169brcKRCWEpNJg68InwKKX1Plxb5HQhdgLsiYwTqNcfWGg4NfjtJs45qsxaWxFbqANf0pfYKY/AcEChKMJ9Gs8Ppa3YdiW43VWsRbesQYVN3LWl3PlYqy4WdvjAP5yPz4ENQ4ebHvkbK6Uax+QVmtrP7PW52NU8TkyZOvtsSc0qZNGz4k9MUZBBqPTol4F4vxJpOYTQ9y6RChQCThpdlpkyZNmstVh0qj7qw8F32jcnNz83JqFSVbHUaISZaIMSDcCkJhDle8idVt8bngOpJk07onuBgJwFL88JbFw8SyYDcvtjyyazU2oWokYcw/e8OHRCkRd5UIScIeyWX4ibok/jo8+hjOelYuRbMc7It5aAolyFb7myPGC0QaWg0HoTCKK9nMatQX0RW0GJfR8SHqei42aezmxZZHympltaTTcEQxwSQSBi0uMP00eQOGlMzFemkYYVY+6a3Oka0mhIHVacdntRfkptUYi85qu3mx75G1ekt/n0J7mCbSQKvf7rKUJPCkPygHL4Ykz9w8SguKp4hvUQyAJJ+cLsOypfl8LzNKMqnO6lAtwtsJkSgQc9EqngipvJPO6j5EIqsprUaTJslp0jRGXmx5pKxWVv+dVk9WVhvn5R+xeqTQD7jvxnI8FeXjsZoxevfo0Zst2Tr+yfIk/mGSl8ulszoZkq0ew5WG7okUhqXVWoS3hBgvI1xb7QgICOgpWY37qGmMRsTJFAgDs1YYSx5aJkCS1fbzYt8jK4yFGm51Ir9/74WFt3SlmkdJdraa/BNWE6ZaisHaaqoXVo8hRLaMcG11CNWR1S6OD6lEiqdejZSXhnukrFZWK6s92epLX3/99Wmkuz+4m2kaVWFxqSuro/BR/FvvFTrztNNOc2BIWFyAVXY+iiosLMxhLaGePXuG6azOwTNFZnUaztFTuXqfJsTWV7CmxBgAgRMiW51HiDEC0UOLqCarE0BgBrUGwtnqZESbIFk9hmsyunsDXo2ludX282LfI2udwuYXV93lYBJFi0UbV1bnoH3hAKHOokWASIn+SlW2uhCMaXQ7wOD19Yux/jo1pdRSWMLqXCAmaREnSwisFpHVw01eTQghElOR+fHBxGq7ebHlkbJaWa2sVlZH5eDkkUvXCsNJYWFhoYb9QkNCQlgD9MnDIokYfdDBoR9SEpr4o4el1fhxTPXJXJ2lZrUV6NsWjGQXVgPR2wQBQh8Q4l1YnYcBMavT0tLGZ3NdcLIQi5HGlUTx0Ljs58W+R+5hSIXSk3t6rtDa6slWstNsYzuNn35I8fQI39Jq66tJ+p81rK2GepgC6PactdVE8jY+PnhhdRKNaziRguznxb5HympltbLaU62OFxpOSqZqS0yLFi1CqV+q6CcPKZk2h6Gp7oGsHyr70N8MOb1WnS0iDWghJCNaEyLUCkGthRzWVg/Eyzy9T+eS37pl6+jtj7+ZrLPafl7se2SNsZY1xqFvL4YkBG+MFSJ2suOVv/izNhRy3MeHIHt5se+RslpZraz2AKv/AgRsJxMyC6kQAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/assets/sky.png":
/*!****************************!*\
  !*** ./src/assets/sky.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAJYCAMAAACtqHJCAAAAM1BMVEUfnsiH0+wWmsUoo8tOtthYu9xqxeKa3fMyqM47rdJFsdVhwN90yeV9zumQ2O9gv998zelgWOHvAAAEiklEQVR42u3TtxHEQADDwHtvZPuvVg2QgWLtloAZjDtQDQnAIGAQMAgYBAwCBgGDgEHAIIBBwCBgEDAIGAQMAgYBg4BBwCCAQcAgYBAwCBgEDAIGAYOAQQCDgEHAIGAQMAgYBAwCBgGDgEGAOAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAWQ+gMggYBAwCBgGDgEHAIGAQMAgYBDAIGAQMAgYBg4BBwCBgEDAIGAQwCBgEDAIGAYOAQcAgYBAwCGAQMAgYBAwCBgGDgEHAIGAQMAiQB/kClUHAIGAQMAgYBAwCBgGDgEHAIIBBwCBgEDAIGAQMAgYBg4BBwCCAQcAgYBAwCBgEDAIGAYOAQQCDgEHAIGAQMAgYBAwCBgGDgEGAPMgPqAwCBgGDgEHAIGAQMAgYBAwCBgEMAgYBg4BBwCBgEDAIGAQMAgYBDAIGAYOAQcAgYBAwCBgEDAIYBAwCBgGDgEHAIGAQMAgYBAwC5EH+QGUQMAgYBAwCBgGDgEHAIGAQMAhgEDAIGAQMAgYBg4BBwCBgEDAIYBAwCBgEDAIGAYOAQcAgYBDAIGAQMAgYBAwCBgGDgEHAIGAQIA/yBCqDgEHAIGAQMAgYBAwCBgGDgEEAg4BBwCBgEDAIGAQMAgYBg4BBAIOAQcAgYBAwCBgEDAIGAYMABgGDgEHAIGAQMAgYBAwCBgGDAHmQF1AZBAwCBgGDgEHAIGAQMAgYBAwCGAQMAgYBg4BBwCBgEDAIGAQMAhgEDAIGAYOAQcAgYBAwCBgEMAgYBAwCBgGDgEHAIGAQMAgYBMiDbEA1JqAyCBgEDAIGAYOAQcAgYBAwCBgEMAgYBAwCBgGDgEHAIGAQMAgYBDAIGAQMAgYBg4BBwCBgEDAIYBAwCBgEDAIGAYOAQcAgYBC49CBvoDIIGAQMAgYBg4BBwCBgEDAIGAQwCBgEDAIGAYOAQcAgYBAwCBgEMAgYBAwCBgGDgEHAIGAQMAhgEDAIGAQMAgYBg4BBwCBgEDAIkAeZgcogYBAwCBgEDAIGAYOAQcAgYBDAIGAQMAgYBAwCBgGDgEHAIGAQwCBgEDAIGAQMAgYBg4BBwCCAQcAgYBAwCBgEDAIGAYOAQcAgQB5kB6qxAJVBwCBgEDAIGAQMAgYBg4BBwCCAQcAgYBAwCBgEDAIGAYOAQcAggEHAIGAQMAgYBAwCBgGDgEEAg4BBwCBgEDAIGAQMAgYBg8ClB7kBlUHAIGAQMAgYBAwCBgGDgEHAIIBBwCBgEDAIGAQMAgYBg4BBwCCAQcAgYBAwCBgEDAIGAYOAQQCDgEHAIGAQMAgYBAwCBgGDgEGAPMgKVAYBg4BBwCBgEDAIGAQMAgYBgwAGAYOAQcAgYBAwCBgEDAIGAYMABgGDgEHAIGAQMAgYBAwCBgEMAgYBg4BBwCBgEDAIGAQMAgYB8iAfoDIIGAQMAgYBg4BBwCBgEDAIGAQwCBgEDAIGAYOAQcAgYBAwCBgEMAgYBAwCBgGDgEHAIGAQMAhgEDAIGAQMAgYBg4BBwCBgEDAIEB2bKl3eq48A6QAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/game/Camera.ts":
/*!****************************!*\
  !*** ./src/game/Camera.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Game/utils */ "./src/game/utils.ts");

var CameraManager = /** @class */ (function () {
    function CameraManager(camera) {
        this.camera = camera;
        this.initialPosition = 0;
    }
    CameraManager.prototype.follow = function (target, y) {
        if (y === void 0) { y = this.initialPosition; }
        this.camera.startFollow(target, false, 1, 0.1, 0, y);
        this.initialPosition = y;
    };
    CameraManager.prototype.zoomIn = function (amount) {
        var zoom = Math.min(1 + amount * 0.01, 1.25);
        this.camera.zoomTo(zoom, 500, 'Quad.easeOut');
        this.camera.setFollowOffset(0, this.camera.followOffset.y / zoom);
    };
    CameraManager.prototype.zoomOut = function (duration) {
        duration = Object(_Game_utils__WEBPACK_IMPORTED_MODULE_0__["clamp"])(duration, 500, 3500);
        this.camera.stopFollow();
        this.camera.zoomTo(1, duration);
        this.camera.pan(this.camera.centerX, this.camera.centerY, duration, 'Quad.easeOut');
    };
    return CameraManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (CameraManager);


/***/ }),

/***/ "./src/game/Player.ts":
/*!****************************!*\
  !*** ./src/game/Player.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Game_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Game/config.json */ "./src/game/config.json");
var _Game_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @Game/config.json */ "./src/game/config.json", 1);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);



var Player = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Player, _super);
    function Player(scene, x, y, texture) {
        var _this = _super.call(this, scene, x, y, texture) || this;
        _this.isJumping = false;
        _this.isAlive = true;
        scene.add.existing(_this);
        scene.physics.add.existing(_this);
        _this.initialPosition = { x: x, y: y };
        scene.anims.create({
            frames: scene.anims.generateFrameNumbers('mario', {
                start: 0, end: _Game_config_json__WEBPACK_IMPORTED_MODULE_1__["player"].frames
            }),
            frameRate: 15,
            key: 'jump'
        });
        return _this;
    }
    Player.prototype.jump = function () {
        if (this.isAlive && this.body.touching.down) {
            this.setVelocityY(-500.0);
            this.anims.play('jump');
            this.isJumping = true;
        }
    };
    Player.prototype.die = function (fromLeft) {
        var _this = this;
        var direction = fromLeft ? 1 : -1;
        this.offsetTimeout = setTimeout(function () {
            return _this.setOffset(0, _Game_config_json__WEBPACK_IMPORTED_MODULE_1__["player"].height / -3.6);
        }, 250);
        this.setVelocityX(250 * direction);
        this.setCollideWorldBounds(true);
        this.flipX = fromLeft;
        this.isAlive = false;
        return {
            props: { angle: 90 * direction },
            ease: 'Quad.easeInOut',
            duration: 500,
            targets: this
        };
    };
    Player.prototype.reset = function () {
        var _a = this.initialPosition, x = _a.x, y = _a.y;
        this.setCollideWorldBounds(false);
        clearTimeout(this.offsetTimeout);
        this.isJumping = false;
        this.isAlive = true;
        this.setPosition(x, y);
        this.setOffset(0, 0);
        this.setVelocity(0);
        this.setAngle(0);
    };
    Object.defineProperty(Player.prototype, "jumping", {
        get: function () {
            return this.isJumping;
        },
        set: function (isJumping) {
            this.isJumping = isJumping;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}(phaser__WEBPACK_IMPORTED_MODULE_2__["Physics"].Arcade.Sprite));
/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./src/game/Scene.ts":
/*!***************************!*\
  !*** ./src/game/Scene.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Game_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Game/utils */ "./src/game/utils.ts");
/* harmony import */ var _Game_Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Game/Camera */ "./src/game/Camera.ts");
/* harmony import */ var _Game_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Game/config.json */ "./src/game/config.json");
var _Game_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @Game/config.json */ "./src/game/config.json", 1);
/* harmony import */ var _Game_Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Game/Player */ "./src/game/Player.ts");
/* harmony import */ var _Game_UI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Game/UI */ "./src/game/UI.ts");
/* harmony import */ var _assets_button_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/button.jpg */ "./src/assets/button.jpg");
/* harmony import */ var _assets_brick_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/brick.png */ "./src/assets/brick.png");
/* harmony import */ var _assets_mario_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @assets/mario.png */ "./src/assets/mario.png");
/* harmony import */ var _assets_sky_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @assets/sky.png */ "./src/assets/sky.png");











var TOTAL_ASSETS = 5;
var default_1 = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(default_1, _super);
    function default_1() {
        var _this = _super.call(this, { key: 'Scene' }) || this;
        _this.platformTargetPosition = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.width / 2;
        _this.leftPlatform = Math.random() < 0.5;
        _this.autoplaying = false;
        _this.gamePaused = true;
        _this.gameOver = false;
        _this.loadedAssets = 0;
        _this.halfHeight = 0;
        _this.halfWidth = 0;
        _this.score = 0;
        document.addEventListener('game:restart', _this.restart.bind(_this), false);
        return _this;
    }
    default_1.prototype.create = function () {
        var _this = this;
        this.halfWidth = this.scale.width / 2;
        this.halfHeight = this.scale.height / 2;
        this.textures.on('addtexture', this.init, this);
        this.textures.addBase64('button', _assets_button_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]);
        this.textures.addBase64('brick', _assets_brick_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
        this.textures.addBase64('sky', _assets_sky_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
        var mario = new Image();
        mario.onload = function () {
            _this.textures.addSpriteSheet('mario', mario, {
                frameHeight: _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.height,
                frameWidth: _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.width
            });
            _this.init();
        };
        mario.src = _assets_mario_png__WEBPACK_IMPORTED_MODULE_9__["default"];
    };
    default_1.prototype.init = function () {
        if (++this.loadedAssets > TOTAL_ASSETS) {
            this.createUI();
            this.createSky();
            this.createPlayer();
            this.createCamera();
            this.createInputEvents();
            this.player.flipX = this.leftPlatform;
            this.scale.on('resize', this.resize, this);
            this.platforms = this.physics.add.staticGroup();
            this.physics.add.collider(this.player, this.createGround());
            this.physics.add.collider(this.player, this.platforms, this.onPlatformCollision, undefined, this);
        }
    };
    default_1.prototype.createUI = function () {
        this.ui = new _Game_UI__WEBPACK_IMPORTED_MODULE_6__["default"](this);
    };
    default_1.prototype.createSky = function () {
        var sky = this.add.image(this.halfWidth, this.halfHeight, 'sky');
        var _a = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.background, width = _a.width, height = _a.height;
        var skyRatio = width / height;
        var skyHeight = this.scale.height / sky.height;
        var skyWidth = skyHeight * skyRatio;
        sky.setScale(skyWidth, skyHeight);
    };
    default_1.prototype.createPlayer = function () {
        var offsetBottom = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.width + _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.height / 2;
        this.player = new _Game_Player__WEBPACK_IMPORTED_MODULE_5__["default"](this, this.halfWidth, this.scale.height - offsetBottom, 'mario');
    };
    default_1.prototype.createCamera = function () {
        var playerHalf = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.height / 2;
        var groundHeight = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.height * 2;
        this.camera = new _Game_Camera__WEBPACK_IMPORTED_MODULE_3__["default"](this.cameras.main);
        this.camera.follow(this.player, this.halfHeight - groundHeight - playerHalf);
    };
    default_1.prototype.createInputEvents = function () {
        var _this = this;
        this.input.on('pointerdown', function () {
            if (_this.gameOver)
                return;
            if (_this.gamePaused) {
                _this.gamePaused = false;
                _this.ui.hideStartText();
                _this.createPlatform();
            }
            else {
                _this.player.jump();
            }
        });
    };
    default_1.prototype.createGround = function () {
        var _a = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform, platformWidth = _a.width, platformHeight = _a.height;
        var _b = this.scale, sceneWidth = _b.width, sceneHeight = _b.height;
        var halfPlatformHeight = platformHeight / 2;
        var ground = this.physics.add.staticGroup();
        var HORIZONTAL_PLATFORMS = Math.ceil(sceneWidth / platformWidth);
        var VERTICAL_PLATFORMS = 2;
        for (var row = 0; row < VERTICAL_PLATFORMS; row++) {
            for (var col = 0; col < HORIZONTAL_PLATFORMS; col++) {
                var x = col * platformWidth + platformHeight;
                var y = sceneHeight - (row * platformHeight + halfPlatformHeight);
                ground.add(this.physics.add.staticImage(x, y, 'brick'), true);
            }
        }
        return ground;
    };
    default_1.prototype.createPlatform = function () {
        var _this = this;
        var _a = this.scale, width = _a.width, height = _a.height;
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_Game_utils__WEBPACK_IMPORTED_MODULE_2__["randomEasing"])(), 2), easing = _b[0], timing = _b[1];
        var x = this.leftPlatform ? 0 : width;
        var platformHeight = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.height;
        var halfPlatformWidth = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.width / 2;
        var y = height - platformHeight * 2.5 - this.score * platformHeight;
        var platformPosition = this.leftPlatform
            ? -this.platformTargetPosition : this.platformTargetPosition;
        var platform = this.physics.add.staticImage(x + platformPosition, y, 'brick');
        var destination = (this.leftPlatform ? '+' : '-') + "= " + (this.halfWidth + halfPlatformWidth);
        platform.setData('index', this.platforms.children.size);
        this.platforms.add(platform, true);
        this.platformAnimation = this.add.tween({
            onUpdate: function (tween, platform) {
                return _this.updatePlatformAnimation(tween, platform, timing);
            },
            delay: Object(_Game_utils__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(0, 1000),
            props: { x: destination },
            targets: platform,
            duration: 1500,
            ease: easing
        });
    };
    default_1.prototype.onPlatformCollision = function (player, platform) {
        if (this.gameOver)
            return;
        var lastPlatform = this.platforms.children.size - 1;
        this.gameOver = this.physics.world.overlap(this.player, this.platforms.children.entries[lastPlatform]);
        if (this.gameOver)
            this.onGameOver();
        else if (this.player.jumping) {
            this.player.jumping = false;
            if (platform.getData('index') === lastPlatform) {
                this.onPlatformLanding();
            }
        }
    };
    default_1.prototype.onGameOver = function () {
        this.camera.zoomOut(this.score * 140);
        this.playerRotation = this.add.tween(this.player.die(this.leftPlatform));
        this.ui.toggleGameOver(true);
        this.gamePaused = true;
    };
    default_1.prototype.onPlatformLanding = function () {
        var event = new CustomEvent('score:update', {
            detail: { score: ++this.score }
        });
        this.leftPlatform = Math.random() < 0.5;
        this.player.flipX = this.leftPlatform;
        this.camera.zoomIn(this.score);
        document.dispatchEvent(event);
        this.platformAnimation.stop();
        this.createPlatform();
    };
    default_1.prototype.updatePlatformAnimation = function (tween, platform, timing) {
        platform.refreshBody();
        if (!this.autoplaying)
            return;
        var progress = tween.data[0].progress || 0;
        progress >= timing && this.player.jump();
    };
    default_1.prototype.restart = function () {
        this.score = 0;
        this.player.reset();
        this.platforms.clear(true, true);
        this.camera.follow(this.player);
        this.platformAnimation.stop();
        this.playerRotation.stop();
        this.createPlatform();
        this.gamePaused = false;
        this.gameOver = false;
    };
    default_1.prototype.resize = function () {
        location.reload(); // For debug purposes
    };
    return default_1;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));
/* harmony default export */ __webpack_exports__["default"] = (default_1);
;


/***/ }),

/***/ "./src/game/UI.ts":
/*!************************!*\
  !*** ./src/game/UI.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Game_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Game/utils */ "./src/game/utils.ts");


var UI = /** @class */ (function () {
    function UI(scene) {
        var textStyle = this.getStyle(scene.scale.width * 1.01);
        var height = scene.scale.height / 3.2;
        this.gameOverText = scene.add.text(0, height, 'Game Over!', textStyle);
        this.startText = scene.add.text(0, height, 'Tap!', textStyle);
        this.resetScoreEvent = new CustomEvent('score:reset');
        this.showScoreEvent = new CustomEvent('score:show');
        this.restartEvent = new CustomEvent('game:restart');
        this.gameOverText.visible = false;
        this.createRestartButton(scene);
        this.gameOverText.depth = 1;
        this.startText.depth = 1;
    }
    UI.prototype.createRestartButton = function (scene) {
        var _this = this;
        var height = scene.scale.height / 2;
        var width = scene.scale.width / 2;
        this.restartButton = scene.add.sprite(width, height, 'button');
        this.restartButton.setInteractive();
        this.restartText = scene.add.text(0, 0, 'Restart', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.getCommonStyle()), { fixedHeight: height, fixedWidth: width, fontSize: '24px' }));
        this.restartText.setPosition(width / 2 + 1, height - 10);
        this.restartButton.setInteractive();
        this.restartButton.on('pointerdown', function () {
            _this.restartButton.setTint(0xf2c4b1);
        });
        this.restartButton.on('pointerup', function () {
            document.dispatchEvent(_this.resetScoreEvent);
            document.dispatchEvent(_this.restartEvent);
            _this.restartButton.clearTint();
            _this.toggleGameOver(false);
        });
        this.restartButton.visible = false;
        this.restartText.visible = false;
        this.restartButton.depth = 1;
        this.restartText.depth = 1;
    };
    UI.prototype.getStyle = function (width) {
        var size = this.getFontSize(width) * 2;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.getCommonStyle()), { fontSize: size + "px", fixedHeight: size, fixedWidth: width });
    };
    UI.prototype.getFontSize = function (width) {
        return Object(_Game_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(width / 30 * 2, 24, 64);
    };
    UI.prototype.getCommonStyle = function () {
        return {
            align: 'center',
            fill: '#ffffff',
            shadow: {
                color: '#000000',
                offsetX: 2.5,
                offsetY: 2.5,
                fill: true,
                blur: 5
            }
        };
    };
    UI.prototype.toggleGameOver = function (visible) {
        this.restartButton.visible = visible;
        this.gameOverText.visible = visible;
        this.restartText.visible = visible;
    };
    UI.prototype.hideStartText = function () {
        document.dispatchEvent(this.showScoreEvent);
        this.startText.visible = false;
    };
    return UI;
}());
/* harmony default export */ __webpack_exports__["default"] = (UI);


/***/ }),

/***/ "./src/game/config.json":
/*!******************************!*\
  !*** ./src/game/config.json ***!
  \******************************/
/*! exports provided: player, platform, background, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"player\":{\"width\":70,\"height\":108,\"frames\":7},\"platform\":{\"width\":128,\"height\":64},\"background\":{\"width\":800,\"height\":600}}");

/***/ }),

/***/ "./src/game/utils.ts":
/*!***************************!*\
  !*** ./src/game/utils.ts ***!
  \***************************/
/*! exports provided: clamp, randomInt, randomEasing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomEasing", function() { return randomEasing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var EASINGS = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(new Map([
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Linear, 0.5],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Quadratic.In, 0.5],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Quadratic.Out, 0.35],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Quadratic.InOut, 0.35],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Cubic.In, 0.5],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Cubic.Out, 0.25],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Cubic.InOut, 0.35],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Quartic.In, 0.5],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Quartic.Out, 0.2],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Quartic.InOut, 0.3],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Quintic.In, 0.5],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Quintic.Out, 0.01],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Quintic.InOut, 0.25],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Sine.In, 0.5],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Sine.Out, 0.35],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Sine.InOut, 0.4],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Expo.In, 0.75],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Expo.Out, 0.1],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Expo.InOut, 0.25],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Circular.In, 0.75],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Circular.Out, 0.25],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Circular.InOut, 0.35],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Back.In, 0.75],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Back.Out, 0.1],
    [phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Easing.Back.InOut, 0.4]
]));
var clamp = function (value, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.max(min, Math.min(value, max));
};
var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var randomEasing = function () {
    return EASINGS[randomInt(0, EASINGS.length - 1)];
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Game_Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Game/Scene */ "./src/game/Scene.ts");


document.addEventListener('DOMContentLoaded', function () {
    var score = document.getElementById('score');
    document.addEventListener('score:show', function () {
        score.classList.add('visible');
    }, false);
    document.addEventListener('score:update', function (event) {
        score.textContent = event.detail.score;
    }, false);
    document.addEventListener('score:reset', function () {
        score.textContent = '0';
    }, false);
});
var game = new phaser__WEBPACK_IMPORTED_MODULE_0__["Game"]({
    title: 'Innovecs | Test assignment',
    backgroundColor: '#169AC5',
    type: Phaser.AUTO,
    scene: _Game_Scene__WEBPACK_IMPORTED_MODULE_1__["default"],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 981 },
            debug: true
        }
    },
    scale: {
        mode: phaser__WEBPACK_IMPORTED_MODULE_0__["Scale"].RESIZE,
        parent: 'game',
        height: '100%',
        width: '100%'
    }
});


/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/index.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\3800x\Documents\Projects\innovecs\node_modules\webpack-dev-server\client\index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9icmljay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9idXR0b24uanBnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbWFyaW8ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2t5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1VJLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7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QyxLQUFLLENBQUMsR0FBRyxFQUFRLElBQUksQ0FBQztJQUN4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQU0sSUFBSSxDQUFDO0lBRXhDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBTyxHQUFHLENBQUM7SUFDdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFNLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUksR0FBRyxDQUFDO0lBRXZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBTyxHQUFHLENBQUM7SUFDdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFNLElBQUksQ0FBQztJQUN4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUksSUFBSSxDQUFDO0lBRXhDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBVSxHQUFHLENBQUM7SUFDdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFTLElBQUksQ0FBQztJQUN4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQU8sR0FBRyxDQUFDO0lBRXZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBVSxJQUFJLENBQUM7SUFDeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFTLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQU8sSUFBSSxDQUFDO0lBRXhDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBTSxJQUFJLENBQUM7SUFDeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFLLElBQUksQ0FBQztJQUN4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUcsSUFBSSxDQUFDO0lBRXhDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBVSxJQUFJLENBQUM7SUFDeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFTLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQU8sR0FBRyxDQUFDO0NBQ3hDLENBQWtDLENBQUMsQ0FBQztBQUU5QixJQUFNLEtBQUssR0FBRyxVQUFDLEtBQWEsRUFBRSxHQUFPLEVBQUUsR0FBTztJQUFoQiw2QkFBTztJQUFFLDZCQUFPO0lBQ25ELFdBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQW5DLENBQW1DLENBQUM7QUFFL0IsSUFBTSxTQUFTLEdBQUcsVUFBQyxHQUFXLEVBQUUsR0FBVztJQUNoRCxXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO0FBQWpELENBQWlELENBQUM7QUFFN0MsSUFBTSxZQUFZLEdBQUc7SUFDMUIsY0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUF6QyxDQUF5QyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0M1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ0w7QUFFaEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzVDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFvQixDQUFDO0lBRWxFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7UUFDdEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRVYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxlQUFLO1FBQzdDLEtBQUssQ0FBQyxXQUFXLEdBQUksS0FBcUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzFELENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVWLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7UUFDdkMsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUM7QUFFSSxJQUFNLElBQUksR0FBRyxJQUFJLDJDQUFJLENBQUM7SUFDM0IsS0FBSyxFQUFFLDRCQUE0QjtJQUNuQyxlQUFlLEVBQUUsU0FBUztJQUUxQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDakIsS0FBSyxFQUFFLG1EQUFLO0lBRVosT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFFakIsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNuQixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7SUFFRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsNENBQUssQ0FBQyxNQUFNO1FBQ2xCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsTUFBTTtLQUNkO0NBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnMuZ2FtZVwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFCQUNBTUFBQURsQ0k5TkFBQUE4RkJNVkVYL2xGVlFLUlpNSnhiZmRFQkxKeGJpZFVIaGRVQTFJQkwva2xUZWMwQWpHUThySUJNNUl4UmpPQjh5SHhJK0pSV2hiMGE1Z2xTZ2JVV0xYVHQrU2l0MlJpbXVlMDl1UVNaMFJTaDdTQ21UVENxU1N5b25IQktVVFNwdU9TQnhPaUJ5T3lCTktCWkpKeFpLSnhieGpWSEZiai9BYWp6RGJEMjVZRFczWHpTMlhqVHFpMUhBYVR5MFhUUHFpVS9HYnovVWJ6M1JiVHpxaWxEWGNEN0NiRDNOYXp2T2JEd3FIaE9HUnlqQ2F6MHVIeE5VTEJoYUx4cENJeFFqR1JESWdFOTVQeU9WVUMwOE1DRFJsV0RDZ2xQWGNUNUFJeFBYbDJMWmkxYllpRlRYaGxPL2QwalljVDZzWXpta1hqZWtYVGE3RFMvQUFBQUFHblJTVGxQOTlmbjErZlgxOFAzMTM5N3c3Zkh1N09ubTdPenI1L0h3N2FLV0lWd0FBQUlkU1VSQlZHamU3Wlo1YjlwQUVFYzNUUnUzUU1qUjJ6TW1JYVJKb1UxUFdseElJTFRwZlgzL2I5TmRjNHhDUFk0eXZ6OXl5QThrYkszZjZ0bVMwVGgrZE52ajh0bGd6ejJuczg3OEVQTmRMWDJleDE3R2FMMWFYVXYzZEg3ZVJYMjN0QjNuazhSSjh2UlZ2OWZjVG5RNnQxQS9CS2o0RFpodEFlSURBVWtNQklnUFBBRWtRSHc4SUFZRFlqZ2dnQVFFOEFEL05RV0lEd1ZNTjdFRmlBOEZ5STFZQXNRM0J3aTJBTUVjSU5nQ0JDUkFIcVlFQUw0cFFMQUZDSGpBQ3VxWEFTNGFOSFJTWWo0NmJPZ2NyNksrNDJoSHA5bG43bjNSMTFzMVJuM0hsU0ZmR0wzcVpRaDR2Q3Q4L2NqYy83dXI4aW1zLzFZV0xmNEd1N1gwdzR4dTk4ZUllVURkT2ZzTGZEOWhQaHp2NTJIelI1ditOYVI0VHZzWGMzT3I0TFY2bi9kYUFYNW5aUkpBc3cwKzJ3TEVOd1VFd0FDQ0F5aTdpL1piVzRENDlvQUFFaENBQXdnTW9Pc1NRUG9HNzVRQWs2OEhFQmtDVFA3QnNoSVFpTWtXSUQ0V0VFQUNBcmFBQnAzaUhBR0tqd1lRR0VEbkNPaklCZ3NVQjloOFBVREJGaURnQVFRR1VFN0E2YWs0SGF0VHJEN2wybnlaaXVzN3JUbVRLYmFsMHV6NTlTTmwwZUNYVTNFV2NQL0ZmN3laa1UyeGZ5Ykh6L0o0d0tBZnB1SW5PdDlPbUFmajZjbEwvMTFrdEluNjRUWFVhYitXLy9aY0RwWlJ2d3dvQThxQU1xQU11UElCZDFEZkxSV3RkODdlb05pL0JnSEQ0VmtCb08vcWd5MmQ0OVZLSlNxK0FQVWQxMi9jekQ2ZThDUEhuaHA3b3VtWnJNa2xFYVArUDZYTmpldFhuNVY0QUFBQUFFbEZUa1N1UW1DQ1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFVRUJBUUVBd1VFQkFRR0JRVUdDQTBJQ0FjSENCQUxEQWtORXhBVUV4SVFFaElVRngwWkZCWWNGaElTR2lNYUhCNGZJU0VoRkJra0p5UWdKaDBnSVNELzJ3QkRBUVVHQmdnSENBOElDQThnRlJJVklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0Qvd2dBUkNBQXlBSllEQVJFQUFoRUJBeEVCLzhRQUdnQUJBUUVCQUFNQUFBQUFBQUFBQUFBQUFBRUdCUUlFQi8vRUFCc0JBUUFEQVFFQkFRQUFBQUFBQUFBQUFBQUJCQVVDQndNRy85b0FEQU1CQUFJUUF4QUFBQURxZWUrcjgvUDAwaFNCQVFDWkJBQUF5bTNoNnpHMnVmV3RFZ0FBQUFBQURJYTJUdjZWcm4xclpJQUFBQUFBQXlPdGs3NmxiNTlhMFNBQUFBQUFBTWpyWk8rcFd1Zld0a2dBQUFBQUFESWErVDlEcmZUbVVkSVFvSUFBQUNrS0RLYmVId2Q3ODF5cWRoMTBKSkNuaW1vU2tkVVRBbk1DeWg3dC9PLy94QUF5RUFBQUJBVURBUWNEQXdVQUFBQUFBQUFBQVFJRUF3VVZWZEVSazVRMkJnY1NNVUIwc2hNVUlSQWdJa0ZDUTFGUy85b0FDQUVCQUFFL0FKN1BKckNucmhvMGN1WVNJYmlQOVNMOTVFLzcwUWhLUElpSXRSVzV6ZUgzSVhrVnVkWGg5eUY1RmJuVjRmY2hlUlc1MWQzM0lYa1Z1ZFhoOXlGNUZibk40ZmNoZVJXNTFkMzNJWGtWdWRYaDl5RjVGYm5ONGZjaGVSVzV6ZUgzSVhrVnFkWGQ3eUY1RmJuVjRmY2hlUlc1emVIM0lYa1Z1ZFhkN3lGNUZiblY0ZmNoZVJXNTFlSDNJWGtWdWMzaDl5RjVIZUgya25xWkV5SnEvZXQwSWlwS0pHSjlFTmNWWmt2KzN5U1JFSjUxSE0vZFJmbWZvdThIcHVCN3BQd1dKNTFKTlBkUmZtZm91OEhweUI3cFB3V0o1MUhNL2RSZm1mb3U4SHB5QjdwUHdXSjUxSk5QZFJmbWZvdThIcHVCN3BQd1dPME1GVUdlUEkwUlNDSnc3amxEVDR5OFN2Q3YrUjZhNjZGcVEwTWFHTkRHaGpReG9ZME1hSCt6UXhvWTBQOEFUUXdSRHZJZ25CN09NZnFxaDZ1STVSVUpKWkdvMGtTMDZtWDlQeU8xRXltSmR0NTNFSis1SmFIMGRDVkZGVnFTZnFuK0JXWnZkWG0rcklyTTR1cnpmVmtWbWIzVjV2cXlDbk00dXJ6ZlZrVm1jWFY1dnF5S3pON3E4MzFaRlpuRjFlYjZzaXN6aTZ2TjlXUldaeGRYbStySXJNNHVyemZWa1ZtY1hWNXZxeUt6T0xxODMxWkZabkYxZWI2c2lzemk2dk45V1JXWnhkWG0rcklyTTR1cnpmVmtWbWNYVjV2cXlKYkVYTUhVVDc5YW5mOEFIL09majhqL0FCNS82MU1mLzhRQUp4RUFBUVFCQXdJSEFRRUFBQUFBQUFBQUFRQURVcEVUQWdRVUJSRVNJU0l4TWpOQVFYSC8yZ0FJQVFJQkFUOEEzTzQ4ejZ0WGkvMVozcG0xbmRrYldkMlJ0WjNaRzFuZGtiV2QyUnRaM1pHMW5ka2JXZDJSdFozWkcxbmRrYldkMlJ0WjNaRzFuZGtiV2QyUnRaM1pHMW5ka2JXd2U4UStSNy8zdVZ1ZnRQNHVtKytwYm43VCtMcHZ2cVc1KzAvaTZiNzZsdWZ0UDR1bSsrcGJsclg0aTUyOHZ4ZFBiMTZRZFpIa1U4eTMzUHBGSU1OZC9nS0M0N01CUVhIWmdLQzQ3TUJRWEhaZ0tDNDdNQlFYSFpnS0M0N01CUVIyN01CUVhIWmdLQzQ3TUJRWEhaZ0tDNDdNQlFYSFpnS0M0N01CUVhIWmdLQzQ3TUJRVzBhMGRqNlF2Ly9FQUNjUkFBRUVBZ0VEQkFJREFBQUFBQUFBQUFFQUExS1JBaFFFRWpOQUJSRWlNU0ZCTWtKaC85b0FDQUVEQVFFL0FPSHh2aUQwNG5FLzRQZGF6RUJRV3F4QVVGcXNRRkJhckVCUVdxeEFVRnFzUUZCYXJFQlFXcXhBVUZxc1FGQmFyRUJRV3F4QVVGcXNRRkJhckVCUVdxeEFVRnFzUUZCYXpFQlFXc3hBVUZ6T04wNS94eDZmMStGd3V6ajRYcUg2WEM3T1BoZW9mV0s0WFp4OEwxRDZ4WEM3T1BoYy93RHF1RyszMEJ2MytYaGM3a041WmRBUDVIMm1YM1JpUGJJMmp5bjVteXRsK1pzclpmbWJLMlg1bXl0bCtac3JaZm1iSzJYcG15dGwrWnNyWmZtYksyWHBteXRsNlpzclplbWJLMlhwbXl0bCtac3JaZm1iSzJYNW15dGw2WnNybVBPRWo1RzEvOWs9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZW9BQUFCc0NBTUFBQUNTTFFGNUFBQUMvVkJNVkVVQUFBQmlBZ0pLSmg5aEFBQURDVnR6U3lveElSSmlBQUJpQVFGaEFBQTNIUkUxSXhNOUdTbHpTeW8rR2c0MkpCVTFJeE0ySXhOaEFBQmhBQUJnQUFCR0VRcHlTaW9BQUZnMUloWnlTaWtCQUZjMUl4TVRFeEpoQUFBc0hoVEJoVlVURGp4elN5b0FBRmdBQUZncUJUQUJBbGRuQXdSelN5cUxhRTAySVJSaEFBQ0VHaHNURXhKeFJ5Z0JCRm14ZFZFQUFGZ3VIeElBQUZoelN5cHpTeW9DQmxselN5b0tDMWsvS1J3YkhTRjBTeXBqQ2daNEd4c0FBRmhwRWdzVER5MmZZMEdRZDBvM0ZVVVRFeEpoQUFCelN5bzFJeE1BQUZqNDkvaWFIaWZ3ZDJjY1RXenduMjhURXhJb2NhTGVMeTNYejI2cGJ6L0pLQ2lBRUJTSkZSdldMU3hXT0IrU0dCOUlMeGwyQ2d3V1AyaHNSaWdJRlY3d21HNWZQU1RWYTF3K0tCYXlYRTFNTWh6d2ptdHpQaldSVDA4aVhvYkFKU1daTUNtMklTTHQ2c2tsWnBWVE9pNm1JQ1ZyQlFiMDh1NE1JV041VHkydm1sT2NaajNvbW11RlZ6RjlSQ2tmVjN0K1dEbVRIQ2J3aUd1UUp5UFdqbU9PYnp5UVhqVk1FZ29IQWxNUkMxSjFGek1jVUhGcElCVTdLa0Y1S0NnU01tVWxQVXVlYkRuWnpzY3BHa2p1NnVtVnQ4KzdZVTR2SnlEQXJsM0VnMXhtRmczd2YybnI0dDhRTFhValNXQkJURkdnaGttYUl5bm40ckF6VEZ1QVJUaDJVVGJ5c1luR1pWT0VZRG1sWEVOaVBEQkdBQm5Odm1aaUV6aGdNRjVaTXlZYk5FYmZsbTNvZEdTZ21tblBLeXVNUmlqeDd0aGNXMkd2SHlGTExCNHlkcDlDUUYwK0t5QS9mcUV1TkRXem5vM01pRi8yMWRCWmk1UDB3N1VTS0dCc0t4aUNnWUNtT1RMem00K2Fyb0NiVVVXUVIwRk1Eajl5UkNkVUFRck10cTNoMjU2b2ozMUpZR3gwY1dYVk1TMVBjVzdlY0Y5MW84TEFzS01URFQ1dk9TRGoxOVJuZ1c4MUNCdG1qWSthY0ZSUVRVYWJnRVZPTno5aFRqTHpyS1k4WjRIUndyYzRJbHpJTkMyMHZIaU9WVG16UURXRG9vZktsbnB1TVVXREdTNUlCZ2JQbnBlTWttcUVlRWsrRDBYQTBkMm5wNzlNZlppdmxvWVhBRU9wSXpmeXVad1hRWURaMG5hZmdHbHVaMDQ0V25OYWtyZU5vS3pmTnpYZ2dHUWRCRUd0bG9Cc3BkK0ZBQUFBUkhSU1RsTUF3UW1IL3I1U3J0ZWJIbzhUZFRPNDU4Tm02VmNwcG94M2xYbld1SGRsL2tYc28xVCt1WmRUL29WQS9JL2J4djRtbytBK0tOYk5zcC82aHZ6OTYralYyYy9nZkg3NzJaOEFBQlRVU1VSQlZIamE3WjE1WEJaRkdNY1RRUkplVVZFSUsxRTdOQ1FrTTh1ME85RWtzc0lERkNUQWdzZ0lDRkZDSTBUTHlqUTFFeFVOSlUxQlRUd3FLOHlTek5KU1M4M0tUaXZMYmkyNzY5TnZtQWRtOXQzamZYR2g2NTNmUHpzN08vUGxtZWMzZTdpNzczcUNoWUw2RzZyZENRMVFWMk5HeHhNYXB1NzlqUlhvUHFLOU1jSDNoQVlyMEpqVXNrbnpZdDhqWmJXeVdsbXRyRlpXLzkrc2J0NjhlZGNoUXF2djQwSXhISnZjU25FQUdqYVRHSVJZaldJemJBcHlNeElIMnJhVU1JVVN4eGZiL0Z3ai9ORE1WNDhvUlBGRWJPcnVFbUJLeWpVajJjOUwwM3RFd3RTNGJaQlFwK3U0NWc4YUZJZE56ZHlkL1VNRVlqNGhPcUU4Qkp2YXU1dGR0QjBoaFRKVDRvekFOamZTRytDRVdNb0pTMUVjaWszTkczQjRNU2JOSkZMSHhzdUxmWStVMWNwcVpiVW5XdDNWMTlkMzZOQ2hjYkZDaDIvaGNoY1RCRVF6TUtvRTRrTkNIRzdJa0h4NUtJT2tVTDRuenFmdVdlMUZrY2lJWnpuaGZUTG94R0FoTDNPU2cwaVpFbW1CbHRTeDZmTmkzeU5aSjZJaC9tN210VUx2WHNVbE1PN04vblNCK0kwUTJ4b3lwSDU4NGxaSm9UeE5uTU51V2sxelAwT1AyRU1HVFlrU3NyTGFnRFJIUytyWUtIbXg2Wkd5V2xtdHJQWkVxenVleUJVZUZ4YzNiTml3VlptWm1YRWp1QzY2aCtzMkNKaCthR1U4ckdZY2NRa1FtY01naEZESElNUkZEQUcxUXpNLzAzOHlVaWpBRENKTWxRaEZ4M0VZSUZycUVaa0N3UW1FNk5ldjMzZDd1TTZQaVBDeElHVUtrblpNRU1YU3ZTbnpZdDhqeW05L3JqaE1GNFF5akthcWlib2FNdHBoaTlQc0gyTE9NTDFkMEpJYVNCTTNzNys1SEViSjFTUGl6QW1IYVpkWUZCVVZZWS9VdnZIeVl0OGpaYld5V2xudENWYjNsLzVkUDR5SEVpdmRMb2k5VnFOWXVvUUkxS1hrRG14eFNzbFFZc2dBcUFwVjdKeWlQeDNwKzJSSW9heHk0bVNpenZrT2YxYzlva283UUZucGRJRjNQM2Q3RHE3T2ZNU2NPeDVTVU9QbHhiNUh5bXBsdGJMYVU2ek9oQmdHRi9McDdOd1N4NVVScTFFR3FzeXRCaUxqV3M2SVkxaGl4R3FWaVNwenF5a1V3dFJhVFpoMEo4NGcxT21zMWlPcXpCRlZxTEswV3BDR3NjRHhqNWtoSmlRYVUxQlQ1TVcrUnpKR1RBMFVFWTZsVEszV1RIRnJXVmhOdXk5ZGVWakx6R3FhKzZ2Y1FWaGJUU1NXMmhHdXh4WFVPSG14NzVHeVdsbXRyUFlVcTBld0ozUVpYRU9oQ1JNbTNId1QxODBvMS9CaXplelpzeS94NWVxdUd4THJSNGhNWXRRUVl3SkV4WHZBYUVZTXZkVVVTaFhIVklsUUJFYlBhZWxzOVJBSllSN0pRaEEycmViYUE1L3hFSENCa2RWMUoyT0tyZC9uWE9FZ1ViR2RyNUJmVStURnZrZUUwV3RFZEhUMDgxZHh2WXZ5SElOSjd6UWtuVDVHUDNxNGtDWGhuZ0tqbStsdFhqMG1ISDNmcGI3UG81eEY1VmZBNmVYZVczb1QwTzFaNmpZS1pTcStEOEs4NjdnZXgvb3h2TEdndDVva2pnMzdydUc2SVRxNmtvbzlxVWNqNThXK1I4cHFaYlV4NW5sbDliL2VhbXVQaEpwRHphWk1tWElYYWZQbXpSOFQ1dXZwMDZjZkxpZ28rQVpMUzB3Z0dKc0VZd29ZWlRTazZSQVFGVmg4N1dwSTNZMURlWmRDK1JRY0xNQWhxMDBRSndyRWJDQm1NS3NKVVVFSUo2c1hRTGZQbXpldmI5KyszV1NyUnd5cDF3Z2ExMW5QY1ZXQ1NzWExXN1ZxMWFzcDgyTGZJNkcrYUJBL2dDc2FJc3owd1lNSHZ4SVRFL010bGxtdU1GMmlvaElJc1pBQmFFaFBEQjY4RG9oUGdkaGxPU1JTTUJva2M4eGF4aUNyZDZIL3ArQ3NJdzVaYlNnZmdWaE9pR2NsQkJaUHlGYVRjdWh4aDdCYW81ZjR1RURpS29pT2ZvaUsyMEJxMVNoNXNldVJzbHBacmF6Mk1LdURvY3ZLeXNxU0pNem8wYU8vQitiWEZTdFcvQWhNQ1phV21GWmdkT3JVS1ZJYVVnRVliRWlsSzFiY0M4UkdJTjUwTmFSdUxCUndoZ3VySHdLR1pmZE45SjhGenIzRUlhc05FWkZBeEpQVkVtSXZ1azRFQW90U3NucmNhcUZ1a0V3S2FOKytmY1NtVFp2cXpyTXBLU2xsWlBYMFhidDJWWUNLeFhSaGRaUGx4YjVIcENnb0JWMXZGSmlIMEpWaG5zUGw1WDZVTjJCcGpxSDlhR3hNVElVMHBOSG94NGIwSlBxaU9BdUxOYTZHMUFvYk82RnhrbVExVmxsMmQ2QS8yM1FobHM5WldOMEI5UnZSTGxWWVhVQ0lOZWpLTm1IeEpGbTlxYitRbC9YeElVazZQdnlDUGFnaUptWXNGcjlJVnR2UGkwMlBsTlhLYW1XMXAxdTlmUG55clRIUUk0ODhVakZyMXF3S0ZEZGkrUWcwY2VMRVR1ZWZmMzRyVjBPS0J5T1NJU0RXRjhXeFdFekU2bGd3TGdQalBFdXJSU2g1VWloaldXcWdDclpPSEllMTFjbEFIS1JJSmdyRVJxekdnSEQ5RzIrOEVVNVBpYjJjZ3dHOUU5cElWaGVNR2pXcWR0SmNlT0dGRXpFbUxFck1yYmFmRi9zZVdXT2c0VEdtMm9qV0hTeUhSTW8xWitTaXRVdXJTUWt4NWlwRWN5dXJTWXZNQ1pGb1BZSGUvZkF5SUxHcnVIaXlXam8rdklVOWlGbU54VHRHVnR2UGkzMlBsTlhLYW1XMUoxanRCZlhOeWNrcHE2eXNaQWthQzdFc1lCeDEvK1FmeFJHalVFeEI5ZG1HakM0NU9YbEF6QUFpbnlHZ1cvbGpBYWFIS0l3Q2xKZWpPc2dzbEdDRWNnTTRPRVdtVWlobm9mMFdDaVZHNHF4RnZjTUE0UVBFenNyS25Td2hoTWhIMHhRSlFhT3BRZlVVZDZ5R2twT1Q4NmtyUWVWbFpKY3VYYm8xUlY3c2U2Uy9FMU9HUmd6RHV6UWNnN3RDT1doUUJnU2xwT0ZEb3J0bHJBK3ptdnE0YjdYWWwzYml3UlBiRjFsYnNucUpGakVheFlWdVdrM0t0ejQrZEd2Q3ZPZzlVbFlycTgwOThvTTZKQ1FrTUV6NTJyVnIwWjVkK2VlaS9ZMDNjSTBleFlYaUZsVDNSQTl0WWh5bzZaS1FFTVdHQk1SQk1DckFTRVhqR1J5eGt4Qy9vOHlHMUJrOUpJREFCQ01VbG9iVXRXdVRLQlRtVXcyRk1rcmliRUI5QUhGa2hBOFF6R3BFa2tDSVJXeTJhQkVGS043SXJBNFBEemV5dW05RVJNU3Npb3FLNWNDdzQzZHFhbW9oaldzc0lXSklLRjZQdjBsVzI4NUwwM2dFRFNCSnA3S04xMmhWeHJmY0lGV0ZhaGh0T1NLZUVBVmdMTklpTnRDbWhWS2Ria1FoRkVvWnpYaWF1TEoyRW9lWlJMcFFSdmdUWXFkQTdIZENFR0dKVlBXU3hTMFVQSmplV1hkOG9IR2xHQjhmV3NoZDdlZkZ2a2ZLYW1XMXN2ci9iblZyNkJSZ2FtYk1tRkdKeGpqZVQ3eVY2MEhxVTVOU3F5MHNyNmR5YVlmbER3WVF5VUNVc1FTRGtVc01RanlZd2xXTzhxWEUwSTJvQlRCdHdOa0NUalFQWlpaVEtFdUlzOXlFRTBxSUpVQlFKSkZPQ0NMVUpuY2Ywelg3bWtIT1ZnZDE3dHc1SWlrcENUbXBMQzh2WitmWmlaR1JrV3hBQ3dsUmQ1NmxjVjJKSGw1TmtSZjdIZ21GMGF4eHVpeGNmSTFPaU1ORWJiU1BCVVlUZzBLUmhSRE0xWk5DcWRTR2N1QWF2VHFiSUZwelFySzBMekdWNndsMzBUdjRBUWFVUHZyalE2N3g4V0dMVkJYVWVIbXg3NUd5V2xtdHJQWUVxMXY0YzZYUVNYSTAxNHdiaFRaczJORG03TFBQRGpVUGhTT0NnV0RSRkJCam9VQ1VnOUVXakFCM1FwbEJKMXZDTEpGQ1dVNGNQeE5FcUVDVVNZZ3QydEdzeGN1MjRXWldVeURNcHBvdFc1WVFKWElSVi8zNWthdWNwZmRzTG9ldHZEU3hSN0lpY01VWmJTeDZ5ODZsZWdHeHhCaFJadkpZd093bVU1NUpLRFBjNDNpaDJVRmp3azVzV2syL2w1T3RkbjBGVFhlN2RMcXk4ZkppM3lObHRiSmFXZTFwVmdlMmJObnlFcHkvYnViYXZFU0lyVStiTnUwS2w4a0Z3aGVJaTlEKzBHTmNOd3ZkQTBhSTZ6QzRwa0NFT0NReDJQcjZrcElTbnc1Y1hzZUhBT0VRZnJ6S1B1ZlhOVEF3MEdGMmZneXRWUWh5VUh2aFVNQ1ZzcVZlTmJnMTNoWk5BbXpucGNrOUV2THRyOUhzS0tGK1dDOGFPUEJjVndpSDFQK01nVnd2aWFwSHNYcXlLMFpMNlMxN1Fwd2hZWXV3bm4zMTFWZS9SYUVaZnJmTUdvRlZieERXdS85bFQ0ZjU4ZUVHYkFwdXZMelk5MGhacmF4V1ZudWExWUc0Qi93Wis1QkRlcTB5OE03c1dmY0w1V1A5VWFoSGp4NG5tWWNCUmpyWHpXaGZmaXZYSDBlTy9ER1U2N1BpNHVJcndHanQ0K1BqWjRSb0Q4UWxGQWJUMGFOSEQ0MGNPYkw2eUpFank0aFJESDJWbUpnNHRiUzBkRGRDQXlyWWVTVGhlc1FrTFdJWkNOWHIxNjlmYTJGMXgyWkNzNkVQdUphRkM3RjF4RkhpSStSbk55OU42aEhVWFB1Smx3OHhTMzY4U3Vnc3JOTXVjcVlwb3gyK28zVXQxOGRSUXBNR0Rpd2FKUFFpR08vUTYzS1duNzBoYmNiK1Y0MCt5NXdZVTFIL05VTExqNHJxWXZiWkcxSU5tbVpyRVo5aE5SSFZkNVBWMW9jWDJ2VzQ5dW1QRHlWUlF1Zlp6NHQ5ajVUVnltcGx0YWRaWGNXK1FBK05HemR1OGRLbFMxK1dNQTlBT1Z1M2xwdGlmTnUxYXhmTCszK0kvcTg4SUpTUFY2S0djYVhUa0w1QjlWbDRtVmFENkE3RVJYZmNjVWM2R3E0ZUo0U3FkNWhYUlVWRlI0bVRnYnF2dkwyOVZ4NDdkbXpPQXcvc0FTcVlJZG9ERVk1dHNjYUlSQ0JBWjFxRnFtVWduR0ZpZFNCSW1ZeXl0VjZNY29nQ0tVYVpWQXhLTnFwL3BlSFN1T3pueGI1SDVwZ01tbnFZSFl2eHkzSVpRNS9MSm96Sk5hODAyMTZSK2kzR09wRmo2NFpFazFCN1NTWjloVzIxbVB6alVIV0lkc3VqMHBmZXZzTDZTb1NaaFVIVy9TSXRVRUtNMHlKcXJVYVhkUEh4dTJWWU5iTzZJMHVyZVNERktKT0s2Zmp3cTdSejJjMkxIWStVMWNwcS9jRkJZTElnSnd5T1hXYzZIQTR2UTZ0WG9mK3JyNzc2SVI3eS9TbWZRL0x6ODErRjVBTVZ5S1pXcDZQdHdmeDZMWncvZjM2OTFjTzRaS3NmeU1xYW83TmFqNml6T29NTzRHNVluV2tjU0RXTzJNdHc1SzQ3NnlNbnRWWmpUTUpxMjNteDc1SHJVejVodUJab01WdnA2dVFrUTZzeCtQbm9lNmQrdG1XeG5VSzYvUGdDVFJhYldjMTJ4ejJpNy90WWZVdTNNd21yb2FYQ2FvR1lJeERic0ZwQ1ZuOG1DSzZzM29SdTl3dksvUlJJR241VXpZS0pwWStZRW1rSEFybEZXRzAzTC9ZOVVsWXJxNVhWbm1aMTdLcFZxM0FobnpkejVzeWxMTFRIdWU2SDJBMDkzSGZiNTlKcTZwZWxIZExXWW9odWF1NVl1WEpsdnBIVkkvQUYzSU4zM25ubkhpbkQrL2Z2WDRPYmo5WG90NnhZYUJweFprSzRuOWloM21wQ3pIR0plQkdyWjJCRWh2L1l3bzNRY2FCSVZ1OEI1U2RRNnF6T1dGV3JkTW5xQlJnMldXMC9ML1k5c3NhUUp2RFF1R2lxRlEwa3ViWmF6RFl4cEhMcVcwMjdWN21SMVZOUWVUdDk4bFBTN3ZyZFVtZ3FyU2RJdDFBQ2FWK2N5YS9NWlQyRjZsSjA4UmFFUkxvNWM3clJENzNOQTluT3JOWWZIM1pJcWJLYkY5c2VLYXVWMWNwcVQ3STZERDlubVQxRUNCL2h5N2xkYU43YmI3LzlNTFJtelpyMWhwaU9lQkVtblBjYmgvWXMxeS9md3JWdDkrN2Q2UDdsdzF3Lzc5MjdseVc0RDE0VzBpQUNnSWlnREM5QVA2Y00vNFIrYTZDSFNkdUpFOXloUTk4NlJIZEN6TlFqbnRJakptTzExTkpxb3VpdGZqZzdPL3ZGWmZYNkNxdnJkK3pZc1JKREQ4YTQ3T2FsYVR3aW5ZU05qNW84OXFiY3JjT1hPYkZZYVlwcEovcTlmWjBRcmpOeXNQaG9NTmNuS0xOUXpqbkJOTU5jV1hLR1JmVTY0cnlBOGdmZzZMNkZRdUZDeHpSV1V6VkVoRGRSM0VGV3V4c0lXVDFlZjN6SUZvOHI3T2JGdmtmS2FtVzFzdHJUcko1MnQxWWwwUGJ0MjcvRWVXQ3BPNWd6SU9yMzB6eWgyeUYzaDlRTG44dS9ISDNZMzF2QTlmSjMzMzMzSE1KWWFXRDFPL2lMZmZ6OXcxd2d0Z21FczlWZmd0QWFQNDV4ZnMzblBJbnlzaFFJeHZZZXV1Nzk0b3N2ZGtBL2NQMk1WVGFtUHVqbHNKMlhKdlNJTUxpbTFTbU5jZ3E1eGx6TW45TkRtbWYxTElTR0RDbVlaaWhwSmxiWDhEQjBWaDhZVUtzMlJqK0FYeW9RdDlPKytJS0IxUU80QW95L1Zxb05oTzZXR1pQVzBQSEJmbDZPMXlObHRiSmFXZTJoVnArRFR6djB3RjNZa1FJeGZnd0V6TGZQY0tFNEJxL1RYb0NXeHVGZ3crbEFaS1B2WE53ci92azlydGRJTkNTMlBuZnExS2s5emp6VCtBbDZuL2o0K01WMzF1c25odEtFZ1RqR2p4OWZjdURBZ1R3U3ZoN2hMeU5hNnhGcFRnZ1FTa0ZZVkVlQXZKelAxNzE2OWJyY0tSQ1dFcE5KZzY4SW53S0tYMVBseGI1SFFoZGdMc2lZd1RxTmNmV0dnNE5manRKczQ1cXN4YVd4RmJxQU5mMHBmWUtZL0FjRUNoS01KOUdzOFBwYTNZZGlXNDNWV3NSYmVzUVlWTjNMV2wzUGxZcXk0V2R2akFQNXlQejRFTlE0ZWJIdmtiSzZVYXgrUVZtdHJQN1BXNTJOVThUa3laT3Z0c1NjMHFaTkd6NGs5TVVaQkJxUFRvbDRGNHZ4SnBPWVRROXk2UkNoUUNUaHBkbHBreVpObXN0VmgwcWo3cXc4RjMyamNuTno4M0pxRlNWYkhVYUlTWmFJTVNEY0NrSmhEbGU4aWRWdDhibmdPcEprMDdvbnVCZ0p3Rkw4OEpiRnc4U3lZRGN2dGp5eWF6VTJvV29rWWN3L2U4T0hSQ2tSZDVVSVNjSWV5V1g0aWJvay9qbzgraGpPZWxZdVJiTWM3SXQ1YUFvbHlGYjdteVBHQzBRYVdnMEhvVENLSzluTWF0UVgwUlcwR0pmUjhTSHFlaTQyYWV6bXhaWkh5bXBsdGFUVGNFUXh3U1FTQmkwdU1QMDBlUU9HbE16RmVta1lZVlkrNmEzT2thMG1oSUhWYWNkbnRSZmtwdFVZaTg1cXUzbXg3NUcxZWt0L24wSjdtQ2JTUUt2ZjdyS1VKUENrUHlnSEw0WWt6OXc4U2d1S3A0aHZVUXlBSkorY0xzT3lwZmw4THpOS01xbk82bEF0d3RzSmtTZ1FjOUVxbmdpcHZKUE82ajVFSXFzcHJVYVRKc2xwMGpSR1hteDVwS3hXVnYrZFZrOVdWaHZuNVIreGVxVFFEN2p2eG5JOEZlWGpzWm94ZXZmbzBac3QyVHIreWZJay9tR1NsOHVsc3pvWmtxMGV3NVdHN29rVWhxWFZXb1MzaEJndkkxeGI3UWdJQ09ncFdZMzdxR21NUnNUSkZBZ0RzMVlZU3g1YUprQ1MxZmJ6WXQ4aks0eUZHbTUxSXI5Lzc0V0Z0M1NsbWtkSmRyYWEvQk5XRTZaYWlzSGFhcW9YVm84aFJMYU1jRzExQ05XUjFTNk9ENmxFaXFkZWpaU1hobnVrckZaV0s2czkyZXBMWDMvOTlXbWt1eis0bTJrYVZXRnhxU3Vyby9CUi9GdnZGVHJ6dE5OT2MyQklXRnlBVlhZK2lpb3NMTXhoTGFHZVBYdUc2YXpPd1RORlpuVWF6dEZUdVhxZkpzVFdWN0NteEJnQWdSTWlXNTFIaURFQzBVT0xxQ2FyRTBCZ0JyVUd3dG5xWkVTYklGazlobXN5dW5zRFhvMmx1ZFgyODJMZkkydWR3dVlYVjkzbFlCSkZpMFViVjFibm9IM2hBS0hPb2tXQVNJbitTbFcydWhDTWFYUTd3T0QxOVl1eC9qbzFwZFJTV01McVhDQW1hUkVuU3dpc0ZwSFZ3MDFlVFFnaEVsT1IrZkhCeEdxN2ViSGxrYkphV2Eyc1ZsWkg1ZURra1V2WENzTkpZV0Zob1liOVFrTkNRbGdEOU1uRElva1lmZERCb1I5U0VwcjRvNGVsMWZoeFRQWEpYSjJsWnJVVjZOc1dqR1FYVmdQUjJ3UUJRaDhRNGwxWW5ZY0JNYXZUMHRMR1ozTmRjTElRaTVIR2xVVHgwTGpzNThXK1IrNWhTSVhTazN0NnJ0RGE2c2xXc3ROc1l6dU5uMzVJOGZRSTM5SnE2NnRKK3A4MXJLMkdlcGdDNlBhY3RkVkU4alkrUG5oaGRSS05hemlSZ3V6bnhiNUh5bXBsdGJMYVU2Mk9GeHBPU3FacVMweUxGaTFDcVYrcTZDY1BLWmsyaDZHcDdvR3NIeXI3ME44TU9iMVduUzBpRFdnaEpDTmFFeUxVQ2tHdGhSeldWZy9FeXp5OVQrZVMzN3BsNitqdGo3K1pyTFBhZmw3c2UyU05zWlkxeHFGdkw0WWtCRytNRlNKMnN1T1Z2L2l6TmhSeTNNZUhJSHQ1c2UrUnNscFpyYXoyQUt2L0FnUnNKeE15QzZrUUFBQUFBRWxGVGtTdVFtQ0NcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUF5QUFBQUpZQ0FNQUFBQ3RxSEpDQUFBQU0xQk1WRVVmbnNpSDArd1dtc1Vvbzh0T3R0aFl1OXhxeGVLYTNmTXlxTTQ3cmRKRnNkVmh3TjkweWVWOXp1bVEyTzlndjk5OHplbGdXT0h2QUFBRWlrbEVRVlI0MnUzVHR4SEVRQUREd0h0dlpQdXZWZzJRZ1dMdGxvQVpqRHRRRFFuQUlHQVFNQWdZQkF3Q0JnR0RnRUhBSUlCQndDQmdFREFJR0FRTUFnWUJnNEJCd0NDQVFjQWdZQkF3Q0JnRURBSUdBWU9BUVFDRGdFSEFJR0FRTUFnWUJBd0NCZ0dEZ0VHQU9BZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURBV1ErZ01nZ1lCQXdDQmdHRGdFSEFJR0FRTUFnWUJEQUlHQVFNQWdZQmc0QkJ3Q0JnRURBSUdBUXdDQmdFREFJR0FZT0FRY0FnWUJBd0NHQVFNQWdZQkF3Q0JnR0RnRUhBSUdBUU1BaVFCL2tDbFVIQUlHQVFNQWdZQkF3Q0JnR0RnRUhBSUlCQndDQmdFREFJR0FRTUFnWUJnNEJCd0NDQVFjQWdZQkF3Q0JnRURBSUdBWU9BUVFDRGdFSEFJR0FRTUFnWUJBd0NCZ0dEZ0VHQVBNZ1BxQXdDQmdHRGdFSEFJR0FRTUFnWUJBd0NCZ0VNQWdZQmc0QkJ3Q0JnRURBSUdBUU1BZ1lCREFJR0FZT0FRY0FnWUJBd0NCZ0VEQUlZQkF3Q0JnR0RnRUhBSUdBUU1BZ1lCQXdDNUVIK1FHVVFNQWdZQkF3Q0JnR0RnRUhBSUdBUU1BaGdFREFJR0FRTUFnWUJnNEJCd0NCZ0VEQUlZQkF3Q0JnRURBSUdBWU9BUWNBZ1lCREFJR0FRTUFnWUJBd0NCZ0dEZ0VIQUlHQVFJQS95QkNxRGdFSEFJR0FRTUFnWUJBd0NCZ0dEZ0VFQWc0QkJ3Q0JnRURBSUdBUU1BZ1lCZzRCQkFJT0FRY0FnWUJBd0NCZ0VEQUlHQVlNQUJnR0RnRUhBSUdBUU1BZ1lCQXdDQmdHREFIbVFGMUFaQkF3Q0JnR0RnRUhBSUdBUU1BZ1lCQXdDR0FRTUFnWUJnNEJCd0NCZ0VEQUlHQVFNQWhnRURBSUdBWU9BUWNBZ1lCQXdDQmdFTUFnWUJBd0NCZ0dEZ0VIQUlHQVFNQWdZQk1pRGJFQTFKcUF5Q0JnRURBSUdBWU9BUWNBZ1lCQXdDQmdFTUFnWUJBd0NCZ0dEZ0VIQUlHQVFNQWdZQkRBSUdBUU1BZ1lCZzRCQndDQmdFREFJWUJBd0NCZ0VEQUlHQVlPQVFjQWdZQkM0OUNCdm9ESUlHQVFNQWdZQmc0QkJ3Q0JnRURBSUdBUXdDQmdFREFJR0FZT0FRY0FnWUJBd0NCZ0VNQWdZQkF3Q0JnR0RnRUhBSUdBUU1BaGdFREFJR0FRTUFnWUJnNEJCd0NCZ0VEQUlrQWVaZ2NvZ1lCQXdDQmdFREFJR0FZT0FRY0FnWUJEQUlHQVFNQWdZQkF3Q0JnR0RnRUhBSUdBUXdDQmdFREFJR0FRTUFnWUJnNEJCd0NDQVFjQWdZQkF3Q0JnRURBSUdBWU9BUWNBZ1FCNWtCNnF4QUpWQndDQmdFREFJR0FRTUFnWUJnNEJCd0NDQVFjQWdZQkF3Q0JnRURBSUdBWU9BUWNBZ2dFSEFJR0FRTUFnWUJBd0NCZ0dEZ0VFQWc0QkJ3Q0JnRURBSUdBUU1BZ1lCZzhDbEI3a0JsVUhBSUdBUU1BZ1lCQXdDQmdHRGdFSEFJSUJCd0NCZ0VEQUlHQVFNQWdZQmc0QkJ3Q0NBUWNBZ1lCQXdDQmdFREFJR0FZT0FRUUNEZ0VIQUlHQVFNQWdZQkF3Q0JnR0RnRUdBUE1nS1ZBWUJnNEJCd0NCZ0VEQUlHQVFNQWdZQmd3QUdBWU9BUWNBZ1lCQXdDQmdFREFJR0FZTUFCZ0dEZ0VIQUlHQVFNQWdZQkF3Q0JnRU1BZ1lCZzRCQndDQmdFREFJR0FRTUFnWUI4aUFmb0RJSUdBUU1BZ1lCZzRCQndDQmdFREFJR0FRd0NCZ0VEQUlHQVlPQVFjQWdZQkF3Q0JnRU1BZ1lCQXdDQmdHRGdFSEFJR0FRTUFoZ0VEQUlHQVFNQWdZQmc0QkJ3Q0JnRURBSUVCMmJLbDNlcTQ4QTZRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgeyBjbGFtcCB9IGZyb20gJ0BHYW1lL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgQ2FtZXJhcyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgdHlwZSBQbGF5ZXIgZnJvbSAnQEdhbWUvUGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhTWFuYWdlciB7XG4gIHByaXZhdGUgaW5pdGlhbFBvc2l0aW9uID0gMDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByaXZhdGUgY2FtZXJhOiBDYW1lcmFzLlNjZW5lMkQuQ2FtZXJhKSB7fVxuXG4gIHB1YmxpYyBmb2xsb3cgKHRhcmdldDogUGxheWVyLCB5ID0gdGhpcy5pbml0aWFsUG9zaXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmNhbWVyYS5zdGFydEZvbGxvdyh0YXJnZXQsIGZhbHNlLCAxLCAwLjEsIDAsIHkpO1xuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0geTtcbiAgfVxuXG4gIHB1YmxpYyB6b29tSW4gKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgem9vbSA9IE1hdGgubWluKDEgKyBhbW91bnQgKiAwLjAxLCAxLjI1KTtcbiAgICB0aGlzLmNhbWVyYS56b29tVG8oem9vbSwgNTAwLCAnUXVhZC5lYXNlT3V0Jyk7XG4gICAgdGhpcy5jYW1lcmEuc2V0Rm9sbG93T2Zmc2V0KDAsIHRoaXMuY2FtZXJhLmZvbGxvd09mZnNldC55IC8gem9vbSk7XG4gIH1cblxuICBwdWJsaWMgem9vbU91dCAoZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuICAgIGR1cmF0aW9uID0gY2xhbXAoZHVyYXRpb24sIDUwMCwgMzUwMCk7XG5cbiAgICB0aGlzLmNhbWVyYS5zdG9wRm9sbG93KCk7XG4gICAgdGhpcy5jYW1lcmEuem9vbVRvKDEsIGR1cmF0aW9uKTtcblxuICAgIHRoaXMuY2FtZXJhLnBhbihcbiAgICAgIHRoaXMuY2FtZXJhLmNlbnRlclgsIHRoaXMuY2FtZXJhLmNlbnRlclksXG4gICAgICBkdXJhdGlvbiwgJ1F1YWQuZWFzZU91dCdcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwbGF5ZXIgYXMgUExBWUVSIH0gZnJvbSAnQEdhbWUvY29uZmlnLmpzb24nO1xudHlwZSBQb3NpdGlvbiA9IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcblxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSAncGhhc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgcHJpdmF0ZSBpbml0aWFsUG9zaXRpb246IFBvc2l0aW9uO1xuICBwcml2YXRlIG9mZnNldFRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBpc0p1bXBpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0FsaXZlID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IgKHNjZW5lOiBTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHR1cmU6IHN0cmluZykge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlKTtcblxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICBzY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHsgeCwgeSB9O1xuXG4gICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ21hcmlvJywge1xuICAgICAgICBzdGFydDogMCwgZW5kOiBQTEFZRVIuZnJhbWVzXG4gICAgICB9KSxcblxuICAgICAgZnJhbWVSYXRlOiAxNSxcbiAgICAgIGtleTogJ2p1bXAnXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMganVtcCAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNBbGl2ZSAmJiB0aGlzLmJvZHkudG91Y2hpbmcuZG93bikge1xuICAgICAgdGhpcy5zZXRWZWxvY2l0eVkoLTUwMC4wKTtcbiAgICAgIHRoaXMuYW5pbXMucGxheSgnanVtcCcpO1xuICAgICAgdGhpcy5pc0p1bXBpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaWUgKGZyb21MZWZ0OiBib29sZWFuKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZnJvbUxlZnQgPyAxIDogLTE7XG5cbiAgICB0aGlzLm9mZnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+XG4gICAgICB0aGlzLnNldE9mZnNldCgwLCBQTEFZRVIuaGVpZ2h0IC8gLTMuNilcbiAgICAsIDI1MCk7XG5cbiAgICB0aGlzLnNldFZlbG9jaXR5WCgyNTAgKiBkaXJlY3Rpb24pO1xuICAgIHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xuXG4gICAgdGhpcy5mbGlwWCA9IGZyb21MZWZ0O1xuICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IGFuZ2xlOiA5MCAqIGRpcmVjdGlvbiB9LFxuICAgICAgZWFzZTogJ1F1YWQuZWFzZUluT3V0JyxcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICB0YXJnZXRzOiB0aGlzXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCAoKTogdm9pZCB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmluaXRpYWxQb3NpdGlvbjtcbiAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyhmYWxzZSk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub2Zmc2V0VGltZW91dCk7XG5cbiAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNBbGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgIHRoaXMuc2V0T2Zmc2V0KDAsIDApO1xuXG4gICAgdGhpcy5zZXRWZWxvY2l0eSgwKTtcbiAgICB0aGlzLnNldEFuZ2xlKDApO1xuICB9XG5cbiAgcHVibGljIHNldCBqdW1waW5nIChpc0p1bXBpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzSnVtcGluZyA9IGlzSnVtcGluZztcbiAgfVxuXG4gIHB1YmxpYyBnZXQganVtcGluZyAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNKdW1waW5nO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTY2VuZSwgUGh5c2ljcywgR2FtZU9iamVjdHMsIFR3ZWVucyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyByYW5kb21JbnQsIHJhbmRvbUVhc2luZyB9IGZyb20gJ0BHYW1lL3V0aWxzJztcblxuaW1wb3J0IENhbWVyYU1hbmFnZXIgZnJvbSAnQEdhbWUvQ2FtZXJhJztcbmltcG9ydCBDT05GSUcgZnJvbSAnQEdhbWUvY29uZmlnLmpzb24nO1xuaW1wb3J0IFBsYXllciBmcm9tICdAR2FtZS9QbGF5ZXInO1xuaW1wb3J0IFVJIGZyb20gJ0BHYW1lL1VJJztcblxuaW1wb3J0IEJVVFRPTiBmcm9tICdAYXNzZXRzL2J1dHRvbi5qcGcnO1xuaW1wb3J0IEJSSUNLIGZyb20gJ0Bhc3NldHMvYnJpY2sucG5nJztcbmltcG9ydCBNQVJJTyBmcm9tICdAYXNzZXRzL21hcmlvLnBuZyc7XG5pbXBvcnQgU0tZIGZyb20gJ0Bhc3NldHMvc2t5LnBuZyc7XG5cbmNvbnN0IFRPVEFMX0FTU0VUUyA9IDU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2NlbmUge1xuICBwcml2YXRlIHBsYXRmb3JtVGFyZ2V0UG9zaXRpb24gPSBDT05GSUcucGxhdGZvcm0ud2lkdGggLyAyO1xuICBwcml2YXRlIHBsYXRmb3JtcyE6IFBoeXNpY3MuQXJjYWRlLlN0YXRpY0dyb3VwO1xuICBwcml2YXRlIGxlZnRQbGF0Zm9ybSA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gIHByaXZhdGUgcGxhdGZvcm1BbmltYXRpb24hOiBUd2VlbnMuVHdlZW47XG4gIHByaXZhdGUgcGxheWVyUm90YXRpb24hOiBUd2VlbnMuVHdlZW47XG5cbiAgcHJpdmF0ZSBjYW1lcmEhOiBDYW1lcmFNYW5hZ2VyO1xuICBwcml2YXRlIHBsYXllciE6IFBsYXllcjtcbiAgcHJpdmF0ZSB1aSE6IFVJO1xuXG4gIHByaXZhdGUgYXV0b3BsYXlpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBnYW1lUGF1c2VkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIHByaXZhdGUgbG9hZGVkQXNzZXRzID0gMDtcbiAgcHJpdmF0ZSBoYWxmSGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBoYWxmV2lkdGggPSAwO1xuICBwcml2YXRlIHNjb3JlID0gMDtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKHsga2V5OiAnU2NlbmUnIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZTpyZXN0YXJ0JyxcbiAgICAgIHRoaXMucmVzdGFydC5iaW5kKHRoaXMpLCBmYWxzZVxuICAgICk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZSAoKTogdm9pZCB7XG4gICAgdGhpcy5oYWxmV2lkdGggPSB0aGlzLnNjYWxlLndpZHRoIC8gMjtcbiAgICB0aGlzLmhhbGZIZWlnaHQgPSB0aGlzLnNjYWxlLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLnRleHR1cmVzLm9uKCdhZGR0ZXh0dXJlJywgdGhpcy5pbml0LCB0aGlzKTtcbiAgICB0aGlzLnRleHR1cmVzLmFkZEJhc2U2NCgnYnV0dG9uJywgQlVUVE9OKTtcbiAgICB0aGlzLnRleHR1cmVzLmFkZEJhc2U2NCgnYnJpY2snLCBCUklDSyk7XG4gICAgdGhpcy50ZXh0dXJlcy5hZGRCYXNlNjQoJ3NreScsIFNLWSk7XG5cbiAgICBjb25zdCBtYXJpbyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgbWFyaW8ub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy50ZXh0dXJlcy5hZGRTcHJpdGVTaGVldCgnbWFyaW8nLCBtYXJpbywge1xuICAgICAgICBmcmFtZUhlaWdodDogQ09ORklHLnBsYXllci5oZWlnaHQsXG4gICAgICAgIGZyYW1lV2lkdGg6IENPTkZJRy5wbGF5ZXIud2lkdGhcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9O1xuXG4gICAgbWFyaW8uc3JjID0gTUFSSU87XG4gIH1cblxuICBwcml2YXRlIGluaXQgKCk6IHZvaWQge1xuICAgIGlmICgrK3RoaXMubG9hZGVkQXNzZXRzID4gVE9UQUxfQVNTRVRTKSB7XG4gICAgICB0aGlzLmNyZWF0ZVVJKCk7XG4gICAgICB0aGlzLmNyZWF0ZVNreSgpO1xuICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIoKTtcblxuICAgICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcbiAgICAgIHRoaXMuY3JlYXRlSW5wdXRFdmVudHMoKTtcblxuICAgICAgdGhpcy5wbGF5ZXIuZmxpcFggPSB0aGlzLmxlZnRQbGF0Zm9ybTtcbiAgICAgIHRoaXMuc2NhbGUub24oJ3Jlc2l6ZScsIHRoaXMucmVzaXplLCB0aGlzKTtcbiAgICAgIHRoaXMucGxhdGZvcm1zID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCgpO1xuXG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyLCB0aGlzLmNyZWF0ZUdyb3VuZCgpKTtcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHRoaXMucGxhdGZvcm1zLCB0aGlzLm9uUGxhdGZvcm1Db2xsaXNpb24sIHVuZGVmaW5lZCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVVSSAoKTogdm9pZCB7XG4gICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2t5ICgpOiB2b2lkIHtcbiAgICBjb25zdCBza3kgPSB0aGlzLmFkZC5pbWFnZSh0aGlzLmhhbGZXaWR0aCwgdGhpcy5oYWxmSGVpZ2h0LCAnc2t5Jyk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBDT05GSUcuYmFja2dyb3VuZDtcbiAgICBjb25zdCBza3lSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuXG4gICAgY29uc3Qgc2t5SGVpZ2h0ID0gdGhpcy5zY2FsZS5oZWlnaHQgLyBza3kuaGVpZ2h0O1xuICAgIGNvbnN0IHNreVdpZHRoID0gc2t5SGVpZ2h0ICogc2t5UmF0aW87XG5cbiAgICBza3kuc2V0U2NhbGUoc2t5V2lkdGgsIHNreUhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBsYXllciAoKTogdm9pZCB7XG4gICAgY29uc3Qgb2Zmc2V0Qm90dG9tID0gQ09ORklHLnBsYXRmb3JtLndpZHRoICsgQ09ORklHLnBsYXllci5oZWlnaHQgLyAyO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLCB0aGlzLmhhbGZXaWR0aCwgdGhpcy5zY2FsZS5oZWlnaHQgLSBvZmZzZXRCb3R0b20sICdtYXJpbycpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDYW1lcmEgKCk6IHZvaWQge1xuICAgIGNvbnN0IHBsYXllckhhbGYgPSBDT05GSUcucGxheWVyLmhlaWdodCAvIDI7XG4gICAgY29uc3QgZ3JvdW5kSGVpZ2h0ID0gQ09ORklHLnBsYXRmb3JtLmhlaWdodCAqIDI7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmFNYW5hZ2VyKHRoaXMuY2FtZXJhcy5tYWluKTtcbiAgICB0aGlzLmNhbWVyYS5mb2xsb3codGhpcy5wbGF5ZXIsIHRoaXMuaGFsZkhlaWdodCAtIGdyb3VuZEhlaWdodCAtIHBsYXllckhhbGYpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVJbnB1dEV2ZW50cyAoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nYW1lT3ZlcikgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5nYW1lUGF1c2VkKSB7XG4gICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpLmhpZGVTdGFydFRleHQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQbGF0Zm9ybSgpO1xuICAgICAgfVxuXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuanVtcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVHcm91bmQgKCk6IFBoeXNpY3MuQXJjYWRlLlN0YXRpY0dyb3VwIHtcbiAgICBjb25zdCB7IHdpZHRoOiBwbGF0Zm9ybVdpZHRoLCBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0IH0gPSBDT05GSUcucGxhdGZvcm07XG4gICAgY29uc3QgeyB3aWR0aDogc2NlbmVXaWR0aCwgaGVpZ2h0OiBzY2VuZUhlaWdodCB9ID0gdGhpcy5zY2FsZTtcblxuICAgIGNvbnN0IGhhbGZQbGF0Zm9ybUhlaWdodCA9IHBsYXRmb3JtSGVpZ2h0IC8gMjtcbiAgICBjb25zdCBncm91bmQgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG5cbiAgICBjb25zdCBIT1JJWk9OVEFMX1BMQVRGT1JNUyA9IE1hdGguY2VpbChzY2VuZVdpZHRoIC8gcGxhdGZvcm1XaWR0aCk7XG4gICAgY29uc3QgVkVSVElDQUxfUExBVEZPUk1TID0gMjtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IFZFUlRJQ0FMX1BMQVRGT1JNUzsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEhPUklaT05UQUxfUExBVEZPUk1TOyBjb2wrKykge1xuICAgICAgICBjb25zdCB4ID0gY29sICogcGxhdGZvcm1XaWR0aCArIHBsYXRmb3JtSGVpZ2h0O1xuICAgICAgICBjb25zdCB5ID0gc2NlbmVIZWlnaHQgLSAocm93ICogcGxhdGZvcm1IZWlnaHQgKyBoYWxmUGxhdGZvcm1IZWlnaHQpO1xuXG4gICAgICAgIGdyb3VuZC5hZGQodGhpcy5waHlzaWNzLmFkZC5zdGF0aWNJbWFnZSh4LCB5LCAnYnJpY2snKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VuZDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUGxhdGZvcm0gKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zY2FsZTtcbiAgICBjb25zdCBbZWFzaW5nLCB0aW1pbmddID0gcmFuZG9tRWFzaW5nKCk7XG4gICAgY29uc3QgeCA9IHRoaXMubGVmdFBsYXRmb3JtID8gMCA6IHdpZHRoO1xuXG4gICAgY29uc3QgcGxhdGZvcm1IZWlnaHQgPSBDT05GSUcucGxhdGZvcm0uaGVpZ2h0O1xuICAgIGNvbnN0IGhhbGZQbGF0Zm9ybVdpZHRoID0gQ09ORklHLnBsYXRmb3JtLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gaGVpZ2h0IC0gcGxhdGZvcm1IZWlnaHQgKiAyLjUgLSB0aGlzLnNjb3JlICogcGxhdGZvcm1IZWlnaHQ7XG5cbiAgICBjb25zdCBwbGF0Zm9ybVBvc2l0aW9uID0gdGhpcy5sZWZ0UGxhdGZvcm1cbiAgICAgID8gLXRoaXMucGxhdGZvcm1UYXJnZXRQb3NpdGlvbiA6IHRoaXMucGxhdGZvcm1UYXJnZXRQb3NpdGlvbjtcblxuICAgIGNvbnN0IHBsYXRmb3JtID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNJbWFnZSh4ICsgcGxhdGZvcm1Qb3NpdGlvbiwgeSwgJ2JyaWNrJyk7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSBgJHt0aGlzLmxlZnRQbGF0Zm9ybSA/ICcrJyA6ICctJ309ICR7dGhpcy5oYWxmV2lkdGggKyBoYWxmUGxhdGZvcm1XaWR0aH1gO1xuXG4gICAgcGxhdGZvcm0uc2V0RGF0YSgnaW5kZXgnLCB0aGlzLnBsYXRmb3Jtcy5jaGlsZHJlbi5zaXplKTtcbiAgICB0aGlzLnBsYXRmb3Jtcy5hZGQocGxhdGZvcm0sIHRydWUpO1xuXG4gICAgdGhpcy5wbGF0Zm9ybUFuaW1hdGlvbiA9IHRoaXMuYWRkLnR3ZWVuKHtcbiAgICAgIG9uVXBkYXRlOiAodHdlZW46IFR3ZWVucy5Ud2VlbiwgcGxhdGZvcm06IFBoeXNpY3MuQXJjYWRlLkltYWdlKSA9PlxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXRmb3JtQW5pbWF0aW9uKHR3ZWVuLCBwbGF0Zm9ybSwgdGltaW5nKSxcblxuICAgICAgZGVsYXk6IHJhbmRvbUludCgwLCAxMDAwKSxcbiAgICAgIHByb3BzOiB7IHg6IGRlc3RpbmF0aW9uIH0sXG5cbiAgICAgIHRhcmdldHM6IHBsYXRmb3JtLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBlYXNlOiBlYXNpbmdcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25QbGF0Zm9ybUNvbGxpc2lvbiAocGxheWVyOiBHYW1lT2JqZWN0cy5HYW1lT2JqZWN0LCBwbGF0Zm9ybTogR2FtZU9iamVjdHMuR2FtZU9iamVjdCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICBjb25zdCBsYXN0UGxhdGZvcm0gPSB0aGlzLnBsYXRmb3Jtcy5jaGlsZHJlbi5zaXplIC0gMTtcblxuICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLnBoeXNpY3Mud29ybGQub3ZlcmxhcCh0aGlzLnBsYXllcixcbiAgICAgIHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLmVudHJpZXNbbGFzdFBsYXRmb3JtXVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5nYW1lT3ZlcikgdGhpcy5vbkdhbWVPdmVyKCk7XG5cbiAgICBlbHNlIGlmICh0aGlzLnBsYXllci5qdW1waW5nKSB7XG4gICAgICB0aGlzLnBsYXllci5qdW1waW5nID0gZmFsc2U7XG5cbiAgICAgIGlmIChwbGF0Zm9ybS5nZXREYXRhKCdpbmRleCcpID09PSBsYXN0UGxhdGZvcm0pIHtcbiAgICAgICAgdGhpcy5vblBsYXRmb3JtTGFuZGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25HYW1lT3ZlciAoKTogdm9pZCB7XG4gICAgdGhpcy5jYW1lcmEuem9vbU91dCh0aGlzLnNjb3JlICogMTQwKTtcblxuICAgIHRoaXMucGxheWVyUm90YXRpb24gPSB0aGlzLmFkZC50d2VlbihcbiAgICAgIHRoaXMucGxheWVyLmRpZSh0aGlzLmxlZnRQbGF0Zm9ybSlcbiAgICApO1xuXG4gICAgdGhpcy51aS50b2dnbGVHYW1lT3Zlcih0cnVlKTtcbiAgICB0aGlzLmdhbWVQYXVzZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBsYXRmb3JtTGFuZGluZyAoKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Njb3JlOnVwZGF0ZScsIHtcbiAgICAgIGRldGFpbDogeyBzY29yZTogKyt0aGlzLnNjb3JlIH1cbiAgICB9KTtcblxuICAgIHRoaXMubGVmdFBsYXRmb3JtID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgICB0aGlzLnBsYXllci5mbGlwWCA9IHRoaXMubGVmdFBsYXRmb3JtO1xuXG4gICAgdGhpcy5jYW1lcmEuem9vbUluKHRoaXMuc2NvcmUpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgdGhpcy5wbGF0Zm9ybUFuaW1hdGlvbi5zdG9wKCk7XG4gICAgdGhpcy5jcmVhdGVQbGF0Zm9ybSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQbGF0Zm9ybUFuaW1hdGlvbiAodHdlZW46IFR3ZWVucy5Ud2VlbiwgcGxhdGZvcm06IFBoeXNpY3MuQXJjYWRlLkltYWdlLCB0aW1pbmc6IG51bWJlcik6IHZvaWQge1xuICAgIHBsYXRmb3JtLnJlZnJlc2hCb2R5KCk7XG4gICAgaWYgKCF0aGlzLmF1dG9wbGF5aW5nKSByZXR1cm47XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IHR3ZWVuLmRhdGFbMF0ucHJvZ3Jlc3MgfHwgMDtcbiAgICBwcm9ncmVzcyA+PSB0aW1pbmcgJiYgdGhpcy5wbGF5ZXIuanVtcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0YXJ0ICgpOiB2b2lkIHtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnBsYXllci5yZXNldCgpO1xuXG4gICAgdGhpcy5wbGF0Zm9ybXMuY2xlYXIodHJ1ZSwgdHJ1ZSk7XG4gICAgdGhpcy5jYW1lcmEuZm9sbG93KHRoaXMucGxheWVyKTtcblxuICAgIHRoaXMucGxhdGZvcm1BbmltYXRpb24uc3RvcCgpO1xuICAgIHRoaXMucGxheWVyUm90YXRpb24uc3RvcCgpO1xuICAgIHRoaXMuY3JlYXRlUGxhdGZvcm0oKTtcblxuICAgIHRoaXMuZ2FtZVBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplICgpOiB2b2lkIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy8gRm9yIGRlYnVnIHB1cnBvc2VzXG4gIH1cbn07XG4iLCJpbXBvcnQgdHlwZSB7IFNjZW5lLCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJ0BHYW1lL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBwcml2YXRlIHJlc3RhcnRCdXR0b24hOiBHYW1lT2JqZWN0cy5TcHJpdGU7XG4gIHByaXZhdGUgZ2FtZU92ZXJUZXh0OiBHYW1lT2JqZWN0cy5UZXh0O1xuICBwcml2YXRlIHJlc3RhcnRUZXh0ITogR2FtZU9iamVjdHMuVGV4dDtcbiAgcHJpdmF0ZSBzdGFydFRleHQ6IEdhbWVPYmplY3RzLlRleHQ7XG5cbiAgcHJpdmF0ZSByZXNldFNjb3JlRXZlbnQ6IEN1c3RvbUV2ZW50O1xuICBwcml2YXRlIHNob3dTY29yZUV2ZW50OiBDdXN0b21FdmVudDtcbiAgcHJpdmF0ZSByZXN0YXJ0RXZlbnQ6IEN1c3RvbUV2ZW50O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoc2NlbmU6IFNjZW5lKSB7XG4gICAgY29uc3QgdGV4dFN0eWxlID0gdGhpcy5nZXRTdHlsZShzY2VuZS5zY2FsZS53aWR0aCAqIDEuMDEpO1xuICAgIGNvbnN0IGhlaWdodCA9IHNjZW5lLnNjYWxlLmhlaWdodCAvIDMuMjtcblxuICAgIHRoaXMuZ2FtZU92ZXJUZXh0ID0gc2NlbmUuYWRkLnRleHQoMCwgaGVpZ2h0LCAnR2FtZSBPdmVyIScsIHRleHRTdHlsZSk7XG4gICAgdGhpcy5zdGFydFRleHQgPSBzY2VuZS5hZGQudGV4dCgwLCBoZWlnaHQsICdUYXAhJywgdGV4dFN0eWxlKTtcblxuICAgIHRoaXMucmVzZXRTY29yZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzY29yZTpyZXNldCcpO1xuICAgIHRoaXMuc2hvd1Njb3JlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Njb3JlOnNob3cnKTtcbiAgICB0aGlzLnJlc3RhcnRFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnZ2FtZTpyZXN0YXJ0Jyk7XG5cbiAgICB0aGlzLmdhbWVPdmVyVGV4dC52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVSZXN0YXJ0QnV0dG9uKHNjZW5lKTtcblxuICAgIHRoaXMuZ2FtZU92ZXJUZXh0LmRlcHRoID0gMTtcbiAgICB0aGlzLnN0YXJ0VGV4dC5kZXB0aCA9IDE7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJlc3RhcnRCdXR0b24gKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xuICAgIGNvbnN0IGhlaWdodCA9IHNjZW5lLnNjYWxlLmhlaWdodCAvIDI7XG4gICAgY29uc3Qgd2lkdGggPSBzY2VuZS5zY2FsZS53aWR0aCAvIDI7XG5cbiAgICB0aGlzLnJlc3RhcnRCdXR0b24gPSBzY2VuZS5hZGQuc3ByaXRlKHdpZHRoLCBoZWlnaHQsICdidXR0b24nKTtcbiAgICB0aGlzLnJlc3RhcnRCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcblxuICAgIHRoaXMucmVzdGFydFRleHQgPSBzY2VuZS5hZGQudGV4dCgwLCAwLCAnUmVzdGFydCcsIHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29tbW9uU3R5bGUoKSxcbiAgICAgIGZpeGVkSGVpZ2h0OiBoZWlnaHQsXG4gICAgICBmaXhlZFdpZHRoOiB3aWR0aCxcbiAgICAgIGZvbnRTaXplOiAnMjRweCdcbiAgICB9KTtcblxuICAgIHRoaXMucmVzdGFydFRleHQuc2V0UG9zaXRpb24oXG4gICAgICB3aWR0aCAvIDIgKyAxLCBoZWlnaHQgLSAxMFxuICAgICk7XG5cbiAgICB0aGlzLnJlc3RhcnRCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcblxuICAgIHRoaXMucmVzdGFydEJ1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc3RhcnRCdXR0b24uc2V0VGludCgweGYyYzRiMSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc3RhcnRCdXR0b24ub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5yZXNldFNjb3JlRXZlbnQpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLnJlc3RhcnRFdmVudCk7XG5cbiAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5jbGVhclRpbnQoKTtcbiAgICAgIHRoaXMudG9nZ2xlR2FtZU92ZXIoZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnJlc3RhcnRUZXh0LnZpc2libGUgPSBmYWxzZTtcblxuICAgIHRoaXMucmVzdGFydEJ1dHRvbi5kZXB0aCA9IDE7XG4gICAgdGhpcy5yZXN0YXJ0VGV4dC5kZXB0aCA9IDE7XG4gIH1cblxuICBwcml2YXRlIGdldFN0eWxlICh3aWR0aDogbnVtYmVyKTogb2JqZWN0IHtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRGb250U2l6ZSh3aWR0aCkgKiAyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29tbW9uU3R5bGUoKSxcbiAgICAgIGZvbnRTaXplOiBgJHtzaXplfXB4YCxcbiAgICAgIGZpeGVkSGVpZ2h0OiBzaXplLFxuICAgICAgZml4ZWRXaWR0aDogd2lkdGhcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb250U2l6ZSAod2lkdGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGNsYW1wKHdpZHRoIC8gMzAgKiAyLCAyNCwgNjQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21tb25TdHlsZSAoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgZmlsbDogJyNmZmZmZmYnLFxuXG4gICAgICBzaGFkb3c6IHtcbiAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgb2Zmc2V0WDogMi41LFxuICAgICAgICBvZmZzZXRZOiAyLjUsXG4gICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgIGJsdXI6IDVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUdhbWVPdmVyICh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uLnZpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnZpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMucmVzdGFydFRleHQudmlzaWJsZSA9IHZpc2libGU7XG4gIH1cblxuICBwdWJsaWMgaGlkZVN0YXJ0VGV4dCAoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLnNob3dTY29yZUV2ZW50KTtcbiAgICB0aGlzLnN0YXJ0VGV4dC52aXNpYmxlID0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1hdGggYXMgTWF0aFV0aWxzIH0gZnJvbSAncGhhc2VyJztcblxudHlwZSBFYXNpbmcgPSAodjogbnVtYmVyLCBvdmVyc2hvb3Q/OiBudW1iZXIpID0+IG51bWJlcjtcblxuY29uc3QgRUFTSU5HUyA9IFsuLi5uZXcgTWFwKFtcbiAgW01hdGhVdGlscy5FYXNpbmcuTGluZWFyLCAgICAgICAgICAwLjVdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1YWRyYXRpYy5JbiwgICAgMC41XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhZHJhdGljLk91dCwgICAwLjM1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhZHJhdGljLkluT3V0LCAwLjM1XSxcblxuICBbTWF0aFV0aWxzLkVhc2luZy5DdWJpYy5JbiwgICAgICAgIDAuNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkN1YmljLk91dCwgICAgICAgMC4yNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkN1YmljLkluT3V0LCAgICAgMC4zNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhcnRpYy5JbiwgICAgICAwLjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWFydGljLk91dCwgICAgIDAuMl0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1YXJ0aWMuSW5PdXQsICAgMC4zXSxcblxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWludGljLkluLCAgICAgIDAuNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1aW50aWMuT3V0LCAgICAgMC4wMV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1aW50aWMuSW5PdXQsICAgMC4yNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuU2luZS5JbiwgICAgICAgICAwLjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5TaW5lLk91dCwgICAgICAgIDAuMzVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5TaW5lLkluT3V0LCAgICAgIDAuNF0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuRXhwby5JbiwgICAgICAgICAwLjc1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuRXhwby5PdXQsICAgICAgICAwLjFdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5FeHBvLkluT3V0LCAgICAgIDAuMjVdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLkluLCAgICAgMC43NV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLk91dCwgICAgMC4yNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLkluT3V0LCAgMC4zNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuQmFjay5JbiwgICAgICAgICAwLjc1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuQmFjay5PdXQsICAgICAgICAwLjFdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5CYWNrLkluT3V0LCAgICAgIDAuNF1cbl0pIGFzIHVua25vd24gYXMgW0Vhc2luZywgbnVtYmVyXVtdXTtcblxuZXhwb3J0IGNvbnN0IGNsYW1wID0gKHZhbHVlOiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEpOiBudW1iZXIgPT5cbiAgTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSk7XG5cbmV4cG9ydCBjb25zdCByYW5kb21JbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbmV4cG9ydCBjb25zdCByYW5kb21FYXNpbmcgPSAoKTogW0Vhc2luZywgbnVtYmVyXSA9PlxuICBFQVNJTkdTW3JhbmRvbUludCgwLCBFQVNJTkdTLmxlbmd0aCAtIDEpXTtcbiIsImltcG9ydCB7IEdhbWUsIFNjYWxlIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBTY2VuZSBmcm9tICdAR2FtZS9TY2VuZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njb3JlOnNob3cnLCAoKSA9PiB7XG4gICAgc2NvcmUuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB9LCBmYWxzZSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2NvcmU6dXBkYXRlJywgZXZlbnQgPT4ge1xuICAgIHNjb3JlLnRleHRDb250ZW50ID0gKGV2ZW50IGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwuc2NvcmU7XG4gIH0sIGZhbHNlKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY29yZTpyZXNldCcsICgpID0+IHtcbiAgICBzY29yZS50ZXh0Q29udGVudCA9ICcwJztcbiAgfSwgZmFsc2UpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IEdhbWUoe1xuICB0aXRsZTogJ0lubm92ZWNzIHwgVGVzdCBhc3NpZ25tZW50JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzE2OUFDNScsXG5cbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHNjZW5lOiBTY2VuZSxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG5cbiAgICBhcmNhZGU6IHtcbiAgICAgIGdyYXZpdHk6IHsgeTogOTgxIH0sXG4gICAgICBkZWJ1ZzogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBzY2FsZToge1xuICAgIG1vZGU6IFNjYWxlLlJFU0laRSxcbiAgICBwYXJlbnQ6ICdnYW1lJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==