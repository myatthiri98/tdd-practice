import { describe, it, expect } from 'vitest'
import { shortestPath } from '../src/shortestPath'

describe('shortestPath', () => {
  it.each([
    [
      [
        ['w', 'x'],
        ['x', 'y'],
        ['z', 'y'],
        ['z', 'v'],
        ['w', 'v'],
      ],
      'w',
      'z',
      2,
    ],
    [
      [
        ['w', 'x'],
        ['x', 'y'],
        ['z', 'y'],
        ['z', 'v'],
        ['w', 'v'],
      ],
      'y',
      'x',
      1,
    ],
    [
      [
        ['a', 'c'],
        ['a', 'b'],
        ['c', 'b'],
        ['c', 'd'],
        ['b', 'd'],
        ['e', 'd'],
        ['g', 'f'],
      ],
      'a',
      'e',
      3,
    ],
    [
      [
        ['a', 'c'],
        ['a', 'b'],
        ['c', 'b'],
        ['c', 'd'],
        ['b', 'd'],
        ['e', 'd'],
        ['g', 'f'],
      ],
      'e',
      'c',
      2,
    ],
    [
      [
        ['c', 'n'],
        ['c', 'e'],
        ['c', 's'],
        ['c', 'w'],
        ['w', 'e'],
      ],
      'w',
      'e',
      1,
    ],
    [
      [
        ['c', 'n'],
        ['c', 'e'],
        ['c', 's'],
        ['c', 'w'],
        ['w', 'e'],
      ],
      'n',
      'e',
      2,
    ],
    [
      [
        ['a', 'b'],
        ['c', 'd'],
      ],
      'a',
      'd',
      -1, // No path
    ],
  ])(
    'should return %d for shortestPath(%o, %s, %s)',
    (edges, nodeA, nodeB, expected) => {
      expect(shortestPath(edges, nodeA, nodeB)).toBe(expected)
    },
  )
})
