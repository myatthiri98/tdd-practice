import { describe, expect, it } from 'vitest'
import { isValidEquation } from '../src/isValidEquation'
import { Operator } from '../src/types'

describe('isValidEquation', () => {
  it.each([
    {
      numbers: [10, 19],
      target: 190,
      operators: ['*' as Operator],
      expected: true,
      description: 'multiplication equation',
    },
    {
      numbers: [10, 19],
      target: 29,
      operators: ['+' as Operator],
      expected: true,
      description: 'addition equation',
    },
    {
      numbers: [10, 19],
      target: 190,
      operators: ['+' as Operator],
      expected: false,
      description: 'invalid equation',
    },
  ])(
    'validates $description correctly',
    ({ numbers, target, operators, expected }) => {
      expect(isValidEquation(numbers, target, operators)).toBe(expected)
    },
  )
})
