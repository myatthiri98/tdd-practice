import { EquationParts } from './types'

export function parseEquation(equation: string): EquationParts {
  const [leftSide, rightSide] = equation.split(':').map((part) => part.trim())

  return {
    testValue: Number(leftSide),
    numbers: rightSide.split(' ').map(Number),
  }
}
