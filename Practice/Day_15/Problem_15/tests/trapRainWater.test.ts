import { describe, expect, it } from 'vitest'
import { trapRainWater } from '../src/trapRainWater'

describe('trapRainWater', () => {
  it.each([
    {
      height: [0, 2, 0, 3, 1, 0, 1, 3, 2, 1],
      expected: 9,
      description: 'calculates trapped water for standard case',
    },
    {
      height: [4, 2, 0, 3, 2, 5],
      expected: 9,
      description: 'handles multiple pits of water',
    },
    {
      height: [1, 0, 1],
      expected: 1,
      description: 'handles small input with one pit',
    },
    {
      height: [0, 1, 2, 1, 0],
      expected: 0,
      description:
        'no water can be trapped when heights are in ascending and descending order',
    },
    {
      height: [3, 3, 3],
      expected: 0,
      description: 'flat surface with no pits',
    },
    { height: [], expected: 0, description: 'empty height array' },
    { height: [0], expected: 0, description: 'single height element' },
  ])('should $description', ({ height, expected }) => {
    expect(trapRainWater(height)).toBe(expected)
  })
})
