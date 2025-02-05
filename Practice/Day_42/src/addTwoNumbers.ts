export class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let dummyHead = new ListNode(0)
  let current = dummyHead
  let carry = 0

  while (l1 !== null || l2 !== null || carry > 0) {
    let sum = carry

    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }

    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next
  }

  return dummyHead.next
}
