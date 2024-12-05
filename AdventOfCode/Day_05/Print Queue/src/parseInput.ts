interface ParsedInput {
  rules: [number, number][]
  updates: number[][]
}

export function parseInput(input: string): ParsedInput {
  // Split input into rules and updates sections, handling whitespace
  const sections = input.trim().split(/\n\s*\n/)
  if (sections.length !== 2) {
    throw new Error('Invalid input format')
  }

  const [rulesSection, updatesSection] = sections

  // Parse rules (X|Y format)
  const rules = rulesSection
    .trim()
    .split('\n')
    .map((line) => line.trim().split('|').map(Number)) as [number, number][]

  // Parse updates (comma-separated numbers)
  const updates = updatesSection
    .trim()
    .split('\n')
    .map((line) => line.trim().split(',').map(Number))

  return { rules, updates }
}
