import { describe, expect, it } from 'vitest'
import { isValidParentheses } from '../src/isValidParentheses'

describe('isValidParentheses', () => {
  it.each([
    ['[]', true],
    ['()', true],
    ['()[]{}', true],
    ['([{}])', true],
    ['(]', false],
    ['([)]', false],
    ['{[]}', true],
    ['abc', false],
    ['', true],
  ])('should return %p for input "%s"', (input, expected) => {
    expect(isValidParentheses(input)).toBe(expected)
  })
})
