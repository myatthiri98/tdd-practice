import { describe, it, expect } from 'vitest'
import { linkedListFind, Node } from '../src/linkedListFind' // Assuming function is in linkedListFind.ts

describe('linkedListFind', () => {
  it.each([
    [['a', 'b', 'c', 'd'], 'c', true],
    [['a', 'b', 'c', 'd'], 'd', true],
    [['a', 'b', 'c', 'd'], 'q', false],
    [['jason', 'leneli'], 'jason', true],
    [[42], 42, true],
    [[42], 100, false],
  ])(
    'should return %s for linked list %j with target %s',
    (values, target, expected) => {
      // Create Linked List from values
      let head: Node<any> | null = null
      let current: Node<any> | null = null

      for (const value of values) {
        const newNode = new Node(value)
        if (!head) {
          head = newNode
          current = head
        } else {
          current!.next = newNode
          current = newNode
        }
      }

      expect(linkedListFind(head, target)).toBe(expected)
    },
  )
})
