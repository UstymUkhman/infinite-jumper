import { Math as MathUtils } from 'phaser';

type Easing = (v: number, overshoot?: number) => number;

const EASINGS = [...new Map([
  [MathUtils.Easing.Linear,          0.5],

  [MathUtils.Easing.Quadratic.In,    0.5],
  [MathUtils.Easing.Quadratic.Out,   0.35],
  [MathUtils.Easing.Quadratic.InOut, 0.35],

  [MathUtils.Easing.Cubic.In,        0.5],
  [MathUtils.Easing.Cubic.Out,       0.25],
  [MathUtils.Easing.Cubic.InOut,     0.35],

  [MathUtils.Easing.Quartic.In,      0.5],
  [MathUtils.Easing.Quartic.Out,     0.2],
  [MathUtils.Easing.Quartic.InOut,   0.3],

  [MathUtils.Easing.Quintic.In,      0.5],
  [MathUtils.Easing.Quintic.Out,     0.01],
  [MathUtils.Easing.Quintic.InOut,   0.25],

  [MathUtils.Easing.Sine.In,         0.5],
  [MathUtils.Easing.Sine.Out,        0.35],
  [MathUtils.Easing.Sine.InOut,      0.4],

  [MathUtils.Easing.Expo.In,         0.75],
  [MathUtils.Easing.Expo.Out,        0.1],
  [MathUtils.Easing.Expo.InOut,      0.25],

  [MathUtils.Easing.Circular.In,     0.75],
  [MathUtils.Easing.Circular.Out,    0.25],
  [MathUtils.Easing.Circular.InOut,  0.35],

  [MathUtils.Easing.Back.In,         0.75],
  [MathUtils.Easing.Back.Out,        0.1],
  [MathUtils.Easing.Back.InOut,      0.4]
]) as unknown as [Easing, number][]];

export const clamp = (value: number, min = 0, max = 1): number =>
  Math.max(min, Math.min(value, max));

export const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const randomEasing = (): [Easing, number] =>
  EASINGS[randomInt(0, EASINGS.length - 1)];
