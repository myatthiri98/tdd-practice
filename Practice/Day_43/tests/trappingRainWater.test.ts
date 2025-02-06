import { describe, it, expect } from 'vitest'
import { trapRainWater } from '../src/trappingRainWater'

describe('Trapping Rain Water', () => {
  it.each([
    { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 },
    { height: [4, 2, 0, 3, 2, 5], expected: 9 },
    { height: [3, 0, 2, 0, 4], expected: 7 },
    { height: [1, 1, 1, 1, 1], expected: 0 }, // No valleys → No trapped water
    { height: [5, 4, 3, 2, 1], expected: 0 }, // Descending heights → No trapped water
    { height: [], expected: 0 }, // Empty input → No water trapped
  ])(
    'should calculate trapped rainwater for $height',
    ({ height, expected }) => {
      expect(trapRainWater(height)).toBe(expected)
    },
  )
})
