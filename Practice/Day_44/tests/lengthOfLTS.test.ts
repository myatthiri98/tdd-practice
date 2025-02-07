import { describe, it, expect } from 'vitest'
import { lengthOfLIS } from '../src/lengthOfLIS'

describe('lengthOfLIS', () => {
  it.each([
    { nums: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4 },
    { nums: [0, 1, 0, 3, 2, 3], expected: 4 },
    { nums: [7, 7, 7, 7, 7, 7, 7], expected: 1 },
    { nums: [1, 2, 3, 4, 5], expected: 5 },
    { nums: [5, 4, 3, 2, 1], expected: 1 },
    { nums: [3, 10, 2, 1, 20], expected: 3 },
    { nums: [50, 3, 10, 7, 40, 80], expected: 4 },
  ])('should return $expected for nums = $nums', ({ nums, expected }) => {
    expect(lengthOfLIS(nums)).toBe(expected)
  })
})
