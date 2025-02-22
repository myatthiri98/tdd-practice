import { ListNode } from '../tests/mergeKLists.test'

export function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  const minHeap: ListNode[] = []

  // Initialize the heap with the head of each list, skip empty lists
  for (let list of lists) {
    if (list && (list.val !== 0 || list.next !== null)) {
      minHeap.push(list)
    }
  }

  // Create a dummy node to simplify handling the result list
  const dummy = new ListNode()
  let current = dummy

  // Helper function to heapify the list (min heap)
  const heapify = () => {
    minHeap.sort((a, b) => a.val - b.val)
  }

  // Process the heap
  while (minHeap.length > 0) {
    // Get the smallest node (heap root)
    heapify()
    const node = minHeap.shift()! // Pop the smallest node

    current.next = node // Add the node to the result
    current = current.next // Move the current pointer to the new node

    // If there's more nodes in the list, add the next one to the heap
    if (node.next) {
      minHeap.push(node.next)
    }
  }

  return dummy.next
}
