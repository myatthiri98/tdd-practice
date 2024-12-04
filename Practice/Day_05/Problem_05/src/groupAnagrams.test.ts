import { describe, it, expect } from 'vitest'
import { groupAnagrams } from './groupAnagrams'

describe('groupAnagrams', () => {
  it.each([
    {
      input: ['act', 'pots', 'tops', 'cat', 'stop', 'hat'],
      expected: [['act', 'cat'], ['pots', 'tops', 'stop'], ['hat']],
      description: 'groups basic anagrams correctly',
    },
    {
      input: ['x'],
      expected: [['x']],
      description: 'handles single-character input',
    },
    {
      input: [''],
      expected: [['']],
      description: 'handles input with an empty string',
    },
    {
      input: ['aaa', 'aaa', 'aaa'],
      expected: [['aaa', 'aaa', 'aaa']],
      description: 'handles repeated anagrams',
    },
    {
      input: ['a', 'ab', 'ba', 'b'],
      expected: [['a'], ['b'], ['ab', 'ba']],
      description: 'handles a mix of single and multi-character strings',
    },
  ])('should $description', ({ input, expected }) => {
    const result = groupAnagrams(input)
    expect(result).toEqual(
      expect.arrayContaining(
        expected.map((group) => expect.arrayContaining(group)),
      ),
    )
  })
})
