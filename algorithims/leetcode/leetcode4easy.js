//given an array of intergers A, sorted in non-decreasing order, return an array of the squares
//of each number, also in sorted non-decreasing order;
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

var sortedSquares = function(A) {
  let low = 0;
  let high = A.length - 1; //5
  let newArr = Array(A.length - 1).fill(0); // [0,0,0,0,0] // [0,0,0,0,100]// [0,0,0,16,100] // [0,0,9,16,100] // [0,1,9,16,100] 
  let highestIdx = A.length - 1; //5

  while (low <= high) {
    let lowSq = A[low] * A[low]; // -4 * -4 // -4 * -4 // -1 * -1 // -1 * -1//
    let highSq = A[high] * A[high]; // 10 * 10 // 3 * 3 // 3 * 3 // 0 * 0//

    if (lowSq > highSq) { // false // true // false 
      newArr[highestIdx] = lowSq; //  //16 // 1
      low++; //0 // 1 // 2
    } else {
      newArr[highestIdx] = highSq; // 100  // 9 // 
      high--; //5 // 3 // 
    }
    highestIdx--; // 4 // 2  
  }
  return newArr;
};
