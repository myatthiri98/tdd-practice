import { readFileSync } from 'fs'
import { join } from 'path'
import { solve } from './main'

const input = readFileSync(join(__dirname, '../input.txt'), 'utf8')
const result = solve(input)
console.log(`Number of cheats saving ≥100 picoseconds: ${result}`)
