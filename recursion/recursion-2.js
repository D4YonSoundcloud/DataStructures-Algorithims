function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(3);

//base case 1 // recursive call is num + sumRange(num - 1);

// sumRange(3)
//     return 3 + sumRange(2)
//         return 2 + sumRange(1)
//             return 1
//                   3 + 2 + 1 = 6
