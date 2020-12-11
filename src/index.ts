import { Game, Scale } from 'phaser';
import Scene from '@Game/Scene';

export const game = new Game({
  title: 'Innovecs | Test assignment',
  backgroundColor: '#169AC5',

  type: Phaser.AUTO,
  scene: Scene,

  physics: {
    default: 'arcade',

    arcade: {
      gravity: { y: 981 },
      debug: true
    }
  },

  scale: {
    mode: Scale.RESIZE,
    parent: 'game',
    height: '100%',
    width: '100%'
  }
});
