// longest-consecutive.ts

/**
 * Finds the length of the longest consecutive sequence in an array of numbers.
 * A consecutive sequence is where each element is exactly 1 greater than the previous element.
 * Elements do not need to be consecutive in the original array.
 * 
 * @example
 * findLongestConsecutiveSequence([2, 20, 4, 10, 3, 4, 5]) // returns 4 ([2,3,4,5])
 * findLongestConsecutiveSequence([0, 3, 2, 5, 4, 6, 1, 1]) // returns 7 ([0,1,2,3,4,5,6])
 * 
 * Time Complexity: O(n) - we iterate through the array once to create the set,
 * and for the sequence checking, each number is only visited once.
 * Space Complexity: O(n) - we store all numbers in a set.
 * 
 * @param nums - Array of integers where -10^9 <= nums[i] <= 10^9
 * @returns Length of the longest consecutive sequence
 */
export function findLongestConsecutiveSequence(nums: number[]): number {
    // Handle empty array case
    if (nums.length === 0) return 0;
    
    // Convert array to Set for O(1) lookups and remove duplicates
    const numSet: Set<number> = new Set(nums);
    let maxLength: number = 1;
    
    // Iterate through each unique number
    for (const num of numSet) {
        // Skip if this number is not the start of a sequence
        if (numSet.has(num - 1)) continue;
        
        let currentNum: number = num;
        let currentLength: number = 1;
        
        // Count consecutive numbers
        while (numSet.has(currentNum + 1)) {
            currentNum++;
            currentLength++;
        }
        
        // Update maximum length if current sequence is longer
        maxLength = Math.max(maxLength, currentLength);
    }
    
    return maxLength;
}