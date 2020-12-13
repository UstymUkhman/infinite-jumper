import { Game, Scale } from 'phaser';
import Scene from '@Game/Scene';

document.addEventListener('DOMContentLoaded', () => {
  const score = document.getElementById('score') as HTMLSpanElement;

  document.addEventListener('score:show', () => {
    score.classList.add('visible');
  }, false);

  document.addEventListener('score:update', event => {
    score.textContent = (event as CustomEvent).detail.score;
  }, false);

  document.addEventListener('score:reset', () => {
    score.textContent = '0';
  }, false);
});

export const game = new Game({
  title: 'Innovecs | Test assignment',
  backgroundColor: '#169AC5',

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
