import * as fs from 'fs'
import path from 'path'

/**
 * Counts the total number of ways a design can be constructed using towel patterns.
 * @param design - The desired design to construct.
 * @param patterns - The available towel patterns.
 * @param memo - A memoization object to optimize recursive calls.
 * @returns The total number of ways the design can be constructed.
 */
export const countArrangements = (
  design: string,
  patterns: string[],
  memo: Record<string, number> = {},
): number => {
  if (design in memo) return memo[design]
  if (design === '') return 1 // One valid way to construct an empty design.

  let totalWays = 0

  for (const pattern of patterns) {
    if (design.startsWith(pattern)) {
      const remaining = design.slice(pattern.length)
      totalWays += countArrangements(remaining, patterns, memo)
    }
  }

  memo[design] = totalWays
  return totalWays
}

/**
 * Sums the total number of arrangements for all desired designs.
 * @param towelPatterns - The available towel patterns.
 * @param desiredDesigns - The list of desired designs.
 * @returns The total number of arrangements across all designs.
 */
export const sumAllArrangements = (
  towelPatterns: string[],
  desiredDesigns: string[],
): number => {
  let totalArrangements = 0

  for (const design of desiredDesigns) {
    totalArrangements += countArrangements(design, towelPatterns)
  }

  return totalArrangements
}

// Read input from input.txt
const inputFile = path.resolve(__dirname, '../input.txt')

// Read the file content
const input = fs.readFileSync(inputFile, 'utf-8')

const [patternsSection, designsSection] = input.split('\n\n')
const towelPatterns = patternsSection.split(', ')
const desiredDesigns = designsSection.split('\n')

// Calculate and print result for Part 2
const totalArrangements = sumAllArrangements(towelPatterns, desiredDesigns)
console.log(`Total number of arrangements: ${totalArrangements}`)
