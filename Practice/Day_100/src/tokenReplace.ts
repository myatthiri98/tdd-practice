export function tokenReplace(
  str: string,
  tokens: Record<string, string>,
): string {
  // Create a copy of the input string
  let result = str

  // Sort tokens by key length in descending order to handle overlapping tokens
  const sortedTokens = Object.entries(tokens).sort(
    (a, b) => b[0].length - a[0].length,
  )

  // Replace each token in the string
  for (const [key, value] of sortedTokens) {
    result = result.split(key).join(value)
  }

  return result
}
