import { describe, expect, it } from 'vitest'
import { isValidParentheses } from '../src/isValidParentheses'

describe('Valid Parentheses', () => {
  it.each([
    {
      input: '()',
      expected: true,
    },
    {
      input: '()[]{}',
      expected: true,
    },
    {
      input: '(]',
      expected: false,
    },
    {
      input: '([)]',
      expected: false,
    },
    {
      input: '{[]}',
      expected: true,
    },
    {
      input: 'abc',
      expected: false,
    },
    {
      input: '',
      expected: true,
    },
  ])('should return %p for input "%s"', ({ input, expected }) => {
    expect(isValidParentheses(input)).toBe(expected)
  })
})
