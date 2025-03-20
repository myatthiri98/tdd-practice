import { describe, it, expect } from 'vitest'
import { connectedComponentsCount } from '../src/connectedComponentsCount'

describe('connectedComponentsCount', () => {
  it.each([
    [
      'graph with two connected components',
      {
        0: [8, 1, 5],
        1: [0],
        5: [0, 8],
        8: [0, 5],
        2: [3, 4],
        3: [2, 4],
        4: [3, 2],
      },
      2, // Expected result
    ],
    [
      'graph with one connected component',
      {
        1: [2],
        2: [1, 8],
        6: [7],
        9: [8],
        7: [6, 8],
        8: [9, 7, 2],
      },
      1,
    ],
    [
      'graph with three connected components',
      {
        3: [],
        4: [6],
        6: [4, 5, 7, 8],
        8: [6],
        7: [6],
        5: [6],
        1: [2],
        2: [1],
      },
      3,
    ],
    ['empty graph', {}, 0],
    [
      'graph with five connected components',
      {
        0: [4, 7],
        1: [],
        2: [],
        3: [6],
        4: [0],
        6: [3],
        7: [0],
        8: [],
      },
      5,
    ],
  ])('should return %i for %s', (_, graph, expected) => {
    expect(connectedComponentsCount(graph)).toBe(expected)
  })
})
