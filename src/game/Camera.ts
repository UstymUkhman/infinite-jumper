import type Player from '@Game/Player';
import type { Cameras } from 'phaser';
import { clamp } from '@Game/utils';

export default class CameraManager
{
  private initialPosition?: number;

  public constructor (private camera: Cameras.Scene2D.Camera) {}

  public follow (target: Player): void {
    this.camera.startFollow(target, false, 1, 0.1, 0, this.initialPosition);
  }

  public scrollTo (y: number, callback?: () => void): void {
    this.camera.pan(this.camera.centerX, this.camera.centerY, 2500, 'Quad.easeOut');
    callback && setTimeout(callback, 2500);
    this.initialPosition = y;
  }

  public zoomIn (amount: number): void {
    const zoom = Math.min(1 + amount * 0.01, 1.25);
    this.camera.zoomTo(zoom, 500, 'Quad.easeOut');
    this.camera.setFollowOffset(0, this.camera.followOffset.y / zoom);
  }

  public zoomOut (duration: number): void {
    duration = clamp(duration, 500, 3500);

    this.camera.stopFollow();
    this.camera.zoomTo(1, duration);

    this.camera.pan(
      this.camera.centerX, this.camera.centerY,
      duration, 'Quad.easeOut'
    );
  }

  public set y (y: number) {
    this.camera.scrollY = -y;
  }

  public get y (): number {
    return -this.camera.scrollY;
  }
}
