import { describe, it, expect } from 'vitest'
import { calculateTotalDistance } from '../calculateTotalDistance'

describe('calculateTotalDistance', () => {
  it.each([
    {
      left: [1, 2, 3],
      right: [2, 3, 4],
      expected: 3,
      description: 'sorted pairs'
    },
    {
      left: [3, 1, 2],
      right: [4, 2, 3],
      expected: 3,
      description: 'unsorted pairs'
    },
    {
      left: [3, 4, 2, 1, 3, 3],
      right: [4, 3, 5, 3, 9, 3],
      expected: 11,
      description: 'example from problem'
    },
    {
      left: [1, 1, 1],
      right: [1, 1, 1],
      expected: 0,
      description: 'identical numbers'
    },
    {
      left: [10, 20, 30],
      right: [20, 30, 40],
      expected: 30,
      description: 'larger numbers'
    }
  ])('should calculate correct distance for $description', ({ left, right, expected }) => {
    expect(calculateTotalDistance(left, right)).toBe(expected)
  })

  it('should throw error for unequal length arrays', () => {
    const left = [1, 2]
    const right = [1, 2, 3]
    expect(() => calculateTotalDistance(left, right)).toThrow('Lists must be of equal length')
  })
}) 