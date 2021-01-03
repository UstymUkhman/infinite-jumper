import type { Scene, Sound } from 'phaser';
enum Artist { VanHalen, Queen, HouseOfPain };

type SoundFade = {
  fadeIn: (
    scene: Scene,
    sound: Sound.BaseSound | string,
    duration: number,
    endVolume?: number,
    startVolume?: number
  ) => void

  fadeOut: (
    scene: Scene,
    sound: Sound.BaseSound | string,
    duration: number,
    destroy?: boolean
  ) => void
};

export default class
{
  private artists: Array<Sound.BaseSound>;
  private tracks: Array<Artist>;

  private music: SoundFade;
  private track: Artist;

  public constructor (private scene: Scene, soundFade: unknown, tracks: unknown) {
    this.tracks = tracks as Array<Artist>;
    this.music = soundFade as SoundFade;
    this.track = this.tracks[0];

    this.artists = this.tracks.map(
      artist => this.scene.sound.add(artist as unknown as string)
    );
  }

  public start (): void {
    this.music.fadeIn(this.scene, this.currentTrack, 1000, 0.5);

    // this.music.fadeOut(this.scene, this.currentTrack, 1000);

    // this.currentTrack.on('destroy', () => { }, this);
  }

  private shuffle (): void {
    do this.tracks = this.tracks.sort(() => Math.random() - 0.5);
    while (this.tracks[0] === this.track);
  }

  private get currentTrack (): Sound.BaseSound {
    return this.artists[this.currentArtist];
  }

  private get currentArtist (): number {
    return Artist[this.track] as unknown as number;
  }
}
