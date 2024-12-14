export type Position = { x: number; y: number }
export type Velocity = { x: number; y: number }
export type Grid = { width: number; height: number }
export type Robot = { position: Position; velocity: Velocity }

export function getNewPosition(
  position: Position,
  velocity: Velocity,
  grid: Grid,
): Position {
  const x = (position.x + velocity.x) % grid.width // Move in x-direction and wrap around.
  const y = (position.y + velocity.y) % grid.height // Move in y-direction and wrap around.

  // Ensure the position is non-negative after wrapping.
  return {
    x: x < 0 ? x + grid.width : x,
    y: y < 0 ? y + grid.height : y,
  }
}

export function simulateMovement(
  position: Position,
  velocity: Velocity,
  grid: Grid,
  seconds: number,
): Position[] {
  const positions: Position[] = [] // Store all positions over time.
  let currentPosition = position

  for (let i = 0; i < seconds; i++) {
    currentPosition = getNewPosition(currentPosition, velocity, grid)
    positions.push(currentPosition) // Track each new position.
  }

  return positions
}

export function countRobotsInQuadrants(
  robots: Robot[],
  grid: Grid,
  seconds: number,
): { Q1: number; Q2: number; Q3: number; Q4: number } {
  const quadrantCounts = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 }
  const centerX = Math.floor(grid.width / 2)
  const centerY = Math.floor(grid.height / 2)

  // Create a copy of robots to avoid modifying the original
  const simulatedRobots = robots.map((robot) => ({
    position: { ...robot.position },
    velocity: { ...robot.velocity },
  }))

  // Simulate movement for each robot
  for (let i = 0; i < seconds; i++) {
    simulatedRobots.forEach((robot) => {
      robot.position = getNewPosition(robot.position, robot.velocity, grid)
    })
  }

  // Count robots in each quadrant based on final positions
  simulatedRobots.forEach((robot) => {
    // Calculate relative position from center
    const relX = robot.position.x - centerX
    const relY = robot.position.y - centerY

    // Skip robots on center lines
    if (relX === 0 || relY === 0) return

    // In the problem's coordinate system:
    // Q1: top-right (x > centerX, y < centerY)
    // Q2: top-left (x < centerX, y < centerY)
    // Q3: bottom-left (x < centerX, y > centerY)
    // Q4: bottom-right (x > centerX, y > centerY)
    if (robot.position.x > centerX && robot.position.y < centerY)
      quadrantCounts.Q1++
    else if (robot.position.x < centerX && robot.position.y < centerY)
      quadrantCounts.Q2++
    else if (robot.position.x < centerX && robot.position.y > centerY)
      quadrantCounts.Q3++
    else if (robot.position.x > centerX && robot.position.y > centerY)
      quadrantCounts.Q4++
  })

  return quadrantCounts
}
