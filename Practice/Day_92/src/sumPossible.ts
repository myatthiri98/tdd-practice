export const sumPossible = (
  amount: number,
  numbers: number[],
  memo: Record<number, boolean> = {},
): boolean => {
  if (amount === 0) return true // Base case: exact match
  if (amount < 0) return false // Invalid case
  if (amount in memo) return memo[amount] // Use memoized result

  for (const num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true
      return true
    }
  }

  memo[amount] = false
  return false
}
