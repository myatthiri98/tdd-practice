import { describe, it, expect } from 'vitest'
import { mergeTwoLists, ListNode } from '../src/mergeTwoLists'

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

const linkedListToArray = (head: ListNode | null): number[] => {
  let arr: number[] = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

describe('mergeTwoLists', () => {
  it.each([
    {
      list1: [1, 2, 4],
      list2: [1, 3, 5],
      expected: [1, 1, 2, 3, 4, 5],
    },
    {
      list1: [],
      list2: [1, 2],
      expected: [1, 2],
    },
    {
      list1: [],
      list2: [],
      expected: [],
    },
    {
      list1: [2, 3, 7],
      list2: [1, 4, 6, 8],
      expected: [1, 2, 3, 4, 6, 7, 8],
    },
  ])('should merge two sorted linked lists', ({ list1, list2, expected }) => {
    const l1 = arrayToLinkedList(list1)
    const l2 = arrayToLinkedList(list2)
    const merged = mergeTwoLists(l1, l2)
    expect(linkedListToArray(merged)).toEqual(expected)
  })
})
