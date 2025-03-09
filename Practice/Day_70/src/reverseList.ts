// Define Node class
export class Node {
  value: string
  next: Node | null

  constructor(value: string) {
    this.value = value
    this.next = null
  }
}

// Reverse Linked List function
export const reverseList = (head: Node | null): Node | null => {
  let prev: Node | null = null
  let current: Node | null = head

  while (current !== null) {
    let next: Node | null = current.next // Save next node
    current.next = prev // Reverse the link
    prev = current // Move prev forward
    current = next // Move current forward
  }

  return prev // New head of reversed list
}
