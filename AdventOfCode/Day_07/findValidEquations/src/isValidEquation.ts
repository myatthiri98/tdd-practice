import { Operator } from './types'

export function isValidEquation(
  numbers: number[],
  expectedResult: number,
  operators: Operator[],
): boolean {
  const actualResult = evaluateExpression(numbers, operators)
  return actualResult === expectedResult
}

function evaluateExpression(numbers: number[], operators: Operator[]): number {
  let result = numbers[0]

  for (let i = 0; i < operators.length; i++) {
    const nextNumber = numbers[i + 1]
    result = operators[i] === '+' ? result + nextNumber : result * nextNumber
  }

  return result
}
