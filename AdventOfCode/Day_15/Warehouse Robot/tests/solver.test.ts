import { describe, it, expect } from 'vitest'
import { solveWarehouse } from '../src/solver'

describe('solveWarehouse', () => {
  it('should solve small example correctly', () => {
    const input = `########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

<^^>>>vv<v>>v<<`

    expect(solveWarehouse(input)).toBe(2028)
  })
})
