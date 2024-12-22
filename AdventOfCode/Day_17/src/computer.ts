export class Computer {
  private a: number
  private b: number
  private c: number
  private ip: number
  private outputs: number[]
  private program: number[]

  constructor(initialA: number, initialB: number, initialC: number) {
    this.a = initialA
    this.b = initialB
    this.c = initialC
    this.ip = 0
    this.outputs = []
    this.program = []
  }

  loadProgram(program: number[]) {
    this.program = program
    this.ip = 0
    this.outputs = []
  }

  getOutputs(): number[] {
    return this.outputs
  }

  private getComboValue(operand: number): number {
    switch (operand) {
      case 0:
      case 1:
      case 2:
      case 3:
        return operand
      case 4:
        return this.a
      case 5:
        return this.b
      case 6:
        return this.c
      default:
        throw new Error(`Invalid combo operand: ${operand}`)
    }
  }

  private executeInstruction(opcode: number, operand: number): void {
    switch (opcode) {
      case 0: // adv (integer division, result stored in A)
        this.a = Math.floor(this.a / Math.pow(2, this.getComboValue(operand)))
        break
      case 1: // bxl (bitwise XOR, result stored in B)
        this.b = this.b ^ operand
        break
      case 2: // bst (combo operand % 8, result stored in B)
        this.b = this.getComboValue(operand) % 8
        break
      case 3: // jnz (jump to operand if A is not 0)
        if (this.a !== 0) {
          this.ip = operand
          return // Skip normal IP increment
        }
        break
      case 4: // bxc (bitwise XOR of B and C, result stored in B)
        this.b = this.b ^ this.c
        break
      case 5: // out (combo operand % 8 is added to outputs)
        this.outputs.push(this.getComboValue(operand) % 8)
        break
      case 6: // bdv (integer division, result stored in B)
        this.b = Math.floor(this.a / Math.pow(2, this.getComboValue(operand)))
        break
      case 7: // cdv (integer division, result stored in C)
        this.c = Math.floor(this.a / Math.pow(2, this.getComboValue(operand)))
        break
      default:
        throw new Error(`Invalid opcode: ${opcode}`)
    }
    this.ip += 2 // Move to the next instruction (default behavior)
  }

  run(): void {
    while (this.ip < this.program.length) {
      const opcode = this.program[this.ip]
      const operand = this.program[this.ip + 1]
      this.executeInstruction(opcode, operand)
    }
  }
}
