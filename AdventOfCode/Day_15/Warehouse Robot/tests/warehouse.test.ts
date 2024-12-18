import { describe, it, expect } from 'vitest'
import { WarehouseRobot } from '../src/warehouse'
import { Movement } from '../types'

describe('WarehouseRobot', () => {
  const smallExample = [
    '########',
    '#..O.O.#',
    '##@.O..#',
    '#...O..#',
    '#.#.O..#',
    '#...O..#',
    '#......#',
    '########',
  ]

  const movements = '<^^>>>vv<v>>v<<'

  it('should find robot position', () => {
    const robot = new WarehouseRobot(smallExample)
    expect(robot.findRobot()).toEqual({ row: 2, col: 2 })
  })

  it('should move robot to empty space', () => {
    const robot = new WarehouseRobot(smallExample)
    expect(robot.move('>')).toBe(true)
    const newPos = robot.findRobot()
    expect(newPos).toEqual({ row: 2, col: 3 })
  })

  it('should not move robot through walls', () => {
    const robot = new WarehouseRobot(smallExample)
    expect(robot.move('<')).toBe(false)
    const pos = robot.findRobot()
    expect(pos).toEqual({ row: 2, col: 2 })
  })

  it('should push box if space available', () => {
    const map = ['###', '@O.', '###']
    const robot = new WarehouseRobot(map)
    expect(robot.move('>')).toBe(true)
    const newMap = robot.getMap()
    expect(newMap[1].join('')).toBe('.@O')
  })

  it('should solve small example correctly', () => {
    const robot = new WarehouseRobot(smallExample)
    console.log('Initial state:')
    robot.printMap()

    // Process each movement
    for (const move of movements) {
      console.log(`\nAfter move ${move}:`)
      robot.move(move as Movement)
      robot.printMap()
    }

    const sum = robot.calculateGPSSum()
    console.log('\nFinal GPS coordinates:')
    robot.printBoxGPSCoordinates()
    console.log(`Sum: ${sum}`)

    // According to the problem description, the sum should be 2028
    expect(sum).toBe(2028)
  })
})
