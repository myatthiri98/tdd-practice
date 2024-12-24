import { describe, it, expect } from 'vitest'
import { MonkeyMarket } from '../src/monkeyMarket'

describe('MonkeyMarket', () => {
  const market = new MonkeyMarket()

  describe('generateNextSecret', () => {
    it('should generate correct next secret for initial value 123', () => {
      const expected = [
        15887950, 16495136, 527345, 704524, 1553684, 12683156, 11100544,
        12249484, 7753432, 5908254,
      ]

      let current = 123
      expected.forEach((expectedValue) => {
        current = market.generateNextSecret(current)
        expect(current).toBe(expectedValue)
      })
    })

    it('should handle zero as input', () => {
      const result = market.generateNextSecret(0)
      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThan(16777216)
    })
  })

  describe('generateNthSecret', () => {
    it('should generate correct 2000th secret for example inputs', () => {
      const testCases = [
        { input: 1, expected: 8685429 },
        { input: 10, expected: 4700978 },
        { input: 100, expected: 15273692 },
        { input: 2024, expected: 8667524 },
      ]

      testCases.forEach(({ input, expected }) => {
        const result = market.generateNthSecret(input, 2000)
        expect(result).toBe(expected)
      })
    })
  })

  describe('solve', () => {
    it('should solve the example case correctly', () => {
      const inputs = [1, 10, 100, 2024]
      const result = market.solve(inputs)
      expect(result).toBe(37327623)
    })
  })
})
