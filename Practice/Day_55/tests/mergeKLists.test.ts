import { describe, expect, it } from 'vitest'
import { mergeKLists } from '../src/mergeKLists'

// Define the ListNode class
export class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

describe('mergeKLists', () => {
  it.each([
    // Test cases in format: [input, expectedOutput]
    [
      // Test 1: Merging multiple sorted linked lists
      [
        new ListNode(1, new ListNode(2, new ListNode(4))),
        new ListNode(1, new ListNode(3, new ListNode(5))),
        new ListNode(3, new ListNode(6)),
      ],
      [1, 1, 2, 3, 3, 4, 5, 6],
    ],
    [
      // Test 2: Merging with an empty array of linked lists
      [],
      [],
    ],
    [
      // Test 3: Merging with one empty linked list
      [new ListNode()],
      [],
    ],
    [
      // Test 4: Merging with one linked list
      [new ListNode(1, new ListNode(2))],
      [1, 2],
    ],
    [
      // Test 5: Merging with duplicate elements
      [
        new ListNode(1, new ListNode(4, new ListNode(5))),
        new ListNode(1, new ListNode(2)),
        new ListNode(3, new ListNode(6)),
      ],
      [1, 1, 2, 3, 4, 5, 6],
    ],
  ])('should correctly merge lists %p', (input, expectedOutput) => {
    const result = mergeKLists(input)

    // Convert the result linked list to an array for easy comparison
    const resultArray: number[] = []
    let current = result
    while (current) {
      resultArray.push(current.val)
      current = current.next
    }

    expect(resultArray).toEqual(expectedOutput)
  })
})
