export function encode(strs: string[]): string {
  if (strs.length === 0) return ''

  // Use length/content format: ${length}${delimiter}${content}
  return strs.map((str) => `${str.length}/${str}`).join('')
}

export function decode(str: string): string[] {
  if (str === '') return []

  const result: string[] = []
  let i = 0

  while (i < str.length) {
    // Find the delimiter position
    const delimiterIndex = str.indexOf('/', i)
    // Get the length of next string
    const length = parseInt(str.slice(i, delimiterIndex))
    // Move pointer past the delimiter
    const start = delimiterIndex + 1
    // Extract the string using the length
    result.push(str.slice(start, start + length))
    // Move pointer to start of next length indicator
    i = start + length
  }

  return result
}
