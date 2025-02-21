import { describe, it, expect } from 'vitest'
import { mostFrequentChar } from '../src/mostFrequentChar' // Adjust path accordingly

describe('mostFrequentChar', () => {
  it.each([
    ['abca', 'a'], // 'a' appears most frequently (2 times)
    ['abc', 'a'], // All characters are equally frequent, so 'a' (first) should be returned
    ['aaa', 'a'], // Only 'a' is present
    ['baccd', 'c'], // 'c' appears most frequently (2 times)
    ['', null], // Empty string should return null
    ['abcd', 'a'], // 'a' is the first in case of a tie
  ])(
    'should return the most frequent character for the string %s',
    (input: string, expected: string | null) => {
      expect(mostFrequentChar(input)).toBe(expected)
    },
  )
})
