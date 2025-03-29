import { describe, it, expect } from 'vitest'
import { isSubtree, TreeNode } from '../src/isSubtree'

describe('isSubtree function', () => {
  it.each([
    [
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3),
      ),
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      true, // Expected Output
    ],
    [
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4, new TreeNode(6)), new TreeNode(5)),
        new TreeNode(3),
      ),
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      false, // Expected Output
    ],
    [
      new TreeNode(
        3,
        new TreeNode(4, new TreeNode(1), new TreeNode(2)),
        new TreeNode(5),
      ),
      new TreeNode(4, new TreeNode(1), new TreeNode(2)),
      true, // Expected Output
    ],
    [
      new TreeNode(
        3,
        new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
        new TreeNode(5),
      ),
      new TreeNode(4, new TreeNode(1), new TreeNode(2)),
      false, // Expected Output (extra node 0 in subRoot makes it different)
    ],
  ])('isSubtree(%o, %o) should return %s', (root, subRoot, expected) => {
    expect(isSubtree(root, subRoot)).toBe(expected)
  })
})
