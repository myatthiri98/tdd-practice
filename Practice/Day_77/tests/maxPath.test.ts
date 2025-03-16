import { describe, it, expect } from 'vitest'
import { maxPath, Node } from '../src/maxPath'

describe('maxPathSum', () => {
  it.each([
    [
      'Example 1',
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
      { sum: 18, path: [3, 11, 4] }, // Expected sum and path
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
      { sum: 59, path: [5, 54] },
    ],
    [
      'Only Negative Values',
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
      { sum: -8, path: [-1, -6, 0, -1] },
    ],
    ['Single Node', new Node(42), { sum: 42, path: [42] }],
  ])(
    'should return correct max path sum and path for %s',
    (_, root, expected) => {
      expect(maxPath(root)).toEqual(expected)
    },
  )
})
