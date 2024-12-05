import { readFileSync } from 'fs'
import { parseInput } from './parseInput'
import { solve } from './solve'

function printQueue(): number {
  const input = readFileSync(
    'AdventOfCode/Day_05/Print Queue/input.txt',
    'utf-8',
  )

  return solve(parseInput(input))
}

console.log('Print Queue Solution:', printQueue())
