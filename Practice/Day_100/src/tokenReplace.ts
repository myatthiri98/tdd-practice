export function tokenReplace(
  str: string,
  tokens: Record<string, string>,
): string {
  let result = str

  for (const [key, value] of Object.entries(tokens)) {
    result = result.split(key).join(value) // replaceAll polyfill
  }

  return result
}
