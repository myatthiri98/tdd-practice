type Block = {
  type: 'file' | 'space'
  size: number
  id?: number
}

export function parseDiskMap(diskMap: string): Block[] {
  const result: Block[] = []
  let isFile = true
  let fileId = 0

  // Clean the input - remove any newlines or extra characters
  const cleanInput = diskMap.trim()

  for (const char of cleanInput) {
    const size = parseInt(char, 10)
    if (!isNaN(size)) {
      // Only process valid numbers
      if (isFile) {
        result.push({ type: 'file', size, id: fileId++ })
      } else {
        result.push({ type: 'space', size })
      }
      isFile = !isFile
    }
  }
  return result
}

export function compactFiles(disk: Block[]): Block[] {
  // Convert to array representation where each number represents file ID
  // and -1 represents free space
  let state: number[] = []

  // Expand blocks to individual positions
  for (const block of disk) {
    for (let i = 0; i < block.size; i++) {
      state.push(block.type === 'file' ? block.id! : -1)
    }
  }

  // Process files from right to left
  for (let i = state.length - 1; i >= 0; i--) {
    if (state[i] >= 0) {
      // If this is a file
      // Find leftmost free space
      let targetPos = 0
      while (targetPos < i && state[targetPos] !== -1) {
        targetPos++
      }

      // If we found a free space before current position, move the file
      if (targetPos < i && state[targetPos] === -1) {
        state[targetPos] = state[i]
        state[i] = -1
      }
    }
  }

  // Convert back to blocks, excluding trailing space
  const result: Block[] = []
  let currentId: number | null = null
  let count = 0

  for (let i = 0; i < state.length; i++) {
    const id = state[i]

    if (id !== currentId) {
      if (count > 0 && currentId !== -1) {
        result.push({ type: 'file', size: count, id: currentId! })
      }
      currentId = id
      count = 1
    } else {
      count++
    }
  }

  // Add the last file block if exists
  if (count > 0 && currentId !== -1) {
    result.push({ type: 'file', size: count, id: currentId! })
  }

  return result
}

export function calculateChecksum(disk: Block[]): number {
  let checksum = 0
  let position = 0

  for (const block of disk) {
    if (block.type === 'file') {
      // For each position in the file block
      for (let i = 0; i < block.size; i++) {
        checksum += position * block.id!
        position++
      }
    } else {
      position += block.size
    }
  }

  return checksum
}
