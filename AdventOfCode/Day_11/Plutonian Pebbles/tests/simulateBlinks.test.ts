import { describe, it, expect } from 'vitest'
import { simulateBlinks } from '../src/simulateBlinks'

describe('simulateBlinks - Edge Cases', () => {
  it.each([
    {
      description: 'should return the same stones for zero blinks',
      stones: [125, 17],
      blinks: 0,
      expected: [125, 17],
    },
    {
      description: 'should handle an empty stone list',
      stones: [],
      blinks: 10,
      expected: [],
    },
    {
      description: 'should handle large inputs without crashing',
      stones: Array(1000).fill(17),
      blinks: 1,
      expectedLength: 2000,
    },
    {
      description: 'should handle the input file example correctly',
      stones: [125, 17],
      blinks: 25,
      expectedMinLength: 50000,
    },
  ])(
    '$description',
    ({ stones, blinks, expected, expectedLength, expectedMinLength }) => {
      const result = simulateBlinks(stones, blinks)

      if (expected !== undefined) {
        expect(result).toEqual(expected)
      }

      if (expectedLength !== undefined) {
        expect(result.length).toBe(expectedLength)
      }

      if (expectedMinLength !== undefined) {
        expect(result.length).toBeGreaterThan(expectedMinLength)
      }
    },
  )
})
