import { describe, expect, it } from 'vitest'
import { copyRandomList, Node } from '../src/copyRandomList'

function createLinkedList(arr: [number, number | null][]): Node | null {
  if (!arr.length) return null

  const nodes = arr.map(([val]) => new Node(val))
  arr.forEach(([_, randomIndex], i) => {
    nodes[i].next = nodes[i + 1] || null
    nodes[i].random = randomIndex !== null ? nodes[randomIndex] : null
  })

  return nodes[0]
}

function linkedListToArray(head: Node | null): [number, number | null][] {
  if (!head) return []
  const nodes: Node[] = []
  const indexMap = new Map<Node, number>()

  let current: Node | null = head
  let i = 0
  while (current) {
    nodes.push(current)
    indexMap.set(current, i++)
    current = current.next
  }

  return nodes.map((node) => [
    node.val,
    node.random ? indexMap.get(node.random) ?? null : null,
  ])
}

describe('copyRandomList', () => {
  it.each<[string, [number, number | null][], [number, number | null][]]>([
    [
      'Example 1',
      [
        [3, null],
        [7, 3],
        [4, 0],
        [5, 1],
      ],
      [
        [3, null],
        [7, 3],
        [4, 0],
        [5, 1],
      ],
    ],
    [
      'Example 2',
      [
        [1, null],
        [2, 2],
        [3, 2],
      ],
      [
        [1, null],
        [2, 2],
        [3, 2],
      ],
    ],
    ['Empty list', [], []],
  ])('%s', (_, input, expected) => {
    const head = createLinkedList(input)
    const copiedHead = copyRandomList(head)
    expect(linkedListToArray(copiedHead)).toEqual(expected)
  })
})
