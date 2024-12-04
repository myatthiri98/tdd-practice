export function groupAnagrams(strs: string[]): string[][] {
  const anagramGroups: Record<string, string[]> = {}

  for (const str of strs) {
    // Create a sorted "signature" for the current string
    const signature = [...str].sort().join('')

    // Add the string to its corresponding group
    if (!anagramGroups[signature]) {
      anagramGroups[signature] = []
    }
    anagramGroups[signature].push(str)
  }

  // Return all the grouped anagrams as an array of arrays
  return Object.values(anagramGroups)
}
