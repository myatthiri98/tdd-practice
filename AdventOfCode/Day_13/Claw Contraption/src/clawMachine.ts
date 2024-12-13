export function findMinimumTokens(
  buttonA: { x: number; y: number; cost: number },
  buttonB: { x: number; y: number; cost: number },
  prize: { x: number; y: number },
): number | null {
  const maxPresses = 100 // Assumption based on problem constraints

  let minTokens = Infinity

  // Iterate through all possible combinations of button presses
  for (let a = 0; a <= maxPresses; a++) {
    for (let b = 0; b <= maxPresses; b++) {
      // Calculate the position reached with 'a' presses of A and 'b' presses of B
      const totalX = a * buttonA.x + b * buttonB.x
      const totalY = a * buttonA.y + b * buttonB.y

      // Check if this combination reaches the prize location
      if (totalX === prize.x && totalY === prize.y) {
        // Calculate the token cost
        const cost = a * buttonA.cost + b * buttonB.cost
        // Update the minimum cost
        minTokens = Math.min(minTokens, cost)
      }
    }
  }

  // Return the minimum cost if a solution exists; otherwise, return null
  return minTokens === Infinity ? null : minTokens
}
