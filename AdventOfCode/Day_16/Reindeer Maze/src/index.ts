import path from 'path'
import fs from 'fs'
import { findOptimalPaths, countOptimalPathTiles } from './maze'

// Resolve the path to the input file
const inputFile = path.resolve(__dirname, '../input.txt')

// Read the file content
const input = fs.readFileSync(inputFile, 'utf-8')

// Split the input into lines and remove any empty lines
const lines = input.split('\n').filter(Boolean)

// Part 1
console.log('Part 1 - Lowest possible score:', findOptimalPaths(lines).minCost)
// Part 2
console.log(
  'Part 2 - Number of tiles in optimal paths:',
  countOptimalPathTiles(lines),
)
