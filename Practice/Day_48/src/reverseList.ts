export type ListNode = {
  val: number
  next: ListNode | null
}

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let current: ListNode | null = head

  while (current !== null) {
    let nextTemp = current.next
    current.next = prev
    prev = current
    current = nextTemp
  }

  return prev
}
