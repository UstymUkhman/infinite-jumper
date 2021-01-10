declare interface PromptEvent extends Event {
  readonly platforms: Array<string>;

  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string
  }>;

  prompt(): Promise<void>;
}

declare interface WindowEventMap {
  'beforeinstallprompt': PromptEvent;
}

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

declare const PRODUCTION: boolean;

declare module 'phaser3-rex-plugins/*';
declare module 'phaser/types';

declare module '*.json' {
  export default JSON
}

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
