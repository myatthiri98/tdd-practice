export type Cell = number | '.'
export type Map = Cell[][]

/**
 * Parse the map from a string into a usable structure.
 */
export function parseMap(input: string): Map {
  return input
    .split('\n')
    .map((row) =>
      row.split('').map((cell) => (cell === '.' ? cell : Number(cell))),
    )
}

/**
 * Calculate the trailhead score for a single trailhead.
 */
export function calculateTrailheadScore(
  map: Map,
  [x, y]: [number, number],
): number {
  const rows = map.length
  const cols = map[0].length
  const visited = new Set<string>()
  const trailheads = [[x, y]]
  const reachableNines = new Set<string>()

  while (trailheads.length > 0) {
    const [cx, cy] = trailheads.pop()!
    const cell = map[cx][cy]

    if (cell === '.' || visited.has(`${cx},${cy}`)) {
      continue
    }

    visited.add(`${cx},${cy}`)

    if (cell === 9) {
      reachableNines.add(`${cx},${cy}`)
      continue
    }

    const neighbors = getNeighbors(cx, cy, rows, cols)

    for (const [nx, ny] of neighbors) {
      if (map[nx][ny] === cell + 1) {
        trailheads.push([nx, ny])
      }
    }
  }

  return reachableNines.size
}

/**
 * Get valid neighbors for a given cell.
 */
function getNeighbors(
  x: number,
  y: number,
  rows: number,
  cols: number,
): [number, number][] {
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ]

  return directions
    .map(([dx, dy]) => [x + dx, y + dy] as [number, number])
    .filter(([nx, ny]) => nx >= 0 && nx < rows && ny >= 0 && ny < cols)
}

/**
 * Sum the scores for all trailheads.
 */
export function sumTrailheadScores(map: Map): number {
  let totalScore = 0

  map.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell === 0) {
        totalScore += calculateTrailheadScore(map, [x, y])
      }
    })
  })

  return totalScore
}
