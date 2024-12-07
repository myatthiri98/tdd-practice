import { describe, it, expect } from 'vitest'
import { findValidEquations } from '../src/findValidEquations'

describe('findValidEquations', () => {
  it.each([
    {
      input: [
        '190: 10 19',
        '3267: 81 40 27',
        '83: 17 5',
        '156: 15 6',
        '7290: 6 8 6 15',
        '161011: 16 10 13',
        '192: 17 8 14',
        '21037: 9 7 18 13',
        '292: 11 6 16 20',
      ],
      expected: 3749,
    },
    {
      input: ['190: 10 19'],
      expected: 190,
    },
    {
      input: ['83: 17 5'],
      expected: 0,
    },
  ])('finds valid equations in $input', ({ input, expected }) => {
    expect(findValidEquations(input)).toBe(expected)
  })
})
