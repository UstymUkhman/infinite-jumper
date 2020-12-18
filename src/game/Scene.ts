import CONFIG from '@Game/config.json';
import { Scene, Physics, GameObjects, Scale } from 'phaser';

export default class extends Scene
{
  private sky!: GameObjects.Image;
  private stars!: GameObjects.Image;
  private clouds!: GameObjects.Group;

  private ground?: Physics.Arcade.StaticGroup;

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
    this.load.image('brick', 'assets/brick.png');
  }

  private create (): void {
    this.scale.on('resize', this.resize, this);
    this.createEnvironment();
    this.resize(this.scale);
  }

  private createEnvironment (): void {
    this.sky = this.add.image(0, 0, 'sky').setScrollFactor(0, 0.95);
    this.stars = this.add.image(0, 0, 'stars').setScrollFactor(0, 0);

    this.clouds = this.add.group(CONFIG.clouds.map(([x, y, scroll]) =>
      this.add.image(x, y, 'cloud').setScrollFactor(0, scroll)
    ));
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
    const xs = width < 992 ? 5 : 7.5;
    const ys = width < 992 ? 1 : 2.5;

    const cloudWidth = width / xs;
    const cloudHeight = cloudWidth / 1.406;

    this.clouds.children.iterate((child: GameObjects.GameObject, index: number) => {
      const [offsetX, offsetY] = CONFIG.clouds[index];
      const cloud = child as GameObjects.Image;
      let { x, y } = this.center;

      x += x * offsetX;
      y += y * offsetY * ys;
      cloud.setPosition(x, y);

      cloud.displayWidth = cloudWidth;
      cloud.displayHeight = cloudHeight;
    });
  }

  private setGround (width: number, height: number): void {
    const bricks = Math.ceil(width / 64);
    this.ground?.clear(true, true);

    this.ground = this.physics.add.staticGroup({
      defaultKey: 'brick'
    });

    for (let r = 2; r--;)
      for (let c = bricks; c--;)
        this.ground.create(c * 64 + 32, height - (r * 64 + 32));
  }

  private resize (size: Scale.ScaleManager): void {
    const { width, height } = size;

    this.cameras.resize(width, height);
    this.center = { x: width / 2, y: height / 2 };

    this.setSky(width, height);
    this.setStars(width);
    this.setClouds(width);
    this.setGround(width, height);
  }
};
