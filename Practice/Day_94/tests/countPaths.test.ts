import { describe, expect, it } from 'vitest'
import { countPaths } from '../src/countPaths'

describe('countPaths', () => {
  it.each([
    {
      grid: [
        ['O', 'O'],
        ['O', 'O'],
      ],
      expected: 2,
    },
    {
      grid: [
        ['O', 'O', 'X'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ],
      expected: 5,
    },
    {
      grid: [
        ['O', 'O', 'O'],
        ['O', 'O', 'X'],
        ['O', 'O', 'O'],
      ],
      expected: 3,
    },
    {
      grid: [
        ['O', 'O', 'O'],
        ['O', 'X', 'X'],
        ['O', 'O', 'O'],
      ],
      expected: 1,
    },
    {
      grid: [
        ['O', 'X'],
        ['O', 'O'],
      ],
      expected: 1,
    },
    {
      grid: [
        ['O', 'X'],
        ['X', 'O'],
      ],
      expected: 0,
    },
  ])('should return $expected for the given grid', ({ grid, expected }) => {
    expect(countPaths(grid)).toBe(expected)
  })
})
