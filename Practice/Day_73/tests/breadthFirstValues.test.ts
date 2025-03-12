import { describe, it, expect } from 'vitest'
import { breadthFirstValues, Node } from '../src/breadthFirstValues'

describe('breadthFirstValues', () => {
  it.each([
    // Test Case 1: Simple tree
    [
      'Basic tree',
      (() => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        const d = new Node('d')
        const e = new Node('e')
        const f = new Node('f')

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        return a
      })(),
      ['a', 'b', 'c', 'd', 'e', 'f'],
    ],

    // Test Case 2: More complex tree
    [
      'Tree with deeper levels',
      (() => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        const d = new Node('d')
        const e = new Node('e')
        const f = new Node('f')
        const g = new Node('g')
        const h = new Node('h')

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f
        e.left = g
        f.right = h

        return a
      })(),
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    ],

    // Test Case 3: Single-node tree
    ['Single-node tree', new Node('a'), ['a']],

    // Test Case 4: Unbalanced tree
    [
      'Unbalanced right-heavy tree',
      (() => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        const d = new Node('d')
        const e = new Node('e')
        const x = new Node('x')

        a.right = b
        b.left = c
        c.left = x
        c.right = d
        d.right = e

        return a
      })(),
      ['a', 'b', 'c', 'x', 'd', 'e'],
    ],

    // Test Case 5: Empty tree
    ['Empty tree', null, []],
  ])('should return correct BFS order for %s', (_, root, expected) => {
    expect(breadthFirstValues(root)).toEqual(expected)
  })
})
