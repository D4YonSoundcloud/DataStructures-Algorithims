//builds up the sort by gradually creating a larger left half which is always sorted

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j+1] = currentVal;
    console.log(arr);
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);


//time complexity, worst case is 0(n^2)
//but if data is almost sorted, then it can be near 0(n)
//can be an online algorithim, can sort as its submitted