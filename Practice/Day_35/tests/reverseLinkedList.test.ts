import { describe, it, expect } from 'vitest'
import {
  createLinkedList,
  linkedListToArray,
  reverseList,
} from '../src/reverseLinkedList'

describe('reverseList', () => {
  it.each([
    { input: [0, 1, 2, 3], expected: [3, 2, 1, 0] },
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [1, 2], expected: [2, 1] },
  ])('should reverse $input to $expected', ({ input, expected }) => {
    const linkedList = createLinkedList(input)
    const reversed = reverseList(linkedList)
    expect(linkedListToArray(reversed)).toEqual(expected)
  })
})
