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
  const values: number[] = []

  function inOrder(node: TreeNode | null) {
    if (!node) return
    inOrder(node.left)
    values.push(node.val)
    inOrder(node.right)
  }

  inOrder(root)

  return values[k - 1]
}
