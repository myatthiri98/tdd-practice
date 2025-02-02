import { describe, expect, it } from 'vitest'
import { arrayToLinkedList, linkedListToArray } from '../ListNode'
import { reorderList } from '../src/reorderList'

describe('reorderList', () => {
  it.each([
    [
      [2, 4, 6, 8],
      [2, 8, 4, 6],
    ],
    [
      [2, 4, 6, 8, 10],
      [2, 10, 4, 8, 6],
    ],
    [
      [1, 2, 3, 4, 5, 6],
      [1, 6, 2, 5, 3, 4],
    ],
    [
      [1, 2, 3, 4, 5],
      [1, 5, 2, 4, 3],
    ],
    [[1], [1]], // Single node case
    [[], []], // Empty list case
  ])('should reorder %j to %j', (input, expected) => {
    let head = arrayToLinkedList(input)
    reorderList(head)
    expect(linkedListToArray(head)).toEqual(expected)
  })
})
