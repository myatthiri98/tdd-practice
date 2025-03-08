export class Node {
  value: string
  next: Node | null

  constructor(value: string) {
    this.value = value
    this.next = null
  }
}

export function getNodeValue(head: Node | null, index: number): string | null {
  let current = head
  let count = 0

  while (current !== null) {
    if (count === index) return current.value
    current = current.next
    count++
  }

  return null
}
