import { describe, it, expect } from 'vitest'
import { summingSquares } from '../src/summingSquares'

describe('summingSquares', () => {
  it.each([
    [1, 1], // 1 itself is a perfect square
    [8, 2], // 4 + 4
    [9, 1], // 9 itself
    [12, 3], // 4 + 4 + 4
    [31, 4], // 25 + 4 + 1 + 1
    [50, 2], // 25 + 25
    [68, 2], // 64 + 4
    [87, 4], // 81 + 4 + 1 + 1
  ])('returns %i for input %i', (input, expected) => {
    expect(summingSquares(input)).toBe(expected)
  })
})
