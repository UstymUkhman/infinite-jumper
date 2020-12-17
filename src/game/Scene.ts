import CONFIG from '@Game/config.json';
import { Scene, GameObjects, Scale } from 'phaser';

export default class extends Scene {
  private clouds!: GameObjects.Group;
  private stars!: GameObjects.Image;
  private sky!: GameObjects.Image;

  private center = {
    y: window.innerHeight / 2,
    x: window.innerWidth / 2
  };

  public constructor () {
    super({ key: 'Scene' });
  }

  private preload (): void {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('stars', 'assets/stars.png');
    this.load.image('cloud', 'assets/cloud.png');
  }

  private create (): void {
    this.scale.on('resize', this.resize, this);
    this.createEnvironment();
    this.resize(this.scale);
  }

  private createEnvironment (): void {
    const { width, height } = this.scale;

    this.stars = this.add.image(0, 0, 'stars').setScrollFactor(0, 0);
    this.sky = this.add.image(0, 0, 'sky').setScrollFactor(0, 0.95);
    this.clouds = this.add.group({ name: 'clouds' });

    this.setSky(width, height);
    this.setClouds(width);
    this.setStars(width);
  }

  private setSky (width: number, height: number): void {
    const midLevel = CONFIG.levels / 2;

    this.sky.displayWidth = width;
    this.sky.displayHeight = height * 6;

    this.sky.setPosition(
      this.center.x,
      this.sky.displayHeight / -midLevel
    );
  }

  private setStars (width: number): void {
    const topLevel = CONFIG.levels - 1.5;

    this.stars.displayWidth = width;
    this.stars.displayHeight = width / 16 * 9;

    this.stars.setPosition(
      this.center.x,
      this.stars.displayHeight * -topLevel
    );
  }

  private setClouds (width: number): void {
    const cloudWidth = width / 7.5;
    const cloudHeight = cloudWidth / 1.406;

    CONFIG.clouds.forEach(position => {
      let { x, y } = this.center;

      x += x * position[0];
      y += y * position[1];

      const cloud = this.add.image(x, y, 'cloud');

      cloud.displayWidth = cloudWidth;
      cloud.displayHeight = cloudHeight;

      this.clouds.add(cloud);
    });

    this.clouds.setY(this.center.y);
  }

  private resize (size: Scale.ScaleManager): void {
    const { width, height } = size;

    this.cameras.resize(width, height);
    this.center = { x: width / 2, y: height / 2 };

    this.setSky(width, height);
    this.setClouds(width);
    this.setStars(width);
  }
};
