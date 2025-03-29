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

export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean {
  if (!root) return false // Base case: if root is null, no subtree can exist
  if (isSameTree(root, subRoot)) return true // If they are the same tree, return true

  // Recursively check left and right subtrees
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (!p || !q || p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
