import { parseDiskMap, compactFiles, calculateChecksum } from './diskFragmenter'
import fs from 'fs'

const input = fs.readFileSync(
  'AdventOfCode/Day_09/Disk Fragmenter/input.txt',
  'utf-8',
)
// Clean the input
const cleanInput = input.split('\n').filter((line) => !line.startsWith('//'))[0]

const parsedDisk = parseDiskMap(cleanInput)
const compactedDisk = compactFiles(parsedDisk)
const checksum = calculateChecksum(compactedDisk)

console.log('Final Checksum:', checksum)
