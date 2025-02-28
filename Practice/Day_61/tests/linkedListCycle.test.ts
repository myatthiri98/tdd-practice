import { describe, expect, it } from 'vitest'
import { hasCycle, ListNode } from '../src/linkedListCycle' // Import function

// Utility function to create a linked list with a cycle
const createLinkedList = (
  values: number[],
  cycleIndex: number,
): ListNode | null => {
  if (values.length === 0) return null

  const nodes = values.map((val) => new ListNode(val))

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1] // Link nodes
  }

  if (cycleIndex !== -1) {
    nodes[nodes.length - 1].next = nodes[cycleIndex] // Create cycle
  }

  return nodes[0] // Return head
}

describe('hasCycle', () => {
  it.each([
    { values: [1, 2, 3, 4], cycleIndex: 1, expected: true }, // Cycle exists
    { values: [1, 2], cycleIndex: -1, expected: false }, // No cycle
    { values: [1], cycleIndex: -1, expected: false }, // Single node, no cycle
    { values: [1], cycleIndex: 0, expected: true }, // Single node pointing to itself
    { values: [1, 2, 3, 4, 5, 6], cycleIndex: 3, expected: true }, // Cycle at index 3
  ])('should detect cycle correctly', ({ values, cycleIndex, expected }) => {
    const head = createLinkedList(values, cycleIndex)
    expect(hasCycle(head)).toBe(expected)
  })
})
