import { describe, expect, it } from 'vitest'
import { diameterOfBinaryTree } from '../src/diameterOfBinaryTree'
import { TreeNode } from '../src/TreeNode'

describe('diameterOfBinaryTree', () => {
  it.each([
    [
      'Example 1',
      new TreeNode(
        1,
        null,
        new TreeNode(2, new TreeNode(3, new TreeNode(5)), new TreeNode(4)),
      ),
      3,
    ],
    ['Example 2', new TreeNode(1, new TreeNode(2), new TreeNode(3)), 2],
    ['Single node', new TreeNode(1), 0],
    ['Left skewed tree', new TreeNode(1, new TreeNode(2, new TreeNode(3))), 2],
    [
      'Right skewed tree',
      new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
      2,
    ],
  ])('should return the correct diameter for %s', (_, root, expected) => {
    expect(diameterOfBinaryTree(root)).toBe(expected)
  })
})
