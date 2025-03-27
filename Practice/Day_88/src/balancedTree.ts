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

export function isBalanced(root: TreeNode | null): boolean {
  function checkHeight(node: TreeNode | null): number {
    if (!node) return 0

    const leftHeight = checkHeight(node.left)
    const rightHeight = checkHeight(node.right)

    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1 // Not balanced
    }

    return 1 + Math.max(leftHeight, rightHeight)
  }

  return checkHeight(root) !== -1
}
