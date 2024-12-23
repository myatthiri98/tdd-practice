import { findStartAndEnd, parseInput } from './parser'
import { findCheats } from './solver'

export function solve(input: string): number {
  if (!input || input === '...') return 0

  const grid = parseInput(input)
  const { start, end } = findStartAndEnd(grid)
  const cheats = findCheats(grid, start, end)

  return Array.from(cheats.entries())
    .filter(([timeSaved]) => timeSaved >= 100)
    .reduce((sum, [_, count]) => sum + count, 0)
}
