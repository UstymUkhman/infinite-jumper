import { Scene, Physics, GameObjects, Tweens } from 'phaser';
import { randomInt, randomEasing } from '@Game/utils';

import CameraManager from '@Game/Camera';
import CONFIG from '@Game/config.json';
import Player from '@Game/Player';
import UI from '@Game/UI';

export default class extends Scene {
  private platformTargetPosition = CONFIG.platform.width / 2;
  private platforms!: Physics.Arcade.StaticGroup;
  private leftPlatform = Math.random() < 0.5;
  private platformAnimation!: Tweens.Tween;
  private playerRotation!: Tweens.Tween;

  private camera!: CameraManager;
  private player!: Player;
  private ui!: UI;

  private autoplaying = false;
  private gamePaused = true;
  private gameOver = false;

  private halfHeight = 0;
  private halfWidth = 0;
  private score = 0;

	public constructor () {
    super({ key: 'Scene' });

    document.addEventListener('game:restart',
      this.restart.bind(this), false
    );
	}

	private preload (): void {
		this.load.image('sky', 'assets/sky.png');
    this.load.image('brick', 'assets/brick.png');
    this.load.image('button', 'assets/button.jpg');

    this.load.spritesheet('mario', 'assets/mario.png', {
      frameHeight: CONFIG.player.height,
      frameWidth: CONFIG.player.width
    });
	}

	private create (): void {
    this.halfHeight = this.scale.height / 2;
    this.halfWidth = this.scale.width / 2;

    this.createUI();
    this.createSky();
    this.createPlayer();

    this.createCamera();
    this.createInputEvents();

    this.player.flipX = this.leftPlatform;
    // this.scale.on('resize', this.resize, this);
    this.platforms = this.physics.add.staticGroup();

    this.physics.add.collider(this.player, this.createGround());
    this.physics.add.collider(this.player, this.platforms, this.onPlatformCollision, undefined, this);
  }

  private createUI (): void {
    this.ui = new UI(this);
  }

  private createSky (): void {
    const sky = this.add.image(this.halfWidth, this.halfHeight, 'sky');
    const { width, height } = CONFIG.background;
    const skyRatio = width / height;

    const skyHeight = this.scale.height / sky.height;
    const skyWidth = skyHeight * skyRatio;

    sky.setScale(skyWidth, skyHeight);
  }

  private createPlayer (): void {
    const offsetBottom = CONFIG.platform.width + CONFIG.player.height / 2;
    this.player = new Player(this, this.halfWidth, this.scale.height - offsetBottom, 'mario');
  }

  private createCamera (): void {
    const playerHalf = CONFIG.player.height / 2;
    const groundHeight = CONFIG.platform.height * 2;

    this.camera = new CameraManager(this.cameras.main);
    this.camera.follow(this.player, this.halfHeight - groundHeight - playerHalf);
  }

  private createInputEvents (): void {
    this.input.on('pointerdown', () => {
      if (this.gameOver) return;

      if (this.gamePaused) {
        this.gamePaused = false;
        this.ui.hideStartText();
        this.createPlatform();
      }

      else {
        this.player.jump();
      }
    });
  }

  private createGround (): Physics.Arcade.StaticGroup {
    const { width: platformWidth, height: platformHeight } = CONFIG.platform;
    const { width: sceneWidth, height: sceneHeight } = this.scale;

    const halfPlatformHeight = platformHeight / 2;
    const ground = this.physics.add.staticGroup();

    const HORIZONTAL_PLATFORMS = Math.ceil(sceneWidth / platformWidth);
    const VERTICAL_PLATFORMS = 2;

    for (let row = 0; row < VERTICAL_PLATFORMS; row++) {
      for (let col = 0; col < HORIZONTAL_PLATFORMS; col++) {
        const x = col * platformWidth + platformHeight;
        const y = sceneHeight - (row * platformHeight + halfPlatformHeight);

        ground.add(this.physics.add.staticImage(x, y, 'brick'), true);
      }
    }

    return ground;
  }

  private createPlatform (): void {
    const { width, height } = this.scale;
    const [easing, timing] = randomEasing();
    const x = this.leftPlatform ? 0 : width;

    const platformHeight = CONFIG.platform.height;
    const halfPlatformWidth = CONFIG.platform.width / 2;
    const y = height - platformHeight * 2.5 - this.score * platformHeight;

    const platformPosition = this.leftPlatform
      ? -this.platformTargetPosition : this.platformTargetPosition;

    const platform = this.physics.add.staticImage(x + platformPosition, y, 'brick');
    const destination = `${this.leftPlatform ? '+' : '-'}= ${this.halfWidth + halfPlatformWidth}`;

    platform.setData('index', this.platforms.children.size);
    this.platforms.add(platform, true);

    this.platformAnimation = this.add.tween({
      onUpdate: (tween: Tweens.Tween, platform: Physics.Arcade.Image) =>
        this.updatePlatformAnimation(tween, platform, timing),

      delay: randomInt(0, 1000),
      props: { x: destination },

      targets: platform,
      duration: 1500,
      ease: easing
    });
  }

  private onPlatformCollision (player: GameObjects.GameObject, platform: GameObjects.GameObject): void {
    if (this.gameOver) return;

    const lastPlatform = this.platforms.children.size - 1;

    this.gameOver = this.physics.world.overlap(this.player,
      this.platforms.children.entries[lastPlatform]
    );

    if (this.gameOver) this.onGameOver();

    else if (this.player.jumping) {
      this.player.jumping = false;

      if (platform.getData('index') === lastPlatform) {
        this.onPlatformLanding();
      }
    }
  }

  private onGameOver (): void {
    this.camera.zoomOut(this.score * 140);

    this.playerRotation = this.add.tween(
      this.player.die(this.leftPlatform)
    );

    this.ui.toggleGameOver(true);
    this.gamePaused = true;
  }

  private onPlatformLanding (): void {
    const event = new CustomEvent('score:update', {
      detail: { score: ++this.score }
    });

    this.leftPlatform = Math.random() < 0.5;
    this.player.flipX = this.leftPlatform;

    this.camera.zoomIn(this.score);
    document.dispatchEvent(event);

    this.platformAnimation.stop();
    this.createPlatform();
  }

  private updatePlatformAnimation (tween: Tweens.Tween, platform: Physics.Arcade.Image, timing: number): void {
    platform.body && platform.refreshBody();
    if (!this.autoplaying) return;

    const progress = tween.data[0].progress || 0;
    progress >= timing && this.player.jump();
  }

  // private resize (): void {
  //   console.log(arguments);
  //   console.log(this.scale);
  // }

  private restart (): void {
    this.score = 0;
    this.player.reset();

    this.platforms.clear(true, true);
    this.camera.follow(this.player);
    this.playerRotation.stop();
    this.createPlatform();

    this.gamePaused = false;
    this.gameOver = false;
  }
};
