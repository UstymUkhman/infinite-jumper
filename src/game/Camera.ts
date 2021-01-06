import { Math as MathUtil } from 'phaser';
import type Player from '@Game/Player';
import type { Cameras } from 'phaser';

export default class
{
  private initialPosition?: number;
  private following = false;

  public constructor (private camera: Cameras.Scene2D.Camera) {}

  public scrollToStart (): void {
    this.camera.pan(this.camera.centerX, this.camera.centerY, 2500, 'Quad.easeOut');
  }

  public follow (target: Player, y = this.initialPosition): void {
    this.following = true;
    this.initialPosition = y;

    this.camera.panEffect.reset();
    this.camera.startFollow(target, false, 1, 0.1, 0, y);
  }

  public zoomIn (amount: number): void {
    const zoom = Math.min(1 + amount * 0.01, 1.25);
    this.camera.zoomTo(zoom, 500, 'Quad.easeOut');
    this.camera.setFollowOffset(0, this.camera.followOffset.y / zoom);
  }

  public zoomOut (duration: number): number {
    duration = MathUtil.Clamp(duration, 500, 3500);

    this.following = false;
    this.camera.stopFollow();
    this.camera.zoomTo(1, duration);

    this.camera.pan(
      this.camera.centerX, this.camera.centerY,
      duration, 'Quad.easeOut'
    );

    return duration;
  }

  public resize (offset: number): void {
    if (this.following) {
      this.initialPosition = offset;
      this.camera.setFollowOffset(0, offset);
    }
  }

  public set y (y: number) {
    this.camera.scrollY = -y;
  }

  public get y (): number {
    return -this.camera.scrollY;
  }
}
