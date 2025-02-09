import { describe, expect, it } from 'vitest'
import { maxConsecutiveChars } from '../src/maxConsecutiveChars'

describe('maxConsecutiveChars', () => {
  it.each([
    ['1001', 1, 3], // Case 1: Flip one '1' to '0', max streak = 3
    ['11011011', 3, 8], // Case 2: Flip three '0's to '1's, max streak = 8
    ['00001111', 2, 6], // Case 3: Flip two '0's or '1's, max streak = 6
    ['101010', 2, 5], // Case 4: Flip two '0's or '1's, max streak = 5
    ['11111', 0, 5], // Case 5: No flips, max streak = 5
    ['00000', 0, 5], // Case 6: No flips, max streak = 5
    ['0', 1, 1], // Case 7: Single character flip
    ['1', 1, 1], // Case 8: Single character flip
    ['1010'.repeat(100), 50, 101], // Case 9: Large input, check performance
  ])('S = %s, K = %d → Expected Output: %d', (S, K, expected) => {
    expect(maxConsecutiveChars(S, K)).toBe(expected)
  })
})
