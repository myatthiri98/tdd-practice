export function largestRectangleArea(heights: number[]): number {
  const stack: number[] = []
  let maxArea = 0

  // Iterate through all the bars, including an additional iteration for cleanup
  for (let i = 0; i <= heights.length; i++) {
    const currentHeight = i < heights.length ? heights[i] : 0

    // Process the stack and calculate the area if current bar height is less than top of stack
    while (
      stack.length > 0 &&
      currentHeight < heights[stack[stack.length - 1]]
    ) {
      const height = heights[stack.pop()!] // Pop the top of the stack to calculate area
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
      maxArea = Math.max(maxArea, height * width)
    }

    // Push the current index onto the stack
    stack.push(i)
  }

  return maxArea
}
