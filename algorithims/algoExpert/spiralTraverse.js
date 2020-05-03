function spiralTraverse(arr) {
  let result = [];
  let startRow = 0;
  let endRow = arr.length - 1;
  let startCol = 0;
  let endCol = arr[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(arr[startRow][col]);
    }
    for (let row = startRow; row <= endRow; row++) {
      result.push(arr[row][endCol]);
    }

    //traverses in reverse
    for (let col = endCol - 1; col >= startCol; col--) {
      //for edges cases that have one middle element like a 3x3 or 5x5
      if (startRow === endRow) break;
      result.push(arr[endRow][col]);
    }
    //traverses in reverse
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(arr[row][endCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}

//time complexity is O(n) where n is the number of elements in the array
//space complexity is O(n) more like O(1) though