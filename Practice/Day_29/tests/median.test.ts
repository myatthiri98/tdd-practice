import { describe, it, expect } from 'vitest'
import { findMedianSortedArrays } from '../src/median'

describe('findMedianSortedArrays', () => {
  it.each([
    // Test cases
    { nums1: [1, 2], nums2: [3], expected: 2.0 },
    { nums1: [1, 3], nums2: [2, 4], expected: 2.5 },
    { nums1: [], nums2: [1], expected: 1.0 },
    { nums1: [1], nums2: [], expected: 1.0 },
    { nums1: [1, 2], nums2: [3, 4, 5], expected: 3.0 },
    { nums1: [0, 0], nums2: [0, 0], expected: 0.0 },
    { nums1: [1, 2], nums2: [-1, 3], expected: 1.5 },
    { nums1: [1, 2, 3, 4], nums2: [5, 6, 7, 8], expected: 4.5 },
  ])(
    'returns $expected for nums1=$nums1 and nums2=$nums2',
    ({ nums1, nums2, expected }) => {
      expect(findMedianSortedArrays(nums1, nums2)).toBe(expected)
    },
  )
})
