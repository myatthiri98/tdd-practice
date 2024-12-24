import { describe, it, expect } from 'vitest'
import { solvePartOne, solvePartTwo } from '../src/solver'
import { Location } from '../src/types'
import { movesBetweenPositions } from '../src/utils'

describe('Keypad Solution', () => {
  const testInput = '805A\n170A\n129A\n283A\n379A'

  describe('Location', () => {
    it('should calculate delta correctly', () => {
      const loc1 = new Location(0, 0)
      const loc2 = new Location(1, 1)
      expect(loc1.delta(loc2)).toEqual([1, 1])
    })

    it('should add locations correctly', () => {
      const loc1 = new Location(0, 0)
      const loc2 = new Location(1, 1)
      const result = loc1.add(loc2)
      expect(result.x).toBe(1)
      expect(result.y).toBe(1)
    })
  })

  describe('movesBetweenPositions', () => {
    it('should find valid moves between two positions', () => {
      const start = new Location(0, 0)
      const end = new Location(1, 1)
      const moves = movesBetweenPositions(start, end)
      expect(moves.length).toBeGreaterThan(0)
      expect(moves[0].endsWith('a')).toBe(true)
    })

    it('should return ["a"] for same position', () => {
      const pos = new Location(0, 0)
      expect(movesBetweenPositions(pos, pos)).toEqual(['a'])
    })
  })

  describe('solvePartOne', () => {
    it('should solve part one correctly', () => {
      const result = solvePartOne(testInput)
      expect(typeof result).toBe('number')
      expect(result).toBeGreaterThan(0)
    })
  })

  describe('solvePartTwo', () => {
    it('should solve part two correctly', () => {
      const result = solvePartTwo(testInput)
      expect(typeof result).toBe('number')
      expect(result).toBeGreaterThan(0)
    })
  })
})
