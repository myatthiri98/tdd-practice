import path from 'path'
import fs from 'fs'
import { simulateBlinks } from './simulateBlinks'

// Read the input file
const inputFile = path.resolve(__dirname, '../input.txt')
const input = fs.readFileSync(inputFile, 'utf-8')

// Parse the input into an array of numbers
const initialStones = input.trim().split(/\s+/).map(Number)

// Run the function and print the result
const blinks = 25 // Number of blinks
const finalStones = simulateBlinks(initialStones, blinks)

console.log(`Number of stones after ${blinks} blinks:`, finalStones.length)
