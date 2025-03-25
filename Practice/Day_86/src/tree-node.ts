// tree-node.ts
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(
    val = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0 // Base case: Empty tree has depth 0

  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  return Math.max(leftDepth, rightDepth) + 1
}
