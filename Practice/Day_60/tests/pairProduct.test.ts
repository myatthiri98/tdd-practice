import { describe, it, expect } from 'vitest'
import { pairProduct } from '../src/pairProduct'

describe('pairProduct', () => {
  it.each([
    [[3, 2, 5, 4, 1], 8, [1, 3]],
    [[3, 2, 5, 4, 1], 10, [1, 2]],
    [[4, 7, 9, 2, 5, 1], 5, [4, 5]],
    [[4, 7, 9, 2, 5, 1], 35, [1, 4]],
    [[4, 6, 8, 2], 16, [2, 3]],
  ])(
    'should return indices of two numbers whose product is the target',
    (numbers, target, expected) => {
      expect(pairProduct(numbers, target)).toEqual(expected)
    },
  )
})
