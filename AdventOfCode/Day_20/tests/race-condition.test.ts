// tests/race-condition.test.ts
import { describe, it, expect } from 'vitest'
import { solve } from '../src/main'
import { parseInput, findStartAndEnd } from '../src/parser'
import { findShortestPath } from '../src/pathfinder'
import { findCheats } from '../src/solver'

describe('Race Condition Solver', () => {
  const sampleInput = `
###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`.trim()

  describe('parseInput', () => {
    it('should parse input string into grid', () => {
      const grid = parseInput(sampleInput)
      expect(grid[0][0]).toBe('#')
      expect(grid[3][1]).toBe('S')
      expect(grid[7][5]).toBe('E')
    })

    it('should handle empty input', () => {
      expect(() => parseInput('')).not.toThrow()
    })
  })

  describe('findStartAndEnd', () => {
    it('should find start and end positions', () => {
      const grid = parseInput(sampleInput)
      const { start, end } = findStartAndEnd(grid)
      expect(start).toEqual({ x: 1, y: 3 })
      expect(end).toEqual({ x: 5, y: 7 })
    })
  })

  describe('findShortestPath', () => {
    it('should find shortest path without cheating', () => {
      const grid = parseInput(sampleInput)
      const { start, end } = findStartAndEnd(grid)
      const shortestPath = findShortestPath(grid, start, end)
      expect(shortestPath).toBe(84)
    })

    it('should return Infinity for impossible paths', () => {
      const impossibleGrid = [
        ['#', '#', '#'],
        ['#', 'S', '#'],
        ['#', '#', '#'],
      ]
      const result = findShortestPath(
        impossibleGrid,
        { x: 1, y: 1 },
        { x: 0, y: 0 },
      )
      expect(result).toBe(Infinity)
    })
  })

  describe('findCheats', () => {
    it('should find all possible cheats', () => {
      const grid = parseInput(sampleInput)
      const { start, end } = findStartAndEnd(grid)
      const cheats = findCheats(grid, start, end)

      // Test some known cheats from the example
      expect(cheats.get(2)).toBe(14) // 14 cheats save 2 picoseconds
      expect(cheats.get(4)).toBe(14) // 14 cheats save 4 picoseconds
      expect(cheats.get(6)).toBe(2) // 2 cheats save 6 picoseconds
    })
  })

  describe('solve', () => {
    it('should solve the example input', () => {
      const result = solve(sampleInput)
      expect(result).toBe(0) // No cheats save >= 100 picoseconds
    })

    it('should handle invalid input', () => {
      expect(solve('')).toBe(0)
      expect(solve('...')).toBe(0)
    })
  })
})
