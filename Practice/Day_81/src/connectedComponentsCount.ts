export const connectedComponentsCount = (
  graph: Record<number, number[]>,
): number => {
  const visited = new Set<number>()
  let count = 0

  for (const node in graph) {
    const nodeNum = Number(node)
    if (!visited.has(nodeNum)) {
      explore(graph, nodeNum, visited)
      count++
    }
  }
  return count
}

const explore = (
  graph: Record<number, number[]>,
  node: number,
  visited: Set<number>,
): void => {
  if (visited.has(node)) return
  visited.add(node)

  for (const neighbor of graph[node]) {
    explore(graph, neighbor, visited)
  }
}
