import { Position, Direction, GuardState } from './types'

export function positionToString(pos: Position): string {
  return `${pos.x},${pos.y}`
}

export function findInitialState(map: string[]): GuardState {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const char = map[y][x]
      if ('^>v<'.includes(char)) {
        const direction = '^>v<'.indexOf(char)
        const position = { x, y }
        const visited = new Set([positionToString(position)])
        return { position, direction, visited }
      }
    }
  }
  throw new Error('No guard found on map')
}

export function isObstacle(map: string[], pos: Position): boolean {
  if (pos.y < 0 || pos.y >= map.length || pos.x < 0 || pos.x >= map[0].length) {
    return true
  }
  return map[pos.y][pos.x] === '#'
}

export function getNextPosition(pos: Position, dir: Direction): Position {
  switch (dir) {
    case Direction.Up:
      return { x: pos.x, y: pos.y - 1 }
    case Direction.Right:
      return { x: pos.x + 1, y: pos.y }
    case Direction.Down:
      return { x: pos.x, y: pos.y + 1 }
    case Direction.Left:
      return { x: pos.x - 1, y: pos.y }
  }
}

export function isOutOfBounds(map: string[], pos: Position): boolean {
  return pos.y < 0 || pos.y >= map.length || pos.x < 0 || pos.x >= map[0].length
}

export function moveGuard(map: string[], state: GuardState): GuardState {
  const nextPos = getNextPosition(state.position, state.direction)

  // Check if next position is out of bounds first
  if (isOutOfBounds(map, nextPos)) {
    return state // Return current state to indicate no more moves
  }

  if (isObstacle(map, nextPos)) {
    // Turn right
    return {
      ...state,
      direction: (state.direction + 1) % 4,
    }
  }

  // Move forward
  const newVisited = new Set(state.visited)
  newVisited.add(positionToString(nextPos))

  return {
    position: nextPos,
    direction: state.direction,
    visited: newVisited,
  }
}

export function countVisitedPositions(map: string[]): number {
  let state = findInitialState(map)
  let previousState = state

  while (true) {
    const newState = moveGuard(map, state)

    // If state hasn't changed, we're done
    if (newState === state) {
      break
    }

    previousState = state
    state = newState
  }

  return state.visited.size
}
