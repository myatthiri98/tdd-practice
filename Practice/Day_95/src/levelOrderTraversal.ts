import { TreeNode } from './TreeNode'

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const result: number[][] = []
  const queue: TreeNode[] = [root]

  while (queue.length > 0) {
    const levelSize = queue.length
    const currentLevel: number[] = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()! // Get first node in the queue
      currentLevel.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    result.push(currentLevel)
  }

  return result
}
