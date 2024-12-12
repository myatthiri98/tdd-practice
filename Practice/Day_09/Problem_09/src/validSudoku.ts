export function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, () => new Set<string>())
  const cols = Array.from({ length: 9 }, () => new Set<string>())
  const boxes = Array.from({ length: 9 }, () => new Set<string>())

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const value = board[r][c]

      if (value === '.') continue

      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)

      if (
        rows[r].has(value) ||
        cols[c].has(value) ||
        boxes[boxIndex].has(value)
      ) {
        return false
      }

      rows[r].add(value)
      cols[c].add(value)
      boxes[boxIndex].add(value)
    }
  }

  return true
}
