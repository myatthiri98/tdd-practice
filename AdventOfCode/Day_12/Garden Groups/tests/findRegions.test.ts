import { describe, it, expect } from 'vitest'
import { findRegions } from '../src/findRegions'

describe('findRegions', () => {
  it.each([
    {
      grid: [
        ['A', 'A', 'A', 'A'],
        ['B', 'B', 'C', 'D'],
        ['B', 'B', 'C', 'C'],
        ['E', 'E', 'E', 'C'],
      ],
      expected: [
        [
          ['A', [0, 0]],
          ['A', [0, 1]],
          ['A', [0, 2]],
          ['A', [0, 3]],
        ],
        [
          ['B', [1, 0]],
          ['B', [1, 1]],
          ['B', [2, 0]],
          ['B', [2, 1]],
        ],
        [
          ['C', [1, 2]],
          ['C', [2, 2]],
          ['C', [2, 3]],
          ['C', [3, 3]],
        ],
        [['D', [1, 3]]],
        [
          ['E', [3, 0]],
          ['E', [3, 1]],
          ['E', [3, 2]],
        ],
      ],
    },
  ])('should identify all regions in the grid', ({ grid, expected }) => {
    expect(findRegions(grid)).toEqual(expected)
  })
})
