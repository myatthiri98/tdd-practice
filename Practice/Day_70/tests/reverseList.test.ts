import { describe, it, expect } from 'vitest'
import { reverseList, Node } from '../src/reverseList'

describe('reverseList', () => {
  it.each([
    {
      name: 'Reverses a list with multiple nodes',
      input: ['a', 'b', 'c', 'd', 'e', 'f'],
      expected: ['f', 'e', 'd', 'c', 'b', 'a'],
    },
    {
      name: 'Reverses a list with two nodes',
      input: ['x', 'y'],
      expected: ['y', 'x'],
    },
    {
      name: 'Handles a single node list',
      input: ['p'],
      expected: ['p'],
    },
    {
      name: 'Handles an empty list',
      input: [],
      expected: [],
    },
  ])('$name', ({ input, expected }) => {
    // Helper function to create a linked list
    const createLinkedList = (values: string[]): Node | null => {
      if (values.length === 0) return null
      let head = new Node(values[0])
      let current = head
      for (let i = 1; i < values.length; i++) {
        current.next = new Node(values[i])
        current = current.next
      }
      return head
    }

    // Helper function to convert linked list to array
    const linkedListToArray = (head: Node | null): string[] => {
      let result: string[] = []
      let current = head
      while (current !== null) {
        result.push(current.value)
        current = current.next
      }
      return result
    }

    // Arrange: Create linked list
    const head = createLinkedList(input)

    // Act: Reverse the list
    const reversedHead = reverseList(head)

    // Assert: Check if the linked list matches the expected output
    expect(linkedListToArray(reversedHead)).toEqual(expected)
  })
})
