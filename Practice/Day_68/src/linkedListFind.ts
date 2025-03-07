export class Node<T> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export function linkedListFind<T>(head: Node<T> | null, target: T): boolean {
  let current = head

  while (current !== null) {
    if (current.value === target) {
      return true
    }
    current = current.next
  }

  return false
}
