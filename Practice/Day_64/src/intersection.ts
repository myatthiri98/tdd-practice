export const intersection = (a: number[], b: number[]): number[] => {
  return [...new Set(a.filter((num) => b.includes(num)))].sort((x, y) => x - y)
}
