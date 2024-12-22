export function findShortestPath(
  gridSize: number,
  bytePositions: [number, number][],
): number {
  // Only use the first 1024 bytes
  const firstKilobyte = bytePositions.slice(0, 1024)

  // Use a Set to track corrupted positions
  const corrupted = new Set<string>()
  for (const [x, y] of firstKilobyte) {
    corrupted.add(`${x},${y}`)
  }

  // BFS setup
  const directions = [
    [0, 1], // Down
    [1, 0], // Right
    [0, -1], // Up
    [-1, 0], // Left
  ]
  const queue: [number, number, number][] = [[0, 0, 0]] // [x, y, steps]
  const visited = new Set<string>()
  visited.add('0,0')

  // BFS loop
  while (queue.length > 0) {
    const [x, y, steps] = queue.shift()!

    // Check if we reached the destination
    if (x === gridSize - 1 && y === gridSize - 1) {
      return steps
    }

    // Explore neighbors
    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy
      const key = `${nx},${ny}`

      // Check boundaries, corruption, and if already visited
      if (
        nx >= 0 &&
        nx < gridSize &&
        ny >= 0 &&
        ny < gridSize &&
        !corrupted.has(key) &&
        !visited.has(key)
      ) {
        queue.push([nx, ny, steps + 1])
        visited.add(key)
      }
    }
  }

  // If no path is found, return -1
  return -1
}
