import { describe, it, expect } from 'vitest'
import { countXMASOccurrences } from '../src/wordSearch'

describe('countXMASOccurrences', () => {
  it.each([
    {
      description: 'XMAS appears once horizontally',
      grid: ['XMAS'],
      expected: 1,
    },
    {
      description: 'XMAS appears once in reverse horizontally',
      grid: ['SAMX'],
      expected: 1,
    },
    {
      description: 'XMAS appears vertically',
      grid: ['X', 'M', 'A', 'S'],
      expected: 1,
    },
    {
      description: 'XMAS appears vertically in reverse (bottom to top)',
      grid: ['S', 'A', 'M', 'X'],
      expected: 1,
    },
    {
      description: 'XMAS appears diagonally from top-left to bottom-right',
      grid: ['X....', '.M...', '..A..', '...S.', '.....'],
      expected: 1,
    },
    {
      description: 'XMAS appears diagonally from bottom-left to top-right',
      grid: ['.....', '.....', '...S.', '..A..', '.M...', 'X....'],
      expected: 1,
    },
    {
      description: 'XMAS appears twice horizontally with overlap',
      grid: ['XMASXMAS'],
      expected: 2,
    },
    {
      description: 'XMAS appears twice vertically with overlap',
      grid: ['X', 'M', 'A', 'S', 'X', 'M', 'A', 'S'],
      expected: 2,
    },
  ])('should return $expected when $description', ({ grid, expected }) => {
    expect(countXMASOccurrences(grid)).toBe(expected)
  })
})
