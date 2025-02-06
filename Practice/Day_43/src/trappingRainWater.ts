export function trapRainWater(height: number[]): number {
  if (height.length === 0) return 0 // Edge case: empty array

  let left = 0,
    right = height.length - 1,
    maxLeft = 0,
    maxRight = 0,
    trappedWater = 0

  while (left < right) {
    const isLeftSmaller = height[left] < height[right]

    maxLeft = isLeftSmaller ? Math.max(maxLeft, height[left]) : maxLeft
    maxRight = isLeftSmaller ? maxRight : Math.max(maxRight, height[right])

    trappedWater += isLeftSmaller
      ? maxLeft - height[left++]
      : maxRight - height[right--]
  }

  return trappedWater
}
