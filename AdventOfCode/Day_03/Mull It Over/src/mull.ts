export function sumOfValidMultiplications(input: string): number {
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const matches = [...input.matchAll(regex)]; // Use matchAll to get all matches

    return matches.reduce((sum, match) => {
        const x = parseInt(match[1], 10);
        const y = parseInt(match[2], 10);
        return sum + (x * y);
    }, 0);
}