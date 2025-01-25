import { describe, it, expect } from 'vitest'
import { lengthOfLongestSubstring } from '../src/longest-substring'

describe('lengthOfLongestSubstring', () => {
  it.each([
    { input: 'zxyzxyz', expected: 3 },
    { input: 'xxxx', expected: 1 },
    { input: '', expected: 0 },
    { input: 'abcabcbb', expected: 3 },
    { input: 'pwwkew', expected: 3 },
    { input: 'dvdf', expected: 3 },
  ])('should return $expected for input $input', ({ input, expected }) => {
    expect(lengthOfLongestSubstring(input)).toBe(expected)
  })

  it('should handle edge cases', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1)
    expect(lengthOfLongestSubstring('aab')).toBe(2)
  })
})
