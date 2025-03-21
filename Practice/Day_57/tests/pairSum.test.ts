import { describe, it, expect } from 'vitest'
import { pairSum } from '../src/pairSum'

describe('pairSum function', () => {
  it.each([
    // Test cases: input, target sum, expected output
    [[3, 2, 5, 4, 1], 8, [0, 2]], // Test case 1: valid pair
    [[4, 7, 9, 2, 5, 1], 5, [0, 5]], // Test case 2: no valid pair
    [[9, 9], 18, [0, 1]], // Test case 4: only one element
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19, [8, 9]], // Test case 5: large array
  ])(
    'should return the correct pair for numbers %p and target sum %d',
    (numbers, targetSum, expected) => {
      expect(pairSum(numbers, targetSum)).toEqual(expected)
    },
  )
})
