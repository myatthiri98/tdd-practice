export function slidingWindowMax(nums: number[], k: number): number[] {
  const result: number[] = []
  const deque: number[] = [] // Stores indices of useful elements

  for (let i = 0; i < nums.length; i++) {
    // Remove elements that are out of this window
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift()
    }

    // Remove elements smaller than current num (useless elements)
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    // Add current index to deque
    deque.push(i)

    // Add maximum value to result (first valid max appears at i >= k-1)
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }

  return result
}
