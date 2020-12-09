import { Scene, Physics, GameObjects, Types } from 'phaser';

export default class Main extends Scene {
  private platforms!: Physics.Arcade.StaticGroup;
  private keys!: Types.Input.Keyboard.CursorKeys;
  private player!: Physics.Arcade.Sprite;

  private gameOver = false;
  // private score = 0;

	public constructor () {
    super({ key: 'Main' });
	}

	private preload (): void {
		this.load.image('sky', 'assets/sky.png');
    this.load.image('brick', 'assets/brick.png');

    this.load.spritesheet('mario', 'assets/mario.png', {
      frameHeight: 108,
      frameWidth: 70
    });
	}

	private create (): void {
    const ground = this.createEnvironment();
    this.keys = this.createCursorKeys();
    this.player = this.createPlayer();

    this.createPlatforms();

    this.physics.add.collider(this.player, ground);
    this.physics.add.collider(this.player, this.platforms);

    this.input.on('pointerup', () => {
      if (this.player.body.touching.down) {
        this.player.anims.play('jump');
        this.player.setVelocityY(-450);
      }
    });
  }

  private createCursorKeys (): Types.Input.Keyboard.CursorKeys {
    return this.input.keyboard.createCursorKeys();
  }

  private createEnvironment (): Physics.Arcade.StaticGroup {
    const skyRatio = 800 / 600;
    const { width, height } = this.scale;
    const sky = this.add.image(width / 2, height / 2, 'sky');

    const skyHeight = height / sky.height;
    const skyWidth = skyHeight * skyRatio;

    sky.setScale(skyWidth, skyHeight);

    return this.physics.add.staticGroup({
      setXY: { x: 32, y: height - 32, stepX: 64 },
      repeat: Math.floor(width / 64),
      key: 'brick'
    });
  }

  private createPlatforms (): void {
    const { width, height } = this.scale;

    this.platforms = this.physics.add.staticGroup();

    // this.platforms.create(148, height - 96, 'brick');
    // this.platforms.create(212, height - 96, 'brick');

    // From Left:
    // this.platforms.create(-96, height - 96, 'brick');
    // this.platforms.create(-32, height - 96, 'brick');

    // From Right:
    this.platforms.create(width + 32, height - 96, 'brick');
    this.platforms.create(width + 96, height - 96, 'brick');

    this.add.tween({
      targets: this.platforms.getChildren(),
      props: {
        // From Left:
        // x: { value: '+= 244' }

        // From Right:
        x: { value: '-= 244' }
      },
      delay: 0,
      duration: 500,
      ease: 'Quartic.In', // https://sole.github.io/tween.js/examples/03_graphs.html

      onUpdate: (tween, brick) => brick.refreshBody(),

      // onComplete: () => this.platforms.getChildren().map(brick => (brick as any).refreshBody()) // console.log('onComplete')
    });
  }

  private createPlayer (): Physics.Arcade.Sprite {
    const player = this.physics.add.sprite(180, 522, 'mario');
    player.setCollideWorldBounds(true);

    this.anims.create({
      frames: this.anims.generateFrameNumbers('mario', { start: 0, end: 6 }),
      frameRate: 15,
      key: 'jump'
    });

    return player;
  }

	public update (time: number, delta: number): void {
  }
};
