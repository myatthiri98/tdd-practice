export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  // Validate input
  validateInputArrays(nums1, nums2)

  // Ensure nums1 is the smaller array for binary search optimization
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }

  const totalLength = nums1.length + nums2.length
  const halfLength = Math.floor(totalLength / 2)

  let left = 0
  let right = nums1.length

  while (left <= right) {
    const partitionX = Math.floor((left + right) / 2)
    const partitionY = halfLength - partitionX

    // Handle edge cases with boundary values
    const maxLeftX =
      partitionX > 0 ? nums1[partitionX - 1] : Number.NEGATIVE_INFINITY
    const minRightX =
      partitionX < nums1.length ? nums1[partitionX] : Number.POSITIVE_INFINITY

    const maxLeftY =
      partitionY > 0 ? nums2[partitionY - 1] : Number.NEGATIVE_INFINITY
    const minRightY =
      partitionY < nums2.length ? nums2[partitionY] : Number.POSITIVE_INFINITY

    // Check if we have found the correct partition
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // Odd total length
      if (totalLength % 2 === 1) {
        return Math.min(minRightX, minRightY)
      }

      // Even total length
      return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
    }

    // Adjust binary search range
    if (maxLeftX > minRightY) {
      right = partitionX - 1
    } else {
      left = partitionX + 1
    }
  }

  // This should never be reached with valid inputs
  throw new Error('Input arrays are not sorted')
}

// Validation module
function validateInputArrays(nums1: number[], nums2: number[]): void {
  // Check for valid input arrays
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
    throw new Error('Inputs must be arrays')
  }

  // Check length constraints
  if (nums1.length > 1000 || nums2.length > 1000) {
    throw new Error('Array length cannot exceed 1000')
  }

  // Check if arrays are sorted
  const isSorted = (arr: number[]) =>
    arr.every((val, idx) => idx === 0 || val >= arr[idx - 1])

  if (!isSorted(nums1) || !isSorted(nums2)) {
    throw new Error('Input arrays must be sorted in ascending order')
  }

  // Check value constraints
  const isInValidRange = (arr: number[]) =>
    arr.every((val) => val >= -1e6 && val <= 1e6)

  if (!isInValidRange(nums1) || !isInValidRange(nums2)) {
    throw new Error('Array values must be between -10^6 and 10^6')
  }
}
