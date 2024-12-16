export type Location = { y: number; x: number }
export type Box = { y: number; x: number; symbol: string }

export const run = (
  fileContents: string[],
): { part1: number; part2: number } => {
  const result1 = part1(fileContents)
  const result2 = part2(fileContents)
  return { part1: result1, part2: result2 }
}

const part1 = (fileContents: string[]): number => {
  const data = parseInput(fileContents, false)
  return runSim(
    data.walls,
    data.boxes,
    data.location,
    data.moves,
    data.height,
    data.width,
  )
}

const part2 = (fileContents: string[]): number => {
  const data = parseInput(fileContents, true)
  return runSim(
    data.walls,
    data.boxes,
    data.location,
    data.moves,
    data.height,
    data.width,
  )
}

export const parseInput = (fileContents: string[], part2: boolean) => {
  const walls = new Set<string>()
  const boxes = new Map<string, Box>()
  const moves: string[] = []
  let location: Location = { y: 0, x: 0 }
  let gridMode = true // Start by parsing the grid
  let height = 0
  const width = part2 ? fileContents[0].length * 2 : fileContents[0].length

  for (let l = 0; l < fileContents.length; l++) {
    if (fileContents[l] === '') {
      gridMode = false // Switch to parsing moves
      height = l
      continue
    }

    const line = fileContents[l].split('')
    const lineLength = part2 ? line.length * 2 : line.length

    if (gridMode) {
      for (let c = 0; c < lineLength; part2 ? (c += 2) : c++) {
        const current = part2 ? line[c / 2] : line[c]

        if (current === '@') location = { y: l, x: c }
        else if (current === '#') {
          walls.add(`${l},${c}`)
          if (part2) walls.add(`${l},${c + 1}`)
        } else if (current === 'O') {
          boxes.set(`${l},${c}`, { y: l, x: c, symbol: 'O' })
          if (part2) boxes.set(`${l},${c + 1}`, { y: l, x: c + 1, symbol: ']' })
        }
      }
    } else {
      moves.push(...line) // Parse moves
    }
  }

  return { walls, boxes, location, moves, height, width }
}

export const runSim = (
  walls: Set<string>,
  boxes: Map<string, Box>,
  location: Location,
  moves: string[],
  height: number,
  width: number,
): number => {
  for (const move of moves) {
    const offset =
      move === '^'
        ? { y: -1, x: 0 }
        : move === 'v'
        ? { y: 1, x: 0 }
        : move === '<'
        ? { y: 0, x: -1 }
        : { y: 0, x: 1 }

    const nextLocation = { y: location.y + offset.y, x: location.x + offset.x }
    const nextKey = `${nextLocation.y},${nextLocation.x}`

    if (walls.has(nextKey)) continue

    if (boxes.has(nextKey)) {
      const box = boxes.get(nextKey)!
      const nextBoxKey = `${box.y + offset.y},${box.x + offset.x}`
      if (walls.has(nextBoxKey) || boxes.has(nextBoxKey)) continue

      // Move the box
      boxes.delete(nextKey)
      boxes.set(nextBoxKey, {
        ...box,
        y: box.y + offset.y,
        x: box.x + offset.x,
      })
    }

    // Move the robot
    location = nextLocation
  }

  // Calculate the result: Sum of box positions
  return [...boxes.values()]
    .filter((box) => box.symbol === 'O')
    .reduce((sum, box) => sum + box.y * 100 + box.x, 0)
}
