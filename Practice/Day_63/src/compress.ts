export function compress(s: string): string {
  let result = ''
  let i = 0

  while (i < s.length) {
    let count = 1 // Track the number of consecutive occurrences
    while (i + 1 < s.length && s[i] === s[i + 1]) {
      count++
      i++
    }

    // Append count only if it's greater than 1
    result += (count > 1 ? count : '') + s[i]
    i++
  }

  return result
}
