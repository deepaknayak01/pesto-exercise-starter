import { freqSort } from './freqSort';

describe('frequency sorting', () => {
  test('sort array by frequency and verify length', () => {
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"]).length).toBe(3);
  });
  test('sort array by frequency to check complete array', () => {
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"])).toEqual([ 'z', 'b', 'a' ]);
  });
});
