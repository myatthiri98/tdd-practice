import { describe, it, expect } from 'vitest'
import { canConcat } from '../src/canConcat'

describe('canConcat', () => {
  it.each([
    ['oneisnone', ['one', 'none', 'is'], true],
    ['oneisnone', ['on', 'e', 'is'], false],
    ['oneisnone', ['on', 'e', 'is', 'n'], true],
    ['foodisgood', ['is', 'g', 'ood', 'f'], true],
    ['santahat', ['santah', 'hat'], false],
    ['santahat', ['santah', 'san', 'hat', 'tahat'], true],
    [
      'rrrrrrrrrrrrrrrrrrrrrrrrrrx',
      ['r', 'rr', 'rrr', 'rrrr', 'rrrrr', 'rrrrrr'],
      false,
    ],
    ['fooisgood', ['foo', 'is', 'g', 'ood', 'f'], true],
  ])('canConcat("%s", %j) ➞ %s', (target, words, expected) => {
    // Arrange & Act
    const result = canConcat(target, words)

    // Assert
    expect(result).toBe(expected)
  })
})
