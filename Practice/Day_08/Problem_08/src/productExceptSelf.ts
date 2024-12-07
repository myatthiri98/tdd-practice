export function productExceptSelf(nums: number[]): number[] {
  const length = nums.length
  const products = new Array<number>(length).fill(1)

  // Calculate products of all elements to the left
  let leftProduct = 1
  for (let i = 0; i < length; i++) {
    products[i] = leftProduct
    leftProduct *= nums[i]
  }

  // Calculate products of all elements to the right and combine
  let rightProduct = 1
  for (let i = length - 1; i >= 0; i--) {
    products[i] *= rightProduct
    rightProduct *= nums[i]
  }

  // Handle -0 cases by converting to 0
  return products.map((product) => (product === 0 ? 0 : product))
}
