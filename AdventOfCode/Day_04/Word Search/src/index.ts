import { readFileSync } from 'fs'
import { countXMASOccurrences } from './wordSearch'

function solve(): number {
  // Read input file
  const input = readFileSync(
    'AdventOfCode/Day_04/Word Search/input.txt',
    'utf-8',
  )

  // Split into grid rows
  const grid = input.trim().split('\n')

  // Count all XMAS occurrences
  return countXMASOccurrences(grid)
}

console.log('Number of XMAS occurrences:', solve())
