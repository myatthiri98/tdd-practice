import { describe, it, expect } from 'vitest'
import { arrayStepper } from '../src/arrayStepper'

describe('arrayStepper', () => {
  it.each([
    [[2, 4, 2, 0, 0, 1], true], // Example case: Can reach last index
    [[2, 3, 2, 0, 0, 1], false], // Example case: Stuck at index 3
    [[3, 1, 3, 1, 0, 1], true], // Example case: Can reach last index
    [[4, 1, 5, 1, 1, 1, 0, 4], true], // Can reach last index
    [[4, 1, 2, 1, 1, 1, 0, 4], false], // Cannot reach last index
    [[1, 1, 1, 1, 1, 0], true], // Can reach last index
    [[1, 1, 1, 1, 0, 0], false], // Cannot reach last index
    [
      [
        31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14,
        13, 12, 11, 10, 9, 8, 7, 6, 5, 3, 2, 1, 0, 0, 0,
      ],
      false,
    ], // Cannot reach last index
  ])('arrayStepper(%j) should return %s', (numbers, expected) => {
    expect(arrayStepper(numbers)).toBe(expected)
  })
})
