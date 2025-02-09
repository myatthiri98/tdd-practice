export function maxConsecutiveChars(S: string, K: number): number {
  // Helper function to find the longest sequence of `target` after flipping at most `K` characters.
  function getMaxConsecutive(target: '0' | '1'): number {
    let left = 0,
      maxLength = 0,
      flipsUsed = 0

    for (let right = 0; right < S.length; right++) {
      // If the current character is not `target`, it counts as a flip
      if (S[right] !== target) flipsUsed++

      // If flips exceed K, move the left pointer to maintain the limit
      while (flipsUsed > K) {
        if (S[left] !== target) flipsUsed-- // Reduce flip count
        left++ // Shrink the window
      }

      // Update maximum consecutive length
      maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
  }

  // Find the maximum length by flipping `0`s to `1`s or `1`s to `0`s
  return Math.max(getMaxConsecutive('1'), getMaxConsecutive('0'))
}
