// Greedy method ensures we track the farthest reachable index in O(n).

export const arrayStepper = (numbers: number[]): boolean => {
  let farthest = 0

  for (let i = 0; i < numbers.length; i++) {
    if (i > farthest) return false // If we reach an index we can't pass, return false
    farthest = Math.max(farthest, i + numbers[i]) // Update the farthest reachable index
    if (farthest >= numbers.length - 1) return true // If we can reach the last index, return true
  }

  return false
}

// Recursive Approach (Brute Force)
const arrayStepperRecursive = (nums: number[], i = 0) => {
  if (i >= nums.length - 1) return true // If we reach the last index, return true
  for (let step = 1; step <= nums[i]; step++) {
    if (arrayStepperRecursive(nums, i + step)) return true // Try all possible jumps
  }
  return false // No path found
}

// Memoization (Optimize Recursive Approach)
const arrayStepperMemoization = (
  nums: number[],
  i = 0,
  memo: Record<number, boolean> = {},
) => {
  if (i in memo) return memo[i] // Use cached result
  if (i >= nums.length - 1) return true // If reached end, return true

  for (let step = 1; step <= nums[i]; step++) {
    if (arrayStepperMemoization(nums, i + step, memo)) {
      memo[i] = true // Store result
      return true
    }
  }

  memo[i] = false
  return false
}
