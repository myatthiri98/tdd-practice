import { describe, it, expect } from 'vitest'
import { countArrangements, sumAllArrangements } from '../src/arrangement'

describe('countArrangements', () => {
  it.each([
    // Test cases for valid designs
    [['r', 'wr', 'b'], 'wr', 1], // Only one way: "wr"
    [['r', 'wr', 'b'], 'wrb', 1], // Two ways: "wr", "b" or "w", "r", "b"

    // Test cases for impossible designs
    [['r', 'wr', 'b'], 'gr', 0], // Impossible design

    // Test case for long design
    [['r', 'rb', 'b'], 'rbrbrb', 8], // Multiple ways to arrange "rbrbrb"

    // Test cases for edge cases
    [['r', 'wr', 'b'], '', 1], // One way: Empty design
    [['r', 'rb', 'b'], 'rbrbrb', 8], // Should efficiently memoize recursive calls
  ])(
    'should count %s arrangements for design %s',
    (patterns, design, expected) => {
      expect(countArrangements(design, patterns)).toBe(expected)
    },
  )
})

describe('sumAllArrangements', () => {
  it.each([
    // Test case for calculating total arrangements
    [
      ['r', 'wr', 'b', 'g', 'bwu', 'rb', 'gb', 'br'],
      ['brwrr', 'bggr', 'gbbr', 'rrbgbr', 'ubwu', 'bwurrg', 'brgr', 'bbrgwb'],
      16, // Total: 2 + 1 + 4 + 6 + 0 + 1 + 2 + 0 = 16
    ],

    // Test case for no possible designs
    [
      ['r', 'wr'],
      ['bbb', 'grr', 'www'],
      0, // No possible arrangements
    ],

    // Test case for all possible designs
    [
      ['r', 'wr', 'b', 'g'],
      ['r', 'wr', 'b', 'g'],
      4, // All designs are possible: "r", "wr", "b", "g"
    ],

    // Edge case for empty designs array
    [
      ['r', 'wr', 'b', 'g'],
      [],
      0, // No designs to arrange
    ],

    // Edge case for empty patterns array
    [
      [],
      ['r', 'wr', 'b', 'g'],
      0, // No patterns to construct designs
    ],
  ])(
    'should calculate total arrangements for designs %s',
    (patterns, designs, expected) => {
      expect(sumAllArrangements(patterns, designs)).toBe(expected)
    },
  )
})
