import { describe, expect, it } from 'vitest'
import { checkInclusion } from '../src/permutationInString'

describe('Permutation in String', () => {
  it.each([
    ['abc', 'lecabee', true],
    ['abc', 'lecaabee', false],
    ['a', 'a', true],
    ['ab', 'eidbaooo', true],
    ['abc', 'defghijk', false],
  ])(
    'should return %s when checking if permutation of %s exists in %s',
    (s1, s2, expected) => {
      expect(checkInclusion(s1, s2)).toBe(expected)
    },
  )
})
