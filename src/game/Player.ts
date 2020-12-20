import { Physics, Math } from 'phaser';
import type { Scene } from 'phaser';

export default class Player extends Physics.Arcade.Sprite
{
  private position: Math.Vector2;
  private offsetTime?: number;

  public jumping = false;
  private alive = true;

  public constructor (scene: Scene, texture: string) {
    super(scene, scene.scale.width / 2, scene.scale.height - 182, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.position = new Math.Vector2(
      scene.scale.width / 2, scene.scale.height - 182
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
    this.position.set(width / 2, height - 182);
    this.setPosition(this.position.x, this.position.y);
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
};
