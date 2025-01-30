import { describe, it, expect } from 'vitest'
import { slidingWindowMax } from '../src/slidingWindowMax'

describe('Sliding Window Maximum', () => {
  it.each([
    { nums: [1, 2, 1, 0, 4, 2, 6], k: 3, expected: [2, 2, 4, 4, 6] },
    { nums: [9, 3, 5, 1, 7, 3, 8], k: 2, expected: [9, 5, 5, 7, 7, 8] },
    { nums: [1], k: 1, expected: [1] }, // Single element case
    { nums: [4, 3, 2, 1], k: 2, expected: [4, 3, 2] }, // Decreasing sequence
    { nums: [1, 3, 1, 2, 0, 5], k: 3, expected: [3, 3, 2, 5] }, // Mixed values
  ])(
    'should return $expected for nums=$nums and k=$k',
    ({ nums, k, expected }) => {
      expect(slidingWindowMax(nums, k)).toEqual(expected)
    },
  )
})
