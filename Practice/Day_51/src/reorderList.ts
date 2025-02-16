// ListNode class definition
export class ListNode {
  val: number
  next: ListNode | null = null
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

// Helper function to create a linked list from an array
export const arrayToList = (arr: number[]): ListNode | null => {
  let head: ListNode | null = null
  let current: ListNode | null = null
  for (const num of arr) {
    const newNode = new ListNode(num)
    if (!head) {
      head = newNode
    } else {
      current!.next = newNode
    }
    current = newNode
  }
  return head
}

// Helper function to convert a linked list to an array
export const listToArray = (head: ListNode | null): number[] => {
  const arr: number[] = []
  let current = head
  while (current) {
    arr.push(current.val)
    current = current.next
  }
  return arr
}

// Reorder list function
export const reorderList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head

  // Step 1: Find the middle using slow and fast pointers
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next!
  }

  // Step 2: Reverse the second half of the list
  let prev: ListNode | null = null
  let curr = slow
  while (curr) {
    let nextNode = curr.next
    curr.next = prev
    prev = curr
    curr = nextNode!
  }

  // Step 3: Merge the two halves
  let first = head,
    second = prev
  while (second && second.next) {
    let temp1 = first.next
    let temp2 = second.next
    first.next = second
    second.next = temp1
    first = temp1!
    second = temp2!
  }

  return head
}
