export const buildGraph = (edges: string[][]): Record<string, string[]> => {
  const graph: Record<string, string[]> = {}

  for (const [a, b] of edges) {
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}

export const shortestPath = (
  edges: string[][],
  nodeA: string,
  nodeB: string,
): number => {
  const graph = buildGraph(edges)
  const queue: [string, number][] = [[nodeA, 0]]
  const visited = new Set([nodeA])

  while (queue.length > 0) {
    const [node, distance] = queue.shift()!

    if (node === nodeB) return distance

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, distance + 1])
      }
    }
  }

  return -1 // No path found
}
