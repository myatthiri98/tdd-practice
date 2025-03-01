export function uncompress(s: string): string {
  let result = ''
  let i = 0

  while (i < s.length) {
    let numStr = ''
    while (s[i] >= '0' && s[i] <= '9') {
      numStr += s[i]
      i++
    }
    const num = parseInt(numStr, 10)
    const char = s[i]
    result += char.repeat(num)
    i++
  }

  return result
}
