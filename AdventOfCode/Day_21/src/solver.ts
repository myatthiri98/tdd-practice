import { NUM_PAD, KEY_PAD } from './constants'
import { movesBetweenPositions } from './utils'

const cache = new Map<string, number>()
const movesCache = new Map<string, string[]>()

function createCacheMoves(): void {
  // Cache moves for numeric keypad
  for (const [key1, loc1] of NUM_PAD.entries()) {
    for (const [key2, loc2] of NUM_PAD.entries()) {
      if (key1 !== key2) {
        movesCache.set(
          `${key1}-${key2}`,
          movesBetweenPositions(loc1, loc2, false),
        )
      }
    }
  }

  // Cache moves for directional keypad
  for (const [key1, loc1] of KEY_PAD.entries()) {
    for (const [key2, loc2] of KEY_PAD.entries()) {
      movesCache.set(`${key1}-${key2}`, movesBetweenPositions(loc1, loc2))
    }
  }
}

function shortestLength(
  code: string,
  depthLimit: number,
  curDepth: number,
): number {
  const cacheKey = `${code}-${depthLimit}-${curDepth}`
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!
  }

  let currentChar = curDepth === 0 ? 'A' : 'a'
  let totalLength = 0

  for (const targetChar of code) {
    if (curDepth === depthLimit) {
      totalLength += movesCache.get(`${currentChar}-${targetChar}`)![0].length
    } else {
      const moves = movesCache.get(`${currentChar}-${targetChar}`)!
      totalLength += Math.min(
        ...moves.map((m) => shortestLength(m, depthLimit, curDepth + 1)),
      )
    }
    currentChar = targetChar
  }

  cache.set(cacheKey, totalLength)
  return totalLength
}

export function solvePartOne(input: string): number {
  createCacheMoves()
  let total = 0

  for (const code of input.split('\n')) {
    const value = parseInt(code.slice(0, 3))
    total += shortestLength(code, 2, 0) * value
  }

  return total
}

export function solvePartTwo(input: string): number {
  createCacheMoves()
  let total = 0

  for (const code of input.split('\n')) {
    const value = parseInt(code.slice(0, 3))
    total += shortestLength(code, 25, 0) * value
  }

  return total
}
