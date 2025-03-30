import { describe, expect, it } from 'vitest'
import { lowestCommonAncestor, TreeNode } from '../src/lowestCommonAncestor'

describe('Lowest Common Ancestor in BST', () => {
  // Helper function to build the tree
  function createTree(): TreeNode {
    const root = new TreeNode(5)
    root.left = new TreeNode(3)
    root.right = new TreeNode(8)
    root.left.left = new TreeNode(1)
    root.left.right = new TreeNode(4)
    root.left.right.left = new TreeNode(2)
    root.right.left = new TreeNode(7)
    root.right.right = new TreeNode(9)
    return root
  }

  const root = createTree()

  it.each([
    { p: 3, q: 8, expected: 5 },
    { p: 3, q: 4, expected: 3 },
    { p: 1, q: 4, expected: 3 },
    { p: 7, q: 9, expected: 8 },
  ])('should return $expected as LCA for $p and $q', ({ p, q, expected }) => {
    const nodeP = findNode(root, p)
    const nodeQ = findNode(root, q)
    expect(lowestCommonAncestor(root, nodeP, nodeQ)?.val).toBe(expected)
  })

  // Helper function to find a node in the tree
  function findNode(root: TreeNode | null, val: number): TreeNode {
    if (!root) throw new Error('Tree is empty')
    if (root.val === val) return root
    return val < root.val ? findNode(root.left, val) : findNode(root.right, val)
  }
})
