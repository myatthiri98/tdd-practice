import { describe, it, expect } from 'vitest'
import { sumNumbersRecursive } from '../src/sumNumbersRecursive'

describe('sumNumbersRecursive', () => {
  it.each([
    [[5, 2, 9, 10], 26],
    [[1, -1, 1, -1, 1, -1, 1], 1],
    [[], 0],
    [[1000, 0, 0, 0, 0, 0, 1], 1001],
    [[700, 70, 7], 777],
    [[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1], -55],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0],
  ])('should return %i when given %j', (input, expected) => {
    expect(sumNumbersRecursive(input)).toBe(expected)
  })
})
