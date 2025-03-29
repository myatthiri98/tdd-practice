import { describe, it, expect } from 'vitest'
import { TreeNode, isSameTree } from '../src/isSameTree'

// Helper function to create a binary tree from an array
function createBinaryTree(arr: (number | null)[], index = 0): TreeNode | null {
  if (index >= arr.length || arr[index] === null) return null
  const node = new TreeNode(arr[index])
  node.left = createBinaryTree(arr, 2 * index + 1)
  node.right = createBinaryTree(arr, 2 * index + 2)
  return node
}

describe('isSameTree', () => {
  it.each([
    { p: [1, 2, 3], q: [1, 2, 3], expected: true },
    { p: [4, 7], q: [4, null, 7], expected: false },
    { p: [1, 2, 3], q: [1, 3, 2], expected: false },
    { p: [], q: [], expected: true }, // Both empty trees should be equal
    { p: [1], q: [1, null, 2], expected: false }, // Structure mismatch
  ])('returns $expected for p=$p and q=$q', ({ p, q, expected }) => {
    const treeP = createBinaryTree(p)
    const treeQ = createBinaryTree(q)
    expect(isSameTree(treeP, treeQ)).toBe(expected)
  })
})
