import { describe, it, expect } from 'vitest'
import { NUMERIC_KEYPAD } from '../src/constants'
import { findShortestSequence, calculateComplexity } from '../src/main'
import { isValidPosition, movePosition } from '../src/utils'

describe('Keypad Solution', () => {
  it('validates positions correctly', () => {
    expect(isValidPosition({ x: 1, y: 0 }, NUMERIC_KEYPAD)).toBe(true)
    expect(isValidPosition({ x: 0, y: 3 }, NUMERIC_KEYPAD)).toBe(false)
    expect(isValidPosition({ x: -1, y: 0 }, NUMERIC_KEYPAD)).toBe(false)
  })

  it('moves position correctly', () => {
    const pos = { x: 1, y: 1 }
    expect(movePosition(pos, '^')).toEqual({ x: 1, y: 0 })
    expect(movePosition(pos, 'v')).toEqual({ x: 1, y: 2 })
    expect(movePosition(pos, '<')).toEqual({ x: 0, y: 1 })
    expect(movePosition(pos, '>')).toEqual({ x: 2, y: 1 })
  })

  it('finds shortest sequence for a code', () => {
    const sequence = findShortestSequence('671A')
    expect(sequence).toBeDefined()
    expect(sequence.length).toBeGreaterThan(0)
  })

  it('calculates complexity correctly for input codes', () => {
    const testCases = ['671A', '083A', '582A', '638A', '341A']
    testCases.forEach((code) => {
      const complexity = calculateComplexity(code)
      expect(typeof complexity).toBe('number')
      expect(complexity).toBeGreaterThan(0)
    })
  })
})
