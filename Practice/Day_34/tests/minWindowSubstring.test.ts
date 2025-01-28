import { describe, expect, it } from 'vitest'
import { minWindow } from '../src/minWindowSubstring'

describe('minWindow', () => {
  // Test case interface
  interface TestCase {
    s: string
    t: string
    expected: string
    description: string
  }

  // Test cases
  const testCases: TestCase[] = [
    {
      s: 'OUZODYXAZV',
      t: 'XYZ',
      expected: 'YXAZ',
      description: 'Basic case with non-consecutive characters',
    },
    {
      s: 'xyz',
      t: 'xyz',
      expected: 'xyz',
      description: 'Exact match case',
    },
    {
      s: 'x',
      t: 'xy',
      expected: '',
      description: 'Impossible case - missing character',
    },
    {
      s: 'ADOBECODEBANC',
      t: 'ABC',
      expected: 'BANC',
      description: 'Longer string with multiple options',
    },
    {
      s: 'aa',
      t: 'aa',
      expected: 'aa',
      description: 'Case with duplicates in t',
    },
    {
      s: 'a',
      t: 'a',
      expected: 'a',
      description: 'Single character case',
    },
    {
      s: 'ab',
      t: 'b',
      expected: 'b',
      description: 'Single character in t',
    },
  ]

  // Run all test cases
  it.each(testCases)('$description: s="$s", t="$t"', ({ s, t, expected }) => {
    expect(minWindow(s, t)).toBe(expected)
  })

  // Additional individual test cases for edge cases
  it('should handle empty strings', () => {
    expect(minWindow('', '')).toBe('')
    expect(minWindow('abc', '')).toBe('')
    expect(minWindow('', 'abc')).toBe('')
  })

  it('should handle case sensitivity', () => {
    expect(minWindow('aBbA', 'aB')).toBe('aB')
    expect(minWindow('ADOBECODEBANC', 'abc')).toBe('')
  })

  // Additional test cases
  const additionalTestCases: TestCase[] = [
    {
      s: 'ADOBECODEBANC',
      t: 'ABC',
      expected: 'BANC',
      description: 'Case with multiple occurrences of characters in s',
    },
    {
      s: 'aaflslflsldkalskaaa',
      t: 'aaa',
      expected: 'aaa',
      description: 'Case with multiple occurrences of characters in t',
    },
    {
      s: 'a',
      t: 'aa',
      expected: '',
      description: 'Case with insufficient characters in s',
    },
    {
      s: 'a',
      t: 'a',
      expected: 'a',
      description: 'Single character match',
    },
  ]

  // Run additional test cases
  it.each(additionalTestCases)(
    '$description: s="$s", t="$t"',
    ({ s, t, expected }) => {
      expect(minWindow(s, t)).toBe(expected)
    },
  )
})
