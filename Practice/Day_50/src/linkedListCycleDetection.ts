// Define ListNode structure
class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

// Cycle detection function
function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false

  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next!

    if (slow === fast) {
      return true // Cycle detected
    }
  }

  return false // No cycle
}

// Helper function to create a linked list with an optional cycle
function createLinkedList(
  values: number[],
  cycleIndex: number,
): ListNode | null {
  if (values.length === 0) return null

  let head = new ListNode(values[0])
  let current = head
  let cycleNode: ListNode | null = null

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i])
    current = current.next

    // Save the node where the cycle should start (if cycleIndex is provided)
    if (i === cycleIndex) {
      cycleNode = current
    }
  }

  // If cycleIndex is valid, create a cycle by pointing the last node to cycleNode
  if (cycleIndex !== -1 && cycleNode) {
    current.next = cycleNode
  }

  return head
}

export { ListNode, hasCycle, createLinkedList }
