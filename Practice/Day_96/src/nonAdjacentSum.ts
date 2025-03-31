export function nonAdjacentSum(nums: number[]): number {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  let prev1 = Math.max(nums[0], nums[1]) // Best sum up to index 1
  let prev2 = nums[0] // Best sum up to index 0

  for (let i = 2; i < nums.length; i++) {
    let newMax = Math.max(prev1, nums[i] + prev2)
    prev2 = prev1
    prev1 = newMax
  }

  return prev1
}
