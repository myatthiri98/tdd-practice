export class Node {
  val: number
  left: Node | null
  right: Node | null

  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

export const maxPathSum = (root: Node | null): number => {
  if (!root) return -Infinity // If there's no node, return negative infinity.

  if (!root.left && !root.right) return root.val // If it's a leaf node, return its value.

  // Recursively compute the max path sum for left and right subtrees.
  const leftMax = maxPathSum(root.left)
  const rightMax = maxPathSum(root.right)

  // Return the current node value + max(left subtree, right subtree)
  return root.val + Math.max(leftMax, rightMax)
}
