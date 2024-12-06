import { describe, it, expect, beforeEach } from 'vitest'
import {
  findInitialState,
  isObstacle,
  getNextPosition,
  moveGuard,
  countVisitedPositions,
} from '../src/guard'
import { Direction, GuardState } from '../src/types'

describe('Guard Patrol Functions', () => {
  const sampleMap = [
    '....#.....',
    '.........#',
    '..........',
    '..#.......',
    '.......#..',
    '..........',
    '.#..^.....',
    '........#.',
    '#.........',
    '......#...',
  ]

  let initialState: GuardState

  beforeEach(() => {
    initialState = findInitialState(sampleMap)
  })

  it('should find initial guard position and direction', () => {
    expect(initialState.position).toEqual({ x: 4, y: 6 })
    expect(initialState.direction).toBe(Direction.Up)
    expect(initialState.visited.size).toBe(1)
  })

  it('should detect obstacles correctly', () => {
    expect(isObstacle(sampleMap, { x: 4, y: 0 })).toBe(true)
    expect(isObstacle(sampleMap, { x: 4, y: 6 })).toBe(false)
  })

  it('should calculate next position based on direction', () => {
    const pos = { x: 4, y: 6 }
    expect(getNextPosition(pos, Direction.Up)).toEqual({ x: 4, y: 5 })
    expect(getNextPosition(pos, Direction.Right)).toEqual({ x: 5, y: 6 })
  })

  it('should move guard correctly', () => {
    const newState = moveGuard(sampleMap, initialState)
    expect(newState.position).toEqual({ x: 4, y: 5 })
    expect(newState.direction).toBe(Direction.Up)
  })

  it('should count visited positions correctly for sample input', () => {
    const result = countVisitedPositions(sampleMap)
    expect(result).toBe(41)
  })
})
