export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

export function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow?.next! // Move 1 step
    fast = fast.next.next! // Move 2 steps

    if (slow === fast) {
      return true // Cycle detected
    }
  }

  return false // No cycle
}
