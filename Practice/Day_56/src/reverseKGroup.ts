// ListNode class
export class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

// Function to reverse nodes in k-group
export function reverseKGroup(
  head: ListNode | null,
  k: number,
): ListNode | null {
  if (!head || k <= 1) return head

  const dummy = new ListNode(0)
  dummy.next = head
  let groupPrev: ListNode = dummy // groupPrev will always be a ListNode, not null
  let groupEnd: ListNode | null = head

  while (groupEnd) {
    let count = 0

    // Move `groupEnd` to the end of the current group
    while (groupEnd && count < k) {
      groupEnd = groupEnd.next
      count++
    }

    // If there are k nodes to reverse
    if (count === k) {
      const groupStart = groupPrev.next! // Non-null assertion that groupStart is not null
      const groupNext = groupEnd
      let prev: ListNode | null = null
      let current: ListNode = groupStart // Ensure current is a ListNode, not null

      // Reverse the group
      while (current !== groupNext) {
        const temp = current.next
        current.next = prev
        prev = current
        current = temp!
      }

      // Connect the reversed group with the previous and next parts
      groupPrev.next = prev
      groupStart.next = groupNext

      // Move the `groupPrev` pointer for the next group
      groupPrev = groupStart
    }
  }

  return dummy.next
}
