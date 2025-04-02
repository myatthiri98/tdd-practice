export const countingChange = (
  amount: number,
  coins: number[],
  index = 0,
  memo: Record<string, number> = {},
): number => {
  let key = `${amount}-${index}`
  if (key in memo) return memo[key]

  if (amount === 0) return 1
  if (amount < 0 || index >= coins.length) return 0

  // Choose the current coin (stay at the same index)
  let include = countingChange(amount - coins[index], coins, index, memo)
  // Skip the current coin (move to the next index)
  let exclude = countingChange(amount, coins, index + 1, memo)

  memo[key] = include + exclude
  return memo[key]
}
