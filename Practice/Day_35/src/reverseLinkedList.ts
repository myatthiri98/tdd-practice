// Linked List Node Definition
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

// Function to reverse the linked list (Iterative Approach)
export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let current: ListNode | null = head

  while (current !== null) {
    let nextNode: ListNode | null = current.next
    current.next = prev
    prev = current
    current = nextNode
  }

  return prev
}

// Utility function to create a linked list from an array
export function createLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) return null
  let head = new ListNode(values[0])
  let current = head
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i])
    current = current.next
  }
  return head
}

// Utility function to convert a linked list to an array (for testing)
export function linkedListToArray(head: ListNode | null): number[] {
  let result: number[] = []
  while (head !== null) {
    result.push(head.val)
    head = head.next
  }
  return result
}
