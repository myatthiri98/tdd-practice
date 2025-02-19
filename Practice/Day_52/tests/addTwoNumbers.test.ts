import { describe, it, expect } from 'vitest'
import { addTwoNumbers } from '../src/addTwoNumbers'
import { ListNode } from '../../Day_39/ListNode'

// Helper function to convert array to linked list
function arrayToLinkedList(arr: number[]): ListNode | null {
  let head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return head
}

// Helper function to convert linked list to array
function linkedListToArray(node: ListNode | null): number[] {
  const result: number[] = []
  while (node !== null) {
    result.push(node.val)
    node = node.next
  }
  return result
}

describe('addTwoNumbers', () => {
  it.each([
    { l1: [1, 2, 3], l2: [4, 5, 6], expected: [5, 7, 9] },
    { l1: [9], l2: [9], expected: [8, 1] },
    { l1: [0], l2: [0], expected: [0] },
    { l1: [9, 9, 9], l2: [1], expected: [0, 0, 0, 1] }, // 999 + 1 = 1000
  ])('should return the sum of %p and %p as %p', ({ l1, l2, expected }) => {
    const l1LinkedList = arrayToLinkedList(l1)
    const l2LinkedList = arrayToLinkedList(l2)
    const result = addTwoNumbers(l1LinkedList, l2LinkedList)
    expect(linkedListToArray(result)).toEqual(expected)
  })
})
