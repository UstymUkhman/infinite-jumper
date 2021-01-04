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
    const fade = track.duration * 1e3 - 1e3;

    this.music.fadeIn(this.scene, track, 1e3, 0.1);

    setTimeout(() => {
      this.music.fadeOut(this.scene, track, 1e3, false);
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

  private get currentArtist (): number {
    return Artist[this.artist] as unknown as number;
  }
}
