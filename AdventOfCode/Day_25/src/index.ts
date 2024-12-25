import { parseInput, countValidCombinations } from './lockAndKey'

import { readFileSync } from 'fs'

export function readInput(filePath: string): string {
  return readFileSync(filePath, 'utf-8')
}

const input = readInput('AdventOfCode/Day_25/input.txt')

const { locks, keys } = parseInput(input)
const answer = countValidCombinations(locks, keys)
console.log(`Answer: ${answer}`)
