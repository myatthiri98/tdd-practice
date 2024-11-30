export function validAnagram(firstString: string, secondString: string): boolean {
    if (firstString.length !== secondString.length) return false;

  
    const sortedFirst = firstString.split("").sort().join("");
    const sortedSecond = secondString.split("").sort().join("");
  
    return sortedFirst === sortedSecond;
  }
  