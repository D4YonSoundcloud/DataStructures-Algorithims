function threeNumberSum(arr, targetSum) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length - 2; i++) {
    let left = 0;
    let right = index.length - 1;
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === targetSum) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right++;
      }
    }
  }
  return triplets;
}

//time complexity is O(n^2) due to having two loops, a while and a for
//space complexity is O(n) due to having to create an array, where is the length of the array
