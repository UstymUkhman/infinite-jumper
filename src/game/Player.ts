import { player as PLAYER } from '@Game/config.json';
type Position = { x: number, y: number };

import type { Scene } from 'phaser';
import { Physics } from 'phaser';

export default class Player extends Physics.Arcade.Sprite {
  private initialPosition: Position;
  private offsetTimeout?: number;

  private isJumping = false;
  private isAlive = true;

  public constructor (scene: Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.initialPosition = { x, y };

    scene.anims.create({
      frames: scene.anims.generateFrameNumbers('mario', {
        start: 0, end: PLAYER.frames
      }),

      frameRate: 15,
      key: 'jump'
    });
  }

  public jump (): void {
    if (this.isAlive && this.body.touching.down) {
      this.setVelocityY(-500.0);
      this.anims.play('jump');
      this.isJumping = true;
    }
  }

  public die (fromLeft: boolean) {
    const direction = fromLeft ? 1 : -1;

    this.offsetTimeout = setTimeout(() =>
      this.setOffset(0, PLAYER.height / -3.6)
    , 250);

    this.setVelocityX(250 * direction);
    this.setCollideWorldBounds(true);

    this.flipX = fromLeft;
    this.isAlive = false;

    return {
      props: { angle: 90 * direction },
      ease: 'Quad.easeInOut',
      duration: 500,
      targets: this
    };
  }

  public reset (): void {
    const { x, y } = this.initialPosition;
    this.setCollideWorldBounds(false);
    clearTimeout(this.offsetTimeout);

    this.isJumping = false;
    this.isAlive = true;

    this.setPosition(x, y);
    this.setOffset(0, 0);

    this.setVelocity(0);
    this.setAngle(0);
  }

  public set jumping (isJumping: boolean) {
    this.isJumping = isJumping;
  }

  public get jumping (): boolean {
    return this.isJumping;
  }
}
