import type { Physics, GameObjects, Sound, Scale, Tweens } from 'phaser';
import { Easing, easing, clouds } from '@Game/utils';
import { Scene, Math as MathUtils } from 'phaser';

import Camera from '@Game/Camera';
import Player from '@Game/Player';
import Music from '@Game/Music';
import UI from '@Game/UI';

export default class extends Scene
{
  private sky!: GameObjects.Image;
  private stars!: GameObjects.Image;
  private clouds!: GameObjects.Group;

  private platforms: Array<Physics.Arcade.StaticGroup> = [];
  private leftPlatform = MathUtils.Between(0, 1) < 1;

  private visibleStars = window.innerHeight * 3.75;
  private ground?: Physics.Arcade.StaticGroup;

  private platformAnimation?: Tweens.Tween;
  private playerRotation?: Tweens.Tween;
  private landing!: Sound.BaseSound;

  private soundsEffects = true;
  private gamePaused = true;
  private gameOver = false;
  private autoplay = false;

  private camera!: Camera;
  private player!: Player;

  private playerScore = 0;
  private music!: Music;
  private ui = new UI;
  private score = 0;

  private center = {
    y: window.innerHeight / 2,
    x: window.innerWidth / 2
  };

  public constructor () {
    super({ key: 'Scene' });
  }

  private preload (): void {
    this.load.image('sky', 'assets/image/sky.png');
    this.load.image('stars', 'assets/image/stars.png');
    this.load.image('cloud', 'assets/image/cloud.png');
    this.load.image('brick', 'assets/image/brick.png');

    this.load.audio('VanHalen', 'assets/audio/Jump.mp3');
    this.load.audio('Queen', 'assets/audio/DontStopMeNow.mp3');
    this.load.audio('HouseOfPain', 'assets/audio/JumpAround.mp3');

    this.load.audio('landing', 'assets/audio/landing.wav');
    this.load.audio('jump', 'assets/audio/jump.wav');
    this.load.audio('die', 'assets/audio/die.wav');

    this.load.spritesheet('mario',
      'assets/image/mario.png', {
        frameHeight: 108,
        frameWidth: 70
      }
    );
  }

  private create (): void {
    this.createEnvironment();
    this.createCamera();

    this.createPlayer();
    this.resize(this.scale);

    this.createSoundEffects();
    this.createEventListeners();

    this.music = new Music(this,
      this.plugins.get('rexSoundFade'),
      ['VanHalen', 'Queen', 'HouseOfPain']
    );

    this.ui.playIntro(this.camera.scrollToStart.bind(this.camera));
  }

  private start (): void {
    this.gamePaused = false;
    this.createNextPlatform();
    this.camera.follow(this.player, this.center.y - 182);
  }

  public update (): void {
    if (this.gameOver) return;

    const starsArea = this.sky.displayHeight - this.visibleStars;

    const scrollArea = MathUtils.Clamp(
      this.camera.y, this.visibleStars, this.sky.displayHeight
    ) - this.visibleStars;

    this.stars.setAlpha(scrollArea / starsArea);
  }

  private restart (): void {
    for (let p = this.platforms.length; p--;) {
      this.platforms[p].clear(true, true);
      this.platforms = this.platforms.slice(0, p);
    }

    this.platformAnimation?.stop();
    this.playerRotation?.stop();
    this.resize(this.scale);

    this.gameOver = false;
    this.playerScore = 0;
    this.player.reset();

    this.score = 0;
    this.start();
  }

  private createEnvironment (): void {
    this.sky = this.add.image(0, 0, 'sky').setScrollFactor(0, 1);
    this.stars = this.add.image(0, 0, 'stars').setScrollFactor(0).setAlpha(1);

    this.clouds = this.add.group(clouds.map(([x, y, scroll]) =>
      this.add.image(x, y, 'cloud').setScrollFactor(0, scroll)
    ));

    this.ground = this.physics.add.staticGroup({ defaultKey: 'brick' });
  }

  private createCamera (): void {
    this.camera = new Camera(this.cameras.main);
    this.camera.y = this.cameras.main.centerY * 12;
  }

  private createPlayer (): void {
    this.player = new Player(this, 'mario');
    this.player.lookLeft = this.leftPlatform;
    this.physics.add.collider(this.player, this.ground!);
  }

  private createSoundEffects (): void {
    this.landing = this.sound.add('landing', {
      volume: 0.25,
      seek: 0.015
    });
  }

  private createEventListeners (): void {
    this.scale.on('resize', this.resize, this);
    document.addEventListener('game:restart', this.restart.bind(this));

    this.input.on('pointerdown', () => !this.autoplay && this.player.jump());
    document.addEventListener('option:click', () => this.landing.play({ volume: 0.1 }));

    document.addEventListener('game:pause', (event: CustomEventInit) => {
      this.gamePaused = !this.gamePaused;

      if (this.gamePaused) {
        this.platformAnimation?.pause();
      }

      else {
        const played = !this.autoplay;
        this.autoplay = event.detail.autoplay;

        this.autoplay && played
          ? this.resetNextPlatform()
          : this.platformAnimation?.resume();
      }
    });

    document.addEventListener('sounds:toggle', (event: CustomEventInit) => {
      this.soundsEffects = event.detail.enable;
    });

    document.addEventListener('game:start', () => {
      this.music.start();
      this.start();
    });
  }

  private createNextPlatform (): void {
    const bricks = 3 - this.getScoreMultiplier(false);
    const [ease, minDuration] = easing();

    const p = this.platforms.length;
    const width = 64.0 * bricks;
    const repeat = bricks - 1;

    let delay = ~~!this.autoplay * 100;
    let duration = (0.5 * bricks + 0.5) * minDuration;

    const y = this.scale.height - 160 - this.score * 64;
    const x = this.leftPlatform ? 32 - width : this.scale.width + 32;

    const offset = -~~!this.leftPlatform * (bricks * 32 + 35) + 35;
    const player = this.center.x + ~~this.leftPlatform * -70 + offset;

    if (!this.autoplay && bricks > 1) {
      const maxDelay = repeat * 500;
      delay = MathUtils.Between(maxDelay - 500, maxDelay);
      duration = MathUtils.Between(duration, duration + maxDelay / 2);
    }

    this.platforms.push(this.physics.add.staticGroup({
      setXY: { x, y, stepX: 64 },
      defaultKey: 'brick',
      key: 'brick',
      repeat
    }));

    this.platforms[p].getChildren().forEach(platform => platform.setData('index', this.score));
    this.physics.add.collider(this.player, this.platforms[p], this.onPlatformCollision, undefined, this);

    this.platformAnimation = this.add.tween({
      props: { x: `${this.leftPlatform ? '+' : '-'}= ${this.center.x + width / 2}` },
      onUpdate: (tween, brick) => this.onPlatformUpdate(tween, brick, ease, player),

      targets: this.platforms[p].getChildren(),
      paused: this.gamePaused,
      duration, delay, ease
    });
  }

  private onPlatformUpdate (tween: Tweens.Tween, brick: Physics.Arcade.Sprite, ease: Easing, player: number): void {
    brick.refreshBody();
    if (!this.autoplay) return;

    const platform = this.nextPlatformPosition(tween, ease);
    player - platform <= 64 && this.player.jump();
  }

  private nextPlatformPosition (tween: Tweens.Tween, ease: Easing): number {
    const offset = ~~!this.leftPlatform * -64 + 32;
    const frame = tween.elapsed + this.player.jumpTiming;

    const progress = Math.min(frame / tween.duration, 1.0);
    const bricks = ~~this.leftPlatform * (tween.totalTargets - 1);

    return (tween.data[bricks].end || 0 + offset) * ease(progress);
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
    this.leftPlatform = MathUtils.Between(0, 1) < 1;
    this.player.lookLeft = this.leftPlatform;

    this.soundsEffects && this.landing.play();
    this.camera.zoomIn(++this.score);
    this.platformAnimation?.stop();

    !this.autoplay && document.dispatchEvent(
      new CustomEvent('score:update', { detail: {
        multiplier: this.getScoreMultiplier(true),
        score: ++this.playerScore
      }})
    );

    this.createNextPlatform();
  }

  private onGameOver (): void {
    const delay = this.camera.zoomOut(this.score * 140);

    this.playerRotation = this.add.tween(
      this.player.die(this.leftPlatform)
    );

    setTimeout(() => {
      this.gamePaused = true;
      this.gameOver = true;
    }, delay);

    this.ui.showGameOver();
  }

  private resize (size: Scale.ScaleManager): void {
    const { width, height } = size;
    this.visibleStars = height * 3.75;

    this.cameras.resize(width, height);
    this.setPlatformsPosition(width, height);

    this.center = { x: width / 2, y: height / 2 };
    this.camera.resize(this.center.y - 182);

    this.setSky(width, height);
    this.setClouds(width);

    this.resetNextPlatform();
    this.setGround(width, height);

    this.player.resize(width, height, this.score);
    this.physics.world.bounds.setSize(width, height);
  }

  private setSky (width: number, height: number): void {
    const displayWidth = height / 9 * 16;

    this.sky.displayWidth = width;
    this.sky.displayHeight = height * 6;

    this.sky.setPosition(
      this.center.x, this.sky.displayHeight / -3
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
      const [offsetX, offsetY] = clouds[index];
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
    const bricks = MathUtils.CeilTo(width / 64);
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

  private getScoreMultiplier (player: boolean): number {
    return Math.min(player ? this.playerScore : this.score, 30) / 15 >> 0;
  }

  private resetNextPlatform (): void {
    if (this.platformAnimation) {
      this.platforms[this.platforms.length - 1]?.clear(true, true);
      this.platforms = this.platforms.slice(0, -1);

      this.platformAnimation.stop();
      !this.gameOver && this.createNextPlatform();
    }
  }
};
