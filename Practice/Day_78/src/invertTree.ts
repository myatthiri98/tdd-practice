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

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null

  // Swap left and right
  ;[root.left, root.right] = [root.right, root.left]

  // Recursively invert left and right subtrees
  invertTree(root.left)
  invertTree(root.right)

  return root
}
