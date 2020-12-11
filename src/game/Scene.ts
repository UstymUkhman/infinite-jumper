import { Scene, Physics, GameObjects, Tweens } from 'phaser';
import { randomInt, randomEasing } from '@Game/utils';

import CameraManager from '@Game/Camera';
import CONFIG from '@Game/config.json';
import Player from '@Game/Player';

export default class extends Scene {
  private platformTargetPosition = CONFIG.platform.width / 2;
  private leftPlatform = Math.random() < 0.5;

  private platforms!: Physics.Arcade.StaticGroup;
  private platformAnimation!: Tweens.Tween;
  private camera!: CameraManager;
  private player!: Player;

  private autoplaying = false;
  private gameOver = false;

  private halfHeight = 0;
  private halfWidth = 0;
  private score = 0;

	public constructor () {
    super({ key: 'Scene' });
	}

	private preload (): void {
		this.load.image('sky', 'assets/sky.png');
    this.load.image('brick', 'assets/brick.png');

    this.load.spritesheet('mario', 'assets/mario.png', {
      frameHeight: CONFIG.player.height,
      frameWidth: CONFIG.player.width
    });
	}

	private create (): void {
    this.halfHeight = this.scale.height / 2;
    this.halfWidth = this.scale.width / 2;

    this.createSky();

    const ground = this.createGround();
    this.player = this.createPlayer();

    this.createCamera();
    this.addInputEvents();

    this.platforms = this.physics.add.staticGroup();
    this.player.flipX = this.leftPlatform;
    this.createPlatform();

    this.physics.add.collider(this.player, ground);
    this.physics.add.collider(this.player, this.platforms, this.onPlatformLanding, undefined, this);
  }

  private createCamera (): void {
    const playerHalf = CONFIG.player.height / 2;
    const groundHeight = CONFIG.platform.height * 2;

    this.camera = new CameraManager(this.cameras.main);

    this.camera.follow(this.player,
      this.halfHeight - groundHeight - playerHalf
    );
  }

  private onPlatformLanding (player: GameObjects.GameObject, platform: GameObjects.GameObject): void {
    const lastPlatform = this.platforms.children.size - 1;

    this.gameOver = this.physics.world.overlap(this.player,
      this.platforms.children.entries[lastPlatform]
    );

    if (this.gameOver) {
      this.add.tween(this.player.die(this.leftPlatform));
      return this.camera.zoomOut(this.score * 140);
    }

    if (this.player.jumping) {
      this.player.jumping = false;

      if (platform.getData('index') === lastPlatform) {
        this.leftPlatform = Math.random() < 0.5;
        this.player.flipX = this.leftPlatform;

        this.camera.zoomIn(++this.score);
        this.platformAnimation.stop();
        this.createPlatform();
      }
    }
  }

  private createSky (): void {
    const sky = this.add.image(this.halfWidth, this.halfHeight, 'sky');
    const skyRatio = CONFIG.background.width / CONFIG.background.height;

    const skyHeight = this.scale.height / sky.height;
    const skyWidth = skyHeight * skyRatio;

    sky.setScale(skyWidth, skyHeight);
  }

  private createGround (): Physics.Arcade.StaticGroup {
    const ground = this.physics.add.staticGroup();
    const { width, height } = CONFIG.platform;
    const halfHeight = height / 2;

    const VERTICAL_PLATFORMS = 2;
    const HORIZONTAL_PLATFORMS = Math.ceil(this.scale.width / width);

    for (let row = 0; row < VERTICAL_PLATFORMS; row++) {
      for (let col = 0; col < HORIZONTAL_PLATFORMS; col++) {
        const x = col * width + height;
        const y = this.scale.height - (row * height + halfHeight);

        ground.add(this.physics.add.staticImage(x, y, 'brick'), true);
      }
    }

    return ground;
  }

  private createPlayer (): Player {
    const offsetBottom = CONFIG.platform.width + CONFIG.player.height / 2;
    return new Player(this, this.halfWidth, this.scale.height - offsetBottom, 'mario');
  }

  private addInputEvents (): void {
    this.input.on('pointerup', this.player.jump.bind(this.player));
  }

  private createPlatform (): void {
    const { width, height } = this.scale;
    const x = this.leftPlatform ? 0 : width;

    const platformHeight = CONFIG.platform.height;
    const y = height - platformHeight * 2.5 - this.score * platformHeight;

    const platformPosition = this.leftPlatform
      ? -this.platformTargetPosition : this.platformTargetPosition;

    const platform = this.physics.add.staticImage(x + platformPosition, y, 'brick');
    const destination = `${this.leftPlatform ? '+' : '-'}= 244`;

    platform.setData('index', this.platforms.children.size);
    this.platforms.add(platform, true);

    this.platformAnimation = this.add.tween({
      onUpdate: this.updatePlatformAnimation.bind(this),

      duration: randomInt(1250, 2500),
      delay: randomInt(0, 1000),
      props: { x: destination },

      ease: randomEasing(),
      targets: platform
    });
  }

  private updatePlatformAnimation (tween: Tweens.Tween, platform: Physics.Arcade.Image): void {
    platform.refreshBody();
    if (!this.autoplaying) return;

    const offset = this.halfWidth + (this.leftPlatform ? -250 : 250);

    if (this.leftPlatform && platform.x >= offset) {
      this.player.jump();
    }

    else if (platform.x <= offset) {
      this.player.jump();
    }
  }
};
