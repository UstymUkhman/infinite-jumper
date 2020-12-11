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
    }
    CameraManager.prototype.follow = function (target, y) {
        if (y === void 0) { y = 0; }
        this.camera.startFollow(target, false, 1, 0.1, 0, y);
    };
    CameraManager.prototype.zoomIn = function (amount) {
        console.log(amount);
        var zoom = Math.min(1 + amount * 0.01, 1.25);
        this.camera.zoomTo(zoom, 500, 'Quad.easeOut');
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
        _this.alive = true;
        scene.add.existing(_this);
        scene.physics.add.existing(_this);
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
        if (this.alive && this.body.touching.down) {
            this.setVelocityY(-500.0);
            this.anims.play('jump');
            this.isJumping = true;
        }
    };
    Player.prototype.die = function (fromLeft) {
        var _this = this;
        var direction = fromLeft ? 1 : -1;
        setTimeout(function () {
            return _this.setOffset(0, _Game_config_json__WEBPACK_IMPORTED_MODULE_1__["player"].height / -3.6);
        }, 250);
        this.setVelocityX(250 * direction);
        this.setCollideWorldBounds(true);
        this.flipX = fromLeft;
        this.alive = false;
        return {
            props: { angle: 90 * direction },
            ease: 'Quad.easeInOut',
            duration: 500,
            targets: this
        };
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






var default_1 = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(default_1, _super);
    function default_1() {
        var _this = _super.call(this, { key: 'Scene' }) || this;
        _this.platformTargetPosition = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.width / 2;
        _this.leftPlatform = Math.random() < 0.5;
        _this.autoplaying = false;
        _this.gameOver = false;
        _this.halfHeight = 0;
        _this.halfWidth = 0;
        _this.score = 0;
        return _this;
    }
    default_1.prototype.preload = function () {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('brick', 'assets/brick.png');
        this.load.spritesheet('mario', 'assets/mario.png', {
            frameHeight: _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.height,
            frameWidth: _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.width
        });
    };
    default_1.prototype.create = function () {
        this.halfHeight = this.scale.height / 2;
        this.halfWidth = this.scale.width / 2;
        this.createSky();
        var ground = this.createGround();
        this.player = this.createPlayer();
        this.createCamera();
        this.addInputEvents();
        this.platforms = this.physics.add.staticGroup();
        this.player.flipX = this.leftPlatform;
        this.createPlatform();
        this.physics.add.collider(this.player, ground);
        this.physics.add.collider(this.player, this.platforms, this.onPlatformLanding, undefined, this);
    };
    default_1.prototype.createCamera = function () {
        var playerHalf = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.height / 2;
        var groundHeight = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.height * 2;
        this.camera = new _Game_Camera__WEBPACK_IMPORTED_MODULE_3__["default"](this.cameras.main);
        this.camera.follow(this.player, this.halfHeight - groundHeight - playerHalf);
    };
    default_1.prototype.onPlatformLanding = function (player, platform) {
        if (this.gameOver)
            return;
        var lastPlatform = this.platforms.children.size - 1;
        this.gameOver = this.physics.world.overlap(this.player, this.platforms.children.entries[lastPlatform]);
        if (this.gameOver) {
            this.add.tween(this.player.die(this.leftPlatform));
            this.camera.zoomOut(this.score * 140);
        }
        else if (this.player.jumping) {
            this.player.jumping = false;
            if (platform.getData('index') === lastPlatform) {
                this.leftPlatform = Math.random() < 0.5;
                this.player.flipX = this.leftPlatform;
                this.camera.zoomIn(++this.score);
                this.platformAnimation.stop();
                this.createPlatform();
            }
        }
    };
    default_1.prototype.createSky = function () {
        var sky = this.add.image(this.halfWidth, this.halfHeight, 'sky');
        var _a = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.background, width = _a.width, height = _a.height;
        var skyRatio = width / height;
        var skyWidth, skyHeight;
        if (skyRatio < 1) {
            skyHeight = this.scale.height / sky.height;
            skyWidth = skyHeight * skyRatio;
        }
        else {
            skyWidth = this.scale.width / sky.width;
            skyHeight = skyWidth * skyRatio;
        }
        sky.setScale(skyWidth, skyHeight);
    };
    default_1.prototype.createGround = function () {
        var ground = this.physics.add.staticGroup();
        var _a = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform, width = _a.width, height = _a.height;
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
    default_1.prototype.createPlayer = function () {
        var offsetBottom = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.width + _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.height / 2;
        return new _Game_Player__WEBPACK_IMPORTED_MODULE_5__["default"](this, this.halfWidth, this.scale.height - offsetBottom, 'mario');
    };
    default_1.prototype.addInputEvents = function () {
        this.input.on('pointerup', this.player.jump.bind(this.player));
    };
    default_1.prototype.createPlatform = function () {
        var _this = this;
        var _a = this.scale, width = _a.width, height = _a.height;
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_Game_utils__WEBPACK_IMPORTED_MODULE_2__["randomEasing"])(), 2), easing = _b[0], jump = _b[1];
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
                return _this.updatePlatformAnimation(tween, platform, jump);
            },
            delay: Object(_Game_utils__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(0, 1000),
            props: { x: destination },
            targets: platform,
            duration: 1500,
            ease: easing
        });
    };
    default_1.prototype.updatePlatformAnimation = function (tween, platform, jump) {
        platform.refreshBody();
        if (!this.autoplaying)
            return;
        var progress = tween.data[0].progress || 0;
        progress >= jump && this.player.jump();
    };
    return default_1;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));
/* harmony default export */ __webpack_exports__["default"] = (default_1);
;


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
/*! exports provided: randomEasing, clamp, randomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomEasing", function() { return randomEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var EASINGS = new Map([
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
]);
var randomEasing = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(EASINGS)[randomInt(0, EASINGS.size - 1)];
};
var clamp = function (value, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.max(min, Math.min(value, max));
};
var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LENBQUMsRUFBRSxFQUFTLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQVEsSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBTSxJQUFJLENBQUM7SUFFeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFPLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQU0sR0FBRyxDQUFDO0lBQ3ZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBSSxHQUFHLENBQUM7SUFFdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFPLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQU0sSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBSSxJQUFJLENBQUM7SUFFeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFVLEdBQUcsQ0FBQztJQUN2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQVMsSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBTyxHQUFHLENBQUM7SUFFdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFVLElBQUksQ0FBQztJQUN4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQVMsR0FBRyxDQUFDO0lBQ3ZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBTyxJQUFJLENBQUM7SUFFeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFNLElBQUksQ0FBQztJQUN4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUssSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRyxJQUFJLENBQUM7SUFFeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFVLElBQUksQ0FBQztJQUN4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQVMsR0FBRyxDQUFDO0lBQ3ZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBTyxHQUFHLENBQUM7Q0FDeEMsQ0FBQyxDQUFDO0FBRUksSUFBTSxZQUFZLEdBQUc7SUFDMUIsOERBQUssT0FBeUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFBL0UsQ0FBK0UsQ0FBQztBQUUzRSxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQWEsRUFBRSxHQUFPLEVBQUUsR0FBTztJQUFoQiw2QkFBTztJQUFFLDZCQUFPO0lBQ25ELFdBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQW5DLENBQW1DLENBQUM7QUFFL0IsSUFBTSxTQUFTLEdBQUcsVUFBQyxHQUFXLEVBQUUsR0FBVztJQUNoRCxXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO0FBQWpELENBQWlELENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvQ3BEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDTDtBQUV6QixJQUFNLElBQUksR0FBRyxJQUFJLDJDQUFJLENBQUM7SUFDM0IsS0FBSyxFQUFFLDRCQUE0QjtJQUNuQyxlQUFlLEVBQUUsU0FBUztJQUUxQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDakIsS0FBSyxFQUFFLG1EQUFLO0lBRVosT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFFakIsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNuQixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7SUFFRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsNENBQUssQ0FBQyxNQUFNO1FBQ2xCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsTUFBTTtLQUNkO0NBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnMuZ2FtZVwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCJpbXBvcnQgeyBjbGFtcCB9IGZyb20gJ0BHYW1lL3V0aWxzJztcblxuaW1wb3J0IHR5cGUgeyBDYW1lcmFzIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCB0eXBlIFBsYXllciBmcm9tICdAR2FtZS9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFNYW5hZ2VyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcml2YXRlIGNhbWVyYTogQ2FtZXJhcy5TY2VuZTJELkNhbWVyYSkge31cblxuICBwdWJsaWMgZm9sbG93ICh0YXJnZXQ6IFBsYXllciwgeSA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmNhbWVyYS5zdGFydEZvbGxvdyh0YXJnZXQsIGZhbHNlLCAxLCAwLjEsIDAsIHkpO1xuICB9XG5cbiAgcHVibGljIHpvb21JbiAoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhhbW91bnQpO1xuICAgIGNvbnN0IHpvb20gPSBNYXRoLm1pbigxICsgYW1vdW50ICogMC4wMSwgMS4yNSk7XG4gICAgdGhpcy5jYW1lcmEuem9vbVRvKHpvb20sIDUwMCwgJ1F1YWQuZWFzZU91dCcpO1xuICB9XG5cbiAgcHVibGljIHpvb21PdXQgKGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBkdXJhdGlvbiA9IGNsYW1wKGR1cmF0aW9uLCA1MDAsIDM1MDApO1xuXG4gICAgdGhpcy5jYW1lcmEuc3RvcEZvbGxvdygpO1xuICAgIHRoaXMuY2FtZXJhLnpvb21UbygxLCBkdXJhdGlvbik7XG5cbiAgICB0aGlzLmNhbWVyYS5wYW4oXG4gICAgICB0aGlzLmNhbWVyYS5jZW50ZXJYLCB0aGlzLmNhbWVyYS5jZW50ZXJZLFxuICAgICAgZHVyYXRpb24sICdRdWFkLmVhc2VPdXQnXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGxheWVyIGFzIFBMQVlFUiB9IGZyb20gJ0BHYW1lL2NvbmZpZy5qc29uJztcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gJ3BoYXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XG4gIHByaXZhdGUgaXNKdW1waW5nID0gZmFsc2U7XG4gIHByaXZhdGUgYWxpdmUgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoc2NlbmU6IFNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dHVyZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUpO1xuXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgIHNjZW5lLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMpO1xuXG4gICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ21hcmlvJywge1xuICAgICAgICBzdGFydDogMCwgZW5kOiBQTEFZRVIuZnJhbWVzXG4gICAgICB9KSxcblxuICAgICAgZnJhbWVSYXRlOiAxNSxcbiAgICAgIGtleTogJ2p1bXAnXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMganVtcCAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWxpdmUgJiYgdGhpcy5ib2R5LnRvdWNoaW5nLmRvd24pIHtcbiAgICAgIHRoaXMuc2V0VmVsb2NpdHlZKC01MDAuMCk7XG4gICAgICB0aGlzLmFuaW1zLnBsYXkoJ2p1bXAnKTtcbiAgICAgIHRoaXMuaXNKdW1waW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGllIChmcm9tTGVmdDogYm9vbGVhbikge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGZyb21MZWZ0ID8gMSA6IC0xO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PlxuICAgICAgdGhpcy5zZXRPZmZzZXQoMCwgUExBWUVSLmhlaWdodCAvIC0zLjYpXG4gICAgLCAyNTApO1xuXG4gICAgdGhpcy5zZXRWZWxvY2l0eVgoMjUwICogZGlyZWN0aW9uKTtcbiAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcblxuICAgIHRoaXMuZmxpcFggPSBmcm9tTGVmdDtcbiAgICB0aGlzLmFsaXZlID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgYW5nbGU6IDkwICogZGlyZWN0aW9uIH0sXG4gICAgICBlYXNlOiAnUXVhZC5lYXNlSW5PdXQnLFxuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIHRhcmdldHM6IHRoaXNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldCBqdW1waW5nIChpc0p1bXBpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzSnVtcGluZyA9IGlzSnVtcGluZztcbiAgfVxuXG4gIHB1YmxpYyBnZXQganVtcGluZyAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNKdW1waW5nO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTY2VuZSwgUGh5c2ljcywgR2FtZU9iamVjdHMsIFR3ZWVucyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyByYW5kb21JbnQsIHJhbmRvbUVhc2luZyB9IGZyb20gJ0BHYW1lL3V0aWxzJztcblxuaW1wb3J0IENhbWVyYU1hbmFnZXIgZnJvbSAnQEdhbWUvQ2FtZXJhJztcbmltcG9ydCBDT05GSUcgZnJvbSAnQEdhbWUvY29uZmlnLmpzb24nO1xuaW1wb3J0IFBsYXllciBmcm9tICdAR2FtZS9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNjZW5lIHtcbiAgcHJpdmF0ZSBwbGF0Zm9ybVRhcmdldFBvc2l0aW9uID0gQ09ORklHLnBsYXRmb3JtLndpZHRoIC8gMjtcbiAgcHJpdmF0ZSBsZWZ0UGxhdGZvcm0gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuXG4gIHByaXZhdGUgcGxhdGZvcm1zITogUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXA7XG4gIHByaXZhdGUgcGxhdGZvcm1BbmltYXRpb24hOiBUd2VlbnMuVHdlZW47XG4gIHByaXZhdGUgY2FtZXJhITogQ2FtZXJhTWFuYWdlcjtcbiAgcHJpdmF0ZSBwbGF5ZXIhOiBQbGF5ZXI7XG5cbiAgcHJpdmF0ZSBhdXRvcGxheWluZyA9IGZhbHNlO1xuICBwcml2YXRlIGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBoYWxmSGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBoYWxmV2lkdGggPSAwO1xuICBwcml2YXRlIHNjb3JlID0gMDtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKHsga2V5OiAnU2NlbmUnIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwcmVsb2FkICgpOiB2b2lkIHtcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ3NreScsICdhc3NldHMvc2t5LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYnJpY2snLCAnYXNzZXRzL2JyaWNrLnBuZycpO1xuXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdtYXJpbycsICdhc3NldHMvbWFyaW8ucG5nJywge1xuICAgICAgZnJhbWVIZWlnaHQ6IENPTkZJRy5wbGF5ZXIuaGVpZ2h0LFxuICAgICAgZnJhbWVXaWR0aDogQ09ORklHLnBsYXllci53aWR0aFxuICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGUgKCk6IHZvaWQge1xuICAgIHRoaXMuaGFsZkhlaWdodCA9IHRoaXMuc2NhbGUuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmhhbGZXaWR0aCA9IHRoaXMuc2NhbGUud2lkdGggLyAyO1xuXG4gICAgdGhpcy5jcmVhdGVTa3koKTtcblxuICAgIGNvbnN0IGdyb3VuZCA9IHRoaXMuY3JlYXRlR3JvdW5kKCk7XG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLmNyZWF0ZVBsYXllcigpO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcbiAgICB0aGlzLmFkZElucHV0RXZlbnRzKCk7XG5cbiAgICB0aGlzLnBsYXRmb3JtcyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICB0aGlzLnBsYXllci5mbGlwWCA9IHRoaXMubGVmdFBsYXRmb3JtO1xuICAgIHRoaXMuY3JlYXRlUGxhdGZvcm0oKTtcblxuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIGdyb3VuZCk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5wbGF0Zm9ybXMsIHRoaXMub25QbGF0Zm9ybUxhbmRpbmcsIHVuZGVmaW5lZCwgdGhpcyk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNhbWVyYSAoKTogdm9pZCB7XG4gICAgY29uc3QgcGxheWVySGFsZiA9IENPTkZJRy5wbGF5ZXIuaGVpZ2h0IC8gMjtcbiAgICBjb25zdCBncm91bmRIZWlnaHQgPSBDT05GSUcucGxhdGZvcm0uaGVpZ2h0ICogMjtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYU1hbmFnZXIodGhpcy5jYW1lcmFzLm1haW4pO1xuXG4gICAgdGhpcy5jYW1lcmEuZm9sbG93KHRoaXMucGxheWVyLFxuICAgICAgdGhpcy5oYWxmSGVpZ2h0IC0gZ3JvdW5kSGVpZ2h0IC0gcGxheWVySGFsZlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uUGxhdGZvcm1MYW5kaW5nIChwbGF5ZXI6IEdhbWVPYmplY3RzLkdhbWVPYmplY3QsIHBsYXRmb3JtOiBHYW1lT2JqZWN0cy5HYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgIGNvbnN0IGxhc3RQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLnNpemUgLSAxO1xuXG4gICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMucGh5c2ljcy53b3JsZC5vdmVybGFwKHRoaXMucGxheWVyLFxuICAgICAgdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uZW50cmllc1tsYXN0UGxhdGZvcm1dXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmdhbWVPdmVyKSB7XG4gICAgICB0aGlzLmFkZC50d2Vlbih0aGlzLnBsYXllci5kaWUodGhpcy5sZWZ0UGxhdGZvcm0pKTtcbiAgICAgIHRoaXMuY2FtZXJhLnpvb21PdXQodGhpcy5zY29yZSAqIDE0MCk7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5wbGF5ZXIuanVtcGluZykge1xuICAgICAgdGhpcy5wbGF5ZXIuanVtcGluZyA9IGZhbHNlO1xuXG4gICAgICBpZiAocGxhdGZvcm0uZ2V0RGF0YSgnaW5kZXgnKSA9PT0gbGFzdFBsYXRmb3JtKSB7XG4gICAgICAgIHRoaXMubGVmdFBsYXRmb3JtID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZmxpcFggPSB0aGlzLmxlZnRQbGF0Zm9ybTtcblxuICAgICAgICB0aGlzLmNhbWVyYS56b29tSW4oKyt0aGlzLnNjb3JlKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybUFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlUGxhdGZvcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNreSAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2t5ID0gdGhpcy5hZGQuaW1hZ2UodGhpcy5oYWxmV2lkdGgsIHRoaXMuaGFsZkhlaWdodCwgJ3NreScpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gQ09ORklHLmJhY2tncm91bmQ7XG5cbiAgICBjb25zdCBza3lSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgIGxldCBza3lXaWR0aCwgc2t5SGVpZ2h0O1xuXG4gICAgaWYgKHNreVJhdGlvIDwgMSkge1xuICAgICAgc2t5SGVpZ2h0ID0gdGhpcy5zY2FsZS5oZWlnaHQgLyBza3kuaGVpZ2h0O1xuICAgICAgc2t5V2lkdGggPSBza3lIZWlnaHQgKiBza3lSYXRpbztcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIHNreVdpZHRoID0gdGhpcy5zY2FsZS53aWR0aCAvIHNreS53aWR0aDtcbiAgICAgIHNreUhlaWdodCA9IHNreVdpZHRoICogc2t5UmF0aW87XG4gICAgfVxuXG4gICAgc2t5LnNldFNjYWxlKHNreVdpZHRoLCBza3lIZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVHcm91bmQgKCk6IFBoeXNpY3MuQXJjYWRlLlN0YXRpY0dyb3VwIHtcbiAgICBjb25zdCBncm91bmQgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBDT05GSUcucGxhdGZvcm07XG4gICAgY29uc3QgaGFsZkhlaWdodCA9IGhlaWdodCAvIDI7XG5cbiAgICBjb25zdCBWRVJUSUNBTF9QTEFURk9STVMgPSAyO1xuICAgIGNvbnN0IEhPUklaT05UQUxfUExBVEZPUk1TID0gTWF0aC5jZWlsKHRoaXMuc2NhbGUud2lkdGggLyB3aWR0aCk7XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBWRVJUSUNBTF9QTEFURk9STVM7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBIT1JJWk9OVEFMX1BMQVRGT1JNUzsgY29sKyspIHtcbiAgICAgICAgY29uc3QgeCA9IGNvbCAqIHdpZHRoICsgaGVpZ2h0O1xuICAgICAgICBjb25zdCB5ID0gdGhpcy5zY2FsZS5oZWlnaHQgLSAocm93ICogaGVpZ2h0ICsgaGFsZkhlaWdodCk7XG5cbiAgICAgICAgZ3JvdW5kLmFkZCh0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0ltYWdlKHgsIHksICdicmljaycpLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdW5kO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQbGF5ZXIgKCk6IFBsYXllciB7XG4gICAgY29uc3Qgb2Zmc2V0Qm90dG9tID0gQ09ORklHLnBsYXRmb3JtLndpZHRoICsgQ09ORklHLnBsYXllci5oZWlnaHQgLyAyO1xuICAgIHJldHVybiBuZXcgUGxheWVyKHRoaXMsIHRoaXMuaGFsZldpZHRoLCB0aGlzLnNjYWxlLmhlaWdodCAtIG9mZnNldEJvdHRvbSwgJ21hcmlvJyk7XG4gIH1cblxuICBwcml2YXRlIGFkZElucHV0RXZlbnRzICgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCB0aGlzLnBsYXllci5qdW1wLmJpbmQodGhpcy5wbGF5ZXIpKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUGxhdGZvcm0gKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zY2FsZTtcbiAgICBjb25zdCBbZWFzaW5nLCBqdW1wXSA9IHJhbmRvbUVhc2luZygpO1xuICAgIGNvbnN0IHggPSB0aGlzLmxlZnRQbGF0Zm9ybSA/IDAgOiB3aWR0aDtcblxuICAgIGNvbnN0IHBsYXRmb3JtSGVpZ2h0ID0gQ09ORklHLnBsYXRmb3JtLmhlaWdodDtcbiAgICBjb25zdCBoYWxmUGxhdGZvcm1XaWR0aCA9IENPTkZJRy5wbGF0Zm9ybS53aWR0aCAvIDI7XG4gICAgY29uc3QgeSA9IGhlaWdodCAtIHBsYXRmb3JtSGVpZ2h0ICogMi41IC0gdGhpcy5zY29yZSAqIHBsYXRmb3JtSGVpZ2h0O1xuXG4gICAgY29uc3QgcGxhdGZvcm1Qb3NpdGlvbiA9IHRoaXMubGVmdFBsYXRmb3JtXG4gICAgICA/IC10aGlzLnBsYXRmb3JtVGFyZ2V0UG9zaXRpb24gOiB0aGlzLnBsYXRmb3JtVGFyZ2V0UG9zaXRpb247XG5cbiAgICBjb25zdCBwbGF0Zm9ybSA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljSW1hZ2UoeCArIHBsYXRmb3JtUG9zaXRpb24sIHksICdicmljaycpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gYCR7dGhpcy5sZWZ0UGxhdGZvcm0gPyAnKycgOiAnLSd9PSAke3RoaXMuaGFsZldpZHRoICsgaGFsZlBsYXRmb3JtV2lkdGh9YDtcblxuICAgIHBsYXRmb3JtLnNldERhdGEoJ2luZGV4JywgdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uc2l6ZSk7XG4gICAgdGhpcy5wbGF0Zm9ybXMuYWRkKHBsYXRmb3JtLCB0cnVlKTtcblxuICAgIHRoaXMucGxhdGZvcm1BbmltYXRpb24gPSB0aGlzLmFkZC50d2Vlbih7XG4gICAgICBvblVwZGF0ZTogKHR3ZWVuOiBUd2VlbnMuVHdlZW4sIHBsYXRmb3JtOiBQaHlzaWNzLkFyY2FkZS5JbWFnZSkgPT5cbiAgICAgICAgdGhpcy51cGRhdGVQbGF0Zm9ybUFuaW1hdGlvbih0d2VlbiwgcGxhdGZvcm0sIGp1bXApLFxuXG4gICAgICBkZWxheTogcmFuZG9tSW50KDAsIDEwMDApLFxuICAgICAgcHJvcHM6IHsgeDogZGVzdGluYXRpb24gfSxcblxuICAgICAgdGFyZ2V0czogcGxhdGZvcm0sXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIGVhc2U6IGVhc2luZ1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQbGF0Zm9ybUFuaW1hdGlvbiAodHdlZW46IFR3ZWVucy5Ud2VlbiwgcGxhdGZvcm06IFBoeXNpY3MuQXJjYWRlLkltYWdlLCBqdW1wOiBudW1iZXIpOiB2b2lkIHtcbiAgICBwbGF0Zm9ybS5yZWZyZXNoQm9keSgpO1xuICAgIGlmICghdGhpcy5hdXRvcGxheWluZykgcmV0dXJuO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0d2Vlbi5kYXRhWzBdLnByb2dyZXNzIHx8IDA7XG4gICAgcHJvZ3Jlc3MgPj0ganVtcCAmJiB0aGlzLnBsYXllci5qdW1wKCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBNYXRoIGFzIE1hdGhVdGlscyB9IGZyb20gJ3BoYXNlcic7XG5cbnR5cGUgRWFzaW5nID0gKHY6IG51bWJlciwgb3ZlcnNob290PzogbnVtYmVyKSA9PiBudW1iZXI7XG5cbmNvbnN0IEVBU0lOR1M6IE1hcDxFYXNpbmcsIG51bWJlcj4gPSBuZXcgTWFwKFtcbiAgW01hdGhVdGlscy5FYXNpbmcuTGluZWFyLCAgICAgICAgICAwLjVdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1YWRyYXRpYy5JbiwgICAgMC41XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhZHJhdGljLk91dCwgICAwLjM1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhZHJhdGljLkluT3V0LCAwLjM1XSxcblxuICBbTWF0aFV0aWxzLkVhc2luZy5DdWJpYy5JbiwgICAgICAgIDAuNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkN1YmljLk91dCwgICAgICAgMC4yNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkN1YmljLkluT3V0LCAgICAgMC4zNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhcnRpYy5JbiwgICAgICAwLjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWFydGljLk91dCwgICAgIDAuMl0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1YXJ0aWMuSW5PdXQsICAgMC4zXSxcblxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWludGljLkluLCAgICAgIDAuNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1aW50aWMuT3V0LCAgICAgMC4wMV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1aW50aWMuSW5PdXQsICAgMC4yNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuU2luZS5JbiwgICAgICAgICAwLjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5TaW5lLk91dCwgICAgICAgIDAuMzVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5TaW5lLkluT3V0LCAgICAgIDAuNF0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuRXhwby5JbiwgICAgICAgICAwLjc1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuRXhwby5PdXQsICAgICAgICAwLjFdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5FeHBvLkluT3V0LCAgICAgIDAuMjVdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLkluLCAgICAgMC43NV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLk91dCwgICAgMC4yNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLkluT3V0LCAgMC4zNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuQmFjay5JbiwgICAgICAgICAwLjc1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuQmFjay5PdXQsICAgICAgICAwLjFdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5CYWNrLkluT3V0LCAgICAgIDAuNF1cbl0pO1xuXG5leHBvcnQgY29uc3QgcmFuZG9tRWFzaW5nID0gKCk6IFtFYXNpbmcsIG51bWJlcl0gPT5cbiAgWy4uLihFQVNJTkdTIGFzIHVua25vd24gYXMgW0Vhc2luZywgbnVtYmVyXVtdKV1bcmFuZG9tSW50KDAsIEVBU0lOR1Muc2l6ZSAtIDEpXTtcblxuZXhwb3J0IGNvbnN0IGNsYW1wID0gKHZhbHVlOiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEpOiBudW1iZXIgPT5cbiAgTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSk7XG5cbmV4cG9ydCBjb25zdCByYW5kb21JbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4iLCJpbXBvcnQgeyBHYW1lLCBTY2FsZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgU2NlbmUgZnJvbSAnQEdhbWUvU2NlbmUnO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKHtcbiAgdGl0bGU6ICdJbm5vdmVjcyB8IFRlc3QgYXNzaWdubWVudCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyMxNjlBQzUnLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICBzY2VuZTogU2NlbmUsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuXG4gICAgYXJjYWRlOiB7XG4gICAgICBncmF2aXR5OiB7IHk6IDk4MSB9LFxuICAgICAgZGVidWc6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgc2NhbGU6IHtcbiAgICBtb2RlOiBTY2FsZS5SRVNJWkUsXG4gICAgcGFyZW50OiAnZ2FtZScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=