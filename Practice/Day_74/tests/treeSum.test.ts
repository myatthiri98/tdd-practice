import { describe, expect, it } from 'vitest'
import { treeSum, Node } from '../src/treeSum'

describe('treeSum', () => {
  it.each([
    [null, 0], // Empty tree
    [new Node(5), 5], // Single-node tree
    [
      (() => {
        const a = new Node(3)
        const b = new Node(11)
        const c = new Node(4)
        const d = new Node(4)
        const e = new Node(-2)
        const f = new Node(1)
        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f
        return a
      })(),
      21, // Sum of all nodes
    ],
    [
      (() => {
        const a = new Node(1)
        const b = new Node(6)
        const c = new Node(0)
        const d = new Node(3)
        const e = new Node(-6)
        const f = new Node(2)
        const g = new Node(2)
        const h = new Node(2)
        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f
        e.left = g
        f.right = h
        return a
      })(),
      10, // Sum of all nodes
    ],
  ])('should return %i for given tree', (root, expected) => {
    expect(treeSum(root)).toBe(expected)
  })
})
