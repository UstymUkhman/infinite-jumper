import { Game } from 'phaser';
import Scene from '@Game/Scene';

export const game = new Game({
  title: 'Innovecs | Test assignment',
  backgroundColor: '#169AC5',

  parent: 'container',
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
    height: 640,
    width: 360
  }
});

window.addEventListener('resize', () => {
  game.scale.refresh();
});
