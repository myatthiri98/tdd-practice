function evaluateGate(op: string, input1: number, input2: number): number {
  switch (op) {
    case 'AND':
      return input1 & input2
    case 'OR':
      return input1 | input2
    case 'XOR':
      return input1 ^ input2
    default:
      throw new Error(`Unknown operation: ${op}`)
  }
}

// Parses the input file and extracts wire values and gate definitions
export function parseInput(input: string): {
  wireValues: Record<string, number>
  gateDefinitions: string[]
} {
  const wireValues: Record<string, number> = {}
  const gateDefinitions: string[] = []

  input.split('\n').forEach((line) => {
    line = line.trim()
    if (!line) return

    if (line.includes(':')) {
      const [wire, value] = line.split(':')
      wireValues[wire.trim()] = parseInt(value.trim(), 10)
    } else if (line.includes('->')) {
      gateDefinitions.push(line)
    }
  })

  return { wireValues, gateDefinitions }
}

// Simulates the logic circuit
export function simulateCircuit(
  wireValues: Record<string, number>,
  gateDefinitions: string[],
): Record<string, number> {
  while (gateDefinitions.length > 0) {
    const remainingGates: string[] = []

    for (const definition of gateDefinitions) {
      const parts = definition.split(' ')
      if (parts.length === 5) {
        const [input1, op, input2, , output] = parts

        if (
          wireValues[input1] !== undefined &&
          wireValues[input2] !== undefined
        ) {
          wireValues[output] = evaluateGate(
            op,
            wireValues[input1],
            wireValues[input2],
          )
        } else {
          remainingGates.push(definition)
        }
      } else {
        throw new Error(`Invalid gate definition: ${definition}`)
      }
    }

    if (remainingGates.length === gateDefinitions.length) {
      throw new Error(
        'No progress made in evaluating gates. Check input values and definitions.',
      )
    }

    gateDefinitions = remainingGates
  }

  return wireValues
}

// Computes the final output from wires starting with 'z'
export function computeOutput(wireValues: Record<string, number>): number {
  const outputWires = Object.keys(wireValues)
    .filter((wire) => wire.startsWith('z'))
    .sort((a, b) => parseInt(b.slice(1)) - parseInt(a.slice(1))) // Sort descending by bit position

  const binaryNumber = outputWires.map((wire) => wireValues[wire]).join('')
  return parseInt(binaryNumber, 2)
}
