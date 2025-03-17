import { describe, expect, it } from 'vitest'
import { invertTree, TreeNode } from '../src/invertTree'

describe('invertTree', () => {
  it.each([
    [
      'Example 1',
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, new TreeNode(6), new TreeNode(7)),
      ),
      new TreeNode(
        1,
        new TreeNode(3, new TreeNode(7), new TreeNode(6)),
        new TreeNode(2, new TreeNode(5), new TreeNode(4)),
      ),
    ],
    [
      'Example 2',
      new TreeNode(3, new TreeNode(2), new TreeNode(1)),
      new TreeNode(3, new TreeNode(1), new TreeNode(2)),
    ],
    ['Empty tree', null, null],
  ])('should invert %s', (_, input, expected) => {
    expect(invertTree(input)).toEqual(expected)
  })
})
