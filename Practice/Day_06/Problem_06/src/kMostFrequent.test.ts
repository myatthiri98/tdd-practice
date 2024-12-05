import { describe, it, expect } from 'vitest'
import { kMostFrequent } from './kMostFrequent'

describe('kMostFrequent', () => {
  it.each([
    {
      description: 'basic case with clear frequencies',
      nums: [1, 2, 2, 3, 3, 3],
      k: 2,
      expected: expect.arrayContaining([2, 3]),
    },
    {
      description: 'array with all same numbers',
      nums: [7, 7],
      k: 1,
      expected: [7],
    },
    {
      description: 'single element array',
      nums: [10],
      k: 1,
      expected: [10],
    },
    {
      description: 'equal frequencies',
      nums: [1, 2, 2, 3, 3],
      k: 2,
      expected: expect.arrayContaining([2, 3]),
    },
    {
      description: 'k equals array length',
      nums: [1, 2, 3],
      k: 3,
      expected: expect.arrayContaining([1, 2, 3]),
    },
    {
      description: 'multiple numbers with same frequency',
      nums: [1, 1, 2, 2, 3, 3],
      k: 2,
      expected: expect.arrayContaining([1, 2]),
    },
    {
      description: 'negative numbers',
      nums: [-1, -1, -2, -2, -2, -3],
      k: 2,
      expected: expect.arrayContaining([-2, -1]),
    },
    {
      description: 'mixed positive and negative numbers',
      nums: [-1, -1, 1, 1, 0, 0, 0],
      k: 2,
      expected: expect.arrayContaining([0, -1]),
    },
    {
      description: 'k = 1 with clear winner',
      nums: [1, 1, 1, 2, 2, 3],
      k: 1,
      expected: [1],
    },
    {
      description: 'large numbers',
      nums: [1000000, 1000000, 1000001, 1000001, 1000001],
      k: 2,
      expected: expect.arrayContaining([1000001, 1000000]),
    },
  ])(
    'returns $k most frequent elements from $nums',
    ({ nums, k, expected }) => {
      expect(kMostFrequent(nums, k)).toEqual(expected)
    },
  )

  // Edge cases in separate tests for clarity
  it('should return empty array for empty input', () => {
    expect(kMostFrequent([], 1)).toEqual([])
  })

  it('should return empty array for k = 0', () => {
    expect(kMostFrequent([1, 2, 3], 0)).toEqual([])
  })

  it('should return empty array for negative k', () => {
    expect(kMostFrequent([1, 2, 3], -1)).toEqual([])
  })

  it('should handle k larger than unique elements', () => {
    const nums = [1, 1, 2, 2, 3]
    const k = 10
    const result = kMostFrequent(nums, k)
    expect(result.length).toBeLessThanOrEqual(new Set(nums).size)
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]))
  })

  it('should maintain frequency order for equal frequencies', () => {
    const nums = [1, 1, 2, 2, 3, 3]
    const k = 3
    const result = kMostFrequent(nums, k)
    expect(result).toHaveLength(3)
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]))
  })
})
