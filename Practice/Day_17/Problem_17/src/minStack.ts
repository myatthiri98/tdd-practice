export class MinStack {
  private stack: number[] = []
  private minStack: number[] = []

  constructor() {
    // Initialize an empty stack and minStack
  }

  push(val: number): void {
    // Push the value onto the main stack
    this.stack.push(val)

    // Push to minStack if it is the new minimum or if minStack is empty
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val)
    }
  }

  pop(): void {
    // If the popped element is the current minimum, pop it from minStack as well
    const poppedValue = this.stack.pop()
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop()
    }
  }

  top(): number {
    // Return the top element of the stack
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    // Return the current minimum element from the minStack
    return this.minStack[this.minStack.length - 1]
  }
}
