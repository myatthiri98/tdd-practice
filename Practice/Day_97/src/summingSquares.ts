// summing squares
// Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

// For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

export const summingSquares = (
  n: number,
  memo: Record<number, number> = {},
): number => {
  if (n in memo) return memo[n]

  if (n === 0) return 0

  let minSquares = Infinity

  for (let i = 1; i <= Math.sqrt(n); i++) {
    const square = i * i
    const numSquares = 1 + summingSquares(n - square, memo)
    minSquares = Math.min(minSquares, numSquares)
  }

  memo[n] = minSquares
  return minSquares
}
