import { describe, expect, it } from "vitest";
import { validAnagram } from "./validAnagram";

describe("Valid Anagram", () => {
  it("Should return true if two strings are anagrams", () => {
    expect(validAnagram("listen", "silent")).toBe(true);
  }),
    it("Should return false if two strings are not anagrams", () => {
      expect(validAnagram("hello", "world")).toBe(false);
    });
  it("Should return false if strings have different lengths", () => {
    expect(validAnagram("abc", "abcd")).toBe(false); 
  });
});
