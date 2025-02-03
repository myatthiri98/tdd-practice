import { describe, it, expect } from 'vitest'
import { ListNode, removeNthFromEnd } from '../src/removeNthFromEnd'

describe('removeNthFromEnd', () => {
  it.each([
    {
      input: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),
      n: 2,
      expected: new ListNode(1, new ListNode(2, new ListNode(4))),
    },
    {
      input: new ListNode(5),
      n: 1,
      expected: null, // Removing the only node results in an empty list
    },
    {
      input: new ListNode(1, new ListNode(2)),
      n: 2,
      expected: new ListNode(2), // Removing the first node
    },
  ])('removes nth node from end', ({ input, n, expected }) => {
    const result = removeNthFromEnd(input, n)

    // Convert both lists to arrays for easier comparison
    const toArray = (head: ListNode | null): number[] => {
      let arr: number[] = []
      while (head) {
        arr.push(head.val)
        head = head.next
      }
      return arr
    }

    expect(toArray(result)).toEqual(toArray(expected))
  })
})
