export function simulateBlinks(stones: number[], blinks: number): number[] {
  if (stones.length === 0 || blinks === 0) {
    return stones // No changes if no stones or no blinks
  }

  for (let i = 0; i < blinks; i++) {
    let newStones: number[] = []
    for (const stone of stones) {
      if (stone === 0) {
        newStones.push(1) // Rule 1
      } else if (String(stone).length % 2 === 0) {
        const s = String(stone)
        const mid = Math.floor(s.length / 2)
        const left = parseInt(s.slice(0, mid), 10)
        const right = parseInt(s.slice(mid), 10)
        newStones.push(left, right) // Rule 2
      } else {
        newStones.push(stone * 2024) // Rule 3
      }
    }
    stones = newStones
  }
  return stones
}
