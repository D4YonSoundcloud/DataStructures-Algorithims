//Time and Space complexity
// time = o(n), n being the length of the arr
// space = o(1), since arrays are constant space

function findThreeLargest(arr) {
  const threeLargest = [null, null, null];
  for (const num of arr) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

function update(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

function shiftAndUpdate(arr, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (arr[i] === idx) {
      arr[i] = num;
    } else {
      arr[i] = arr[i + 1];
    }
  }
}
