//  Given the array nums,
// for each nums[i] find out how many numbers
//  in the array are smaller than it.
//  That is, for each nums[i]
//  you have to count the number of valid j's
//  such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

//my solution
var smallerNumbersThanCurrent = function(nums) {
  let newNums = [];
  for (i = 0; i < nums.length; i++) {
    nums[i] > nums[i + 1] ? (newNums[i] += 1) : newNums[i];
  }

  return newNums;
};


//real solution

var smallerNumbersThanCurrent = function(nums) {
  let map = new Map();
  let arr = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) if (!map.has(arr[i])) map.set(arr[i], i);
  for (let i = 0; i < arr.length; i++) nums[i] = map.get(nums[i]);
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
