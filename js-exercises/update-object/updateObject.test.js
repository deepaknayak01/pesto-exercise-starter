import { updateObject } from "./updateObject";

describe("updateObject", () => {
  it('should return the length of array same for input and output', () => {
    expect(updateObject(1, '_', ['a', 'b', 'c']).length).toEqual(3);
  });

  it('should return array with value replaced with input parameter', () => {
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
  });

  it('should replace last element of array when index passed is -1', () => {
    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toEqual(['a', 'b', '_']);
  })
});
