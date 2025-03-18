export const hasPath = (
  graph: Record<string, string[]>,
  src: string,
  dst: string,
): boolean => {
  // If src node doesn't exist in graph, return false
  if (!(src in graph)) return false

  if (src === dst) return true // Base case

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) {
      return true
    }
  }

  return false
}
