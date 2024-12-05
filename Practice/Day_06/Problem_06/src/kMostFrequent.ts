type FrequencyMap = Map<number, number>
type FrequencyEntry = [number, number] // [number, frequency]

export function kMostFrequent(nums: number[], k: number): number[] {
  if (!nums.length || k <= 0) return []

  const frequencies = buildFrequencyMap(nums)
  return findTopKElements(frequencies, k)
}

function buildFrequencyMap(nums: number[]): FrequencyMap {
  return nums.reduce((map, num) => {
    map.set(num, (map.get(num) || 0) + 1)
    return map
  }, new Map<number, number>())
}

function findTopKElements(frequencies: FrequencyMap, k: number): number[] {
  return Array.from(frequencies.entries())
    .sort(sortByFrequencyDescending)
    .slice(0, k)
    .map(extractNumber)
}

// Sort helper: sorts by frequency (descending) and then by number (ascending) for stable sort
function sortByFrequencyDescending(
  [aNum, aFreq]: FrequencyEntry,
  [bNum, bFreq]: FrequencyEntry,
): number {
  // If frequencies are different, sort by frequency
  if (aFreq !== bFreq) {
    return bFreq - aFreq
  }
  // If frequencies are same, sort by number for stable sort
  return aNum - bNum
}

// Map helper: extracts just the number from a frequency entry
function extractNumber([num]: FrequencyEntry): number {
  return num
}
