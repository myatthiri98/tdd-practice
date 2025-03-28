import { describe, it, expect } from 'vitest'
import { largestComponent } from '../src/largestComponent'
describe('largestComponent', () => {
  it.each([
    [
      'Case 1 - Two components (4 and 3 nodes)',
      {
        0: ['8', '1', '5'],
        1: ['0'],
        5: ['0', '8'],
        8: ['0', '5'],
        2: ['3', '4'],
        3: ['2', '4'],
        4: ['3', '2'],
      },
      4,
    ],
    [
      'Case 2 - One large component (6 nodes)',
      {
        1: ['2'],
        2: ['1', '8'],
        6: ['7'],
        9: ['8'],
        7: ['6', '8'],
        8: ['9', '7', '2'],
      },
      6,
    ],
    [
      'Case 3 - Largest component has 5 nodes',
      {
        3: [],
        4: ['6'],
        6: ['4', '5', '7', '8'],
        8: ['6'],
        7: ['6'],
        5: ['6'],
        1: ['2'],
        2: ['1'],
      },
      5,
    ],
    ['Case 4 - Empty graph', {}, 0],
    [
      'Case 5 - Disconnected components (largest is 3 nodes)',
      {
        0: ['4', '7'],
        1: [],
        2: [],
        3: ['6'],
        4: ['0'],
        6: ['3'],
        7: ['0'],
        8: [],
      },
      3,
    ],
  ])('%s', (_, graph, expected) => {
    expect(largestComponent(graph)).toBe(expected)
  })
})
