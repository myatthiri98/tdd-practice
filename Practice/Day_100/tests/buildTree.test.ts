import { describe, it, expect } from 'vitest'
import { buildTree, TreeNode, treeToArray } from '../src/buildTree'

type TestCase = {
  preorder: number[]
  inorder: number[]
  expected: (number | null)[]
}

const cases: TestCase[] = [
  {
    preorder: [1, 2, 3, 4],
    inorder: [2, 1, 3, 4],
    expected: [1, 2, 3, null, null, null, 4],
  },
  {
    preorder: [1],
    inorder: [1],
    expected: [1],
  },
]

describe('buildTree', () => {
  it.each(cases)(
    'should build tree from preorder and inorder',
    ({ preorder, inorder, expected }) => {
      const tree = buildTree(preorder, inorder)
      expect(treeToArray(tree)).toEqual(expected)
    },
  )
})
