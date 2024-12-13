type ClawMachine = {
  buttonA: { x: number; y: number }
  buttonB: { x: number; y: number }
  prize: { x: number; y: number }
}

export function parseInput(lines: string[]): ClawMachine[] {
  const machines: ClawMachine[] = []

  for (let i = 0; i < lines.length; i += 4) {
    // Skip empty lines
    if (!lines[i]) continue

    // Parse Button A
    const [aX, aY] = lines[i]
      .match(/X\+(\d+), Y\+(\d+)/)!
      .slice(1)
      .map(Number)

    // Parse Button B
    const [bX, bY] = lines[i + 1]
      .match(/X\+(\d+), Y\+(\d+)/)!
      .slice(1)
      .map(Number)

    // Parse Prize
    const [pX, pY] = lines[i + 2]
      .match(/X=(\d+), Y=(\d+)/)!
      .slice(1)
      .map(Number)

    machines.push({
      buttonA: { x: aX, y: aY },
      buttonB: { x: bX, y: bY },
      prize: { x: pX, y: pY },
    })
  }

  return machines
}
