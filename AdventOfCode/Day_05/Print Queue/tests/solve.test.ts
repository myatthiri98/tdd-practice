import { describe, expect, it } from 'vitest'
import { parseInput } from '../src/parseInput'
import { solve } from '../src/solve'

describe('Print Queue', () => {
  it.each([
    [
      'single valid update',
      `47|53
97|13

75,47,61,53,29`,
      61, // Middle number of valid update
    ],
    [
      'two valid updates',
      `47|53
97|13

75,47,61,53,29
97,61,53,29,13`,
      114, // Sum of middle numbers (61 + 53)
    ],
    [
      'full example from problem',
      `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`,
      143, // Sum of middle numbers (61 + 53 + 29)
    ],
  ])('should solve %s', (_, input, expected) => {
    const result = solve(parseInput(input))
    expect(result).toBe(expected)
  })
})
