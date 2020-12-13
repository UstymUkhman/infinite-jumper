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







var default_1 = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(default_1, _super);
    function default_1() {
        var _this = _super.call(this, { key: 'Scene' }) || this;
        _this.platformTargetPosition = _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.platform.width / 2;
        _this.leftPlatform = Math.random() < 0.5;
        _this.autoplaying = false;
        _this.gamePaused = true;
        _this.gameOver = false;
        _this.halfHeight = 0;
        _this.halfWidth = 0;
        _this.score = 0;
        document.addEventListener('game:restart', _this.restart.bind(_this), false);
        return _this;
    }
    default_1.prototype.preload = function () {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('brick', 'assets/brick.png');
        this.load.image('button', 'assets/button.jpg');
        this.load.spritesheet('mario', 'assets/mario.png', {
            frameHeight: _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.height,
            frameWidth: _Game_config_json__WEBPACK_IMPORTED_MODULE_4__.player.width
        });
    };
    default_1.prototype.create = function () {
        this.halfHeight = this.scale.height / 2;
        this.halfWidth = this.scale.width / 2;
        this.createUI();
        this.createSky();
        this.createPlayer();
        this.createCamera();
        this.createInputEvents();
        this.player.flipX = this.leftPlatform;
        // this.scale.on('resize', this.resize, this);
        this.platforms = this.physics.add.staticGroup();
        this.physics.add.collider(this.player, this.createGround());
        this.physics.add.collider(this.player, this.platforms, this.onPlatformCollision, undefined, this);
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
        platform.body && platform.refreshBody();
        if (!this.autoplaying)
            return;
        var progress = tween.data[0].progress || 0;
        progress >= timing && this.player.jump();
    };
    // private resize (): void {
    //   console.log(arguments);
    //   console.log(this.scale);
    // }
    default_1.prototype.restart = function () {
        this.score = 0;
        this.player.reset();
        this.platforms.clear(true, true);
        this.camera.follow(this.player);
        this.playerRotation.stop();
        this.createPlatform();
        this.gamePaused = false;
        this.gameOver = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9VSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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Q0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztJQUV4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQVMsR0FBRyxDQUFDO0lBQ3ZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBUSxJQUFJLENBQUM7SUFDeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFNLElBQUksQ0FBQztJQUV4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQU8sR0FBRyxDQUFDO0lBQ3ZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBTSxHQUFHLENBQUM7SUFDdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFJLEdBQUcsQ0FBQztJQUV2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQU8sR0FBRyxDQUFDO0lBQ3ZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBTSxJQUFJLENBQUM7SUFDeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFJLElBQUksQ0FBQztJQUV4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQVUsR0FBRyxDQUFDO0lBQ3ZDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBUyxJQUFJLENBQUM7SUFDeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFPLEdBQUcsQ0FBQztJQUV2QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQVUsSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBUyxHQUFHLENBQUM7SUFDdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFPLElBQUksQ0FBQztJQUV4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQU0sSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBSyxJQUFJLENBQUM7SUFDeEMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFHLElBQUksQ0FBQztJQUV4QyxDQUFDLDJDQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQVUsSUFBSSxDQUFDO0lBQ3hDLENBQUMsMkNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBUyxHQUFHLENBQUM7SUFDdkMsQ0FBQywyQ0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFPLEdBQUcsQ0FBQztDQUN4QyxDQUFrQyxDQUFDLENBQUM7QUFFOUIsSUFBTSxLQUFLLEdBQUcsVUFBQyxLQUFhLEVBQUUsR0FBTyxFQUFFLEdBQU87SUFBaEIsNkJBQU87SUFBRSw2QkFBTztJQUNuRCxXQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUFuQyxDQUFtQyxDQUFDO0FBRS9CLElBQU0sU0FBUyxHQUFHLFVBQUMsR0FBVyxFQUFFLEdBQVc7SUFDaEQsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztBQUFqRCxDQUFpRCxDQUFDO0FBRTdDLElBQU0sWUFBWSxHQUFHO0lBQzFCLGNBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFBekMsQ0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9DNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNMO0FBRWhDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUM1QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBb0IsQ0FBQztJQUVsRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO1FBQ3RDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVWLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsZUFBSztRQUM3QyxLQUFLLENBQUMsV0FBVyxHQUFJLEtBQXFCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMxRCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFVixRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO1FBQ3ZDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNaLENBQUMsQ0FBQyxDQUFDO0FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSwyQ0FBSSxDQUFDO0lBQzNCLEtBQUssRUFBRSw0QkFBNEI7SUFDbkMsZUFBZSxFQUFFLFNBQVM7SUFFMUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBQ2pCLEtBQUssRUFBRSxtREFBSztJQUVaLE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxRQUFRO1FBRWpCLE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7WUFDbkIsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGO0lBRUQsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLDRDQUFLLENBQUMsTUFBTTtRQUNsQixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLE1BQU07S0FDZDtDQUNGLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzLmdhbWVcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0IHsgY2xhbXAgfSBmcm9tICdAR2FtZS91dGlscyc7XG5pbXBvcnQgdHlwZSB7IENhbWVyYXMgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHR5cGUgUGxheWVyIGZyb20gJ0BHYW1lL1BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYU1hbmFnZXIge1xuICBwcml2YXRlIGluaXRpYWxQb3NpdGlvbiA9IDA7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcml2YXRlIGNhbWVyYTogQ2FtZXJhcy5TY2VuZTJELkNhbWVyYSkge31cblxuICBwdWJsaWMgZm9sbG93ICh0YXJnZXQ6IFBsYXllciwgeSA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5jYW1lcmEuc3RhcnRGb2xsb3codGFyZ2V0LCBmYWxzZSwgMSwgMC4xLCAwLCB5KTtcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHk7XG4gIH1cblxuICBwdWJsaWMgem9vbUluIChhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHpvb20gPSBNYXRoLm1pbigxICsgYW1vdW50ICogMC4wMSwgMS4yNSk7XG4gICAgdGhpcy5jYW1lcmEuem9vbVRvKHpvb20sIDUwMCwgJ1F1YWQuZWFzZU91dCcpO1xuICAgIHRoaXMuY2FtZXJhLnNldEZvbGxvd09mZnNldCgwLCB0aGlzLmNhbWVyYS5mb2xsb3dPZmZzZXQueSAvIHpvb20pO1xuICB9XG5cbiAgcHVibGljIHpvb21PdXQgKGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBkdXJhdGlvbiA9IGNsYW1wKGR1cmF0aW9uLCA1MDAsIDM1MDApO1xuXG4gICAgdGhpcy5jYW1lcmEuc3RvcEZvbGxvdygpO1xuICAgIHRoaXMuY2FtZXJhLnpvb21UbygxLCBkdXJhdGlvbik7XG5cbiAgICB0aGlzLmNhbWVyYS5wYW4oXG4gICAgICB0aGlzLmNhbWVyYS5jZW50ZXJYLCB0aGlzLmNhbWVyYS5jZW50ZXJZLFxuICAgICAgZHVyYXRpb24sICdRdWFkLmVhc2VPdXQnXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGxheWVyIGFzIFBMQVlFUiB9IGZyb20gJ0BHYW1lL2NvbmZpZy5qc29uJztcbnR5cGUgUG9zaXRpb24gPSB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG5cbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gJ3BoYXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XG4gIHByaXZhdGUgaW5pdGlhbFBvc2l0aW9uOiBQb3NpdGlvbjtcbiAgcHJpdmF0ZSBvZmZzZXRUaW1lb3V0PzogbnVtYmVyO1xuXG4gIHByaXZhdGUgaXNKdW1waW5nID0gZmFsc2U7XG4gIHByaXZhdGUgaXNBbGl2ZSA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yIChzY2VuZTogU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0dXJlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZSk7XG5cbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgc2NlbmUucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB7IHgsIHkgfTtcblxuICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdtYXJpbycsIHtcbiAgICAgICAgc3RhcnQ6IDAsIGVuZDogUExBWUVSLmZyYW1lc1xuICAgICAgfSksXG5cbiAgICAgIGZyYW1lUmF0ZTogMTUsXG4gICAgICBrZXk6ICdqdW1wJ1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGp1bXAgKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQWxpdmUgJiYgdGhpcy5ib2R5LnRvdWNoaW5nLmRvd24pIHtcbiAgICAgIHRoaXMuc2V0VmVsb2NpdHlZKC01MDAuMCk7XG4gICAgICB0aGlzLmFuaW1zLnBsYXkoJ2p1bXAnKTtcbiAgICAgIHRoaXMuaXNKdW1waW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGllIChmcm9tTGVmdDogYm9vbGVhbikge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGZyb21MZWZ0ID8gMSA6IC0xO1xuXG4gICAgdGhpcy5vZmZzZXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PlxuICAgICAgdGhpcy5zZXRPZmZzZXQoMCwgUExBWUVSLmhlaWdodCAvIC0zLjYpXG4gICAgLCAyNTApO1xuXG4gICAgdGhpcy5zZXRWZWxvY2l0eVgoMjUwICogZGlyZWN0aW9uKTtcbiAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcblxuICAgIHRoaXMuZmxpcFggPSBmcm9tTGVmdDtcbiAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBhbmdsZTogOTAgKiBkaXJlY3Rpb24gfSxcbiAgICAgIGVhc2U6ICdRdWFkLmVhc2VJbk91dCcsXG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgdGFyZ2V0czogdGhpc1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgcmVzZXQgKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5pbml0aWFsUG9zaXRpb247XG4gICAgdGhpcy5zZXRDb2xsaWRlV29ybGRCb3VuZHMoZmFsc2UpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm9mZnNldFRpbWVvdXQpO1xuXG4gICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRQb3NpdGlvbih4LCB5KTtcbiAgICB0aGlzLnNldE9mZnNldCgwLCAwKTtcblxuICAgIHRoaXMuc2V0VmVsb2NpdHkoMCk7XG4gICAgdGhpcy5zZXRBbmdsZSgwKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQganVtcGluZyAoaXNKdW1waW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0p1bXBpbmcgPSBpc0p1bXBpbmc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGp1bXBpbmcgKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSnVtcGluZztcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2NlbmUsIFBoeXNpY3MsIEdhbWVPYmplY3RzLCBUd2VlbnMgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgcmFuZG9tSW50LCByYW5kb21FYXNpbmcgfSBmcm9tICdAR2FtZS91dGlscyc7XG5cbmltcG9ydCBDYW1lcmFNYW5hZ2VyIGZyb20gJ0BHYW1lL0NhbWVyYSc7XG5pbXBvcnQgQ09ORklHIGZyb20gJ0BHYW1lL2NvbmZpZy5qc29uJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnQEdhbWUvUGxheWVyJztcbmltcG9ydCBVSSBmcm9tICdAR2FtZS9VSSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2NlbmUge1xuICBwcml2YXRlIHBsYXRmb3JtVGFyZ2V0UG9zaXRpb24gPSBDT05GSUcucGxhdGZvcm0ud2lkdGggLyAyO1xuICBwcml2YXRlIHBsYXRmb3JtcyE6IFBoeXNpY3MuQXJjYWRlLlN0YXRpY0dyb3VwO1xuICBwcml2YXRlIGxlZnRQbGF0Zm9ybSA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gIHByaXZhdGUgcGxhdGZvcm1BbmltYXRpb24hOiBUd2VlbnMuVHdlZW47XG4gIHByaXZhdGUgcGxheWVyUm90YXRpb24hOiBUd2VlbnMuVHdlZW47XG5cbiAgcHJpdmF0ZSBjYW1lcmEhOiBDYW1lcmFNYW5hZ2VyO1xuICBwcml2YXRlIHBsYXllciE6IFBsYXllcjtcbiAgcHJpdmF0ZSB1aSE6IFVJO1xuXG4gIHByaXZhdGUgYXV0b3BsYXlpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBnYW1lUGF1c2VkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaGFsZkhlaWdodCA9IDA7XG4gIHByaXZhdGUgaGFsZldpZHRoID0gMDtcbiAgcHJpdmF0ZSBzY29yZSA9IDA7XG5cblx0cHVibGljIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcih7IGtleTogJ1NjZW5lJyB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWU6cmVzdGFydCcsXG4gICAgICB0aGlzLnJlc3RhcnQuYmluZCh0aGlzKSwgZmFsc2VcbiAgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBwcmVsb2FkICgpOiB2b2lkIHtcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ3NreScsICdhc3NldHMvc2t5LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYnJpY2snLCAnYXNzZXRzL2JyaWNrLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYnV0dG9uJywgJ2Fzc2V0cy9idXR0b24uanBnJyk7XG5cbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ21hcmlvJywgJ2Fzc2V0cy9tYXJpby5wbmcnLCB7XG4gICAgICBmcmFtZUhlaWdodDogQ09ORklHLnBsYXllci5oZWlnaHQsXG4gICAgICBmcmFtZVdpZHRoOiBDT05GSUcucGxheWVyLndpZHRoXG4gICAgfSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZSAoKTogdm9pZCB7XG4gICAgdGhpcy5oYWxmSGVpZ2h0ID0gdGhpcy5zY2FsZS5oZWlnaHQgLyAyO1xuICAgIHRoaXMuaGFsZldpZHRoID0gdGhpcy5zY2FsZS53aWR0aCAvIDI7XG5cbiAgICB0aGlzLmNyZWF0ZVVJKCk7XG4gICAgdGhpcy5jcmVhdGVTa3koKTtcbiAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcbiAgICB0aGlzLmNyZWF0ZUlucHV0RXZlbnRzKCk7XG5cbiAgICB0aGlzLnBsYXllci5mbGlwWCA9IHRoaXMubGVmdFBsYXRmb3JtO1xuICAgIC8vIHRoaXMuc2NhbGUub24oJ3Jlc2l6ZScsIHRoaXMucmVzaXplLCB0aGlzKTtcbiAgICB0aGlzLnBsYXRmb3JtcyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcblxuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHRoaXMuY3JlYXRlR3JvdW5kKCkpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHRoaXMucGxhdGZvcm1zLCB0aGlzLm9uUGxhdGZvcm1Db2xsaXNpb24sIHVuZGVmaW5lZCwgdGhpcyk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVVJICgpOiB2b2lkIHtcbiAgICB0aGlzLnVpID0gbmV3IFVJKHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTa3kgKCk6IHZvaWQge1xuICAgIGNvbnN0IHNreSA9IHRoaXMuYWRkLmltYWdlKHRoaXMuaGFsZldpZHRoLCB0aGlzLmhhbGZIZWlnaHQsICdza3knKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IENPTkZJRy5iYWNrZ3JvdW5kO1xuICAgIGNvbnN0IHNreVJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cbiAgICBjb25zdCBza3lIZWlnaHQgPSB0aGlzLnNjYWxlLmhlaWdodCAvIHNreS5oZWlnaHQ7XG4gICAgY29uc3Qgc2t5V2lkdGggPSBza3lIZWlnaHQgKiBza3lSYXRpbztcblxuICAgIHNreS5zZXRTY2FsZShza3lXaWR0aCwgc2t5SGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUGxheWVyICgpOiB2b2lkIHtcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBDT05GSUcucGxhdGZvcm0ud2lkdGggKyBDT05GSUcucGxheWVyLmhlaWdodCAvIDI7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMsIHRoaXMuaGFsZldpZHRoLCB0aGlzLnNjYWxlLmhlaWdodCAtIG9mZnNldEJvdHRvbSwgJ21hcmlvJyk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNhbWVyYSAoKTogdm9pZCB7XG4gICAgY29uc3QgcGxheWVySGFsZiA9IENPTkZJRy5wbGF5ZXIuaGVpZ2h0IC8gMjtcbiAgICBjb25zdCBncm91bmRIZWlnaHQgPSBDT05GSUcucGxhdGZvcm0uaGVpZ2h0ICogMjtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYU1hbmFnZXIodGhpcy5jYW1lcmFzLm1haW4pO1xuICAgIHRoaXMuY2FtZXJhLmZvbGxvdyh0aGlzLnBsYXllciwgdGhpcy5oYWxmSGVpZ2h0IC0gZ3JvdW5kSGVpZ2h0IC0gcGxheWVySGFsZik7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUlucHV0RXZlbnRzICgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLmdhbWVQYXVzZWQpIHtcbiAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWkuaGlkZVN0YXJ0VGV4dCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXRmb3JtKCk7XG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXllci5qdW1wKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUdyb3VuZCAoKTogUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXAge1xuICAgIGNvbnN0IHsgd2lkdGg6IHBsYXRmb3JtV2lkdGgsIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgfSA9IENPTkZJRy5wbGF0Zm9ybTtcbiAgICBjb25zdCB7IHdpZHRoOiBzY2VuZVdpZHRoLCBoZWlnaHQ6IHNjZW5lSGVpZ2h0IH0gPSB0aGlzLnNjYWxlO1xuXG4gICAgY29uc3QgaGFsZlBsYXRmb3JtSGVpZ2h0ID0gcGxhdGZvcm1IZWlnaHQgLyAyO1xuICAgIGNvbnN0IGdyb3VuZCA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcblxuICAgIGNvbnN0IEhPUklaT05UQUxfUExBVEZPUk1TID0gTWF0aC5jZWlsKHNjZW5lV2lkdGggLyBwbGF0Zm9ybVdpZHRoKTtcbiAgICBjb25zdCBWRVJUSUNBTF9QTEFURk9STVMgPSAyO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgVkVSVElDQUxfUExBVEZPUk1TOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgSE9SSVpPTlRBTF9QTEFURk9STVM7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBjb2wgKiBwbGF0Zm9ybVdpZHRoICsgcGxhdGZvcm1IZWlnaHQ7XG4gICAgICAgIGNvbnN0IHkgPSBzY2VuZUhlaWdodCAtIChyb3cgKiBwbGF0Zm9ybUhlaWdodCArIGhhbGZQbGF0Zm9ybUhlaWdodCk7XG5cbiAgICAgICAgZ3JvdW5kLmFkZCh0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0ltYWdlKHgsIHksICdicmljaycpLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdW5kO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQbGF0Zm9ybSAoKTogdm9pZCB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IFtlYXNpbmcsIHRpbWluZ10gPSByYW5kb21FYXNpbmcoKTtcbiAgICBjb25zdCB4ID0gdGhpcy5sZWZ0UGxhdGZvcm0gPyAwIDogd2lkdGg7XG5cbiAgICBjb25zdCBwbGF0Zm9ybUhlaWdodCA9IENPTkZJRy5wbGF0Zm9ybS5oZWlnaHQ7XG4gICAgY29uc3QgaGFsZlBsYXRmb3JtV2lkdGggPSBDT05GSUcucGxhdGZvcm0ud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSBoZWlnaHQgLSBwbGF0Zm9ybUhlaWdodCAqIDIuNSAtIHRoaXMuc2NvcmUgKiBwbGF0Zm9ybUhlaWdodDtcblxuICAgIGNvbnN0IHBsYXRmb3JtUG9zaXRpb24gPSB0aGlzLmxlZnRQbGF0Zm9ybVxuICAgICAgPyAtdGhpcy5wbGF0Zm9ybVRhcmdldFBvc2l0aW9uIDogdGhpcy5wbGF0Zm9ybVRhcmdldFBvc2l0aW9uO1xuXG4gICAgY29uc3QgcGxhdGZvcm0gPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0ltYWdlKHggKyBwbGF0Zm9ybVBvc2l0aW9uLCB5LCAnYnJpY2snKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGAke3RoaXMubGVmdFBsYXRmb3JtID8gJysnIDogJy0nfT0gJHt0aGlzLmhhbGZXaWR0aCArIGhhbGZQbGF0Zm9ybVdpZHRofWA7XG5cbiAgICBwbGF0Zm9ybS5zZXREYXRhKCdpbmRleCcsIHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLnNpemUpO1xuICAgIHRoaXMucGxhdGZvcm1zLmFkZChwbGF0Zm9ybSwgdHJ1ZSk7XG5cbiAgICB0aGlzLnBsYXRmb3JtQW5pbWF0aW9uID0gdGhpcy5hZGQudHdlZW4oe1xuICAgICAgb25VcGRhdGU6ICh0d2VlbjogVHdlZW5zLlR3ZWVuLCBwbGF0Zm9ybTogUGh5c2ljcy5BcmNhZGUuSW1hZ2UpID0+XG4gICAgICAgIHRoaXMudXBkYXRlUGxhdGZvcm1BbmltYXRpb24odHdlZW4sIHBsYXRmb3JtLCB0aW1pbmcpLFxuXG4gICAgICBkZWxheTogcmFuZG9tSW50KDAsIDEwMDApLFxuICAgICAgcHJvcHM6IHsgeDogZGVzdGluYXRpb24gfSxcblxuICAgICAgdGFyZ2V0czogcGxhdGZvcm0sXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIGVhc2U6IGVhc2luZ1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBsYXRmb3JtQ29sbGlzaW9uIChwbGF5ZXI6IEdhbWVPYmplY3RzLkdhbWVPYmplY3QsIHBsYXRmb3JtOiBHYW1lT2JqZWN0cy5HYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgIGNvbnN0IGxhc3RQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1zLmNoaWxkcmVuLnNpemUgLSAxO1xuXG4gICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMucGh5c2ljcy53b3JsZC5vdmVybGFwKHRoaXMucGxheWVyLFxuICAgICAgdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uZW50cmllc1tsYXN0UGxhdGZvcm1dXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmdhbWVPdmVyKSB0aGlzLm9uR2FtZU92ZXIoKTtcblxuICAgIGVsc2UgaWYgKHRoaXMucGxheWVyLmp1bXBpbmcpIHtcbiAgICAgIHRoaXMucGxheWVyLmp1bXBpbmcgPSBmYWxzZTtcblxuICAgICAgaWYgKHBsYXRmb3JtLmdldERhdGEoJ2luZGV4JykgPT09IGxhc3RQbGF0Zm9ybSkge1xuICAgICAgICB0aGlzLm9uUGxhdGZvcm1MYW5kaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkdhbWVPdmVyICgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbWVyYS56b29tT3V0KHRoaXMuc2NvcmUgKiAxNDApO1xuXG4gICAgdGhpcy5wbGF5ZXJSb3RhdGlvbiA9IHRoaXMuYWRkLnR3ZWVuKFxuICAgICAgdGhpcy5wbGF5ZXIuZGllKHRoaXMubGVmdFBsYXRmb3JtKVxuICAgICk7XG5cbiAgICB0aGlzLnVpLnRvZ2dsZUdhbWVPdmVyKHRydWUpO1xuICAgIHRoaXMuZ2FtZVBhdXNlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIG9uUGxhdGZvcm1MYW5kaW5nICgpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2NvcmU6dXBkYXRlJywge1xuICAgICAgZGV0YWlsOiB7IHNjb3JlOiArK3RoaXMuc2NvcmUgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5sZWZ0UGxhdGZvcm0gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICAgIHRoaXMucGxheWVyLmZsaXBYID0gdGhpcy5sZWZ0UGxhdGZvcm07XG5cbiAgICB0aGlzLmNhbWVyYS56b29tSW4odGhpcy5zY29yZSk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICB0aGlzLnBsYXRmb3JtQW5pbWF0aW9uLnN0b3AoKTtcbiAgICB0aGlzLmNyZWF0ZVBsYXRmb3JtKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBsYXRmb3JtQW5pbWF0aW9uICh0d2VlbjogVHdlZW5zLlR3ZWVuLCBwbGF0Zm9ybTogUGh5c2ljcy5BcmNhZGUuSW1hZ2UsIHRpbWluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgcGxhdGZvcm0uYm9keSAmJiBwbGF0Zm9ybS5yZWZyZXNoQm9keSgpO1xuICAgIGlmICghdGhpcy5hdXRvcGxheWluZykgcmV0dXJuO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0d2Vlbi5kYXRhWzBdLnByb2dyZXNzIHx8IDA7XG4gICAgcHJvZ3Jlc3MgPj0gdGltaW5nICYmIHRoaXMucGxheWVyLmp1bXAoKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgcmVzaXplICgpOiB2b2lkIHtcbiAgLy8gICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc2NhbGUpO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSByZXN0YXJ0ICgpOiB2b2lkIHtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnBsYXllci5yZXNldCgpO1xuXG4gICAgdGhpcy5wbGF0Zm9ybXMuY2xlYXIodHJ1ZSwgdHJ1ZSk7XG4gICAgdGhpcy5jYW1lcmEuZm9sbG93KHRoaXMucGxheWVyKTtcbiAgICB0aGlzLnBsYXllclJvdGF0aW9uLnN0b3AoKTtcbiAgICB0aGlzLmNyZWF0ZVBsYXRmb3JtKCk7XG5cbiAgICB0aGlzLmdhbWVQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gIH1cbn07XG4iLCJpbXBvcnQgdHlwZSB7IFNjZW5lLCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJ0BHYW1lL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBwcml2YXRlIHJlc3RhcnRCdXR0b24hOiBHYW1lT2JqZWN0cy5TcHJpdGU7XG4gIHByaXZhdGUgZ2FtZU92ZXJUZXh0OiBHYW1lT2JqZWN0cy5UZXh0O1xuICBwcml2YXRlIHJlc3RhcnRUZXh0ITogR2FtZU9iamVjdHMuVGV4dDtcbiAgcHJpdmF0ZSBzdGFydFRleHQ6IEdhbWVPYmplY3RzLlRleHQ7XG5cbiAgcHJpdmF0ZSByZXNldFNjb3JlRXZlbnQ6IEN1c3RvbUV2ZW50O1xuICBwcml2YXRlIHNob3dTY29yZUV2ZW50OiBDdXN0b21FdmVudDtcbiAgcHJpdmF0ZSByZXN0YXJ0RXZlbnQ6IEN1c3RvbUV2ZW50O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoc2NlbmU6IFNjZW5lKSB7XG4gICAgY29uc3QgdGV4dFN0eWxlID0gdGhpcy5nZXRTdHlsZShzY2VuZS5zY2FsZS53aWR0aCAqIDEuMDEpO1xuICAgIGNvbnN0IGhlaWdodCA9IHNjZW5lLnNjYWxlLmhlaWdodCAvIDMuMjtcblxuICAgIHRoaXMuZ2FtZU92ZXJUZXh0ID0gc2NlbmUuYWRkLnRleHQoMCwgaGVpZ2h0LCAnR2FtZSBPdmVyIScsIHRleHRTdHlsZSk7XG4gICAgdGhpcy5zdGFydFRleHQgPSBzY2VuZS5hZGQudGV4dCgwLCBoZWlnaHQsICdUYXAhJywgdGV4dFN0eWxlKTtcblxuICAgIHRoaXMucmVzZXRTY29yZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzY29yZTpyZXNldCcpO1xuICAgIHRoaXMuc2hvd1Njb3JlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Njb3JlOnNob3cnKTtcbiAgICB0aGlzLnJlc3RhcnRFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnZ2FtZTpyZXN0YXJ0Jyk7XG5cbiAgICB0aGlzLmdhbWVPdmVyVGV4dC52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVSZXN0YXJ0QnV0dG9uKHNjZW5lKTtcblxuICAgIHRoaXMuZ2FtZU92ZXJUZXh0LmRlcHRoID0gMTtcbiAgICB0aGlzLnN0YXJ0VGV4dC5kZXB0aCA9IDE7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJlc3RhcnRCdXR0b24gKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xuICAgIGNvbnN0IGhlaWdodCA9IHNjZW5lLnNjYWxlLmhlaWdodCAvIDI7XG4gICAgY29uc3Qgd2lkdGggPSBzY2VuZS5zY2FsZS53aWR0aCAvIDI7XG5cbiAgICB0aGlzLnJlc3RhcnRCdXR0b24gPSBzY2VuZS5hZGQuc3ByaXRlKHdpZHRoLCBoZWlnaHQsICdidXR0b24nKTtcbiAgICB0aGlzLnJlc3RhcnRCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcblxuICAgIHRoaXMucmVzdGFydFRleHQgPSBzY2VuZS5hZGQudGV4dCgwLCAwLCAnUmVzdGFydCcsIHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29tbW9uU3R5bGUoKSxcbiAgICAgIGZpeGVkSGVpZ2h0OiBoZWlnaHQsXG4gICAgICBmaXhlZFdpZHRoOiB3aWR0aCxcbiAgICAgIGZvbnRTaXplOiAnMjRweCdcbiAgICB9KTtcblxuICAgIHRoaXMucmVzdGFydFRleHQuc2V0UG9zaXRpb24oXG4gICAgICB3aWR0aCAvIDIgKyAxLCBoZWlnaHQgLSAxMFxuICAgICk7XG5cbiAgICB0aGlzLnJlc3RhcnRCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcblxuICAgIHRoaXMucmVzdGFydEJ1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc3RhcnRCdXR0b24uc2V0VGludCgweGYyYzRiMSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc3RhcnRCdXR0b24ub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5yZXNldFNjb3JlRXZlbnQpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLnJlc3RhcnRFdmVudCk7XG5cbiAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5jbGVhclRpbnQoKTtcbiAgICAgIHRoaXMudG9nZ2xlR2FtZU92ZXIoZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnJlc3RhcnRUZXh0LnZpc2libGUgPSBmYWxzZTtcblxuICAgIHRoaXMucmVzdGFydEJ1dHRvbi5kZXB0aCA9IDE7XG4gICAgdGhpcy5yZXN0YXJ0VGV4dC5kZXB0aCA9IDE7XG4gIH1cblxuICBwcml2YXRlIGdldFN0eWxlICh3aWR0aDogbnVtYmVyKTogb2JqZWN0IHtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRGb250U2l6ZSh3aWR0aCkgKiAyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29tbW9uU3R5bGUoKSxcbiAgICAgIGZvbnRTaXplOiBgJHtzaXplfXB4YCxcbiAgICAgIGZpeGVkSGVpZ2h0OiBzaXplLFxuICAgICAgZml4ZWRXaWR0aDogd2lkdGhcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb250U2l6ZSAod2lkdGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGNsYW1wKHdpZHRoIC8gMzAgKiAyLCAyNCwgNjQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21tb25TdHlsZSAoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgZmlsbDogJyNmZmZmZmYnLFxuXG4gICAgICBzaGFkb3c6IHtcbiAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgb2Zmc2V0WDogMi41LFxuICAgICAgICBvZmZzZXRZOiAyLjUsXG4gICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgIGJsdXI6IDVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUdhbWVPdmVyICh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uLnZpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnZpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMucmVzdGFydFRleHQudmlzaWJsZSA9IHZpc2libGU7XG4gIH1cblxuICBwdWJsaWMgaGlkZVN0YXJ0VGV4dCAoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLnNob3dTY29yZUV2ZW50KTtcbiAgICB0aGlzLnN0YXJ0VGV4dC52aXNpYmxlID0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1hdGggYXMgTWF0aFV0aWxzIH0gZnJvbSAncGhhc2VyJztcblxudHlwZSBFYXNpbmcgPSAodjogbnVtYmVyLCBvdmVyc2hvb3Q/OiBudW1iZXIpID0+IG51bWJlcjtcblxuY29uc3QgRUFTSU5HUyA9IFsuLi5uZXcgTWFwKFtcbiAgW01hdGhVdGlscy5FYXNpbmcuTGluZWFyLCAgICAgICAgICAwLjVdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1YWRyYXRpYy5JbiwgICAgMC41XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhZHJhdGljLk91dCwgICAwLjM1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhZHJhdGljLkluT3V0LCAwLjM1XSxcblxuICBbTWF0aFV0aWxzLkVhc2luZy5DdWJpYy5JbiwgICAgICAgIDAuNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkN1YmljLk91dCwgICAgICAgMC4yNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkN1YmljLkluT3V0LCAgICAgMC4zNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuUXVhcnRpYy5JbiwgICAgICAwLjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWFydGljLk91dCwgICAgIDAuMl0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1YXJ0aWMuSW5PdXQsICAgMC4zXSxcblxuICBbTWF0aFV0aWxzLkVhc2luZy5RdWludGljLkluLCAgICAgIDAuNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1aW50aWMuT3V0LCAgICAgMC4wMV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLlF1aW50aWMuSW5PdXQsICAgMC4yNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuU2luZS5JbiwgICAgICAgICAwLjVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5TaW5lLk91dCwgICAgICAgIDAuMzVdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5TaW5lLkluT3V0LCAgICAgIDAuNF0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuRXhwby5JbiwgICAgICAgICAwLjc1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuRXhwby5PdXQsICAgICAgICAwLjFdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5FeHBvLkluT3V0LCAgICAgIDAuMjVdLFxuXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLkluLCAgICAgMC43NV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLk91dCwgICAgMC4yNV0sXG4gIFtNYXRoVXRpbHMuRWFzaW5nLkNpcmN1bGFyLkluT3V0LCAgMC4zNV0sXG5cbiAgW01hdGhVdGlscy5FYXNpbmcuQmFjay5JbiwgICAgICAgICAwLjc1XSxcbiAgW01hdGhVdGlscy5FYXNpbmcuQmFjay5PdXQsICAgICAgICAwLjFdLFxuICBbTWF0aFV0aWxzLkVhc2luZy5CYWNrLkluT3V0LCAgICAgIDAuNF1cbl0pIGFzIHVua25vd24gYXMgW0Vhc2luZywgbnVtYmVyXVtdXTtcblxuZXhwb3J0IGNvbnN0IGNsYW1wID0gKHZhbHVlOiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEpOiBudW1iZXIgPT5cbiAgTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSk7XG5cbmV4cG9ydCBjb25zdCByYW5kb21JbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbmV4cG9ydCBjb25zdCByYW5kb21FYXNpbmcgPSAoKTogW0Vhc2luZywgbnVtYmVyXSA9PlxuICBFQVNJTkdTW3JhbmRvbUludCgwLCBFQVNJTkdTLmxlbmd0aCAtIDEpXTtcbiIsImltcG9ydCB7IEdhbWUsIFNjYWxlIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBTY2VuZSBmcm9tICdAR2FtZS9TY2VuZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njb3JlOnNob3cnLCAoKSA9PiB7XG4gICAgc2NvcmUuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB9LCBmYWxzZSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2NvcmU6dXBkYXRlJywgZXZlbnQgPT4ge1xuICAgIHNjb3JlLnRleHRDb250ZW50ID0gKGV2ZW50IGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwuc2NvcmU7XG4gIH0sIGZhbHNlKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY29yZTpyZXNldCcsICgpID0+IHtcbiAgICBzY29yZS50ZXh0Q29udGVudCA9ICcwJztcbiAgfSwgZmFsc2UpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IEdhbWUoe1xuICB0aXRsZTogJ0lubm92ZWNzIHwgVGVzdCBhc3NpZ25tZW50JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzE2OUFDNScsXG5cbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHNjZW5lOiBTY2VuZSxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG5cbiAgICBhcmNhZGU6IHtcbiAgICAgIGdyYXZpdHk6IHsgeTogOTgxIH0sXG4gICAgICBkZWJ1ZzogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBzY2FsZToge1xuICAgIG1vZGU6IFNjYWxlLlJFU0laRSxcbiAgICBwYXJlbnQ6ICdnYW1lJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==