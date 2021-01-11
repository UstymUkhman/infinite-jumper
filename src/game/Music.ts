import { Scene, Sound } from 'phaser';
enum Artist { VanHalen, Queen, HouseOfPain };

export default class
{
  private tracks: Array<Sound.BaseSound>;
  private artists: Array<Artist>;

  private music: SoundFade;
  private artist: Artist;

  private track = -1;

  public constructor (private scene: Scene, soundFade: unknown, artists: unknown) {
    this.artists = artists as Array<Artist>;
    this.artist = this.artists[this.track];
    this.music = soundFade as SoundFade;

    this.tracks = this.artists.map(
      artist => this.scene.sound.add(artist as unknown as string)
    );
  }

  public start (): void {
    this.playNextTrack();
  }

  private playNextTrack (): void {
    ++this.track > 2 && this.shuffle();
    this.artist = this.artists[this.track];

    const track = this.currentTrack;
    const fade = track.duration * 1e3 - 500;

    this.music.fadeIn(this.scene, track, 500, 0.1);

    document.dispatchEvent(
      new CustomEvent('new:song', { detail: {
        song: this.songTitle
      }})
    );

    setTimeout(() => {
      this.music.fadeOut(this.scene, track, 500, false);
      this.playNextTrack();
    }, fade);
  }

  private shuffle (): void {
    do this.artists = this.artists.sort(() => Math.random() - 0.5);
    while (this.artists[0] === this.artist);
    this.track = 0;
  }

  private get currentTrack (): Sound.BaseSound {
    return this.tracks[this.currentArtist];
  }

  private get songTitle (): string | undefined {
    switch (this.track) {
      case Artist.VanHalen:
        return 'Van Halen - Jump';

      case Artist.Queen:
        return 'Queen - Don\'t Stop Me Now';

      case Artist.HouseOfPain:
        return 'House Of Pain - Jump Around';

      default:
        return undefined;
    }
  }

  private get currentArtist (): number {
    return Artist[this.artist] as unknown as number;
  }
}
