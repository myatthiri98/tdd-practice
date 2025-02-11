import { describe, expect, it } from 'vitest'
import { solveNQueens } from '../src/nQueens'

describe('nQueens', () => {
  it.each([
    [
      4,
      [
        ['.Q..', '...Q', 'Q...', '..Q.'],
        ['..Q.', 'Q...', '...Q', '.Q..'],
      ],
    ],
    [1, [['Q']]],
    [2, []], // No solution for 2-queens
    [3, []], // No solution for 3-queens
  ])('should solve %i-queens puzzle', (n, expected) => {
    const result = solveNQueens(n)
    expect(result).toEqual(expected)
  })
})
