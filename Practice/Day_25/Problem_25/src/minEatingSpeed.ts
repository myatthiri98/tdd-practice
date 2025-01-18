export function minEatingSpeed(piles: number[], h: number): number {
  let left = 1
  let right = Math.max(...piles)

  // Helper function to determine if Koko can eat all bananas at a given speed within h hours
  const canEatAllBananas = (speed: number): boolean => {
    let totalHours = 0
    for (const pile of piles) {
      totalHours += Math.ceil(pile / speed)
    }
    return totalHours <= h
  }

  // Perform binary search to find the minimum speed
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (canEatAllBananas(mid)) {
      right = mid // Try a slower speed
    } else {
      left = mid + 1 // Increase the speed
    }
  }

  return left // The minimum speed at which Koko can eat all bananas within h hours
}
