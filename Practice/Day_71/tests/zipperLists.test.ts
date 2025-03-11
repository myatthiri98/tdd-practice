import { describe, it, expect } from 'vitest'
import { zipperLists, Node } from '../src/zipperLists'

describe('zipperLists', () => {
  it.each([
    {
      name: 'Zippers two lists of equal length',
      input1: ['a', 'b', 'c'],
      input2: ['x', 'y', 'z'],
      expected: ['a', 'x', 'b', 'y', 'c', 'z'],
    },
    {
      name: 'Zippers two lists where first is longer',
      input1: ['a', 'b', 'c', 'd', 'e', 'f'],
      input2: ['x', 'y', 'z'],
      expected: ['a', 'x', 'b', 'y', 'c', 'z', 'd', 'e', 'f'],
    },
    {
      name: 'Zippers two lists where second is longer',
      input1: ['s', 't'],
      input2: [1, 2, 3, 4],
      expected: ['s', 1, 't', 2, 3, 4],
    },
    {
      name: 'Zippers with a single-node list',
      input1: ['w'],
      input2: [1, 2, 3],
      expected: ['w', 1, 2, 3],
    },
    {
      name: 'Zippers when first list is a single node',
      input1: [1, 2, 3],
      input2: ['w'],
      expected: [1, 'w', 2, 3],
    },
  ])('$name', ({ input1, input2, expected }) => {
    // Helper function to create a linked list
    const createLinkedList = (values: (string | number)[]): Node | null => {
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
    const linkedListToArray = (head: Node | null): (string | number)[] => {
      let result: (string | number)[] = []
      let current = head
      while (current !== null) {
        result.push(current.value)
        current = current.next
      }
      return result
    }

    // Arrange: Create linked lists
    const head1 = createLinkedList(input1)
    const head2 = createLinkedList(input2)

    // Act: Zip the lists
    const zippedHead = zipperLists(head1, head2)

    // Assert: Check if the linked list matches the expected output
    expect(linkedListToArray(zippedHead)).toEqual(expected)
  })
})
