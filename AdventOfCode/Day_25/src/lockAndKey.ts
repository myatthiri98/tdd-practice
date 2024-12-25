import { Heights } from './types'

export function parseSchematic(schematic: string): Heights {
  const lines = schematic.trim().split('\n')
  const width = lines[0].length
  const height = lines.length
  const heights: number[] = []

  const isLock = lines[0].split('').every((c) => c === '#')

  for (let col = 0; col < width; col++) {
    let count = 0
    if (isLock) {
      // Count from top down for locks
      for (let row = 0; row < height; row++) {
        if (lines[row][col] === '#') {
          count++
        } else if (count > 0) {
          break
        }
      }
      heights.push(count - 1) // Subtract 1 because top row doesn't count
    } else {
      // Count from bottom up for keys
      for (let row = height - 1; row >= 0; row--) {
        if (lines[row][col] === '#') {
          count++
        } else if (count > 0) {
          break
        }
      }
      heights.push(count - 1) // Subtract 1 because bottom row doesn't count
    }
  }

  return heights
}

export function parseInput(input: string): {
  locks: Heights[]
  keys: Heights[]
} {
  const schematics = input.trim().split('\n\n')
  const locks: Heights[] = []
  const keys: Heights[] = []

  for (const schematic of schematics) {
    const firstLine = schematic.trim().split('\n')[0]
    const lastLine = schematic.trim().split('\n').slice(-1)[0]

    if (firstLine.split('').every((c) => c === '#')) {
      locks.push(parseSchematic(schematic))
    } else if (lastLine.split('').every((c) => c === '#')) {
      keys.push(parseSchematic(schematic))
    }
  }

  return { locks, keys }
}

export function canFit(lock: Heights, key: Heights): boolean {
  return lock.every((pinHeight, index) => pinHeight + key[index] <= 5)
}

export function countValidCombinations(
  locks: Heights[],
  keys: Heights[],
): number {
  let count = 0
  for (const lock of locks) {
    for (const key of keys) {
      if (canFit(lock, key)) {
        count++
      }
    }
  }
  return count
}
