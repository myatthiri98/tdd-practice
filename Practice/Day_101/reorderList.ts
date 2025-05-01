// src/reorderList.ts
import { ListNode } from './ListNode'

export function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return

  // Step 1: Find middle
  let slow = head,
    fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next!
    fast = fast.next.next
  }

  // Step 2: Reverse second half
  let prev = null
  let current = slow.next
  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  slow.next = null // cut the first half

  // Step 3: Merge two halves
  let first = head
  let second = prev
  while (second) {
    let temp1 = first.next
    let temp2 = second.next
    first.next = second
    second.next = temp1
    first = temp1!
    second = temp2
  }
}
