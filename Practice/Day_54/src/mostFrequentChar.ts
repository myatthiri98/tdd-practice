export const mostFrequentChar = (s: string): string | null => {
  const count: Record<string, number> = {}

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0
    }
    count[char] += 1
  }

  let best: string | null = null
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char
    }
  }

  return best
}
