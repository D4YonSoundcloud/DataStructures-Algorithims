function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return unm * factorial(num - 1);
}

factorial(4);

// irative solution
// function factorial(num) {
//     let total = 1;
//     for( let i = num; i > 1; i--) {
//         total *= i;
//     }
//     return total;
// } time complexity O(n)
