import { describe, it, expect } from 'vitest'
import { findMinimumTokens } from '../src/clawMachine'
describe('findMinimumTokens', () => {
  it('should calculate the minimum tokens for a solvable claw machine', () => {
    const buttonA = { x: 94, y: 34, cost: 3 }
    const buttonB = { x: 22, y: 67, cost: 1 }
    const prize = { x: 8400, y: 5400 }
    const result = findMinimumTokens(buttonA, buttonB, prize)
    expect(result).toEqual(280) // Expected from problem description
  })

  it('should return null for an unsolvable claw machine', () => {
    const buttonA = { x: 26, y: 66, cost: 3 }
    const buttonB = { x: 67, y: 21, cost: 1 }
    const prize = { x: 12748, y: 12176 }
    const result = findMinimumTokens(buttonA, buttonB, prize)
    expect(result).toBeNull()
  })

  it('should calculate the minimum tokens for another solvable claw machine', () => {
    const buttonA = { x: 17, y: 86, cost: 3 }
    const buttonB = { x: 84, y: 37, cost: 1 }
    const prize = { x: 7870, y: 6450 }
    const result = findMinimumTokens(buttonA, buttonB, prize)
    expect(result).toEqual(200) // Expected from problem description
  })

  it('should return null when prize is unreachable due to bounds', () => {
    const buttonA = { x: 1, y: 1, cost: 3 }
    const buttonB = { x: 2, y: 2, cost: 1 }
    const prize = { x: 300, y: 400 } // Not reachable within bounds
    const result = findMinimumTokens(buttonA, buttonB, prize)
    expect(result).toBeNull()
  })
})
