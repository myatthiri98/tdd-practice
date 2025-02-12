import { describe, expect, it } from 'vitest'
import { ListNode, reverseList } from '../src/reverseList'

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
  let head: ListNode | null = null
  let current: ListNode | null = null
  arr.forEach((val) => {
    const newNode: ListNode = { val, next: null }
    if (!head) {
      head = newNode
    } else {
      current!.next = newNode
    }
    current = newNode
  })
  return head
}

// Helper function to convert a linked list to an array
function toArray(head: ListNode | null): number[] {
  const result: number[] = []
  let current = head
  while (current !== null) {
    result.push(current.val)
    current = current.next
  }
  return result
}

describe('reverseList', () => {
  it.each([
    [
      [0, 1, 2, 3],
      [3, 2, 1, 0],
    ], // regular case with multiple elements
    [[], []], // empty list case
    [[1], [1]], // single element
    [
      [-1, -2, -3],
      [-3, -2, -1],
    ], // negative numbers
  ])(
    'reverseList(%p) should return %p',
    (input: number[], expected: number[]) => {
      const head = createLinkedList(input) // Create the linked list from input
      const reversed = reverseList(head)
      const result = toArray(reversed) // Convert the reversed list back to an array
      expect(result).toEqual(expected)
    },
  )
})
