import type { Scene, GameObjects } from 'phaser';
import { clamp } from '@Game/utils';

export default class UI {
  private restartButton!: GameObjects.Sprite;
  private gameOverText: GameObjects.Text;
  private restartText!: GameObjects.Text;
  private startText: GameObjects.Text;

  private resetScoreEvent: CustomEvent;
  private showScoreEvent: CustomEvent;
  private restartEvent: CustomEvent;

  public constructor (scene: Scene) {
    const textStyle = this.getStyle(scene.scale.width * 1.01);
    const height = scene.scale.height / 3.2;

    this.gameOverText = scene.add.text(0, height, 'Game Over!', textStyle);
    this.startText = scene.add.text(0, height, 'Tap!', textStyle);

    this.resetScoreEvent = new CustomEvent('score:reset');
    this.showScoreEvent = new CustomEvent('score:show');
    this.restartEvent = new CustomEvent('game:restart');

    this.gameOverText.visible = false;
    this.createRestartButton(scene);

    this.gameOverText.depth = 1;
    this.startText.depth = 1;
  }

  private createRestartButton (scene: Scene): void {
    const height = scene.scale.height / 2;
    const width = scene.scale.width / 2;

    this.restartButton = scene.add.sprite(width, height, 'button');
    this.restartButton.setInteractive();

    this.restartText = scene.add.text(0, 0, 'Restart', {
      ...this.getCommonStyle(),
      fixedHeight: height,
      fixedWidth: width,
      fontSize: '24px'
    });

    this.restartText.setPosition(
      width / 2 + 1, height - 10
    );

    this.restartButton.setInteractive();

    this.restartButton.on('pointerdown', () => {
      this.restartButton.setTint(0xf2c4b1);
    });

    this.restartButton.on('pointerup', () => {
      document.dispatchEvent(this.resetScoreEvent);
      document.dispatchEvent(this.restartEvent);

      this.restartButton.clearTint();
      this.toggleGameOver(false);
    });

    this.restartButton.visible = false;
    this.restartText.visible = false;

    this.restartButton.depth = 1;
    this.restartText.depth = 1;
  }

  private getStyle (width: number): object {
    const size = this.getFontSize(width) * 2;

    return {
      ...this.getCommonStyle(),
      fontSize: `${size}px`,
      fixedHeight: size,
      fixedWidth: width
    };
  }

  private getFontSize (width: number): number {
    return clamp(width / 30 * 2, 24, 64);
  }

  private getCommonStyle (): object {
    return {
      align: 'center',
      fill: '#ffffff',

      shadow: {
        color: '#000000',
        offsetX: 2.5,
        offsetY: 2.5,
        fill: true,
        blur: 5
      }
    };
  }

  public toggleGameOver (visible: boolean): void {
    this.restartButton.visible = visible;
    this.gameOverText.visible = visible;
    this.restartText.visible = visible;
  }

  public hideStartText (): void {
    document.dispatchEvent(this.showScoreEvent);
    this.startText.visible = false;
  }
}
