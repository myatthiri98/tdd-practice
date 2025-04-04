// sumList.ts
export class Node {
  val: number
  next: Node | null

  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

export function sumList(head: Node | null): number {
  let sum = 0
  let current = head

  while (current !== null) {
    sum += current.val
    current = current.next
  }

  return sum
}
