import { describe, it, expect } from 'vitest'
import { calculatePerimeter } from '../src/calculatePerimeter'

describe('calculatePerimeter', () => {
  it.each([
    {
      grid: [
        ['A', 'A', 'A', 'A'],
        ['B', 'B', 'C', 'D'],
        ['B', 'B', 'C', 'C'],
        ['E', 'E', 'E', 'C'],
      ],
      region: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      expected: 10,
    },
    {
      grid: [
        ['A', 'A', 'A', 'A'],
        ['B', 'B', 'C', 'D'],
        ['B', 'B', 'C', 'C'],
        ['E', 'E', 'E', 'C'],
      ],
      region: [[1, 3]],
      expected: 4,
    },
    {
      grid: [
        ['O', 'O', 'O', 'O', 'O'],
        ['O', 'X', 'O', 'X', 'O'],
        ['O', 'O', 'O', 'O', 'O'],
        ['O', 'X', 'O', 'X', 'O'],
        ['O', 'O', 'O', 'O', 'O'],
      ],
      region: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 0],
        [1, 2],
        [1, 4],
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [3, 0],
        [3, 2],
        [3, 4],
        [4, 0],
        [4, 1],
        [4, 2],
        [4, 3],
        [4, 4],
      ],
      expected: 36,
    },
  ])(
    'should calculate the perimeter for given regions',
    ({ grid, region, expected }) => {
      expect(calculatePerimeter(region as [number, number][], grid)).toBe(
        expected,
      )
    },
  )
})
