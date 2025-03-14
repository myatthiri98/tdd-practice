import { describe, expect, it } from 'vitest'
import { treeIncludes, Node } from '../src/treeIncludes'

describe('treeIncludes', () => {
  it.each([
    ['e', true],
    ['a', true],
    ['n', false],
    ['f', true],
    ['p', false],
    ['b', false], // Empty tree case
  ])('should return %s when searching for %s', (target, expected) => {
    // Define Nodes
    const a = new Node('a')
    const b = new Node('b')
    const c = new Node('c')
    const d = new Node('d')
    const e = new Node('e')
    const f = new Node('f')
    const g = new Node('g')
    const h = new Node('h')

    // Define Tree Structure
    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f
    e.left = g
    f.right = h

    // Pass null for empty tree case
    const root = target === 'b' ? null : a

    expect(treeIncludes(root, target)).toBe(expected)
  })
})
