import { Keypad } from './types'

export const NUMERIC_KEYPAD: Keypad = {
  layout: [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['', '0', 'A'],
  ],
  startPosition: { x: 1, y: 3 },
}

export const DIRECTIONAL_KEYPAD: Keypad = {
  layout: [
    ['', '^', 'A'],
    ['<', 'v', '>'],
  ],
  startPosition: { x: 2, y: 0 },
}
