export const minimumIsland = (grid: string[][]): number => {
  const visited = new Set<string>()
  let minSize = Infinity

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 'L' && !visited.has(`${row},${col}`)) {
        const size = exploreIsland(grid, row, col, visited)
        if (size > 0) {
          minSize = Math.min(minSize, size)
        }
      }
    }
  }

  return minSize
}

// DFS helper function
const exploreIsland = (
  grid: string[][],
  row: number,
  col: number,
  visited: Set<string>,
): number => {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === 'W' ||
    visited.has(`${row},${col}`)
  ) {
    return 0
  }

  visited.add(`${row},${col}`)
  let size = 1

  // Explore four directions
  size += exploreIsland(grid, row - 1, col, visited) // Up
  size += exploreIsland(grid, row + 1, col, visited) // Down
  size += exploreIsland(grid, row, col - 1, visited) // Left
  size += exploreIsland(grid, row, col + 1, visited) // Right

  return size
}
