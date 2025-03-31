import { describe, expect, it } from 'vitest'
import { levelOrder } from '../src/levelOrderTraversal'
import { TreeNode } from '../src/TreeNode'

describe('Binary Tree Level Order Traversal', () => {
  it.each([
    // Test Case 1: Normal tree with multiple levels
    [
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, new TreeNode(6), new TreeNode(7)),
      ),
      [[1], [2, 3], [4, 5, 6, 7]],
    ],

    // Test Case 2: Single-node tree
    [new TreeNode(1), [[1]]],

    // Test Case 3: Empty tree (null)
    [null, []],

    // Test Case 4: Left-skewed tree (all nodes only have left children)
    [new TreeNode(1, new TreeNode(2, new TreeNode(3))), [[1], [2], [3]]],

    // Test Case 5: Right-skewed tree (all nodes only have right children)
    [
      new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
      [[1], [2], [3]],
    ],
  ])(
    'should return level order traversal for given tree',
    (input, expected) => {
      expect(levelOrder(input)).toEqual(expected)
    },
  )
})
