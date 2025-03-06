export class Node {
  value: string
  next: Node | null

  constructor(value: string) {
    this.value = value
    this.next = null
  }
}
export function linkedListValues(head: Node | null): string[] {
  const values: string[] = []
  let current = head
  while (current !== null) {
    values.push(current.value)
    current = current.next
  }
  return values
}
