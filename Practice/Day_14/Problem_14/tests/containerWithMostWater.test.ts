import { describe, it, expect } from 'vitest'
import { maxArea } from '../src/containerWithMostWater'

describe('maxArea', () => {
  it.each([
    {
      heights: [1],
      expected: 0,
      description: 'return 0 for an array with less than two heights',
    },
    {
      heights: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      expected: 49,
      description: 'calculate the correct maximum area',
    },
    {
      heights: [1, 1],
      expected: 1,
      description: 'handle simple case with two equal heights',
    },
    {
      heights: [4, 3, 2, 1, 4],
      expected: 16,
      description: 'calculate correct area with multiple heights',
    },
    {
      heights: [1, 2, 1],
      expected: 2,
      description: 'handle cases with varying heights',
    },
    {
      heights: [5, 5, 5, 5],
      expected: 15,
      description: 'handle arrays with all elements the same',
    },
    {
      heights: [1, 1000, 1, 1000],
      expected: 2000,
      description: 'extreme values on both ends',
    },
  ])('should $description: heights = $heights', ({ heights, expected }) => {
    expect(maxArea(heights)).toBe(expected)
  })
})
