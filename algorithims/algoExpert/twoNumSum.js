function twoNumSum(arr, sum) {
  const nums = {};
  for (const num in arr) {
    const y = sum - num;
    if (y in nums) return [y, num];
    nums[num] = true;
  }
  return [];
}

function twoNumSum2(arr, sum) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (left + right === sum) {
      return arr[(left, right)];
    } else if (left + right < sum) {
      left++;
    } else if (left + right > sum) {
      right--;
    }
  }
  return [];
}
