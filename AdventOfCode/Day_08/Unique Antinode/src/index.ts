import {
  parseInput,
  findAntennas,
  calculateAntinodesPartTwo,
  countUniqueAntinodesPartTwo,
} from './resonantCollinearity'
import fs from 'fs'

const input = fs.readFileSync(
  'AdventOfCode/Day_08/Unique Antinode/input.txt',
  'utf-8',
)
const grid = parseInput(input)
const antennas = findAntennas(grid)
const antinodes = calculateAntinodesPartTwo(antennas)
const result = countUniqueAntinodesPartTwo(antinodes)

console.log(`Unique antinodes: ${result}`)
