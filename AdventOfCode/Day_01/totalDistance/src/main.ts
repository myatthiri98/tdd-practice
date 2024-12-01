import { readFileSync } from 'fs'
import { solve } from './solve'

const input = readFileSync('./src/input.txt', 'utf-8')
const result = solve(input)
console.log('Solution:', result) 