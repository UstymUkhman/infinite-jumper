import { Game, Scale } from 'phaser';
import Scene from '@Game/Scene';

export const game = new Game({
  backgroundColor: '#070B34',
  title: 'Infinite Jumper',

  type: Phaser.AUTO,
  scene: Scene,

  physics: {
    default: 'arcade',

    arcade: {
      gravity: { y: 981 },
      debug: !PRODUCTION
    }
  },

  scale: {
    mode: Scale.RESIZE,
    parent: 'game',
    height: '100%',
    width: '100%'
  }
});
