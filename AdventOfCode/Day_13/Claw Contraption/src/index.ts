import path from 'path'
import fs from 'fs'
import { findMinimumTokens } from './clawMachine'
import { parseInput } from './parseInput'

// Read the input file
const inputFile = path.resolve(__dirname, '../input.txt')
const input = fs.readFileSync(inputFile, 'utf-8')
const lines = input.split('\n').map((line) => line.trim())

// Parse input into claw machines
const machines = parseInput(lines)

// Calculate total minimum tokens needed
let totalTokens = 0

for (const machine of machines) {
  const tokens = findMinimumTokens(
    { ...machine.buttonA, cost: 3 },
    { ...machine.buttonB, cost: 1 },
    machine.prize,
  )

  if (tokens !== null) {
    totalTokens += tokens
  }
}

console.log(`Minimum tokens required:`, totalTokens)
