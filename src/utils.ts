// https://stackoverflow.com/questions/56289506/phaser-3-how-to-create-smooth-zooming-effect
// https://photonstorm.github.io/phaser3-docs/Phaser.Cameras.Scene2D.Effects.Zoom.html
// https://github.com/photonstorm/phaser/blob/v3.22.0/src/math/easing/EaseMap.js
// https://github.com/photonstorm/phaser/blob/v3.22.0/src/math/easing/index.js
// https://github.com/photonstorm/phaser/blob/v3.22.0/src/math/RandomXY.js
// https://phaser.io/examples/v3/view/camera/follow-zoom
// https://samme.github.io/phaser-examples-mirror/camera/zooming%20the%20camera.html
// https://github.com/photonstorm/phaser3-examples/blob/master/public/src/camera/follow%20zoom.js

import { Math as MathUtils } from 'phaser';

const EASINGS = [
  MathUtils.Easing.Linear,

  MathUtils.Easing.Quadratic.In,
  MathUtils.Easing.Quadratic.Out,
  MathUtils.Easing.Quadratic.InOut,

  MathUtils.Easing.Cubic.In,
  MathUtils.Easing.Cubic.Out,
  MathUtils.Easing.Cubic.InOut,

  MathUtils.Easing.Quartic.In,
  MathUtils.Easing.Quartic.Out,
  MathUtils.Easing.Quartic.InOut,

  MathUtils.Easing.Quintic.In,
  MathUtils.Easing.Quintic.Out,
  MathUtils.Easing.Quintic.InOut,

  MathUtils.Easing.Sine.In,
  MathUtils.Easing.Sine.Out,
  MathUtils.Easing.Sine.InOut,

  MathUtils.Easing.Expo.In,
  MathUtils.Easing.Expo.Out,
  MathUtils.Easing.Expo.InOut,

  MathUtils.Easing.Circular.In,
  MathUtils.Easing.Circular.Out,
  MathUtils.Easing.Circular.InOut,

  MathUtils.Easing.Back.In,
  MathUtils.Easing.Back.Out,
  MathUtils.Easing.Back.InOut
];

export const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const randomEasing = (): Function =>
  EASINGS[randomInt(0, EASINGS.length - 1)];
