const round = require('./round');

describe('round', () => {
  describe('normal rounding', () => {
    [
      { input: 0.12, precission: 0.05, expected: 0.1 },
      { input: 0.13, precission: 0.05, expected: 0.15 },
      { input: 0.16, precission: 0.05, expected: 0.15 },
      { input: 0.18, precission: 0.05, expected: 0.2 },
    ].forEach(({ input, precission, expected }) => {
      test(`${input} with a precission of ${precission} should return ${expected}`, () => {
        const result = round(input, precission);
        expect(result).toBe(expected);
      });
    });
  });

  describe('rounding to top', () => {
    [
      { input: 0.12, precission: 0.05, expected: 0.15 },
      { input: 0.13, precission: 0.05, expected: 0.15 },
      { input: 0.16, precission: 0.05, expected: 0.2 },
      { input: 0.18, precission: 0.05, expected: 0.2 },
    ].forEach(({ input, precission, expected }) => {
      test(`${input} with a precission of ${precission} should return ${expected}`, () => {
        const result = round(input, precission, true);
        expect(result).toBe(expected);
      });
    });
  });
});
