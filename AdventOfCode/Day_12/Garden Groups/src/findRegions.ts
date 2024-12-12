type Cell = [string, [number, number]] // [letter, [row, col]]

export const findRegions = (grid: string[][]): Cell[][] => {
  const regions: Cell[][] = []
  const visited = new Set<string>()
  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ]

  const isInBounds = (row: number, col: number) =>
    row >= 0 && row < grid.length && col >= 0 && col < grid[0].length

  const dfs = (row: number, col: number, letter: string, region: Cell[]) => {
    const key = `${row},${col}`
    if (
      !isInBounds(row, col) ||
      visited.has(key) ||
      grid[row][col] !== letter
    ) {
      return
    }

    visited.add(key)
    region.push([letter, [row, col]])

    // Visit neighbors in order: right, down, left, up
    for (const [dr, dc] of directions) {
      const newRow = row + dr
      const newCol = col + dc
      dfs(newRow, newCol, letter, region)
    }
  }

  // Process grid row by row, column by column
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const key = `${row},${col}`
      if (!visited.has(key)) {
        const letter = grid[row][col]
        const region: Cell[] = []
        dfs(row, col, letter, region)
        if (region.length > 0) {
          // Sort region coordinates to ensure consistent order
          region.sort((a, b) => {
            const [rowA, colA] = a[1]
            const [rowB, colB] = b[1]
            if (rowA !== rowB) return rowA - rowB
            return colA - colB
          })
          regions.push(region)
        }
      }
    }
  }

  return regions
}
