export const pairSum = (
  numbers: number[],
  targetSum: number,
): number[] | undefined => {
  const previousNums: Record<number, number> = {} // Record type to store the index of each number

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    const complement = targetSum - num

    // Check if the complement exists in the previousNums object
    if (complement in previousNums) {
      // Return the indices in the expected order (matching the test cases)
      return [previousNums[complement], i]
    }

    // Otherwise, store the current number and its index
    previousNums[num] = i
  }

  return undefined // Return undefined if no pair is found
}
