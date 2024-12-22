import { describe, it, expect } from 'vitest'
import { findShortestPath } from '../src/shortestPath'

// Utility to generate random byte positions
function generateRandomBytePositions(
  gridSize: number,
  count: number,
): [number, number][] {
  const positions = new Set<string>()
  while (positions.size < count) {
    const x = Math.floor(Math.random() * gridSize)
    const y = Math.floor(Math.random() * gridSize)
    positions.add(`${x},${y}`)
  }
  return Array.from(positions).map((pos) => {
    const [x, y] = pos.split(',').map(Number)
    return [x, y] as [number, number]
  })
}

describe('findShortestPath', () => {
  it('should return 22 for the example grid and bytes', () => {
    const gridSize = 7
    const bytePositions: [number, number][] = [
      [5, 4],
      [4, 2],
      [4, 5],
      [3, 0],
      [2, 1],
      [6, 3],
      [2, 4],
      [1, 5],
      [0, 6],
      [3, 3],
      [2, 6],
      [5, 1],
    ]
    expect(findShortestPath(gridSize, bytePositions)).toBe(22)
  })

  it('should return -1 if there is no path to the exit', () => {
    const gridSize = 7
    const bytePositions: [number, number][] = [
      [1, 0],
      [0, 1],
    ]
    expect(findShortestPath(gridSize, bytePositions)).toBe(-1)
  })

  it('should return 12 for an empty grid (smallest path)', () => {
    const gridSize = 7
    const bytePositions: [number, number][] = []
    expect(findShortestPath(gridSize, bytePositions)).toBe(12)
  })

  it('should handle a 71x71 grid with 1024 bytes efficiently', () => {
    const gridSize = 71
    const bytePositions = generateRandomBytePositions(gridSize, 1024)

    const start = performance.now()
    const result = findShortestPath(gridSize, bytePositions)
    const end = performance.now()

    console.log('Execution time (ms):', end - start)
    expect(result).toBeGreaterThanOrEqual(-1) // Valid path or no path
    expect(end - start).toBeLessThan(2000) // Ensure execution is under 2 seconds
  })
})
