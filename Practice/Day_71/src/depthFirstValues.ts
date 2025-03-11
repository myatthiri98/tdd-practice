export class TreeNode<T> {
  val: T
  left: TreeNode<T> | null
  right: TreeNode<T> | null

  constructor(
    val: T,
    left: TreeNode<T> | null = null,
    right: TreeNode<T> | null = null,
  ) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export const depthFirstValues = <T>(root: TreeNode<T> | null): T[] => {
  if (!root) return []
  return [
    root.val,
    ...depthFirstValues(root.left),
    ...depthFirstValues(root.right),
  ]
}

// export const depthFirstValues = <T>(root: TreeNode<T> | null): T[] => {
//     if (!root) return [];
//     return [root.val, ...depthFirstValues(root.left), ...depthFirstValues(root.right)];
//   };
