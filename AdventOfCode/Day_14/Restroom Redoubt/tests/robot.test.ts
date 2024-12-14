import { describe, it, expect } from 'vitest'
import {
  getNewPosition,
  simulateMovement,
  countRobotsInQuadrants,
  Robot,
} from '../src/robot'

describe('Robot movement', () => {
  it('calculates the new position correctly after 1 second', () => {
    const position = { x: 2, y: 4 }
    const velocity = { x: 3, y: -3 }
    const grid = { width: 11, height: 7 }

    const newPosition = getNewPosition(position, velocity, grid)

    expect(newPosition).toEqual({ x: 5, y: 1 })
  })

  it('wraps around when moving out of bounds', () => {
    const position = { x: 10, y: 6 }
    const velocity = { x: 3, y: 2 }
    const grid = { width: 11, height: 7 }

    const newPosition = getNewPosition(position, velocity, grid)

    expect(newPosition).toEqual({ x: 2, y: 1 }) // Wrapped around
  })

  it('simulates movement over multiple seconds', () => {
    const position = { x: 2, y: 4 }
    const velocity = { x: 2, y: -3 }
    const grid = { width: 11, height: 7 }

    const positions = simulateMovement(position, velocity, grid, 5)

    expect(positions).toEqual([
      { x: 4, y: 1 },
      { x: 6, y: 5 },
      { x: 8, y: 2 },
      { x: 10, y: 6 },
      { x: 1, y: 3 }, // Wraps around
    ])
  })

  it('counts robots in each quadrant after 100 seconds', () => {
    const robots: Robot[] = [
      { position: { x: 6, y: 2 }, velocity: { x: 1, y: -1 } }, // Will end up in Q1
      { position: { x: 2, y: 2 }, velocity: { x: -1, y: -1 } }, // Will end up in Q2
      { position: { x: 2, y: 6 }, velocity: { x: -1, y: 1 } }, // Will end up in Q3
      { position: { x: 5, y: 5 }, velocity: { x: 0, y: 0 } }, // On center line, not counted
    ]

    const grid = { width: 10, height: 10 }
    const counts = countRobotsInQuadrants(robots, grid, 100)

    console.log('Final robot positions:', robots)
    console.log('Counts by quadrant:', counts)

    expect(counts).toEqual({ Q1: 1, Q2: 1, Q3: 1, Q4: 0 })
  })
})
