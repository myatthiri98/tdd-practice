export class Node {
  val: string
  left: Node | null
  right: Node | null

  constructor(val: string) {
    this.val = val
    this.left = null
    this.right = null
  }
}

export const treeIncludes = (root: Node | null, target: string): boolean => {
  if (root === null) return false
  if (root.val === target) return true

  return treeIncludes(root.left, target) || treeIncludes(root.right, target)
}

// export const treeIncludes = (root: Node | null, target: string): boolean => {
//     if (root === null) return false;

//     const queue: Node[] = [root];

//     while (queue.length > 0) {
//       const current = queue.shift()!;

//       if (current.val === target) return true;

//       if (current.left) queue.push(current.left);
//       if (current.right) queue.push(current.right);
//     }

//     return false;
//   };
