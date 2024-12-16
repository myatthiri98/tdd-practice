import path from 'path'
import fs from 'fs'
import { parseInput } from './warehouseRobot'
import { run } from './warehouseRobot'

const inputFile = path.resolve(__dirname, '../input.txt')
const input = fs.readFileSync(inputFile, 'utf-8').split('\n')

const result = run(input)

console.log(result)
