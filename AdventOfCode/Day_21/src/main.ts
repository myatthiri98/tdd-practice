import { readFileSync } from 'fs'
import path from 'path'
import { NUMERIC_KEYPAD } from './constants'
import { findShortestPath } from './utils'
import { Position, Keypad } from './types'

const DIRECTIONAL_KEYPAD: Keypad = {
  layout: [
    ['', '^', 'A'],
    ['<', 'v', '>'],
  ],
  startPosition: { x: 2, y: 0 }, // Starting at 'A'
}

function getDirectionalSequence(numericSequence: string): string {
  let sequence: string[] = []
  let currentPos: Position = DIRECTIONAL_KEYPAD.startPosition

  for (const action of numericSequence) {
    const targetPos = findTargetDirectionalPosition(action)
    const path = findShortestPath(currentPos, targetPos, DIRECTIONAL_KEYPAD)
    sequence.push(...path, 'A')
    currentPos = targetPos
  }

  return sequence.join('')
}

function findTargetDirectionalPosition(action: string): Position {
  const actionMap: Record<string, Position> = {
    '^': { x: 1, y: 0 },
    v: { x: 1, y: 1 },
    '<': { x: 0, y: 1 },
    '>': { x: 2, y: 1 },
    A: { x: 2, y: 0 },
  }
  return actionMap[action] || DIRECTIONAL_KEYPAD.startPosition
}

export function findShortestSequence(code: string): string {
  // First get sequence for numeric keypad
  const numericSequence = getNumericSequence(code)
  // Then get sequence for first robot's directional pad
  const firstRobotSequence = getDirectionalSequence(numericSequence)
  // Finally get sequence for second robot's directional pad
  return getDirectionalSequence(firstRobotSequence)
}

function getNumericSequence(code: string): string {
  const sequence: string[] = []
  let currentPos: Position = NUMERIC_KEYPAD.startPosition

  for (const digit of code) {
    const targetPos = findTargetPosition(digit)
    const path = findShortestPath(currentPos, targetPos, NUMERIC_KEYPAD)
    sequence.push(...path, 'A')
    currentPos = targetPos
  }

  return sequence.join('')
}

function findTargetPosition(digit: string): Position {
  for (let y = 0; y < NUMERIC_KEYPAD.layout.length; y++) {
    for (let x = 0; x < NUMERIC_KEYPAD.layout[y].length; x++) {
      if (NUMERIC_KEYPAD.layout[y][x] === digit) {
        return { x, y }
      }
    }
  }
  throw new Error(`Invalid digit: ${digit}`)
}

export function calculateComplexity(code: string): number {
  const sequence = findShortestSequence(code)
  const numericValue = parseInt(code.replace(/[^0-9]/g, ''))
  return sequence.length * numericValue
}

export function solve(): number {
  const input = readFileSync(path.join(__dirname, '../input.txt'), 'utf-8')
  const codes = input.trim().split('\n')

  const total = codes.reduce((sum, code) => {
    const complexity = calculateComplexity(code)
    console.log(`Code: ${code}, Complexity: ${complexity}`)
    return sum + complexity
  }, 0)

  console.log(`Total: ${total}`)
  return total
}

solve()
