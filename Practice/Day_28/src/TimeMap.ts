// First, define the TimeMap class with basic structure
export class TimeMap {
  private store: Map<string, Array<[string, number]>>

  constructor() {
    this.store = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.store.has(key)) {
      this.store.set(key, [])
    }
    this.store.get(key)!.push([value, timestamp])
  }

  get(key: string, timestamp: number): string {
    const values = this.store.get(key)
    if (!values || values.length === 0) return ''

    // Binary search to find the most recent value
    let left = 0
    let right = values.length - 1

    // If timestamp is smaller than the earliest timestamp
    if (timestamp < values[0][1]) return ''

    // If timestamp is larger than or equal to the latest timestamp
    if (timestamp >= values[right][1]) return values[right][0]

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const [value, ts] = values[mid]

      if (ts === timestamp) {
        return value
      }

      if (ts < timestamp) {
        if (mid + 1 < values.length && values[mid + 1][1] > timestamp) {
          return value
        }
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return values[right][0]
  }
}
