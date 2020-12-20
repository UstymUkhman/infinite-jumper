import { Scene, Physics, GameObjects, Scale } from 'phaser';

import CONFIG from '@Game/config.json';
import Player from '@Game/Player';

export default class extends Scene
{
  private sky!: GameObjects.Image;
  private stars!: GameObjects.Image;
  private clouds!: GameObjects.Group;

  private ground?: Physics.Arcade.StaticGroup;
  private player!: Player;

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

    this.load.spritesheet('mario', 'assets/mario.png', {
      frameHeight: 108,
      frameWidth: 70
    });
  }

  private create (): void {
    this.createEnvironment();
    this.createInputEvents();

    this.player = new Player(this, 'mario');
    this.ground = this.physics.add.staticGroup({ defaultKey: 'brick' });

    this.physics.add.collider(this.player, this.ground as Physics.Arcade.StaticGroup);
    // this.physics.add.collider(this.player, this.platforms, this.onPlatformCollision, undefined, this);

    this.scale.on('resize', this.onResize, this);
    this.onResize(this.scale);
  }

  private createEnvironment (): void {
    this.sky = this.add.image(0, 0, 'sky').setScrollFactor(0, 1);
    this.stars = this.add.image(0, 0, 'stars').setScrollFactor(0).setAlpha(0);

    this.clouds = this.add.group(CONFIG.clouds.map(([x, y, scroll]) =>
      this.add.image(x, y, 'cloud').setScrollFactor(0, scroll)
    ));
  }

  private createInputEvents (): void {
    this.input.on('pointerdown', () => {
      this.player.jump();
    });
  }

  private setSky (width: number, height: number): void {
    const midLevel = CONFIG.levels / 2;

    this.sky.displayWidth = width;
    this.sky.displayHeight = height * 6;

    this.sky.setPosition(
      this.center.x, this.sky.displayHeight / -midLevel
    );

    this.stars.displayWidth = height / 9 * 16;
    this.stars.displayHeight = height;

    this.stars.setPosition(
      this.center.x, this.stars.displayHeight / 2
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

    for (let r = 2; r--;)
      for (let c = bricks; c--;)
        this.ground?.create(c * 64 + 32, height - (r * 64 + 32));
  }

  private onResize (size: Scale.ScaleManager): void {
    const { width, height } = size;

    this.cameras.resize(width, height);
    this.center = { x: width / 2, y: height / 2 };

    this.setSky(width, height);
    this.setClouds(width);

    this.setGround(width, height);
    this.player.resize(width, height);
  }
};
