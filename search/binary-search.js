//my attempt
function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  for (left; left < right; ) {
    let middle = (array[left] + array[right]) / 2;
    if (middle === val) {
      return arr[middle];
    }
    if (middle < left) {
      left = middle;
    }
    if (middle > right) {
      right = middle;
    }
  }
}

//solution
// function binarySearch2(arr, val) {
//   var start = 0;
//   var end = arr.length - 2;
//   var middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== val && start <= end) {
//     if (val < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if(arr[middle] == val) {
//       return middle;
//   } else {
//       return -1;
//   }
// }

function binarySearch2(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] == val ? middle : -1;
}

binarySearch2([1, 2, 3, 4, 5, 6, 7], 28);
