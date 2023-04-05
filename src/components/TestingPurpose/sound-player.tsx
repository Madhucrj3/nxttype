export default class SoundPlayer {
  static mockClear() {
    throw new Error("Method not implemented.");
  }
  foo: string;
  static mock: any;
  constructor() {
    this.foo = "bar";
  }

  playSoundFile(fileName: string) {
    console.log("Playing sound file " + fileName);
  }
}
