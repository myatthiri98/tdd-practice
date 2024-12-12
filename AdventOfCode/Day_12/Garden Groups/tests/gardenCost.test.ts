import { describe, it, expect } from 'vitest'
import { parseMap } from '../src/parseMap'
import { findRegions } from '../src/findRegions'
import { calculateTotalCost } from '../src/calculateTotalCost'

describe('gardenCost', () => {
  it.each([
    {
      input: `
        AAAA
        BBCD
        BBCC
        EEEC
      `,
      expected: 140,
    },
  ])(
    'should calculate the total fencing cost for a map',
    ({ input, expected }) => {
      const grid = parseMap(input)
      const regions = findRegions(grid)

      const convertedRegions = regions.map((region) =>
        region.map(([_, coords]) => coords),
      )

      const totalCost = calculateTotalCost(convertedRegions, grid)

      expect(totalCost).toBe(expected)
    },
  )
})
