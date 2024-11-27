import { describe, it, expect } from "vitest";
import { add } from "./sum";

describe("add", () => {
  it("should return the sum of two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should return 0 when both numbers are 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  it("should handle negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it("should handle mixed positive and negative numbers", () => {
    expect(add(-1, 2)).toBe(1);
  });
});
