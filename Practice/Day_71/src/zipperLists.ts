// Define Node class
export class Node {
  value: string | number
  next: Node | null

  constructor(value: string | number) {
    this.value = value
    this.next = null
  }
}

// Zipper function
export const zipperLists = (
  head1: Node | null,
  head2: Node | null,
): Node | null => {
  if (!head1) return head2 // If first list is empty, return second
  if (!head2) return head1 // If second list is empty, return first

  let tail: Node = head1
  let current1: Node | null = head1.next
  let current2: Node | null = head2
  let count = 0

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }
    tail = tail.next
    count++
  }

  // Attach remaining nodes
  if (current1 !== null) tail.next = current1
  if (current2 !== null) tail.next = current2

  return head1
}
