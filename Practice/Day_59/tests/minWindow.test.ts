// minWindow.test.ts
import { describe, it, expect } from 'vitest'
import { minWindow } from '../src/minWindow'

describe('minWindow', () => {
  it.each([
    ['OUZODYXAZV', 'XYZ', 'YXAZ'], // Case where substring is found
    ['xyz', 'xyz', 'xyz'], // Case where entire string is the answer
    ['x', 'xy', ''], // Case where there is no valid substring
    ['ADOBECODEBANC', 'ABC', 'BANC'], // Case where substring is in the middle
    ['AA', 'AA', 'AA'], // Case where both strings are equal
    ['a', 'a', 'a'], // Case with single character match
  ])(
    'should return the shortest substring of "%s" that contains all characters of "%s"',
    (s, t, expected) => {
      expect(minWindow(s, t)).toBe(expected) // We expect the result to match the expected output
    },
  )
})
