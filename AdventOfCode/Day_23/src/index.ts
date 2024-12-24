import { readFileSync } from 'fs'
import type { Connection } from './types'

export function readInput(filePath: string): Connection[] {
  return readFileSync(filePath, 'utf-8')
    .trim()
    .split('\n')
    .map((line) => line.trim()) as Connection[]
}

import { LanParty } from './lanParty'

const connections = readInput('AdventOfCode/Day_23/input.txt')
const lanParty = new LanParty()
lanParty.buildGraph(connections)
const { total, withT } = lanParty.findTriangles()

console.log(`Total triangles: ${total}`)
console.log(`Answer (triangles with 't' computers): ${withT}`)
