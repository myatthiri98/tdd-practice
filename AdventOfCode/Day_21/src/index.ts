import { solvePartOne, solvePartTwo } from './solver'

const codes = '671A\n083A\n582A\n638A\n341A'

const result = solvePartOne(codes)
console.log(`The sum of complexities is: ${result}`)

const part2 = solvePartTwo(codes)
console.log(
  `The sum of complexities after applying the second rule is: ${part2}`,
)
