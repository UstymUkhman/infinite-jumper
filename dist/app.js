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
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

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
    // Debug purposes only:
    default_1.prototype.resize = function () {
        location.reload();
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
/* harmony import */ var _Game_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Game/config.json */ "./src/game/config.json");
var _Game_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @Game/config.json */ "./src/game/config.json", 1);
/* harmony import */ var _Game_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Game/utils */ "./src/game/utils.ts");



var UI = /** @class */ (function () {
    function UI(scene) {
        var _a = scene.scale, width = _a.width, height = _a.height;
        var textStyle = this.getStyle(width);
        var buttonHeight = height / 2.0;
        var textHeight = height / 3.2;
        var buttonWidth = width / 2;
        this.startText = scene.add.text(0, textHeight, 'Tap!', textStyle);
        this.gameOverText = scene.add.text(0, textHeight, 'Game Over!', textStyle);
        this.storeURL = scene.sys.game.device.os.iOS ? _Game_config_json__WEBPACK_IMPORTED_MODULE_1__["stores"].AppStore : _Game_config_json__WEBPACK_IMPORTED_MODULE_1__["stores"].PlayStore;
        this.createDownloadButton(scene, buttonWidth, buttonHeight);
        this.createRestartButton(scene, buttonWidth, buttonHeight);
        this.resetScoreEvent = new CustomEvent('score:reset');
        this.showScoreEvent = new CustomEvent('score:show');
        this.restartEvent = new CustomEvent('game:restart');
        this.gameOverText.visible = false;
        this.gameOverText.depth = 1;
        this.startText.depth = 1;
    }
    UI.prototype.createDownloadButton = function (scene, width, height) {
        var _this = this;
        this.downloadText = this.createButtonText(scene, 'Download', width, height);
        this.downloadButton = this.createButton(scene, width * 1.5, height);
        this.downloadButton.on('pointerup', function () {
            _this.downloadButton.clearTint();
            window.open(_this.storeURL);
        });
    };
    UI.prototype.createRestartButton = function (scene, width, height) {
        var _this = this;
        this.restartText = this.createButtonText(scene, 'Restart', width / 100 - 1, height);
        this.restartButton = this.createButton(scene, width * 0.5, height);
        this.restartButton.on('pointerup', function () {
            document.dispatchEvent(_this.resetScoreEvent);
            document.dispatchEvent(_this.restartEvent);
            _this.restartButton.clearTint();
            _this.toggleGameOver(false);
        });
    };
    UI.prototype.createButton = function (scene, x, y) {
        var button = scene.add.sprite(x, y, 'button');
        button.on('pointerdown', function () {
            return button.setTint(0xf2c4b1);
        });
        button.setInteractive();
        button.visible = false;
        button.depth = 1;
        return button;
    };
    UI.prototype.createButtonText = function (scene, text, x, y) {
        var width = scene.scale.width / 2;
        var buttonText = scene.add.text(x, y - 10, text, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.getCommonStyle()), { fixedWidth: width, fontSize: '24px', fixedHeight: y }));
        buttonText.visible = false;
        buttonText.depth = 2;
        return buttonText;
    };
    UI.prototype.getStyle = function (width) {
        var size = this.getFontSize(width) * 2;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.getCommonStyle()), { fixedWidth: width * 1.02, fontSize: size + "px", fixedHeight: size });
    };
    UI.prototype.getFontSize = function (width) {
        return Object(_Game_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(width / 30 * 2, 24, 48);
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
        this.downloadButton.visible = visible;
        this.restartButton.visible = visible;
        this.gameOverText.visible = visible;
        this.downloadText.visible = visible;
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
/*! exports provided: stores, player, platform, background, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"stores\":{\"AppStore\":\"https://www.apple.com/app-store/\",\"PlayStore\":\"https://play.google.com/store\"},\"player\":{\"width\":70,\"height\":108,\"frames\":7},\"platform\":{\"width\":128,\"height\":64},\"background\":{\"width\":800,\"height\":600}}");

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
            debug: !false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9icmljay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9idXR0b24uanBnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbWFyaW8ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2t5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1VJLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7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LE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFTLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQVEsSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBTSxJQUFJLENBQUM7SUFFeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFPLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQU0sR0FBRyxDQUFDO0lBQ3ZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBSSxHQUFHLENBQUM7SUFFdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFPLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQU0sSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBSSxJQUFJLENBQUM7SUFFeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFVLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQVMsSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBTyxHQUFHLENBQUM7SUFFdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFVLElBQUksQ0FBQztJQUN4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQVMsR0FBRyxDQUFDO0lBQ3ZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBTyxJ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bCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9ycy5nYW1lXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdCBzeW5jIF5cXFxcLlxcXFwvbG9nJFwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUJBQ0FNQUFBRGxDSTlOQUFBQThGQk1WRVgvbEZWUUtSWk1KeGJmZEVCTEp4YmlkVUhoZFVBMUlCTC9rbFRlYzBBakdROHJJQk01SXhSak9COHlIeEkrSlJXaGIwYTVnbFNnYlVXTFhUdCtTaXQyUmltdWUwOXVRU1owUlNoN1NDbVRUQ3FTU3lvbkhCS1VUU3B1T1NCeE9pQnlPeUJOS0JaSkp4WktKeGJ4alZIRmJqL0FhanpEYkQyNVlEVzNYelMyWGpUcWkxSEFhVHkwWFRQcWlVL0diei9VYnozUmJUenFpbERYY0Q3Q2JEM05henZPYkR3cUhoT0dSeWpDYXowdUh4TlVMQmhhTHhwQ0l4UWpHUkRJZ0U5NVB5T1ZVQzA4TUNEUmxXRENnbFBYY1Q1QUl4UFhsMkxaaTFiWWlGVFhobE8vZDBqWWNUNnNZem1rWGpla1hUYTdEUy9BQUFBQUduUlNUbFA5OWZuMStmWDE4UDMxMzk3dzdmSHU3T25tN096cjUvSHc3YUtXSVZ3QUFBSWRTVVJCVkdqZTdaWjViOXBBRUVjM1RSdTNRTWpSMnpNbUlhUkpvVTFQV2x4SUlMVHBmWDMvYjlOZGM0eENQWTR5dno5eXlBOGtiSzNmNnRtUzBUaCtkTnZqOHRsZ3p6Mm5zODc4RVBOZExYMmV4MTdHYUwxYVhVdjNkSDdlUlgyM3RCM25rOFJKOHZSVnY5ZmNUblE2dDFBL0JLajREWmh0QWVJREFVa01CSWdQUEFFa1FIdzhJQVlEWWpnZ2dBUUU4QUQvTlFXSUR3Vk1ON0VGaUE4RnlJMVlBc1EzQndpMkFNRWNJTmdDQkNSQUhxWUVBTDRwUUxBRkNIakFDdXFYQVM0YU5IUlNZajQ2Yk9nY3I2Sys0MmhIcDlsbjduM1IxMXMxUm4zSGxTRmZHTDNxWlFoNHZDdDgvY2pjLzd1cjhpbXMvMVlXTGY0R3U3WDB3NHh1OThlSWVVRGRPZnNMZkQ5aFBoenY1Mkh6UjV2K05hUjRUdnNYYzNPcjRMVjZuL2RhQVg1blpSSkFzdzArMndMRU53VUV3QUNDQXlpN2kvWmJXNEQ0OW9BQUVoQ0FBd2dNb09zU1FQb0c3NVFBazY4SEVCa0NUUDdCc2hJUWlNa1dJRDRXRUVBQ0FyYUFCcDNpSEFHS2p3WVFHRURuQ09qSUJnc1VCOWg4UFVEQkZpRGdBUVFHVUU3QTZhazRIYXRUckQ3bDJueVppdXM3clRtVEtiYWwwdXo1OVNObDBlQ1hVM0VXY1AvRmY3eVprVTJ4ZnliSHovSjR3S0FmcHVJbk90OU9tQWZqNmNsTC8xMWt0SW42NFRYVWFiK1cvL1pjRHBaUnZ3d29BOHFBTXFBTXVQSUJkMURmTFJXdGQ4N2VvTmkvQmdIRDRWa0JvTy9xZ3kyZDQ5VktKU3ErQVBVZDEyL2N6RDZlOENQSG5ocDdvdW1ack1rbEVhUCtQNlhOamV0WG41VjRBQUFBQUVsRlRrU3VRbUNDXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3QkRBQVVFQkFRRUF3VUVCQVFHQlFVR0NBMElDQWNIQ0JBTERBa05FeEFVRXhJUUVoSVVGeDBaRkJZY0ZoSVNHaU1hSEI0ZklTRWhGQmtrSnlRZ0poMGdJU0QvMndCREFRVUdCZ2dIQ0E4SUNBOGdGUklWSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDRC93Z0FSQ0FBeUFKWURBUkVBQWhFQkF4RUIvOFFBR2dBQkFRRUJBQU1BQUFBQUFBQUFBQUFBQUFFR0JRSUVCLy9FQUJzQkFRQURBUUVCQVFBQUFBQUFBQUFBQUFBQkJBVUNCd01HLzlvQURBTUJBQUlRQXhBQUFBRHFlZStyOC9QMDBoU0JBUUNaQkFBQXltM2g2ekcydWZXdEVnQUFBQUFBRElhMlR2NlZybjFyWklBQUFBQUFBeU90azc2bGI1OWEwU0FBQUFBQUFNanJaTytwV3VmV3RrZ0FBQUFBQURJYStUOURyZlRtVWRJUW9JQUFBQ2tLREtiZUh3ZDc4MXlxZGgxMEpKQ25pbW9Ta2RVVEFuTUN5aDd0L08vL3hBQXlFQUFBQkFVREFRY0RBd1VBQUFBQUFBQUFBUUlFQXdVVlZkRVJrNVEyQmdjU01VQjBzaE1VSVJBZ0lrRkNRMUZTLzlvQUNBRUJBQUUvQUo3UEpyQ25yaG8wY3VZU0liaVA5U0w5NUUvNzBRaEtQSWlJdFJXNXplSDNJWGtWdWRYaDl5RjVGYm5WNGZjaGVSVzUxZDMzSVhrVnVkWGg5eUY1RmJuTjRmY2hlUlc1MWQzM0lYa1Z1ZFhoOXlGNUZibk40ZmNoZVJXNXplSDNJWGtWcWRYZDd5RjVGYm5WNGZjaGVSVzV6ZUgzSVhrVnVkWGQ3eUY1RmJuVjRmY2hlUlc1MWVIM0lYa1Z1YzNoOXlGNUhlSDJrbnFaRXlKcS9ldDBJaXBLSkdKOUVOY1Zaa3YrM3lTUkVKNTFITS9kUmZtZm91OEhwdUI3cFB3V0o1MUpOUGRSZm1mb3U4SHB5QjdwUHdXSjUxSE0vZFJmbWZvdThIcHlCN3BQd1dKNTFKTlBkUmZtZm91OEhwdUI3cFB3V08wTUZVR2VQSTBSU0NKdzdqbERUNHk4U3ZDditSNmE2NkZxUTBNYUdOREdoalF4b1kwTWFIK3pReG9ZMFA4QVRRd1JEdklnbkI3T01mcXFoNnVJNVJVSkpaR28wa1MwNm1YOVB5TzFFeW1KZHQ1M0VKKzVKYUgwZENWRkZWcVNmcW4rQldadmRYbStySXJNNHVyemZWa1ZtYjNWNXZxeUNuTTR1cnpmVmtWbWNYVjV2cXlLek43cTgzMVpGWm5GMWViNnNpc3ppNnZOOVdSV1p4ZFhtK3JJck00dXJ6ZlZrVm1jWFY1dnF5S3pPTHE4MzFaRlpuRjFlYjZzaXN6aTZ2TjlXUldaeGRYbStySXJNNHVyemZWa1ZtY1hWNXZxeUpiRVhNSFVUNzlhbmY4QUgvT2ZqOGovQUI1LzYxTWYvOFFBSnhFQUFRUUJBd0lIQVFFQUFBQUFBQUFBQVFBRFVwRVRBZ1FVQlJFU0lTSXhNak5BUVhILzJnQUlBUUlCQVQ4QTNPNDh6NnRYaS8xWjNwbTFuZGtiV2QyUnRaM1pHMW5ka2JXZDJSdFozWkcxbmRrYldkMlJ0WjNaRzFuZGtiV2QyUnRaM1pHMW5ka2JXZDJSdFozWkcxbmRrYld3ZThRK1I3LzN1VnVmdFA0dW0rK3BibjdUK0xwdnZxVzUrMC9pNmI3Nmx1ZnRQNHVtKytwYmxyWDRpNTI4dnhkUGIxNlFkWkhrVTh5MzNQcEZJTU5kL2dLQzQ3TUJRWEhaZ0tDNDdNQlFYSFpnS0M0N01CUVhIWmdLQzQ3TUJRUjI3TUJRWEhaZ0tDNDdNQlFYSFpnS0M0N01CUVhIWmdLQzQ3TUJRWEhaZ0tDNDdNQlFXMGEwZGo2UXYvL0VBQ2NSQUFFRUFnRURCQUlEQUFBQUFBQUFBQUVBQTFLUkFoUUVFak5BQlJFaU1TRkJNa0poLzlvQUNBRURBUUUvQU9IeHZpRDA0bkUvNFBkYXpFQlFXcXhBVUZxc1FGQmFyRUJRV3F4QVVGcXNRRkJhckVCUVdxeEFVRnFzUUZCYXJFQlFXcXhBVUZxc1FGQmFyRUJRV3F4QVVGcXNRRkJhekVCUVdzeEFVRnpPTjA1L3h4NmYxK0Z3dXpqNFhxSDZYQzdPUGhlb2ZXSzRYWng4TDFENnhYQzdPUGhjL3dEcXVHKzMwQnYzK1hoYzdrTjVaZEFQNUgybVgzUmlQYkkyanluNW15dGwrWnNyWmZtYksyWDVteXRsK1pzclpmbWJLMlhwbXl0bCtac3JaZm1iSzJYcG15dGw2WnNyWmVtYksyWHBteXRsK1pzclpmbWJLMlg1bXl0bDZac3JtUE9FajVHMS85az1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFlb0FBQUJzQ0FNQUFBQ1NMUUY1QUFBQy9WQk1WRVVBQUFCaUFnSktKaDloQUFBRENWdHpTeW94SVJKaUFBQmlBUUZoQUFBM0hSRTFJeE05R1NselN5bytHZzQySkJVMUl4TTJJeE5oQUFCaEFBQmdBQUJHRVFweVNpb0FBRmcxSWhaeVNpa0JBRmMxSXhNVEV4SmhBQUFzSGhUQmhWVVREanh6U3lvQUFGZ0FBRmdxQlRBQkFsZG5Bd1J6U3lxTGFFMDJJUlJoQUFDRUdoc1RFeEp4UnlnQkJGbXhkVkVBQUZndUh4SUFBRmh6U3lwelN5b0NCbGx6U3lvS0Mxay9LUndiSFNGMFN5cGpDZ1o0R3hzQUFGaHBFZ3NURHkyZlkwR1FkMG8zRlVVVEV4SmhBQUJ6U3lvMUl4TUFBRmo0OS9pYUhpZndkMmNjVFd6d24yOFRFeElvY2FMZUx5M1h6MjZwYnovSktDaUFFQlNKRlJ2V0xTeFdPQitTR0I5SUx4bDJDZ3dXUDJoc1JpZ0lGVjd3bUc1ZlBTVFZhMXcrS0JheVhFMU1NaHp3am10elBqV1JUMDhpWG9iQUpTV1pNQ20ySVNMdDZza2xacFZUT2k2bUlDVnJCUWIwOHU0TUlXTjVUeTJ2bWxPY1pqM29tbXVGVnpGOVJDa2ZWM3QrV0RtVEhDYndpR3VRSnlQV2ptT09ienlRWGpWTUVnb0hBbE1SQzFKMUZ6TWNVSEZwSUJVN0trRjVLQ2dTTW1VbFBVdWViRG5aenNjcEdranU2dW1WdDgrN1lVNHZKeURBcmwzRWcxeG1GZzN3ZjJucjR0OFFMWFVqU1dCQlRGR2doa21hSXlubjRyQXpURnVBUlRoMlVUYnlzWW5HWlZPRVlEbWxYRU5pUERCR0FCbk52bVppRXpoZ01GNVpNeVliTkViZmxtM29kR1NnbW1uUEt5dU1SaWp4N3RoY1cyR3ZIeUZMTEI0eWRwOUNRRjArS3lBL2ZxRXVORFd6bm8zTWlGLzIxZEJaaTVQMHc3VVNLR0JzS3hpQ2dZQ21PVEx6bTQrYXJvQ2JVVVdRUjBGTURqOXlSQ2RVQVFyTXRxM2gyNTZvajMxSllHeDBjV1hWTVMxUGNXN2VjRjkxbzhMQXNLTVREVDV2T1NEajE5Um5nVzgxQ0J0bWpZK2FjRlJRVFVhYmdFVk9OejloVGpMenJLWThaNEhSd3JjNElseklOQzIwdkhpT1ZUbXpRRFdEb29mS2xucHVNVVdER1M1SUJnYlBucGVNa21xRWVFaytEMFhBMGQybnA3OU1mWml2bG9ZWEFFT3BJemZ5dVp3WFFZRFowbmFmZ0dsdVowNDRXbk5ha3JlTm9LemZOelhnZ0dRZEJFR3Rsb0JzcGQrRkFBQUFSSFJTVGxNQXdRbUgvcjVTcnRlYkhvOFRkVE80NThObTZWY3Bwb3gzbFhuV3VIZGwva1hzbzFUK3VaZFQvb1ZBL0kvYnh2NG1vK0ErS05iTnNwLzZodno5NitqVjJjL2dmSDc3Mlo4QUFCVFVTVVJCVkhqYTdaMTVYQlpGR01jVFFSSmVVVkVJSzFFN05DUWtNOHUwTzlFa3NzSURGQ1RBZ3NnSUNGRkNJMFRMeWpRMUV4VU5KVTFCVFR3cUs4eVN6TkpTUzgzS1RpdkxiaTI3NjlOdm1BZG05dDNqZlhHaDY1M2ZQenM3Ty9QbG1lYzNlN2k3NzNxQ2hZTDZHNnJkQ1ExUVYyTkd4eE1hcHU3OWpSWG9QcUs5TWNIM2hBWXIwSmpVc2tuell0OGpaYld5V2xtdHJGWlcvOStzYnQ2OGVkY2hRcXZ2NDBJeEhKdmNTbkVBR2phVEdJUllqV0l6YkFweU14SUgycmFVTUlVU3h4ZmIvRndqL05ETVY0OG9SUEZFYk9ydUVtQkt5alVqMmM5TDAzdEV3dFM0YlpCUXArdTQ1ZzhhRklkTnpkeWQvVU1FWWo0aE9xRThCSnZhdTV0ZHRCMGhoVEpUNG96QU5qZlNHK0NFV01vSlMxRWNpazNORzNCNE1TYk5KRkxIeHN1TGZZK1UxY3BxWmJVbld0M1YxOWQzNk5DaGNiRkNoMi9oY2hjVEJFUXpNS29FNGtOQ0hHN0lrSHg1S0lPa1VMNG56cWZ1V2UxRmtjaUlaem5oZlRMb3hHQWhMM09TZzBpWkVtbUJsdFN4NmZOaTN5TlpKNkloL203bXRVTHZYc1VsTU83Ti9uU0IrSTBRMnhveXBINTg0bFpKb1R4Tm5NTnVXazF6UDBPUDJFTUdUWWtTc3JMYWdEUkhTK3JZS0hteDZaR3lXbG10clBaRXF6dWV5QlVlRnhjM2JOaXdWWm1abVhFanVDNjZoK3MyQ0poK2FHVThyR1ljY1FrUW1jTWdoRkRISU1SRkRBRzFRek0vMDM4eVVpakFEQ0pNbFFoRngzRVlJRnJxRVprQ3dRbUU2TmV2MzNkN3VNNlBpUEN4SUdVS2tuWk1FTVhTdlNuell0OGp5bTkvcmpoTUY0UXlqS2FxaWJvYU10cGhpOVBzSDJMT01MMWQwSklhU0JNM3M3KzVIRWJKMVNQaXpBbUhhWmRZRkJVVllZL1V2dkh5WXQ4alpiV3lXbG50Q1ZiM2wvNWRQNHlIRWl2ZExvaTlWcU5ZdW9RSTFLWGtEbXh4U3NsUVlzZ0FxQXBWN0p5aVB4M3ArMlJJb2F4eTRtU2l6dmtPZjFjOW9rbzdRRm5wZElGM1AzZDdEcTdPZk1TY094NVNVT1BseGI1SHltcGx0YkxhVTZ6T2hCZ0dGL0xwN053U3g1VVJxMUVHcXN5dEJpTGpXczZJWTFoaXhHcVZpU3B6cXlrVXd0UmFUWmgwSjg0ZzFPbXMxaU9xekJGVnFMSzBXcENHc2NEeGo1a2hKaVFhVTFCVDVNVytSekpHVEEwVUVZNmxUSzNXVEhGcldWaE51eTlkZVZqTHpHcWErNnZjUVZoYlRTU1cyaEd1eHhYVU9IbXg3NUd5V2xtdHJQWVVxMGV3SjNRWlhFT2hDUk1tM0h3VDE4MG8xL0JpemV6WnN5L3g1ZXF1R3hMclI0aE1ZdFFRWXdKRXhYdkFhRVlNdmRVVVNoWEhWSWxRQkViUGFlbHM5UkFKWVI3SlFoQTJyZWJhQTUveEVIQ0JrZFYxSjJPS3JkL25YT0VnVWJHZHI1QmZVK1RGdmtlRTBXdEVkSFQwODFkeHZZdnlISU5KN3pRa25UNUdQM3E0a0NYaG5nS2ptK2x0WGowbUhIM2ZwYjdQbzV4RjVWZkE2ZVhlVzNvVDBPMVo2allLWlNxK0Q4Szg2N2dleC9veHZMR2d0NW9ramczN3J1RzZJVHE2a29vOXFVY2o1OFcrUjhwcVpiVXg1bmxsOWIvZWFtdVBoSnBEemFaTW1YSVhhZlBtelI4VDV1dnAwNmNmTGlnbytBWkxTMHdnR0pzRVl3b1laVFNrNlJBUUZWaDg3V3BJM1kxRGVaZEMrUlFjTE1BaHEwMFFKd3JFYkNCbU1Lc0pVVUVJSjZzWFFMZlBtemV2YjkrKzNXU3JSd3lwMXdnYTExblBjVldDU3NYTFc3VnExYXNwODJMZkk2RythQkEvZ0NzYUlzejB3WU1IdnhJVEUvTXRsbG11TUYyaW9oSUlzWkFCYUVoUERCNjhEb2hQZ2RobE9TUlNNQm9rYzh4YXhpQ3JkNkgvcCtDc0l3NVpiU2dmZ1ZoT2lHY2xCQlpQeUZhVGN1aHhoN0JhbzVmNHVFRGlLb2lPZm9pSzIwQnExU2g1c2V1UnNscFpyYXoyTUt1RG9jdkt5c3FTSk16bzBhTy9CK2JYRlN0Vy9BaE1DWmFXbUZaZ2RPclVLVklhVWdFWWJFaWxLMWJjQzhSR0lONTBOYVJ1TEJSd2hndXJId0tHWmZkTjlKOEZ6cjNFSWFzTkVaRkF4SlBWRW1JdnVrNEVBb3RTc25yY2FxRnVrRXdLYU4rK2ZjU21UWnZxenJNcEtTbGxaUFgwWGJ0MlZZQ0t4WFJoZFpQbHhiNUhwQ2dvQlYxdkZKaUgwSlZobnNQbDVYNlVOMkJwanFIOWFHeE1USVUwcE5Ib3g0YjBKUHFpT0F1TE5hNkcxQW9iTzZGeGttUTFWbGwyZDZBLzIzUWhsczlaV04wQjlSdlJMbFZZWFVDSU5laktObUh4SkZtOXFiK1FsL1h4SVVrNlB2eUNQYWdpSm1Zc0ZyOUlWdHZQaTAyUGxOWEthbVcxcDF1OWZQbnlyVEhRSTQ4OFVqRnIxcXdLRkRkaStRZzBjZUxFVHVlZmYzNHJWME9LQnlPU0lTRFdGOFd4V0V6RTZsZ3dMZ1BqUEV1clJTaDVVaWhqV1dxZ0NyWk9ISWUxMWNsQUhLUklKZ3JFUnF6R2dIRDlHMis4RVU1UGliMmNnd0c5RTlwSVZoZU1HaldxZHRKY2VPR0ZFekVtTEVyTXJiYWZGL3NlV1dPZzRUR20yb2pXSFN5SFJNbzFaK1NpdFV1clNRa3g1aXBFY3l1clNZdk1DWkZvUFlIZS9mQXlJTEdydUhpeVdqbyt2SVU5aUZtTnhUdEdWdHZQaTMyUGxOWEthbVcxSjFqdEJmWE55Y2twcTZ5c1pBa2FDN0VzWUJ4MS8rUWZ4UkdqVUV4QjlkbUdqQzQ1T1hsQXpBQWlueUdnVy9sakFhYUhLSXdDbEplak9zZ3NsR0NFY2dNNE9FV21VaWhub2YwV0NpVkc0cXhGdmNNQTRRUEV6c3JLblN3aGhNaEgweFFKUWFPcFFmVVVkNnlHa3BPVDg2a3JRZVZsWkpjdVhibzFSVjdzZTZTL0UxT0dSZ3pEdXpRY2c3dENPV2hRQmdTbHBPRkRvcnRsckErem12cTRiN1hZbDNiaXdSUGJGMWxic25xSkZqRWF4WVZ1V2szS3R6NCtkR3ZDdk9nOVVsWXJxODA5OG9NNkpDUWtNRXo1MnJWcjBaNWQrZWVpL1kwM2NJMGV4WVhpRmxUM1JBOXRZaHlvNlpLUUVNV0dCTVJCTUNyQVNFWGpHUnl4a3hDL284eUcxQms5SklEQUJDTVVsb2JVdFd1VEtCVG1VdzJGTWtyaWJFQjlBSEZraEE4UXpHcEVra0NJUld5MmFCRUZLTjdJckE0UER6ZXl1bTlFUk1Tc2lvcUs1Y0N3NDNkcWFtb2hqV3NzSVdKSUtGNlB2MGxXMjg1TDAzZ0VEU0JKcDdLTjEyaFZ4cmZjSUZXRmFoaHRPU0tlRUFWZ0xOSWlOdENtaFZLZGJrUWhGRW9aelhpYXVMSjJFb2VaUkxwUVJ2Z1RZcWRBN0hkQ0VHR0pWUFdTeFMwVVBKamVXWGQ4b0hHbEdCOGZXc2hkN2VmRnZrZkthbVcxc3ZyL2JuVnI2QlJnYW1iTW1GR0p4amplVDd5VjYwSHFVNU5TcXkwc3I2ZHlhWWZsRHdZUXlVQ1VzUVNEa1VzTVFqeVl3bFdPOHFYRTBJMm9CVEJ0d05rQ1RqUVBaWlpUS0V1SXM5eUVFMHFJSlVCUUpKRk9DQ0xVSm5jZjB6WDdta0hPVmdkMTd0dzVJaWtwQ1RtcExDOHZaK2ZaaVpHUmtXeEFDd2xSZDU2bGNWMkpIbDVOa1JmN0hnbUYwYXh4dWl4Y2ZJMU9pTU5FYmJTUEJVWVRnMEtSaFJETTFaTkNxZFNHY3VBYXZUcWJJRnB6UXJLMEx6R1Y2d2wzMFR2NEFRYVVQdnJqUTY3eDhXR0xWQlhVZUhteDc1R3lXbG10clBZRXExdjRjNlhRU1hJMDE0d2JoVFpzMk5EbTdMUFBEalVQaFNPQ2dXRFJGQkJqb1VDVWc5RVdqQUIzUXBsQkoxdkNMSkZDV1U0Y1B4TkVxRUNVU1lndDJ0R3N4Y3UyNFdaV1V5RE1wcG90VzVZUUpYSVJWLzM1a2F1Y3BmZHNMb2V0dkRTeFI3SWljTVVaYlN4Nnk4NmxlZ0d4eEJoUlp2Sll3T3dtVTU1SktEUGM0M2loMlVGandrNXNXazIvbDVPdGRuMEZUWGU3ZExxeThmSmkzeU5sdGJKYVdlMXBWZ2UyYk5ueUVweS9idWJhdkVTSXJVK2JOdTBLbDhrRndoZUlpOUQrMEdOY053dmRBMGFJNnpDNHBrQ0VPQ1F4MlByNmtwSVNudzVjWHNlSEFPRVFmcnpLUHVmWE5UQXcwR0YyZmd5dFZRaHlVSHZoVU1DVnNxVmVOYmcxM2haTkFtem5wY2s5RXZMdHI5SHNLS0YrV0M4YU9QQmNWd2lIMVArTWdWd3ZpYXBIc1hxeUswWkw2UzE3UXB3aFlZdXdubjMxMVZlL1JhRVpmcmZNR29GVmJ4RFd1LzlsVDRmNThlRUdiQXB1dkx6WTkwaFpyYXhXVm51YTFZRzRCL3daKzVCRGVxMHk4TTdzV2ZjTDVXUDlVYWhIang0bm1ZY0JSanJYeldoZmZpdlhIMGVPL0RHVTY3UGk0dUlyd0dqdDQrUGpaNFJvRDhRbEZBYlQwYU5IRDQwY09iTDZ5SkVqeTRoUkRIMlZtSmc0dGJTMGREZENBeXJZZVNUaGVzUWtMV0laQ05YcjE2OWZhMkYxeDJaQ3M2RVB1SmFGQzdGMXhGSGlJK1JuTnk5TjZoSFVYUHVKbHc4eFMzNjhTdWdzck5NdWNxWXBveDIrbzNVdDE4ZFJRcE1HRGl3YUpQUWlHTy9RNjNLV243MGhiY2IrVjQwK3k1d1lVMUgvTlVMTGo0cnFZdmJaRzFJTm1tWnJFWjloTlJIVmQ1UFYxb2NYMnZXNDl1bVBEeVZSUXVmWno0dDlqNVRWeW1wbHRhZFpYY1crUUErTkd6ZHU4ZEtsUzErV01BOUFPVnUzbHB0aWZOdTFheGZMKzMrSS9xODhJSlNQVjZLR2NhWFRrTDVCOVZsNG1WYUQ2QTdFUlhmY2NVYzZHcTRlSjRTcWQ1aFhSVVZGUjRtVGdicXZ2TDI5Vng0N2Rtek9Bdy9zQVNxWUlkb0RFWTV0c2NhSVJDQkFaMXFGcW1VZ25HRmlkU0JJbVl5eXRWNk1jb2dDS1VhWlZBeEtOcXAvcGVIU3VPem54YjVINXBnTW1ucVlIWXZ4eTNJWlE1L0xKb3pKTmE4MDIxNlIraTNHT3BGajY0WkVrMUI3U1NaOWhXMjFtUHpqVUhXSWRzdWowcGZldnNMNlNvU1poVUhXL1NJdFVFS00weUpxclVhWGRQSHh1MlZZTmJPNkkwdXJlU0RGS0pPSzZmandxN1J6MmMyTEhZK1UxY3BxL2NGQllMSWdKd3lPWFdjNkhBNHZRNnRYb2YrcnI3NzZJUjd5L1NtZlEvTHo4MStGNUFNVnlLWldwNlB0d2Z4Nkxady9mMzY5MWNPNFpLc2Z5TXFhbzdOYWo2aXpPb01PNEc1WW5Xa2NTRFdPMk10dzVLNDc2eU1udFZaalRNSnEyM214NzVIclV6NWh1QlpvTVZ2cDZ1UWtRNnN4K1Bub2U2ZCt0bVd4blVLNi9QZ0NUUmFiV2MxMnh6Mmk3L3RZZlV1M013bXJvYVhDYW9HWUl4RGJzRnBDVm44bUNLNnMzb1J1OXd2Sy9SUklHbjVVellLSnBZK1lFbWtIQXJsRldHMDNML1k5VWxZcnE1WFZubVoxN0twVnEzQWhuemR6NXN5bExMVEh1ZTZIMkEwOTNIZmI1OUpxNnBlbEhkTFdZb2h1YXU1WXVYSmx2cEhWSS9BRjNJTjMzbm5uSGluRCsvZnZYNE9iajlYb3Q2eFlhQnB4WmtLNG45aWgzbXBDekhHSmVCR3JaMkJFaHYvWXdvM1FjYUJJVnU4QjVTZFE2cXpPV0ZXcmRNbnFCUmcyV1cwL0wvWTlzc2FRSnZEUXVHaXFGUTBrdWJaYXpEWXhwSExxVzAyN1Y3bVIxVk5RZVR0OThsUFM3dnJkVW1ncXJTZEl0MUFDYVYrY3lhL01aVDJGNmxKMDhSYUVSTG81YzdyUkQ3M05BOW5Pck5ZZkgzWklxYktiRjlzZUthdVYxY3BxVDdJNkREOW5tVDFFQ0IvaHk3bGRhTjdiYjcvOU1MUm16WnIxaHBpT2VCRW1uUGNiaC9ZczF5L2Z3clZ0OSs3ZDZQN2x3MXcvNzkyN2x5VzREMTRXMGlBQ2dJaWdEQzlBUDZjTS80UithNkNIU2R1SkU5eWhROTg2UkhkQ3pOUWpudElqSm1PMTFOSnFvdWl0ZmpnN08vdkZaZlg2Q3F2cmQrellzUkpERDhhNDdPYWxhVHdpbllTTmo1bzg5cWJjcmNPWE9iRllhWXBwSi9xOWZaMFFyak55c1Bob01OY25LTE5RempuQk5NTmNXWEtHUmZVNjRyeUE4Z2ZnNkw2RlF1RkN4elJXVXpWRWhEZFIzRUZXdXhzSVdUMWVmM3pJRm84cjdPYkZ2a2ZLYW1XMXN0clRySjUydDFZbDBQYnQyNy9FZVdDcE81Z3pJT3IzMHp5aDJ5RjNoOVFMbjh1L0hIM1kzMXZBOWZKMzMzMzNITUpZYVdEMU8vaUxmZno5dzF3Z3RnbUVzOVZmZ3RBYVA0NXhmczNuUElueXNoUUl4dllldXU3OTRvc3Zka0EvY1AyTVZUYW1QdWpsc0oyWEp2U0lNTGltMVNtTmNncTV4bHpNbjlORG1tZjFMSVNHRENtWVppaHBKbGJYOERCMFZoOFlVS3MyUmorQVh5b1F0OU8rK0lLQjFRTzRBb3kvVnFvTmhPNldHWlBXMFBIQmZsNk8xeU5sdGJKYVdlMmhWcCtEVHp2MHdGM1lrUUl4Zmd3RXpMZlBjS0U0QnEvVFhvQ1d4dUZndytsQVpLUHZYTndyL3ZrOXJ0ZElOQ1MyUG5mcTFLazl6anpUK0FsNm4vajQrTVYzMXVzbmh0S0VnVGpHang5ZmN1REFnVHdTdmg3aEx5TmE2eEZwVGdnUVNrRllWRWVBdkp6UDE3MTY5YnJjS1JDV0VwTkpnNjhJbndLS1gxUGx4YjVIUWhkZ0xzaVl3VHFOY2ZXR2c0TmZqdEpzNDVxc3hhV3hGYnFBTmYwcGZZS1kvQWNFQ2hLTUo5R3M4UHBhM1lkaVc0M1ZXc1JiZXNRWVZOM0xXbDNQbFlxeTRXZHZqQVA1eVB6NEVOUTRlYkh2a2JLNlVheCtRVm10clA3UFc1Mk5VOFRreVpPdnRzU2MwcVpOR3o0azlNVVpCQnFQVG9sNEY0dnhKcE9ZVFE5eTZSQ2hRQ1RocGRscGt5Wk5tc3RWaDBxajdxdzhGMzJqY25OejgzSnFGU1ZiSFVhSVNaYUlNU0RjQ2tKaERsZThpZFZ0OGJuZ09wSmswN29udUJnSndGTDg4SmJGdzhTeVlEY3Z0anl5YXpVMm9Xb2tZY3cvZThPSFJDa1JkNVVJU2NJZXlXWDRpYm9rL2pvOCtoak9lbFl1UmJNYzdJdDVhQW9seUZiN215UEdDMFFhV2cwSG9UQ0tLOW5NYXRRWDBSVzBHSmZSOFNIcWVpNDJhZXpteFpaSHltcGx0YVRUY0VReHdTUVNCaTB1TVAwMGVRT0dsTXpGZW1rWVlWWSs2YTNPa2EwbWhJSFZhY2RudFJma3B0VVlpODVxdTNteDc1RzFla3QvbjBKN21DYlNRS3ZmN3JLVUpQQ2tQeWdITDRZa3o5dzhTZ3VLcDRodlVReUFKSitjTHNPeXBmbDhMek5LTXFuTzZsQXR3dHNKa1NnUWM5RXFuZ2lwdkpQTzZqNUVJcXNwclVhVEpzbHAwalJHWG14NXBLeFdWditkVms5V1Zodm41Uit4ZXFUUUQ3anZ4bkk4RmVYanNab3hldmZvMFpzdDJUcit5ZklrL21HU2w4dWxzem9aa3EwZXc1V0c3b2tVaHFYVldvUzNoQmd2STF4YjdRZ0lDT2dwV1kzN3FHbU1Sc1RKRkFnRHMxWVlTeDVhSmtDUzFmYnpZdDhqSzR5RkdtNTFJcjkvNzRXRnQzU2xta2RKZHJhYS9CTldFNlphaXNIYWFxb1hWbzhoUkxhTWNHMTFDTldSMVM2T0Q2bEVpcWRlalpTWGhudWtyRlpXSzZzOTJlcExYMy85OVdta3V6KzRtMmthVldGeHFTdXJvL0JSL0Z2dkZUcnp0Tk5PYzJCSVdGeUFWWFkraWlvc0xNeGhMYUdlUFh1RzZhek93VE5GWm5VYXp0RlR1WHFmSnNUV1Y3Q214QmdBZ1JNaVc1MUhpREVDMFVPTHFDYXJFMEJnQnJVR3d0bnFaRVNiSUZrOWhtc3l1bnNEWG8ybHVkWDI4MkxmSTJ1ZHd1WVhWOTNsWUJKRmkwVWJWMWJub0gzaEFLSE9va1dBU0luK1NsVzJ1aENNYVhRN3dPRDE5WXV4L2pvMXBkUlNXTUxxWENBbWFSRW5Td2lzRnBIVncwMWVUUWdoRWxPUitmSEJ4R3E3ZWJIbGtiSmFXYTJzVmxaSDVlRGtrVXZYQ3NOSllXRmhvWWI5UWtOQ1FsZ0Q5TW5ESW9rWWZkREJvUjlTRXByNG80ZWwxZmh4VFBYSlhKMmxaclVWNk5zV2pHUVhWZ1BSMndRQlFoOFE0bDFZblljQk1hdlQwdExHWjNOZGNMSVFpNUhHbFVUeDBManM1OFcrUis1aFNJWFNrM3Q2cnREYTZzbFdzdE5zWXp1Tm4zNUk4ZlFJMzlKcTY2dEorcDgxcksyR2VwZ0M2UGFjdGRWRThqWStQbmhoZFJLTmF6aVJndXpueGI1SHltcGx0YkxhVTYyT0Z4cE9TcVpxUzB5TEZpMUNxVitxNkNjUEtaazJoNkdwN29Hc0h5cjcwTjhNT2IxV25TMGlEV2doSkNOYUV5TFVDa0d0aFJ6V1ZnL0V5enk5VCtlUzM3cGw2K2p0ajcrWnJMUGFmbDdzZTJTTnNaWTF4cUZ2TDRZa0JHK01GU0oyc3VPVnYvaXpOaFJ5M01lSElIdDVzZStSc2xwWnJhejJBS3YvQWdSc0p4TXlDNmtRQUFBQUFFbEZUa1N1UW1DQ1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQXlBQUFBSllDQU1BQUFDdHFISkNBQUFBTTFCTVZFVWZuc2lIMCt3V21zVW9vOHRPdHRoWXU5eHF4ZUthM2ZNeXFNNDdyZEpGc2RWaHdOOTB5ZVY5enVtUTJPOWd2OTk4emVsZ1dPSHZBQUFFaWtsRVFWUjQydTNUdHhIRVFBRER3SHR2WlB1dlZnMlFnV0x0bG9BWmpEdFFEUW5BSUdBUU1BZ1lCQXdDQmdHRGdFSEFJSUJCd0NCZ0VEQUlHQVFNQWdZQmc0QkJ3Q0NBUWNBZ1lCQXdDQmdFREFJR0FZT0FRUUNEZ0VIQUlHQVFNQWdZQkF3Q0JnR0RnRUdBT0FnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBREFXUStnTWdnWUJBd0NCZ0dEZ0VIQUlHQVFNQWdZQkRBSUdBUU1BZ1lCZzRCQndDQmdFREFJR0FRd0NCZ0VEQUlHQVlPQVFjQWdZQkF3Q0dBUU1BZ1lCQXdDQmdHRGdFSEFJR0FRTUFpUUIva0NsVUhBSUdBUU1BZ1lCQXdDQmdHRGdFSEFJSUJCd0NCZ0VEQUlHQVFNQWdZQmc0QkJ3Q0NBUWNBZ1lCQXdDQmdFREFJR0FZT0FRUUNEZ0VIQUlHQVFNQWdZQkF3Q0JnR0RnRUdBUE1nUHFBd0NCZ0dEZ0VIQUlHQVFNQWdZQkF3Q0JnRU1BZ1lCZzRCQndDQmdFREFJR0FRTUFnWUJEQUlHQVlPQVFjQWdZQkF3Q0JnRURBSVlCQXdDQmdHRGdFSEFJR0FRTUFnWUJBd0M1RUgrUUdVUU1BZ1lCQXdDQmdHRGdFSEFJR0FRTUFoZ0VEQUlHQVFNQWdZQmc0QkJ3Q0JnRURBSVlCQXdDQmdFREFJR0FZT0FRY0FnWUJEQUlHQVFNQWdZQkF3Q0JnR0RnRUhBSUdBUUlBL3lCQ3FEZ0VIQUlHQVFNQWdZQkF3Q0JnR0RnRUVBZzRCQndDQmdFREFJR0FRTUFnWUJnNEJCQUlPQVFjQWdZQkF3Q0JnRURBSUdBWU1BQmdHRGdFSEFJR0FRTUFnWUJBd0NCZ0dEQUhtUUYxQVpCQXdDQmdHRGdFSEFJR0FRTUFnWUJBd0NHQVFNQWdZQmc0QkJ3Q0JnRURBSUdBUU1BaGdFREFJR0FZT0FRY0FnWUJBd0NCZ0VNQWdZQkF3Q0JnR0RnRUhBSUdBUU1BZ1lCTWlEYkVBMUpxQXlDQmdFREFJR0FZT0FRY0FnWUJBd0NCZ0VNQWdZQkF3Q0JnR0RnRUhBSUdBUU1BZ1lCREFJR0FRTUFnWUJnNEJCd0NCZ0VEQUlZQkF3Q0JnRURBSUdBWU9BUWNBZ1lCQzQ5Q0J2b0RJSUdBUU1BZ1lCZzRCQndDQmdFREFJR0FRd0NCZ0VEQUlHQVlPQVFjQWdZQkF3Q0JnRU1BZ1lCQXdDQmdHRGdFSEFJR0FRTUFoZ0VEQUlHQVFNQWdZQmc0QkJ3Q0JnRURBSWtBZVpnY29nWUJBd0NCZ0VEQUlHQVlPQVFjQWdZQkRBSUdBUU1BZ1lCQXdDQmdHRGdFSEFJR0FRd0NCZ0VEQUlHQVFNQWdZQmc0QkJ3Q0NBUWNBZ1lCQXdDQmdFREFJR0FZT0FRY0FnUUI1a0I2cXhBSlZCd0NCZ0VEQUlHQVFNQWdZQmc0QkJ3Q0NBUWNBZ1lCQXdDQmdFREFJR0FZT0FRY0FnZ0VIQUlHQVFNQWdZQkF3Q0JnR0RnRUVBZzRCQndDQmdFREFJR0FRTUFnWUJnOENsQjdrQmxVSEFJR0FRTUFnWUJBd0NCZ0dEZ0VIQUlJQkJ3Q0JnRURBSUdBUU1BZ1lCZzRCQndDQ0FRY0FnWUJBd0NCZ0VEQUlHQVlPQVFRQ0RnRUhBSUdBUU1BZ1lCQXdDQmdHRGdFR0FQTWdLVkFZQmc0QkJ3Q0JnRURBSUdBUU1BZ1lCZ3dBR0FZT0FRY0FnWUJBd0NCZ0VEQUlHQVlNQUJnR0RnRUhBSUdBUU1BZ1lCQXdDQmdFTUFnWUJnNEJCd0NCZ0VEQUlHQVFNQWdZQjhpQWZvRElJR0FRTUFnWUJnNEJCd0NCZ0VEQUlHQVF3Q0JnRURBSUdBWU9BUWNBZ1lCQXdDQmdFTUFnWUJBd0NCZ0dEZ0VIQUlHQVFNQWhnRURBSUdBUU1BZ1lCZzRCQndDQmdFREFJRUIyYktsM2VxNDhBNlFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCB0eXBlIFBsYXllciBmcm9tICdAR2FtZS9QbGF5ZXInO1xuaW1wb3J0IHR5cGUgeyBDYW1lcmFzIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSAnQEdhbWUvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBpbml0aWFsUG9zaXRpb24gPSAwO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJpdmF0ZSBjYW1lcmE6IENhbWVyYXMuU2NlbmUyRC5DYW1lcmEpIHt9XG5cbiAgcHVibGljIGZvbGxvdyAodGFyZ2V0OiBQbGF5ZXIsIHkgPSB0aGlzLmluaXRpYWxQb3NpdGlvbik6IHZvaWQge1xuICAgIHRoaXMuY2FtZXJhLnN0YXJ0Rm9sbG93KHRhcmdldCwgZmFsc2UsIDEsIDAuMSwgMCwgeSk7XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB5O1xuICB9XG5cbiAgcHVibGljIHpvb21JbiAoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB6b29tID0gTWF0aC5taW4oMSArIGFtb3VudCAqIDAuMDEsIDEuMjUpO1xuICAgIHRoaXMuY2FtZXJhLnpvb21Ubyh6b29tLCA1MDAsICdRdWFkLmVhc2VPdXQnKTtcbiAgICB0aGlzLmNhbWVyYS5zZXRGb2xsb3dPZmZzZXQoMCwgdGhpcy5jYW1lcmEuZm9sbG93T2Zmc2V0LnkgLyB6b29tKTtcbiAgfVxuXG4gIHB1YmxpYyB6b29tT3V0IChkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgZHVyYXRpb24gPSBjbGFtcChkdXJhdGlvbiwgNTAwLCAzNTAwKTtcblxuICAgIHRoaXMuY2FtZXJhLnN0b3BGb2xsb3coKTtcbiAgICB0aGlzLmNhbWVyYS56b29tVG8oMSwgZHVyYXRpb24pO1xuXG4gICAgdGhpcy5jYW1lcmEucGFuKFxuICAgICAgdGhpcy5jYW1lcmEuY2VudGVyWCwgdGhpcy5jYW1lcmEuY2VudGVyWSxcbiAgICAgIGR1cmF0aW9uLCAnUXVhZC5lYXNlT3V0J1xuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBsYXllciBhcyBQTEFZRVIgfSBmcm9tICdAR2FtZS9jb25maWcuanNvbic7XG50eXBlIFBvc2l0aW9uID0geyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IFBoeXNpY3MgfSBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xuICBwcml2YXRlIGluaXRpYWxQb3NpdGlvbjogUG9zaXRpb247XG4gIHByaXZhdGUgb2Zmc2V0VGltZW91dD86IG51bWJlcjtcblxuICBwcml2YXRlIGlzSnVtcGluZyA9IGZhbHNlO1xuICBwcml2YXRlIGlzQWxpdmUgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoc2NlbmU6IFNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dHVyZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUpO1xuXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgIHNjZW5lLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0geyB4LCB5IH07XG5cbiAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnbWFyaW8nLCB7XG4gICAgICAgIHN0YXJ0OiAwLCBlbmQ6IFBMQVlFUi5mcmFtZXNcbiAgICAgIH0pLFxuXG4gICAgICBmcmFtZVJhdGU6IDE1LFxuICAgICAga2V5OiAnanVtcCdcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBqdW1wICgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0FsaXZlICYmIHRoaXMuYm9keS50b3VjaGluZy5kb3duKSB7XG4gICAgICB0aGlzLnNldFZlbG9jaXR5WSgtNTAwLjApO1xuICAgICAgdGhpcy5hbmltcy5wbGF5KCdqdW1wJyk7XG4gICAgICB0aGlzLmlzSnVtcGluZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpZSAoZnJvbUxlZnQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBmcm9tTGVmdCA/IDEgOiAtMTtcblxuICAgIHRoaXMub2Zmc2V0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT5cbiAgICAgIHRoaXMuc2V0T2Zmc2V0KDAsIFBMQVlFUi5oZWlnaHQgLyAtMy42KVxuICAgICwgMjUwKTtcblxuICAgIHRoaXMuc2V0VmVsb2NpdHlYKDI1MCAqIGRpcmVjdGlvbik7XG4gICAgdGhpcy5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XG5cbiAgICB0aGlzLmZsaXBYID0gZnJvbUxlZnQ7XG4gICAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgYW5nbGU6IDkwICogZGlyZWN0aW9uIH0sXG4gICAgICBlYXNlOiAnUXVhZC5lYXNlSW5PdXQnLFxuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIHRhcmdldHM6IHRoaXNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlc2V0ICgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uO1xuICAgIHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKGZhbHNlKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5vZmZzZXRUaW1lb3V0KTtcblxuICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XG4gICAgdGhpcy5zZXRPZmZzZXQoMCwgMCk7XG5cbiAgICB0aGlzLnNldFZlbG9jaXR5KDApO1xuICAgIHRoaXMuc2V0QW5nbGUoMCk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGp1bXBpbmcgKGlzSnVtcGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuaXNKdW1waW5nID0gaXNKdW1waW5nO1xuICB9XG5cbiAgcHVibGljIGdldCBqdW1waW5nICgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0p1bXBpbmc7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNjZW5lLCBQaHlzaWNzLCBHYW1lT2JqZWN0cywgVHdlZW5zIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IHJhbmRvbUludCwgcmFuZG9tRWFzaW5nIH0gZnJvbSAnQEdhbWUvdXRpbHMnO1xuXG5pbXBvcnQgQ2FtZXJhTWFuYWdlciBmcm9tICdAR2FtZS9DYW1lcmEnO1xuaW1wb3J0IENPTkZJRyBmcm9tICdAR2FtZS9jb25maWcuanNvbic7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0BHYW1lL1BsYXllcic7XG5pbXBvcnQgVUkgZnJvbSAnQEdhbWUvVUknO1xuXG5pbXBvcnQgQlVUVE9OIGZyb20gJ0Bhc3NldHMvYnV0dG9uLmpwZyc7XG5pbXBvcnQgQlJJQ0sgZnJvbSAnQGFzc2V0cy9icmljay5wbmcnO1xuaW1wb3J0IE1BUklPIGZyb20gJ0Bhc3NldHMvbWFyaW8ucG5nJztcbmltcG9ydCBTS1kgZnJvbSAnQGFzc2V0cy9za3kucG5nJztcblxuY29uc3QgVE9UQUxfQVNTRVRTID0gNTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBTY2VuZSB7XG4gIHByaXZhdGUgcGxhdGZvcm1UYXJnZXRQb3NpdGlvbiA9IENPTkZJRy5wbGF0Zm9ybS53aWR0aCAvIDI7XG4gIHByaXZhdGUgcGxhdGZvcm1zITogUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXA7XG4gIHByaXZhdGUgbGVmdFBsYXRmb3JtID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgcHJpdmF0ZSBwbGF0Zm9ybUFuaW1hdGlvbiE6IFR3ZWVucy5Ud2VlbjtcbiAgcHJpdmF0ZSBwbGF5ZXJSb3RhdGlvbiE6IFR3ZWVucy5Ud2VlbjtcblxuICBwcml2YXRlIGNhbWVyYSE6IENhbWVyYU1hbmFnZXI7XG4gIHByaXZhdGUgcGxheWVyITogUGxheWVyO1xuICBwcml2YXRlIHVpITogVUk7XG5cbiAgcHJpdmF0ZSBhdXRvcGxheWluZyA9IGZhbHNlO1xuICBwcml2YXRlIGdhbWVQYXVzZWQgPSB0cnVlO1xuICBwcml2YXRlIGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBsb2FkZWRBc3NldHMgPSAwO1xuICBwcml2YXRlIGhhbGZIZWlnaHQgPSAwO1xuICBwcml2YXRlIGhhbGZXaWR0aCA9IDA7XG4gIHByaXZhdGUgc2NvcmUgPSAwO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoeyBrZXk6ICdTY2VuZScgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnYW1lOnJlc3RhcnQnLFxuICAgICAgdGhpcy5yZXN0YXJ0LmJpbmQodGhpcyksIGZhbHNlXG4gICAgKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlICgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbGZXaWR0aCA9IHRoaXMuc2NhbGUud2lkdGggLyAyO1xuICAgIHRoaXMuaGFsZkhlaWdodCA9IHRoaXMuc2NhbGUuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMudGV4dHVyZXMub24oJ2FkZHRleHR1cmUnLCB0aGlzLmluaXQsIHRoaXMpO1xuICAgIHRoaXMudGV4dHVyZXMuYWRkQmFzZTY0KCdidXR0b24nLCBCVVRUT04pO1xuICAgIHRoaXMudGV4dHVyZXMuYWRkQmFzZTY0KCdicmljaycsIEJSSUNLKTtcbiAgICB0aGlzLnRleHR1cmVzLmFkZEJhc2U2NCgnc2t5JywgU0tZKTtcblxuICAgIGNvbnN0IG1hcmlvID0gbmV3IEltYWdlKCk7XG5cbiAgICBtYXJpby5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRleHR1cmVzLmFkZFNwcml0ZVNoZWV0KCdtYXJpbycsIG1hcmlvLCB7XG4gICAgICAgIGZyYW1lSGVpZ2h0OiBDT05GSUcucGxheWVyLmhlaWdodCxcbiAgICAgICAgZnJhbWVXaWR0aDogQ09ORklHLnBsYXllci53aWR0aFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH07XG5cbiAgICBtYXJpby5zcmMgPSBNQVJJTztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCAoKTogdm9pZCB7XG4gICAgaWYgKCsrdGhpcy5sb2FkZWRBc3NldHMgPiBUT1RBTF9BU1NFVFMpIHtcbiAgICAgIHRoaXMuY3JlYXRlVUkoKTtcbiAgICAgIHRoaXMuY3JlYXRlU2t5KCk7XG4gICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuXG4gICAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuICAgICAgdGhpcy5jcmVhdGVJbnB1dEV2ZW50cygpO1xuXG4gICAgICB0aGlzLnBsYXllci5mbGlwWCA9IHRoaXMubGVmdFBsYXRmb3JtO1xuICAgICAgdGhpcy5zY2FsZS5vbigncmVzaXplJywgdGhpcy5yZXNpemUsIHRoaXMpO1xuICAgICAgdGhpcy5wbGF0Zm9ybXMgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG5cbiAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHRoaXMuY3JlYXRlR3JvdW5kKCkpO1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5wbGF0Zm9ybXMsIHRoaXMub25QbGF0Zm9ybUNvbGxpc2lvbiwgdW5kZWZpbmVkLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVVJICgpOiB2b2lkIHtcbiAgICB0aGlzLnVpID0gbmV3IFVJKHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTa3kgKCk6IHZvaWQge1xuICAgIGNvbnN0IHNreSA9IHRoaXMuYWRkLmltYWdlKHRoaXMuaGFsZldpZHRoLCB0aGlzLmhhbGZIZWlnaHQsICdza3knKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IENPTkZJRy5iYWNrZ3JvdW5kO1xuICAgIGNvbnN0IHNreVJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cbiAgICBjb25zdCBza3lIZWlnaHQgPSB0aGlzLnNjYWxlLmhlaWdodCAvIHNreS5oZWlnaHQ7XG4gICAgY29uc3Qgc2t5V2lkdGggPSBza3lIZWlnaHQgKiBza3lSYXRpbztcblxuICAgIHNreS5zZXRTY2FsZShza3lXaWR0aCwgc2t5SGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUGxheWVyICgpOiB2b2lkIHtcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBDT05GSUcucGxhdGZvcm0ud2lkdGggKyBDT05GSUcucGxheWVyLmhlaWdodCAvIDI7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMsIHRoaXMuaGFsZldpZHRoLCB0aGlzLnNjYWxlLmhlaWdodCAtIG9mZnNldEJvdHRvbSwgJ21hcmlvJyk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNhbWVyYSAoKTogdm9pZCB7XG4gICAgY29uc3QgcGxheWVySGFsZiA9IENPTkZJRy5wbGF5ZXIuaGVpZ2h0IC8gMjtcbiAgICBjb25zdCBncm91bmRIZWlnaHQgPSBDT05GSUcucGxhdGZvcm0uaGVpZ2h0ICogMjtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYU1hbmFnZXIodGhpcy5jYW1lcmFzLm1haW4pO1xuICAgIHRoaXMuY2FtZXJhLmZvbGxvdyh0aGlzLnBsYXllciwgdGhpcy5oYWxmSGVpZ2h0IC0gZ3JvdW5kSGVpZ2h0IC0gcGxheWVySGFsZik7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUlucHV0RXZlbnRzICgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLmdhbWVQYXVzZWQpIHtcbiAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWkuaGlkZVN0YXJ0VGV4dCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXRmb3JtKCk7XG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXllci5qdW1wKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUdyb3VuZCAoKTogUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXAge1xuICAgIGNvbnN0IHsgd2lkdGg6IHBsYXRmb3JtV2lkdGgsIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgfSA9IENPTkZJRy5wbGF0Zm9ybTtcbiAgICBjb25zdCB7IHdpZHRoOiBzY2VuZVdpZHRoLCBoZWlnaHQ6IHNjZW5lSGVpZ2h0IH0gPSB0aGlzLnNjYWxlO1xuXG4gICAgY29uc3QgaGFsZlBsYXRmb3JtSGVpZ2h0ID0gcGxhdGZvcm1IZWlnaHQgLyAyO1xuICAgIGNvbnN0IGdyb3VuZCA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcblxuICAgIGNvbnN0IEhPUklaT05UQUxfUExBVEZPUk1TID0gTWF0aC5jZWlsKHNjZW5lV2lkdGggLyBwbGF0Zm9ybVdpZHRoKTtcbiAgICBjb25zdCBWRVJUSUNBTF9QTEFURk9STVMgPSAyO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgVkVSVElDQUxfUExBVEZPUk1TOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgSE9SSVpPTlRBTF9QTEFURk9STVM7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBjb2wgKiBwbGF0Zm9ybVdpZHRoICsgcGxhdGZvcm1IZWlnaHQ7XG4gICAgICAgIGNvbnN0IHkgPSBzY2VuZUhlaWdodCAtIChyb3cgKiBwbGF0Zm9ybUhlaWdodCArIGhhbGZQbGF0Zm9ybUhlaWdodCk7XG5cbiAgICAgICAgZ3JvdW5kLmFkZCh0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0ltYWdlKHgsIHksICdicmljaycpLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdW5kO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQbGF0Zm9ybSAoKTogdm9pZCB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IFtlYXNpbmcsIHRpbWluZ10gPSByYW5kb21FYXNpbmcoKTtcbiAgICBjb25zdCB4ID0gdGhpcy5sZWZ0UGxhdGZvcm0gPyAwIDogd2lkdGg7XG5cbiAgICBjb25zdCBwbGF0Zm9ybUhlaWdodCA9IENPTkZJRy5wbGF0Zm9ybS5oZWlnaHQ7XG4gICAgY29uc3QgaGFsZlBsYXRmb3JtV2lkdGggPSBDT05GSUcucGxhdGZvcm0ud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSBoZWlnaHQgLSBwbGF0Zm9ybUhlaWdodCAqIDIuNSAtIHRoaXMuc2NvcmUgKiBwbGF0Zm9ybUhlaWdodDtcblxuICAgIGNvbnN0IHBsYXRmb3JtUG9zaXRpb24gPSB0aGlzLmxlZnRQbGF0Zm9ybVxuICAgICAgPyAtdGhpcy5wbGF0Zm9ybVRhcmdldFBvc2l0aW9uIDogdGhpcy5wbGF0Zm9ybVRhcmdldFBvc2l0aW9uO1xuXG4gICAgY29uc3QgcGxhdGZvcm0gPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0ltYWdlKHggKyBwbGF0Zm9ybVBvc2l0aW9uLCB5LCAnYnJpY2snKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGAke3RoaXMubGVmdFBsYXRmb3JtID8gJysnIDogJy0nfT0gJHt0aGlzLmhhbGZXaWR0aCArIGhhbGZQbGF0Zm9ybVdpZHRofWA7XG5cbiAgICBwbGF0Zm9ybS5zZXREYXRhKCdpbmRleCcsIHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLnNpemUpO1xuICAgIHRoaXMucGxhdGZvcm1zLmFkZChwbGF0Zm9ybSwgdHJ1ZSk7XG5cbiAgICB0aGlzLnBsYXRmb3JtQW5pbWF0aW9uID0gdGhpcy5hZGQudHdlZW4oe1xuICAgICAgb25VcGRhdGU6ICh0d2VlbjogVHdlZW5zLlR3ZWVuLCBwbGF0Zm9ybTogUGh5c2ljcy5BcmNhZGUuSW1hZ2UpID0+XG4gICAgICAgIHRoaXMudXBkYXRlUGxhdGZvcm1BbmltYXRpb24odHdlZW4sIHBsYXRmb3JtLCB0aW1pbmcpLFxuXG4gICAgICBkZWxheTogcmFuZG9tSW50KDAsIDEwMDApLFxuICAgICAgcHJvcHM6IHsgeDogZGVzdGluYXRpb24gfSxcblxuICAgICAgdGFyZ2V0czogcGxhdGZvcm0sXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIGVhc2U6IGVhc2luZ1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBsYXRmb3JtQ29sbGlzaW9uIChwbGF5ZXI6IEdhbWVPYmplY3RzLkdhbWVPYmplY3QsIHBsYXRmb3JtOiBHYW1lT2JqZWN0cy5HYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgIGNvbnN0IGxhc3RQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLnNpemUgLSAxO1xuXG4gICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMucGh5c2ljcy53b3JsZC5vdmVybGFwKHRoaXMucGxheWVyLFxuICAgICAgdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uZW50cmllc1tsYXN0UGxhdGZvcm1dXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmdhbWVPdmVyKSB0aGlzLm9uR2FtZU92ZXIoKTtcblxuICAgIGVsc2UgaWYgKHRoaXMucGxheWVyLmp1bXBpbmcpIHtcbiAgICAgIHRoaXMucGxheWVyLmp1bXBpbmcgPSBmYWxzZTtcblxuICAgICAgaWYgKHBsYXRmb3JtLmdldERhdGEoJ2luZGV4JykgPT09IGxhc3RQbGF0Zm9ybSkge1xuICAgICAgICB0aGlzLm9uUGxhdGZvcm1MYW5kaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkdhbWVPdmVyICgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbWVyYS56b29tT3V0KHRoaXMuc2NvcmUgKiAxNDApO1xuXG4gICAgdGhpcy5wbGF5ZXJSb3RhdGlvbiA9IHRoaXMuYWRkLnR3ZWVuKFxuICAgICAgdGhpcy5wbGF5ZXIuZGllKHRoaXMubGVmdFBsYXRmb3JtKVxuICAgICk7XG5cbiAgICB0aGlzLnVpLnRvZ2dsZUdhbWVPdmVyKHRydWUpO1xuICAgIHRoaXMuZ2FtZVBhdXNlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIG9uUGxhdGZvcm1MYW5kaW5nICgpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2NvcmU6dXBkYXRlJywge1xuICAgICAgZGV0YWlsOiB7IHNjb3JlOiArK3RoaXMuc2NvcmUgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5sZWZ0UGxhdGZvcm0gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICAgIHRoaXMucGxheWVyLmZsaXBYID0gdGhpcy5sZWZ0UGxhdGZvcm07XG5cbiAgICB0aGlzLmNhbWVyYS56b29tSW4odGhpcy5zY29yZSk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICB0aGlzLnBsYXRmb3JtQW5pbWF0aW9uLnN0b3AoKTtcbiAgICB0aGlzLmNyZWF0ZVBsYXRmb3JtKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBsYXRmb3JtQW5pbWF0aW9uICh0d2VlbjogVHdlZW5zLlR3ZWVuLCBwbGF0Zm9ybTogUGh5c2ljcy5BcmNhZGUuSW1hZ2UsIHRpbWluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgcGxhdGZvcm0ucmVmcmVzaEJvZHkoKTtcbiAgICBpZiAoIXRoaXMuYXV0b3BsYXlpbmcpIHJldHVybjtcblxuICAgIGNvbnN0IHByb2dyZXNzID0gdHdlZW4uZGF0YVswXS5wcm9ncmVzcyB8fCAwO1xuICAgIHByb2dyZXNzID49IHRpbWluZyAmJiB0aGlzLnBsYXllci5qdW1wKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc3RhcnQgKCk6IHZvaWQge1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMucGxheWVyLnJlc2V0KCk7XG5cbiAgICB0aGlzLnBsYXRmb3Jtcy5jbGVhcih0cnVlLCB0cnVlKTtcbiAgICB0aGlzLmNhbWVyYS5mb2xsb3codGhpcy5wbGF5ZXIpO1xuXG4gICAgdGhpcy5wbGF0Zm9ybUFuaW1hdGlvbi5zdG9wKCk7XG4gICAgdGhpcy5wbGF5ZXJSb3RhdGlvbi5zdG9wKCk7XG4gICAgdGhpcy5jcmVhdGVQbGF0Zm9ybSgpO1xuXG4gICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgLy8gRGVidWcgcHVycG9zZXMgb25seTpcbiAgcHJpdmF0ZSByZXNpemUgKCk6IHZvaWQge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgc3RvcmVzIGFzIFNUT1JFIH0gZnJvbSAnQEdhbWUvY29uZmlnLmpzb24nO1xuaW1wb3J0IHR5cGUgeyBTY2VuZSwgR2FtZU9iamVjdHMgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgY2xhbXAgfSBmcm9tICdAR2FtZS91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgcHJpdmF0ZSBkb3dubG9hZEJ1dHRvbiE6IEdhbWVPYmplY3RzLlNwcml0ZTtcbiAgcHJpdmF0ZSByZXN0YXJ0QnV0dG9uITogR2FtZU9iamVjdHMuU3ByaXRlO1xuXG4gIHByaXZhdGUgZG93bmxvYWRUZXh0ITogR2FtZU9iamVjdHMuVGV4dDtcbiAgcHJpdmF0ZSByZXN0YXJ0VGV4dCE6IEdhbWVPYmplY3RzLlRleHQ7XG5cbiAgcHJpdmF0ZSBnYW1lT3ZlclRleHQ6IEdhbWVPYmplY3RzLlRleHQ7XG4gIHByaXZhdGUgc3RhcnRUZXh0OiBHYW1lT2JqZWN0cy5UZXh0O1xuXG4gIHByaXZhdGUgcmVzZXRTY29yZUV2ZW50OiBDdXN0b21FdmVudDtcbiAgcHJpdmF0ZSBzaG93U2NvcmVFdmVudDogQ3VzdG9tRXZlbnQ7XG4gIHByaXZhdGUgcmVzdGFydEV2ZW50OiBDdXN0b21FdmVudDtcblxuICBwcml2YXRlIHN0b3JlVVJMOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yIChzY2VuZTogU2NlbmUpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHNjZW5lLnNjYWxlO1xuICAgIGNvbnN0IHRleHRTdHlsZSA9IHRoaXMuZ2V0U3R5bGUod2lkdGgpO1xuXG4gICAgY29uc3QgYnV0dG9uSGVpZ2h0ID0gaGVpZ2h0IC8gMi4wO1xuICAgIGNvbnN0IHRleHRIZWlnaHQgPSBoZWlnaHQgLyAzLjI7XG4gICAgY29uc3QgYnV0dG9uV2lkdGggPSB3aWR0aCAvIDI7XG5cbiAgICB0aGlzLnN0YXJ0VGV4dCA9IHNjZW5lLmFkZC50ZXh0KDAsIHRleHRIZWlnaHQsICdUYXAhJywgdGV4dFN0eWxlKTtcbiAgICB0aGlzLmdhbWVPdmVyVGV4dCA9IHNjZW5lLmFkZC50ZXh0KDAsIHRleHRIZWlnaHQsICdHYW1lIE92ZXIhJywgdGV4dFN0eWxlKTtcblxuICAgIHRoaXMuc3RvcmVVUkwgPSBzY2VuZS5zeXMuZ2FtZS5kZXZpY2Uub3MuaU9TID8gU1RPUkUuQXBwU3RvcmUgOiBTVE9SRS5QbGF5U3RvcmU7XG5cbiAgICB0aGlzLmNyZWF0ZURvd25sb2FkQnV0dG9uKHNjZW5lLCBidXR0b25XaWR0aCwgYnV0dG9uSGVpZ2h0KTtcbiAgICB0aGlzLmNyZWF0ZVJlc3RhcnRCdXR0b24oc2NlbmUsIGJ1dHRvbldpZHRoLCBidXR0b25IZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNldFNjb3JlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Njb3JlOnJlc2V0Jyk7XG4gICAgdGhpcy5zaG93U2NvcmVFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2NvcmU6c2hvdycpO1xuICAgIHRoaXMucmVzdGFydEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdnYW1lOnJlc3RhcnQnKTtcblxuICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyVGV4dC5kZXB0aCA9IDE7XG4gICAgdGhpcy5zdGFydFRleHQuZGVwdGggPSAxO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEb3dubG9hZEJ1dHRvbiAoc2NlbmU6IFNjZW5lLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZG93bmxvYWRUZXh0ID0gdGhpcy5jcmVhdGVCdXR0b25UZXh0KHNjZW5lLCAnRG93bmxvYWQnLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmRvd25sb2FkQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oc2NlbmUsIHdpZHRoICogMS41LCBoZWlnaHQpO1xuXG4gICAgdGhpcy5kb3dubG9hZEJ1dHRvbi5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgICAgdGhpcy5kb3dubG9hZEJ1dHRvbi5jbGVhclRpbnQoKTtcbiAgICAgIHdpbmRvdy5vcGVuKHRoaXMuc3RvcmVVUkwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSZXN0YXJ0QnV0dG9uIChzY2VuZTogU2NlbmUsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yZXN0YXJ0VGV4dCA9IHRoaXMuY3JlYXRlQnV0dG9uVGV4dChzY2VuZSwgJ1Jlc3RhcnQnLCB3aWR0aCAvIDEwMCAtIDEsIGhlaWdodCk7XG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oc2NlbmUsIHdpZHRoICogMC41LCBoZWlnaHQpO1xuXG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRoaXMucmVzZXRTY29yZUV2ZW50KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5yZXN0YXJ0RXZlbnQpO1xuXG4gICAgICB0aGlzLnJlc3RhcnRCdXR0b24uY2xlYXJUaW50KCk7XG4gICAgICB0aGlzLnRvZ2dsZUdhbWVPdmVyKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQnV0dG9uIChzY2VuZTogU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyKTogR2FtZU9iamVjdHMuU3ByaXRlIHtcbiAgICBjb25zdCBidXR0b24gPSBzY2VuZS5hZGQuc3ByaXRlKHgsIHksICdidXR0b24nKTtcblxuICAgIGJ1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PlxuICAgICAgYnV0dG9uLnNldFRpbnQoMHhmMmM0YjEpXG4gICAgKTtcblxuICAgIGJ1dHRvbi5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgIGJ1dHRvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgYnV0dG9uLmRlcHRoID0gMTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUJ1dHRvblRleHQgKHNjZW5lOiBTY2VuZSwgdGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IEdhbWVPYmplY3RzLlRleHQge1xuICAgIGNvbnN0IHdpZHRoID0gc2NlbmUuc2NhbGUud2lkdGggLyAyO1xuXG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IHNjZW5lLmFkZC50ZXh0KHgsIHkgLSAxMCwgdGV4dCwge1xuICAgICAgLi4udGhpcy5nZXRDb21tb25TdHlsZSgpLFxuICAgICAgZml4ZWRXaWR0aDogd2lkdGgsXG4gICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgZml4ZWRIZWlnaHQ6IHlcbiAgICB9KTtcblxuICAgIGJ1dHRvblRleHQudmlzaWJsZSA9IGZhbHNlO1xuICAgIGJ1dHRvblRleHQuZGVwdGggPSAyO1xuXG4gICAgcmV0dXJuIGJ1dHRvblRleHQ7XG4gIH1cblxuICBwcml2YXRlIGdldFN0eWxlICh3aWR0aDogbnVtYmVyKTogb2JqZWN0IHtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRGb250U2l6ZSh3aWR0aCkgKiAyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29tbW9uU3R5bGUoKSxcbiAgICAgIGZpeGVkV2lkdGg6IHdpZHRoICogMS4wMixcbiAgICAgIGZvbnRTaXplOiBgJHtzaXplfXB4YCxcbiAgICAgIGZpeGVkSGVpZ2h0OiBzaXplXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9udFNpemUgKHdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBjbGFtcCh3aWR0aCAvIDMwICogMiwgMjQsIDQ4KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tbW9uU3R5bGUgKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgIGZpbGw6ICcjZmZmZmZmJyxcblxuICAgICAgc2hhZG93OiB7XG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIG9mZnNldFg6IDIuNSxcbiAgICAgICAgb2Zmc2V0WTogMi41LFxuICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICBibHVyOiA1XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVHYW1lT3ZlciAodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZG93bmxvYWRCdXR0b24udmlzaWJsZSA9IHZpc2libGU7XG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uLnZpc2libGUgPSB2aXNpYmxlO1xuXG4gICAgdGhpcy5nYW1lT3ZlclRleHQudmlzaWJsZSA9IHZpc2libGU7XG5cbiAgICB0aGlzLmRvd25sb2FkVGV4dC52aXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLnJlc3RhcnRUZXh0LnZpc2libGUgPSB2aXNpYmxlO1xuICB9XG5cbiAgcHVibGljIGhpZGVTdGFydFRleHQgKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5zaG93U2NvcmVFdmVudCk7XG4gICAgdGhpcy5zdGFydFRleHQudmlzaWJsZSA9IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNYXRoIGFzIE1hdGhVdGlscyB9IGZyb20gJ3BoYXNlcic7XG5cbnR5cGUgRWFzaW5nID0gKHY6IG51bWJlciwgb3ZlcnNob290PzogbnVtYmVyKSA9PiBudW1iZXI7XG5cbmNvbnN0IEVBU0lOR1MgPSBbLi4ubmV3IE1hcChbXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkxpbmVhciwgICAgICAgICAgMC41XSxcblxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWFkcmF0aWMuSW4sICAgIDAuNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1YWRyYXRpYy5PdXQsICAgMC4zNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1YWRyYXRpYy5Jbk91dCwgMC4zNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuQ3ViaWMuSW4sICAgICAgICAwLjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5DdWJpYy5PdXQsICAgICAgIDAuMjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5DdWJpYy5Jbk91dCwgICAgIDAuMzVdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1YXJ0aWMuSW4sICAgICAgMC41XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhcnRpYy5PdXQsICAgICAwLjJdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWFydGljLkluT3V0LCAgIDAuM10sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuUXVpbnRpYy5JbiwgICAgICAwLjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWludGljLk91dCwgICAgIDAuMDFdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWludGljLkluT3V0LCAgIDAuMjVdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlNpbmUuSW4sICAgICAgICAgMC41XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuU2luZS5PdXQsICAgICAgICAwLjM1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuU2luZS5Jbk91dCwgICAgICAwLjRdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkV4cG8uSW4sICAgICAgICAgMC43NV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkV4cG8uT3V0LCAgICAgICAgMC4xXSxcbiAgW01hdGhVdGlscy5FYXNpbmcuRXhwby5Jbk91dCwgICAgICAwLjI1XSxcblxuICBbTWF0aFV0aWxzLkVhc2luZy5DaXJjdWxhci5JbiwgICAgIDAuNzVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5DaXJjdWxhci5PdXQsICAgIDAuMjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5DaXJjdWxhci5Jbk91dCwgIDAuMzVdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkJhY2suSW4sICAgICAgICAgMC43NV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkJhY2suT3V0LCAgICAgICAgMC4xXSxcbiAgW01hdGhVdGlscy5FYXNpbmcuQmFjay5Jbk91dCwgICAgICAwLjRdXG5dKSBhcyB1bmtub3duIGFzIFtFYXNpbmcsIG51bWJlcl1bXV07XG5cbmV4cG9ydCBjb25zdCBjbGFtcCA9ICh2YWx1ZTogbnVtYmVyLCBtaW4gPSAwLCBtYXggPSAxKTogbnVtYmVyID0+XG4gIE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpO1xuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PlxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG5leHBvcnQgY29uc3QgcmFuZG9tRWFzaW5nID0gKCk6IFtFYXNpbmcsIG51bWJlcl0gPT5cbiAgRUFTSU5HU1tyYW5kb21JbnQoMCwgRUFTSU5HUy5sZW5ndGggLSAxKV07XG4iLCJpbXBvcnQgeyBHYW1lLCBTY2FsZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgU2NlbmUgZnJvbSAnQEdhbWUvU2NlbmUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpIGFzIEhUTUxTcGFuRWxlbWVudDtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY29yZTpzaG93JywgKCkgPT4ge1xuICAgIHNjb3JlLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgfSwgZmFsc2UpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njb3JlOnVwZGF0ZScsIGV2ZW50ID0+IHtcbiAgICBzY29yZS50ZXh0Q29udGVudCA9IChldmVudCBhcyBDdXN0b21FdmVudCkuZGV0YWlsLnNjb3JlO1xuICB9LCBmYWxzZSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2NvcmU6cmVzZXQnLCAoKSA9PiB7XG4gICAgc2NvcmUudGV4dENvbnRlbnQgPSAnMCc7XG4gIH0sIGZhbHNlKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKHtcbiAgdGl0bGU6ICdJbm5vdmVjcyB8IFRlc3QgYXNzaWdubWVudCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyMxNjlBQzUnLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICBzY2VuZTogU2NlbmUsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuXG4gICAgYXJjYWRlOiB7XG4gICAgICBncmF2aXR5OiB7IHk6IDk4MSB9LFxuICAgICAgZGVidWc6ICFQUk9EVUNUSU9OXG4gICAgfVxuICB9LFxuXG4gIHNjYWxlOiB7XG4gICAgbW9kZTogU2NhbGUuUkVTSVpFLFxuICAgIHBhcmVudDogJ2dhbWUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9