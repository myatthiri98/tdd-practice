export const buildGraph = (edges: string[][]): Record<string, string[]> => {
  const graph: Record<string, string[]> = {}

  for (const [a, b] of edges) {
    if (!graph[a]) graph[a] = []
    if (!graph[b]) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}

export const hasPath = (
  graph: Record<string, string[]>,
  src: string,
  dst: string,
  visited: Set<string>,
): boolean => {
  if (src === dst) return true
  if (visited.has(src)) return false

  visited.add(src)

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true
    }
  }

  return false
}

export const undirectedPath = (
  edges: string[][],
  nodeA: string,
  nodeB: string,
): boolean => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
}
