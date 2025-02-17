// import { describe, expect, it } from 'vitest'
// import { validAnagram } from './validAnagram'

// describe('Valid Anagram', () => {
//   it('Should return true if two strings are anagrams', () => {
//     expect(validAnagram('listen', 'silent')).toBe(true)
//   })
//     it('Should return false if two strings are not anagrams', () => {
//       expect(validAnagram('hello', 'world')).toBe(false)
//     })
//   it('Should return false if strings have different lengths', () => {
//     expect(validAnagram('abc', 'abcd')).toBe(false)
//   })
//   it.each([
//     ['listen', 'silent', true, 'anagrams'],
//     ['hello', 'world', false, 'non-anagrams'],
//     ['abc', 'abcd', false, 'different lengths'],
//     ['rat', 'car', false, 'same length but different chars'],
//     ['', '', true, 'empty strings'],
//     ['anagram', 'nagaram', true, 'another anagram example'],
//   ])('Should return %p for %s and %s (%s)', (first, second, expected, _scenario) => {
//     expect(validAnagram(first, second)).toBe(expected)
//   })
// })

import { describe, it, expect } from 'vitest'
import { anagrams } from '../src/validAnagram'

describe('anagrams', () => {
  it.each([
    ['listen', 'silent', true],
    ['rail safety', 'fairy tales', true],
    ['Elbow', 'Below', true], // Case insensitive
    ['hello', 'world', false],
    ['aabbcc', 'ccbbaa', true],
    ['test', 'sett', true],
    ['anagram', 'nagaram', true],
    ['rat', 'car', false],
    ['hello', 'helloo', false], // Different lengths
    ['', '', true], // Empty strings
    ['abc', 'abcd', false], // Different lengths
    ['dormitory', 'dirty room', true], // Spaces should be ignored
  ])('anagrams("%s", "%s") should return %s', (s1, s2, expected) => {
    expect(anagrams(s1, s2)).toBe(expected)
  })
})
