import { describe, it, expect } from 'vitest'
import { calculateTotalCost } from '../src/calculateTotalCost'

describe('calculateTotalCost', () => {
  it.each([
    {
      grid: [
        ['A', 'A', 'A', 'A'],
        ['B', 'B', 'C', 'D'],
        ['B', 'B', 'C', 'C'],
        ['E', 'E', 'E', 'C'],
      ],
      regions: [
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3], // Region A
        ],
        [
          [1, 0],
          [1, 1],
          [2, 0],
          [2, 1], // Region B
        ],
        [
          [1, 2],
          [2, 2],
          [2, 3],
          [3, 3], // Region C
        ],
        [[1, 3]], // Region D
        [
          [3, 0],
          [3, 1],
          [3, 2], // Region E
        ],
      ],
      expected: 140,
    },
  ])(
    'should calculate the total cost for a given map',
    ({ grid, regions, expected }) => {
      expect(calculateTotalCost(regions as [number, number][][], grid)).toBe(
        expected,
      )
    },
  )
})
