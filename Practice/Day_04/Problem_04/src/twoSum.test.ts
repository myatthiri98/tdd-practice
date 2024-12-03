import { describe, it, expect } from 'vitest'
import { twoSum } from './twoSum'

describe('twoSum', () => {
  it.each([
    {
      nums: [2, 7, 11, 15],
      target: 9,
      expected: [0, 1],
      description: 'basic case',
    },
    {
      nums: [3, 2, 4],
      target: 6,
      expected: [1, 2],
      description: 'numbers not in order',
    },
    {
      nums: [1, 3, 2],
      target: 3,
      expected: [0, 2],
      description: 'first and last numbers',
    },
    {
      nums: [3, 3],
      target: 6,
      expected: [0, 1],
      description: 'duplicate values',
    },
    {
      nums: [-1, -2, -3],
      target: -4,
      expected: [0, 2],
      description: 'negative numbers',
    },
    {
      nums: [-1, 5, 2, 1],
      target: 6,
      expected: [1, 3],
      description: 'mixed positive and negative numbers',
    },
  ])(
    'should find two sum indices: $description',
    ({ nums, target, expected }) => {
      expect(twoSum(nums, target)).toEqual(expected)
    },
  )

  // Keep large input test separate due to its special setup
  it('should handle large input efficiently', () => {
    const largeNums = [...Array.from({ length: 1000000 }, (_, i) => i), 999999]
    const target = 1999998
    expect(twoSum(largeNums, target)).toEqual([999999, 1000000])
  })
})
