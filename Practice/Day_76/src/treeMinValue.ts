export class Node {
  val: number
  left: Node | null
  right: Node | null

  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// export const treeMinValue = (root: Node | null): number => {
//   if (!root) throw new Error('Tree must not be empty')

//   let minVal = root.val

//   if (root.left !== null) {
//     minVal = Math.min(minVal, treeMinValue(root.left))
//   }

//   if (root.right !== null) {
//     minVal = Math.min(minVal, treeMinValue(root.right))
//   }

//   return minVal
// }

export const treeMinValue = (root: Node | null): number => {
  if (!root) throw new Error('Tree must not be empty')

  let minVal = root.val
  const queue: Node[] = [root]

  while (queue.length > 0) {
    const current = queue.shift()!

    minVal = Math.min(minVal, current.val)

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return minVal
}
