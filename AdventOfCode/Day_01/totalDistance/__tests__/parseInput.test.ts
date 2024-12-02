import { describe, it, expect } from 'vitest'
import { parseInput } from '../parseInput'

describe('parseInput', () => {
  it('should parse space-separated number pairs', () => {
    const input = `1   2
3   4
5   6`
    expect(parseInput(input)).toEqual({
      left: [1, 3, 5],
      right: [2, 4, 6]
    })
  })

  it('should handle variable whitespace', () => {
    const input = `1       2
3   4
5          6`
    expect(parseInput(input)).toEqual({
      left: [1, 3, 5],
      right: [2, 4, 6]
    })
  })

  it('should handle empty input', () => {
    expect(parseInput('')).toEqual({
      left: [],
      right: []
    })
  })
}) 