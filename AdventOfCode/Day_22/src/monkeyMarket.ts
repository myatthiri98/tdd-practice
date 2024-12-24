export class MonkeyMarket {
  private readonly MOD = 16777216

  generateNextSecret(secret: number): number {
    let result = secret >>> 0

    // Step 1: Multiply by 64
    let r1 = (result * 64) >>> 0
    result = ((result ^ r1) >>> 0) % this.MOD

    // Step 2: Divide by 32
    let r2 = (result / 32) >>> 0
    result = ((result ^ r2) >>> 0) % this.MOD

    // Step 3: Multiply by 2048
    let r3 = (result * 2048) >>> 0
    result = ((result ^ r3) >>> 0) % this.MOD

    return result
  }

  generateNthSecret(initialSecret: number, n: number): number {
    let current = initialSecret
    for (let i = 0; i < n; i++) {
      current = this.generateNextSecret(current)
    }
    return current
  }

  solve(inputs: number[]): number {
    return inputs
      .map((initial) => this.generateNthSecret(initial, 2000))
      .reduce((sum, current) => sum + current, 0)
  }
}
