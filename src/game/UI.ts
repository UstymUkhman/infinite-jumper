export default class
{
  private bestScore = document.getElementById('bestScore')!;
  private score = document.getElementById('score')!;

  private intro = document.getElementById('intro')!;
  private end = document.getElementById('end')!;
  private ui = document.getElementById('ui')!;

  private start: () => void;
  private update: (event: CustomEventInit) => void;
  private restart: () => void;

  private startEvent: CustomEvent;
  private restartEvent: CustomEvent;

  private savedScore = this.savedBestScore;
  private callback?: number;

  public constructor () {
    this.start = this.onStart.bind(this);
    this.update = this.onUpdate.bind(this);
    this.restart = this.onRestart.bind(this);

    this.startEvent = new CustomEvent('game:start');
    this.restartEvent = new CustomEvent('game:restart');

    document.addEventListener('score:update', this.update);
    this.bestScore.textContent = this.savedScore.toString();
  }

  private onStart (): void {
    this.intro.removeEventListener('click', this.start);
    document.dispatchEvent(this.startEvent);

    this.intro.classList.add('fadeOut');
    this.ui.classList.add('fadeIn');
    clearTimeout(this.callback);
  }

  private onUpdate (event: CustomEventInit): void {
    const score = event.detail.score;
    const bestScore = Math.max(score, this.savedScore).toString();

    localStorage.setItem('Best Score', bestScore);
    this.bestScore.textContent = bestScore;
    this.score.textContent = score;
  }

  private onRestart (): void {
    this.end.removeEventListener('click', this.restart);
    document.dispatchEvent(this.restartEvent);
    this.savedScore = this.savedBestScore;

    this.end.classList.remove('interactable');
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
    setTimeout(() => this.end.classList.add('interactable'), 1250);
    this.end.addEventListener('click', this.restart);

    this.ui.classList.remove('fadeIn');
    this.end.classList.add('fadeIn');
  }

  private get savedBestScore (): number {
    return +(localStorage.getItem('Best Score') ?? '0');
  }
}
