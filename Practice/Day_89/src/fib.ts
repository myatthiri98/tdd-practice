export function fib(n: number): number {
  if (n === 0) return 0
  if (n === 1) return 1

  let prev = 0,
    curr = 1
  for (let i = 2; i <= n; i++) {
    let next = prev + curr
    prev = curr
    curr = next
  }

  return curr
}

// function fib(n, memo = {}) {
//     if (n in memo) return memo[n];  // If already computed, return from cache
//     if (n === 0) return 0;          // Base case 1
//     if (n === 1) return 1;          // Base case 2

//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);  // Store the computed value
//     return memo[n];
// }

// console.log(fib(50)); // Output: 12586269025 (Runs much faster!)
