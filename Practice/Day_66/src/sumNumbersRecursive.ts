export function sumNumbersRecursive(arr: number[]): number {
  if (arr.length === 0) return 0 // Base Case: Empty array returns 0
  return arr[0] + sumNumbersRecursive(arr.slice(1)) // Recursive Case
}
