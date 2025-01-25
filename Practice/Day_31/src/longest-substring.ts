export function lengthOfLongestSubstring(s: string): number {
  const charMap = new Map<string, number>()
  let maxLength = 0
  let start = 0

  for (let end = 0; end < s.length; end++) {
    const char = s[end]

    if (charMap.has(char)) {
      start = Math.max(charMap.get(char)! + 1, start)
    }

    maxLength = Math.max(maxLength, end - start + 1)
    charMap.set(char, end)
  }

  return maxLength
}
