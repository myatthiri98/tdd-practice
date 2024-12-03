import { readFileSync } from 'fs'
import { resolve } from 'path'
import { solve } from './solve'

// Get the directory path of the current file
const currentDir = __dirname
const input = readFileSync(resolve(currentDir, 'input.txt'), 'utf-8')
const result = solve(input)
console.log('Solution:', result) 