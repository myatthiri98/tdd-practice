export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false
  }

  const createFrequencyMap = (str: string): Record<string, number> => {
    const frequencyMap: Record<string, number> = {}
    for (const char of str) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1
    }
    return frequencyMap
  }

  const s1Map = createFrequencyMap(s1)
  const s2Map: Record<string, number> = {}

  for (let i = 0; i < s1.length; i++) {
    s2Map[s2[i]] = (s2Map[s2[i]] || 0) + 1
  }

  const matches = (
    map1: Record<string, number>,
    map2: Record<string, number>,
  ): boolean => {
    return Object.keys(map1).every((key) => map1[key] === map2[key])
  }
  if (matches(s1Map, s2Map)) return true

  for (let i = s1.length; i < s2.length; i++) {
    const startChar = s2[i - s1.length]
    const endChar = s2[i]
    s2Map[startChar]--
    if (s2Map[startChar] === 0) delete s2Map[startChar]

    s2Map[endChar] = (s2Map[endChar] || 0) + 1
    if (matches(s1Map, s2Map)) return true
  }
  return false
}
