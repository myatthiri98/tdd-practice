export class Node {
  value: number
  left: Node | null
  right: Node | null

  constructor(
    value: number,
    left: Node | null = null,
    right: Node | null = null,
  ) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export function treeSum(root: Node | null): number {
  if (!root) return 0
  return root.value + treeSum(root.left) + treeSum(root.right)
}
