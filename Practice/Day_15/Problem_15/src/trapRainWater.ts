export function trapRainWater(height: number[]): number {
  if (height.length < 3) return 0 // Early return for trivial case

  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let waterTrapped = 0

  while (left <= right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])

    // Calculate water trapped based on the lower of the two max heights
    waterTrapped +=
      leftMax <= rightMax
        ? leftMax - height[left++]
        : rightMax - height[right--]
  }

  return waterTrapped
}
