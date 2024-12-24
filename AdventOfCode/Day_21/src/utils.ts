import { Location } from './types'
import { DIRECTIONS } from './constants'

export function movesBetweenPositions(
  start: Location,
  end: Location,
  isKeypad: boolean = true,
): string[] {
  if (start.x === end.x && start.y === end.y) {
    return ['a']
  }

  const [deltaX, deltaY] = start.delta(end)
  const steps: string[] = []

  if (deltaX < 0) {
    steps.push('<'.repeat(Math.abs(deltaX)))
  } else {
    steps.push('>'.repeat(Math.abs(deltaX)))
  }

  if (deltaY < 0) {
    steps.push('^'.repeat(Math.abs(deltaY)))
  } else {
    steps.push('v'.repeat(Math.abs(deltaY)))
  }

  const validMoves: string[] = []
  const allMoves = permutations(steps.join(''))

  for (const perm of allMoves) {
    let currentLocation = start
    let valid = true

    for (const move of perm) {
      const direction = DIRECTIONS.get(move)!
      currentLocation = currentLocation.add(direction)

      if (
        (isKeypad && currentLocation.x === 0 && currentLocation.y === 0) ||
        (!isKeypad && currentLocation.x === 0 && currentLocation.y === 3)
      ) {
        valid = false
        break
      }
    }

    if (valid) {
      validMoves.push(perm + 'a')
    }
  }

  return Array.from(new Set(validMoves))
}

function* permutations(str: string): Generator<string> {
  if (str.length <= 1) {
    yield str
    return
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const remainingChars = str.slice(0, i) + str.slice(i + 1)
    for (const perm of permutations(remainingChars)) {
      yield char + perm
    }
  }
}
