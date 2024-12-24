import { Location } from './types'

export const NUM_PAD = new Map([
  ['7', new Location(0, 0)],
  ['8', new Location(1, 0)],
  ['9', new Location(2, 0)],
  ['4', new Location(0, 1)],
  ['5', new Location(1, 1)],
  ['6', new Location(2, 1)],
  ['1', new Location(0, 2)],
  ['2', new Location(1, 2)],
  ['3', new Location(2, 2)],
  ['0', new Location(1, 3)],
  ['A', new Location(2, 3)],
])

export const KEY_PAD = new Map([
  ['^', new Location(1, 0)],
  ['a', new Location(2, 0)],
  ['<', new Location(0, 1)],
  ['v', new Location(1, 1)],
  ['>', new Location(2, 1)],
])

export const DIRECTIONS = new Map([
  ['^', new Location(0, -1)],
  ['v', new Location(0, 1)],
  ['<', new Location(-1, 0)],
  ['>', new Location(1, 0)],
])
