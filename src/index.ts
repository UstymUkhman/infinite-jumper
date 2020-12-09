import { Game } from 'phaser';
import Main from './scenes/Main';

export const game = new Game({
  title: 'Innovecs | Test assignment',
  backgroundColor: '#000000',

  parent: 'container',
  type: Phaser.AUTO,
  scene: Main,

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
