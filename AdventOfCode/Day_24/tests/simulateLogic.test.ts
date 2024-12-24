import { describe, it, expect } from 'vitest'
import {
  computeOutput,
  parseInput,
  simulateCircuit,
} from '../src/simulateLogic'

describe('Logic Circuit Simulator', () => {
  const exampleInput = `
      x00: 1
      x01: 1
      x02: 1
      y00: 0
      y01: 1
      y02: 0

      x00 AND y00 -> z00
      x01 XOR y01 -> z01
      x02 OR y02 -> z02
    `

  it('should parse input correctly', () => {
    const { wireValues, gateDefinitions } = parseInput(exampleInput)
    expect(wireValues).toEqual({
      x00: 1,
      x01: 1,
      x02: 1,
      y00: 0,
      y01: 1,
      y02: 0,
    })
    expect(gateDefinitions).toEqual([
      'x00 AND y00 -> z00',
      'x01 XOR y01 -> z01',
      'x02 OR y02 -> z02',
    ])
  })

  it('should simulate the circuit correctly', () => {
    const { wireValues, gateDefinitions } = parseInput(exampleInput)
    const finalWireValues = simulateCircuit(wireValues, gateDefinitions)
    expect(finalWireValues.z00).toBe(0)
    expect(finalWireValues.z01).toBe(0)
    expect(finalWireValues.z02).toBe(1)
  })

  it('should compute the correct output', () => {
    const { wireValues, gateDefinitions } = parseInput(exampleInput)
    const finalWireValues = simulateCircuit(wireValues, gateDefinitions)
    const output = computeOutput(finalWireValues)
    expect(output).toBe(4)
  })
})
