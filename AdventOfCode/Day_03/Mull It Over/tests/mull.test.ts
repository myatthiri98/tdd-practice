import { describe, it, expect } from 'vitest';
import { sumOfValidMultiplications } from '../src/mull';

describe('sumOfValidMultiplications', () => {
  const testCases = [
    {
      input: 'mul(2,3) mul(4,5)',
      expected: 26,
      description: 'basic multiplication case',
    },
    {
      input: 'mul(1,1) mul(2,2) mul(3,3)',
      expected: 14,
      description: 'multiple valid multiplications',
    },
    {
      input: 'mul(100,200)',
      expected: 20000,
      description: 'large numbers multiplication',
    },
    {
      input: 'mul(10,20) mul(30,40) mul(50,60)',
      expected: 4400,
      description: 'chain of multiplications',
    },
    {
      input: '',
      expected: 0,
      description: 'empty input case',
    },
    {
      input: 'mul(999,999)',
      expected: 998001,
      description: 'maximum single multiplication',
    },
    {
      input: 'mul(0,5) mul(3,0)',
      expected: 0,
      description: 'multiplications with zero',
    },
  ];

  it.each(testCases)(
    'should calculate the sum of valid multiplications: $description',
    ({ input, expected }) => {
      const result = sumOfValidMultiplications(input);
      expect(result).toBe(expected);
    },
  );
});