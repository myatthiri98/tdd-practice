import { describe, expect, it } from 'vitest'
import { productExceptSelf } from '../src/productExceptSelf'

describe('productExceptSelf', () => {
  it.each([
    {
      nums: [1, 2, 4, 6],
      expected: [48, 24, 12, 8],
      description: 'basic positive numbers',
    },
    {
      nums: [-1, 0, 1, 2, 3],
      expected: [0, -6, 0, 0, 0],
      description: 'array with zero and negative numbers',
    },
    {
      nums: [1, 2, 3, 4],
      expected: [24, 12, 8, 6],
      description: 'sequential numbers',
    },
    {
      nums: [10, 3],
      expected: [3, 10],
      description: 'two numbers',
    },
  ])('$description: nums=$nums → $expected', ({ nums, expected }) => {
    const result = productExceptSelf(nums)
    // Handle -0 vs 0 comparison
    const normalizedResult = result.map((n) => (n === 0 ? 0 : n))
    expect(normalizedResult).toEqual(expected)
  })
})
