import { describe, expect, it } from 'vitest'
import { treeMinValue, Node } from '../src/treeMinValue'

describe('treeMinValue', () => {
  it.each([
    ['Case 1', 3, -2],
    ['Case 2', 5, -2],
    ['Case 3', -1, -13],
    ['Case 4', 42, 42],
  ])('should return the minimum value for %s', (_, rootValue, expected) => {
    // Define Nodes
    const a = new Node(rootValue)
    const b = new Node(11)
    const c = new Node(4)
    const d = new Node(4)
    const e = new Node(-2)
    const f = new Node(1)
    const g = new Node(-13)
    const h = new Node(-2)
    const i = new Node(-6)
    const j = new Node(-5)
    const k = new Node(-3)
    const l = new Node(-4)
    const m = new Node(-2)

    // Build trees based on root value
    if (rootValue === 3) {
      a.left = b
      a.right = c
      b.left = d
      b.right = e
      c.right = f
    } else if (rootValue === 5) {
      a.left = b
      a.right = c
      b.left = d
      b.right = e
      c.right = f
    } else if (rootValue === -1) {
      a.left = i
      a.right = j
      i.left = k
      i.right = l
      j.right = g
      l.left = m
      g.right = h
    }
    expect(treeMinValue(a)).toBe(expected)
  })
})
