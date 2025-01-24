export function maxProfit(prices: number[]): number {
  let minPrice = Infinity
  let maxProfit = 0

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price // Update the minimum price
    }
    maxProfit = Math.max(maxProfit, price - minPrice) // Calculate and update max profit
  }

  return maxProfit
}
