function smallestDifference(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let indexOne = 0;
  let indexTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (indexOne < arr1.length && indexTwo < arr2.length) {
    let firstNum = arr1[indexOne];
    let secondNum = arr2[indexTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      indexOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      indexTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}

//time complexity is O(NlogN + MlogM)
//space complexity is O(1)
