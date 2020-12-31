import { Scene, Physics, GameObjects, Scale, Math, Tweens } from 'phaser';

import { randomEasing } from '@Game/utils';
import CameraManager from '@Game/Camera';
import CONFIG from '@Game/config.json';
import Player from '@Game/Player';
import UI from '@Game/UI';

export default class extends Scene
{
  private sky!: GameObjects.Image;
  private stars!: GameObjects.Image;
  private clouds!: GameObjects.Group;

  private platforms: Array<Physics.Arcade.StaticGroup> = [];
  private visibleStars = window.innerHeight * 3.75;

  private leftPlatform = Math.Between(0, 1) < 1;
  private ground?: Physics.Arcade.StaticGroup;

  private platformAnimation?: Tweens.Tween;
  private playerRotation?: Tweens.Tween;
  private camera!: CameraManager;

  private gamePaused = true;
  private gameOver = false;

  private player!: Player;
  private ui = new UI();
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

    this.createCamera();
    this.resize(this.scale);
    this.createEventListeners();

    this.ui.playIntro(this.camera.scrollToStart.bind(this.camera));
  }

  private start (): void {
    this.camera.follow(this.player, this.center.y - 182);
    this.createNextPlatform();
    this.gamePaused = false;
  }

  public update (): void {
    const starsArea = this.sky.displayHeight - this.visibleStars;

    const scrollArea = Math.Clamp(
      this.camera.y, this.visibleStars, this.sky.displayHeight
    ) - this.visibleStars;

    this.stars.setAlpha(scrollArea / starsArea);
  }

  private restart (): void {
    for (let p = this.platforms.length; p--;) {
      const platform = this.platforms[p];
      platform.clear(true, true);
    }

    this.platformAnimation?.stop();
    this.playerRotation?.stop();
    this.resize(this.scale);

    this.gameOver = false;
    this.player.reset();

    this.score = 0;
    this.start();
  }

  private createEnvironment (): void {
    this.sky = this.add.image(0, 0, 'sky').setScrollFactor(0, 1);
    this.stars = this.add.image(0, 0, 'stars').setScrollFactor(0).setAlpha(1);

    this.clouds = this.add.group(CONFIG.clouds.map(([x, y, scroll]) =>
      this.add.image(x, y, 'cloud').setScrollFactor(0, scroll)
    ));
  }

  private createCamera (): void {
    this.camera = new CameraManager(this.cameras.main);
    this.camera.y = this.cameras.main.centerY * CONFIG.levels * 2;
  }

  private createEventListeners (): void {
    document.addEventListener('game:restart', this.restart.bind(this));
    this.input.on('pointerdown', this.player.jump.bind(this.player));

    document.addEventListener('game:start', this.start.bind(this));
    this.scale.on('resize', this.resize, this);
  }

  private createNextPlatform (): void {
    const duration = this.score > 29 ? 1000 : this.score > 14 ? 1500 : 2000;
    const bricks = this.score > 24 ? 1 : this.score > 9 ? 2 : 3;

    const p = this.platforms.length;
    const width = 64 * bricks;

    const x = this.leftPlatform ? 32 - width : this.scale.width + 32;
    const y = this.scale.height - 160 - this.score * 64;

    this.platforms.push(this.physics.add.staticGroup({
      setXY: { x, y, stepX: 64 },
      defaultKey: 'brick',
      repeat: bricks - 1,
      key: 'brick'
    }));

    this.platforms[p].getChildren().forEach(platform => platform.setData('index', this.score));
    this.physics.add.collider(this.player, this.platforms[p], this.onPlatformCollision, undefined, this);

    this.platformAnimation = this.add.tween({
      props: { x: `${this.leftPlatform ? '+' : '-'}= ${this.center.x + width / 2}` },
      duration: Math.Between(duration, duration + 500),

      onUpdate: (tween, brick) => brick.refreshBody(),
      targets: this.platforms[p].getChildren(),

      delay: Math.Between(0, 1000),
      ease: randomEasing()
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
    this.leftPlatform = Math.Between(0, 1) < 1;
    this.player.lookLeft = this.leftPlatform;

    /* !this.autoplay && */ document.dispatchEvent(
      new CustomEvent('score:update', {
        detail: { score: ++this.score }
      })
    );

    this.camera.zoomIn(this.score);
    this.platformAnimation?.stop();
    this.createNextPlatform();
  }

  private onGameOver (): void {
    this.gameOver = true;
    this.gamePaused = true;

    this.ui.showGameOver();
    // this.removeInputEvents();
    this.camera.zoomOut(this.score * 140);

    this.playerRotation = this.add.tween(
      this.player.die(this.leftPlatform)
    );
  }

  /* private removeInputEvents (): void {
    this.input.off('pointerdown');
  } */

  private resize (size: Scale.ScaleManager): void {
    const { width, height } = size;

    this.visibleStars = height * 3.75;
    this.cameras.resize(width, height);
    this.setPlatformsPosition(width, height);

    this.physics.world.bounds.setSize(width, height);
    this.center = { x: width / 2, y: height / 2 };
    this.camera.resize(this.center.y - 182);

    this.setSky(width, height);
    this.setClouds(width);

    this.resetNextPlatform();
    this.setGround(width, height);
    this.player.resize(width, height, this.score);
  }

  private setSky (width: number, height: number): void {
    const displayWidth = height / 9 * 16;
    const midLevel = CONFIG.levels / 2;

    this.sky.displayWidth = width;
    this.sky.displayHeight = height * 6;

    this.sky.setPosition(
      this.center.x, this.sky.displayHeight / -midLevel
    );

    if (displayWidth < width) {
      this.stars.displayHeight = width / 16 * 9;
      this.stars.displayWidth = width;
    }

    else {
      this.stars.displayWidth = displayWidth;
      this.stars.displayHeight = height;
    }

    this.stars.setPosition(
      this.center.x, this.stars.displayHeight / 2
    );
  }

  private setClouds (width: number): void {
    const cloudWidth = width / (width < 992 ? 5 : 7.5);
    const cloudHeight = cloudWidth / 1.406;

    this.clouds.children.iterate((child: GameObjects.GameObject, index: number) => {
      const [offsetX, offsetY] = CONFIG.clouds[index];
      const cloud = child as GameObjects.Image;
      let { x, y } = this.center;

      x += x * offsetX;
      y += y * offsetY;

      cloud.setPosition(x, y);
      cloud.displayWidth = cloudWidth;
      cloud.displayHeight = cloudHeight;
    });
  }

  private setGround (width: number, height: number): void {
    const bricks = Math.CeilTo(width / 64);
    this.ground?.clear(true, true);

    for (let r = 2; r--;)
      for (let c = bricks; c--;)
        this.ground?.create(c * 64 + 32, height - (r * 64 + 32));
  }

  private setPlatformsPosition (width: number, height: number): void {
    for (let p = this.platforms.length; p--;) {
      const platform = this.platforms[p];
      const bricks = platform.getChildren();

      if (!bricks.length) continue;
      const { x, y } = bricks[0] as GameObjects.Image;

      platform.setXY(
        width / 2 - this.center.x + x, height - 160 - (this.center.y * 2 - y - 160), 64
      ).refresh();
    }
  }

  private resetNextPlatform (): void {
    if (this.platformAnimation && this.platformAnimation.isPlaying()) {
      this.platforms[this.platforms.length - 1].clear(true, true);
      this.platforms = this.platforms.slice(0, -1);

      this.platformAnimation.stop();
      !this.gameOver && this.createNextPlatform();
    }
  }
};
