import { Connection, Graph } from './types'

export class LanParty {
  private graph: Graph = new Map()

  buildGraph(connections: Connection[]): void {
    connections.forEach((conn) => {
      const [a, b] = conn.split('-')
      if (!this.graph.has(a)) this.graph.set(a, new Set())
      if (!this.graph.has(b)) this.graph.set(b, new Set())
      this.graph.get(a)!.add(b)
      this.graph.get(b)!.add(a)
    })
  }

  private getCombinations(arr: string[], size: number): string[][] {
    const result: string[][] = []

    function combine(start: number, combo: string[]) {
      if (combo.length === size) {
        result.push([...combo])
        return
      }

      for (let i = start; i < arr.length; i++) {
        combo.push(arr[i])
        combine(i + 1, combo)
        combo.pop()
      }
    }

    combine(0, [])
    return result
  }

  findTriangles(): { total: number; withT: number } {
    const nodes = Array.from(this.graph.keys())
    const triangles = new Set<string>()

    this.getCombinations(nodes, 3).forEach(([a, b, c]) => {
      if (
        this.graph.get(a)?.has(b) &&
        this.graph.get(b)?.has(c) &&
        this.graph.get(a)?.has(c)
      ) {
        triangles.add([a, b, c].sort().join(','))
      }
    })

    const total = triangles.size
    const withT = Array.from(triangles).filter((triangle) =>
      triangle.split(',').some((node) => node.startsWith('t')),
    ).length

    return { total, withT }
  }
}
