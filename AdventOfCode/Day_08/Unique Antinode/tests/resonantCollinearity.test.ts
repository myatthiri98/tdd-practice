import { describe, it, expect } from 'vitest'
import {
  parseInput,
  findAntennas,
  calculateAntinodes,
  countUniqueAntinodes,
} from '../src/resonantCollinearity'

describe('Resonant Collinearity', () => {
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
    const antinodes = calculateAntinodes(antennas)

    console.log('Calculated Antinodes:', antinodes)

    expect(antinodes).toContainEqual([1, 3]) // Expected antinode above the first antenna
    expect(antinodes).toContainEqual([7, 6]) // Expected antinode below the second antenna
  })

  it('should count unique antinodes', () => {
    const antinodes: [number, number][] = [
      [2, 3],
      [6, 6],
      [3, 4],
    ]
    const uniqueCount = countUniqueAntinodes(antinodes)
    expect(uniqueCount).toBe(3)
  })
})
