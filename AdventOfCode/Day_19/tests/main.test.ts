import { describe, it, expect } from 'vitest'
import { canConstruct, countPossibleDesigns } from '../src/main'
describe('canConstruct', () => {
  it('should return true for a matching single design', () => {
    const patterns = ['r', 'wr', 'b']
    const design = 'wr'
    expect(canConstruct(design, patterns)).toBe(true)
  })

  it('should return true for a design constructible from multiple patterns', () => {
    const patterns = ['r', 'wr', 'b']
    const design = 'wrb'
    expect(canConstruct(design, patterns)).toBe(true)
  })

  it('should return false for an unconstructible design', () => {
    const patterns = ['r', 'wr', 'b']
    const design = 'gr'
    expect(canConstruct(design, patterns)).toBe(false)
  })

  it('should return true for an empty design', () => {
    const patterns = ['r', 'wr', 'b']
    const design = ''
    expect(canConstruct(design, patterns)).toBe(true)
  })

  it('should handle memoization correctly for overlapping subproblems', () => {
    const patterns = ['r', 'rb', 'b']
    const design = 'rbrbrb'
    expect(canConstruct(design, patterns)).toBe(true)
  })
})

describe('countPossibleDesigns', () => {
  it('should count the correct number of possible designs', () => {
    const patterns = ['r', 'wr', 'b', 'g', 'bwu', 'rb', 'gb', 'br']
    const designs = [
      'brwrr',
      'bggr',
      'gbbr',
      'rrbgbr',
      'ubwu',
      'bwurrg',
      'brgr',
      'bbrgwb',
    ]
    expect(countPossibleDesigns(patterns, designs)).toBe(6)
  })

  it('should return 0 if no designs are possible', () => {
    const patterns = ['r', 'wr']
    const designs = ['bbb', 'grr', 'www']
    expect(countPossibleDesigns(patterns, designs)).toBe(0)
  })

  it('should return the total number of designs if all are possible', () => {
    const patterns = ['r', 'wr', 'b', 'g']
    const designs = ['r', 'wr', 'b', 'g']
    expect(countPossibleDesigns(patterns, designs)).toBe(4)
  })

  it('should return 0 for empty designs array', () => {
    const patterns = ['r', 'wr', 'b', 'g']
    const designs: string[] = []
    expect(countPossibleDesigns(patterns, designs)).toBe(0)
  })

  it('should return 0 for empty patterns array', () => {
    const patterns: string[] = []
    const designs = ['r', 'wr', 'b', 'g']
    expect(countPossibleDesigns(patterns, designs)).toBe(0)
  })
})
