import { calculatePerimeter } from './calculatePerimeter'

export function calculateTotalCost(
  regions: [number, number][][],
  grid: string[][],
): number {
  let totalCost = 0

  // For each region, calculate its area and perimeter
  for (const region of regions) {
    const area = region.length
    const perimeter = calculatePerimeter(region, grid)

    // Total cost for the region is area * perimeter
    totalCost += area * perimeter
  }

  return totalCost
}
