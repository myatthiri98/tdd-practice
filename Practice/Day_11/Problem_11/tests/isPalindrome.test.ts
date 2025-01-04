import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/isPalindrome'

describe('isPalindrome', () => {
  it.each([
    {
      name: 'empty string',
      input: '',
      expected: true,
    },
    {
      name: 'single character',
      input: 'a',
      expected: true,
    },
    {
      name: 'palindrome string',
      input: 'racecar',
      expected: true,
    },
    {
      name: 'case-insensitive palindrome',
      input: 'Aba',
      expected: true,
    },
    {
      name: 'ignores non-alphanumeric characters',
      input: 'A man, a plan, a canal, Panama',
      expected: true,
    },
    {
      name: 'non-palindrome',
      input: 'random',
      expected: false,
    },
  ])('should handle $name correctly', ({ input, expected }) => {
    expect(isPalindrome(input)).toBe(expected)
  })
})
