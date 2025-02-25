// sumEvenNumbers.test.ts
import { describe, it, expect } from 'vitest'
import { sumEvenNumbers } from '../src/sumEvenNumbers'

describe('sumEvenNumbers', () => {
  it('should return 0 if there are no even numbers', () => {
    expect(sumEvenNumbers([1, 3, 5, 7])).toBe(0)
  })

  it('should return the correct sum for an array with even numbers', () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12) // 2 + 4 + 6 = 12
  })

  it('should return 0 for an empty array', () => {
    expect(sumEvenNumbers([])).toBe(0)
  })

  it('should return the correct sum if all numbers are even', () => {
    expect(sumEvenNumbers([2, 4, 6, 8])).toBe(20) // 2 + 4 + 6 + 8 = 20
  })

  it('should return 0 for an array with no even numbers and a mix of odd numbers', () => {
    expect(sumEvenNumbers([1, 3, 5, 7])).toBe(0)
  })
})
