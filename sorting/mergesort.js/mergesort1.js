// merge sort uses a divide and conquer method to sort an array, 
// by splitting an array into arrays of a single element, comparing those elements, 
// and then combining them back together


//merge together arrays

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while ( i < arr1.length) {
      results.push(arr1[i]);
      i++;
  }
  while ( j < arr2.length) {
    results.push(arr2[j]);
    j++;
}
  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73,72,1,9]);

//time complexity
//best average and worst are all the same = O(n log n)
//why?
//splitting arrays (decomposition) is log n work,
//merging arrays is n work, O(n) comparisons per decomposition 
// n * log n 
//space complexity
//the space complexity is O(n)