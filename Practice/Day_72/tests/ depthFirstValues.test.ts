import { describe, it, expect } from 'vitest'
import { depthFirstValues, TreeNode } from '../src/depthFirstValues'

describe('depthFirstValues', () => {
  it.each([
    // Test case 1: Normal tree
    [
      new TreeNode(
        'a',
        new TreeNode('b', new TreeNode('d'), new TreeNode('e')),
        new TreeNode('c', null, new TreeNode('f')),
      ),
      ['a', 'b', 'd', 'e', 'c', 'f'],
    ],
    // Test case 2: Single node
    [new TreeNode('a'), ['a']],
    // Test case 3: Right-skewed tree
    [
      new TreeNode(
        'a',
        null,
        new TreeNode(
          'b',
          new TreeNode('c', null, new TreeNode('d', null, new TreeNode('e'))),
        ),
      ),
      ['a', 'b', 'c', 'd', 'e'],
    ],
    // Test case 4: Tree with left-heavy structure
    [
      new TreeNode(
        'a',
        new TreeNode(
          'b',
          new TreeNode('c', new TreeNode('d', new TreeNode('e'))),
        ),
      ),
      ['a', 'b', 'c', 'd', 'e'],
    ],
    // Test case 5: Empty tree
    [null, []],
  ])('should return depth-first values for given tree', (root, expected) => {
    expect(depthFirstValues(root)).toEqual(expected)
  })
})
