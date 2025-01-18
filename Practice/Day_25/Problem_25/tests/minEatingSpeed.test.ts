import { describe, it, expect } from 'vitest'
import { minEatingSpeed } from '../src/minEatingSpeed'

describe('Koko Eating Bananas', () => {
  it.each([
    { piles: [1, 4, 3, 2], h: 9, expected: 2 },
    { piles: [25, 10, 23, 4], h: 4, expected: 25 },
    { piles: [30, 11, 23, 4], h: 6, expected: 15 },
    { piles: [1, 1, 1, 1], h: 4, expected: 1 },
    { piles: [10, 10, 10, 10], h: 5, expected: 10 },
  ])(
    'should return the minimum eating speed for $piles with $h hours',
    ({ piles, h, expected }) => {
      expect(minEatingSpeed(piles, h)).toBe(expected)
    },
  )
})
