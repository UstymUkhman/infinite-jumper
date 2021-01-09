export default class
{
  private multiplyScore = document.getElementById('scoreMultiplier')!;
  private currentScore = document.getElementById('currentScore')!;
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
  private scoreMultiplier = 0;
  private lastMultiplier = 0;

  private bonusTime?: number;
  private callback?: number;

  public constructor () {
    this.start = this.onStart.bind(this);
    this.update = this.onUpdate.bind(this);
    this.restart = this.onRestart.bind(this);

    this.startEvent = new CustomEvent('game:start');
    this.restartEvent = new CustomEvent('game:restart');
    document.addEventListener('score:update', this.update);
  }

  public playIntro (callback: () => void): void {
    this.intro.addEventListener('click', this.start);
    this.callback = setTimeout(callback, 4500);
    this.intro.classList.add('start');
  }

  private onStart (): void {
    this.intro.removeEventListener('click', this.start);
    document.dispatchEvent(this.startEvent);

    this.intro.classList.add('fadeOut');
    this.ui.classList.add('fadeIn');
    clearTimeout(this.callback);
  }

  private onUpdate (event: CustomEventInit): void {
    const { score, multiplier } = event.detail;
    this.scoreMultiplier += multiplier;

    const currentScore = score + this.scoreMultiplier;
    const bestScore = Math.max(currentScore, this.savedScore).toString();

    if (this.lastMultiplier !== multiplier) {
      this.bonusTime = setTimeout(this.onBonusEnd.bind(this), 2000);
      this.multiplyScore.textContent = `x${multiplier + 1}`;

      this.multiplyScore.classList.add('animate');
      this.lastMultiplier = multiplier;
    }

    localStorage.setItem('Best Score', bestScore);
    this.score.textContent = currentScore;
  }

  private onBonusEnd (): void {
    this.multiplyScore.classList.remove('animate');
  }

  public showGameOver (): void {
    this.end.addEventListener('click', this.restart);
    setTimeout(() => this.end.classList.add('interactable'), 1250);

    this.bestScore.textContent = this.savedScore.toString();
    this.currentScore.textContent = this.score.textContent;

    this.ui.classList.remove('fadeIn');
    this.end.classList.add('fadeIn');
    clearTimeout(this.bonusTime);
  }

  private onRestart (): void {
    this.end.removeEventListener('click', this.restart);
    document.dispatchEvent(this.restartEvent);
    this.savedScore = this.savedBestScore;

    this.end.classList.remove('interactable');
    this.end.classList.remove('fadeIn');
    this.ui.classList.add('fadeIn');

    this.score.textContent = '0';
    this.scoreMultiplier = 0;
    this.lastMultiplier = 0;
  }

  private get savedBestScore (): number {
    return +(localStorage.getItem('Best Score') ?? '0');
  }
}
