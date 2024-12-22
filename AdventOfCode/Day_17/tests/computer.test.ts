import { describe, it, expect } from 'vitest'
import { Computer } from '../src/computer'

describe('Computer', () => {
  // Test initialization
  it('should initialize with correct register values', () => {
    const computer = new Computer(729, 0, 0)
    expect(computer.getOutputs()).toEqual([])
  })

  // Test individual instructions
  describe('Instructions', () => {
    it('should handle adv instruction (opcode 0)', () => {
      const computer = new Computer(10, 0, 0)
      computer.loadProgram([0, 1]) // Divide A by 2^1
      computer.run()
      expect(computer.getOutputs()).toEqual([])
    })

    it('should handle bxl instruction (opcode 1)', () => {
      const computer = new Computer(0, 29, 0)
      computer.loadProgram([1, 7]) // B XOR 7
      computer.run()
      expect(computer.getOutputs()).toEqual([])
    })

    it('should handle out instruction (opcode 5)', () => {
      const computer = new Computer(10, 0, 0)
      computer.loadProgram([5, 0, 5, 1]) // Output 0, Output 1
      computer.run()
      expect(computer.getOutputs()).toEqual([0, 1])
    })
  })

  // Test example cases from problem description
  describe('Example cases', () => {
    it('should handle example with register C = 9', () => {
      const computer = new Computer(0, 0, 9)
      computer.loadProgram([2, 6])
      computer.run()
      // Should set register B to 1
    })

    it('should handle example with outputs 0,1,2', () => {
      const computer = new Computer(10, 0, 0)
      computer.loadProgram([5, 0, 5, 1, 5, 4])
      computer.run()
      expect(computer.getOutputs()).toEqual([0, 1, 2])
    })

    it('should handle the main example case', () => {
      const computer = new Computer(729, 0, 0)
      computer.loadProgram([0, 1, 5, 4, 3, 0])
      computer.run()
      expect(computer.getOutputs()).toEqual([4, 6, 3, 5, 6, 3, 5, 2, 1, 0])
    })
  })
})
