import { describe, expect, it } from 'vitest'
import { evalRPN } from '../src/evalRPN'

describe('evalRPN', () => {
  it.each([
    {
      tokens: ['1', '2', '+', '3', '*', '4', '-'],
      expected: 5,
      description: 'should evaluate a simple RPN expression',
    },
    {
      tokens: ['42'],
      expected: 42,
      description: 'should handle a single number',
    },
    {
      tokens: ['10', '3', '/'],
      expected: 3, // 10 / 3 truncates to 3
      description: 'should handle division truncating toward zero',
    },
    {
      tokens: ['-2', '3', '*'],
      expected: -6,
      description: 'should handle negative numbers',
    },
    {
      tokens: ['5', '1', '2', '+', '4', '*', '+', '3', '-'],
      expected: 14, // 5 + ((1 + 2) * 4) - 3
      description: 'should handle a complex expression',
    },
  ])('$description', ({ tokens, expected }) => {
    const result = evalRPN(tokens)
    expect(result).toBe(expected)
  })
})
