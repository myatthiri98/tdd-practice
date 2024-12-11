// Tests
import { describe, it, expect } from 'vitest'
import { calculateTrailheadScore, sumTrailheadScores } from '../src/lavaIsland'

type Grid = (number | '.')[][]

describe('Lava Island Hiking Trails', () => {
  const mapTestCases = [
    {
      map: [
        ['.', '.', '.', '0', '.', '.', '.'],
        ['.', '.', '.', '1', '.', '.', '.'],
        ['.', '.', '.', '2', '.', '.', '.'],
        ['6', '5', '4', '3', '4', '5', '6'],
        ['7', '.', '.', '.', '.', '.', '7'],
        ['8', '.', '.', '.', '.', '.', '8'],
        ['9', '.', '.', '.', '.', '.', '9'],
      ],
      trailheads: [[0, 3]],
      scores: [2],
      total: 2,
    },
    {
      map: [
        ['1', '0', '.', '.', '9', '.', '.'],
        ['2', '.', '.', '.', '8', '.', '.'],
        ['3', '.', '.', '.', '7', '.', '.'],
        ['4', '5', '6', '7', '6', '5', '4'],
        ['.', '.', '.', '8', '.', '.', '3'],
        ['.', '.', '.', '9', '.', '.', '2'],
        ['.', '.', '.', '.', '.', '0', '1'],
      ],
      trailheads: [
        [0, 1],
        [6, 5],
      ],
      scores: [1, 2],
      total: 3,
    },
  ]

  it.each(mapTestCases)(
    'calculates scores correctly',
    ({ map, trailheads, scores, total }) => {
      const parsedMap: Grid = map.map((row) =>
        row.map((cell) => (cell === '.' ? '.' : Number(cell))),
      )

      const actualScores = (trailheads as [number, number][]).map((head) =>
        calculateTrailheadScore(parsedMap, head),
      )
      expect(actualScores).toEqual(scores)
      expect(sumTrailheadScores(parsedMap)).toBe(total)
    },
  )
})
