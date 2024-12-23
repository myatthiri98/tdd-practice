import { Position, Keypad } from './types'

export function isValidPosition(pos: Position, keypad: Keypad): boolean {
  return (
    pos.y >= 0 &&
    pos.y < keypad.layout.length &&
    pos.x >= 0 &&
    pos.x < keypad.layout[pos.y].length &&
    keypad.layout[pos.y][pos.x] !== ''
  )
}

export function movePosition(pos: Position, direction: string): Position {
  switch (direction) {
    case '^':
      return { ...pos, y: pos.y - 1 }
    case 'v':
      return { ...pos, y: pos.y + 1 }
    case '<':
      return { ...pos, x: pos.x - 1 }
    case '>':
      return { ...pos, x: pos.x + 1 }
    default:
      return pos
  }
}

export function findShortestPath(
  start: Position,
  target: Position,
  keypad: Keypad,
): string[] {
  const visited = new Set<string>()
  const queue: { pos: Position; path: string[] }[] = [{ pos: start, path: [] }]

  while (queue.length > 0) {
    const { pos, path } = queue.shift()!
    const posKey = `${pos.x},${pos.y}`

    if (pos.x === target.x && pos.y === target.y) {
      return path
    }

    if (visited.has(posKey)) continue
    visited.add(posKey)

    for (const direction of ['^', 'v', '<', '>']) {
      const newPos = movePosition(pos, direction)
      if (isValidPosition(newPos, keypad)) {
        queue.push({
          pos: newPos,
          path: [...path, direction],
        })
      }
    }
  }

  return []
}
