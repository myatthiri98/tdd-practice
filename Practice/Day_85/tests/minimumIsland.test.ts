import { describe, expect, it } from 'vitest'
import { minimumIsland } from '../src/minimumIsland'

describe('minimumIsland', () => {
  it.each([
    [
      'Case 1',
      [
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'L', 'W'],
        ['W', 'W', 'L', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['L', 'L', 'W', 'W', 'W'],
      ],
      2,
    ],
    [
      'Case 2',
      [
        ['L', 'W', 'W', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['W', 'L', 'W', 'L', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
        ['W', 'W', 'L', 'L', 'L'],
      ],
      1,
    ],
    [
      'Case 3',
      [
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
      ],
      9,
    ],
    [
      'Case 4',
      [
        ['W', 'W'],
        ['L', 'L'],
        ['W', 'W'],
        ['W', 'L'],
      ],
      1,
    ],
  ])('%s', (_, grid, expected) => {
    expect(minimumIsland(grid)).toBe(expected)
  })
})
