export function countPaths(grid: string[][]): number {
  const rows = grid.length
  const cols = grid[0].length
  const memo: Record<string, number> = {} // Memoization cache

  function dfs(r: number, c: number): number {
    // Out of bounds or hit a wall
    if (r >= rows || c >= cols || grid[r][c] === 'X') return 0

    // Reached the bottom-right corner
    if (r === rows - 1 && c === cols - 1) return 1

    // Memoization check
    const key = `${r},${c}`
    if (key in memo) return memo[key]

    // Move right and down
    memo[key] = dfs(r + 1, c) + dfs(r, c + 1)
    return memo[key]
  }

  return dfs(0, 0)
}
