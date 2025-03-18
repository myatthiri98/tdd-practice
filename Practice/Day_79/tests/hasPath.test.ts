import { describe, it, expect } from 'vitest'
import { hasPath } from '../src/hasPath'

describe('hasPath', () => {
  const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: [],
  }

  it.each([
    ['should return true when a path exists', graph, 'f', 'k', true],
    ['should return false when no path exists', graph, 'f', 'j', false],
    ['should return true for a valid indirect path', graph, 'i', 'h', true],
    [
      'should return false if src and dst are disconnected',
      graph,
      'v',
      'z',
      false,
    ],
  ])('%s', (_desc, graph, src, dst, expected) => {
    expect(hasPath(graph, src, dst)).toBe(expected)
  })
})
