import { Operator } from './types'

export function generateOperatorCombinations(
  numbersCount: number,
): Operator[][] {
  // Early return for invalid input
  if (numbersCount < 2) return []

  const VALID_OPERATORS: Operator[] = ['+', '*']
  const combinations: Operator[][] = []

  // Recursive function to generate all possible combinations
  function generateCombination(
    currentCombination: Operator[],
    position: number,
  ): void {
    // Base case: combination is complete
    if (position === numbersCount - 1) {
      combinations.push([...currentCombination])
      return
    }

    // Try each operator at the current position
    for (const operator of VALID_OPERATORS) {
      currentCombination.push(operator)
      generateCombination(currentCombination, position + 1)
      currentCombination.pop() // Backtrack
    }
  }

  generateCombination([], 0)
  return combinations
}
