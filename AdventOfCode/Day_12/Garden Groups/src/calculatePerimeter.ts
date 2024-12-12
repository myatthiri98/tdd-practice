export function calculatePerimeter(
  region: [number, number][],
  grid: string[][],
): number {
  const directions = [
    [0, 1], // Right
    [1, 0], // Down
    [0, -1], // Left
    [-1, 0], // Up
  ]

  const isInBounds = (row: number, col: number): boolean =>
    row >= 0 && row < grid.length && col >= 0 && col < grid[0].length

  // Convert region coordinates to Set for O(1) lookup
  const regionSet = new Set(region.map(([r, c]) => `${r},${c}`))

  let perimeter = 0

  // For each cell in the region
  for (const [row, col] of region) {
    const letter = grid[row][col]

    // Check all four directions
    for (const [dr, dc] of directions) {
      const newRow = row + dr
      const newCol = col + dc

      // Add to perimeter if:
      // 1. Out of bounds
      // 2. Adjacent cell is not in region
      // 3. Adjacent cell has different letter
      if (
        !isInBounds(newRow, newCol) ||
        !regionSet.has(`${newRow},${newCol}`) ||
        grid[newRow][newCol] !== letter
      ) {
        perimeter++
      }
    }
  }

  return perimeter
}
