type Direction = 'N' | 'E' | 'S' | 'W'
type Position = { x: number; y: number; dir: Direction; cost: number }

// Parse the input grid and find start and end positions
export function parseGrid(input: string[]): {
  grid: string[][]
  start: Position
  end: { x: number; y: number }
} {
  const grid = input.map((line) => line.split(''))
  let start: Position | null = null
  let end: { x: number; y: number } | null = null

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 'S') start = { x, y, dir: 'E', cost: 0 } // Fixed initial cost to 0
      if (grid[y][x] === 'E') end = { x, y }
    }
  }

  if (!start || !end) throw new Error("Invalid grid: missing 'S' or 'E'")
  return { grid, start, end }
}

export function getMoves(position: Position, grid: string[][]): Position[] {
  const directions: Direction[] = ['N', 'E', 'S', 'W']
  const dirIndex = directions.indexOf(position.dir)
  const moves: Position[] = []

  // Forward move
  const forwardOffsets = { N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0] }
  const [dx, dy] = forwardOffsets[position.dir]
  const nx = position.x + dx
  const ny = position.y + dy

  if (
    ny >= 0 &&
    ny < grid.length &&
    nx >= 0 &&
    nx < grid[0].length &&
    grid[ny][nx] !== '#'
  ) {
    moves.push({
      x: nx,
      y: ny,
      dir: position.dir,
      cost: position.cost + 1,
    })
  }

  // Rotations (left and right)
  for (const turn of [-1, 1]) {
    const newDir = directions[(dirIndex + turn + 4) % 4]
    moves.push({
      x: position.x,
      y: position.y,
      dir: newDir,
      cost: position.cost + 1000,
    })
  }

  return moves
}

type PathInfo = {
  minCost: number
  bestPathTiles: Set<string>
}

type PathMap = Map<
  string,
  {
    cost: number
    path: Set<string>
  }
>

export function findOptimalPaths(input: string[]): PathInfo {
  const { grid, start, end } = parseGrid(input)
  const queue: Position[] = [start]
  const visited = new Map<string, number>() // position -> min cost
  const positionPaths = new Map<string, Set<string>>() // position -> set of positions in paths to here

  const encodePos = (x: number, y: number) => `${x},${y}`
  let minCost = Infinity

  // Initialize start position
  const startPos = encodePos(start.x, start.y)
  visited.set(startPos, 0)
  positionPaths.set(startPos, new Set([startPos]))

  while (queue.length > 0) {
    queue.sort((a, b) => a.cost - b.cost)
    const current = queue.shift()!

    if (current.cost > minCost) continue

    const currentPos = encodePos(current.x, current.y)
    const currentPath = positionPaths.get(currentPos)!

    if (current.x === end.x && current.y === end.y) {
      minCost = Math.min(minCost, current.cost)
      continue
    }

    for (const next of getMoves(current, grid)) {
      const nextPos = encodePos(next.x, next.y)
      const existingCost = visited.get(nextPos)

      if (existingCost === undefined || next.cost <= existingCost) {
        visited.set(nextPos, next.cost)

        // Create or update path to this position
        const nextPath = new Set(currentPath)
        nextPath.add(nextPos)
        positionPaths.set(nextPos, nextPath)

        queue.push(next)
      }
    }
  }

  // Collect all positions that are part of paths reaching the end with minimum cost
  const bestPathTiles = new Set<string>()
  const endPos = encodePos(end.x, end.y)
  if (positionPaths.has(endPos)) {
    positionPaths.get(endPos)!.forEach((pos) => bestPathTiles.add(pos))
  }

  return { minCost, bestPathTiles }
}

export function countOptimalPathTiles(input: string[]): number {
  const { bestPathTiles } = findOptimalPaths(input)
  return bestPathTiles.size
}

export function bfsSolveMaze(input: string[]): number {
  return findOptimalPaths(input).minCost
}
