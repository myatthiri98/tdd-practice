export class Location {
  constructor(public x: number, public y: number) {}

  delta(other: Location): [number, number] {
    return [other.x - this.x, other.y - this.y]
  }

  add(other: Location): Location {
    return new Location(this.x + other.x, this.y + other.y)
  }
}
