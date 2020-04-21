//swap indexes in array
function swap(arr, index1, idx2) {
  var temp = arr[index1]; // [2]
  arr[index1] = arr[idx2]; // [4]
  arr[idx2] = temp; // [2]     [4,2]
}

[2, 4, 5, 6];

//es2015 version
const swap = (arr, index1, idx2) => {
  [arr[index1], arr[idx2]] = [arr[idx2], arr[index1]];
};

//Bubble sort
//naive
function bubbleSortNaive(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSortNaive([37, 45, 29, 8]);

//good version
function bubbleSortGood(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSortGood([37, 45, 29, 8]);

//es6 version
function bubbleSortES6(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index1], arr[index2]];
  };

  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSortES6([37, 45, 29, 8]);


//optomized solution if almost sorted
function bubbleSortOptimized(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
      for (var j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      if(noSwaps) {
        break;
      }
    }
    return arr;
  }
  
  bubbleSortOptimized([8,1,2,3,4,5,6,7]);



// BubbleSort time complexity is 0(n^2);

//if almost sorted, best case could almost be 0(n);