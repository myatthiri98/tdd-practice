import { describe, it, expect } from 'vitest'
import { maxArea } from '../src/containerWithMostWater'

describe('maxArea', () => {
  it.each([
    {
      numbers: [1],
      expected: 0,
      description: 'return 0 for an array with less than two heights',
    },
    {
      numbers: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      expected: 49,
      description: 'calculate the correct maximum area',
    },
    {
      numbers: [1, 1],
      expected: 1,
      description: 'handle simple case with two equal heights',
    },
    {
      numbers: [4, 3, 2, 1, 4],
      expected: 16,
      description: 'calculate correct area with multiple heights',
    },
    {
      numbers: [1, 2, 1],
      expected: 2,
      description: 'handle cases with varying heights',
    },
    {
      numbers: [5, 5, 5, 5],
      expected: 15,
      description: 'handle arrays with all elements the same',
    },
  ])('should $description: numbers = $numbers', ({ numbers, expected }) => {
    expect(maxArea(numbers)).toBe(expected)
  })
})
