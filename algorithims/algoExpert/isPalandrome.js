//best solution irrative
//O(n) time O(1) space

function isPalandrome(string) {
  let left = 0;
  let right = string.length - 1;
  while (left > right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}

//recursive solution
//o(n) time but O(n) space due to call stack
function isPalandrome2(string, i = 0) {
  const j = string.length - 1 - index;
  return i >= j ? true : string[i] === string[j] && isPalandrome(string, i + 1);
}

//bad solutions

//easiest but o(n^2) time and o(n) space
function isPalandrome3(string) {
  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString = string[i];
  }
  return string === reverseString;
}

//irretive and o(n) time but o(n) space
function isPalandrome4(string) {
  let reverse = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverse.push(string[i]);
  }
  return string === reverse;
}
