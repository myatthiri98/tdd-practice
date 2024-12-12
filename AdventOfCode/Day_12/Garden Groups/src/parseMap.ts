export function parseMap(input: string): string[][] {
  // Split into lines, trim whitespace, and filter out empty lines
  const lines = input
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  // Convert each line into array of characters
  return lines.map((line) => line.split(''))
}
