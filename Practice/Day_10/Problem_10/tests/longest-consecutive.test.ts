// longest-consecutive.test.ts
import { describe, expect, it } from "vitest";
import { findLongestConsecutiveSequence } from "../src/longest-consecutive";

describe('findLongestConsecutiveSequence', () => {
    it.each([
        {
            name: 'empty array',
            input: [],
            expected: 0
        },
        {
            name: 'single element',
            input: [1],
            expected: 1
        },
        {
            name: 'simple consecutive sequence',
            input: [1, 2, 3],
            expected: 3
        },
        {
            name: 'duplicate numbers',
            input: [1, 1, 2, 2, 3, 3],
            expected: 3
        },
        {
            name: 'non-consecutive array',
            input: [2, 20, 4, 10, 3, 4, 5],
            expected: 4
        },
        {
            name: 'negative numbers',
            input: [-3, -2, -1, 0, 1],
            expected: 5
        },
        {
            name: 'multiple sequences',
            input: [0, 3, 2, 5, 4, 6, 1, 1],
            expected: 7
        }
    ])('should handle $name correctly', ({ input, expected }) => {
        expect(findLongestConsecutiveSequence(input)).toBe(expected);
    });

    it('should handle large input efficiently', () => {
        const largeInput = Array.from({ length: 1000 }, (_, i) => i + 1);
        const shuffled = largeInput.sort(() => Math.random() - 0.5);
        
        const start = performance.now();
        const result = findLongestConsecutiveSequence(shuffled);
        const end = performance.now();
        
        expect(result).toBe(1000);
        expect(end - start).toBeLessThan(100);
    });
});