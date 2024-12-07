import { describe, expect, it } from 'vitest'
import { parseEquation } from '../src/parseEquation'

describe('parseEquation', () => {
  it.each([
    {
      input: '190: 10 19',
      expected: { testValue: 190, numbers: [10, 19] },
    },
    {
      input: '3267: 81 40 27',
      expected: { testValue: 3267, numbers: [81, 40, 27] },
    },
    {
      input: '7290: 6 8 6 15',
      expected: { testValue: 7290, numbers: [6, 8, 6, 15] },
    },
  ])('parses "$input" correctly', ({ input, expected }) => {
    expect(parseEquation(input)).toEqual(expected)
  })
})
