export function anagrams(s1: string, s2: string): boolean {
  // Normalize by removing spaces and converting to lowercase
  const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase()

  const str1 = normalize(s1)
  const str2 = normalize(s2)

  if (str1.length !== str2.length) return false

  const count: Record<string, number> = {}

  for (const char of str1) {
    count[char] = (count[char] || 0) + 1
  }

  for (const char of str2) {
    if (!count[char]) {
      return false
    }
    count[char] -= 1
  }

  return Object.values(count).every((val) => val === 0)
}
