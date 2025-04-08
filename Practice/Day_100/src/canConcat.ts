export const canConcat = (
    target: string,
    words: string[],
    memo: Record<string, boolean> = {}
  ): boolean => {
    if (target in memo) return memo[target];
    if (target === "") return true;
  
    for (const word of words) {
      if (target.startsWith(word)) {
        const suffix = target.slice(word.length);
        if (canConcat(suffix, words, memo)) {
          memo[target] = true;
          return true;
        }
      }
    }
  
    memo[target] = false;
    return false;
  };
  