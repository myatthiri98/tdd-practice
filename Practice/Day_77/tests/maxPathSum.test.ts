import { describe, it, expect } from 'vitest'
import { maxPathSum, Node } from '../src/maxPathSum'

describe('maxPathSum', () => {
  it.each([
    [
      'Example 1', // Test case name
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

        return a // Root node
      })(),
      18, // Expected result
    ],
    [
      'Example 2',
      (() => {
        const a = new Node(5)
        const b = new Node(11)
        const c = new Node(54)
        const d = new Node(20)
        const e = new Node(15)
        const f = new Node(1)
        const g = new Node(3)

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        e.left = f
        e.right = g

        return a
      })(),
      59,
    ],
    [
      'Example 3 (All negative values)',
      (() => {
        const a = new Node(-1)
        const b = new Node(-6)
        const c = new Node(-5)
        const d = new Node(-3)
        const e = new Node(0)
        const f = new Node(-13)
        const g = new Node(-1)
        const h = new Node(-2)

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f
        e.left = g
        f.right = h

        return a
      })(),
      -8,
    ],
    ['Single Node Tree', new Node(42), 42],
    [
      'Only Left Subtree',
      (() => {
        const a = new Node(10)
        const b = new Node(5)
        const c = new Node(2)
        a.left = b
        b.left = c
        return a
      })(),
      17,
    ],
  ])('should return the correct max path sum for %s', (_, root, expected) => {
    expect(maxPathSum(root)).toBe(expected)
  })
})
