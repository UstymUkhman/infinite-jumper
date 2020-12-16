import { background } from '@Game/config.json';
import { Scene, GameObjects } from 'phaser';

export default class extends Scene {
  private center = { x: 0.0, y: 0.0 };
  private stars!: GameObjects.Image;
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
    this.load.image('stars', 'assets/stars.png');
  }

  private create (): void {
    this.scale.on('resize', this.resize, this);
    this.createEnvironment();
    this.resize();
  }

  private createEnvironment (): void {
    this.sky = this.add.image(0, 0, 'sky').setScrollFactor(0, 0.95);
    this.stars = this.add.image(0, 0, 'stars').setScrollFactor(0, 0);
  }

  private resize (): void {
    const topLevel = background.levels - 1.5;
    const midLevel = background.levels / 2;
    const { width, height } = this.scale;

    this.stars.displayHeight = width / 16 * 9;
    this.sky.displayHeight = height * 6;

    this.stars.displayWidth = width;
    this.sky.displayWidth = width;

    this.sky.setPosition(
      this.center.x,
      this.sky.displayHeight / -midLevel
    );

    this.stars.setPosition(
      this.center.x,
      this.stars.displayHeight * -topLevel
    );
  }
};
