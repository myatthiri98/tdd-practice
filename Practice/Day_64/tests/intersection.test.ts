import { describe, it, expect } from 'vitest'
import { intersection } from '../src/intersection'

describe('intersection', () => {
  it.each([
    { a: [4, 2, 1, 6], b: [3, 6, 9, 2, 10], expected: [2, 6] },
    { a: [2, 4, 6], b: [4, 2], expected: [2, 4] },
    { a: [4, 2, 1], b: [1, 2, 4, 6], expected: [1, 2, 4] },
    { a: [0, 1, 2], b: [10, 11], expected: [] },
    { a: [], b: [], expected: [] },
    { a: [1, 2, 3], b: [], expected: [] },
    { a: [], b: [1, 2, 3], expected: [] },
    {
      a: Array.from({ length: 50000 }, (_, i) => i),
      b: Array.from({ length: 50000 }, (_, i) => i),
      expected: Array.from({ length: 50000 }, (_, i) => i),
    },
  ])('should return $expected for a = $a and b = $b', ({ a, b, expected }) => {
    expect(intersection(a, b)).toEqual(expected)
  })
})
