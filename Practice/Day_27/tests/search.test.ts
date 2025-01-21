import { describe, it, expect } from 'vitest'
import { search } from '../src/search'

describe('search in rotated sorted array', () => {
  it.each([
    {
      description: 'should find target in rotated array - example 1',
      nums: [3, 4, 5, 6, 1, 2],
      target: 1,
      expected: 4,
    },
    {
      description: 'should return -1 when target is not found - example 2',
      nums: [3, 5, 6, 0, 1, 2],
      target: 4,
      expected: -1,
    },
    {
      description: 'should handle array with single element - target found',
      nums: [1],
      target: 1,
      expected: 0,
    },
    {
      description: 'should handle array with single element - target not found',
      nums: [1],
      target: 2,
      expected: -1,
    },
    {
      description: 'should work with non-rotated array',
      nums: [1, 2, 3, 4, 5],
      target: 3,
      expected: 2,
    },
    {
      description: 'should work with maximum rotation',
      nums: [5, 1, 2, 3, 4],
      target: 5,
      expected: 0,
    },
    {
      description: 'should find target at first position',
      nums: [4, 5, 6, 7, 0, 1, 2],
      target: 4,
      expected: 0,
    },
    {
      description: 'should find target at last position',
      nums: [4, 5, 6, 7, 0, 1, 2],
      target: 2,
      expected: 6,
    },
    {
      description: 'should find target at middle position',
      nums: [4, 5, 6, 7, 0, 1, 2],
      target: 6,
      expected: 2,
    },
    {
      description: 'should handle negative numbers',
      nums: [2, -3, -2, -1, 0, 1],
      target: -2,
      expected: 2,
    },
  ])('$description', ({ nums, target, expected }) => {
    expect(search(nums, target)).toBe(expected)
  })
})
