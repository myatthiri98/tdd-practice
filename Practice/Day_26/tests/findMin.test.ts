import { describe, it, expect } from 'vitest'
import { findMin } from '../src/findMin'

describe('findMin', () => {
  it('should return the minimum element in a rotated sorted array', () => {
    expect(findMin([3, 4, 5, 6, 1, 2])).toBe(1)
    expect(findMin([4, 5, 0, 1, 2, 3])).toBe(0)
    expect(findMin([4, 5, 6, 7])).toBe(4)
    expect(findMin([1])).toBe(1)
    expect(findMin([2, 1])).toBe(1)
  })
})
