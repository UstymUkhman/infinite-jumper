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
        var zoom = Math.min(1 + amount * 0.01, 1.2);
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
        var lastPlatform = this.platforms.children.size - 1;
        this.gameOver = this.physics.world.overlap(this.player, this.platforms.children.entries[lastPlatform]);
        if (this.gameOver) {
            this.add.tween(this.player.die(this.leftPlatform));
            return this.camera.zoomOut(this.score * 140);
        }
        if (this.player.jumping) {
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
        var skyRatio = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.background.width / _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.background.height;
        var skyHeight = this.scale.height / sky.height;
        var skyWidth = skyHeight * skyRatio;
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
        var _a = this.scale, width = _a.width, height = _a.height;
        var x = this.leftPlatform ? 0 : width;
        var platformHeight = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.height;
        var y = height - platformHeight * 2.5 - this.score * platformHeight;
        var platformPosition = this.leftPlatform
            ? -this.platformTargetPosition : this.platformTargetPosition;
        var platform = this.physics.add.staticImage(x + platformPosition, y, 'brick');
        var destination = (this.leftPlatform ? '+' : '-') + "= 244";
        platform.setData('index', this.platforms.children.size);
        this.platforms.add(platform, true);
        this.platformAnimation = this.add.tween({
            onUpdate: this.updatePlatformAnimation.bind(this),
            duration: Object(_Game_utils__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(1250, 2500),
            delay: Object(_Game_utils__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(0, 1000),
            props: { x: destination },
            ease: Object(_Game_utils__WEBPACK_IMPORTED_MODULE_2__["randomEasing"])(),
            targets: platform
        });
    };
    default_1.prototype.updatePlatformAnimation = function (tween, platform) {
        platform.refreshBody();
        if (!this.autoplaying)
            return;
        var offset = this.halfWidth + (this.leftPlatform ? -250 : 250);
        if (this.leftPlatform && platform.x >= offset) {
            this.player.jump();
        }
        else if (platform.x <= offset) {
            this.player.jump();
        }
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
/*! exports provided: randomInt, clamp, randomEasing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomEasing", function() { return randomEasing; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

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
var randomInt = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
var clamp = function (value, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.max(min, Math.min(value, max));
};
var randomEasing = function () { return EASINGS[randomInt(0, EASINGS.length - 1)]; };


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
    parent: 'container',
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
        height: 640,
        width: 360
    }
});
window.addEventListener('resize', function () {
    game.scale.refresh();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBb0M7QUFLcEM7SUFDRSx1QkFBNEIsTUFBOEI7UUFBOUIsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7SUFBRyxDQUFDO0lBRXZELDhCQUFNLEdBQWIsVUFBZSxNQUFjLEVBQUUsQ0FBSztRQUFMLHlCQUFLO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBZSxNQUFjO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWdCLFFBQWdCO1FBQzlCLFFBQVEsR0FBRyx5REFBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQ3hDLFFBQVEsRUFBRSxjQUFjLENBQ3pCLENBQUM7SUFDSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qm9EO0FBRXBCO0FBRWpDO0lBQW9DLHdFQUFxQjtJQUl2RCxnQkFBb0IsS0FBWSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsT0FBZTtRQUF2RSxZQUNFLGtCQUFNLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxTQWE1QjtRQWpCTyxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQUssR0FBRyxJQUFJLENBQUM7UUFLbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBRWpDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtnQkFDaEQsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsd0RBQU0sQ0FBQyxNQUFNO2FBQzdCLENBQUM7WUFFRixTQUFTLEVBQUUsRUFBRTtZQUNiLEdBQUcsRUFBRSxNQUFNO1NBQ1osQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFTSxxQkFBSSxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRU0sb0JBQUcsR0FBVixVQUFZLFFBQWlCO1FBQTdCLGlCQW1CQztRQWxCQyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsVUFBVSxDQUFDO1lBQ1QsWUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsd0RBQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBdkMsQ0FBdUMsRUFDdkMsR0FBRyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsU0FBUyxFQUFFO1lBQ2hDLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsUUFBUSxFQUFFLEdBQUc7WUFDYixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7SUFDSixDQUFDO0lBRUQsc0JBQVcsMkJBQU87YUFJbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzthQU5ELFVBQW9CLFNBQWtCO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBS0gsYUFBQztBQUFELENBQUMsQ0F4RG1DLDhDQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0F3RHhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RDREO0FBQ1A7QUFFYjtBQUNGO0FBQ0w7QUFFbEM7SUFBNkIsMkVBQUs7SUFnQmpDO1FBQUEsWUFDRyxrQkFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxTQUN6QjtRQWpCUSw0QkFBc0IsR0FBRyw4Q0FBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELGtCQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztRQU9uQyxpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBSW5CLENBQUM7SUFFTywyQkFBTyxHQUFmO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFO1lBQ2pELFdBQVcsRUFBRSw4Q0FBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQ2pDLFVBQVUsRUFBRSw4Q0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ2hDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFTywwQkFBTSxHQUFkO1FBQ0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFTyxnQ0FBWSxHQUFwQjtRQUNFLElBQU0sVUFBVSxHQUFHLDhDQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBTSxZQUFZLEdBQUcsOENBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksb0RBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxHQUFHLFVBQVUsQ0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFTyxxQ0FBaUIsR0FBekIsVUFBMkIsTUFBOEIsRUFBRSxRQUFnQztRQUN6RixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FDOUMsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUU1QixJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssWUFBWSxFQUFFO2dCQUM5QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBRXRDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtTQUNGO0lBQ0gsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25FLElBQU0sUUFBUSxHQUFHLDhDQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyw4Q0FBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFcEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNqRCxJQUFNLFFBQVEsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBRXRDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxnQ0FBWSxHQUFwQjtRQUNFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLFNBQW9CLDhDQUFNLENBQUMsUUFBUSxFQUFqQyxLQUFLLGFBQUUsTUFBTSxZQUFvQixDQUFDO1FBQzFDLElBQU0sVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFOUIsSUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRWpFLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNqRCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ25ELElBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUMvQixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7Z0JBRTFELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0Q7U0FDRjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxnQ0FBWSxHQUFwQjtRQUNFLElBQU0sWUFBWSxHQUFHLDhDQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyw4Q0FBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sSUFBSSxvREFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRU8sa0NBQWMsR0FBdEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyxrQ0FBYyxHQUF0QjtRQUNRLFNBQW9CLElBQUksQ0FBQyxLQUFLLEVBQTVCLEtBQUssYUFBRSxNQUFNLFlBQWUsQ0FBQztRQUNyQyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUV4QyxJQUFNLGNBQWMsR0FBRyw4Q0FBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLGNBQWMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7UUFFdEUsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWTtZQUN4QyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztRQUUvRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRixJQUFNLFdBQVcsR0FBRyxDQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFPLENBQUM7UUFFNUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFakQsUUFBUSxFQUFFLDZEQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMvQixLQUFLLEVBQUUsNkRBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUU7WUFFekIsSUFBSSxFQUFFLGdFQUFZLEVBQUU7WUFDcEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDJDQUF1QixHQUEvQixVQUFpQyxLQUFtQixFQUFFLFFBQThCO1FBQ2xGLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRTlCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7YUFFSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLENBeEs0Qiw0Q0FBSyxHQXdLakM7O0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUkzQyxJQUFNLE9BQU8sR0FBa0I7SUFDN0IsMkNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTTtJQUV2QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtJQUM3QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRztJQUM5QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSztJQUVoQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUN6QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRztJQUMxQiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSztJQUU1QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUMzQiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRztJQUM1QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztJQUU5QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUMzQiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRztJQUM1QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztJQUU5QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN4QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztJQUN6QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztJQUUzQiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN4QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztJQUN6QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztJQUUzQiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUM1QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRztJQUM3QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSztJQUUvQiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN4QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztJQUN6QiwyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztDQUM1QixDQUFDO0FBRUssSUFBTSxTQUFTLEdBQUcsVUFBQyxHQUFXLEVBQUUsR0FBVyxJQUFhLFdBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBakQsQ0FBaUQsQ0FBQztBQUUxRyxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQWEsRUFBRSxHQUFPLEVBQUUsR0FBTztJQUFoQiw2QkFBTztJQUFFLDZCQUFPO0lBQWEsV0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBbkMsQ0FBbUMsQ0FBQztBQUUvRixJQUFNLFlBQVksR0FBRyxjQUFjLGNBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBekMsQ0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzVDcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNFO0FBRXpCLElBQU0sSUFBSSxHQUFHLElBQUksMkNBQUksQ0FBQztJQUMzQixLQUFLLEVBQUUsNEJBQTRCO0lBQ25DLGVBQWUsRUFBRSxTQUFTO0lBRTFCLE1BQU0sRUFBRSxXQUFXO0lBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtJQUNqQixLQUFLLEVBQUUsbURBQUs7SUFFWixPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsUUFBUTtRQUVqQixNQUFNLEVBQUU7WUFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ25CLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRjtJQUVELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEdBQUc7S0FDWDtDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzLmdhbWVcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0IHsgY2xhbXAgfSBmcm9tICdAR2FtZS91dGlscyc7XG5cbmltcG9ydCB0eXBlIHsgQ2FtZXJhcyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgdHlwZSBQbGF5ZXIgZnJvbSAnQEdhbWUvUGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhTWFuYWdlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJpdmF0ZSBjYW1lcmE6IENhbWVyYXMuU2NlbmUyRC5DYW1lcmEpIHt9XG5cbiAgcHVibGljIGZvbGxvdyAodGFyZ2V0OiBQbGF5ZXIsIHkgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5jYW1lcmEuc3RhcnRGb2xsb3codGFyZ2V0LCBmYWxzZSwgMSwgMC4xLCAwLCB5KTtcbiAgfVxuXG4gIHB1YmxpYyB6b29tSW4gKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYW1vdW50KTtcbiAgICBjb25zdCB6b29tID0gTWF0aC5taW4oMSArIGFtb3VudCAqIDAuMDEsIDEuMik7XG4gICAgdGhpcy5jYW1lcmEuem9vbVRvKHpvb20sIDUwMCwgJ1F1YWQuZWFzZU91dCcpO1xuICB9XG5cbiAgcHVibGljIHpvb21PdXQgKGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBkdXJhdGlvbiA9IGNsYW1wKGR1cmF0aW9uLCA1MDAsIDM1MDApO1xuXG4gICAgdGhpcy5jYW1lcmEuc3RvcEZvbGxvdygpO1xuICAgIHRoaXMuY2FtZXJhLnpvb21UbygxLCBkdXJhdGlvbik7XG5cbiAgICB0aGlzLmNhbWVyYS5wYW4oXG4gICAgICB0aGlzLmNhbWVyYS5jZW50ZXJYLCB0aGlzLmNhbWVyYS5jZW50ZXJZLFxuICAgICAgZHVyYXRpb24sICdRdWFkLmVhc2VPdXQnXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGxheWVyIGFzIFBMQVlFUiB9IGZyb20gJ0BHYW1lL2NvbmZpZy5qc29uJztcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gJ3BoYXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XG4gIHByaXZhdGUgaXNKdW1waW5nID0gZmFsc2U7XG4gIHByaXZhdGUgYWxpdmUgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoc2NlbmU6IFNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dHVyZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUpO1xuXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgIHNjZW5lLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMpO1xuXG4gICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ21hcmlvJywge1xuICAgICAgICBzdGFydDogMCwgZW5kOiBQTEFZRVIuZnJhbWVzXG4gICAgICB9KSxcblxuICAgICAgZnJhbWVSYXRlOiAxNSxcbiAgICAgIGtleTogJ2p1bXAnXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMganVtcCAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWxpdmUgJiYgdGhpcy5ib2R5LnRvdWNoaW5nLmRvd24pIHtcbiAgICAgIHRoaXMuc2V0VmVsb2NpdHlZKC01MDAuMCk7XG4gICAgICB0aGlzLmFuaW1zLnBsYXkoJ2p1bXAnKTtcbiAgICAgIHRoaXMuaXNKdW1waW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGllIChmcm9tTGVmdDogYm9vbGVhbikge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGZyb21MZWZ0ID8gMSA6IC0xO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PlxuICAgICAgdGhpcy5zZXRPZmZzZXQoMCwgUExBWUVSLmhlaWdodCAvIC0zLjYpXG4gICAgLCAyNTApO1xuXG4gICAgdGhpcy5zZXRWZWxvY2l0eVgoMjUwICogZGlyZWN0aW9uKTtcbiAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcblxuICAgIHRoaXMuZmxpcFggPSBmcm9tTGVmdDtcbiAgICB0aGlzLmFsaXZlID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgYW5nbGU6IDkwICogZGlyZWN0aW9uIH0sXG4gICAgICBlYXNlOiAnUXVhZC5lYXNlSW5PdXQnLFxuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIHRhcmdldHM6IHRoaXNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldCBqdW1waW5nIChpc0p1bXBpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzSnVtcGluZyA9IGlzSnVtcGluZztcbiAgfVxuXG4gIHB1YmxpYyBnZXQganVtcGluZyAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNKdW1waW5nO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTY2VuZSwgUGh5c2ljcywgR2FtZU9iamVjdHMsIFR3ZWVucyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyByYW5kb21JbnQsIHJhbmRvbUVhc2luZyB9IGZyb20gJ0BHYW1lL3V0aWxzJztcblxuaW1wb3J0IENhbWVyYU1hbmFnZXIgZnJvbSAnQEdhbWUvQ2FtZXJhJztcbmltcG9ydCBDT05GSUcgZnJvbSAnQEdhbWUvY29uZmlnLmpzb24nO1xuaW1wb3J0IFBsYXllciBmcm9tICdAR2FtZS9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNjZW5lIHtcbiAgcHJpdmF0ZSBwbGF0Zm9ybVRhcmdldFBvc2l0aW9uID0gQ09ORklHLnBsYXRmb3JtLndpZHRoIC8gMjtcbiAgcHJpdmF0ZSBsZWZ0UGxhdGZvcm0gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuXG4gIHByaXZhdGUgcGxhdGZvcm1zITogUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXA7XG4gIHByaXZhdGUgcGxhdGZvcm1BbmltYXRpb24hOiBUd2VlbnMuVHdlZW47XG4gIHByaXZhdGUgY2FtZXJhITogQ2FtZXJhTWFuYWdlcjtcbiAgcHJpdmF0ZSBwbGF5ZXIhOiBQbGF5ZXI7XG5cbiAgcHJpdmF0ZSBhdXRvcGxheWluZyA9IGZhbHNlO1xuICBwcml2YXRlIGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBoYWxmSGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBoYWxmV2lkdGggPSAwO1xuICBwcml2YXRlIHNjb3JlID0gMDtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKHsga2V5OiAnU2NlbmUnIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwcmVsb2FkICgpOiB2b2lkIHtcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ3NreScsICdhc3NldHMvc2t5LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYnJpY2snLCAnYXNzZXRzL2JyaWNrLnBuZycpO1xuXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdtYXJpbycsICdhc3NldHMvbWFyaW8ucG5nJywge1xuICAgICAgZnJhbWVIZWlnaHQ6IENPTkZJRy5wbGF5ZXIuaGVpZ2h0LFxuICAgICAgZnJhbWVXaWR0aDogQ09ORklHLnBsYXllci53aWR0aFxuICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGUgKCk6IHZvaWQge1xuICAgIHRoaXMuaGFsZkhlaWdodCA9IHRoaXMuc2NhbGUuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmhhbGZXaWR0aCA9IHRoaXMuc2NhbGUud2lkdGggLyAyO1xuXG4gICAgdGhpcy5jcmVhdGVTa3koKTtcblxuICAgIGNvbnN0IGdyb3VuZCA9IHRoaXMuY3JlYXRlR3JvdW5kKCk7XG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLmNyZWF0ZVBsYXllcigpO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcbiAgICB0aGlzLmFkZElucHV0RXZlbnRzKCk7XG5cbiAgICB0aGlzLnBsYXRmb3JtcyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICB0aGlzLnBsYXllci5mbGlwWCA9IHRoaXMubGVmdFBsYXRmb3JtO1xuICAgIHRoaXMuY3JlYXRlUGxhdGZvcm0oKTtcblxuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIGdyb3VuZCk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5wbGF0Zm9ybXMsIHRoaXMub25QbGF0Zm9ybUxhbmRpbmcsIHVuZGVmaW5lZCwgdGhpcyk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNhbWVyYSAoKTogdm9pZCB7XG4gICAgY29uc3QgcGxheWVySGFsZiA9IENPTkZJRy5wbGF5ZXIuaGVpZ2h0IC8gMjtcbiAgICBjb25zdCBncm91bmRIZWlnaHQgPSBDT05GSUcucGxhdGZvcm0uaGVpZ2h0ICogMjtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYU1hbmFnZXIodGhpcy5jYW1lcmFzLm1haW4pO1xuXG4gICAgdGhpcy5jYW1lcmEuZm9sbG93KHRoaXMucGxheWVyLFxuICAgICAgdGhpcy5oYWxmSGVpZ2h0IC0gZ3JvdW5kSGVpZ2h0IC0gcGxheWVySGFsZlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uUGxhdGZvcm1MYW5kaW5nIChwbGF5ZXI6IEdhbWVPYmplY3RzLkdhbWVPYmplY3QsIHBsYXRmb3JtOiBHYW1lT2JqZWN0cy5HYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3QgbGFzdFBsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uc2l6ZSAtIDE7XG5cbiAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5waHlzaWNzLndvcmxkLm92ZXJsYXAodGhpcy5wbGF5ZXIsXG4gICAgICB0aGlzLnBsYXRmb3Jtcy5jaGlsZHJlbi5lbnRyaWVzW2xhc3RQbGF0Zm9ybV1cbiAgICApO1xuXG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHRoaXMuYWRkLnR3ZWVuKHRoaXMucGxheWVyLmRpZSh0aGlzLmxlZnRQbGF0Zm9ybSkpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FtZXJhLnpvb21PdXQodGhpcy5zY29yZSAqIDE0MCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGxheWVyLmp1bXBpbmcpIHtcbiAgICAgIHRoaXMucGxheWVyLmp1bXBpbmcgPSBmYWxzZTtcblxuICAgICAgaWYgKHBsYXRmb3JtLmdldERhdGEoJ2luZGV4JykgPT09IGxhc3RQbGF0Zm9ybSkge1xuICAgICAgICB0aGlzLmxlZnRQbGF0Zm9ybSA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gICAgICAgIHRoaXMucGxheWVyLmZsaXBYID0gdGhpcy5sZWZ0UGxhdGZvcm07XG5cbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbUluKCsrdGhpcy5zY29yZSk7XG4gICAgICAgIHRoaXMucGxhdGZvcm1BbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXRmb3JtKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTa3kgKCk6IHZvaWQge1xuICAgIGNvbnN0IHNreSA9IHRoaXMuYWRkLmltYWdlKHRoaXMuaGFsZldpZHRoLCB0aGlzLmhhbGZIZWlnaHQsICdza3knKTtcbiAgICBjb25zdCBza3lSYXRpbyA9IENPTkZJRy5iYWNrZ3JvdW5kLndpZHRoIC8gQ09ORklHLmJhY2tncm91bmQuaGVpZ2h0O1xuXG4gICAgY29uc3Qgc2t5SGVpZ2h0ID0gdGhpcy5zY2FsZS5oZWlnaHQgLyBza3kuaGVpZ2h0O1xuICAgIGNvbnN0IHNreVdpZHRoID0gc2t5SGVpZ2h0ICogc2t5UmF0aW87XG5cbiAgICBza3kuc2V0U2NhbGUoc2t5V2lkdGgsIHNreUhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUdyb3VuZCAoKTogUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXAge1xuICAgIGNvbnN0IGdyb3VuZCA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IENPTkZJRy5wbGF0Zm9ybTtcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gaGVpZ2h0IC8gMjtcblxuICAgIGNvbnN0IFZFUlRJQ0FMX1BMQVRGT1JNUyA9IDI7XG4gICAgY29uc3QgSE9SSVpPTlRBTF9QTEFURk9STVMgPSBNYXRoLmNlaWwodGhpcy5zY2FsZS53aWR0aCAvIHdpZHRoKTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IFZFUlRJQ0FMX1BMQVRGT1JNUzsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEhPUklaT05UQUxfUExBVEZPUk1TOyBjb2wrKykge1xuICAgICAgICBjb25zdCB4ID0gY29sICogd2lkdGggKyBoZWlnaHQ7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnNjYWxlLmhlaWdodCAtIChyb3cgKiBoZWlnaHQgKyBoYWxmSGVpZ2h0KTtcblxuICAgICAgICBncm91bmQuYWRkKHRoaXMucGh5c2ljcy5hZGQuc3RhdGljSW1hZ2UoeCwgeSwgJ2JyaWNrJyksIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBncm91bmQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBsYXllciAoKTogUGxheWVyIHtcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBDT05GSUcucGxhdGZvcm0ud2lkdGggKyBDT05GSUcucGxheWVyLmhlaWdodCAvIDI7XG4gICAgcmV0dXJuIG5ldyBQbGF5ZXIodGhpcywgdGhpcy5oYWxmV2lkdGgsIHRoaXMuc2NhbGUuaGVpZ2h0IC0gb2Zmc2V0Qm90dG9tLCAnbWFyaW8nKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkSW5wdXRFdmVudHMgKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsIHRoaXMucGxheWVyLmp1bXAuYmluZCh0aGlzLnBsYXllcikpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQbGF0Zm9ybSAoKTogdm9pZCB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IHggPSB0aGlzLmxlZnRQbGF0Zm9ybSA/IDAgOiB3aWR0aDtcblxuICAgIGNvbnN0IHBsYXRmb3JtSGVpZ2h0ID0gQ09ORklHLnBsYXRmb3JtLmhlaWdodDtcbiAgICBjb25zdCB5ID0gaGVpZ2h0IC0gcGxhdGZvcm1IZWlnaHQgKiAyLjUgLSB0aGlzLnNjb3JlICogcGxhdGZvcm1IZWlnaHQ7XG5cbiAgICBjb25zdCBwbGF0Zm9ybVBvc2l0aW9uID0gdGhpcy5sZWZ0UGxhdGZvcm1cbiAgICAgID8gLXRoaXMucGxhdGZvcm1UYXJnZXRQb3NpdGlvbiA6IHRoaXMucGxhdGZvcm1UYXJnZXRQb3NpdGlvbjtcblxuICAgIGNvbnN0IHBsYXRmb3JtID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNJbWFnZSh4ICsgcGxhdGZvcm1Qb3NpdGlvbiwgeSwgJ2JyaWNrJyk7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSBgJHt0aGlzLmxlZnRQbGF0Zm9ybSA/ICcrJyA6ICctJ309IDI0NGA7XG5cbiAgICBwbGF0Zm9ybS5zZXREYXRhKCdpbmRleCcsIHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLnNpemUpO1xuICAgIHRoaXMucGxhdGZvcm1zLmFkZChwbGF0Zm9ybSwgdHJ1ZSk7XG5cbiAgICB0aGlzLnBsYXRmb3JtQW5pbWF0aW9uID0gdGhpcy5hZGQudHdlZW4oe1xuICAgICAgb25VcGRhdGU6IHRoaXMudXBkYXRlUGxhdGZvcm1BbmltYXRpb24uYmluZCh0aGlzKSxcblxuICAgICAgZHVyYXRpb246IHJhbmRvbUludCgxMjUwLCAyNTAwKSxcbiAgICAgIGRlbGF5OiByYW5kb21JbnQoMCwgMTAwMCksXG4gICAgICBwcm9wczogeyB4OiBkZXN0aW5hdGlvbiB9LFxuXG4gICAgICBlYXNlOiByYW5kb21FYXNpbmcoKSxcbiAgICAgIHRhcmdldHM6IHBsYXRmb3JtXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBsYXRmb3JtQW5pbWF0aW9uICh0d2VlbjogVHdlZW5zLlR3ZWVuLCBwbGF0Zm9ybTogUGh5c2ljcy5BcmNhZGUuSW1hZ2UpOiB2b2lkIHtcbiAgICBwbGF0Zm9ybS5yZWZyZXNoQm9keSgpO1xuICAgIGlmICghdGhpcy5hdXRvcGxheWluZykgcmV0dXJuO1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5oYWxmV2lkdGggKyAodGhpcy5sZWZ0UGxhdGZvcm0gPyAtMjUwIDogMjUwKTtcblxuICAgIGlmICh0aGlzLmxlZnRQbGF0Zm9ybSAmJiBwbGF0Zm9ybS54ID49IG9mZnNldCkge1xuICAgICAgdGhpcy5wbGF5ZXIuanVtcCgpO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKHBsYXRmb3JtLnggPD0gb2Zmc2V0KSB7XG4gICAgICB0aGlzLnBsYXllci5qdW1wKCk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgTWF0aCBhcyBNYXRoVXRpbHMgfSBmcm9tICdwaGFzZXInO1xuXG50eXBlIEVhc2luZyA9ICh2OiBudW1iZXIsIG92ZXJzaG9vdD86IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gbnVtYmVyO1xuXG5jb25zdCBFQVNJTkdTOiBBcnJheTxFYXNpbmc+ID0gW1xuICBNYXRoVXRpbHMuRWFzaW5nLkxpbmVhcixcblxuICBNYXRoVXRpbHMuRWFzaW5nLlF1YWRyYXRpYy5JbixcbiAgTWF0aFV0aWxzLkVhc2luZy5RdWFkcmF0aWMuT3V0LFxuICBNYXRoVXRpbHMuRWFzaW5nLlF1YWRyYXRpYy5Jbk91dCxcblxuICBNYXRoVXRpbHMuRWFzaW5nLkN1YmljLkluLFxuICBNYXRoVXRpbHMuRWFzaW5nLkN1YmljLk91dCxcbiAgTWF0aFV0aWxzLkVhc2luZy5DdWJpYy5Jbk91dCxcblxuICBNYXRoVXRpbHMuRWFzaW5nLlF1YXJ0aWMuSW4sXG4gIE1hdGhVdGlscy5FYXNpbmcuUXVhcnRpYy5PdXQsXG4gIE1hdGhVdGlscy5FYXNpbmcuUXVhcnRpYy5Jbk91dCxcblxuICBNYXRoVXRpbHMuRWFzaW5nLlF1aW50aWMuSW4sXG4gIE1hdGhVdGlscy5FYXNpbmcuUXVpbnRpYy5PdXQsXG4gIE1hdGhVdGlscy5FYXNpbmcuUXVpbnRpYy5Jbk91dCxcblxuICBNYXRoVXRpbHMuRWFzaW5nLlNpbmUuSW4sXG4gIE1hdGhVdGlscy5FYXNpbmcuU2luZS5PdXQsXG4gIE1hdGhVdGlscy5FYXNpbmcuU2luZS5Jbk91dCxcblxuICBNYXRoVXRpbHMuRWFzaW5nLkV4cG8uSW4sXG4gIE1hdGhVdGlscy5FYXNpbmcuRXhwby5PdXQsXG4gIE1hdGhVdGlscy5FYXNpbmcuRXhwby5Jbk91dCxcblxuICBNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLkluLFxuICBNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLk91dCxcbiAgTWF0aFV0aWxzLkVhc2luZy5DaXJjdWxhci5Jbk91dCxcblxuICBNYXRoVXRpbHMuRWFzaW5nLkJhY2suSW4sXG4gIE1hdGhVdGlscy5FYXNpbmcuQmFjay5PdXQsXG4gIE1hdGhVdGlscy5FYXNpbmcuQmFjay5Jbk91dFxuXTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbUludCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblxuZXhwb3J0IGNvbnN0IGNsYW1wID0gKHZhbHVlOiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEpOiBudW1iZXIgPT4gTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSk7XG5cbmV4cG9ydCBjb25zdCByYW5kb21FYXNpbmcgPSAoKTogRWFzaW5nID0+IEVBU0lOR1NbcmFuZG9tSW50KDAsIEVBU0lOR1MubGVuZ3RoIC0gMSldO1xuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgU2NlbmUgZnJvbSAnQEdhbWUvU2NlbmUnO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKHtcbiAgdGl0bGU6ICdJbm5vdmVjcyB8IFRlc3QgYXNzaWdubWVudCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyMxNjlBQzUnLFxuXG4gIHBhcmVudDogJ2NvbnRhaW5lcicsXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICBzY2VuZTogU2NlbmUsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuXG4gICAgYXJjYWRlOiB7XG4gICAgICBncmF2aXR5OiB7IHk6IDk4MSB9LFxuICAgICAgZGVidWc6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgc2NhbGU6IHtcbiAgICBoZWlnaHQ6IDY0MCxcbiAgICB3aWR0aDogMzYwXG4gIH1cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBnYW1lLnNjYWxlLnJlZnJlc2goKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==