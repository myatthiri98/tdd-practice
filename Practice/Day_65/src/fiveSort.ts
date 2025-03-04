export function fiveSort(nums: number[]): number[] {
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    if (nums[i] === 5) {
      while (i < j && nums[j] === 5) {
        j-- // Move j left if it is also 5
      }
      // Swap nums[i] and nums[j]
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      j-- // Move j left
    }
    i++ // Always move i forward
  }

  return nums
}
