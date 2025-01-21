export function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    // Check if the left half is sorted
    if (nums[left] <= nums[mid]) {
      // Check if target is in the left half
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    // Right half is sorted
    else {
      // Check if target is in the right half
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}
