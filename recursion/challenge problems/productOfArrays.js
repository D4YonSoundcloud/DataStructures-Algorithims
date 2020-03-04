function productOfArrays(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArrays(arr.slice(1));
}

productOfArrays([1, 2, 3, 4]);
