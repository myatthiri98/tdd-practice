import { describe, it, expect } from 'vitest'
import { fiveSort } from '../src/fiveSort' // Function to be implemented

describe('fiveSort', () => {
  it.each([
    // Basic cases
    [
      [12, 5, 1, 5, 12, 7],
      [12, 7, 1, 12, 5, 5],
    ],
    [
      [5, 2, 5, 6, 5, 1, 10, 2, 5, 5],
      [2, 2, 10, 6, 1, 5, 5, 5, 5, 5],
    ],
    [
      [5, 5, 5, 1, 1, 1, 4],
      [4, 1, 1, 1, 5, 5, 5],
    ],
    [
      [5, 5, 6, 5, 5, 5, 5],
      [6, 5, 5, 5, 5, 5, 5],
    ],
    [
      [5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5],
      [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5],
    ],

    // Edge case: Empty array
    [[], []],

    // Edge case: No fives
    [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ],

    // Edge case: All fives
    [
      [5, 5, 5],
      [5, 5, 5],
    ],

    // Edge case: Large input
    [
      [...new Array(20000).fill(5), ...new Array(20000).fill(4)],
      [...new Array(20000).fill(4), ...new Array(20000).fill(5)],
    ],
  ])('should sort fives to the end for %j', (input, expected) => {
    fiveSort(input)
    expect(input).toEqual(expected)
  })
})
