import { describe, expect, it } from 'vitest'
import searchMatrix from '../src/searchMatrix'

describe('Search 2D Matrix', () => {
  it.each([
    // Test with normal cases
    {
      target: 10,
      matrix: [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40],
      ],
      expected: true,
    },
    {
      target: 8,
      matrix: [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40],
      ],
      expected: true,
    },
    {
      target: 40,
      matrix: [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40],
      ],
      expected: true,
    },

    // Test with missing target
    {
      target: 3,
      matrix: [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40],
      ],
      expected: false,
    },
    {
      target: 15,
      matrix: [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40],
      ],
      expected: false,
    },

    // Edge cases
    { target: 1, matrix: [[1]], expected: true }, // Single element matrix, target is first element
    { target: 0, matrix: [[1]], expected: false }, // Single element matrix, target is not present
    { target: 10, matrix: [[], []], expected: false }, // Empty matrix
    { target: 10, matrix: [[10]], expected: true }, // Single element matrix, target is present
  ])(
    'should return $expected when searching for target $target in matrix $matrix',
    ({
      target,
      matrix,
      expected,
    }: {
      target: number
      matrix: number[][]
      expected: boolean
    }) => {
      expect(searchMatrix(matrix, target)).toBe(expected)
    },
  )
})
