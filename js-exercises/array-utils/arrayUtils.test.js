import { forEach, map, filter, reduce } from './arrayUtils';

describe('forEach loop through array', () => {
  test('should loop through each item of array, execute function for each item and return undefined', () => {
    expect(forEach([1, 2, 3, 4, 5], function(){})).toBe(undefined);
  });
});

describe('map method', () => {
  test('should form new array of same length and square each value', () => {
    expect(map([1, 2, 3, 4, 5], function(val){ return val * val;}).length).toBe(5);
    expect(map([1, 2, 3, 4, 5], function(val){ return val * val;})[4]).toBe(25);
  });
});

describe('filter method test', () => {
  test('return even numbers', () => {
    expect(filter([1, 2, 3, 5], function(val){ return val % 2 === 0;})[0]).toBe(2);
  });
  test('filter positive numbers', () => {
    expect(filter([-1, -2, 3, -5], function(val){ return val > 0;})[0]).toBe(3);
  });
});

describe('reduce method test', () => {
  test('return sum of all numbers in array', () => {
    expect(reduce([1, 2, 3, 5], function(total, curr){ return total + curr;})).toBe(11);
  });
  test('return sum of all numbers in array from provided initial value', () => {
    expect(reduce([1, 2, 3, 5], function(total, curr){ return total + curr;}, 2)).toBe(8);
  });
});