import {
  parseInput,
  findAntennas,
  calculateAntinodes,
  countUniqueAntinodes,
} from './resonantCollinearity'
import fs from 'fs'

const input = fs.readFileSync(
  'AdventOfCode/Day_08/Unique Antinode/input.txt',
  'utf-8',
)
const grid = parseInput(input)
const antennas = findAntennas(grid)
const antinodes = calculateAntinodes(antennas)
const result = countUniqueAntinodes(antinodes)

console.log(`Unique antinodes: ${result}`)
