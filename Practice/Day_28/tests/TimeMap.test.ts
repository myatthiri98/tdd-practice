import { describe, it, expect } from 'vitest'
import { TimeMap } from '../src/TimeMap'

// Define types for our operations
type SetOperation = ['set', string, string, number]
type GetOperation = ['get', string, null, number]
type Operation = SetOperation | GetOperation

// Define type for test case
interface TestCase {
  name: string
  operations: Operation[]
  expected: (string | undefined)[]
}

describe('TimeMap', () => {
  it.each<TestCase>([
    {
      name: 'Example from the problem description',
      operations: [
        ['set', 'alice', 'happy', 1],
        ['get', 'alice', null, 1],
        ['get', 'alice', null, 2],
        ['set', 'alice', 'sad', 3],
        ['get', 'alice', null, 3],
      ],
      expected: [undefined, 'happy', 'happy', undefined, 'sad'],
    },
    {
      name: 'Empty key returns empty string',
      operations: [['get', 'nonexistent', null, 1]],
      expected: [''],
    },
    {
      name: 'Multiple values with timestamps',
      operations: [
        ['set', 'test', 'v1', 1],
        ['set', 'test', 'v2', 2],
        ['set', 'test', 'v3', 3],
        ['get', 'test', null, 1],
        ['get', 'test', null, 2],
        ['get', 'test', null, 3],
        ['get', 'test', null, 4],
      ],
      expected: [undefined, undefined, undefined, 'v1', 'v2', 'v3', 'v3'],
    },
    {
      name: 'Timestamp before first value',
      operations: [
        ['set', 'key', 'value', 5],
        ['get', 'key', null, 1],
        ['get', 'key', null, 4],
      ],
      expected: [undefined, '', ''],
    },
    {
      name: 'Multiple keys',
      operations: [
        ['set', 'key1', 'value1', 1],
        ['set', 'key2', 'value2', 2],
        ['get', 'key1', null, 2],
        ['get', 'key2', null, 2],
      ],
      expected: [undefined, undefined, 'value1', 'value2'],
    },
    {
      name: 'Handles timestamps at boundaries',
      operations: [
        ['set', 'key', 'value', 1000], // Max timestamp
        ['get', 'key', null, 1000],
        ['get', 'key', null, 999],
        ['get', 'key', null, 1001],
      ],
      expected: [undefined, 'value', '', 'value'],
    },
    {
      name: 'Handles min/max constraint values',
      operations: [
        ['set', 'a', '1', 1], // Min timestamp
        ['get', 'a', null, 1],
        ['set', 'a', '2', 1000], // Max timestamp
        ['get', 'a', null, 1000],
      ],
      expected: [undefined, '1', undefined, '2'],
    },
  ])('$name', ({ operations, expected }) => {
    const timeMap = new TimeMap()
    const results = operations.map((operation) => {
      const [method, key, value, timestamp] = operation
      if (method === 'set') {
        return timeMap.set(key, value as string, timestamp)
      } else {
        return timeMap.get(key, timestamp)
      }
    })
    expect(results).toEqual(expected)
  })
})
