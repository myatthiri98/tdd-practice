import { parseInput } from './parseInput'
import { calculateTotalDistance } from './calculateTotalDistance'

export function solve(input: string): number {
  const { left, right } = parseInput(input)
  return calculateTotalDistance(left, right)
} 