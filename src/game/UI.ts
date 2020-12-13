import { stores as STORE } from '@Game/config.json';
import type { Scene, GameObjects } from 'phaser';
import { clamp } from '@Game/utils';

export default class UI {
  private downloadButton!: GameObjects.Sprite;
  private restartButton!: GameObjects.Sprite;

  private downloadText!: GameObjects.Text;
  private restartText!: GameObjects.Text;

  private gameOverText: GameObjects.Text;
  private startText: GameObjects.Text;

  private resetScoreEvent: CustomEvent;
  private showScoreEvent: CustomEvent;
  private restartEvent: CustomEvent;

  private storeURL: string;

  public constructor (scene: Scene) {
    const { width, height } = scene.scale;
    const textStyle = this.getStyle(width);

    const buttonHeight = height / 2.0;
    const textHeight = height / 3.2;
    const buttonWidth = width / 2;

    this.startText = scene.add.text(0, textHeight, 'Tap!', textStyle);
    this.gameOverText = scene.add.text(0, textHeight, 'Game Over!', textStyle);

    this.storeURL = scene.sys.game.device.os.iOS ? STORE.AppStore : STORE.PlayStore;

    this.createDownloadButton(scene, buttonWidth, buttonHeight);
    this.createRestartButton(scene, buttonWidth, buttonHeight);

    this.resetScoreEvent = new CustomEvent('score:reset');
    this.showScoreEvent = new CustomEvent('score:show');
    this.restartEvent = new CustomEvent('game:restart');

    this.gameOverText.visible = false;
    this.gameOverText.depth = 1;
    this.startText.depth = 1;
  }

  private createDownloadButton (scene: Scene, width: number, height: number): void {
    this.downloadText = this.createButtonText(scene, 'Download', width, height);
    this.downloadButton = this.createButton(scene, width * 1.5, height);

    this.downloadButton.on('pointerup', () => {
      this.downloadButton.clearTint();
      window.open(this.storeURL);
    });
  }

  private createRestartButton (scene: Scene, width: number, height: number): void {
    this.restartText = this.createButtonText(scene, 'Restart', width / 100 - 1, height);
    this.restartButton = this.createButton(scene, width * 0.5, height);

    this.restartButton.on('pointerup', () => {
      document.dispatchEvent(this.resetScoreEvent);
      document.dispatchEvent(this.restartEvent);

      this.restartButton.clearTint();
      this.toggleGameOver(false);
    });
  }

  private createButton (scene: Scene, x: number, y: number): GameObjects.Sprite {
    const button = scene.add.sprite(x, y, 'button');

    button.on('pointerdown', () =>
      button.setTint(0xf2c4b1)
    );

    button.setInteractive();
    button.visible = false;
    button.depth = 1;

    return button;
  }

  private createButtonText (scene: Scene, text: string, x: number, y: number): GameObjects.Text {
    const width = scene.scale.width / 2;

    const buttonText = scene.add.text(x, y - 10, text, {
      ...this.getCommonStyle(),
      fixedWidth: width,
      fontSize: '24px',
      fixedHeight: y
    });

    buttonText.visible = false;
    buttonText.depth = 2;

    return buttonText;
  }

  private getStyle (width: number): object {
    const size = this.getFontSize(width) * 2;

    return {
      ...this.getCommonStyle(),
      fixedWidth: width * 1.02,
      fontSize: `${size}px`,
      fixedHeight: size
    };
  }

  private getFontSize (width: number): number {
    return clamp(width / 30 * 2, 24, 48);
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
    this.downloadButton.visible = visible;
    this.restartButton.visible = visible;

    this.gameOverText.visible = visible;

    this.downloadText.visible = visible;
    this.restartText.visible = visible;
  }

  public hideStartText (): void {
    document.dispatchEvent(this.showScoreEvent);
    this.startText.visible = false;
  }
}
