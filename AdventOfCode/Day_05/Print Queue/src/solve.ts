type ParsedInput = {
  rules: [number, number][]
  updates: number[][]
}

function isValidUpdate(update: number[], rules: [number, number][]): boolean {
  for (const [before, after] of rules) {
    const beforeIndex = update.indexOf(before)
    const afterIndex = update.indexOf(after)

    // Skip rule if either number isn't in the update
    if (beforeIndex === -1 || afterIndex === -1) continue

    // Rule is violated if 'after' comes before 'before'
    if (beforeIndex > afterIndex) return false
  }
  return true
}

function getMiddleNumber(arr: number[]): number {
  return arr[Math.floor(arr.length / 2)]
}

export function solve(input: ParsedInput): number {
  const { rules, updates } = input

  const validUpdates = updates.filter((update) => isValidUpdate(update, rules))
  const middleNumbers = validUpdates.map(getMiddleNumber)

  return middleNumbers.reduce((sum, num) => sum + num, 0)
}
