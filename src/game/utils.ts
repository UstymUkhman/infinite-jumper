import { Math } from 'phaser';
export type Easing = (v: number, overshoot?: number) => number;

const EASINGS = [...new Map([
  [Math.Easing.Linear,          750 ],

  [Math.Easing.Quadratic.In,    750 ],
  [Math.Easing.Quadratic.Out,   1250],
  [Math.Easing.Quadratic.InOut, 750 ],

  [Math.Easing.Cubic.In,        750 ],
  [Math.Easing.Cubic.Out,       1500],
  [Math.Easing.Cubic.InOut,     1000],

  [Math.Easing.Quartic.In,      750 ],
  [Math.Easing.Quartic.Out,     1750],
  [Math.Easing.Quartic.InOut,   1000],

  [Math.Easing.Quintic.In,      750 ],
  [Math.Easing.Quintic.Out,     2500],
  [Math.Easing.Quintic.InOut,   2500],

  [Math.Easing.Sine.In,         750 ],
  [Math.Easing.Sine.Out,        500 ],
  [Math.Easing.Sine.InOut,      750 ],

  [Math.Easing.Expo.In,         500 ],
  [Math.Easing.Expo.Out,        3000],
  [Math.Easing.Expo.InOut,      2500],

  [Math.Easing.Circular.In,     750 ],
  [Math.Easing.Circular.Out,    2000],
  [Math.Easing.Circular.InOut,  1000],

  [Math.Easing.Back.In,         1750],
  [Math.Easing.Back.Out,        2500],
  [Math.Easing.Back.InOut,      2000]  // 1500
]) as unknown as [Easing, number][]];

export const clouds = [
  [ 0.65, -2.8, 0.95],

  [-0.65, -3.2, 0.90],
  [-0.45, -3.2, 0.90],

  [ 0.20, -3.6, 0.85],
  [ 0.00, -3.6, 0.85],

  [-0.75, -4.0, 0.85],
  [-0.55, -4.0, 0.85],
  [-0.35, -4.0, 0.85],

  [ 0.65, -4.3, 0.80],
  [ 0.45, -4.3, 0.80],
  [ 0.25, -4.3, 0.80],

  [-0.30, -4.7, 0.75],
  [-0.10, -4.7, 0.75],
  [ 0.10, -4.7, 0.75]
];

export const easing = (): [Easing, number] =>
  EASINGS[Math.Between(0, EASINGS.length - 1)];
