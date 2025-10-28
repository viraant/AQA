interface Playable {
  play(): void;
}

abstract class Instrument implements Playable {
  protected name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public abstract play(): void;

  public tune(): void {
    console.log(`${this.name} has been tuned.`);
  }
}

abstract class StringInstrument extends Instrument {
  protected numberOfStrings: number;

  public constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  public replaceString(): void {
    console.log(`A string on ${this.name} has been replaced.`);
  }
}

class Guitar extends StringInstrument {
  public constructor() {
    super("Guitar", 6);
  }

  public play(): void {
    console.log("The guitar plays a rock rhythm.");
  }
}

class Violin extends StringInstrument {
  public constructor() {
    super("Violin", 4);
  }

  public play(): void {
    console.log("The violin plays a soft melody.");
  }
}

function startPerformance(instrument: Playable): void {
  console.log("The performance begins!");
  instrument.play();
}

const myGuitar = new Guitar();
const myViolin = new Violin();

startPerformance(myGuitar);
startPerformance(myViolin);

myGuitar.tune();
myViolin.replaceString();
