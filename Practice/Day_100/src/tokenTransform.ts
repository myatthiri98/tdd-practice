export function tokenTransform(
  input: string,
  tokens: Record<string, string>,
): string {
  const resolved: Record<string, string> = {}

  function resolve(token: string): string {
    if (resolved[token]) return resolved[token]
    const value = tokens[token]
    const result = value.replace(/\$[A-Z0-9_]+\$/g, (match) => resolve(match))
    resolved[token] = result
    return result
  }

  return input.replace(/\$[A-Z0-9_]+\$/g, (match) => resolve(match))
}
