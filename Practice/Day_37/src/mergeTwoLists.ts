export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  // Create a dummy node as a starting point
  let dummy = new ListNode(-1)
  let current = dummy

  // Traverse both lists and merge them in sorted order
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }

  // If there are remaining elements in list1, attach them
  if (list1 !== null) {
    current.next = list1
  }

  // If there are remaining elements in list2, attach them
  if (list2 !== null) {
    current.next = list2
  }

  // Return the merged list starting from dummy.next
  return dummy.next
}
