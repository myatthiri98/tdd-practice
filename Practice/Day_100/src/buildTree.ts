export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  if (!preorder.length || !inorder.length) return null

  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)

  const mid = inorder.indexOf(rootVal)

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}

export function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return []

  const result: (number | null)[] = []
  const queue: (TreeNode | null)[] = [root]

  while (queue.length > 0) {
    const node = queue.shift()
    if (node) {
      result.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      result.push(null)
    }
  }

  // Remove trailing nulls
  while (result[result.length - 1] === null) {
    result.pop()
  }

  return result
}
