type Direction = 'N' | 'E' | 'S' | 'W'
type Position = { x: number; y: number; dir: Direction; cost: number }

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
      if (grid[y][x] === 'S') start = { x, y, dir: 'E', cost: 0 }
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

type QueueEntry = {
  position: Position
  path: string[]
}

export function findOptimalPaths(input: string[]): {
  minCost: number
  bestPathTiles: Set<string>
} {
  const { grid, start, end } = parseGrid(input)
  const queue: QueueEntry[] = [
    {
      position: start,
      path: [`${start.x},${start.y}`],
    },
  ]
  const visited = new Map<string, Map<string, number>>() // state -> (pathKey -> cost)
  const bestPathTiles = new Set<string>()
  let minCost = Infinity
  let optimalPaths: Set<string> = new Set()

  const getStateKey = (pos: Position) => `${pos.x},${pos.y},${pos.dir}`
  const getPathKey = (path: string[]) => path.join('|')

  // Initialize visited map for start state
  visited.set(
    getStateKey(start),
    new Map([[getPathKey([`${start.x},${start.y}`]), 0]]),
  )

  while (queue.length > 0) {
    // Sort by cost to process lowest cost paths first
    queue.sort((a, b) => a.position.cost - b.position.cost)
    const { position: current, path: currentPath } = queue.shift()!

    // Skip if this path can't possibly be optimal
    if (current.cost > minCost) continue

    // If we've reached the end
    if (current.x === end.x && current.y === end.y) {
      if (current.cost <= minCost) {
        if (current.cost < minCost) {
          // New minimum found, clear previous paths
          minCost = current.cost
          optimalPaths.clear()
        }
        // Record this path as optimal
        optimalPaths.add(getPathKey(currentPath))
        // Add all tiles from this path to the set
        currentPath.forEach((pos) => bestPathTiles.add(pos))
      }
      continue
    }

    // Try all possible moves
    for (const next of getMoves(current, grid)) {
      const nextState = getStateKey(next)
      const nextPos = `${next.x},${next.y}`
      const nextPath = [...currentPath]
      if (!nextPath.includes(nextPos)) {
        nextPath.push(nextPos)
      }
      const pathKey = getPathKey(nextPath)

      // Get or initialize the cost map for this state
      let stateCosts = visited.get(nextState)
      if (!stateCosts) {
        stateCosts = new Map()
        visited.set(nextState, stateCosts)
      }

      // Check if this path is worth exploring
      let shouldExplore = true
      for (const [existingPathKey, existingCost] of stateCosts) {
        if (existingCost < next.cost) {
          shouldExplore = false
          break
        }
      }

      if (shouldExplore) {
        // Record this path's cost
        stateCosts.set(pathKey, next.cost)

        // Add to queue for further exploration
        queue.push({
          position: next,
          path: nextPath,
        })
      }
    }
  }

  return { minCost, bestPathTiles }
}

export function bfsSolveMaze(input: string[]): number {
  return findOptimalPaths(input).minCost
}

export function countOptimalPathTiles(input: string[]): number {
  return findOptimalPaths(input).bestPathTiles.size
}
