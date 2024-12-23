import { findStartAndEnd } from './parser'
import { findShortestPath } from './pathfinder'
import { Grid, Point } from './types'

export function findCheats(
  grid: Grid,
  start: Point,
  end: Point,
): Map<number, number> {
  const normalTime = findShortestPath(grid, start, end)
  const cheats = new Map<number, number>()

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === '.' || grid[y][x] === 'S') {
        const startPoint = { x, y }
        const directions = [
          [
            [0, 1],
            [0, 2],
          ],
          [
            [0, -1],
            [0, -2],
          ],
          [
            [1, 0],
            [2, 0],
          ],
          [
            [-1, 0],
            [-2, 0],
          ],
          [
            [1, 1],
            [2, 2],
          ],
          [
            [-1, -1],
            [-2, -2],
          ],
          [
            [1, -1],
            [2, -2],
          ],
          [
            [-1, 1],
            [-2, 2],
          ],
        ]

        for (const [dir1, dir2] of directions) {
          const endPoint = {
            x: startPoint.x + dir2[0],
            y: startPoint.y + dir2[1],
          }

          if (isValidCheatEndPoint(grid, endPoint)) {
            const timeToStart = findShortestPath(grid, start, startPoint)
            const timeFromEnd = findShortestPath(grid, endPoint, end)

            if (timeToStart !== Infinity && timeFromEnd !== Infinity) {
              const totalTime = timeToStart + 2 + timeFromEnd // 2 for the cheat moves
              if (totalTime < normalTime) {
                const timeSaved = normalTime - totalTime
                cheats.set(timeSaved, (cheats.get(timeSaved) || 0) + 1)
              }
            }
          }
        }
      }
    }
  }

  return cheats
}

function isValidCheatEndPoint(grid: Grid, point: Point): boolean {
  if (
    point.y < 0 ||
    point.y >= grid.length ||
    point.x < 0 ||
    point.x >= grid[0].length
  ) {
    return false
  }
  return grid[point.y][point.x] === '.' || grid[point.y][point.x] === 'E'
}
