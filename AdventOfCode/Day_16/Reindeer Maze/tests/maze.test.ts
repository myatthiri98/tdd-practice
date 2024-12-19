import { describe, it, expect } from 'vitest'
import {
  parseGrid,
  getMoves,
  bfsSolveMaze,
  countOptimalPathTiles,
} from '../src/maze'

describe('Reindeer Maze', () => {
  const simpleInput = ['#####', '#S.E#', '#####']

  const exampleInput = [
    '###############',
    '#.......#....E#',
    '#.#.###.#.###.#',
    '#.....#.#...#.#',
    '#.###.#####.#.#',
    '#.#.#.......#.#',
    '#.#.#####.###.#',
    '#...........#.#',
    '###.#.#####.#.#',
    '#...#.....#.#.#',
    '#.#.#.###.#.#.#',
    '#.....#...#.#.#',
    '#.###.#.#.#.#.#',
    '#S..#.....#...#',
    '###############',
  ]

  describe('parseGrid', () => {
    it('should find start and end positions', () => {
      const result = parseGrid(simpleInput)
      console.log('parseGrid result:', result)
      expect(result.start).toEqual({ x: 1, y: 1, dir: 'E', cost: 0 })
      expect(result.end).toEqual({ x: 3, y: 1 })
    })
  })

  describe('getMoves', () => {
    it('should return valid moves', () => {
      const grid = simpleInput.map((line) => line.split(''))
      const moves = getMoves({ x: 1, y: 1, dir: 'E', cost: 0 }, grid)
      console.log('getMoves result:', moves)
      expect(moves.length).toBe(3) // Forward + 2 rotations
      expect(moves).toContainEqual({ x: 2, y: 1, dir: 'E', cost: 1 })
    })
  })

  describe('bfsSolveMaze', () => {
    it('should solve simple maze', () => {
      const result = bfsSolveMaze(simpleInput)
      console.log('bfsSolveMaze result for simple maze:', result)
      expect(result).toBe(2) // 2 steps forward
    })

    it('should solve example maze', () => {
      const result = bfsSolveMaze(exampleInput)
      console.log('bfsSolveMaze result for example maze:', result)
      expect(result).toBe(7036)
    })
  })

  describe('countOptimalPathTiles', () => {
    it('should count tiles in optimal paths for simple maze', () => {
      const result = countOptimalPathTiles(simpleInput)
      console.log('countOptimalPathTiles result for simple maze:', result)
      expect(result).toBe(3) // S, middle, and E tiles
    })

    it('should count tiles in optimal paths for example maze', () => {
      const result = countOptimalPathTiles(exampleInput)
      console.log('countOptimalPathTiles result for example maze:', result)
      expect(result).toBe(64)
    })
  })
})
