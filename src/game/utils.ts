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

export const randomEasing = () => EASINGS[MathUtils.Between(0, EASINGS.length - 1)];
