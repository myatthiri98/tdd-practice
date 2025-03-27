import { describe, it, expect } from 'vitest'
import { TreeNode, isBalanced } from '../src/balancedTree'

describe('Balanced Binary Tree', () => {
  it.each([
    [new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4))), true], // Balanced
    [
      new TreeNode(
        1,
        new TreeNode(2),
        new TreeNode(3, new TreeNode(4, new TreeNode(5))),
      ),
      false,
    ], // Unbalanced
    [null, true], // Empty tree is balanced
    [new TreeNode(1), true], // Single node is balanced
    [new TreeNode(1, new TreeNode(2, new TreeNode(3))), false], // Left-heavy unbalanced tree
  ])('returns %s for the given tree', (root, expected) => {
    expect(isBalanced(root)).toBe(expected)
  })
})
