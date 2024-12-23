import { findShortestPath } from './pathfinder'
import { Grid, Point } from './types'

export function findCheats(
  grid: Grid,
  start: Point,
  end: Point,
): Map<number, number> {
  const normalTime = findShortestPath(grid, start, end)
  const cheats = new Map<number, number>()
  const seen = new Set<string>()

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] !== '#') {
        const startPoint = { x, y }
        const timeToStart = findShortestPath(grid, start, startPoint)
        if (timeToStart === Infinity) continue

        // Try straight lines and diagonals
        const moves = [
          [0, 1],
          [0, 2], // Down
          [0, -1],
          [0, -2], // Up
          [1, 0],
          [2, 0], // Right
          [-1, 0],
          [-2, 0], // Left
        ]

        for (let i = 0; i < moves.length; i += 2) {
          const mid = {
            x: startPoint.x + moves[i][0],
            y: startPoint.y + moves[i][1],
          }

          const endPoint = {
            x: startPoint.x + moves[i + 1][0],
            y: startPoint.y + moves[i + 1][1],
          }

          if (!isValidEndPoint(grid, endPoint)) continue

          const key = `${startPoint.x},${startPoint.y}-${endPoint.x},${endPoint.y}`
          if (seen.has(key)) continue
          seen.add(key)

          const timeFromEnd = findShortestPath(grid, endPoint, end)
          if (timeFromEnd === Infinity) continue

          const totalTime = timeToStart + 2 + timeFromEnd
          if (totalTime < normalTime) {
            const timeSaved = normalTime - totalTime
            cheats.set(timeSaved, (cheats.get(timeSaved) || 0) + 1)
          }
        }
      }
    }
  }

  return cheats
}

function isValidEndPoint(grid: Grid, point: Point): boolean {
  return (
    point.y >= 0 &&
    point.y < grid.length &&
    point.x >= 0 &&
    point.x < grid[0].length &&
    grid[point.y][point.x] !== '#'
  )
}
