export function isConsistent(levels: number[]): boolean{
    const increasing = levels.every((_,i)=> i === 0 || levels[i] > levels[i -1])
    const decreasing = levels.every((_,i)=> i === 0 || levels[i] < levels[i -1])
    return increasing || decreasing
}

export function hasValidSteps(levels: number[]): boolean {
    return levels.every((_, i) => i === 0 || Math.abs(levels[i] - levels[i - 1]) >= 1 && Math.abs(levels[i] - levels[i - 1]) <= 3);
  }
  