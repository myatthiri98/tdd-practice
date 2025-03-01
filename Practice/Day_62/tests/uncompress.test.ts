import { describe, it, expect } from 'vitest'
import { uncompress } from '../src/uncompress'

describe('uncompress', () => {
  it.each([
    ['2c3a1t', 'ccaaat'],
    ['4s2b', 'ssssbb'],
    ['2p1o5p', 'ppoppppp'],
    ['3n12e2z', 'nnneeeeeeeeeeeezz'],
  ])('uncompress(%s) should return %s', (input, expected) => {
    expect(uncompress(input)).toBe(expected)
  })
})
