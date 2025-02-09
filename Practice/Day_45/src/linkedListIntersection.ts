export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  if (!headA || !headB) return null

  let a: ListNode | null = headA
  let b: ListNode | null = headB

  while (a !== b) {
    a = a ? a.next : headB
    b = b ? b.next : headA
  }

  return a
}
