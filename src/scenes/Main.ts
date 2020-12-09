import { Scene, Physics, Tweens, Types } from 'phaser';

export default class Main extends Scene {
  private platforms!: Physics.Arcade.StaticGroup;
  private platformAnimation!: Tweens.Tween;
  private player!: Physics.Arcade.Sprite;

  private leftPlatform = Math.random() < 0.5;
  private leftPlatformPosition = [-96, -32];
  private rightPlatformPosition = [32, 96];

  private gameOver = false;
  private jumping = false;
  private score = 0;

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
    this.player = this.createPlayer();

    this.platforms = this.physics.add.staticGroup();
    this.createPlatform();

    this.physics.add.collider(this.player, ground);
    this.physics.add.collider(this.player, this.platforms, this.onPlatformLanding, undefined, this);
  }

  private onPlatformLanding (): void {
    const platforms = this.platforms.children.size;

    const hit = this.physics.world.overlap(this.player, [
      this.platforms.children.entries[platforms - 2],
      this.platforms.children.entries[platforms - 1]
    ]);

    // console.log(hit);

    if (hit || !this.jumping) return;
    this.platformAnimation.stop();
    this.jumping = false;

    this.leftPlatform = Math.random() < 0.5;
    this.player.flipX = this.leftPlatform;

    if (++this.score === 4) {
      this.cameras.main.startFollow(this.player);
    }

    this.createPlatform();
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

  private createPlayer (): Physics.Arcade.Sprite {
    const player = this.physics.add.sprite(180, 522, 'mario');

    this.anims.create({
      frames: this.anims.generateFrameNumbers('mario', { start: 0, end: 6 }),
      frameRate: 15,
      key: 'jump'
    });

    this.input.on('pointerup', () => {
      if (player.body.touching.down) {
        player.anims.play('jump');
        player.setVelocityY(-450);
        this.jumping = true;
      }
    });

    return player;
  }

  private createPlatform (): void {
    const { width, height } = this.scale;
    const x = this.leftPlatform ? 0 : width;
    const y = height + (-96 - this.score * 64);

    const platformPosition = this.leftPlatform
      ? this.leftPlatformPosition : this.rightPlatformPosition;

    // this.platforms.create(x + platformPosition[0], y, 'brick');
    // this.platforms.create(x + platformPosition[1], y, 'brick');

    console.log(this.score);

    const platform = [
      this.physics.add.staticImage(x + platformPosition[0], y, 'brick'),
      this.physics.add.staticImage(x + platformPosition[1], y, 'brick')
    ];

    this.platforms.add(platform[0], true);
    this.platforms.add(platform[1], true);

    const destination = `${this.leftPlatform ? '+' : '-'}= 244`;

    this.platformAnimation = this.add.tween({
      props: {x: { value: destination }},
      targets: platform,
      ease: 'Quartic.In', // https://sole.github.io/tween.js/examples/03_graphs.html
      duration: 2500,

      onUpdate: (tween, brick) => brick.refreshBody() // ,

      // onComplete: () => {
      //   // if not dead
      //   this.leftPlatform = Math.random() < 0.5;
      //   this.player.flipX = this.leftPlatform;

      //   if (++this.score === 4) {
      //     this.cameras.main.startFollow(this.player);
      //   }

      //   this.createPlatform();
      // }
    });
  }

	public update (time: number, delta: number): void {
    // const platforms = this.platforms.children.size;

    // const hit = this.physics.world.overlap(this.player, [
    //   this.platforms.children.entries[platforms - 2],
    //   this.platforms.children.entries[platforms - 1]
    // ]);

    // console.log(hit);
  }
};
