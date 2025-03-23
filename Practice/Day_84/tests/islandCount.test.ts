import { describe, it, expect } from 'vitest'
import { islandCount } from '../src/islandCount'

describe('islandCount', () => {
  it.each([
    [
      'Example 1',
      [
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'L', 'W'],
        ['W', 'W', 'L', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['L', 'L', 'W', 'W', 'W'],
      ],
      3,
    ],
    [
      'Example 2',
      [
        ['L', 'W', 'W', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['W', 'L', 'W', 'L', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
        ['W', 'W', 'L', 'L', 'L'],
      ],
      4,
    ],
    [
      'Single Island',
      [
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
      ],
      1,
    ],
    [
      'No Island',
      [
        ['W', 'W'],
        ['W', 'W'],
        ['W', 'W'],
      ],
      0,
    ],
    [
      'Diagonal Land (Not Connected)',
      [
        ['L', 'W', 'L'],
        ['W', 'L', 'W'],
        ['L', 'W', 'L'],
      ],
      5,
    ],
  ])('should return correct island count for %s', (_, grid, expected) => {
    expect(islandCount(grid)).toBe(expected)
  })
})
