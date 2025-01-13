export function dailyTemperatures(temperatures: number[]): number[] {
  const result = Array(temperatures.length).fill(0)
  const stack: number[] = [] // Stack to store indices of temperatures

  temperatures.forEach((currentTemp, currentIndex) => {
    while (
      stack.length > 0 &&
      currentTemp > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!
      result[prevIndex] = currentIndex - prevIndex
    }
    stack.push(currentIndex)
  })

  return result
}
