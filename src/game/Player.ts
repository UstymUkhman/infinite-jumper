import { Physics, Math } from 'phaser';
import type { Scene } from 'phaser';

export default class Player extends Physics.Arcade.Sprite
{
  private offsetTime?: number;
  private size: Math.Vector2;

  public jumping = false;
  private alive = true;

  public constructor (scene: Scene, texture: string) {
    super(scene, scene.scale.width / 2, scene.scale.height - 182, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

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
    const x = this.body.x * (width - 70) / (this.size.x - 70) + 35;
    const y = this.body.y * (height - 236) / (this.size.y - 236) + 54;

    this.body.position.set(x, y);
    this.size.set(width, height);
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
