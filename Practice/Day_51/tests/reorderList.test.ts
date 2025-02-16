import { describe, it, expect } from 'vitest'
import {
  ListNode,
  arrayToList,
  listToArray,
  reorderList,
} from '../src/reorderList'

describe('reorderList', () => {
  it.each([
    // Input array, Expected output array
    [
      [2, 4, 6, 8],
      [2, 8, 4, 6],
    ],
    [
      [2, 4, 6, 8, 10],
      [2, 10, 4, 8, 6],
    ],
    [
      [0, 1, 2, 3, 4, 5, 6],
      [0, 6, 1, 5, 2, 4, 3],
    ],
    [
      [1, 2, 3],
      [1, 3, 2],
    ],
    [
      [1, 2],
      [1, 2],
    ], // Edge case with two elements
    [[1], [1]], // Edge case with single element
  ])('should reorder list for input %p', (input, expectedOutput) => {
    const head = arrayToList(input)
    const result = reorderList(head)
    expect(listToArray(result)).toEqual(expectedOutput)
  })
})
