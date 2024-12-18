import { Position, WarehouseMap, Movement } from '../types'

export class WarehouseRobot {
  private map: WarehouseMap

  constructor(initialMap: string[]) {
    this.map = initialMap.map((row) => row.split(''))
  }

  findRobot(): Position | null {
    for (let row = 0; row < this.map.length; row++) {
      for (let col = 0; col < this.map[row].length; col++) {
        if (this.map[row][col] === '@') {
          return { row, col }
        }
      }
    }
    return null
  }

  private isValidPosition(pos: Position): boolean {
    return (
      pos.row >= 0 &&
      pos.row < this.map.length &&
      pos.col >= 0 &&
      pos.col < this.map[0].length &&
      this.map[pos.row][pos.col] !== '#'
    )
  }

  move(direction: Movement): boolean {
    const robotPos = this.findRobot()
    if (!robotPos) return false

    const directionMap = {
      '^': { row: -1, col: 0 },
      v: { row: 1, col: 0 },
      '<': { col: -1, row: 0 },
      '>': { col: 1, row: 0 },
    }

    const delta = directionMap[direction]
    const newPos = {
      row: robotPos.row + delta.row,
      col: robotPos.col + delta.col,
    }

    if (!this.isValidPosition(newPos)) return false

    if (this.map[newPos.row][newPos.col] === '.') {
      this.map[robotPos.row][robotPos.col] = '.'
      this.map[newPos.row][newPos.col] = '@'
      return true
    }

    if (this.map[newPos.row][newPos.col] === 'O') {
      let pos = newPos
      let shifts = 0
      let spaceAvailable = false

      while (this.isValidPosition(pos)) {
        if (this.map[pos.row][pos.col] === '.') {
          spaceAvailable = true
          break
        }
        if (this.map[pos.row][pos.col] !== 'O') {
          break
        }
        pos = {
          row: pos.row + delta.row,
          col: pos.col + delta.col,
        }
        shifts++
      }

      if (!spaceAvailable) return false

      pos = {
        row: pos.row - delta.row,
        col: pos.col - delta.col,
      }

      for (let i = 0; i < shifts; i++) {
        const nextPos = {
          row: pos.row + delta.row,
          col: pos.col + delta.col,
        }
        this.map[nextPos.row][nextPos.col] = this.map[pos.row][pos.col]
        pos = {
          row: pos.row - delta.row,
          col: pos.col - delta.col,
        }
      }

      this.map[newPos.row][newPos.col] = '@'
      this.map[robotPos.row][robotPos.col] = '.'
      return true
    }

    return false
  }

  calculateGPSSum(): number {
    let sum = 0
    for (let row = 0; row < this.map.length; row++) {
      for (let col = 0; col < this.map[row].length; col++) {
        if (this.map[row][col] === 'O') {
          const actualRow = row - 1
          if (actualRow >= 0) {
            sum += (actualRow + 1) * 100 + col
          }
        }
      }
    }
    return sum
  }

  getMap(): WarehouseMap {
    return this.map.map((row) => [...row])
  }

  printMap(): void {
    console.log(this.map.map((row) => row.join('')).join('\n'))
  }

  printBoxGPSCoordinates(): void {
    for (let row = 0; row < this.map.length; row++) {
      for (let col = 0; col < this.map[row].length; col++) {
        if (this.map[row][col] === 'O') {
          const actualRow = row - 1
          if (actualRow >= 0) {
            const gps = (actualRow + 1) * 100 + col
            console.log(`Box at (${actualRow + 1},${col}): ${gps}`)
          }
        }
      }
    }
  }
}
