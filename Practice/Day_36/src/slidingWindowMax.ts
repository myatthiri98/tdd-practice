export function slidingWindowMax(nums: number[], k: number): number[] {
  const result: number[] = []

  for (let i = 0; i <= nums.length - k; i++) {
    result.push(Math.max(...nums.slice(i, i + k)))
  }

  return result
}
