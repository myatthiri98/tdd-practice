import { describe, it, expect } from 'vitest'
import { fib } from '../src/fib'

describe('Fibonacci function', () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [10, 55],
    [20, 6765],
    [30, 832040],
    [50, 12586269025],
  ])('fib(%i) should return %i', (n, expected) => {
    expect(fib(n)).toBe(expected)
  })
})
