import fs from 'fs'
import path from 'path'
import { parseMap, sumTrailheadScores } from './lavaIsland'

// Read the input file
const inputFile = path.resolve(__dirname, '../input.txt')
const input = fs.readFileSync(inputFile, 'utf-8')

// Parse the input into a usable map
const parsedMap = parseMap(input)

// Calculate the total score of all trailheads
const totalScore = sumTrailheadScores(parsedMap)

// Output the result
console.log(`The total score of all trailheads is: ${totalScore}`)
