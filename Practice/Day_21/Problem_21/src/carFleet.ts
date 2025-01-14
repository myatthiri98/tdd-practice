export function carFleet(
  target: number,
  position: number[],
  speed: number[],
): number {
  // If there are no cars, return 0 fleets.
  if (position.length === 0) return 0

  // Pair up each car's position with its speed, then sort them by position descending.
  const cars = position
    .map((pos, i) => ({ pos, spd: speed[i] }))
    .sort((a, b) => b.pos - a.pos)

  // Calculate the time each car takes to reach the target and track fleets.
  let fleets = 0
  let lastFleetTime = 0

  for (const { pos, spd } of cars) {
    const timeToTarget = (target - pos) / spd
    // If the current car takes more time than the last fleet's time, it's a new fleet.
    if (timeToTarget > lastFleetTime) {
      fleets++
      lastFleetTime = timeToTarget
    }
  }

  return fleets
}
