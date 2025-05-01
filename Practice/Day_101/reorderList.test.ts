// src/reorderList.test.ts
import { describe, it, expect } from 'vitest'
import { ListNode } from './ListNode'
import { reorderList } from './reorderList'

function buildList(values: number[]): ListNode | null {
  let dummy = new ListNode(0)
  let current = dummy
  for (let val of values) {
    current.next = new ListNode(val)
    current = current.next
  }
  return dummy.next
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

describe('reorderList', () => {
  it('should reorder [2, 4, 6, 8] to [2, 8, 4, 6]', () => {
    const input = buildList([2, 4, 6, 8])
    reorderList(input)
    expect(listToArray(input)).toEqual([2, 8, 4, 6])
  })

  it('should reorder [2, 4, 6, 8, 10] to [2, 10, 4, 8, 6]', () => {
    const input = buildList([2, 4, 6, 8, 10])
    reorderList(input)
    expect(listToArray(input)).toEqual([2, 10, 4, 8, 6])
  })

  it('should handle single node list', () => {
    const input = buildList([1])
    reorderList(input)
    expect(listToArray(input)).toEqual([1])
  })
})
