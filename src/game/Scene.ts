import { background } from '@Game/config.json';
import { Scene, GameObjects } from 'phaser';

export default class extends Scene {
  private center = { x: 0.0, y: 0.0 };
  private sky!: GameObjects.Image;

  public constructor () {
    super({ key: 'Scene' });
  }

  private preload (): void {
    this.center = {
      x: this.scale.width / 2,
      y: this.scale.height / 2
    };

    this.load.image('sky', 'assets/sky.png');
  }

  private create (): void {
    this.sky = this.add.image(0, 0, 'sky');

    this.scale.on('resize', this.resize, this);
    this.resize();
  }

  private resize (): void {
    const midLevel = background.levels / 2;
    const { width, height } = this.scale;

    this.sky.displayHeight = height * 6;
    this.sky.displayWidth = width;

    this.sky.setPosition(
      this.scale.width / 2,
      this.sky.displayHeight / -midLevel
    );
  }
};
