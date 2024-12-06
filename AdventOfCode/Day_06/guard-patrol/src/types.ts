export type Position = {
  x: number
  y: number
}

export enum Direction {
  Up = 0,
  Right = 1,
  Down = 2,
  Left = 3,
}

export type GuardState = {
  position: Position
  direction: Direction
  visited: Set<string>
}
