import { describe, it, expect } from 'vitest'
import { tokenTransform } from '../src/tokenTransform'

describe('tokenTransform', () => {
  it.each([
    [
      'Walk the $ANIMAL$ in the $LOCATION$!',
      {
        $LOCATION$: '$ANIMAL$ park',
        $ANIMAL$: 'dog',
      },
      'Walk the dog in the dog park!',
    ],
    [
      'the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward',
      {
        $ADJECTIVE_1$: 'quick',
        $ADJECTIVE_2$: 'eager',
        $ADVERBS$: '$ADJECTIVE_1$ly and $ADJECTIVE_2$ly',
        $VERB$: 'hopped $DIRECTION$',
        $DIRECTION$: 'North',
      },
      'the quick fox quickly and eagerly hopped Northward',
    ],
    [
      'What a $A$ here!',
      {
        $B$: 'epicly $C$',
        $A$: 'pretty $B$ problem $D$',
        $D$: 'we have',
        $C$: 'clever',
      },
      'What a pretty epicly clever problem we have here!',
    ],
    [
      '$1$ $1$ $1$ $1$ $1$ $1$ $4$ $4$',
      {
        $1$: 'a$2$',
        $2$: 'b$3$',
        $3$: 'c$4$',
        $4$: 'd$5$',
        $5$: 'e$6$',
        $6$: 'f!',
      },
      'abcdef! abcdef! abcdef! abcdef! abcdef! abcdef! def! def!',
    ],
    [
      'z$0$z$0$z$0$z$0$z$0$z$0$z',
      {
        $0$: '$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$',
        $1$: '$2$$2$$2$$2$$2$$2$$2$$2$$2$',
        $2$: '$3$$3$$3$$3$$3$$3$$3$',
        $3$: '$4$$4$$4$$4$$4$$4$',
        $4$: '$5$$5$$5$$5$$5$',
        $5$: '$6$$6$$6$$6$',
        $6$: '$7$$7$$7$',
        $7$: '$8$$8$',
        $8$: '',
      },
      'zzzzzzz',
    ],
  ])('transforms "%s" correctly', (input, tokens, expected) => {
    expect(tokenTransform(input, tokens)).toBe(expected)
  })
})
