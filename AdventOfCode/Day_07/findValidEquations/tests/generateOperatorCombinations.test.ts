import { describe, expect, it } from 'vitest'
import { generateOperatorCombinations } from '../src/generateOperatorCombinations'

describe('generateOperatorCombinations', () => {
  it.each([
    {
      numbers: 2,
      expected: [['+'], ['*']],
    },
    {
      numbers: 3,
      expected: [
        ['+', '+'],
        ['+', '*'],
        ['*', '+'],
        ['*', '*'],
      ],
    },
  ])(
    'generates correct combinations for $numbers numbers',
    ({ numbers, expected }) => {
      expect(generateOperatorCombinations(numbers)).toEqual(expected)
    },
  )
})
