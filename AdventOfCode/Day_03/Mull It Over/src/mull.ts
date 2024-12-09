export function sumOfValidMultiplications(input: string): number {
  const multiplicationPattern = /mul\((\d{1,3}),(\d{1,3})\)/g
  const matches = [...input.matchAll(multiplicationPattern)]

  const parse = (match: string): number => parseInt(match, 10)

  return matches.reduce(
    (sum, [_, firstMatch, secondMatch]) =>
      sum + parse(firstMatch) * parse(secondMatch),
    0,
  )
}
