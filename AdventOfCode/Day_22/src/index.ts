import { MonkeyMarket } from './monkeyMarket'
import path, { join } from 'path'
import { readFileSync } from 'fs'

// Create an instance
const market = new MonkeyMarket()

const inputs = readFileSync(join(__dirname, '../input.txt'), 'utf8')
  .split('\n')
  .map((line) => parseInt(line, 10))
// Get the solution
const result = market.solve(inputs)
console.log(result)
