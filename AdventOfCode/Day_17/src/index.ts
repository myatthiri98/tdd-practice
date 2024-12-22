import { Computer } from './computer'

const computer = new Computer(46337277, 0, 0) // Initial register values
computer.loadProgram([2, 4, 1, 1, 7, 5, 4, 4, 1, 4, 0, 3, 5, 5, 3, 0]) // Load the program
computer.run() // Execute the program
const result = computer.getOutputs().join(',') // Get the result

console.log(result) // Output the result
