function compare(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false; // Handle NaN explicitly
  } else if (a < b) {
    return -1; 
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

console.log(compare(1, 2)); // Output: -1
console.log(compare(2, 1)); // Output: 1
console.log(compare(2, 2)); // Output: 0
console.log(compare(NaN, NaN)); // Output: false
console.log(compare(NaN, 2)); // Output: false
console.log(compare(2, NaN)); //Output: false