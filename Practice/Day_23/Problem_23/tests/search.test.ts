import { describe, expect, it } from 'vitest'
import search, { BinarySearchParams } from '../src/search'

describe('Binary Search', () => {
  it.each([
    {
      description: 'finds the target in the middle of the array',
      params: { target: 4, nums: [-1, 0, 2, 4, 6, 8] },
      expected: 3,
    },
    {
      description: 'finds the target at the start of the array',
      params: { target: -1, nums: [-1, 0, 2, 4, 6, 8] },
      expected: 0,
    },
    {
      description: 'returns -1 when target is greater than all elements',
      params: { target: 10, nums: [-1, 0, 2, 4, 6, 8] },
      expected: -1,
    },
    {
      description: 'handles a single-element array without the target',
      params: { target: 1, nums: [0] },
      expected: -1,
    },
    {
      description: 'finds the target in the middle of a sorted array',
      params: { target: 7, nums: [-100, 0, 5, 7, 10] },
      expected: 3,
    },
    {
      description: 'returns -1 for a target smaller than all array elements',
      params: { target: -200, nums: [-100, 0, 5, 7, 10] },
      expected: -1,
    },
  ])(
    '$description',
    ({
      params,
      expected,
    }: {
      description: string
      params: BinarySearchParams
      expected: number
    }) => {
      expect(search(params)).toBe(expected)
    },
  )
})
