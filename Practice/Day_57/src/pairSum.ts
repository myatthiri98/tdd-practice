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
      return [i, previousNums[complement]] // Return the current index and the stored index of the complement
    }

    // Otherwise, store the current number and its index
    previousNums[num] = i
  }

  return undefined // Return undefined if no pair is found
}
