import Scene from '@Game/Scene';
import { Game, Scale } from 'phaser';
import SoundFadePlugin from 'phaser3-rex-plugins/plugins/soundfade-plugin';

export const game = new Game({
  audio: { disableWebAudio: true },
  backgroundColor: '#070B34',
  title: 'Infinite Jumper',

  type: Phaser.AUTO,
  scene: Scene,

  plugins: {
    global: [{
      plugin: SoundFadePlugin,
      key: 'rexSoundFade',
      start: true
    }]
  },

  physics: {
    default: 'arcade',

    arcade: {
      gravity: { y: 981 },
      debug: !PRODUCTION
    }
  },

  scale: {
    autoCenter: Scale.CENTER_BOTH,
    mode: Scale.RESIZE,

    parent: 'game',
    height: '100%',
    width: '100%'
  }
});
