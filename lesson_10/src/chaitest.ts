import { expect } from "chai";
import { Guitar, Violin } from "../src/instruments.js";

describe("Instrument classes (Mocha + Chai)", () => {
  it("Guitar should play correct sound", () => {
    const guitar = new Guitar();
    expect(guitar.play()).to.equal("The guitar plays a rock rhythm.");
  });

  it("Violin should play correct sound", () => {
    const violin = new Violin();
    expect(violin.play()).to.equal("The violin plays a soft melody.");
  });

  it("Guitar should be tuned correctly", () => {
    const guitar = new Guitar();
    expect(guitar.tune()).to.equal("Guitar has been tuned.");
  });

  it("Violin string should be replaced correctly", () => {
    const violin = new Violin();
    expect(violin.replaceString()).to.equal(
      "A string on Violin has been replaced.",
    );
  });
});
