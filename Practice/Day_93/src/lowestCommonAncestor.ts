export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode,
): TreeNode | null {
  if (!root) return null

  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left // Move left if both p and q are smaller
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right // Move right if both p and q are greater
    } else {
      return root // Found LCA
    }
  }
  return null
}
