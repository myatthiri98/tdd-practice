import { readFileSync } from 'fs'

export function readInput(filePath: string): string {
  return readFileSync(filePath, 'utf-8')
}

import { computeOutput, parseInput, simulateCircuit } from './simulateLogic'

const input = readInput('AdventOfCode/Day_24/input.txt')

const { wireValues, gateDefinitions } = parseInput(input)
const finalWireValues = simulateCircuit(wireValues, gateDefinitions)
const output = computeOutput(finalWireValues)

console.log(`Output: ${output}`)
