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

export function kthSmallest(root: TreeNode | null, k: number): number {
  // Keep track of how many nodes we've visited
  let count = 0
  let result = 0

  function inOrder(node: TreeNode | null) {
    if (!node) return

    // Traverse left subtree
    inOrder(node.left)

    // Process current node
    count++
    if (count === k) {
      result = node.val
      return
    }

    // Traverse right subtree
    inOrder(node.right)
  }

  inOrder(root)
  return result
}
