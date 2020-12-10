import { Scene, Physics, GameObjects, Tweens } from 'phaser';
import { randomInt, randomEasing } from '../utils';
import CONFIG from './config.json';

export default class Main extends Scene {
  private platformTargetPosition = CONFIG.platform.width / 2;
  private leftPlatform = Math.random() < 0.5;

  private platforms!: Physics.Arcade.StaticGroup;
  private platformAnimation!: Tweens.Tween;
  private player!: Physics.Arcade.Sprite;

  private autoplaying = false;
  private gameOver = false;
  private jumping = false;

  private halfWidth = 0;
  private score = 0;

	public constructor () {
    super({ key: 'Main' });
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
    this.createSky();
    this.halfWidth = this.scale.width / 2;

    const ground = this.createGround();
    this.player = this.createPlayer();

    this.addInputEvents();
    this.followPlayer();

    this.platforms = this.physics.add.staticGroup();
    this.createPlatform();

    this.physics.add.collider(this.player, ground);
    this.physics.add.collider(this.player, this.platforms, this.onPlatformLanding, undefined, this);
  }

  private followPlayer (): void {
    const playerHalf = CONFIG.player.height / 2;
    const groundHeight = CONFIG.platform.height * 2;

    this.cameras.main.startFollow(
      this.player, false, 1, 0.1, 0,
      this.scale.height / 2 - (groundHeight + playerHalf)
    );
  }

  private onPlatformLanding (player: GameObjects.GameObject, platform: GameObjects.GameObject): void {
    const lastPlatform = this.platforms.children.size - 1;

    const hit = this.physics.world.overlap(this.player,
      this.platforms.children.entries[lastPlatform]
    );

    if (hit) {
      this.player.angle = this.leftPlatform ? 90 : -90;



      const velocity = this.leftPlatform ? 250 : -250;
      this.cameras.main.stopFollow();

      this.player.flipX = this.leftPlatform;

      this.player.setCollideWorldBounds(true);
      this.player.setVelocityX(velocity);
      this.player.setOffset(0, -30);
      console.log('Game Over!');
      return;
    }

    if (!this.jumping) return;
    this.jumping = false;

    if (platform.getData('index') === lastPlatform) {
      this.leftPlatform = Math.random() < 0.5;
      this.player.flipX = this.leftPlatform;
      this.platformAnimation.stop();

      this.score++;
      this.createPlatform();
    }
  }

  private createSky (): void {
    const sky = this.add.image(this.halfWidth, this.scale.height / 2, 'sky');
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

  private createPlayer (): Physics.Arcade.Sprite {
    const offsetBottom = CONFIG.platform.width + CONFIG.player.height / 2;

    this.anims.create({
      frames: this.anims.generateFrameNumbers('mario', {
        start: 0, end: CONFIG.player.frames
      }),

      frameRate: 15,
      key: 'jump'
    });

    return this.physics.add.sprite(
      this.halfWidth,
      this.scale.height - offsetBottom,
      'mario'
    );
  }

  private addInputEvents (): void {
    this.input.on('pointerup', () => {
      if (this.player.body.touching.down) {
        this.player.setVelocityY(-500.0);
        this.player.anims.play('jump');
        this.jumping = true;
      }
    });
  }

  private createPlatform (): void {
    const { width, height } = this.scale;
    const x = this.leftPlatform ? 0 : width;

    const platformHeight = CONFIG.platform.height;
    const minDuration = 1250; // this.autoplaying ? 1250 : 500;
    const y = height - platformHeight * 2.5 - this.score * platformHeight;

    const platformPosition = this.leftPlatform
      ? -this.platformTargetPosition : this.platformTargetPosition;

    const platform = this.physics.add.staticImage(x + platformPosition, y, 'brick');
    const destination = `${this.leftPlatform ? '+' : '-'}= 244`;

    platform.setData('index', this.platforms.children.size);
    this.platforms.add(platform, true);

    this.platformAnimation = this.add.tween({
      onUpdate: this.updatePlatformAnimation.bind(this),
      duration: randomInt(minDuration, 2500),

      props: {x: { value: destination }},
      delay: randomInt(0, 1000),

      ease: randomEasing(),
      targets: platform
    });
  }

  private updatePlatformAnimation (tween: Tweens.Tween, platform: Physics.Arcade.Image): void {
    platform.refreshBody();
    if (!this.autoplaying) return;

    const offset = this.halfWidth + (this.leftPlatform ? -250 : 250);

    if (this.leftPlatform && platform.x >= offset) {
      this.playerJump();
    }

    else if (platform.x <= offset) {
      this.playerJump();
    }
  }

  private playerJump (): void {
    if (this.player.body.touching.down) {
      this.player.setVelocityY(-500.0);
      this.player.anims.play('jump');
      this.jumping = true;
    }
  }

	public update (time: number, delta: number): void {
  }
};
