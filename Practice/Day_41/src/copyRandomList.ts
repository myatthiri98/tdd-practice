export class Node {
  val: number
  next: Node | null
  random: Node | null

  constructor(val = 0, next = null, random = null) {
    this.val = val
    this.next = next
    this.random = random
  }
}

export function copyRandomList(head: Node | null): Node | null {
  if (!head) return null

  const oldToNew = new Map<Node, Node>()

  // Step 1: Create new nodes without setting next and random
  let current: Node | null = head
  while (current) {
    oldToNew.set(current, new Node(current.val))
    current = current.next
  }

  // Step 2: Assign next and random pointers
  current = head
  while (current) {
    const copiedNode = oldToNew.get(current)!
    copiedNode.next = current.next ? oldToNew.get(current.next)! : null
    copiedNode.random = current.random ? oldToNew.get(current.random)! : null
    current = current.next
  }

  return oldToNew.get(head)!
}
