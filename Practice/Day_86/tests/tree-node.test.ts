// tree-node.test.ts
import { describe, it, expect } from 'vitest'
import { TreeNode, maxDepth } from '../src/tree-node'

describe('maxDepth', () => {
  it.each([
    {
      tree: new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4))),
      expected: 3,
    },
    {
      tree: null,
      expected: 0,
    },
    {
      tree: new TreeNode(1), // Single-node tree
      expected: 1,
    },
    {
      tree: new TreeNode(1, new TreeNode(2, new TreeNode(3))), // Left-skewed tree
      expected: 3,
    },
    {
      tree: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))), // Right-skewed tree
      expected: 3,
    },
  ])('should return the correct depth', ({ tree, expected }) => {
    expect(maxDepth(tree)).toBe(expected)
  })
})
