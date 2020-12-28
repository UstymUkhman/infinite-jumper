export default class UI
{
  private intro = document.getElementById('intro')!;
  private callback?: number;

  public playIntro (callback: () => void): void {
    this.intro.addEventListener('click', this.onStart.bind(this));
    this.callback = setTimeout(callback, 5000);
    this.intro.classList.add('start');
  }

  private onStart (): void {
    this.intro.removeEventListener('click', this.onStart.bind(this));
    document.dispatchEvent(new CustomEvent('game:start'));

    this.intro.classList.add('fadeOut');
    clearTimeout(this.callback);
  }
}
