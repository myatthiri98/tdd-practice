import { describe, expect, it } from 'vitest'
import { linkedListValues, Node } from '../src/linkedListValues'

describe('linkedListValues', () => {
  it.each([
    ['Single node', new Node('q'), ['q']],
    [
      'Two nodes',
      (() => {
        const x = new Node('x')
        const y = new Node('y')
        x.next = y
        return x
      })(),
      ['x', 'y'],
    ],
    [
      'Multiple nodes',
      (() => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        const d = new Node('d')
        a.next = b
        b.next = c
        c.next = d
        return a
      })(),
      ['a', 'b', 'c', 'd'],
    ],
    ['Empty list', null, []],
  ])('should return correct values for %s', (_, head, expected) => {
    expect(linkedListValues(head)).toEqual(expected)
  })
})
