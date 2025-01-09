export function isValidParentheses(s: string): boolean {
  const stack: string[] = []
  const map: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let char of s) {
    if (map[char]) {
      // If it's an opening bracket, push it to the stack
      stack.push(char)
    } else {
      // If it's a closing bracket, check if the last opened one matches
      const last = stack.pop()
      if (!last || map[last] !== char) {
        return false
      }
    }
  }

  // If the stack is empty, all opening brackets were matched
  return stack.length === 0
}
