//like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
//works by selecting one element (called the pivot)
//and finding the index where the pivot should end up in the sorted array
//once the pivot is positioned appropraitely, quick sort can be applied on either side of the pivot

// pivot helper

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  var pivot = arr[start];
  var swapIndex = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

//pivot code should return 3
pivot([4, 8, 2, 1, 5, 7, 6, 3]);

//es2015 version pivotHelper
function pivotES6(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

//quicksort full function

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3 // 1 // 3 // 5
    //left
    quickSort(arr, left, pivotIndex - 1); // 2 // 1
    //right
    quickSort(arr, pivotIndex + 1, right); // 5 // 9
  }
  return arr; // [1,2,3,4] then [1,2,3,4,5,6,9]
}

quickSort([4, 6, 9, 1, 2, 5, 3]);
//[4,6,9,1,2,5,3]
//[3,2,1,4,6,9,5]
//       4
// 3,2,1   6,9,5
//     3     6
// 2,1     5   9
//   2    
// 1
//[1,2,3,4,5,6,9]

//time complexity is O(n log n) for best and average, worst is O(n^2)
//O(log n) for decomposition, but swap takes O(n)

//worst case
//if using the first element, then an already sorted array is O(n^2)
//O(n) for decompositions, and swap is O(n)
//problem is when pivot is either minimum or maximum element
//solution is to either pivot around a random or middle element

//space complexity
// O(n)