import { Scene, Physics, GameObjects, Scale, Tweens } from 'phaser';
import { randomInt /*, randomEasing */ } from '@Game/utils';

import CameraManager from '@Game/Camera';
import CONFIG from '@Game/config.json';
import Player from '@Game/Player';

export default class extends Scene
{
  private sky!: GameObjects.Image;
  private stars!: GameObjects.Image;
  private clouds!: GameObjects.Group;

  private platform!: Physics.Arcade.StaticGroup;
  private ground?: Physics.Arcade.StaticGroup;
  private leftPlatform = Math.random() < 0.5;
  private platformAnimation?: Tweens.Tween;
  private playerRotation?: Tweens.Tween;

  private camera!: CameraManager;
  private gamePaused = true;
  private autoplay = false;
  private gameOver = false;
  private player!: Player;
  private score = 0;

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
    this.player = new Player(this, 'mario');
    this.player.lookLeft = this.leftPlatform;

    this.ground = this.physics.add.staticGroup({ defaultKey: 'brick' });
    this.physics.add.collider(this.player, this.ground as Physics.Arcade.StaticGroup);

    this.scale.on('resize', this.onResize, this);
    this.onResize(this.scale);
    this.gamePaused = false;

    this.createCamera();
    this.createInputEvents();
    this.createNextPlatform(3);
  }

  private createEnvironment (): void {
    this.sky = this.add.image(0, 0, 'sky').setScrollFactor(0, 1);
    this.stars = this.add.image(0, 0, 'stars').setScrollFactor(0).setAlpha(0);

    this.clouds = this.add.group(CONFIG.clouds.map(([x, y, scroll]) =>
      this.add.image(x, y, 'cloud').setScrollFactor(0, scroll)
    ));
  }

  private createCamera (): void {
    this.camera = new CameraManager(this.cameras.main);
    this.camera.follow(this.player, this.center.y - 182);
  }

  private createInputEvents (): void {
    this.input.on('pointerdown', this.player.jump.bind(this.player));
  }

  private createNextPlatform (bricks: number): void {
    const width = 64 * bricks;
    // const [easing, minDuration] = randomEasing();

    const x = this.leftPlatform ? 32 - width : this.scale.width + 32;
    const y = this.scale.height - 160 - this.score * 64;

    this.platform = this.physics.add.staticGroup({
      setXY: { x, y, stepX: 64 },
      defaultKey: 'brick',
      repeat: bricks - 1,
      key: 'brick'
    });

    this.platform.getChildren().forEach(platform =>
      platform.setData('index', this.score)
    );

    this.physics.add.collider(this.player, this.platform, this.onPlatformCollision, undefined, this);

    this.platformAnimation = this.add.tween({
      props: { x: `${this.leftPlatform ? '+' : '-'}= ${this.center.x + width / 2}` },
      onUpdate: (tween, platform) => platform.refreshBody(),

      targets: this.platform.getChildren(),
      duration: randomInt(500, 2500),
      delay: randomInt(0, 1000)
    });
  }

  private onPlatformCollision (player: GameObjects.GameObject, platform: GameObjects.GameObject): void {
    if (this.gameOver) return;

    if (this.physics.world.overlap(player, platform)) {
      this.onGameOver();
    }

    else if (this.player.jumping) {
      this.player.jumping = false;

      if (platform.getData('index') === this.score) {
        this.onPlatformLanding();
      }
    }
  }

  private onPlatformLanding (): void {
    this.leftPlatform = Math.random() < 0.5;
    this.player.lookLeft = this.leftPlatform;

    !this.autoplay && document.dispatchEvent(
      new CustomEvent('score:update', {
        detail: { score: ++this.score }
      })
    );

    this.camera.zoomIn(this.score);
    this.platformAnimation?.stop();
    this.createNextPlatform(3);
  }

  private onGameOver (): void {
    this.gameOver = true;
    this.gamePaused = true;

    this.removeInputEvents();
    this.camera.zoomOut(this.score * 140);

    this.playerRotation = this.add.tween(
      this.player.die(this.leftPlatform)
    );
  }

  private removeInputEvents (): void {
    this.input.off('pointerdown');
  }

  private onResize (size: Scale.ScaleManager): void {
    // const lastHeight = this.center.y * 2;
    // const lastWidth = this.center.x * 2;
    const { width, height } = size;

    this.cameras.resize(width, height);
    this.center = { x: width / 2, y: height / 2 };
    this.physics.world.bounds.setSize(width, height);

    this.setSky(width, height);
    this.setClouds(width);

    this.setGround(width, height);
    this.player.resize(width, height);

    // if (this.platform) {
    //   const platformWidth = 64 * this.platform.children.entries.length;
    //   const firstBrick = this.platform.getChildren()[0] as GameObjects.Image;

    //   this.platform.setXY(
    //     ((width - platformWidth) / 2) * (firstBrick.x - 32) / ((lastWidth - platformWidth) / 2) + 32,
    //     height - 160 - (lastHeight - firstBrick.y - 160) * 64, 64
    //   ).refresh();
    // }
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
};
