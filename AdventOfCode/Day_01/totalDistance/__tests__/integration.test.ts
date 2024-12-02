import { describe, it, expect } from 'vitest'
import { solve } from '../src/solve'
import { readFileSync } from 'fs'
import path from 'path'

describe('Day 1 - Total Distance Integration', () => {
  it('should solve example case correctly', () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3`
    expect(solve(input)).toBe(11)
  })

  it('should solve actual input', () => {
    const inputPath = path.join(__dirname, '..', 'input.txt')
    const input = readFileSync(inputPath, 'utf-8')
    const result = solve(input)
    expect(result).toBeGreaterThan(0)
    console.log('Solution:', result)
  })
}) 