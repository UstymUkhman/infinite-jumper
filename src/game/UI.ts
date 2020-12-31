export default class UI
{
  private intro = document.getElementById('intro')!;
  private score = document.getElementById('score')!;

  private end = document.getElementById('end')!;
  private ui = document.getElementById('ui')!;

  private callback?: number;

  public constructor () {
    document.addEventListener('score:update', this.onUpdate.bind(this));
  }

  private onStart (): void {
    this.intro.removeEventListener('click', this.onStart.bind(this));
    document.dispatchEvent(new CustomEvent('game:start'));

    this.intro.classList.add('fadeOut');
    this.ui.classList.add('fadeIn');
    clearTimeout(this.callback);
  }

  private onUpdate (event: CustomEventInit): void {
    this.score.textContent = event.detail.score;
  }

  private onRestart (): void {
    this.end.removeEventListener('click', this.onRestart.bind(this));
    document.dispatchEvent(new CustomEvent('game:restart'));

    this.end.classList.remove('fadeIn');
    this.ui.classList.add('fadeIn');
    this.score.textContent = '0';
  }

  public playIntro (callback: () => void): void {
    this.intro.addEventListener('click', this.onStart.bind(this));
    this.callback = setTimeout(callback, 4500);
    this.intro.classList.add('start');
  }

  public showGameOver (): void {
    this.end.addEventListener('click', this.onRestart.bind(this));
    this.ui.classList.remove('fadeIn');
    this.end.classList.add('fadeIn');
  }
}
