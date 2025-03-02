import { describe, it, expect } from 'vitest'
import { compress } from '../src/compress'

describe('compress', () => {
  it.each([
    ['ccaaatsss', '2c3at3s'],
    ['ssssbbz', '4s2bz'],
    ['ppoppppp', '2po5p'],
    ['nnneeeeeeeeeeeezz', '3n12e2z'],
    ['a', 'a'],
    ['aa', '2a'],
    ['abc', 'abc'],
    ['aaabbc', '3a2bc'],
  ])('compress(%s) should return %s', (input, expected) => {
    expect(compress(input)).toBe(expected)
  })
})
