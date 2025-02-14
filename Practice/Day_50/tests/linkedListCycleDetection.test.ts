import { describe, it, expect } from 'vitest'
import {
  ListNode,
  hasCycle,
  createLinkedList,
} from '../src/linkedListCycleDetection'

describe('Linked List Cycle Detection', () => {
  it('should return true if there is a cycle in the linked list', () => {
    const head = createLinkedList([1, 2, 3, 4], 1) // 1 -> 2 -> 3 -> 4 -> 2 (cycle)
    expect(hasCycle(head)).toBe(true)
  })

  it('should return false if there is no cycle in the linked list', () => {
    const head = createLinkedList([1, 2], -1) // 1 -> 2 -> null (no cycle)
    expect(hasCycle(head)).toBe(false)
  })

  it('should return false for a single node with no cycle', () => {
    const head = createLinkedList([1], -1) // 1 -> null (no cycle)
    expect(hasCycle(head)).toBe(false)
  })

  it('should return true for a single node with a cycle', () => {
    const head = createLinkedList([1], 0) // 1 -> 1 (cycle)
    expect(hasCycle(head)).toBe(false)
  })

  it('should handle an empty list', () => {
    const head = createLinkedList([], -1) // empty list
    expect(hasCycle(head)).toBe(false)
  })
})
