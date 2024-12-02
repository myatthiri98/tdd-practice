import { describe, it, expect } from "vitest";
import { isConsistent, hasValidSteps } from "../src/utils";

describe("isConsistent", () => {
  it("should return true for increasing levels", () => {
    expect(isConsistent([1, 2, 3, 4])).toBe(true);
  });

  it("should return true for decreasing levels", () => {
    expect(isConsistent([4, 3, 2, 1])).toBe(true);
  });

  it("should return false for inconsistent levels", () => {
    expect(isConsistent([1, 3, 2, 4])).toBe(false);
  });
});

describe("hasValidSteps", () => {
  it("should return true if all differences are within 1-3", () => {
    expect(hasValidSteps([1, 3, 6, 9])).toBe(true);
  });

  it("should return false if any difference is out of range", () => {
    expect(hasValidSteps([1, 2, 7, 8])).toBe(false);
  });
});
