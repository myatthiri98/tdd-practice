import { describe, it, expect } from 'vitest'
import { overlapSubsequence } from '../src/overlapSubsequence'

describe('overlapSubsequence', () => {
  it.each([
    ['dogs', 'daogt', 3],
    ['xcyats', 'criaotsi', 4],
    ['xfeqortsver', 'feeeuavoeqr', 5],
    ['kinfolklivemustache', 'bespokekinfolksnackwave', 11],
    [
      'mumblecorebeardleggingsauthenticunicorn',
      'succulentspughumblemeditationlocavore',
      15,
    ],
  ])('overlapSubsequence(%s, %s) -> %d', (str1, str2, expected) => {
    expect(overlapSubsequence(str1, str2)).toBe(expected)
  })
})
