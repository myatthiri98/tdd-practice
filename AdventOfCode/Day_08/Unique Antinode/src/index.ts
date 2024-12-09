import { readFileSync } from 'fs'

import { findUniqueAntinodes } from './solution'

function solve(inputPath: string): number {
  const input = readFileSync(inputPath, 'utf-8')
  return findUniqueAntinodes(input)
}

const result = solve('AdventOfCode/Day_08/Unique Antinode/input.txt')
console.log(`total unique antinodes : ${result}`)
