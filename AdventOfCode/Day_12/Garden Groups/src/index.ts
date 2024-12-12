import path from 'path'
import fs from 'fs'
import { parseMap } from './parseMap'
import { findRegions } from './findRegions'
import { calculateTotalCost } from './calculateTotalCost'

// Read the input file
const inputFile = path.resolve(__dirname, '../input.txt')
const input = fs.readFileSync(inputFile, 'utf-8')

const grid = parseMap(input)
const regions = findRegions(grid)

const convertedRegions = regions.map((region) =>
  region.map(([_, coords]) => coords),
)

const totalCost = calculateTotalCost(convertedRegions, grid)

console.log(`Total fencing cost:`, totalCost)
