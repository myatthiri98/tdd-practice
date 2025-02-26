export function minWindow(s: string, t: string): string {
  if (!s || !t) return '' // If either string is empty, return ""

  // Frequency map for characters in t
  const tCount = new Map<string, number>()
  for (const char of t) {
    tCount.set(char, (tCount.get(char) || 0) + 1)
  }

  // Sliding window variables
  let left = 0
  let right = 0
  let requiredChars = tCount.size
  let formedChars = 0

  // To store the window counts of characters
  const windowCount = new Map<string, number>()

  // The result variables
  let minLen = Infinity
  let minWindow = ''

  while (right < s.length) {
    // Add character at `right` to the window
    const charRight = s[right]
    windowCount.set(charRight, (windowCount.get(charRight) || 0) + 1)

    // If the character at `right` fulfills the required count in `t`
    if (windowCount.get(charRight) === tCount.get(charRight)) {
      formedChars++
    }

    // Try to shrink the window if all required characters are in place
    while (left <= right && formedChars === requiredChars) {
      const windowSize = right - left + 1
      if (windowSize < minLen) {
        minLen = windowSize
        minWindow = s.slice(left, right + 1)
      }

      // Remove the character at `left` and shrink the window
      const charLeft = s[left]
      windowCount.set(charLeft, windowCount.get(charLeft)! - 1)
      if (windowCount.get(charLeft)! < tCount.get(charLeft)!) {
        formedChars--
      }
      left++
    }

    // Expand the window by moving `right` pointer
    right++
  }

  return minWindow
}
