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
/* harmony import */ var _scenes_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Main */ "./src/scenes/Main.ts");


var game = new phaser__WEBPACK_IMPORTED_MODULE_0__["Game"]({
    title: 'Innovecs | Test assignment',
    backgroundColor: '#169AC5',
    parent: 'container',
    type: Phaser.AUTO,
    scene: _scenes_Main__WEBPACK_IMPORTED_MODULE_1__["default"],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 981 },
            debug: true
        }
    },
    scale: {
        height: 640,
        width: 360
    }
});
window.addEventListener('resize', function () {
    game.scale.refresh();
});


/***/ }),

/***/ "./src/scenes/Main.ts":
/*!****************************!*\
  !*** ./src/scenes/Main.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var Main = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Main, _super);
    function Main() {
        var _this = _super.call(this, { key: 'Main' }) || this;
        _this.leftPlatform = Math.random() < 0.5;
        _this.leftPlatformPosition = [-96, -32];
        _this.rightPlatformPosition = [32, 96];
        _this.gameOver = false;
        _this.jumping = false;
        _this.score = 0;
        return _this;
    }
    Main.prototype.preload = function () {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('brick', 'assets/brick.png');
        this.load.spritesheet('mario', 'assets/mario.png', {
            frameHeight: 108,
            frameWidth: 70
        });
    };
    Main.prototype.create = function () {
        var ground = this.createEnvironment();
        this.player = this.createPlayer();
        this.platforms = this.physics.add.staticGroup();
        this.createPlatform();
        this.physics.add.collider(this.player, ground);
        this.physics.add.collider(this.player, this.platforms, this.onPlatformLanding, undefined, this);
    };
    Main.prototype.onPlatformLanding = function () {
        var platforms = this.platforms.children.size;
        var hit = this.physics.world.overlap(this.player, [
            this.platforms.children.entries[platforms - 2],
            this.platforms.children.entries[platforms - 1]
        ]);
        // console.log(hit);
        if (hit || !this.jumping)
            return;
        this.platformAnimation.stop();
        this.jumping = false;
        this.leftPlatform = Math.random() < 0.5;
        this.player.flipX = this.leftPlatform;
        if (++this.score === 4) {
            this.cameras.main.startFollow(this.player);
        }
        this.createPlatform();
    };
    Main.prototype.createEnvironment = function () {
        var skyRatio = 800 / 600;
        var _a = this.scale, width = _a.width, height = _a.height;
        var sky = this.add.image(width / 2, height / 2, 'sky');
        var skyHeight = height / sky.height;
        var skyWidth = skyHeight * skyRatio;
        sky.setScale(skyWidth, skyHeight);
        return this.physics.add.staticGroup({
            setXY: { x: 32, y: height - 32, stepX: 64 },
            repeat: Math.floor(width / 64),
            key: 'brick'
        });
    };
    Main.prototype.createPlayer = function () {
        var _this = this;
        var player = this.physics.add.sprite(180, 522, 'mario');
        this.anims.create({
            frames: this.anims.generateFrameNumbers('mario', { start: 0, end: 6 }),
            frameRate: 15,
            key: 'jump'
        });
        this.input.on('pointerup', function () {
            if (player.body.touching.down) {
                player.anims.play('jump');
                player.setVelocityY(-450);
                _this.jumping = true;
            }
        });
        return player;
    };
    Main.prototype.createPlatform = function () {
        var _a = this.scale, width = _a.width, height = _a.height;
        var x = this.leftPlatform ? 0 : width;
        var y = height + (-96 - this.score * 64);
        var platformPosition = this.leftPlatform
            ? this.leftPlatformPosition : this.rightPlatformPosition;
        // this.platforms.create(x + platformPosition[0], y, 'brick');
        // this.platforms.create(x + platformPosition[1], y, 'brick');
        console.log(this.score);
        var platform = [
            this.physics.add.staticImage(x + platformPosition[0], y, 'brick'),
            this.physics.add.staticImage(x + platformPosition[1], y, 'brick')
        ];
        this.platforms.add(platform[0], true);
        this.platforms.add(platform[1], true);
        var destination = (this.leftPlatform ? '+' : '-') + "= 244";
        this.platformAnimation = this.add.tween({
            props: { x: { value: destination } },
            targets: platform,
            ease: 'Quartic.In',
            duration: 2500,
            onUpdate: function (tween, brick) { return brick.refreshBody(); } // ,
            // onComplete: () => {
            //   // if not dead
            //   this.leftPlatform = Math.random() < 0.5;
            //   this.player.flipX = this.leftPlatform;
            //   if (++this.score === 4) {
            //     this.cameras.main.startFollow(this.player);
            //   }
            //   this.createPlatform();
            // }
        });
    };
    Main.prototype.update = function (time, delta) {
        // const platforms = this.platforms.children.size;
        // const hit = this.physics.world.overlap(this.player, [
        //   this.platforms.children.entries[platforms - 2],
        //   this.platforms.children.entries[platforms - 1]
        // ]);
        // console.log(hit);
    };
    return Main;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));
/* harmony default export */ __webpack_exports__["default"] = (Main);
;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixF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QUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXRDLElBQU0sV0FBVyxHQUFHLENBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQU8sQ0FBQztRQUU1RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFDO1lBQ2xDLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLElBQUksRUFBRSxZQUFZO1lBQ2xCLFFBQVEsRUFBRSxJQUFJO1lBRWQsUUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUssSUFBSyxZQUFLLENBQUMsV0FBVyxFQUFFLEVBQW5CLENBQW1CLENBQUMsSUFBSTtZQUVwRCxzQkFBc0I7WUFDdEIsbUJBQW1CO1lBQ25CLDZDQUE2QztZQUM3QywyQ0FBMkM7WUFFM0MsOEJBQThCO1lBQzlCLGtEQUFrRDtZQUNsRCxNQUFNO1lBRU4sMkJBQTJCO1lBQzNCLElBQUk7U0FDTCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUsscUJBQU0sR0FBYixVQUFlLElBQVksRUFBRSxLQUFhO1FBQ3ZDLGtEQUFrRDtRQUVsRCx3REFBd0Q7UUFDeEQsb0RBQW9EO1FBQ3BELG1EQUFtRDtRQUNuRCxNQUFNO1FBRU4sb0JBQW9CO0lBQ3RCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxDQTFKaUMsNENBQUssR0EwSnRDOztBQUFBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9ycy5nYW1lXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdCBzeW5jIF5cXFxcLlxcXFwvbG9nJFwiOyIsImltcG9ydCB7IEdhbWUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9zY2VuZXMvTWFpbic7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IEdhbWUoe1xuICB0aXRsZTogJ0lubm92ZWNzIHwgVGVzdCBhc3NpZ25tZW50JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzE2OUFDNScsXG5cbiAgcGFyZW50OiAnY29udGFpbmVyJyxcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHNjZW5lOiBNYWluLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcblxuICAgIGFyY2FkZToge1xuICAgICAgZ3Jhdml0eTogeyB5OiA5ODEgfSxcbiAgICAgIGRlYnVnOiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIHNjYWxlOiB7XG4gICAgaGVpZ2h0OiA2NDAsXG4gICAgd2lkdGg6IDM2MFxuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XG59KTtcbiIsImltcG9ydCB7IFNjZW5lLCBQaHlzaWNzLCBUd2VlbnMsIFR5cGVzIH0gZnJvbSAncGhhc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFNjZW5lIHtcbiAgcHJpdmF0ZSBwbGF0Zm9ybXMhOiBQaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cDtcbiAgcHJpdmF0ZSBwbGF0Zm9ybUFuaW1hdGlvbiE6IFR3ZWVucy5Ud2VlbjtcbiAgcHJpdmF0ZSBwbGF5ZXIhOiBQaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG5cbiAgcHJpdmF0ZSBsZWZ0UGxhdGZvcm0gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICBwcml2YXRlIGxlZnRQbGF0Zm9ybVBvc2l0aW9uID0gWy05NiwgLTMyXTtcbiAgcHJpdmF0ZSByaWdodFBsYXRmb3JtUG9zaXRpb24gPSBbMzIsIDk2XTtcblxuICBwcml2YXRlIGdhbWVPdmVyID0gZmFsc2U7XG4gIHByaXZhdGUganVtcGluZyA9IGZhbHNlO1xuICBwcml2YXRlIHNjb3JlID0gMDtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKHsga2V5OiAnTWFpbicgfSk7XG5cdH1cblxuXHRwcml2YXRlIHByZWxvYWQgKCk6IHZvaWQge1xuXHRcdHRoaXMubG9hZC5pbWFnZSgnc2t5JywgJ2Fzc2V0cy9za3kucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdicmljaycsICdhc3NldHMvYnJpY2sucG5nJyk7XG5cbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ21hcmlvJywgJ2Fzc2V0cy9tYXJpby5wbmcnLCB7XG4gICAgICBmcmFtZUhlaWdodDogMTA4LFxuICAgICAgZnJhbWVXaWR0aDogNzBcbiAgICB9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlICgpOiB2b2lkIHtcbiAgICBjb25zdCBncm91bmQgPSB0aGlzLmNyZWF0ZUVudmlyb25tZW50KCk7XG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLmNyZWF0ZVBsYXllcigpO1xuXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG4gICAgdGhpcy5jcmVhdGVQbGF0Zm9ybSgpO1xuXG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgZ3JvdW5kKTtcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyLCB0aGlzLnBsYXRmb3JtcywgdGhpcy5vblBsYXRmb3JtTGFuZGluZywgdW5kZWZpbmVkLCB0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgb25QbGF0Zm9ybUxhbmRpbmcgKCk6IHZvaWQge1xuICAgIGNvbnN0IHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLnNpemU7XG5cbiAgICBjb25zdCBoaXQgPSB0aGlzLnBoeXNpY3Mud29ybGQub3ZlcmxhcCh0aGlzLnBsYXllciwgW1xuICAgICAgdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uZW50cmllc1twbGF0Zm9ybXMgLSAyXSxcbiAgICAgIHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLmVudHJpZXNbcGxhdGZvcm1zIC0gMV1cbiAgICBdKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGhpdCk7XG5cbiAgICBpZiAoaGl0IHx8ICF0aGlzLmp1bXBpbmcpIHJldHVybjtcbiAgICB0aGlzLnBsYXRmb3JtQW5pbWF0aW9uLnN0b3AoKTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMubGVmdFBsYXRmb3JtID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgICB0aGlzLnBsYXllci5mbGlwWCA9IHRoaXMubGVmdFBsYXRmb3JtO1xuXG4gICAgaWYgKCsrdGhpcy5zY29yZSA9PT0gNCkge1xuICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc3RhcnRGb2xsb3codGhpcy5wbGF5ZXIpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlUGxhdGZvcm0oKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRW52aXJvbm1lbnQgKCk6IFBoeXNpY3MuQXJjYWRlLlN0YXRpY0dyb3VwIHtcbiAgICBjb25zdCBza3lSYXRpbyA9IDgwMCAvIDYwMDtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc2NhbGU7XG4gICAgY29uc3Qgc2t5ID0gdGhpcy5hZGQuaW1hZ2Uod2lkdGggLyAyLCBoZWlnaHQgLyAyLCAnc2t5Jyk7XG5cbiAgICBjb25zdCBza3lIZWlnaHQgPSBoZWlnaHQgLyBza3kuaGVpZ2h0O1xuICAgIGNvbnN0IHNreVdpZHRoID0gc2t5SGVpZ2h0ICogc2t5UmF0aW87XG5cbiAgICBza3kuc2V0U2NhbGUoc2t5V2lkdGgsIHNreUhlaWdodCk7XG5cbiAgICByZXR1cm4gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCh7XG4gICAgICBzZXRYWTogeyB4OiAzMiwgeTogaGVpZ2h0IC0gMzIsIHN0ZXBYOiA2NCB9LFxuICAgICAgcmVwZWF0OiBNYXRoLmZsb29yKHdpZHRoIC8gNjQpLFxuICAgICAga2V5OiAnYnJpY2snXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBsYXllciAoKTogUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSgxODAsIDUyMiwgJ21hcmlvJyk7XG5cbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ21hcmlvJywgeyBzdGFydDogMCwgZW5kOiA2IH0pLFxuICAgICAgZnJhbWVSYXRlOiAxNSxcbiAgICAgIGtleTogJ2p1bXAnXG4gICAgfSk7XG5cbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICBpZiAocGxheWVyLmJvZHkudG91Y2hpbmcuZG93bikge1xuICAgICAgICBwbGF5ZXIuYW5pbXMucGxheSgnanVtcCcpO1xuICAgICAgICBwbGF5ZXIuc2V0VmVsb2NpdHlZKC00NTApO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBsYXllcjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUGxhdGZvcm0gKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zY2FsZTtcbiAgICBjb25zdCB4ID0gdGhpcy5sZWZ0UGxhdGZvcm0gPyAwIDogd2lkdGg7XG4gICAgY29uc3QgeSA9IGhlaWdodCArICgtOTYgLSB0aGlzLnNjb3JlICogNjQpO1xuXG4gICAgY29uc3QgcGxhdGZvcm1Qb3NpdGlvbiA9IHRoaXMubGVmdFBsYXRmb3JtXG4gICAgICA/IHRoaXMubGVmdFBsYXRmb3JtUG9zaXRpb24gOiB0aGlzLnJpZ2h0UGxhdGZvcm1Qb3NpdGlvbjtcblxuICAgIC8vIHRoaXMucGxhdGZvcm1zLmNyZWF0ZSh4ICsgcGxhdGZvcm1Qb3NpdGlvblswXSwgeSwgJ2JyaWNrJyk7XG4gICAgLy8gdGhpcy5wbGF0Zm9ybXMuY3JlYXRlKHggKyBwbGF0Zm9ybVBvc2l0aW9uWzFdLCB5LCAnYnJpY2snKTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2NvcmUpO1xuXG4gICAgY29uc3QgcGxhdGZvcm0gPSBbXG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0ltYWdlKHggKyBwbGF0Zm9ybVBvc2l0aW9uWzBdLCB5LCAnYnJpY2snKSxcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQuc3RhdGljSW1hZ2UoeCArIHBsYXRmb3JtUG9zaXRpb25bMV0sIHksICdicmljaycpXG4gICAgXTtcblxuICAgIHRoaXMucGxhdGZvcm1zLmFkZChwbGF0Zm9ybVswXSwgdHJ1ZSk7XG4gICAgdGhpcy5wbGF0Zm9ybXMuYWRkKHBsYXRmb3JtWzFdLCB0cnVlKTtcblxuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gYCR7dGhpcy5sZWZ0UGxhdGZvcm0gPyAnKycgOiAnLSd9PSAyNDRgO1xuXG4gICAgdGhpcy5wbGF0Zm9ybUFuaW1hdGlvbiA9IHRoaXMuYWRkLnR3ZWVuKHtcbiAgICAgIHByb3BzOiB7eDogeyB2YWx1ZTogZGVzdGluYXRpb24gfX0sXG4gICAgICB0YXJnZXRzOiBwbGF0Zm9ybSxcbiAgICAgIGVhc2U6ICdRdWFydGljLkluJywgLy8gaHR0cHM6Ly9zb2xlLmdpdGh1Yi5pby90d2Vlbi5qcy9leGFtcGxlcy8wM19ncmFwaHMuaHRtbFxuICAgICAgZHVyYXRpb246IDI1MDAsXG5cbiAgICAgIG9uVXBkYXRlOiAodHdlZW4sIGJyaWNrKSA9PiBicmljay5yZWZyZXNoQm9keSgpIC8vICxcblxuICAgICAgLy8gb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgLy8gICAvLyBpZiBub3QgZGVhZFxuICAgICAgLy8gICB0aGlzLmxlZnRQbGF0Zm9ybSA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gICAgICAvLyAgIHRoaXMucGxheWVyLmZsaXBYID0gdGhpcy5sZWZ0UGxhdGZvcm07XG5cbiAgICAgIC8vICAgaWYgKCsrdGhpcy5zY29yZSA9PT0gNCkge1xuICAgICAgLy8gICAgIHRoaXMuY2FtZXJhcy5tYWluLnN0YXJ0Rm9sbG93KHRoaXMucGxheWVyKTtcbiAgICAgIC8vICAgfVxuXG4gICAgICAvLyAgIHRoaXMuY3JlYXRlUGxhdGZvcm0oKTtcbiAgICAgIC8vIH1cbiAgICB9KTtcbiAgfVxuXG5cdHB1YmxpYyB1cGRhdGUgKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIC8vIGNvbnN0IHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLnNpemU7XG5cbiAgICAvLyBjb25zdCBoaXQgPSB0aGlzLnBoeXNpY3Mud29ybGQub3ZlcmxhcCh0aGlzLnBsYXllciwgW1xuICAgIC8vICAgdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uZW50cmllc1twbGF0Zm9ybXMgLSAyXSxcbiAgICAvLyAgIHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLmVudHJpZXNbcGxhdGZvcm1zIC0gMV1cbiAgICAvLyBdKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGhpdCk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9