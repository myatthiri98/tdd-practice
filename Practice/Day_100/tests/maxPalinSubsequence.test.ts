import { describe, it, expect } from 'vitest'
import { maxPalinSubsequence } from '../src/maxPalinSubsequence'

describe('maxPalinSubsequence', () => {
  it.each([
    ['luwxult', 5],
    ['xyzaxxzy', 6],
    ['lol', 3],
    ['boabcdefop', 3],
    ['z', 1],
    ['chartreusepugvicefree', 7],
    ['qwueoiuahsdjnweuueueunasdnmnqweuzqwerty', 15],
    [
      'enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe',
      31,
    ],
  ])("should return %i for '%s'", (input, expected) => {
    expect(maxPalinSubsequence(input)).toBe(expected)
  })
})
