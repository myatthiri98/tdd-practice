import { describe, it, expect } from 'vitest'
import { ListNode, reverseKGroup } from '../src/reverseKGroup' // Adjust path if needed

// Utility function to convert array to linked list
function arrayToList(arr: number[]): ListNode | null {
  let dummy = new ListNode(0)
  let current = dummy
  for (let val of arr) {
    current.next = new ListNode(val)
    current = current.next
  }
  return dummy.next
}

// Utility function to convert linked list to array
function listToArray(head: ListNode | null): number[] {
  const result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

describe('reverseKGroup', () => {
  it('should reverse nodes in k-group for k = 3', () => {
    const head = arrayToList([1, 2, 3, 4, 5, 6])
    const k = 3
    const result = reverseKGroup(head, k)
    expect(listToArray(result)).toEqual([3, 2, 1, 6, 5, 4])
  })

  it('should reverse nodes in k-group for k = 2', () => {
    const head = arrayToList([1, 2, 3, 4, 5])
    const k = 2
    const result = reverseKGroup(head, k)
    expect(listToArray(result)).toEqual([2, 1, 4, 3, 5])
  })

  it('should not reverse if there are fewer than k nodes', () => {
    const head = arrayToList([1, 2, 3, 4, 5])
    const k = 6
    const result = reverseKGroup(head, k)
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle the case where the linked list is empty', () => {
    const head = arrayToList([])
    const k = 3
    const result = reverseKGroup(head, k)
    expect(listToArray(result)).toEqual([])
  })

  it('should handle the case where the linked list has one node', () => {
    const head = arrayToList([1])
    const k = 1
    const result = reverseKGroup(head, k)
    expect(listToArray(result)).toEqual([1])
  })
})
