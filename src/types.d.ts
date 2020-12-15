declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

declare module '*.json' {
  const value: JSON
  export default value
}

declare module 'phaser/types';

declare const PRODUCTION: boolean;
