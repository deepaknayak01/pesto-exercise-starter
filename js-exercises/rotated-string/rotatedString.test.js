import { rotatedString } from './rotatedString';

describe('rotatedString', () => {
  it('rotatedString returns true for the given strings', () => {
    expect(rotatedString('abcde', 'edcba')).toBeTruthy();
  });

  it('rotatedString returns false for the given strings', () => {
    expect(rotatedString('abcde', 'abcde')).toBeFalsy();
  });
});
