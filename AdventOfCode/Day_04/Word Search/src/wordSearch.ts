export function countXMASOccurrences(grid: string[]): number {
  const target = 'XMAS';
  const reverseTarget = 'SAMX';

  return (
    countHorizontal(grid, target, reverseTarget) +
    countVertical(grid, target, reverseTarget) +
    countDiagonals(grid, target, reverseTarget)
  );
}

function countHorizontal(grid: string[], target: string, reverseTarget: string): number {
  return grid.reduce(
    (count, row) =>
      count + countPatternOccurrences(row, target) + countPatternOccurrences(row, reverseTarget),
    0
  );
}

function countVertical(grid: string[], target: string, reverseTarget: string): number {
  const numCols = grid[0]?.length || 0;
  let count = 0;

  for (let col = 0; col < numCols; col++) {
    const column = grid.map((row) => row[col]).join('');
    count += countPatternOccurrences(column, target);
    count += countPatternOccurrences(column, reverseTarget);
  }

  return count;
}

function countDiagonals(grid: string[], target: string, reverseTarget: string): number {
  const numRows = grid.length;
  const numCols = grid[0]?.length || 0;
  let count = 0;

  for (let row = 0; row < numRows; row++) {
    count += countDiagonal(grid, row, 0, true, target, reverseTarget);
    count += countDiagonal(grid, row, numCols - 1, false, target, reverseTarget);
  }

  for (let col = 1; col < numCols - 1; col++) {
    count += countDiagonal(grid, 0, col, true, target, reverseTarget);
    count += countDiagonal(grid, 0, col, false, target, reverseTarget);
  }

  return count;
}

function countDiagonal(
  grid: string[],
  startRow: number,
  startCol: number,
  goRight: boolean,
  target: string,
  reverseTarget: string
): number {
  const diagonal = getDiagonal(grid, startRow, startCol, goRight);
  return countPatternOccurrences(diagonal, target) + countPatternOccurrences(diagonal, reverseTarget);
}

function getDiagonal(grid: string[], startRow: number, startCol: number, goRight: boolean): string {
  const numRows = grid.length;
  const numCols = grid[0]?.length || 0;
  let diagonal = '';

  while (startRow < numRows && startCol >= 0 && startCol < numCols) {
    diagonal += grid[startRow][startCol];
    startRow++;
    startCol += goRight ? 1 : -1;
  }

  return diagonal;
}

function countPatternOccurrences(str: string, pattern: string): number {
  let count = 0;
  let index = 0;

  while ((index = str.indexOf(pattern, index)) !== -1) {
    count++;
    index++;
  }

  return count;
}
