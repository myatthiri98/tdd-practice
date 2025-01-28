export function minWindow(s: string, t: string): string {
  if (t.length > s.length || t.length === 0) return ''

  const tFreq = new Map<string, number>()
  for (const char of t) {
    tFreq.set(char, (tFreq.get(char) || 0) + 1)
  }

  let left = 0
  let right = 0
  let required = tFreq.size
  let formed = 0
  const windowCounts = new Map<string, number>()
  let minLength = Infinity
  let minLeft = 0

  while (right < s.length) {
    const char = s[right]
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1)

    if (tFreq.has(char) && windowCounts.get(char) === tFreq.get(char)) {
      formed++
    }

    while (left <= right && formed === required) {
      const char = s[left]

      if (right - left + 1 < minLength) {
        minLength = right - left + 1
        minLeft = left
      }

      windowCounts.set(char, windowCounts.get(char)! - 1)
      if (tFreq.has(char) && windowCounts.get(char)! < tFreq.get(char)!) {
        formed--
      }

      left++
    }

    right++
  }

  return minLength === Infinity ? '' : s.substring(minLeft, minLeft + minLength)
}
