export type BinarySearchParams = {
  nums: number[]
  target: number
}

export default function search({ nums, target }: BinarySearchParams): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < target) {
      left = mid + 1 // Search the right half
    } else {
      right = mid - 1 // Search the left half
    }
  }

  return -1 // Target not found
}
