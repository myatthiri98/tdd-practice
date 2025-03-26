import { TreeNode } from './TreeNode'

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0

  function depth(node: TreeNode | null): number {
    if (!node) return 0

    const leftDepth = depth(node.left)
    const rightDepth = depth(node.right)

    // Update the max diameter at each node
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth)

    // Return the height of the subtree
    return Math.max(leftDepth, rightDepth) + 1
  }

  depth(root)
  return maxDiameter
}
