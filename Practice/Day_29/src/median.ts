export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }

  const total = nums1.length + nums2.length
  const half = Math.floor(total / 2)

  let left = 0
  let right = nums1.length - 1

  while (true) {
    const i = Math.floor((left + right) / 2) // Partition for nums1
    const j = half - i - 2 // Partition for nums2

    const nums1Left = i >= 0 ? nums1[i] : -Infinity
    const nums1Right = i + 1 < nums1.length ? nums1[i + 1] : Infinity
    const nums2Left = j >= 0 ? nums2[j] : -Infinity
    const nums2Right = j + 1 < nums2.length ? nums2[j + 1] : Infinity

    // Check if partition is valid
    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      // If total length is odd, return the middle element
      if (total % 2 === 1) {
        return Math.min(nums1Right, nums2Right)
      }
      // If total length is even, return the average of the middle two elements
      return (
        (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2
      )
    }

    // Adjust binary search
    if (nums1Left > nums2Right) {
      right = i - 1
    } else {
      left = i + 1
    }
  }
}
