import { describe, it, expect } from 'vitest'
import { NUMERIC_KEYPAD } from '../src/constants'
import { solveCode, calculateComplexity, solvePuzzle } from '../src/main'
import { isValidPosition } from '../src/utils'

describe('Keypad Conundrum', () => {
  it('should validate positions correctly', () => {
    expect(isValidPosition({ row: 0, col: 0 }, NUMERIC_KEYPAD.layout)).toBe(
      true,
    )
    expect(isValidPosition({ row: 3, col: 0 }, NUMERIC_KEYPAD.layout)).toBe(
      false,
    )
    expect(isValidPosition({ row: -1, col: 0 }, NUMERIC_KEYPAD.layout)).toBe(
      false,
    )
  })

  it('should generate correct sequence for 029A', () => {
    const sequence = solveCode('029A')
    const complexity = calculateComplexity('029A', sequence)
    expect(complexity).toBe(68 * 29) // From example
  })

  it('should calculate complexity correctly', () => {
    expect(calculateComplexity('029A', 'A'.repeat(68))).toBe(68 * 29)
    expect(calculateComplexity('980A', 'A'.repeat(60))).toBe(60 * 980)
  })

  it('should solve example puzzle with correct complexity', () => {
    const exampleCodes = ['029A', '980A', '179A', '456A', '379A']
    const result = solvePuzzle(exampleCodes)
    expect(result).toBe(126384) // Sum from example
  })
})
