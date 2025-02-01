export class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false

  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast && fast.next) {
    slow = slow!.next // Move slow pointer one step
    fast = fast.next.next // Move fast pointer two steps

    if (slow === fast) {
      return true // Cycle detected
    }
  }

  return false // No cycle
}
