import { describe, it, expect } from 'vitest'
import {
  getNewPosition,
  simulateMovement,
  countRobotsInQuadrants,
  Robot,
} from '../src/robot'

describe('Robot movement', () => {
  it.each([
    {
      position: { x: 2, y: 4 },
      velocity: { x: 3, y: -3 },
      grid: { width: 11, height: 7 },
      expected: { x: 5, y: 1 },
      description: 'calculates the new position correctly after 1 second',
    },
    {
      position: { x: 10, y: 6 },
      velocity: { x: 3, y: 2 },
      grid: { width: 11, height: 7 },
      expected: { x: 2, y: 1 },
      description: 'wraps around when moving out of bounds',
    },
  ])('$description', ({ position, velocity, grid, expected }) => {
    const newPosition = getNewPosition(position, velocity, grid)
    expect(newPosition).toEqual(expected)
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

  it.each([
    {
      robots: [
        { position: { x: 6, y: 2 }, velocity: { x: 1, y: -1 } }, // Will end up in Q1
        { position: { x: 2, y: 2 }, velocity: { x: -1, y: -1 } }, // Will end up in Q2
        { position: { x: 2, y: 6 }, velocity: { x: -1, y: 1 } }, // Will end up in Q3
        { position: { x: 5, y: 5 }, velocity: { x: 0, y: 0 } }, // On center line, not counted
      ],
      grid: { width: 10, height: 10 },
      seconds: 100,
      expected: { Q1: 1, Q2: 1, Q3: 1, Q4: 0 },
      description: 'counts robots in each quadrant after 100 seconds',
    },
  ])('$description', ({ robots, grid, seconds, expected }) => {
    const counts = countRobotsInQuadrants(robots, grid, seconds)

    console.log('Final robot positions:', robots)
    console.log('Counts by quadrant:', counts)

    expect(counts).toEqual(expected)
  })
})
