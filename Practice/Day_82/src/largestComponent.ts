// export function largestComponent(graph: Record<string, string[]>): number {
//   const visited = new Set<string>()
//   let maxSize = 0

//   function dfs(node: string): number {
//     if (visited.has(node)) return 0 // Already counted
//     visited.add(node)

//     let size = 1 // Count this node
//     for (const neighbor of graph[node] || []) {
//       size += dfs(neighbor) // Visit connected nodes
//     }
//     return size
//   }

//   for (const node in graph) {
//     if (!visited.has(node)) {
//       maxSize = Math.max(maxSize, dfs(node))
//     }
//   }

//   return maxSize
// }

//BFS Implementation

// export function largestComponent(graph: Record<string, string[]>): number {
//   const visited = new Set<string>()
//   let maxSize = 0

//   for (const node in graph) {
//     if (!visited.has(node)) {
//       let size = 0
//       const queue: string[] = [node] // Start BFS

//       while (queue.length > 0) {
//         const current = queue.shift()! // Remove first element
//         if (visited.has(current)) continue

//         visited.add(current)
//         size++

//         for (const neighbor of graph[current]) {
//           if (!visited.has(neighbor)) {
//             queue.push(neighbor) // Add unvisited neighbors
//           }
//         }
//       }

//       maxSize = Math.max(maxSize, size)
//     }
//   }

//   return maxSize
// }

// Iterative DFS Implementation

export function largestComponent(graph: Record<string, string[]>): number {
  const visited = new Set<string>()
  let maxSize = 0

  for (const node in graph) {
    if (!visited.has(node)) {
      let size = 0
      const stack: string[] = [node] // Start DFS with a stack

      while (stack.length > 0) {
        const current = stack.pop()! // Remove last element
        if (visited.has(current)) continue

        visited.add(current)
        size++

        for (const neighbor of graph[current]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor) // Add unvisited neighbors
          }
        }
      }

      maxSize = Math.max(maxSize, size)
    }
  }

  return maxSize
}
