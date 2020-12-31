export default class UI
{
  private intro = document.getElementById('intro')!;
  private score = document.getElementById('score')!;

  private end = document.getElementById('end')!;
  private ui = document.getElementById('ui')!;

  private start: () => void;
  private update: (event: CustomEventInit) => void;
  private restart: () => void;

  private callback?: number;
  private startEvent: CustomEvent;
  private restartEvent: CustomEvent;

  public constructor () {
    this.start = this.onStart.bind(this);
    this.update = this.onUpdate.bind(this);
    this.restart = this.onRestart.bind(this);

    this.startEvent = new CustomEvent('game:start');
    this.restartEvent = new CustomEvent('game:restart');
    document.addEventListener('score:update', this.update);
  }

  private onStart (): void {
    this.intro.removeEventListener('click', this.start);
    document.dispatchEvent(this.startEvent);

    this.intro.classList.add('fadeOut');
    this.ui.classList.add('fadeIn');
    clearTimeout(this.callback);
  }

  private onUpdate (event: CustomEventInit): void {
    this.score.textContent = event.detail.score;
  }

  private onRestart (): void {
    this.end.removeEventListener('click', this.restart);
    document.dispatchEvent(this.restartEvent);

    this.end.classList.remove('fadeIn');
    this.ui.classList.add('fadeIn');
    this.score.textContent = '0';
  }

  public playIntro (callback: () => void): void {
    this.intro.addEventListener('click', this.start);
    this.callback = setTimeout(callback, 4500);
    this.intro.classList.add('start');
  }

  public showGameOver (): void {
    this.end.addEventListener('click', this.restart);
    this.ui.classList.remove('fadeIn');
    this.end.classList.add('fadeIn');
  }
}
