import { generateOperatorCombinations } from './generateOperatorCombinations'
import { isValidEquation } from './isValidEquation'
import { parseEquation } from './parseEquation'

export function findValidEquations(equations: string[]): number {
  return equations.reduce((sum, equation) => {
    const { testValue, numbers } = parseEquation(equation)
    const possibleOperatorCombinations = generateOperatorCombinations(
      numbers.length,
    )

    const hasValidCombination = possibleOperatorCombinations.some((operators) =>
      isValidEquation(numbers, testValue, operators),
    )

    return sum + (hasValidCombination ? testValue : 0)
  }, 0)
}
