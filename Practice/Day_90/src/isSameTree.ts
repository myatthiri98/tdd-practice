export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0
    this.left = left ?? null
    this.right = right ?? null
  }
}

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true // Both trees are empty
  if (!p || !q) return false // One tree is empty, but the other isn't
  if (p.val !== q.val) return false // Values are different

  // Recursively check left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

export function isSameTreeIterative(
  p: TreeNode | null,
  q: TreeNode | null,
): boolean {
  const queue: (TreeNode | null)[] = [p, q]

  while (queue.length) {
    const node1 = queue.shift()
    const node2 = queue.shift()

    if (!node1 && !node2) continue
    if (!node1 || !node2 || node1.val !== node2.val) return false

    queue.push(node1.left, node2.left)
    queue.push(node1.right, node2.right)
  }
  return true
}
