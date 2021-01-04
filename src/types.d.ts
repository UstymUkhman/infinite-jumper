declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

declare module '*.json' {
  const value: JSON
  export default value
}

declare module 'phaser/types';
declare module 'phaser3-rex-plugins/*';

declare const PRODUCTION: boolean;

declare type SoundFade = {
  fadeIn: (
    scene: Phaser.Scene,
    sound: Phaser.Sound.BaseSound | string,
    duration: number,
    endVolume?: number,
    startVolume?: number
  ) => void

  fadeOut: (
    scene: Phaser.Scene,
    sound: Phaser.Sound.BaseSound | string,
    duration: number,
    destroy?: boolean
  ) => void
};
