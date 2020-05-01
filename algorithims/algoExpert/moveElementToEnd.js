function moveElementToEnd(arr, toMove) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    while (i < j && arr[j] === toMove) {
      j--;
    }
    if (arr[i] === toMove) {
      swap(i, j, array);
    }
    i++;
  }
  return arr;
}

function swap(i, j, arr) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

//time complexity is O(n), with n being the length of the array
//space complexity is O(1), due to mutating array in place
