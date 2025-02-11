export function solveNQueens(n: number): string[][] {
  const result: string[][] = []

  const isValid = (board: number[], row: number, col: number): boolean => {
    for (let r = 0; r < row; r++) {
      // Check if the column or diagonal is attacked
      if (
        board[r] === col ||
        board[r] - r === col - row ||
        board[r] + r === col + row
      ) {
        return false
      }
    }
    return true
  }

  const backtrack = (row: number, board: number[]) => {
    if (row === n) {
      const solution: string[] = []
      for (let i = 0; i < n; i++) {
        let rowStr = '.'.repeat(board[i]) + 'Q' + '.'.repeat(n - board[i] - 1)
        solution.push(rowStr)
      }
      result.push(solution)
      return
    }

    for (let col = 0; col < n; col++) {
      if (isValid(board, row, col)) {
        board[row] = col // Place queen
        backtrack(row + 1, board) // Move to next row
        board[row] = -1 // Backtrack
      }
    }
  }

  const board: number[] = Array(n).fill(-1)
  backtrack(0, board)

  return result
}
