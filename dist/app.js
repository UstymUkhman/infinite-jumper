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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.json */ "./src/scenes/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/scenes/config.json", 1);




var Main = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Main, _super);
    function Main() {
        var _this = _super.call(this, { key: 'Main' }) || this;
        _this.platformTargetPosition = _config_json__WEBPACK_IMPORTED_MODULE_3__.platform.width / 2;
        _this.leftPlatform = Math.random() < 0.5;
        _this.autoplaying = false;
        _this.gameOver = false;
        _this.jumping = false;
        _this.halfWidth = 0;
        _this.score = 0;
        return _this;
    }
    Main.prototype.preload = function () {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('brick', 'assets/brick.png');
        this.load.spritesheet('mario', 'assets/mario.png', {
            frameHeight: _config_json__WEBPACK_IMPORTED_MODULE_3__.player.height,
            frameWidth: _config_json__WEBPACK_IMPORTED_MODULE_3__.player.width
        });
    };
    Main.prototype.create = function () {
        this.createSky();
        this.halfWidth = this.scale.width / 2;
        var ground = this.createGround();
        this.player = this.createPlayer();
        this.addInputEvents();
        this.followPlayer();
        this.platforms = this.physics.add.staticGroup();
        this.createPlatform();
        this.physics.add.collider(this.player, ground);
        this.physics.add.collider(this.player, this.platforms, this.onPlatformLanding, undefined, this);
    };
    Main.prototype.followPlayer = function () {
        var playerHalf = _config_json__WEBPACK_IMPORTED_MODULE_3__.player.height / 2;
        var groundHeight = _config_json__WEBPACK_IMPORTED_MODULE_3__.platform.height * 2;
        this.cameras.main.startFollow(this.player, false, 1, 0.1, 0, this.scale.height / 2 - (groundHeight + playerHalf));
    };
    Main.prototype.onPlatformLanding = function (player, platform) {
        var lastPlatform = this.platforms.children.size - 1;
        var hit = this.physics.world.overlap(this.player, this.platforms.children.entries[lastPlatform]);
        if (hit) {
            this.player.angle = this.leftPlatform ? 90 : -90;
            var velocity = this.leftPlatform ? 250 : -250;
            this.cameras.main.stopFollow();
            this.player.flipX = this.leftPlatform;
            this.player.setCollideWorldBounds(true);
            this.player.setVelocityX(velocity);
            this.player.setOffset(0, -30);
            console.log('Game Over!');
            return;
        }
        if (!this.jumping)
            return;
        this.jumping = false;
        if (platform.getData('index') === lastPlatform) {
            this.leftPlatform = Math.random() < 0.5;
            this.player.flipX = this.leftPlatform;
            this.platformAnimation.stop();
            this.score++;
            this.createPlatform();
        }
    };
    Main.prototype.createSky = function () {
        var sky = this.add.image(this.halfWidth, this.scale.height / 2, 'sky');
        var skyRatio = _config_json__WEBPACK_IMPORTED_MODULE_3__.background.width / _config_json__WEBPACK_IMPORTED_MODULE_3__.background.height;
        var skyHeight = this.scale.height / sky.height;
        var skyWidth = skyHeight * skyRatio;
        sky.setScale(skyWidth, skyHeight);
    };
    Main.prototype.createGround = function () {
        var ground = this.physics.add.staticGroup();
        var _a = _config_json__WEBPACK_IMPORTED_MODULE_3__.platform, width = _a.width, height = _a.height;
        var halfHeight = height / 2;
        var VERTICAL_PLATFORMS = 2;
        var HORIZONTAL_PLATFORMS = Math.ceil(this.scale.width / width);
        for (var row = 0; row < VERTICAL_PLATFORMS; row++) {
            for (var col = 0; col < HORIZONTAL_PLATFORMS; col++) {
                var x = col * width + height;
                var y = this.scale.height - (row * height + halfHeight);
                ground.add(this.physics.add.staticImage(x, y, 'brick'), true);
            }
        }
        return ground;
    };
    Main.prototype.createPlayer = function () {
        var offsetBottom = _config_json__WEBPACK_IMPORTED_MODULE_3__.platform.width + _config_json__WEBPACK_IMPORTED_MODULE_3__.player.height / 2;
        this.anims.create({
            frames: this.anims.generateFrameNumbers('mario', {
                start: 0, end: _config_json__WEBPACK_IMPORTED_MODULE_3__.player.frames
            }),
            frameRate: 15,
            key: 'jump'
        });
        return this.physics.add.sprite(this.halfWidth, this.scale.height - offsetBottom, 'mario');
    };
    Main.prototype.addInputEvents = function () {
        var _this = this;
        this.input.on('pointerup', function () {
            if (_this.player.body.touching.down) {
                _this.player.setVelocityY(-500.0);
                _this.player.anims.play('jump');
                _this.jumping = true;
            }
        });
    };
    Main.prototype.createPlatform = function () {
        var _a = this.scale, width = _a.width, height = _a.height;
        var x = this.leftPlatform ? 0 : width;
        var platformHeight = _config_json__WEBPACK_IMPORTED_MODULE_3__.platform.height;
        var minDuration = 1250; // this.autoplaying ? 1250 : 500;
        var y = height - platformHeight * 2.5 - this.score * platformHeight;
        var platformPosition = this.leftPlatform
            ? -this.platformTargetPosition : this.platformTargetPosition;
        var platform = this.physics.add.staticImage(x + platformPosition, y, 'brick');
        var destination = (this.leftPlatform ? '+' : '-') + "= 244";
        platform.setData('index', this.platforms.children.size);
        this.platforms.add(platform, true);
        this.platformAnimation = this.add.tween({
            onUpdate: this.updatePlatformAnimation.bind(this),
            duration: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(minDuration, 2500),
            props: { x: { value: destination } },
            delay: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(0, 1000),
            ease: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["randomEasing"])(),
            targets: platform
        });
    };
    Main.prototype.updatePlatformAnimation = function (tween, platform) {
        platform.refreshBody();
        if (!this.autoplaying)
            return;
        var offset = this.halfWidth + (this.leftPlatform ? -250 : 250);
        if (this.leftPlatform && platform.x >= offset) {
            this.playerJump();
        }
        else if (platform.x <= offset) {
            this.playerJump();
        }
    };
    Main.prototype.playerJump = function () {
        if (this.player.body.touching.down) {
            this.player.setVelocityY(-500.0);
            this.player.anims.play('jump');
            this.jumping = true;
        }
    };
    Main.prototype.update = function (time, delta) {
    };
    return Main;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));
/* harmony default export */ __webpack_exports__["default"] = (Main);
;


/***/ }),

/***/ "./src/scenes/config.json":
/*!********************************!*\
  !*** ./src/scenes/config.json ***!
  \********************************/
/*! exports provided: player, platform, background, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"player\":{\"width\":70,\"height\":108,\"frames\":7},\"platform\":{\"width\":128,\"height\":64},\"background\":{\"width\":800,\"height\":600}}");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: randomInt, randomEasing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomEasing", function() { return randomEasing; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
// https://stackoverflow.com/questions/56289506/phaser-3-how-to-create-smooth-zooming-effect
// https://photonstorm.github.io/phaser3-docs/Phaser.Cameras.Scene2D.Effects.Zoom.html
// https://github.com/photonstorm/phaser/blob/v3.22.0/src/math/easing/EaseMap.js
// https://github.com/photonstorm/phaser/blob/v3.22.0/src/math/easing/index.js
// https://github.com/photonstorm/phaser/blob/v3.22.0/src/math/RandomXY.js
// https://phaser.io/examples/v3/view/camera/follow-zoom
// https://samme.github.io/phaser-examples-mirror/camera/zooming%20the%20camera.html
// https://github.com/photonstorm/phaser3-examples/blob/master/public/src/camera/follow%20zoom.js

var EASINGS = [
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Linear,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Quadratic.In,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Quadratic.Out,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Quadratic.InOut,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Cubic.In,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Cubic.Out,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Cubic.InOut,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Quartic.In,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Quartic.Out,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Quartic.InOut,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Quintic.In,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Quintic.Out,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Quintic.InOut,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Sine.In,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Sine.Out,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Sine.InOut,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Expo.In,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Expo.Out,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Expo.InOut,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Circular.In,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Circular.Out,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Circular.InOut,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Back.In,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Back.Out,
    phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Easing.Back.InOut
];
var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var randomEasing = function () {
    return EASINGS[randomInt(0, EASINGS.length - 1)];
};


/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8081 ./src/index.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\ustym.ukhman\Documents\Projects\innovecs\node_modules\webpack-dev-server\client\index.js?http://localhost:8081 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8081");
module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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QU8sQ0FBQyxLQUFLO0lBRTlCLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3hCLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO0lBQ3pCLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO0lBRTNCLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3hCLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO0lBQ3pCLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO0lBRTNCLDJDQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQzVCLDJDQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0lBQzdCLDJDQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLO0lBRS9CLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3hCLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO0lBQ3pCLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO0NBQzVCLENBQUM7QUFFSyxJQUFNLFNBQVMsR0FBRyxVQUFDLEdBQVcsRUFBRSxHQUFXO0lBQ2hELFdBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7QUFBakQsQ0FBaUQsQ0FBQztBQUU3QyxJQUFNLFlBQVksR0FBRztJQUMxQixjQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQXpDLENBQXlDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9ycy5nYW1lXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdCBzeW5jIF5cXFxcLlxcXFwvbG9nJFwiOyIsImltcG9ydCB7IEdhbWUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9zY2VuZXMvTWFpbic7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IEdhbWUoe1xuICB0aXRsZTogJ0lubm92ZWNzIHwgVGVzdCBhc3NpZ25tZW50JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzE2OUFDNScsXG5cbiAgcGFyZW50OiAnY29udGFpbmVyJyxcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHNjZW5lOiBNYWluLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcblxuICAgIGFyY2FkZToge1xuICAgICAgZ3Jhdml0eTogeyB5OiA5ODEgfSxcbiAgICAgIGRlYnVnOiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIHNjYWxlOiB7XG4gICAgaGVpZ2h0OiA2NDAsXG4gICAgd2lkdGg6IDM2MFxuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XG59KTtcbiIsImltcG9ydCB7IFNjZW5lLCBQaHlzaWNzLCBHYW1lT2JqZWN0cywgVHdlZW5zIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IHJhbmRvbUludCwgcmFuZG9tRWFzaW5nIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuL2NvbmZpZy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFNjZW5lIHtcbiAgcHJpdmF0ZSBwbGF0Zm9ybVRhcmdldFBvc2l0aW9uID0gQ09ORklHLnBsYXRmb3JtLndpZHRoIC8gMjtcbiAgcHJpdmF0ZSBsZWZ0UGxhdGZvcm0gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuXG4gIHByaXZhdGUgcGxhdGZvcm1zITogUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXA7XG4gIHByaXZhdGUgcGxhdGZvcm1BbmltYXRpb24hOiBUd2VlbnMuVHdlZW47XG4gIHByaXZhdGUgcGxheWVyITogUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuXG4gIHByaXZhdGUgYXV0b3BsYXlpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBnYW1lT3ZlciA9IGZhbHNlO1xuICBwcml2YXRlIGp1bXBpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIGhhbGZXaWR0aCA9IDA7XG4gIHByaXZhdGUgc2NvcmUgPSAwO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoeyBrZXk6ICdNYWluJyB9KTtcblx0fVxuXG5cdHByaXZhdGUgcHJlbG9hZCAoKTogdm9pZCB7XG5cdFx0dGhpcy5sb2FkLmltYWdlKCdza3knLCAnYXNzZXRzL3NreS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JyaWNrJywgJ2Fzc2V0cy9icmljay5wbmcnKTtcblxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnbWFyaW8nLCAnYXNzZXRzL21hcmlvLnBuZycsIHtcbiAgICAgIGZyYW1lSGVpZ2h0OiBDT05GSUcucGxheWVyLmhlaWdodCxcbiAgICAgIGZyYW1lV2lkdGg6IENPTkZJRy5wbGF5ZXIud2lkdGhcbiAgICB9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlICgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVNreSgpO1xuICAgIHRoaXMuaGFsZldpZHRoID0gdGhpcy5zY2FsZS53aWR0aCAvIDI7XG5cbiAgICBjb25zdCBncm91bmQgPSB0aGlzLmNyZWF0ZUdyb3VuZCgpO1xuICAgIHRoaXMucGxheWVyID0gdGhpcy5jcmVhdGVQbGF5ZXIoKTtcblxuICAgIHRoaXMuYWRkSW5wdXRFdmVudHMoKTtcbiAgICB0aGlzLmZvbGxvd1BsYXllcigpO1xuXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG4gICAgdGhpcy5jcmVhdGVQbGF0Zm9ybSgpO1xuXG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgZ3JvdW5kKTtcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyLCB0aGlzLnBsYXRmb3JtcywgdGhpcy5vblBsYXRmb3JtTGFuZGluZywgdW5kZWZpbmVkLCB0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9sbG93UGxheWVyICgpOiB2b2lkIHtcbiAgICBjb25zdCBwbGF5ZXJIYWxmID0gQ09ORklHLnBsYXllci5oZWlnaHQgLyAyO1xuICAgIGNvbnN0IGdyb3VuZEhlaWdodCA9IENPTkZJRy5wbGF0Zm9ybS5oZWlnaHQgKiAyO1xuXG4gICAgdGhpcy5jYW1lcmFzLm1haW4uc3RhcnRGb2xsb3coXG4gICAgICB0aGlzLnBsYXllciwgZmFsc2UsIDEsIDAuMSwgMCxcbiAgICAgIHRoaXMuc2NhbGUuaGVpZ2h0IC8gMiAtIChncm91bmRIZWlnaHQgKyBwbGF5ZXJIYWxmKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uUGxhdGZvcm1MYW5kaW5nIChwbGF5ZXI6IEdhbWVPYmplY3RzLkdhbWVPYmplY3QsIHBsYXRmb3JtOiBHYW1lT2JqZWN0cy5HYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3QgbGFzdFBsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uc2l6ZSAtIDE7XG5cbiAgICBjb25zdCBoaXQgPSB0aGlzLnBoeXNpY3Mud29ybGQub3ZlcmxhcCh0aGlzLnBsYXllcixcbiAgICAgIHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLmVudHJpZXNbbGFzdFBsYXRmb3JtXVxuICAgICk7XG5cbiAgICBpZiAoaGl0KSB7XG4gICAgICB0aGlzLnBsYXllci5hbmdsZSA9IHRoaXMubGVmdFBsYXRmb3JtID8gOTAgOiAtOTA7XG5cblxuXG4gICAgICBjb25zdCB2ZWxvY2l0eSA9IHRoaXMubGVmdFBsYXRmb3JtID8gMjUwIDogLTI1MDtcbiAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnN0b3BGb2xsb3coKTtcblxuICAgICAgdGhpcy5wbGF5ZXIuZmxpcFggPSB0aGlzLmxlZnRQbGF0Zm9ybTtcblxuICAgICAgdGhpcy5wbGF5ZXIuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xuICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlYKHZlbG9jaXR5KTtcbiAgICAgIHRoaXMucGxheWVyLnNldE9mZnNldCgwLCAtMzApO1xuICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlciEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuanVtcGluZykgcmV0dXJuO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHBsYXRmb3JtLmdldERhdGEoJ2luZGV4JykgPT09IGxhc3RQbGF0Zm9ybSkge1xuICAgICAgdGhpcy5sZWZ0UGxhdGZvcm0gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICAgICAgdGhpcy5wbGF5ZXIuZmxpcFggPSB0aGlzLmxlZnRQbGF0Zm9ybTtcbiAgICAgIHRoaXMucGxhdGZvcm1BbmltYXRpb24uc3RvcCgpO1xuXG4gICAgICB0aGlzLnNjb3JlKys7XG4gICAgICB0aGlzLmNyZWF0ZVBsYXRmb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTa3kgKCk6IHZvaWQge1xuICAgIGNvbnN0IHNreSA9IHRoaXMuYWRkLmltYWdlKHRoaXMuaGFsZldpZHRoLCB0aGlzLnNjYWxlLmhlaWdodCAvIDIsICdza3knKTtcbiAgICBjb25zdCBza3lSYXRpbyA9IENPTkZJRy5iYWNrZ3JvdW5kLndpZHRoIC8gQ09ORklHLmJhY2tncm91bmQuaGVpZ2h0O1xuXG4gICAgY29uc3Qgc2t5SGVpZ2h0ID0gdGhpcy5zY2FsZS5oZWlnaHQgLyBza3kuaGVpZ2h0O1xuICAgIGNvbnN0IHNreVdpZHRoID0gc2t5SGVpZ2h0ICogc2t5UmF0aW87XG5cbiAgICBza3kuc2V0U2NhbGUoc2t5V2lkdGgsIHNreUhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUdyb3VuZCAoKTogUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXAge1xuICAgIGNvbnN0IGdyb3VuZCA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IENPTkZJRy5wbGF0Zm9ybTtcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gaGVpZ2h0IC8gMjtcblxuICAgIGNvbnN0IFZFUlRJQ0FMX1BMQVRGT1JNUyA9IDI7XG4gICAgY29uc3QgSE9SSVpPTlRBTF9QTEFURk9STVMgPSBNYXRoLmNlaWwodGhpcy5zY2FsZS53aWR0aCAvIHdpZHRoKTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IFZFUlRJQ0FMX1BMQVRGT1JNUzsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEhPUklaT05UQUxfUExBVEZPUk1TOyBjb2wrKykge1xuICAgICAgICBjb25zdCB4ID0gY29sICogd2lkdGggKyBoZWlnaHQ7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnNjYWxlLmhlaWdodCAtIChyb3cgKiBoZWlnaHQgKyBoYWxmSGVpZ2h0KTtcblxuICAgICAgICBncm91bmQuYWRkKHRoaXMucGh5c2ljcy5hZGQuc3RhdGljSW1hZ2UoeCwgeSwgJ2JyaWNrJyksIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBncm91bmQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBsYXllciAoKTogUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBDT05GSUcucGxhdGZvcm0ud2lkdGggKyBDT05GSUcucGxheWVyLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ21hcmlvJywge1xuICAgICAgICBzdGFydDogMCwgZW5kOiBDT05GSUcucGxheWVyLmZyYW1lc1xuICAgICAgfSksXG5cbiAgICAgIGZyYW1lUmF0ZTogMTUsXG4gICAgICBrZXk6ICdqdW1wJ1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKFxuICAgICAgdGhpcy5oYWxmV2lkdGgsXG4gICAgICB0aGlzLnNjYWxlLmhlaWdodCAtIG9mZnNldEJvdHRvbSxcbiAgICAgICdtYXJpbydcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRJbnB1dEV2ZW50cyAoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGxheWVyLmJvZHkudG91Y2hpbmcuZG93bikge1xuICAgICAgICB0aGlzLnBsYXllci5zZXRWZWxvY2l0eVkoLTUwMC4wKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbXMucGxheSgnanVtcCcpO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQbGF0Zm9ybSAoKTogdm9pZCB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IHggPSB0aGlzLmxlZnRQbGF0Zm9ybSA/IDAgOiB3aWR0aDtcblxuICAgIGNvbnN0IHBsYXRmb3JtSGVpZ2h0ID0gQ09ORklHLnBsYXRmb3JtLmhlaWdodDtcbiAgICBjb25zdCBtaW5EdXJhdGlvbiA9IDEyNTA7IC8vIHRoaXMuYXV0b3BsYXlpbmcgPyAxMjUwIDogNTAwO1xuICAgIGNvbnN0IHkgPSBoZWlnaHQgLSBwbGF0Zm9ybUhlaWdodCAqIDIuNSAtIHRoaXMuc2NvcmUgKiBwbGF0Zm9ybUhlaWdodDtcblxuICAgIGNvbnN0IHBsYXRmb3JtUG9zaXRpb24gPSB0aGlzLmxlZnRQbGF0Zm9ybVxuICAgICAgPyAtdGhpcy5wbGF0Zm9ybVRhcmdldFBvc2l0aW9uIDogdGhpcy5wbGF0Zm9ybVRhcmdldFBvc2l0aW9uO1xuXG4gICAgY29uc3QgcGxhdGZvcm0gPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0ltYWdlKHggKyBwbGF0Zm9ybVBvc2l0aW9uLCB5LCAnYnJpY2snKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGAke3RoaXMubGVmdFBsYXRmb3JtID8gJysnIDogJy0nfT0gMjQ0YDtcblxuICAgIHBsYXRmb3JtLnNldERhdGEoJ2luZGV4JywgdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uc2l6ZSk7XG4gICAgdGhpcy5wbGF0Zm9ybXMuYWRkKHBsYXRmb3JtLCB0cnVlKTtcblxuICAgIHRoaXMucGxhdGZvcm1BbmltYXRpb24gPSB0aGlzLmFkZC50d2Vlbih7XG4gICAgICBvblVwZGF0ZTogdGhpcy51cGRhdGVQbGF0Zm9ybUFuaW1hdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgZHVyYXRpb246IHJhbmRvbUludChtaW5EdXJhdGlvbiwgMjUwMCksXG5cbiAgICAgIHByb3BzOiB7eDogeyB2YWx1ZTogZGVzdGluYXRpb24gfX0sXG4gICAgICBkZWxheTogcmFuZG9tSW50KDAsIDEwMDApLFxuXG4gICAgICBlYXNlOiByYW5kb21FYXNpbmcoKSxcbiAgICAgIHRhcmdldHM6IHBsYXRmb3JtXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBsYXRmb3JtQW5pbWF0aW9uICh0d2VlbjogVHdlZW5zLlR3ZWVuLCBwbGF0Zm9ybTogUGh5c2ljcy5BcmNhZGUuSW1hZ2UpOiB2b2lkIHtcbiAgICBwbGF0Zm9ybS5yZWZyZXNoQm9keSgpO1xuICAgIGlmICghdGhpcy5hdXRvcGxheWluZykgcmV0dXJuO1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5oYWxmV2lkdGggKyAodGhpcy5sZWZ0UGxhdGZvcm0gPyAtMjUwIDogMjUwKTtcblxuICAgIGlmICh0aGlzLmxlZnRQbGF0Zm9ybSAmJiBwbGF0Zm9ybS54ID49IG9mZnNldCkge1xuICAgICAgdGhpcy5wbGF5ZXJKdW1wKCk7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAocGxhdGZvcm0ueCA8PSBvZmZzZXQpIHtcbiAgICAgIHRoaXMucGxheWVySnVtcCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGxheWVySnVtcCAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxheWVyLmJvZHkudG91Y2hpbmcuZG93bikge1xuICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlZKC01MDAuMCk7XG4gICAgICB0aGlzLnBsYXllci5hbmltcy5wbGF5KCdqdW1wJyk7XG4gICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG5cdHB1YmxpYyB1cGRhdGUgKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYyODk1MDYvcGhhc2VyLTMtaG93LXRvLWNyZWF0ZS1zbW9vdGgtem9vbWluZy1lZmZlY3Rcbi8vIGh0dHBzOi8vcGhvdG9uc3Rvcm0uZ2l0aHViLmlvL3BoYXNlcjMtZG9jcy9QaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkVmZmVjdHMuWm9vbS5odG1sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvdjMuMjIuMC9zcmMvbWF0aC9lYXNpbmcvRWFzZU1hcC5qc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL3YzLjIyLjAvc3JjL21hdGgvZWFzaW5nL2luZGV4LmpzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvdjMuMjIuMC9zcmMvbWF0aC9SYW5kb21YWS5qc1xuLy8gaHR0cHM6Ly9waGFzZXIuaW8vZXhhbXBsZXMvdjMvdmlldy9jYW1lcmEvZm9sbG93LXpvb21cbi8vIGh0dHBzOi8vc2FtbWUuZ2l0aHViLmlvL3BoYXNlci1leGFtcGxlcy1taXJyb3IvY2FtZXJhL3pvb21pbmclMjB0aGUlMjBjYW1lcmEuaHRtbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlcjMtZXhhbXBsZXMvYmxvYi9tYXN0ZXIvcHVibGljL3NyYy9jYW1lcmEvZm9sbG93JTIwem9vbS5qc1xuXG5pbXBvcnQgeyBNYXRoIGFzIE1hdGhVdGlscyB9IGZyb20gJ3BoYXNlcic7XG5cbmNvbnN0IEVBU0lOR1MgPSBbXG4gIE1hdGhVdGlscy5FYXNpbmcuTGluZWFyLFxuXG4gIE1hdGhVdGlscy5FYXNpbmcuUXVhZHJhdGljLkluLFxuICBNYXRoVXRpbHMuRWFzaW5nLlF1YWRyYXRpYy5PdXQsXG4gIE1hdGhVdGlscy5FYXNpbmcuUXVhZHJhdGljLkluT3V0LFxuXG4gIE1hdGhVdGlscy5FYXNpbmcuQ3ViaWMuSW4sXG4gIE1hdGhVdGlscy5FYXNpbmcuQ3ViaWMuT3V0LFxuICBNYXRoVXRpbHMuRWFzaW5nLkN1YmljLkluT3V0LFxuXG4gIE1hdGhVdGlscy5FYXNpbmcuUXVhcnRpYy5JbixcbiAgTWF0aFV0aWxzLkVhc2luZy5RdWFydGljLk91dCxcbiAgTWF0aFV0aWxzLkVhc2luZy5RdWFydGljLkluT3V0LFxuXG4gIE1hdGhVdGlscy5FYXNpbmcuUXVpbnRpYy5JbixcbiAgTWF0aFV0aWxzLkVhc2luZy5RdWludGljLk91dCxcbiAgTWF0aFV0aWxzLkVhc2luZy5RdWludGljLkluT3V0LFxuXG4gIE1hdGhVdGlscy5FYXNpbmcuU2luZS5JbixcbiAgTWF0aFV0aWxzLkVhc2luZy5TaW5lLk91dCxcbiAgTWF0aFV0aWxzLkVhc2luZy5TaW5lLkluT3V0LFxuXG4gIE1hdGhVdGlscy5FYXNpbmcuRXhwby5JbixcbiAgTWF0aFV0aWxzLkVhc2luZy5FeHBvLk91dCxcbiAgTWF0aFV0aWxzLkVhc2luZy5FeHBvLkluT3V0LFxuXG4gIE1hdGhVdGlscy5FYXNpbmcuQ2lyY3VsYXIuSW4sXG4gIE1hdGhVdGlscy5FYXNpbmcuQ2lyY3VsYXIuT3V0LFxuICBNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLkluT3V0LFxuXG4gIE1hdGhVdGlscy5FYXNpbmcuQmFjay5JbixcbiAgTWF0aFV0aWxzLkVhc2luZy5CYWNrLk91dCxcbiAgTWF0aFV0aWxzLkVhc2luZy5CYWNrLkluT3V0XG5dO1xuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PlxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG5leHBvcnQgY29uc3QgcmFuZG9tRWFzaW5nID0gKCk6IEZ1bmN0aW9uID0+XG4gIEVBU0lOR1NbcmFuZG9tSW50KDAsIEVBU0lOR1MubGVuZ3RoIC0gMSldO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==