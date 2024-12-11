function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error, or use a default value
  }
  return a + b; // Original code
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(1, undefined)); // Output: 0
console.log(foo(undefined, undefined)); // Output: 0