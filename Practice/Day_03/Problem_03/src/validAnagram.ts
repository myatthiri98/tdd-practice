export function validAnagram(firstString: string, secondString: string): boolean {
  if (firstString.length !== secondString.length) return false

  const charMap = new Map<string, number>()

  // Count frequencies of first string
  for (const char of firstString) {
    charMap.set(char, (charMap.get(char) || 0) + 1)
  }

  // Decrement frequencies for second string
  for (const char of secondString) {
    if (!charMap.has(char)) return false
    const count = charMap.get(char)!
    if (count === 0) return false
    charMap.set(char, count - 1)
  }

  return true
}
