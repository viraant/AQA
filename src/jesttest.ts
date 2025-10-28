import { startPerformance, Guitar } from '../src/instruments.js';

describe('startPerformance function', () => {
  it('should start performance and play instrument', () => {
    const guitar = new Guitar();
    const result = startPerformance(guitar);

    expect(result[0]).toBe('The performance begins!');
    expect(result[1]).toBe('The guitar plays a rock rhythm.');
  });

  it('should return array with two strings', () => {
    const guitar = new Guitar();
    const result = startPerformance(guitar);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
  });
});
