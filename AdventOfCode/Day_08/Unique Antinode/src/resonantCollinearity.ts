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

export function calculateAntinodes(
  antennas: Record<string, [number, number][]>,
): [number, number][] {
  const antinodes: [number, number][] = []

  for (const positions of Object.values(antennas)) {
    if (positions.length < 2) continue

    for (let i = 0; i < positions.length - 1; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const [y1, x1] = positions[i]
        const [y2, x2] = positions[j]

        // Calculate vector between antennas
        const dx = x2 - x1
        const dy = y2 - y1
        const dx_unit = dx / Math.sqrt(dx * dx + dy * dy)
        const dy_unit = dy / Math.sqrt(dx * dx + dy * dy)

        // Calculate distance between antennas
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance === 0) continue

        // First antinode: extend backwards from first antenna by half distance
        const antinode1Y = Math.round(y1 - dy_unit * distance)
        const antinode1X = Math.round(x1 - dx_unit * distance)
        antinodes.push([antinode1Y, antinode1X])

        // Second antinode: extend forwards from second antenna by half distance
        const antinode2Y = Math.round(y2 + dy_unit * distance)
        const antinode2X = Math.round(x2 + dx_unit * distance)
        antinodes.push([antinode2Y, antinode2X])

        console.log(`Antennas: [${y1},${x1}] to [${y2},${x2}]`)
        console.log(`Distance: ${distance}`)
        console.log(`Antinode 1: [${antinode1Y},${antinode1X}]`)
        console.log(`Antinode 2: [${antinode2Y},${antinode2X}]`)
      }
    }
  }

  return antinodes
}

export function countUniqueAntinodes(antinodes: [number, number][]): number {
  // Filter out antinodes that are outside the grid bounds
  const validAntinodes = antinodes.filter(
    ([y, x]) => y >= 0 && y < 50 && x >= 0 && x < 50,
  )

  // Count unique positions
  return new Set(validAntinodes.map(([y, x]) => `${y},${x}`)).size
}
