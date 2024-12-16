import { run, parseInput, runSim, Location } from '../src/warehouseRobot'
import { describe, it, expect } from 'vitest'

describe('Day 15 Puzzle', () => {
  const sampleInput = ['@#O', '...', '', '>>>']

  const parsedInput = parseInput(sampleInput, false)

  it.each<
    [string, boolean | Location | string[], boolean | Location | string[]]
  >([
    ['parses walls correctly', parsedInput.walls.has('0,1'), true],
    ['parses initial location correctly', parsedInput.location, { y: 0, x: 0 }],
    ['parses boxes correctly', parsedInput.boxes.has('0,2'), true],
    ['parses moves correctly', parsedInput.moves, ['>', '>', '>']],
  ])('should %s', (_description, actual, expected) => {
    expect(actual).toEqual(expected)
  })

  it.each([
    [
      'part1 simulation',
      2,
      runSim(
        parsedInput.walls,
        parsedInput.boxes,
        parsedInput.location,
        parsedInput.moves,
        3,
        3,
      ),
    ],
    ['part1 result', 2, run(sampleInput).part1],
    ['part2 result', 4, run(sampleInput).part2],
  ])(
    'should return correct result for %s',
    (_description, expected, actual) => {
      expect(actual).toBe(expected)
    },
  )
})
