import { ListNode } from '../ListNode'

export const reorderList = (head: ListNode | null): void => {
  if (!head || !head.next) return

  // Step 1: Find middle (slow-fast pointer)
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (fast && fast.next) {
    slow = slow!.next!
    fast = fast.next.next
  }

  // Step 2: Reverse second half
  let prev: ListNode | null = null
  let current: ListNode | null = slow!.next
  slow!.next = null // Cut the list in half

  while (current) {
    let nextTemp = current.next
    current.next = prev
    prev = current
    current = nextTemp
  }

  // Step 3: Merge two halves
  let first: ListNode | null = head
  let second: ListNode | null = prev
  while (second) {
    let temp1: ListNode | null = first!.next
    let temp2 = second.next

    first!.next = second
    second.next = temp1

    first = temp1
    second = temp2
  }
}
