import { Position, Keypad } from './types'

export function isValidPosition(pos: Position, keypad: string[][]): boolean {
  if (
    pos.row < 0 ||
    pos.row >= keypad.length ||
    pos.col < 0 ||
    pos.col >= keypad[pos.row].length
  ) {
    return false
  }
  return keypad[pos.row][pos.col].trim() !== ''
}
export function movePosition(pos: Position, direction: string): Position {
  const newPos = { ...pos }
  switch (direction) {
    case '^':
      newPos.row--
      break
    case 'v':
      newPos.row++
      break
    case '<':
      newPos.col--
      break
    case '>':
      newPos.col++
      break
  }
  return newPos
}

export function getDirectionsToTarget(
  start: Position,
  targetChar: string,
  keypad: string[][],
): string[] {
  const queue: [Position, string[]][] = [[start, []]]
  const visited = new Set<string>()

  function findTarget(): Position | null {
    for (let row = 0; row < keypad.length; row++) {
      for (let col = 0; col < keypad[row].length; col++) {
        if (keypad[row][col] === targetChar) {
          return { row, col }
        }
      }
    }
    return null
  }

  const target = findTarget()
  if (!target) return []

  while (queue.length > 0) {
    const [currentPos, path] = queue.shift()!
    const posKey = `${currentPos.row},${currentPos.col}`

    if (currentPos.row === target.row && currentPos.col === target.col) {
      return path
    }

    if (visited.has(posKey)) continue
    visited.add(posKey)

    // Try all possible directions
    const directions = ['^', 'v', '<', '>']
    for (const direction of directions) {
      const nextPos = movePosition(currentPos, direction)
      if (isValidPosition(nextPos, keypad)) {
        queue.push([nextPos, [...path, direction]])
      }
    }
  }

  return []
}
