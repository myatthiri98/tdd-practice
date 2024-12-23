import { describe, it, expect } from 'vitest'
import { canConstruct, countPossibleDesigns } from '../src/main'

describe('canConstruct', () => {
  it.each([
    [['r', 'wr', 'b'], 'wr', true], // Should return true for a matching single design
    [['r', 'wr', 'b'], 'wrb', true], // Should return true for a design constructible from multiple patterns
    [['r', 'wr', 'b'], 'gr', false], // Should return false for an unconstructible design
    [['r', 'wr', 'b'], '', true], // Should return true for an empty design
    [['r', 'rb', 'b'], 'rbrbrb', true], // Should handle memoization correctly for overlapping subproblems
  ])('should return %s for design %s', (patterns, design, expected) => {
    expect(canConstruct(design, patterns)).toBe(expected)
  })
})

describe('countPossibleDesigns', () => {
  it.each([
    [
      ['r', 'wr', 'b', 'g', 'bwu', 'rb', 'gb', 'br'],
      [
        'brwrr', // 2 ways
        'bggr', // 1 way
        'gbbr', // 4 ways
        'rrbgbr', // 6 ways
        'ubwu', // 0 ways
        'bwurrg', // 1 way
        'brgr', // 2 ways
        'bbrgwb', // 0 ways
      ],
      6,
    ],
    [
      ['r', 'wr'],
      ['bbb', 'grr', 'www'],
      0, // No possible arrangements
    ],
    [
      ['r', 'wr', 'b', 'g'],
      ['r', 'wr', 'b', 'g'],
      4, // All designs are possible: "r", "wr", "b", "g"
    ],
    [
      ['r', 'wr', 'b', 'g'],
      [],
      0, // No designs to arrange
    ],
    [
      [],
      ['r', 'wr', 'b', 'g'],
      0, // No patterns to construct designs
    ],
  ])(
    'should calculate the total arrangements for patterns %s and designs %s',
    (patterns, designs, expected) => {
      expect(countPossibleDesigns(patterns, designs)).toBe(expected)
    },
  )
})
