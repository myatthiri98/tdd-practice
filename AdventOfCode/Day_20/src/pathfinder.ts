import { Grid, Point } from './types'

export function findShortestPath(grid: Grid, start: Point, end: Point): number {
  const visited = new Set<string>()
  const queue: [Point, number][] = [[start, 0]]

  const isValid = (p: Point): boolean => {
    if (p.y < 0 || p.y >= grid.length || p.x < 0 || p.x >= grid[0].length)
      return false
    const cell = grid[p.y][p.x]
    return cell === '.' || cell === 'E' || cell === 'S'
  }

  while (queue.length > 0) {
    const [current, steps] = queue.shift()!
    const key = `${current.x},${current.y}`

    if (current.x === end.x && current.y === end.y) {
      return steps
    }

    if (visited.has(key)) continue
    visited.add(key)

    const directions = [
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: -1, y: 0 },
    ]

    for (const dir of directions) {
      const next = {
        x: current.x + dir.x,
        y: current.y + dir.y,
      }

      if (isValid(next)) {
        queue.push([next, steps + 1])
      }
    }
  }

  return Infinity
}
