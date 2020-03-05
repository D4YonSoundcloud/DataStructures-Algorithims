//almost like bubble sort, instead of first placing large values into sorted position
// it places small values in sorted position
// find min then place at end

//my attempt
function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    var min = 0;
    for (j = min; j < arr.length; j++) {
      if (arr[min] > arr[j + 1]) {
        var temp = arr[min];
        arr[min] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

selectionSort([34, 22, 10, 19, 17]);

//answer
function selectionSortAnswer(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (j = min + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      console.log(i, min);
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

selectionSortAnswer([34, 22, 10, 19, 17]);

//answer in ES6
function selectionSortES6(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (j = min + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
}

selectionSortES6([34, 22, 10, 19, 17]);

//time complexity is 0(n^2) since we have to compare every element to every element
//only better than bubble in one scenario, when you want to minimize swaps