import { player as PLAYER } from '@Game/config.json';
import type { Scene } from 'phaser';
import { Physics } from 'phaser';

export default class Player extends Physics.Arcade.Sprite {
  private isJumping = false;
  private alive = true;

  public constructor (scene: Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    scene.anims.create({
      frames: scene.anims.generateFrameNumbers('mario', {
        start: 0, end: PLAYER.frames
      }),

      frameRate: 15,
      key: 'jump'
    });
  }

  public jump (): void {
    if (this.alive && this.body.touching.down) {
      this.setVelocityY(-500.0);
      this.anims.play('jump');
      this.isJumping = true;
    }
  }

  public die (fromLeft: boolean) {
    const direction = fromLeft ? 1 : -1;

    setTimeout(() =>
      this.setOffset(0, PLAYER.height / -3.6)
    , 250);

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

  public set jumping (isJumping: boolean) {
    this.isJumping = isJumping;
  }

  public get jumping (): boolean {
    return this.isJumping;
  }
}
