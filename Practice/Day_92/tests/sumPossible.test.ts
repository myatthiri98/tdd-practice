import { describe, it, expect } from 'vitest'
import { sumPossible } from '../src/sumPossible'

describe('sumPossible', () => {
  it.each([
    [8, [5, 12, 4], true], // 4 + 4 = 8
    [15, [6, 2, 10, 19], false], // Not possible
    [13, [6, 2, 1], true], // 6 + 6 + 1 = 13
    [103, [6, 20, 1], true], // Multiple combinations possible
    [12, [], false], // No numbers available
    [12, [12], true], // Direct match
    [0, [], true], // 0 is always possible
    [271, [10, 8, 265, 24], false], // Not possible
    [13, [3, 5], true], // 5 + 5 + 3 = 13
    [10, [4, 5, 7], true], // 5 + 5 = 10
    [16, [7, 6, 3], true], // 7 + 3 + 3 + 3 = 16
  ])(
    'should return %s for sumPossible(%i, %j)',
    (amount, numbers, expected) => {
      expect(sumPossible(amount, numbers)).toBe(expected)
    },
  )
})
