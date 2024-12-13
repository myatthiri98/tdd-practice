import { describe, it, expect } from 'vitest'
import { findMinimumTokens } from '../src/clawMachine'

describe('findMinimumTokens', () => {
  it.each([
    {
      description:
        'should calculate the minimum tokens for a solvable claw machine',
      buttonA: { x: 94, y: 34, cost: 3 },
      buttonB: { x: 22, y: 67, cost: 1 },
      prize: { x: 8400, y: 5400 },
      expected: 280,
    },
    {
      description: 'should return null for an unsolvable claw machine',
      buttonA: { x: 26, y: 66, cost: 3 },
      buttonB: { x: 67, y: 21, cost: 1 },
      prize: { x: 12748, y: 12176 },
      expected: null,
    },
    {
      description:
        'should calculate the minimum tokens for another solvable claw machine',
      buttonA: { x: 17, y: 86, cost: 3 },
      buttonB: { x: 84, y: 37, cost: 1 },
      prize: { x: 7870, y: 6450 },
      expected: 200,
    },
    {
      description: 'should return null when prize is unreachable due to bounds',
      buttonA: { x: 1, y: 1, cost: 3 },
      buttonB: { x: 2, y: 2, cost: 1 },
      prize: { x: 300, y: 400 },
      expected: null,
    },
  ])('$description', ({ buttonA, buttonB, prize, expected }) => {
    const result = findMinimumTokens(buttonA, buttonB, prize)
    expect(result).toBe(expected)
  })
})
