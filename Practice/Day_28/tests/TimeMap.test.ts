import { describe, it, expect, beforeEach } from 'vitest'
import { TimeMap } from '../src/TimeMap'

describe('TimeMap', () => {
  let timeMap: TimeMap

  // Before each test, initialize a new TimeMap
  beforeEach(() => {
    timeMap = new TimeMap()
  })

  it.each([
    ['alice', 'happy', 1, 'happy'],
    ['alice', 'sad', 3, 'sad'],
  ])(
    'should store and retrieve key-value pairs correctly for key %s',
    (key, value, timestamp, expected) => {
      timeMap.set(key, value, timestamp)
      expect(timeMap.get(key, timestamp)).toBe(expected)
    },
  )

  it('should return an empty string if no value exists for the key', () => {
    expect(timeMap.get('bob', 1)).toBe('')
  })

  it.each([
    ['test', 'v1', 1, 'v1'],
    ['test', 'v2', 2, 'v2'],
    ['test', 'v3', 3, 'v3'],
    ['test', 'v3', 4, 'v3'],
  ])(
    'should handle multiple values for the same key with different timestamps',
    (key, value, timestamp, expected) => {
      timeMap.set(key, value, timestamp)
      expect(timeMap.get(key, timestamp)).toBe(expected)
    },
  )

  it.each([
    ['key', 'value', 5, 1, ''],
    ['key', 'value', 5, 4, ''],
  ])(
    'should return an empty string if timestamp is before first value',
    (key, value, setTimestamp, getTimestamp, expected) => {
      timeMap.set(key, value, setTimestamp)
      expect(timeMap.get(key, getTimestamp)).toBe(expected)
    },
  )

  it.each([
    ['key', 'value', 1000, 1000, 'value'],
    ['key', 'value', 1000, 999, ''],
    ['key', 'value', 1000, 1001, 'value'],
  ])(
    'should handle timestamps at the boundaries',
    (key, value, setTimestamp, getTimestamp, expected) => {
      timeMap.set(key, value, setTimestamp)
      expect(timeMap.get(key, getTimestamp)).toBe(expected)
    },
  )

  it.each([
    ['key1', 'value1', 1, 2, 'value1'],
    ['key2', 'value2', 2, 2, 'value2'],
  ])(
    'should handle multiple keys',
    (key, value, setTimestamp, getTimestamp, expected) => {
      timeMap.set(key, value, setTimestamp)
      expect(timeMap.get(key, getTimestamp)).toBe(expected)
    },
  )
})
