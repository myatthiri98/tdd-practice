import { describe, it, expect } from "vitest";
import { countSafeReports } from "../src/index";

describe("countSafeReports", () => {
  it("should count safe reports correctly", () => {
    const reports = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ];

    expect(countSafeReports(reports)).toBe(2);
  });
});
