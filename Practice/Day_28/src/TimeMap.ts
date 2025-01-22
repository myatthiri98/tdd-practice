export class TimeMap {
  // Store for key-value pairs: Map<string, Array<[value: string, timestamp: number]>>
  private store: Map<string, Array<[string, number]>>

  constructor() {
    this.store = new Map()
  }

  // Store a key-value pair with a timestamp
  set(key: string, value: string, timestamp: number): void {
    // If key doesn't exist, initialize it with an empty array
    if (!this.store.has(key)) {
      this.store.set(key, [])
    }

    // Push the value and timestamp as a tuple into the array
    this.store.get(key)?.push([value, timestamp])
  }

  // Get the most recent value for the key that is before or at the given timestamp
  get(key: string, timestamp: number): string {
    const values = this.store.get(key) // Get the values for the given key

    // If no values exist for the key, return an empty string
    if (!values || values.length === 0) {
      return ''
    }

    let left = 0
    let right = values.length - 1

    // If the timestamp is earlier than the first value's timestamp, return an empty string
    if (timestamp < values[0][1]) {
      return ''
    }

    // If the timestamp is later or equal to the latest value's timestamp, return that value
    if (timestamp >= values[right][1]) {
      return values[right][0]
    }

    // Binary search to find the most recent value at or before the timestamp
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const [value, ts] = values[mid]

      if (ts === timestamp) {
        return value
      }

      if (ts < timestamp) {
        // If the next timestamp is greater than the target, return the current value
        if (mid + 1 < values.length && values[mid + 1][1] > timestamp) {
          return value
        }
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    // If no exact match, return the most recent value before the timestamp
    return values[right][0]
  }
}
