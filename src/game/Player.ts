import type { Scene, Sound } from 'phaser';
import { Physics, Math } from 'phaser';

export default class extends Physics.Arcade.Sprite
{
  private jumpSound: Sound.BaseSound;
  private dieSound: Sound.BaseSound;
  private position: Math.Vector2;

  private offsetTime?: number;
  private size: Math.Vector2;

  public jumping = false;
  private alive = true;

  public constructor (scene: Scene, texture: string) {
    super(scene, scene.scale.width / 2, scene.scale.height - 182, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.position = new Math.Vector2(this.x, this.y);
    this.size = new Math.Vector2(scene.scale.width, scene.scale.height);

    scene.anims.create({
      frames: scene.anims.generateFrameNumbers('mario', {
        start: 0, end: 10
      }),

      frameRate: 12,
      key: 'jump'
    });

    this.jumpSound = scene.sound.add('jump', {
      volume: 0.25,
      seek: 0.015
    });

    this.dieSound = scene.sound.add('die', {
      volume: 0.25,
      seek: 0.015
    });
  }

  private updateCurrentPosition (width: number, height: number, platforms: number): void {
    const mh = 182 + 64 * ++platforms;
    const freeHeight = height - mh;

    const sx = this.size.x - 70;
    const sy = this.size.y - mh;

    let { x, y } = this.body;
    x *= (width - 70) / sx;
    y *= freeHeight / sy;

    this.position.set(
      Math.Clamp(x + 35, 0, width - 35),
      Math.Clamp(y, 128, freeHeight)
    );
  }

  public jump (): void {
    if (this.alive && this.body.touching.down) {
      this.setVelocityY(-500.0);
      this.anims.play('jump');

      this.jumpSound.play();
      this.jumping = true;
    }
  }

  public die (fromLeft: boolean) {
    const direction = fromLeft ? 1 : -1;

    this.offsetTime = setTimeout(
      this.setOffset.bind(this, 0, -30), 250
    );

    this.setVelocityX(250 * direction);
    this.setCollideWorldBounds(true);

    this.flipX = fromLeft;
    this.dieSound.play();
    this.alive = false;

    return {
      props: { angle: 90 * direction },
      ease: 'Quad.easeInOut',
      duration: 500,
      targets: this
    };
  }

  public resize (width: number, height: number, platforms: number): void {
    this.updateCurrentPosition(width, height, platforms);
    this.setPosition(this.position.x, this.position.y);

    this.body.position.copy(this.position);
    this.size.set(width, height);
  }

  public reset (): void {
    const x = this.size.x / 2;
    const y = this.size.y - 182;

    this.setCollideWorldBounds(false);
    clearTimeout(this.offsetTime);

    this.setPosition(x, y);
    this.setOffset(0, 0);

    this.setVelocity(0);
    this.setAngle(0);

    this.jumping = false;
    this.alive = true;
  }

  public set lookLeft (left: boolean) {
    this.flipX = left;
  }
};
