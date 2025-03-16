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

export const maxPath = (root: Node | null): { sum: number; path: number[] } => {
  if (!root) return { sum: -Infinity, path: [] }

  let maxSum = -Infinity
  let bestPath: number[] = []

  // Stack for DFS traversal
  const stack: Array<{ node: Node; sum: number; path: number[] }> = [
    { node: root, sum: root.val, path: [root.val] },
  ]

  while (stack.length > 0) {
    const { node, sum, path } = stack.pop()!

    // If it's a leaf node, check if it's the max sum
    if (!node.left && !node.right) {
      if (sum > maxSum) {
        maxSum = sum
        bestPath = path
      }
    }

    // Push right child if exists
    if (node.right) {
      stack.push({
        node: node.right,
        sum: sum + node.right.val,
        path: [...path, node.right.val],
      })
    }

    // Push left child if exists
    if (node.left) {
      stack.push({
        node: node.left,
        sum: sum + node.left.val,
        path: [...path, node.left.val],
      })
    }
  }

  return { sum: maxSum, path: bestPath }
}
