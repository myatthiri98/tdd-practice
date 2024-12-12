import { describe, it, expect } from 'vitest'
import { parseMap } from '../src/parseMap'

describe('parseMap', () => {
  it.each([
    {
      input: `
        AAAA
        BBCD
        BBCC
        EEEC
      `,
      expected: [
        ['A', 'A', 'A', 'A'],
        ['B', 'B', 'C', 'D'],
        ['B', 'B', 'C', 'C'],
        ['E', 'E', 'E', 'C'],
      ],
    },
  ])('should parse the input into a 2D array', ({ input, expected }) => {
    expect(parseMap(input)).toEqual(expected)
  })
})
