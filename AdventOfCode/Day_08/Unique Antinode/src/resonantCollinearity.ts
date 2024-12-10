export function parseInput(input: string): string[][] {
  return input
    .trim()
    .split('\n')
    .map((line) => line.split(''))
}

export function findAntennas(
  grid: string[][],
): Record<string, [number, number][]> {
  const antennas: Record<string, [number, number][]> = {}
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const cell = grid[y][x]
      if (cell !== '.') {
        if (!antennas[cell]) antennas[cell] = []
        antennas[cell].push([y, x])
      }
    }
  }
  return antennas
}

function areCollinear(
  p1: [number, number],
  p2: [number, number],
  p3: [number, number],
): boolean {
  const [y1, x1] = p1
  const [y2, x2] = p2
  const [y3, x3] = p3

  // Calculate area of triangle formed by three points
  // If area is 0, points are collinear
  return Math.abs(y1 * (x2 - x3) + y2 * (x3 - x1) + y3 * (x1 - x2)) === 0
}

export function calculateAntinodesPartTwo(
  antennas: Record<string, [number, number][]>,
): [number, number][] {
  const antinodes = new Set<string>()

  // For each frequency group
  for (const positions of Object.values(antennas)) {
    if (positions.length < 2) continue

    // Check each point in the grid
    for (let y = 0; y < 50; y++) {
      for (let x = 0; x < 50; x++) {
        const point: [number, number] = [y, x]

        // Count how many pairs of antennas this point is collinear with
        for (let i = 0; i < positions.length; i++) {
          for (let j = i + 1; j < positions.length; j++) {
            if (areCollinear(positions[i], positions[j], point)) {
              antinodes.add(`${y},${x}`)
              break
            }
          }
        }
      }
    }
  }

  // Convert back to array of coordinates
  return Array.from(antinodes).map((str) => {
    const [y, x] = str.split(',').map(Number)
    return [y, x]
  })
}

export function countUniqueAntinodesPartTwo(
  antinodes: [number, number][],
): number {
  return new Set(antinodes.map(([y, x]) => `${y},${x}`)).size
}
