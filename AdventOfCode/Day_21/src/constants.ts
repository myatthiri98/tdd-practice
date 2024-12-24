import { Keypad } from './types'

export const NUMERIC_KEYPAD: Keypad = {
  layout: [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['', '0', 'A'],
  ],
  startPosition: { row: 3, col: 2 }, // Starting at 'A'
}

export const DIRECTIONAL_KEYPAD: Keypad = {
  layout: [
    ['', '^', 'A'],
    ['<', 'v', '>'],
  ],
  startPosition: { row: 0, col: 2 }, // Starting at 'A'
}
