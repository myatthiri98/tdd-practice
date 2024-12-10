import { describe, it, expect } from 'vitest'
import {
  parseInput,
  findAntennas,
  calculateAntinodesPartTwo,
  countUniqueAntinodesPartTwo,
} from '../src/resonantCollinearity'

describe('Resonant Collinearity Part Two', () => {
  it('should parse input into a grid', () => {
    const input = `..........
...#......
..........
....a.....
..........
.....a....
..........
......#...
..........`
    const grid = parseInput(input)
    expect(grid).toHaveLength(9)
    expect(grid[3][4]).toBe('a')
    expect(grid[5][5]).toBe('a')
  })

  it('should find all antennas by frequency', () => {
    const grid = [
      '..........',
      '...#......',
      '..........',
      '....a.....',
      '..........',
      '.....a....',
      '..........',
      '......#...',
      '..........',
    ].map((line) => line.split(''))
    const antennas = findAntennas(grid)
    expect(antennas).toEqual({
      '#': [
        [1, 3],
        [7, 6],
      ],
      a: [
        [3, 4],
        [5, 5],
      ],
    })
  })

  it('should calculate antinodes for pairs of antennas', () => {
    const antennas: Record<string, [number, number][]> = {
      a: [
        [3, 4],
        [5, 5],
      ],
    }
    const antinodes = calculateAntinodesPartTwo(antennas)

    console.log('Calculated Antinodes:', antinodes)

    // Expect antinodes to include all points in line with the antennas
    expect(antinodes).toContainEqual([3, 4]) // Antenna position itself
    expect(antinodes).toContainEqual([5, 5]) // Antenna position itself
    // Additional checks for other points in line
  })

  it('should count unique antinodes', () => {
    const antinodes: [number, number][] = [
      [2, 3],
      [6, 6],
      [3, 4],
      [3, 4], // Duplicate to test uniqueness
    ]
    const uniqueCount = countUniqueAntinodesPartTwo(antinodes)
    expect(uniqueCount).toBe(3)
  })
})
