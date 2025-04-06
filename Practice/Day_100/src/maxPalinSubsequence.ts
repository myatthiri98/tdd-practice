export function maxPalinSubsequence(str: string): number {
  const n = str.length
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1
      if (str[i] === str[j]) {
        dp[i][j] = 2 + (dp[i + 1][j - 1] ?? 0)
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[0][n - 1]
}
