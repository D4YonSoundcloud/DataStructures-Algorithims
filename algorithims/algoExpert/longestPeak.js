//[1,2,3,3,4,0,10,6,5,-2,-3,2,3]

function longestPeak(arr) {
  const longestPeakLength = 0;
  let i = 1;
  while (i < arr.length - 1) {
    const isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i];
    if (!isPeak) {
      i++;
      continue;
    }

    let leftIndex = i - 2;
    while (leftIndex >= 0 && arr[leftIndex] < arr[i - 1]) {
      i--;
    }
    let rightIndex = i + 2;
    while (rightIndex < arr.length && arr[i + 1] < arr[rightIndex]) {
      i++;
    }
    const currentPeakLength = rightIndex - leftIndex - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    //used to breakout of loop and skip to the next peak after finding peak length
    i = rightIndex;
  }
  return longestPeakLength;
}
