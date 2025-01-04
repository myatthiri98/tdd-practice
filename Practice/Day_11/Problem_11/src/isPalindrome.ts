export function isPalindrome(s: string): boolean {
  const filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  let left = 0,
    right = filtered.length - 1

  while (left < right) {
    if (filtered[left] !== filtered[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
