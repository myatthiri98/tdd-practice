import { describe, it, expect } from 'vitest'
import { ListNode, getIntersectionNode } from '../src/linkedListIntersection'

describe('getIntersectionNode', () => {
  it('should return the intersection node if the lists intersect', () => {
    // Creating nodes
    const common = new ListNode(8, new ListNode(4, new ListNode(5)))

    // Creating two separate lists that merge at `common`
    const listA = new ListNode(4, new ListNode(1, common))
    const listB = new ListNode(5, new ListNode(6, new ListNode(1, common)))

    expect(getIntersectionNode(listA, listB)).toBe(common)
  })
})
