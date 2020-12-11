import { Math as MathUtils } from 'phaser';

type Easing = (v: number, overshoot?: number | undefined) => number;

const EASINGS: Array<Easing> = [
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

export const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

export const clamp = (value: number, min = 0, max = 1): number => Math.max(min, Math.min(value, max));

export const randomEasing = (): Easing => EASINGS[randomInt(0, EASINGS.length - 1)];
