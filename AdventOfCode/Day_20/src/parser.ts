import { Grid, Point } from './types'

export function parseInput(input: string): Grid {
  return input.split('\n').map((line) => line.split(''))
}

export function findStartAndEnd(grid: Grid): { start: Point; end: Point } {
  let start: Point = { x: 0, y: 0 }
  let end: Point = { x: 0, y: 0 }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 'S') start = { x, y }
      if (grid[y][x] === 'E') end = { x, y }
    }
  }

  return { start, end }
}
