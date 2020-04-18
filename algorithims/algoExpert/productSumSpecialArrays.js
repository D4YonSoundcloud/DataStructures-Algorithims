function productSum(array, m = 1) {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, m + 1);
    } else {
      sum += element;
    }
  }
  return sum * m;
}

//time complexity if o(N) where is N is number of total elements in array
//space complexity if o(D) where D is the depth of the array
