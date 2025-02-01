import { describe, it, expect } from 'vitest'
import { hasCycle, ListNode } from '../src/linkedListCycle'

describe('hasCycle', () => {
  it.each([
    {
      name: 'No cycle',
      list: [1, 2, 3, 4],
      index: -1,
      expected: false,
    },
    {
      name: 'Cycle at index 1',
      list: [1, 2, 3, 4],
      index: 1,
      expected: true,
    },
    {
      name: 'Single node with no cycle',
      list: [1],
      index: -1,
      expected: false,
    },
    {
      name: 'Single node with cycle',
      list: [1],
      index: 0,
      expected: true,
    },
    {
      name: 'Empty list',
      list: [],
      index: -1,
      expected: false,
    },
  ])('$name', ({ list, index, expected }) => {
    // Create the linked list
    const head = createLinkedList(list, index)
    // Test the function
    expect(hasCycle(head)).toBe(expected)
  })
})

// Helper function to create a linked list with or without a cycle
function createLinkedList(
  values: number[],
  cycleIndex: number,
): ListNode | null {
  if (values.length === 0) return null

  const nodes: ListNode[] = values.map((val) => new ListNode(val))

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  if (cycleIndex !== -1) {
    nodes[nodes.length - 1].next = nodes[cycleIndex]
  }

  return nodes[0]
}
