import { DIRECTIONAL_KEYPAD, NUMERIC_KEYPAD } from './constants'
import { getDirectionsToTarget, movePosition } from './utils'

export function generateNumericSequence(code: string): string {
  let sequence = ''
  let currentPos = NUMERIC_KEYPAD.startPosition

  for (const digit of code) {
    const path = getDirectionsToTarget(currentPos, digit, NUMERIC_KEYPAD.layout)
    sequence += path.join('') + 'A'
    if (path.length > 0) {
      currentPos = movePosition(currentPos, path[path.length - 1])
    }
  }

  return sequence
}

export function generateRobotSequence(sequence: string): string {
  let robotSequence = ''
  let currentPos = DIRECTIONAL_KEYPAD.startPosition

  for (const char of sequence) {
    if (char === 'A') {
      robotSequence += 'A'
      continue
    }

    const path = getDirectionsToTarget(
      currentPos,
      char,
      DIRECTIONAL_KEYPAD.layout,
    )
    robotSequence += path.join('') + 'A'
    if (path.length > 0) {
      currentPos = movePosition(currentPos, path[path.length - 1])
    }
  }

  return robotSequence
}

export function solveCode(code: string): string {
  // First get the sequence for typing the code on numeric keypad
  const numericSequence = generateNumericSequence(code)

  // Second robot sequence to control first robot
  const secondRobotSequence = generateRobotSequence(numericSequence)

  // Your sequence to control second robot
  const finalSequence = generateRobotSequence(secondRobotSequence)

  return finalSequence
}

export function calculateComplexity(code: string, sequence: string): number {
  // Remove leading zeros and 'A' from the code to get numeric part
  const numericPart = parseInt(code.replace(/^0+/, '').replace('A', ''))
  return sequence.length * numericPart
}

export function solvePuzzle(codes: string[]): number {
  let totalComplexity = 0

  for (const code of codes) {
    const sequence = solveCode(code)
    const complexity = calculateComplexity(code, sequence)
    totalComplexity += complexity
  }

  return totalComplexity
}
