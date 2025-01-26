// longestSubstring.ts
export function characterReplacement(s: string, k: number): number {
  let left = 0
  let maxFreq = 0
  let maxLength = 0
  const charCount: Record<string, number> = {}

  for (let right = 0; right < s.length; right++) {
    // Add current character to the count
    charCount[s[right]] = (charCount[s[right]] || 0) + 1

    // Track the maximum frequency of a single character in the current window
    maxFreq = Math.max(maxFreq, charCount[s[right]])

    // Check if the window is valid: number of replacements needed <= k
    if (right - left + 1 - maxFreq > k) {
      charCount[s[left]] -= 1
      left++ // Shrink the window from the left
    }

    // Update the maximum length
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}
