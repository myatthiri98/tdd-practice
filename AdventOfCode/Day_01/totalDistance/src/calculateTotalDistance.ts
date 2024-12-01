type NumberArray = readonly number[]

export function calculateTotalDistance(left: NumberArray, right: NumberArray): number {
  if (left.length !== right.length) {
    throw new Error('Lists must be of equal length')
  }

  const sortedLeft = [...left].sort((a, b) => a - b)
  const sortedRight = [...right].sort((a, b) => a - b)

  let totalDistance = 0
  const len = sortedLeft.length
  
  for (let i = 0; i < len; i++) {
    totalDistance += Math.abs(sortedLeft[i] - sortedRight[i])
  }
  
  return totalDistance
}
