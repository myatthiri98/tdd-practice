import { describe, it, expect } from 'vitest'
import { Connection } from '../src/types'
import { LanParty } from '../src/lanParty'

describe('LanParty', () => {
  const sampleInput: Connection[] = [
    'kh-tc',
    'qp-kh',
    'de-cg',
    'ka-co',
    'yn-aq',
    'qp-ub',
    'cg-tb',
    'vc-aq',
    'tb-ka',
    'wh-tc',
    'yn-cg',
    'kh-ub',
    'ta-co',
    'de-co',
    'tc-td',
    'tb-wq',
    'wh-td',
    'ta-ka',
    'td-qp',
    'aq-cg',
    'wq-ub',
    'ub-vc',
    'de-ta',
    'wq-aq',
    'wq-vc',
    'wh-yn',
    'ka-de',
    'kh-ta',
    'co-tc',
    'wh-qp',
    'tb-vc',
    'td-yn',
  ]

  it('should build graph correctly', () => {
    const lanParty = new LanParty()
    lanParty.buildGraph(['a-b', 'b-c'])
    expect(lanParty['graph'].get('a')?.has('b')).toBe(true)
    expect(lanParty['graph'].get('b')?.has('c')).toBe(true)
  })

  it('should find correct number of triangles', () => {
    const lanParty = new LanParty()
    lanParty.buildGraph(sampleInput)
    const { total } = lanParty.findTriangles()
    expect(total).toBe(12)
  })

  it('should find correct number of triangles with t computers', () => {
    const lanParty = new LanParty()
    lanParty.buildGraph(sampleInput)
    const { withT } = lanParty.findTriangles()
    expect(withT).toBe(7)
  })

  it('should handle empty input', () => {
    const lanParty = new LanParty()
    lanParty.buildGraph([])
    const result = lanParty.findTriangles()
    expect(result.total).toBe(0)
    expect(result.withT).toBe(0)
  })
})
