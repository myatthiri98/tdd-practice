import { describe, it, expect } from 'vitest'
import { sumOfValidMultiplications } from '../src/mull'

describe('sumOfValidMultiplications', () => {
  it.each([
    {
      input: 'mul(2,3) mul(4,5)',
      expectedSum: 26,
      description: 'basic multiplication case',
    },
    {
      input: 'mul(1,1) mul(2,2) mul(3,3)',
      expectedSum: 14,
      description: 'multiple valid multiplications',
    },
    {
      input: 'mul(100,200)',
      expectedSum: 20000,
      description: 'large numbers multiplication',
    },
    {
      input: 'mul(10,20) mul(30,40) mul(50,60)',
      expectedSum: 4400,
      description: 'chain of multiplications',
    },
    { input: '', expectedSum: 0, description: 'empty input case' },
    {
      input: 'mul(999,999)',
      expectedSum: 998001,
      description: 'maximum single multiplication',
    },
    {
      input: 'mul(0,5) mul(3,0)',
      expectedSum: 0,
      description: 'multiplications with zero',
    },
  ])(
    'should calculate the correct sum for $description',
    ({ input, expectedSum }) => {
      const result = sumOfValidMultiplications(input)
      expect(result).toBe(expectedSum)
    },
  )
})
