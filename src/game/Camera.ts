import { clamp } from '@Game/utils';

import type { Cameras } from 'phaser';
import type Player from '@Game/Player';

export default class CameraManager {
  public constructor (private camera: Cameras.Scene2D.Camera) {}

  public follow (target: Player, y = 0): void {
    this.camera.startFollow(target, false, 1, 0.1, 0, y);
  }

  public zoomIn (amount: number): void {
    console.log(amount);
    const zoom = Math.min(1 + amount * 0.01, 1.25);
    this.camera.zoomTo(zoom, 500, 'Quad.easeOut');
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
}
