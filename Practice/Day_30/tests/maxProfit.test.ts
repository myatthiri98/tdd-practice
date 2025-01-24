import { describe, it, expect } from 'vitest'
import { maxProfit } from '../src/maxProfit'

describe('maxProfit', () => {
  it.each([
    { prices: [10, 1, 5, 6, 7, 1], expected: 6 }, // Example 1
    { prices: [10, 8, 7, 5, 2], expected: 0 }, // Example 2
    { prices: [1, 2, 3, 4, 5], expected: 4 }, // Continuous increase
    { prices: [5, 4, 3, 2, 1], expected: 0 }, // Continuous decrease
    { prices: [2, 4, 1, 5], expected: 4 }, // Buy low, sell high
    { prices: [2], expected: 0 }, // Single day (no transaction possible)
  ])('returns $expected for prices $prices', ({ prices, expected }) => {
    expect(maxProfit(prices)).toBe(expected)
  })
})
