import { describe, it, expect } from 'vitest';
import { threeSum } from '../src/threeSum';

describe('threeSum', () => {
  it.each([
    { nums: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { nums: [0, 1, 1], expected: [] },
    { nums: [0, 0, 0], expected: [[0, 0, 0]] },
    { nums: [1, 2, 3, 4, 5], expected: [] },
    { nums: [-2, 0, 1, 1, 2, -1, -4], expected: [[-2, 0, 2], [-2, 1, 1], [-1, 0, 1]] }
  ])('given $nums, returns $expected', ({ nums, expected }) => {
    expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));
  });
});
