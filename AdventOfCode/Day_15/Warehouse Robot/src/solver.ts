import { WarehouseRobot } from './warehouse'
import { Movement } from '../types'

export function solveWarehouse(input: string): number {
  // Split input into lines and remove any trailing whitespace
  const lines = input.split('\n').map((line) => line.trim())

  // Find the empty line that separates map from movements
  const mapEndIndex = lines.findIndex((line) => line === '')

  // Parse map and movements
  const mapLines = lines.slice(0, mapEndIndex)
  const movements = lines
    .slice(mapEndIndex + 1)
    .join('')
    .replace(/\s/g, '')
    .split('')

  // Create robot and process movements
  const robot = new WarehouseRobot(mapLines)
  console.log('Initial state:')
  robot.printMap()

  // Process each movement
  for (const move of movements) {
    if (isValidMovement(move)) {
      console.log(`\nExecuting move: ${move}`)
      robot.move(move)
      robot.printMap()
      console.log('Current GPS sum:', robot.calculateGPSSum())
    }
  }

  const finalSum = robot.calculateGPSSum()
  console.log('\nFinal state:')
  robot.printMap()
  console.log('Final GPS sum:', finalSum)

  return finalSum
}

function isValidMovement(move: string): move is Movement {
  return ['^', 'v', '<', '>'].includes(move)
}
