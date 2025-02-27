export function pairProduct(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] === target) {
        return [i, j]
      }
    }
  }
  throw new Error('No valid pair found')
}
