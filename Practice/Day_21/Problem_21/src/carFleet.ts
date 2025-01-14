export function carFleet(
  target: number,
  position: number[],
  speed: number[],
): number {
  const n = position.length
  if (n === 0) return 0

  // Pair up each car's position with its speed
  const cars = position.map((pos, i) => [pos, speed[i]] as [number, number])

  // Sort cars by starting position in descending order
  cars.sort((a, b) => b[0] - a[0])

  // Calculate the time each car takes to reach the target
  const times = cars.map(([pos, spd]) => (target - pos) / spd)

  let fleets = 0
  let prevTime = 0

  for (const time of times) {
    // A new fleet is formed if the current car takes more time than the previous
    if (time > prevTime) {
      fleets++
      prevTime = time
    }
  }

  return fleets
}
