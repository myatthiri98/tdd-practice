import path from 'path'
import fs from 'fs'
import { parseInput } from './parseInput'
import { countRobotsInQuadrants } from './robot'

// Read the input file
const inputFile = path.resolve(__dirname, '../input.txt')
const input = fs.readFileSync(inputFile, 'utf-8')

const robots = parseInput(input)
const grid = { width: 101, height: 103 }
const quadrants = countRobotsInQuadrants(robots, grid, 100)

// Calculate safety factor by multiplying quadrant counts
const safetyFactor = Object.values(quadrants).reduce(
  (acc, count) => acc * count,
  1,
)

console.log('Quadrant counts:', quadrants)
console.log('Safety factor:', safetyFactor)
