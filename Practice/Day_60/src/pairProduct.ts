export function pairProduct(numbers: number[], target: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    const complement = target / num

    if (map.has(complement)) {
      return [map.get(complement)!, i]
    }

    map.set(num, i)
  }

  throw new Error('No valid pair found')
}
