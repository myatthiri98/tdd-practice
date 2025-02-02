export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

// Convert an array to a linked list
export const arrayToLinkedList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null
  let head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return head
}

// Convert a linked list to an array
export const linkedListToArray = (head: ListNode | null): number[] => {
  let result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}
