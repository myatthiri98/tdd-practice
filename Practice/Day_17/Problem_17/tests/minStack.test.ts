import { describe, expect, it } from 'vitest'
import { MinStack } from '../src/minStack'

describe('MinStack', () => {
  it('should perform operations correctly', () => {
    const minStack = new MinStack()
    // Test push and getMin
    minStack.push(1)
    expect(minStack.getMin()).toBe(1) // After pushing 1, the minimum value should be 1

    minStack.push(2)
    expect(minStack.getMin()).toBe(1) // After pushing 2, the minimum value should still be 1

    minStack.push(0)
    expect(minStack.getMin()).toBe(0) // After pushing 0, the minimum value should be 0

    // Test pop
    minStack.pop()
    expect(minStack.getMin()).toBe(1) // After popping, the minimum value should be 1 again

    // Test top
    expect(minStack.top()).toBe(2) // The top element should be 2 after the pop

    // Test getMin
    expect(minStack.getMin()).toBe(1) // The minimum value should still be 1
  })
})
