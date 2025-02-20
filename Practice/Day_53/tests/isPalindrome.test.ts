import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/isPalindrome' // Assuming the function will be in isPalindrome.ts

describe('isPalindrome', () => {
  it.each([
    ['racecar', true],
    ['hello', false],
    ['level', true],
    ['world', false],
    ['A man a plan a canal Panama', true],
    ['Was it a car or a cat I saw', true],
  ])('should return %s is palindrome: %p', (input, expected) => {
    expect(isPalindrome(input)).toBe(expected)
  })
})
