import * as fs from 'fs'
import path from 'path'

/**
 * Checks if a design can be constructed using the given towel patterns.
 * @param design - The desired design to construct.
 * @param patterns - The available towel patterns.
 * @param memo - A memoization object to optimize recursive calls.
 * @returns `true` if the design can be constructed, otherwise `false`.
 */
export const canConstruct = (
  design: string,
  patterns: string[],
  memo: Record<string, boolean> = {},
): boolean => {
  if (design in memo) return memo[design]
  if (design === '') return true

  for (const pattern of patterns) {
    if (design.startsWith(pattern)) {
      const remaining = design.slice(pattern.length)
      if (canConstruct(remaining, patterns, memo)) {
        memo[design] = true
        return true
      }
    }
  }

  memo[design] = false
  return false
}

/**
 * Counts how many designs can be constructed from the given towel patterns.
 * @param towelPatterns - The available towel patterns.
 * @param desiredDesigns - The list of desired designs.
 * @returns The count of possible designs.
 */
export const countPossibleDesigns = (
  towelPatterns: string[],
  desiredDesigns: string[],
): number => {
  let count = 0

  for (const design of desiredDesigns) {
    if (canConstruct(design, towelPatterns)) {
      count++
    }
  }

  return count
}

// Read input from input.txt
const inputFile = path.resolve(__dirname, '../input.txt')

// Read the file content
const input = fs.readFileSync(inputFile, 'utf-8')

const [patternsSection, designsSection] = input.split('\n\n')
const towelPatterns = patternsSection.split(', ')
const desiredDesigns = designsSection.split('\n')

// Calculate and print result
const result = countPossibleDesigns(towelPatterns, desiredDesigns)
console.log(`Number of possible designs: ${result}`)
