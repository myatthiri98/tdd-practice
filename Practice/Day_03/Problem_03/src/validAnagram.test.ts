import { describe, expect, it } from 'vitest'
import { validAnagram } from './validAnagram'

describe('Valid Anagram', () => {
  it('Should return true if two strings are anagrams', () => {
    expect(validAnagram('listen', 'silent')).toBe(true)
  })
    it('Should return false if two strings are not anagrams', () => {
      expect(validAnagram('hello', 'world')).toBe(false)
    })
  it('Should return false if strings have different lengths', () => {
    expect(validAnagram('abc', 'abcd')).toBe(false)
  })
  it.each([
    ['listen', 'silent', true, 'anagrams'],
    ['hello', 'world', false, 'non-anagrams'],
    ['abc', 'abcd', false, 'different lengths'],
    ['rat', 'car', false, 'same length but different chars'],
    ['', '', true, 'empty strings'],
    ['anagram', 'nagaram', true, 'another anagram example'],
  ])('Should return %p for %s and %s (%s)', (first, second, expected, _scenario) => {
    expect(validAnagram(first, second)).toBe(expected)
  })
})
