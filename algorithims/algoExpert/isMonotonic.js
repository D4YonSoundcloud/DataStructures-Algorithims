function isMonotonic(arr) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) isNonDecreasing = false;
    if (arr[i] > arr[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}
