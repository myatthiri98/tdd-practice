import { describe, it, expect } from 'vitest'
import { twoSum } from '../src/twoSum'

describe('twoSum', () => {
  it.each([
    {
      numbers: [1, 2, 3, 4],
      target: 3,
      expected: [1, 2],
      description: 'simple case with positive numbers',
    },
    {
      numbers: [2, 3, 4],
      target: 6,
      expected: [1, 3],
      description: 'case with numbers at the edges',
    },
    {
      numbers: [-2, 0, 1, 3],
      target: 1,
      expected: [1, 4],
      description: 'case with negative numbers',
    },
    {
      numbers: [1, 2],
      target: 3,
      expected: [1, 2],
      description: 'minimum length array',
    },
  ])(
    '$description: numbers = $numbers, target = $target',
    ({ numbers, target, expected }) => {
      expect(twoSum(numbers, target)).toEqual(expected)
    },
  )
})
