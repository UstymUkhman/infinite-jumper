export default class
{
  private multiplyScore = document.getElementById('scoreMultiplier')!;
  private currentScore = document.getElementById('currentScore')!;
  private downloadButton = document.getElementById('download');

  private newScore = document.getElementById('newBestScore')!;
  private menuOptions = document.querySelectorAll('.option')!;
  private bestScore = document.getElementById('bestScore')!;

  private pauseScreen = document.getElementById('pause')!;
  private currentSong = document.getElementById('song')!;
  private menuButton = document.getElementById('menu')!;

  private score = document.getElementById('score')!;
  private intro = document.getElementById('intro')!;

  private end = document.getElementById('end')!;
  private ui = document.getElementById('ui')!;

  private android = /android/i.test(navigator.userAgent);

  private installPrompt?: (event: PromptEvent) => void;
  private setTrack: (event: CustomEventInit) => void;
  private update: (event: CustomEventInit) => void;
  private toggleMenu: (event: MouseEvent) => void;
  private download: (event: MouseEvent) => void;

  private savedScore = this.savedBestScore;
  private restartEvent: CustomEvent<void>;
  private startEvent: CustomEvent<void>;
  private promptEvent?: PromptEvent;

  private scoreMultiplier = 0;
  private lastMultiplier = 0;

  private restart: () => void;
  private start: () => void;

  private bonusTime?: number;
  private callback?: number;

  private gameOver = false;
  private autoplay = false;
  private pause = false;

  public constructor () {
    // this.createMenuOptions();

    this.start = this.onStart.bind(this);
    this.update = this.onUpdate.bind(this);
    this.restart = this.onRestart.bind(this);

    this.download = this.onDownload.bind(this);
    this.setTrack = this.setNewTrack.bind(this);
    this.toggleMenu = this.onMenuToggle.bind(this);

    this.startEvent = new CustomEvent('game:start');
    this.restartEvent = new CustomEvent('game:restart');

    document.addEventListener('new:song', this.setTrack);
    document.addEventListener('score:update', this.update);
    this.menuButton.addEventListener('click', this.toggleMenu);
    this.downloadButton?.addEventListener('click', this.download);

    // if (!this.android) {
    this.installPrompt = this.onInstallPrompt.bind(this);
    window.addEventListener('beforeinstallprompt', this.installPrompt);
    // }
  }

  // private createMenuOptions (): void {
  //   this.menuOptions.forEach(option =>
  //     this.addOptionEvent(
  //       option.classList[1],
  //       option.lastElementChild as HTMLSpanElement
  //     )
  //   );
  // }

  // private addOptionEvent (option: string, element: HTMLSpanElement): void {
  //   element.addEventListener();
  // }

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
    this.score.textContent = currentScore;

    if (this.lastMultiplier !== multiplier) {
      this.bonusTime = setTimeout(this.onBonusEnd.bind(this), 2000);
      this.multiplyScore.textContent = `x${multiplier + 1}`;

      this.multiplyScore.classList.add('animate');
      this.lastMultiplier = multiplier;
    }

    if (this.savedScore < currentScore) {
      localStorage.setItem('Best Score', currentScore);
      this.newScore.classList.add('animate');
    }
  }

  public setNewTrack (event: CustomEventInit): void {
    this.currentSong.textContent = event.detail.song;
  }

  private onBonusEnd (): void {
    this.multiplyScore.classList.remove('animate');
  }

  public showGameOver (): void {
    this.end.addEventListener('click', this.restart);
    setTimeout(() => this.end.classList.add('interactable'), 1250);

    this.bestScore.textContent = this.savedBestScore.toString();
    this.currentScore.textContent = this.score.textContent;

    this.pauseScreen.classList.remove('fadeIn');
    this.newScore.classList.remove('animate');
    this.menuButton.classList.remove('open');

    this.ui.classList.remove('fadeIn');
    this.end.classList.add('fadeIn');

    clearTimeout(this.bonusTime);
    this.gameOver = true;
  }

  private onInstallPrompt (event: PromptEvent): void {
    event.preventDefault();
    this.promptEvent = event;
  }

  private onMenuToggle (event: MouseEvent): void {
    if (this.gameOver) return;
    this.pause = !this.pause;
    this.toggleGameState();

    setTimeout(() =>
      document.dispatchEvent(new CustomEvent('game:pause', {
        detail: { autoplay: this.autoplay }
      })
    ), ~~!this.pause * 500);
  }

  private toggleGameState (): void {
    if (this.pause) {
      this.menuButton.classList.remove('close');
      this.pauseScreen.classList.add('fadeIn');

      void this.menuButton.offsetWidth;
      this.menuButton.classList.add('open');
    }

    else {
      this.pauseScreen.classList.remove('fadeIn');
      this.menuButton.classList.remove('open');

      void this.menuButton.offsetWidth;
      this.menuButton.classList.add('close');
    }
  }

  private onDownload (event: MouseEvent): void {
    // if (this.android) {
    //   window.open('https://play.google.com/store');
    // } else {
    this.promptEvent?.prompt();

    this.promptEvent?.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        this.downloadButton?.classList.add('hidden');
        // delete this.installPrompt;
      }

      delete this.promptEvent;
    });
    // }
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
    this.gameOver = false;
  }

  private get savedBestScore (): number {
    return +(localStorage.getItem('Best Score') ?? '0');
  }
}
