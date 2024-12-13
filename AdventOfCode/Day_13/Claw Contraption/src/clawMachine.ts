export function findMinimumTokens(
  buttonA: { x: number; y: number; cost: number },
  buttonB: { x: number; y: number; cost: number },
  prize: { x: number; y: number },
): number | null {
  const maxPresses = 100

  let minCost = Infinity
  let found = false

  for (let a = 0; a <= maxPresses; a++) {
    for (let b = 0; b <= maxPresses; b++) {
      const currentX = a * buttonA.x + b * buttonB.x
      const currentY = a * buttonA.y + b * buttonB.y

      if (currentX === prize.x && currentY === prize.y) {
        const cost = a * buttonA.cost + b * buttonB.cost
        minCost = Math.min(minCost, cost)
        found = true
      }
    }
  }

  return found ? minCost : null
}
