import { describe, it, expect } from 'vitest'
import { addTwoNumbers, ListNode } from '../src/addTwoNumbers'

// Helper function to create a linked list from an array
const arrayToList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null
  let head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return head
}

// Helper function to convert a linked list to an array for easy testing
const listToArray = (head: ListNode | null): number[] => {
  let result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

describe('addTwoNumbers', () => {
  it.each([
    { l1: [1, 2, 3], l2: [4, 5, 6], expected: [5, 7, 9] }, // 321 + 654 = 975
    { l1: [9], l2: [9], expected: [8, 1] }, // 9 + 9 = 18
    { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] }, // 342 + 465 = 807
    { l1: [0], l2: [0], expected: [0] }, // 0 + 0 = 0
    { l1: [9, 9], l2: [1], expected: [0, 0, 1] }, // 99 + 1 = 100
  ])(
    'should return $expected when adding $l1 and $l2',
    ({ l1, l2, expected }) => {
      const list1 = arrayToList(l1)
      const list2 = arrayToList(l2)
      const result = addTwoNumbers(list1, list2)
      expect(listToArray(result)).toEqual(expected)
    },
  )
})
