import { describe, it, expect } from 'vitest'
import { characterReplacement } from '../src/longestSubstring'

describe('Longest Repeating Character Replacement', () => {
  it.each([
    { s: 'XYYX', k: 2, expected: 4 },
    { s: 'AAABABB', k: 1, expected: 5 },
    { s: 'AABABBA', k: 1, expected: 4 },
    { s: 'ABAB', k: 2, expected: 4 },
    { s: 'ABC', k: 0, expected: 1 },
  ])("returns $expected for s='$s' and k=$k", ({ s, k, expected }) => {
    const result = characterReplacement(s, k)
    expect(result).toBe(expected)
  })
})
