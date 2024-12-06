import { resolve } from 'path'

const solution = process.argv[2]
if (!solution) {
  console.error('Please specify which solution to run, e.g.: yarn start day3')
  process.exit(1)
}

const solutionMap: Record<string, string> = {
  day1: 'AdventOfCode/Day_01/totalDistance/src/main.ts',
  day2: 'AdventOfCode/Day_02/Red-Nosed Reports/src/index.ts',
  day3: 'AdventOfCode/Day_03/Mull It Over/src/index.ts',
  day4: 'AdventOfCode/Day_04/Word Search/src/index.ts',
  day5: 'AdventOfCode/Day_05/Print Queue/src/index.ts',
  day6: 'AdventOfCode/Day_06/guard-patrol/src/index.ts',
}

const solutionPath = solutionMap[solution.toLowerCase()]
if (!solutionPath) {
  console.error(
    `Solution "${solution}" not found. Available solutions: ${Object.keys(
      solutionMap,
    ).join(', ')}`,
  )
  process.exit(1)
}

require(resolve(process.cwd(), solutionPath))
