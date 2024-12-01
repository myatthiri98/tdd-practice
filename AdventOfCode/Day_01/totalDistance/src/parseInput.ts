type ParsedInput ={
  left: number[]
  right: number[]
}

export function parseInput(input: string): ParsedInput {
  if (!input.trim()) {
    return { left: [], right: [] }
  }

  const lines = input.trim().split('\n')
  return lines.reduce((acc: ParsedInput, line: string) => {
    const [left, right] = line.trim().split(/\s+/).map(Number)
    acc.left.push(left)
    acc.right.push(right)
    return acc
  }, { left: [], right: [] })
} 