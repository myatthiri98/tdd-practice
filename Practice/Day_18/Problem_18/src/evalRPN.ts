export function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  tokens.forEach((token) => {
    if (['+', '-', '*', '/'].includes(token)) {
      const b = stack.pop()!
      const a = stack.pop()!
      const result = compute(a, b, token)
      stack.push(result)
    } else {
      stack.push(parseInt(token, 10))
    }
  })

  return stack[0]
}

function compute(a: number, b: number, operator: string): number {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return Math.trunc(a / b)
    default:
      throw new Error(`Invalid operator: ${operator}`)
  }
}
