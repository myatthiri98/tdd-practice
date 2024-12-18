import path from 'path'
import { solveWarehouse } from './solver'
import fs from 'fs'

const inputFile = path.resolve(__dirname, '../input.txt')
const input = fs.readFileSync(inputFile, 'utf-8')
console.log('Day 15 Result:', solveWarehouse(input))
