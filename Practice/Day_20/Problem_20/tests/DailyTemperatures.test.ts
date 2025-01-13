import { describe, it, expect } from 'vitest'
import { dailyTemperatures } from '../src/DailyTemperatures'

describe('dailyTemperatures', () => {
  it.each([
    {
      temperatures: [30, 38, 30, 36, 35, 40, 28],
      expected: [1, 4, 1, 2, 1, 0, 0],
      description: 'a simple case',
    },
    {
      temperatures: [22, 21, 20],
      expected: [0, 0, 0],
      description: 'all zeros when temperatures decrease or remain the same',
    },
    {
      temperatures: [50],
      expected: [0],
      description: 'a single element array',
    },
    {
      temperatures: [30, 30, 30, 30],
      expected: [0, 0, 0, 0],
      description: 'all equal temperatures',
    },
  ])(
    'should return the correct result for $description',
    ({ temperatures, expected }) => {
      expect(dailyTemperatures(temperatures)).toEqual(expected)
    },
  )
})
