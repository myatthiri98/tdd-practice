import { describe, expect, it } from 'vitest'
import { countingChange } from '../src/countingChange'

describe('countingChange', () => {
  it.each([
    [4, [1, 2, 3], 4], // 4 ways to make change
    [8, [1, 2, 3], 10], // 10 ways
    [24, [5, 7, 3], 5], // 5 ways
    [13, [2, 6, 12, 10], 0], // No ways
    [512, [1, 5, 10, 25], 20119], // Large case
    [1000, [1, 5, 10, 25], 142511], // Large case
    [240, [1, 2, 3, 4, 5, 6, 7, 8, 9], 1525987916], // Very large case
  ])('returns %i for amount %i with coins %j', (amount, coins, expected) => {
    expect(countingChange(amount, coins)).toBe(expected)
  })
})
