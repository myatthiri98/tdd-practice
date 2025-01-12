import { describe, expect, it } from 'vitest'
import { generateParentheses } from '../src/generateParentheses'

describe('generateParentheses', () => {
  it.each([
    [1, ['()']],
    [2, ['(())', '()()']],
    [3, ['((()))', '(()())', '(())()', '()(())', '()()()']],
    [0, ['']],
    [7, null], // Placeholder to validate length or other properties for large n
  ])('should generate parentheses for n = %i', (n, expected) => {
    const result = generateParentheses(n)

    if (expected !== null) {
      expect(result.sort()).toEqual(expected.sort())
    } else {
      expect(result.length).toBeGreaterThan(0) // Ensures output is generated for large n
    }
  })
})
