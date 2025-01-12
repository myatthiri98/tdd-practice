export function generateParentheses(n: number): string[] {
  const result: string[] = []

  function backtrack(
    currentString: string,
    openCount: number,
    closeCount: number,
  ) {
    if (currentString.length === 2 * n) {
      result.push(currentString)
      return
    }

    if (openCount < n) {
      backtrack(currentString + '(', openCount + 1, closeCount)
    }

    if (closeCount < openCount) {
      backtrack(currentString + ')', openCount, closeCount + 1)
    }
  }

  backtrack('', 0, 0)
  return result
}
