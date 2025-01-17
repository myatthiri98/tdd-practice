export default function searchMatrix(
  matrix: number[][],
  target: number,
): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false // Edge case: empty matrix
  }

  const m = matrix.length // Number of rows
  const n = matrix[0].length // Number of columns

  let low = 0
  let high = m * n - 1 // Total number of elements - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const midElement = matrix[Math.floor(mid / n)][mid % n] // Convert mid to matrix indices

    if (midElement === target) {
      return true // Target found
    }

    if (midElement < target) {
      low = mid + 1 // Search in the right half
    } else {
      high = mid - 1 // Search in the left half
    }
  }

  return false // Target not found
}
