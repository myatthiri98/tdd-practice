import { Robot } from './robot'

export function parseInput(input: string): Robot[] {
  return input
    .trim()
    .split('\n')
    .map((line) => {
      const [pos, vel] = line.split(' v=')
      const [px, py] = pos.slice(2).split(',').map(Number)
      const [vx, vy] = vel.split(',').map(Number)

      return {
        position: { x: px, y: py },
        velocity: { x: vx, y: vy },
      }
    })
}
