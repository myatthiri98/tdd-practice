import { readFileSync } from 'fs'
import { findFirstBlockingByte, findShortestPath } from './shortestPath'

// Function to read and parse byte positions from a file
function readBytePositions(filePath: string): [number, number][] {
  const data = readFileSync(filePath, 'utf-8')
  return data
    .trim()
    .split('\n')
    .map((line) => {
      const [x, y] = line.split(',').map(Number)
      return [x, y] as [number, number]
    })
}

// Read byte positions from input.txt
const filePath = 'AdventOfCode/Day_18/input.txt'
const gridSize = 71
const bytePositions = readBytePositions(filePath)

console.log('Byte positions:', bytePositions)

// Find the shortest path
const result = findShortestPath(gridSize, bytePositions)

console.log('Shortest path steps:', result)

// Usage:
const part2Result = findFirstBlockingByte(71, bytePositions)
console.log(
  `First blocking byte coordinates: ${part2Result[0]},${part2Result[1]}`,
)
