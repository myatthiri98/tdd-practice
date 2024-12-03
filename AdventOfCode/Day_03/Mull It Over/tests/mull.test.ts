import { describe, expect, it } from 'vitest'
import { sumOfValidMultiplications } from '../src/mull'

describe('Mull it over', () => {
  it("should return 8 for 'mul(2,4)'", () => {
    const input = 'mul(2,4)'
    const result = sumOfValidMultiplications(input)
    expect(result).toBe(8)
  })

  it("should return 161 for the example input", () => {
    const input = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'
    const result = sumOfValidMultiplications(input)
    expect(result).toBe(161)
  })

  it("should return 77 for 'mul(3,5) mul(7,8)'", () => {
    const input = "mul(3,5) mul(7,8)";
    const result = sumOfValidMultiplications(input);
    expect(result).toBe(3*5 + 7*8); // 77
  })
  it("should ignore invalid instructions and return 64 for 'mul(8,8)mul(a,2)mul(3,4'", () => {
    const input = "mul(8,8)mul(a,2)mul(3,4";
    const result = sumOfValidMultiplications(input);
    expect(result).toBe(8*8); // 64
  })
  it("should handle complex input with noise", () => {
    const input = "xmul(2,4)%&mul[3,7]!mul(11,8)mul(8,5)";
    const result = sumOfValidMultiplications(input);
    expect(result).toBe(2*4 + 11*8 + 8*5); // 114
  })
  it("should return 0 if there are no valid mul instructions", () => {
    const input = "randomtext";
    const result = sumOfValidMultiplications(input);
    expect(result).toBe(0);
  })
})
