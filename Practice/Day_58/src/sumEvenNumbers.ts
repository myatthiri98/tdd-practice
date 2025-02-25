// sumEvenNumbers.ts
export function sumEvenNumbers(arr: number[]): number {
  let sum = 0
  for (const num of arr) {
    if (num % 2 === 0) {
      sum += num
    }
  }
  return sum
}
