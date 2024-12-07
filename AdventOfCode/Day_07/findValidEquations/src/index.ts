import { readFileSync } from 'fs'
import { findValidEquations } from './findValidEquations'

function solve(inputPath: string): number {
  const input = readFileSync(inputPath, 'utf-8')
  const map = input.trim().split('\n')
  return findValidEquations(map)
}

const result = solve('AdventOfCode/Day_07/findValidEquations/input.txt')
console.log(`total calibration result : ${result}`)
