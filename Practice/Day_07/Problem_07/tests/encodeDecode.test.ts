import { describe, it, expect } from 'vitest'
import { encode, decode } from '../src/encodeDecode'

describe('encode', () => {
  it.each([
    { input: [], expected: '' },
    {
      input: ['neet', 'code', 'love', 'you'],
      expected: '4/neet4/code4/love3/you',
    },
    { input: ['we', 'say', ':', 'yes'], expected: '2/we3/say1/:3/yes' },
    { input: ['hello/', 'world#'], expected: '6/hello/6/world#' },
    { input: [''], expected: '0/' },
  ])('should encode $input to $expected', ({ input, expected }) => {
    expect(encode(input)).toBe(expected)
  })
})

describe('decode', () => {
  it.each([
    { input: '', expected: [] },
    {
      input: '4/neet4/code4/love3/you',
      expected: ['neet', 'code', 'love', 'you'],
    },
    { input: '2/we3/say1/:3/yes', expected: ['we', 'say', ':', 'yes'] },
    { input: '6/hello/6/world#', expected: ['hello/', 'world#'] },
    { input: '0/', expected: [''] },
  ])('should decode $input to $expected', ({ input, expected }) => {
    expect(decode(input)).toEqual(expected)
  })
})
