export interface Playable {
  play(): void;
}

export abstract class Instrument implements Playable {
  protected name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public abstract play(): void;

  public tune(): void {
    return `${this.name} has been tuned.`;
  }
}

export abstract class StringInstrument extends Instrument {
  protected numberOfStrings: number;

  public constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  public replaceString(): string {
    return `A string on ${this.name} has been replaced.`;
  }
}

export class Guitar extends StringInstrument {
  public constructor() {
    super("Guitar", 6);
  }

  public play(): string {
    return "The guitar plays a rock rhythm.";
  }
}

export class Violin extends StringInstrument {
  public constructor() {
    super("Violin", 4);
  }

  public play(): string {
    return "The violin plays a soft melody.";
  }
}

export function startPerformance(instrument: Playable): string[] {
  const output = [];
  output.push("The performance begins!");
  output.push(instrument.play());
  return output;
}
