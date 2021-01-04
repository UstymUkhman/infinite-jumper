import { Math } from 'phaser';

const EASINGS = [
  Math.Easing.Linear,

  Math.Easing.Quadratic.In,
  Math.Easing.Quadratic.Out,
  Math.Easing.Quadratic.InOut,

  Math.Easing.Cubic.In,
  Math.Easing.Cubic.Out,
  Math.Easing.Cubic.InOut,

  Math.Easing.Quartic.In,
  Math.Easing.Quartic.Out,
  Math.Easing.Quartic.InOut,

  Math.Easing.Quintic.In,
  Math.Easing.Quintic.Out,
  Math.Easing.Quintic.InOut,

  Math.Easing.Sine.In,
  Math.Easing.Sine.Out,
  Math.Easing.Sine.InOut,

  Math.Easing.Expo.In,
  Math.Easing.Expo.Out,
  Math.Easing.Expo.InOut,

  Math.Easing.Circular.In,
  Math.Easing.Circular.Out,
  Math.Easing.Circular.InOut,

  Math.Easing.Back.In,
  Math.Easing.Back.Out,
  Math.Easing.Back.InOut
];

export const clouds = [
  [-0.95, -3.0, 0.85],
  [-0.75, -3.0, 0.85],
  [-0.55, -3.0, 0.85],

  [0.45,  -3.2, 0.95],
  [0.25,  -3.2, 0.95],

  [-0.2,  -3.3, 0.90],

  [0.85,  -3.5, 0.75],
  [0.65,  -3.5, 0.75],
  [0.45,  -3.5, 0.75]
];

export const easing = () =>
  EASINGS[Math.Between(0, EASINGS.length - 1)];
