import { describe, it, expect } from 'vitest'
import { TreeNode, kthSmallest } from '../src/kthSmallest'

function arrayToTree(arr: (number | null)[]): TreeNode | null {
  if (!arr.length) return null

  const nodes = arr.map((val) => (val !== null ? new TreeNode(val) : null))
  let i = 0

  for (let j = 1; j < nodes.length; j++) {
    const parent = nodes[i]
    if (parent === null) {
      i++
      j--
      continue
    }

    if (parent.left === null) {
      parent.left = nodes[j]
    } else if (parent.right === null) {
      parent.right = nodes[j]
      i++
    }
  }

  return nodes[0]
}

describe('kthSmallest', () => {
  it.each([
    { root: [2, 1, 3], k: 1, expected: 1 },
    { root: [4, 3, 5, 2, null], k: 4, expected: 5 },
    { root: [3, 1, 4, null, 2], k: 2, expected: 2 },
    { root: [5, 3, 6, 2, 4, null, null, 1], k: 3, expected: 3 },
  ])('returns $expected for k=$k in tree $root', ({ root, k, expected }) => {
    const tree = arrayToTree(root)
    expect(kthSmallest(tree, k)).toBe(expected)
  })
})
