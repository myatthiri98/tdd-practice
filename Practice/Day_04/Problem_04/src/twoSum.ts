export function twoSum(nums: Array<number>, target: number): [number, number] {
  const seenNumbers: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    const numberWeNeed = target - currentNum

    if (seenNumbers.has(numberWeNeed)) {
      return [seenNumbers.get(numberWeNeed)!, i]
    }

    seenNumbers.set(currentNum, i)
  }

  return [-1, -1]
}
