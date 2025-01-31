import { describe, it, expect } from 'vitest'
import { ListNode, mergeTwoLists } from '../src/mergeTwoLists'

// Helper function to convert an array to a linked list
const arrayToLinkedList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null
  let head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return head
}

// Helper function to convert a linked list back to an array
const linkedListToArray = (head: ListNode | null): number[] => {
  let result: number[] = []
  while (head !== null) {
    result.push(head.val)
    head = head.next
  }
  return result
}

describe('mergeTwoLists', () => {
  it.each([
    { list1: [1, 2, 4], list2: [1, 3, 5], expected: [1, 1, 2, 3, 4, 5] },
    { list1: [], list2: [1, 2], expected: [1, 2] },
    { list1: [2, 5, 7], list2: [1, 3, 6], expected: [1, 2, 3, 5, 6, 7] },
    { list1: [1, 1, 1], list2: [1, 1, 1], expected: [1, 1, 1, 1, 1, 1] },
    { list1: [], list2: [], expected: [] },
    { list1: [5], list2: [1, 2, 3, 4], expected: [1, 2, 3, 4, 5] },
  ])(
    'merging $list1 and $list2 should return $expected',
    ({ list1, list2, expected }) => {
      // Convert input arrays to linked lists
      const l1 = arrayToLinkedList(list1)
      const l2 = arrayToLinkedList(list2)

      // Run the function
      const mergedHead = mergeTwoLists(l1, l2)

      // Convert the result back to an array
      const resultArray = linkedListToArray(mergedHead)

      // Compare with the expected output
      expect(resultArray).toEqual(expected)
    },
  )
})
