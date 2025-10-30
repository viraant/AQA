import { describe, it, expect, vi, beforeEach } from 'vitest';

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
        super('Guitar', 6);
    }

    public play(): void {
        console.log('The guitar plays a rock rhythm.');
    }
}

class Violin extends StringInstrument {
    public constructor() {
        super('Violin', 4);
    }

    public play(): void {
        console.log('The violin plays a soft melody.');
    }
}

function startPerformance(instrument: Playable): void {
    console.log('The performance begins!');
    instrument.play();
}

describe('Instrument classes tests', () => {
    let consoleSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    it('should create a Guitar and call play()', () => {
        const guitar = new Guitar();
        guitar.play();

        expect(consoleSpy).toHaveBeenCalledWith('The guitar plays a rock rhythm.');
    });

    it('should create a Violin and call play()', () => {
        const violin = new Violin();
        violin.play();

        expect(consoleSpy).toHaveBeenCalledWith('The violin plays a soft melody.');
    });

    it('should call tune() on Guitar', () => {
        const guitar = new Guitar();
        guitar.tune();

        expect(consoleSpy).toHaveBeenCalledWith('Guitar has been tuned.');
    });

    it('should call replaceString() on Violin', () => {
        const violin = new Violin();
        violin.replaceString();

        expect(consoleSpy).toHaveBeenCalledWith('A string on Violin has been replaced.');
    });

    it('should call startPerformance() and then play()', () => {
        const guitar = new Guitar();
        const playMock = vi.spyOn(guitar, 'play');

        startPerformance(guitar);

        expect(consoleSpy).toHaveBeenCalledWith('The performance begins!');
        expect(playMock).toHaveBeenCalled();
    });
});
