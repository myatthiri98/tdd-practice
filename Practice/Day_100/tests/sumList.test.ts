// sumList.test.ts
import { describe, it, expect } from 'vitest'
import { sumList, Node } from '../src/sumList'

describe('sumList', () => {
  it.each([
    ['2 -> 8 -> 3 -> -1 -> 7', [2, 8, 3, -1, 7], 19],
    ['38 -> 4', [38, 4], 42],
    ['100', [100], 100],
    ['empty list', [], 0],
  ])('%s should return %i', (_, values, expected) => {
    const head = buildLinkedList(values)
    expect(sumList(head)).toBe(expected)
  })
})

// Helper function to build a linked list from an array
function buildLinkedList(values: number[]): Node | null {
  if (values.length === 0) return null
  const head = new Node(values[0])
  let current = head
  for (let i = 1; i < values.length; i++) {
    current.next = new Node(values[i])
    current = current.next
  }
  return head
}
