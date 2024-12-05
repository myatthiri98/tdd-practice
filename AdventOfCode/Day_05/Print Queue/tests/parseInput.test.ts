import { describe, expect, it } from 'vitest'
import { parseInput } from '../src/parseInput'

describe('parseInput', () => {
  it('should parse rules and updates from the input', () => {
    const input = `47|53
97|13

75,47,61,53,29
97,61,53,29,13`

    const result = parseInput(input)
    expect(result).toEqual({
      rules: [
        [47, 53],
        [97, 13],
      ],
      updates: [
        [75, 47, 61, 53, 29],
        [97, 61, 53, 29, 13],
      ],
    })
  })
})
