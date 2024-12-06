import { readFileSync } from 'fs'
import { countVisitedPositions } from './guard'

function solve(inputPath: string): number {
  const input = readFileSync(inputPath, 'utf-8')
  const map = input.trim().split('\n')
  return countVisitedPositions(map)
}

const result = solve('AdventOfCode/Day_06/guard-patrol/input.txt')
console.log(`Number of positions visited: ${result}`)
