import { Physics, Math } from 'phaser';
import type { Scene } from 'phaser';

export default class Player extends Physics.Arcade.Sprite
{
  private position: Math.Vector2;
  private offsetTime?: number;
  private size: Math.Vector2;

  public jumping = false;
  private alive = true;

  public constructor (scene: Scene, texture: string) {
    super(scene, scene.scale.width / 2, scene.scale.height - 182, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.position = new Math.Vector2(
      scene.scale.width / 2, scene.scale.height - 182
    );

    this.size = new Math.Vector2(
      scene.scale.width, scene.scale.height
    );

    scene.anims.create({
      frames: scene.anims.generateFrameNumbers('mario', {
        start: 0, end: 10
      }),

      frameRate: 12,
      key: 'jump'
    });
  }

  public jump (): void {
    if (this.alive && this.body.touching.down) {
      this.setVelocityY(-500.0);
      this.anims.play('jump');
      this.jumping = true;
    }
  }

  public resize (width: number, height: number): void {
    const x = (this.body.position.x + 35) * width / this.size.x;
    const y = (this.body.position.y - 54) * height / this.size.y;

    this.size.set(width, height);
    this.body.position.set(x, y);

    this.position.set(x, y);
    this.setPosition(x, y);
  }

  public die (fromLeft: boolean) {
    const direction = fromLeft ? 1 : -1;

    this.offsetTime = setTimeout(
      this.setOffset.bind(this, 0, -30), 250
    );

    this.setVelocityX(250 * direction);
    this.setCollideWorldBounds(true);

    this.flipX = fromLeft;
    this.alive = false;

    return {
      props: { angle: 90 * direction },
      ease: 'Quad.easeInOut',
      duration: 500,
      targets: this
    };
  }

  public reset (): void {
    const { x, y } = this.position;
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
