import { describe, it, expect } from 'vitest'
import { duplicate } from './duplicate'
describe('duplicate', () => {
  it('should return the first duplicate number', () => {
    expect(duplicate([1, 2, 3, 3, 4, 3])).toBe(3)
  })

  it('should return -1 when no duplicates exist', () => {
    expect(duplicate([1, 2, 3, 4, 5])).toBe(-1)
  })

  it('should work with other duplicate numbers', () => {
    expect(duplicate([1, 1, 2, 3])).toBe(1)
  })
})
