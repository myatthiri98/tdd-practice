import { describe, it, expect } from 'vitest'
import { undirectedPath } from '../src/undirectedPath'

describe('undirectedPath', () => {
  it.each([
    [
      [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n'],
      ],
      'j',
      'm',
      true,
    ],
    [
      [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n'],
      ],
      'k',
      'o',
      false,
    ],
    [
      [
        ['b', 'a'],
        ['c', 'a'],
        ['b', 'c'],
        ['q', 'r'],
        ['q', 's'],
        ['q', 'u'],
        ['q', 't'],
      ],
      'r',
      't',
      true,
    ],
    [
      [
        ['s', 'r'],
        ['t', 'q'],
        ['q', 'r'],
      ],
      'r',
      't',
      true,
    ],
    [
      [
        ['s', 'r'],
        ['t', 'q'],
        ['q', 'r'],
      ],
      'r',
      'b',
      false,
    ],
  ])(
    'should return %s for path between %s and %s',
    (edges, nodeA, nodeB, expected) => {
      expect(undirectedPath(edges, nodeA, nodeB)).toBe(expected)
    },
  )
})
