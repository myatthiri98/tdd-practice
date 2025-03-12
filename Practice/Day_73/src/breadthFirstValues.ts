export class Node<T> {
  val: T
  left: Node<T> | null
  right: Node<T> | null

  constructor(val: T) {
    this.val = val
    this.left = null
    this.right = null
  }
}

export function breadthFirstValues<T>(root: Node<T> | null): T[] {
  if (!root) return []

  const queue: Node<T>[] = [root]
  const result: T[] = []

  while (queue.length > 0) {
    const current = queue.shift()! // Remove the front node
    result.push(current.val)

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return result
}
