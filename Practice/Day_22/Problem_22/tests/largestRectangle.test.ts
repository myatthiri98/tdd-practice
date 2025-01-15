import { describe, it, expect } from 'vitest'
import { largestRectangleArea } from '../src/largestRectangle'

describe('largestRectangleArea', () => {
  it.each([
    { heights: [7, 1, 7, 2, 2, 4], expected: 8, description: 'mixed heights' },
    { heights: [1, 3, 7], expected: 7, description: 'ascending heights' },
    { heights: [], expected: 0, description: 'empty heights' },
    {
      heights: [2, 1, 5, 6, 2, 3],
      expected: 10,
      description: 'varying heights',
    },
    { heights: [2, 4], expected: 4, description: 'two bars' },
  ])('returns the maximum area for $description', ({ heights, expected }) => {
    expect(largestRectangleArea(heights)).toBe(expected)
  })
})
