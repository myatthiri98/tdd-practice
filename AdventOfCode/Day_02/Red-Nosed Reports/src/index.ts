import { isConsistent, hasValidSteps } from "./utils";
import { readFileSync } from "fs";

/**
 * Reads input from a file and parses reports.
 */
function parseInput(filePath: string): number[][] {
  const data = readFileSync(filePath, "utf8");
  return data
    .trim()
    .split("\n")
    .map(line => line.split(" ").map(Number));
}

/**
 * Counts the number of safe reports based on the rules.
 */
export function countSafeReports(reports: number[][]): number {
  return reports.filter(report => isConsistent(report) && hasValidSteps(report)).length;
}

if (require.main === module) {
  const reports = parseInput("AdventOfCode/Day_02/Red-Nosed Reports/input.txt");
  const result = countSafeReports(reports);
  console.log(`Safe Reports: ${result}`);
}
