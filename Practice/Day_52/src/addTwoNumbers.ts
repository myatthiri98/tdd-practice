// ListNode definition
class ListNode {
  val: number
  next: ListNode | null = null
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

// Function to add two numbers represented by linked lists
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let dummyHead = new ListNode(0)
  let current = dummyHead
  let carry = 0

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry

    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }

    carry = Math.floor(sum / 10) // Get the carry for the next digit
    current.next = new ListNode(sum % 10) // Create the next node with the sum's last digit
    current = current.next
  }

  return dummyHead.next // Return the next node of the dummy head (real result list)
}
