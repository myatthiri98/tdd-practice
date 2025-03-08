import { describe, it, expect } from 'vitest'
import { getNodeValue, Node } from '../src/getNodeValue'

describe('getNodeValue', () => {
  it.each([
    ['a -> b -> c -> d', ['a', 'b', 'c', 'd'], 2, 'c'],
    ['a -> b -> c -> d', ['a', 'b', 'c', 'd'], 3, 'd'],
    ['a -> b -> c -> d', ['a', 'b', 'c', 'd'], 7, null],
    ['banana -> mango', ['banana', 'mango'], 0, 'banana'],
    ['banana -> mango', ['banana', 'mango'], 1, 'mango'],
    ['single node', ['single'], 0, 'single'],
    ['out of bounds', ['only'], 1, null],
  ])('returns correct node value for %s', (_, values, index, expected) => {
    // Create linked list dynamically
    const nodes = values.map((val) => new Node(val))
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1] // Link nodes
    }
    const head = nodes[0] || null // Handle empty list case

    expect(getNodeValue(head, index)).toBe(expected)
  })
})
