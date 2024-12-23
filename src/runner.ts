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
  day7: 'AdventOfCode/Day_07/findValidEquations/src/index.ts',
  day8: 'AdventOfCode/Day_08/Unique Antinode/src/index.ts',
  day9: 'AdventOfCode/Day_09/Disk Fragmenter/src/index.ts',
  day10: 'AdventOfCode/Day_10/lavaIsland/src/index.ts',
  day11: 'AdventOfCode/Day_11/Plutonian Pebbles/src/index.ts',
  day12: 'AdventOfCode/Day_12/Garden Groups/src/index.ts',
  day13: 'AdventOfCode/Day_13/Claw Contraption/src/index.ts',
  day14: 'AdventOfCode/Day_14/Restroom Redoubt/src/index.ts',
  day15: 'AdventOfCode/Day_15/Warehouse Robot/src/index.ts',
  day16: 'AdventOfCode/Day_16/Reindeer Maze/src/index.ts',
  day17: 'AdventOfCode/Day_17/src/index.ts',
  day18: 'AdventOfCode/Day_18/src/index.ts',
  day19: 'AdventOfCode/Day_19/src/main.ts',
  day20: 'AdventOfCode/Day_20/src/index.ts',
  day21: 'AdventOfCode/Day_21/src/main.ts',
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
