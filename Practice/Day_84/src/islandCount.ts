export const islandCount = (grid: string[][]): number => {
  const visited = new Set<string>()

  const explore = (r: number, c: number): boolean => {
    const rowInbounds = r >= 0 && r < grid.length
    const colInbounds = c >= 0 && c < grid[0].length
    if (!rowInbounds || !colInbounds) return false
    if (grid[r][c] === 'W') return false

    const pos = `${r},${c}`
    if (visited.has(pos)) return false
    visited.add(pos)

    explore(r - 1, c) // Up
    explore(r + 1, c) // Down
    explore(r, c - 1) // Left
    explore(r, c + 1) // Right

    return true
  }

  let count = 0
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(r, c)) count++
    }
  }

  return count
}
