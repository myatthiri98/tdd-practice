import { describe, it, expect } from 'vitest'
import {
  parseSchematic,
  parseInput,
  canFit,
  countValidCombinations,
} from '../src/lockAndKey'

describe('Lock and Key Solver', () => {
  const exampleInput = `#####
.####
.####
.####
.#.#.
.#...
.....

#####
##.##
.#.##
...##
...#.
...#.
.....

.....
#....
#....
#...#
#.#.#
#.###
#####

.....
.....
#.#..
###..
###.#
###.#
#####

.....
.....
.....
#....
#.#..
#.#.#
#####`

  describe('parseSchematic', () => {
    it('should parse a lock schematic correctly', () => {
      const lockSchematic = `#####
.####
.####
.####
.#.#.
.#...
.....`

      expect(parseSchematic(lockSchematic)).toEqual([0, 5, 3, 4, 3])
    })

    it('should parse a key schematic correctly', () => {
      const keySchematic = `.....
#....
#....
#...#
#.#.#
#.###
#####`

      expect(parseSchematic(keySchematic)).toEqual([5, 0, 2, 1, 3])
    })
  })

  describe('parseInput', () => {
    it('should separate locks and keys correctly', () => {
      const result = parseInput(exampleInput)

      expect(result.locks).toHaveLength(2)
      expect(result.keys).toHaveLength(3)

      expect(result.locks[0]).toEqual([0, 5, 3, 4, 3])
      expect(result.locks[1]).toEqual([1, 2, 0, 5, 3])

      expect(result.keys[0]).toEqual([5, 0, 2, 1, 3])
      expect(result.keys[1]).toEqual([4, 3, 4, 0, 2])
      expect(result.keys[2]).toEqual([3, 0, 2, 0, 1])
    })
  })

  describe('canFit', () => {
    it('should return true when lock and key fit together', () => {
      const lock = [0, 5, 3, 4, 3]
      const key = [3, 0, 2, 0, 1]

      expect(canFit(lock, key)).toBe(true)
    })

    it('should return false when lock and key overlap', () => {
      const lock = [0, 5, 3, 4, 3]
      const key = [5, 0, 2, 1, 3]

      expect(canFit(lock, key)).toBe(false)
    })
  })

  describe('countValidCombinations', () => {
    it('should count correct number of valid combinations for example input', () => {
      const { locks, keys } = parseInput(exampleInput)

      expect(countValidCombinations(locks, keys)).toBe(3)
    })
  })
})
