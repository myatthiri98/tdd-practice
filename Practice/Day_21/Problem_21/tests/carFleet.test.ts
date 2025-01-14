import { describe, it, expect } from 'vitest'
import { carFleet } from '../src/carFleet'

describe('carFleet', () => {
  it.each([
    [10, [1, 4], [3, 2], 1],
    [10, [4, 1, 0, 7], [2, 2, 1, 1], 3],
    [10, [], [], 0],
    [10, [5], [2], 1],
    [12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3], 3],
  ])(
    'should return %i fleets for target = %i, position = %j, speed = %j',
    (target, position, speed, expected) => {
      expect(carFleet(target, position, speed)).toBe(expected)
    },
  )
})
