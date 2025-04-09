import { describe, it, expect } from 'vitest'
import { tokenReplace } from '../src/tokenReplace'

type TestCase = {
  name: string
  input: string
  tokens: Record<string, string>
  expected: string
}

const cases: TestCase[] = [
  {
    name: 'replaces two tokens',
    input: 'Walk the $ANIMAL$ in the $LOCATION$!',
    tokens: {
      $LOCATION$: 'park',
      $ANIMAL$: 'dog',
    },
    expected: 'Walk the dog in the park!',
  },
  {
    name: 'token appears twice',
    input: 'the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward',
    tokens: {
      $ADJECTIVE$: 'quick',
      $VERB$: 'hopped',
      $DIRECTION$: 'North',
    },
    expected: 'the quick fox hopped quickly Northward',
  },
  {
    name: 'single token',
    input: '$B$',
    tokens: {
      $A$: 'lions',
      $B$: 'tigers',
      $C$: 'bears',
    },
    expected: 'tigers',
  },
  {
    name: 'consecutive tokens',
    input: '$first$second$third$',
    tokens: {
      $first$: 'alpha',
      $second$: 'beta',
      $third$: 'gamma',
    },
    expected: 'alphabetagamma',
  },
]

describe('tokenReplace', () => {
  it.each(cases)('$name', ({ input, tokens, expected }) => {
    expect(tokenReplace(input, tokens)).toBe(expected)
  })
})
