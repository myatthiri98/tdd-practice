import {
  parseDiskMap,
  compactFiles,
  calculateChecksum,
} from '../src/diskFragmenter'
import { describe, it, expect } from 'vitest'

interface Block {
  type: 'file' | 'space'
  size: number
  id?: number
}

describe('Disk Fragmenter', () => {
  it('parseDiskMap should correctly parse the input', () => {
    const input = '12345'
    const output = parseDiskMap(input)
    expect(output).toEqual([
      { type: 'file', size: 1, id: 0 },
      { type: 'space', size: 2 },
      { type: 'file', size: 3, id: 1 },
      { type: 'space', size: 4 },
      { type: 'file', size: 5, id: 2 },
    ] as Block[])
  })

  it('compactFiles should move file blocks to the leftmost free space', () => {
    const input: Block[] = [
      { type: 'file', size: 1, id: 0 },
      { type: 'space', size: 2 },
      { type: 'file', size: 3, id: 1 },
      { type: 'space', size: 4 },
      { type: 'file', size: 5, id: 2 },
    ]
    const output = compactFiles(input)
    expect(output).toEqual([
      { type: 'file', size: 1, id: 0 },
      { type: 'file', size: 2, id: 2 },
      { type: 'file', size: 3, id: 1 },
      { type: 'file', size: 3, id: 2 },
    ] as Block[])
  })

  it('calculateChecksum should correctly compute the checksum', () => {
    const input: Block[] = [
      { type: 'file', size: 1, id: 0 },
      { type: 'file', size: 2, id: 2 },
      { type: 'file', size: 3, id: 1 },
      { type: 'file', size: 3, id: 2 },
    ]
    const output = calculateChecksum(input)
    expect(output).toBe(60)
  })
})
