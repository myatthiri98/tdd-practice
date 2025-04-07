export function overlapSubsequence(str1: string, str2: string): number {
  const dp: number[][] = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0))

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[str1.length][str2.length]
}
